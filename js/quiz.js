/* ===== QUIZ.JS — Quiz engine: selection, scoring, review ===== */

(function () {
  "use strict";

  const content = document.getElementById("content");

  let currentQuestions = [];
  let currentIndex = 0;
  let answers = []; // { questionId, selectedAnswer, isCorrect }
  let answered = false;
  let quizWeekIds = [];
  let quizMaxQuestions = 0;
  let quizMode = "week"; // "week" | "cumulative"

  function isMidtermQuestion(q) {
    return MIDTERM_IDS.has(q.id);
  }

  function isQuizQuestion(q) {
    return q.id.startsWith("cq") && !isMidtermQuestion(q);
  }

  function isTextbookQuestion(q) {
    return !q.id.startsWith("cq");
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // --- Start quiz (called from app.js) ---
  // mode: "week" = quiz questions first, "cumulative" = midterm questions first
  window.startQuiz = function (weekIds, maxQuestions, mode) {
    quizWeekIds = weekIds;
    quizMaxQuestions = maxQuestions;
    quizMode = mode || "week";

    const allForWeeks = QUESTIONS.filter((q) =>
      q.weekIds.some((wid) => weekIds.includes(wid))
    );

    let startPool;
    if (quizMode === "cumulative") {
      // Cumulative: midterm questions first
      startPool = allForWeeks.filter((q) => isMidtermQuestion(q));
    } else {
      // Individual week: quiz questions only (no midterm)
      startPool = allForWeeks.filter((q) => isQuizQuestion(q));
    }

    // Fallback to all questions if no primary pool
    if (startPool.length === 0) startPool = allForWeeks;
    launchQuizWith(startPool, maxQuestions);
  };

  function launchQuizWith(questions, maxQuestions) {
    if (questions.length === 0) {
      content.innerHTML =
        '<div class="empty-state"><p>No questions available for the selected weeks yet.</p></div>';
      return;
    }

    let pool = shuffle(questions);
    if (maxQuestions > 0 && maxQuestions < pool.length) {
      pool = pool.slice(0, maxQuestions);
    }
    currentQuestions = pool;
    currentIndex = 0;
    answers = [];
    answered = false;
    renderQuestion();
  }

  // --- Render a question ---
  function renderQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];
    const total = currentQuestions.length;
    const pct = ((currentIndex / total) * 100).toFixed(0);

    let html = '<div class="quiz">';
    html += `<div class="quiz__progress">Question ${currentIndex + 1} of ${total}</div>`;
    html += '<div class="quiz__progress-bar">';
    html += `<div class="quiz__progress-fill" style="width:${pct}%"></div>`;
    html += "</div>";
    html += `<div class="quiz__question">${q.question}</div>`;

    if (q.type === "mc" || q.type === "tf") {
      html += '<div class="quiz__choices">';
      q.choices.forEach((choice, i) => {
        html += `<button class="quiz__choice" data-index="${i}">${choice}</button>`;
      });
      html += "</div>";
      html += '<div id="quiz-explanation"></div>';
      html += '<div class="quiz__actions">';
      html += '<button class="btn btn--primary disabled" id="btn-submit" disabled>Submit</button>';
      html += '<button class="btn btn--primary hidden" id="btn-next">Next</button>';
      html += "</div>";
    } else if (q.type === "short") {
      html += '<textarea class="quiz__short-input" id="short-answer" placeholder="Type your answer..."></textarea>';
      html += '<div id="quiz-explanation"></div>';
      html += '<div class="quiz__actions">';
      html += '<button class="btn btn--primary" id="btn-show-answer">Show Answer</button>';
      html += '<button class="btn btn--correct hidden" id="btn-got-it">Got it</button>';
      html += '<button class="btn btn--incorrect hidden" id="btn-missed-it">Missed it</button>';
      html += '<button class="btn btn--primary hidden" id="btn-next">Next</button>';
      html += "</div>";
    }

    html += "</div>";
    content.innerHTML = html;

    // Wire up events
    if (q.type === "mc" || q.type === "tf") {
      let selectedIndex = null;
      const choices = content.querySelectorAll(".quiz__choice");
      const btnSubmit = document.getElementById("btn-submit");

      choices.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (answered) return;
          // Deselect previous
          choices.forEach((b) => b.classList.remove("selected"));
          // Select this one
          btn.classList.add("selected");
          selectedIndex = parseInt(btn.dataset.index);
          btnSubmit.disabled = false;
          btnSubmit.classList.remove("disabled");
        });
      });

      btnSubmit.addEventListener("click", () => {
        if (selectedIndex === null || answered) return;
        handleMCAnswer(selectedIndex, q, choices);
        btnSubmit.classList.add("hidden");
      });
    } else if (q.type === "short") {
      document.getElementById("btn-show-answer").addEventListener("click", () => {
        handleShortReveal(q);
      });
    }
  }

  function handleMCAnswer(selectedIndex, q, choices) {
    answered = true;
    const isCorrect = selectedIndex === q.answer;

    choices.forEach((btn) => {
      btn.disabled = true;
      const idx = parseInt(btn.dataset.index);
      if (idx === q.answer) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("incorrect");
      }
    });

    answers.push({
      questionId: q.id,
      question: q.question,
      selectedAnswer: q.choices[selectedIndex],
      correctAnswer: q.choices[q.answer],
      isCorrect: isCorrect,
    });

    showExplanation(q, isCorrect);
    showNextButton();
  }

  function handleShortReveal(q) {
    document.getElementById("btn-show-answer").classList.add("hidden");
    const gotIt = document.getElementById("btn-got-it");
    const missedIt = document.getElementById("btn-missed-it");
    gotIt.classList.remove("hidden");
    missedIt.classList.remove("hidden");

    const explDiv = document.getElementById("quiz-explanation");
    explDiv.innerHTML = `<div class="quiz__explanation quiz__explanation--neutral">
      <strong>Model answer:</strong> ${q.answer}${q.explanation ? "<br><br>" + q.explanation : ""}</div>`;

    gotIt.addEventListener("click", () => {
      answered = true;
      answers.push({
        questionId: q.id,
        question: q.question,
        selectedAnswer: "(self-assessed)",
        correctAnswer: q.answer,
        isCorrect: true,
      });
      gotIt.classList.add("hidden");
      missedIt.classList.add("hidden");
      showNextButton();
    });

    missedIt.addEventListener("click", () => {
      answered = true;
      answers.push({
        questionId: q.id,
        question: q.question,
        selectedAnswer: "(self-assessed)",
        correctAnswer: q.answer,
        isCorrect: false,
      });
      gotIt.classList.add("hidden");
      missedIt.classList.add("hidden");
      showNextButton();
    });
  }

  function showExplanation(q, isCorrect) {
    if (!q.explanation) return;
    const explDiv = document.getElementById("quiz-explanation");
    const cls = isCorrect ? "quiz__explanation--correct" : "quiz__explanation--incorrect";
    explDiv.innerHTML = `<div class="quiz__explanation ${cls}">${q.explanation}</div>`;
  }

  function showNextButton() {
    const btnNext = document.getElementById("btn-next");
    btnNext.classList.remove("hidden");
    btnNext.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex < currentQuestions.length) {
        renderQuestion();
      } else {
        renderResults();
      }
    });
  }

  // --- Results screen ---
  function renderResults() {
    const correct = answers.filter((a) => a.isCorrect).length;
    const total = answers.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    let html = '<div class="quiz results">';
    html += `<div class="results__score">${pct}%</div>`;
    html += `<div class="results__label">${correct} out of ${total} correct</div>`;

    // Breakdown of missed questions
    const missed = answers.filter((a) => !a.isCorrect);
    if (missed.length > 0) {
      html += '<div class="results__breakdown">';
      html += '<h3 class="results__breakdown-title">Review Missed Questions</h3>';
      missed.forEach((a) => {
        html += '<div class="results__item results__item--incorrect">';
        html += `<div class="results__item-question">${a.question}</div>`;
        html += `<div class="results__item-answer">Correct answer: ${a.correctAnswer}</div>`;
        html += "</div>";
      });
      html += "</div>";
    }

    // Show correct ones too
    const got = answers.filter((a) => a.isCorrect);
    if (got.length > 0) {
      html += '<div class="results__breakdown">';
      html += '<h3 class="results__breakdown-title">Correct</h3>';
      got.forEach((a) => {
        html += '<div class="results__item results__item--correct">';
        html += `<div class="results__item-question">${a.question}</div>`;
        html += "</div>";
      });
      html += "</div>";
    }

    // Determine extra practice questions based on quiz mode
    const allForWeeks = QUESTIONS.filter(
      (q) => q.weekIds.some((wid) => quizWeekIds.includes(wid))
    );
    let extraQs;
    if (quizMode === "cumulative") {
      // After midterm: show everything else (quiz + textbook questions)
      extraQs = allForWeeks.filter((q) => !isMidtermQuestion(q));
    } else {
      // After week quiz: show textbook questions only
      extraQs = allForWeeks.filter((q) => isTextbookQuestion(q));
    }

    // Get the actual question objects for missed answers
    const missedIds = new Set(missed.map((a) => a.questionId));
    const missedQuestions = currentQuestions.filter((q) => missedIds.has(q.id));

    html += '<div class="results__actions">';
    if (missedQuestions.length > 0) {
      html += `<button class="btn btn--primary" id="btn-retry-missed">Retry Missed (${missedQuestions.length})</button>`;
    }
    html += '<button class="btn btn--secondary" id="btn-retake">Retake All</button>';
    if (extraQs.length > 0) {
      html += `<button class="btn btn--secondary" id="btn-more-practice">More Practice (${extraQs.length} extra questions)</button>`;
    }
    html += '<button class="btn btn--secondary" id="btn-exit-quiz">Exit Quiz</button>';
    html += "</div></div>";

    content.innerHTML = html;

    const btnRetryMissed = document.getElementById("btn-retry-missed");
    if (btnRetryMissed) {
      btnRetryMissed.addEventListener("click", () => {
        currentQuestions = shuffle(missedQuestions);
        currentIndex = 0;
        answers = [];
        answered = false;
        renderQuestion();
      });
    }

    document.getElementById("btn-retake").addEventListener("click", () => {
      currentQuestions = shuffle(currentQuestions);
      currentIndex = 0;
      answers = [];
      renderQuestion();
    });

    const btnMore = document.getElementById("btn-more-practice");
    if (btnMore) {
      btnMore.addEventListener("click", () => {
        launchQuizWith(extraQs, 0);
      });
    }

    document.getElementById("btn-exit-quiz").addEventListener("click", () => {
      if (typeof window.appExitQuiz === "function") {
        window.appExitQuiz();
      }
    });
  }
})();
