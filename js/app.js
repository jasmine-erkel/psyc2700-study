/* ===== APP.JS — Tab navigation, week rendering, add-week form ===== */

(function () {
  "use strict";

  // --- State ---
  let activeWeekId = null;
  let quizMode = false;
  let selectedWeekIds = new Set();
  let currentView = "week"; // "week" | "add" | "quiz"

  // --- DOM refs ---
  const tabBar = document.getElementById("tab-bar");
  const content = document.getElementById("content");
  const btnQuizMode = document.getElementById("btn-quiz-mode");
  // const btnAddWeek = document.getElementById("btn-add-week");
  const quizControls = document.getElementById("quiz-controls");
  const btnStartQuiz = document.getElementById("btn-start-quiz");

  // --- Data helpers ---
  function getAllWeeks() {
    const custom = JSON.parse(localStorage.getItem("psyc2700_custom_weeks") || "[]");
    const merged = [...WEEKS, ...custom];
    merged.sort((a, b) => a.id - b.id);
    return merged;
  }

  // --- Tab rendering ---
  function renderTabs() {
    const weeks = getAllWeeks();
    tabBar.innerHTML = "";

    weeks.forEach((week) => {
      const tab = document.createElement("button");
      tab.className = "tab";
      if (week.isBreak) tab.classList.add("break");
      if (week.id === activeWeekId && !quizMode) tab.classList.add("active");

      if (quizMode && !week.isBreak) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "tab__checkbox";
        checkbox.checked = selectedWeekIds.has(week.id);
        checkbox.addEventListener("change", (e) => {
          e.stopPropagation();
          if (checkbox.checked) {
            selectedWeekIds.add(week.id);
          } else {
            selectedWeekIds.delete(week.id);
          }
        });
        tab.appendChild(checkbox);
      }

      const label = document.createElement("span");
      label.textContent = week.label;
      tab.appendChild(label);

      if (!week.isBreak) {
        tab.addEventListener("click", (e) => {
          if (quizMode) {
            const cb = tab.querySelector(".tab__checkbox");
            if (cb && e.target !== cb) {
              cb.checked = !cb.checked;
              cb.dispatchEvent(new Event("change"));
            }
            return;
          }
          activeWeekId = week.id;
          currentView = "week";
          renderTabs();
          renderWeekView(week);
        });
      }

      tabBar.appendChild(tab);
    });
  }

  // --- Week view rendering ---
  function renderWeekView(week) {
    if (week.isBreak) {
      content.innerHTML = '<div class="week-view__break">Spring Break -- No Class</div>';
      return;
    }

    let html = '<div class="week-view">';
    html += '<div class="week-view__header">';
    html += `<div class="week-view__label">${week.label}</div>`;
    html += `<h2 class="week-view__topic">${week.topic}</h2>`;
    html += `<div class="week-view__dates">${week.dates}</div>`;
    html += "</div>";

    // Readings
    if (week.readings && week.readings.length > 0) {
      html += '<div class="week-view__section">';
      html += '<h3 class="week-view__section-title">Readings</h3>';
      html += '<ul class="week-view__list">';
      week.readings.forEach((r) => {
        html += `<li>Chapter ${r.chapter}, ${r.sections}: ${r.title}</li>`;
      });
      html += "</ul></div>";
    }

    // Key Concepts
    if (week.keyConcepts && week.keyConcepts.length > 0) {
      html += '<div class="week-view__section">';
      html += '<h3 class="week-view__section-title">Key Concepts</h3>';
      html += '<ul class="week-view__list">';
      week.keyConcepts.forEach((concept) => {
        html += `<li>${concept}</li>`;
      });
      html += "</ul></div>";
    }

    html += "</div>";
    content.innerHTML = html;
  }

  // --- Add week form ---
  function renderAddForm() {
    currentView = "add";
    activeWeekId = null;
    renderTabs();

    let html = '<div class="add-form">';
    html += '<h2 class="add-form__title">Add New Week</h2>';
    html += '<div class="form-group"><label>Week Number</label>';
    html += '<input type="number" id="add-week-id" min="1" placeholder="e.g. 11"></div>';
    html += '<div class="form-group"><label>Dates</label>';
    html += '<input type="text" id="add-week-dates" placeholder="e.g. Mar 24, 26"></div>';
    html += '<div class="form-group"><label>Topic</label>';
    html += '<input type="text" id="add-week-topic" placeholder="e.g. Emotional Development"></div>';
    html += '<div class="form-group"><label>Readings</label>';
    html += '<div id="readings-container">';
    html += renderReadingEntry(0);
    html += "</div>";
    html += '<button class="btn btn--secondary" id="btn-add-reading" style="margin-top:0.25rem">+ Add Reading</button></div>';
    html += '<div class="form-group"><label>Key Concepts (one per line)</label>';
    html += '<textarea id="add-week-concepts" placeholder="Enter key concepts, one per line"></textarea></div>';
    html += '<div class="add-form__actions">';
    html += '<button class="btn btn--primary" id="btn-save-week">Save Week</button>';
    html += '<button class="btn btn--secondary" id="btn-cancel-add">Cancel</button>';
    html += "</div></div>";

    content.innerHTML = html;

    let readingCount = 1;
    document.getElementById("btn-add-reading").addEventListener("click", () => {
      const container = document.getElementById("readings-container");
      container.insertAdjacentHTML("beforeend", renderReadingEntry(readingCount++));
    });

    document.getElementById("btn-save-week").addEventListener("click", saveWeek);
    document.getElementById("btn-cancel-add").addEventListener("click", () => {
      currentView = "week";
      if (activeWeekId) {
        const w = getAllWeeks().find((w) => w.id === activeWeekId);
        if (w) renderWeekView(w);
      } else {
        content.innerHTML = '<div class="empty-state"><p>Select a week to view its content.</p></div>';
      }
      renderTabs();
    });
  }

  function renderReadingEntry(index) {
    return `<div class="reading-entry">
      <input type="number" placeholder="Ch #" class="reading-chapter" min="1">
      <input type="text" placeholder="Sections (e.g. 5.1 - 5.3)" class="reading-sections">
      <input type="text" placeholder="Title" class="reading-title">
    </div>`;
  }

  function saveWeek() {
    const id = parseInt(document.getElementById("add-week-id").value);
    const dates = document.getElementById("add-week-dates").value.trim();
    const topic = document.getElementById("add-week-topic").value.trim();
    const conceptsRaw = document.getElementById("add-week-concepts").value.trim();

    if (!id || !dates || !topic) {
      alert("Please fill in week number, dates, and topic.");
      return;
    }

    const allWeeks = getAllWeeks();
    if (allWeeks.some((w) => w.id === id)) {
      alert("A week with that number already exists.");
      return;
    }

    const readings = [];
    const chapters = document.querySelectorAll(".reading-chapter");
    const sections = document.querySelectorAll(".reading-sections");
    const titles = document.querySelectorAll(".reading-title");
    for (let i = 0; i < chapters.length; i++) {
      const ch = parseInt(chapters[i].value);
      const sec = sections[i].value.trim();
      const title = titles[i].value.trim();
      if (ch && sec && title) {
        readings.push({ chapter: ch, sections: sec, title: title });
      }
    }

    const keyConcepts = conceptsRaw
      ? conceptsRaw.split("\n").map((s) => s.trim()).filter(Boolean)
      : [];

    const newWeek = {
      id: id,
      label: "Week " + id,
      dates: dates,
      topic: topic,
      readings: readings,
      keyConcepts: keyConcepts,
      isBreak: false,
    };

    const custom = JSON.parse(localStorage.getItem("psyc2700_custom_weeks") || "[]");
    custom.push(newWeek);
    localStorage.setItem("psyc2700_custom_weeks", JSON.stringify(custom));

    activeWeekId = id;
    currentView = "week";
    renderTabs();
    renderWeekView(newWeek);
  }

  // --- Quiz mode toggle ---
  function toggleQuizMode() {
    quizMode = !quizMode;
    btnQuizMode.classList.toggle("active", quizMode);
    btnQuizMode.textContent = quizMode ? "Back to Overview" : "Quiz Mode";
    quizControls.classList.toggle("hidden", !quizMode);

    if (!quizMode) {
      selectedWeekIds.clear();
      currentView = "week";
      if (activeWeekId) {
        const w = getAllWeeks().find((w) => w.id === activeWeekId);
        if (w) renderWeekView(w);
      } else {
        content.innerHTML = '<div class="empty-state"><p>Select a week to view its content.</p></div>';
      }
    } else {
      content.innerHTML = '<div class="empty-state"><p>Start a cumulative quiz or select specific weeks above.</p></div>';
    }

    renderTabs();
  }

  // --- Event listeners ---
  btnQuizMode.addEventListener("click", toggleQuizMode);
  // btnAddWeek.addEventListener("click", renderAddForm);
  btnStartQuiz.addEventListener("click", () => {
    if (selectedWeekIds.size === 0) {
      alert("Select at least one week.");
      return;
    }
    if (typeof startQuiz === "function") {
      startQuiz(Array.from(selectedWeekIds), 0, "week");
    }
  });

  document.getElementById("btn-cumulative").addEventListener("click", () => {
    const allWeeks = getAllWeeks().filter(w => !w.isBreak);
    allWeeks.forEach(w => selectedWeekIds.add(w.id));
    renderTabs();
    if (typeof startQuiz === "function") {
      startQuiz(allWeeks.map(w => w.id), 0, "cumulative");
    }
  });

  // --- Expose for quiz.js ---
  window.appExitQuiz = function () {
    quizMode = false;
    selectedWeekIds.clear();
    btnQuizMode.classList.remove("active");
    btnQuizMode.textContent = "Quiz Mode";
    quizControls.classList.add("hidden");
    currentView = "week";
    content.innerHTML = '<div class="empty-state"><p>Select a week to view its content.</p></div>';
    renderTabs();
  };

  // --- Init ---
  renderTabs();
})();
