/* ===== DATA.JS — Week definitions + quiz question bank ===== */

/*
 * To add a new week permanently, copy one of the objects below and edit it.
 * Custom weeks can also be added through the "Add Week" button in the UI
 * (those are saved to localStorage and merged automatically).
 */

// eslint-disable-next-line no-unused-vars
const WEEKS = [
  {
    id: 1,
    label: "Week 1",
    dates: "Jan 13, 15",
    topic: "Introduction to Child Development",
    readings: [
      { chapter: 1, sections: "1.1 - 1.3", title: "An Introduction to Child Development" }
    ],
    keyConcepts: [
      "Three reasons to study child development: raising children, informing social policy, understanding human nature",
      "Historical views: Plato & Aristotle (early debates on nature/nurture), Locke (tabula rasa/blank slate), Rousseau (innately good, stages of development)",
      "Darwin's theory of evolution applied to child development; early baby biographies as a research method",
      "Social reform movements led to child labour laws, compulsory education, and the scientific study of children",
      "7 enduring themes: (1) nature and nurture, (2) the active child, (3) continuity/discontinuity, (4) mechanisms of change, (5) sociocultural context, (6) individual differences, (7) research and children's welfare",
      "Nature vs. nurture: genome provides a blueprint but environment shapes expression; the two interact continuously",
      "The active child: children shape their own development through preferences, exploration, and play",
      "Continuity vs. discontinuity: debate over whether development is gradual (continuous) or stage-like (discontinuous)",
      "Mechanisms of change: how genetic, neural, behavioural, and cognitive processes produce development",
      "Sociocultural context: development varies across cultures, historical periods, and socioeconomic backgrounds",
      "Major theoretical frameworks: Piaget (constructivist stages), Vygotsky (sociocultural), information processing, social learning theory, psychoanalytic (Freud, Erikson)"
    ],
    isBreak: false
  },
  {
    id: 2,
    label: "Week 2",
    dates: "Jan 20, 22",
    topic: "Methods + Prenatal Development",
    readings: [
      { chapter: 1, sections: "1.4", title: "Methods for Studying Child Development" },
      { chapter: 2, sections: "2.1 - 2.4", title: "Prenatal Development and the Newborn Period" }
    ],
    keyConcepts: [
      "The scientific method: formulate hypothesis, test with data, draw conclusions; requires reliability (consistency) and validity (measuring what you intend)",
      "Data-gathering methods: naturalistic observation, structured observation, interviews, questionnaires, and physiological measures",
      "Correlation does not equal causation: direction-of-causation problem and third-variable problem",
      "Experimental designs use random assignment and experimental control (independent vs. dependent variables) to establish cause and effect",
      "Research designs: cross-sectional (different ages at one time), longitudinal (same children over time), microgenetic (intensive observation during change)",
      "Ethical issues: informed consent, no harm, confidentiality; governed by Tri-Council Policy Statement in Canada",
      "Prenatal development stages: germinal (0-2 weeks, zygote to implantation), embryonic (3-8 weeks, major organs form), fetal (9-38 weeks, growth and refinement)",
      "Critical/sensitive periods: times when developing organisms are especially vulnerable to environmental influences",
      "Teratogens: environmental agents that can harm the embryo/fetus (alcohol, drugs, pollutants, infections); effects depend on timing, dose, and genetics",
      "Fetal Alcohol Spectrum Disorder (FASD): leading preventable cause of intellectual disability; caused by maternal alcohol consumption",
      "Fetal learning: newborns recognize mother's voice and prefer sounds/stories heard in the womb (DeCasper & Fifer studies)",
      "Newborn states of arousal: sleep (active/REM and quiet/non-REM), alert, fussing, crying; SIDS prevention through back-sleeping",
      "Negative outcomes at birth: premature birth, low birth weight; risk factors include poverty, stress, and inadequate prenatal care"
    ],
    isBreak: false
  },
  {
    id: 3,
    label: "Week 3",
    dates: "Jan 27, 29",
    topic: "Biology and Behaviour",
    readings: [
      { chapter: 3, sections: "3.1 - 3.4", title: "Biology and Behaviour" }
    ],
    keyConcepts: [
      "Genetic basics: DNA, genes, chromosomes; humans have 46 chromosomes (23 pairs); genotype (genetic makeup) vs. phenotype (observable traits)",
      "Sex determination: XX = female, XY = male; sex-linked traits carried on the X chromosome (e.g., colour blindness, hemophilia)",
      "Genetic transmission: dominant and recessive alleles, polygenic inheritance (most traits influenced by multiple genes)",
      "Genetic disorders: PKU (recessive), sickle cell disease (recessive), Down syndrome (trisomy 21, extra chromosome); genetic testing and counselling",
      "Behaviour genetics: twin studies (monozygotic vs. dizygotic) and adoption studies to estimate heritability",
      "Heritability: proportion of trait variation attributable to genetic differences; applies to populations, not individuals",
      "Gene-environment interaction: genes influence which environments children seek out (niche-picking); epigenetics — environment can alter gene expression without changing DNA",
      "Brain development: neurons, synapses, and neurotransmitters; neurogenesis (mostly prenatal) and synaptogenesis (rapid in early years)",
      "Myelination: coating of axons with myelin increases speed of neural transmission; continues into adolescence",
      "Synaptic pruning: 'use it or lose it' — unused neural connections are eliminated, strengthening frequently used pathways",
      "Brain plasticity: the young brain can recover from damage better than the adult brain; experience-expectant vs. experience-dependent plasticity",
      "Cerebral cortex regions: frontal (planning, decision-making), parietal (spatial), temporal (language, memory), occipital (vision); lateralization of brain function"
    ],
    isBreak: false
  },
  {
    id: 4,
    label: "Week 4",
    dates: "Feb 3, 5",
    topic: "Perception, Action, and Learning in Infancy",
    readings: [
      { chapter: 5, sections: "5.1 - 5.3", title: "Perception, Action, and Learning in Infancy" }
    ],
    keyConcepts: [
      "Studying infant perception: preferential looking technique (Fantz) — infants look longer at novel or preferred stimuli",
      "Visual acuity: poor at birth (~20/600), improves rapidly to near-adult levels by about 8 months",
      "Face perception: newborns prefer face-like patterns; by 3-4 months prefer attractive faces; perceptual narrowing — better at discriminating own-race faces",
      "Depth perception: visual cliff experiments (Gibson & Walk) show depth perception by 6-7 months (when crawling begins)",
      "Auditory perception: newborns prefer human speech over other sounds; can distinguish phonemes from all languages, narrows to native language by ~10 months",
      "Taste, smell, and touch: newborns show clear preferences (sweet over bitter); respond to pain; soothed by touch and sucking",
      "Intermodal perception: ability to integrate information from multiple senses (e.g., matching a voice to a face); present early in infancy",
      "Reflexes: innate responses present at birth (rooting, sucking, grasping, stepping, Moro); most disappear within first months",
      "Motor milestones: rolling (~4 mo), sitting (~6 mo), crawling (~8 mo), walking (~12 mo); cultural variation exists but sequence is consistent",
      "Dynamic systems theory of motor development: new motor skills emerge from the interaction of physical growth, brain maturation, and motivation",
      "Habituation: decreased response to repeated stimulation; dishabituation shows infants notice something new — key research method",
      "Learning in infancy: classical conditioning (pairing stimuli), operant/instrumental conditioning (reinforcement), observational learning/imitation",
      "Infant memory: mobile conjugate reinforcement paradigm (Rovee-Collier) — even young infants can form and retain memories over days/weeks"
    ],
    isBreak: false
  },
  {
    id: 5,
    label: "Week 5",
    dates: "Feb 10, 12",
    topic: "Cognitive Development I: Piaget's Theory",
    readings: [
      { chapter: 4, sections: "4.1", title: "Theories of Cognitive Development — Piaget's Theory" }
    ],
    keyConcepts: [
      "Piaget saw children as active constructivists who build knowledge through interaction with the world",
      "Core processes: assimilation (fitting new experiences into existing schemas) and accommodation (modifying schemas to fit new experiences)",
      "Equilibration: the drive to balance assimilation and accommodation; disequilibrium motivates cognitive growth",
      "Sensorimotor stage (0-2 years): knowledge through senses and actions; development of object permanence (knowing objects exist when out of sight)",
      "A-not-B error: infants search for a hidden object in a previous location (A) rather than where they saw it moved (B)",
      "Preoperational stage (2-7 years): symbolic representation (language, pretend play) but limited by egocentrism and centration",
      "Egocentrism: inability to take another person's perspective; demonstrated by Piaget's three-mountain task",
      "Conservation: understanding that quantity remains the same despite changes in appearance; preoperational children fail conservation tasks (number, liquid, mass)",
      "Concrete operational stage (7-12 years): logical thinking about concrete events; master conservation, classification, and seriation",
      "Formal operational stage (12+ years): abstract and hypothetical thinking; systematic problem-solving (pendulum task)",
      "Piaget's legacy: pioneered the study of cognitive development, but critics note he underestimated children's abilities and the role of social interaction",
      "Weaknesses of Piaget's theory: development is more continuous than stage-like; children's abilities are domain-specific rather than general across all tasks"
    ],
    isBreak: false
  },
  {
    id: 6,
    label: "Week 6",
    dates: "Feb 24, 26",
    topic: "Cognitive Development II + Conceptual Development",
    readings: [
      { chapter: 4, sections: "4.2 - 4.5", title: "Theories of Cognitive Development (cont.)" },
      { chapter: 7, sections: "7.1 - 7.2 (selected)", title: "Conceptual Development (introduction)" }
    ],
    keyConcepts: [
      "Information-processing theories: mind as a computer; focus on encoding, storage, retrieval; limited processing capacity improves with age",
      "Development of problem-solving: overlapping waves model — children use multiple strategies simultaneously and gradually shift toward more effective ones",
      "Core-knowledge theories (nativist): infants are born with basic understanding of physics, number, and psychology; development builds on innate foundations",
      "Nativism vs. constructivism: debate over how much knowledge is innate vs. constructed through experience",
      "Vygotsky's sociocultural theory: cognitive development is shaped by social interaction and cultural tools (language, number systems, writing)",
      "Zone of proximal development (ZPD): the range between what a child can do alone and what they can do with help from a more skilled partner",
      "Scaffolding: support from adults or peers that is gradually withdrawn as the child becomes more competent",
      "Guided participation: the process by which more knowledgeable others organize activities to help children learn (Rogoff)",
      "Private speech: children talk to themselves to guide behaviour; becomes internalized as inner speech with development",
      "Dynamic-systems theories: cognitive development emerges from the interaction of many components (brain, body, environment) in real time",
      "Conceptual development: children develop understanding of categories, living things vs. non-living things, and causal relationships",
      "Understanding living things: children gradually distinguish animate from inanimate; preschoolers understand biological concepts like growth and inheritance"
    ],
    isBreak: false
  },
  {
    id: 7,
    label: "Week 7",
    dates: "Mar 3, 5",
    topic: "Social Cognition and Theory of Mind",
    readings: [
      { chapter: 7, sections: "7.1", title: "Conceptual Development — Understanding Who or What" }
    ],
    keyConcepts: [
      "Naive psychology: from early in life, children understand that people have mental states (desires, beliefs, intentions) that guide behaviour",
      "Theory of mind (ToM): understanding that others have thoughts, beliefs, and desires different from one's own",
      "False-belief tasks: test whether children understand that someone can hold a belief that differs from reality (e.g., Sally-Anne task, unexpected contents task)",
      "Most children pass false-belief tasks around age 4-5; younger children assume others share their own knowledge",
      "Joint attention: by 9-12 months, infants follow others' gaze and point to share interest — an early building block of theory of mind",
      "Intentionality: by 9-12 months, infants understand that people act with goals and intentions; distinguish intentional from accidental actions",
      "Desire psychology (age 2): children understand that people's actions are driven by their desires, even if those desires differ from the child's own",
      "Belief-desire psychology (age 4-5): children understand that actions are driven by beliefs AND desires; beliefs can be false",
      "Understanding of self and others: children develop self-awareness (mirror self-recognition by ~18 months) and increasingly sophisticated understanding of others' minds",
      "Dividing objects into categories: perceptual categorization begins in infancy; children use shape, function, and conceptual knowledge to categorize",
      "Cultural influences on theory of mind: timing varies across cultures but the general developmental sequence is similar worldwide"
    ],
    isBreak: false
  },
  {
    id: 8,
    label: "Week 8",
    dates: "Mar 10, 12",
    topic: "Spring Break",
    readings: [],
    keyConcepts: [],
    isBreak: true
  },
  {
    id: 9,
    label: "Week 9",
    dates: "Mar 17, 19",
    topic: "Intelligence + Autism Spectrum Disorder",
    readings: [
      { chapter: 8, sections: "8.1 - 8.4", title: "Intelligence and Academic Achievement" },
      { chapter: 7, sections: "Box 7.1", title: "Children with Autism Spectrum Disorders (ASD)" }
    ],
    keyConcepts: [
      "Defining intelligence: debated concept — general ability (g factor, Spearman) vs. multiple distinct abilities (Thurstone, Gardner, Sternberg)",
      "g factor: general intelligence that underlies performance across all cognitive tasks; supported by positive correlations among different test scores",
      "Gardner's multiple intelligences: linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic",
      "Measuring intelligence: Stanford-Binet and Wechsler (WISC) tests; IQ score is a normalized score with mean = 100, SD = 15",
      "IQ scores predict academic achievement, income, and health outcomes; but are not the only predictors of success",
      "Continuity of IQ: relatively stable after age 5-6; infant habituation rate is a modest predictor of later IQ",
      "Genes and environment both influence IQ: heritability estimates ~50%; shared family environment matters most in early childhood, genetic influence increases with age",
      "Environmental influences on IQ: poverty, nutrition, education quality, family stress; Flynn effect — average IQ scores have risen over generations",
      "Early intervention programs (e.g., Carolina Abecedarian Project, Better Beginnings Better Futures) can boost IQ and academic outcomes for at-risk children",
      "Autism Spectrum Disorder (ASD): neurodevelopmental condition characterized by difficulties with social communication and restricted/repetitive behaviours",
      "ASD and theory of mind: children with ASD show marked deficits in understanding others' mental states; difficulty with false-belief tasks and joint attention",
      "ASD has a strong genetic component; early diagnosis and intervention (e.g., applied behaviour analysis) improve outcomes"
    ],
    isBreak: false
  },
  {
    id: 10,
    label: "Week 10",
    dates: "Mar 24, 26",
    topic: "Language Development",
    readings: [
      { chapter: 6, sections: "6.1 - 6.4", title: "Development of Language and Symbol Use" }
    ],
    keyConcepts: [
      "Components of language: phonology (sound), morphology (word structure), semantics (meaning), syntax (grammar), pragmatics (social use)",
      "Language is species-specific and universal: all human societies have language; children acquire it without formal instruction",
      "Speech perception: newborns distinguish phonemes from all languages; perceptual narrowing — by 10-12 months, tuned to native language sounds",
      "Word segmentation: infants use statistical learning to detect word boundaries in continuous speech by tracking syllable co-occurrence patterns",
      "Preparation for production: cooing (~2 months), babbling (~6 months, consonant-vowel combos), babbling narrows to native language sounds",
      "First words: around 12 months; vocabulary spurt (naming explosion) around 18 months; fast mapping — learning word meaning from minimal exposure",
      "Common word-learning errors: overextension ('dog' for all animals), underextension ('dog' only for own pet)",
      "Putting words together: two-word stage (~18-24 months), telegraphic speech; grammar becomes increasingly complex through preschool years",
      "Theories of language development: nativist (Chomsky — Universal Grammar, LAD) vs. social-interactionist (language learned through social interaction and statistical learning)",
      "Critical period for language: evidence from cases of extreme deprivation (Genie) and second-language learning — earlier exposure leads to greater proficiency",
      "Bilingualism: bilingual children may show slight initial delays but gain cognitive advantages (executive function, metalinguistic awareness)",
      "Nonlinguistic symbols: children learn to use and interpret symbols (pictures, maps, models); dual representation — understanding that something is both an object and a symbol"
    ],
    isBreak: false
  }
];

// eslint-disable-next-line no-unused-vars
const QUESTIONS = [
  // --- Week 1 ---
  {
    id: "q1",
    weekIds: [1],
    type: "mc",
    question: "Which philosopher viewed children as a 'tabula rasa' (blank slate)?",
    choices: ["John Locke", "Jean-Jacques Rousseau", "Charles Darwin", "Plato"],
    answer: 0,
    explanation: "John Locke proposed that children are born as a blank slate, shaped entirely by their experiences and environment."
  },
  {
    id: "q2",
    weekIds: [1],
    type: "mc",
    question: "Which of the following is NOT one of the 7 enduring themes in child development?",
    choices: [
      "Nature and nurture",
      "The active child",
      "Unconscious motivation",
      "Continuity/discontinuity"
    ],
    answer: 2,
    explanation: "The 7 themes are: nature/nurture, the active child, continuity/discontinuity, mechanisms of change, sociocultural context, individual differences, and research & children's welfare. Unconscious motivation is a psychoanalytic concept, not one of the enduring themes."
  },
  {
    id: "q3",
    weekIds: [1],
    type: "tf",
    question: "Rousseau believed children are inherently good and develop best with minimal adult interference.",
    choices: ["True", "False"],
    answer: 0,
    explanation: "Rousseau viewed children as 'noble savages' who are innately good and develop best when allowed to follow their natural inclinations."
  },

  // --- Week 2 ---
  {
    id: "q4",
    weekIds: [2],
    type: "mc",
    question: "Why does correlation not imply causation?",
    choices: [
      "Because of the direction-of-causation problem and third-variable problem",
      "Because experiments are always better than correlational studies",
      "Because correlations can only be negative",
      "Because correlational studies use too few participants"
    ],
    answer: 0,
    explanation: "Correlations don't imply causation for two reasons: (1) the direction-of-causation problem — we can't tell which variable causes the other, and (2) the third-variable problem — an unmeasured variable might cause both."
  },
  {
    id: "q5",
    weekIds: [2],
    type: "mc",
    question: "During which prenatal period do major organs and structures begin to form?",
    choices: ["Germinal period", "Embryonic period", "Fetal period", "Perinatal period"],
    answer: 1,
    explanation: "The embryonic period (weeks 3-8) is when major organs and body structures begin to form, making it a critical period for teratogen exposure."
  },
  {
    id: "q6",
    weekIds: [2],
    type: "short",
    question: "Name the three stages of prenatal development and their approximate timeframes.",
    answer: "Germinal (0-2 weeks): fertilization to implantation. Embryonic (3-8 weeks): major organs and structures form. Fetal (9-38 weeks): continued growth, movement, and brain development.",
    explanation: "Each stage involves distinct developmental milestones, with the embryonic period being most vulnerable to teratogens due to rapid organ formation."
  },

  // --- Week 3 ---
  {
    id: "q7",
    weekIds: [3],
    type: "mc",
    question: "What is synaptic pruning?",
    choices: [
      "The process of forming new synapses in the brain",
      "The elimination of unused neural connections to strengthen active ones",
      "The coating of axons with myelin to speed neural transmission",
      "The creation of new neurons throughout life"
    ],
    answer: 1,
    explanation: "Synaptic pruning follows a 'use it or lose it' principle — neural connections that are frequently used are strengthened, while unused ones are eliminated."
  },
  {
    id: "q8",
    weekIds: [3],
    type: "tf",
    question: "Heritability estimates tell us how much of an individual's traits are determined by their genes.",
    choices: ["True", "False"],
    answer: 1,
    explanation: "False. Heritability refers to the proportion of variation in a trait within a POPULATION that is attributable to genetic differences. It does not apply to individuals."
  },

  // --- Week 4 ---
  {
    id: "q9",
    weekIds: [4],
    type: "mc",
    question: "What research method did Fantz use to study infant visual preferences?",
    choices: [
      "Habituation paradigm",
      "Preferential looking technique",
      "Visual cliff apparatus",
      "Microgenetic design"
    ],
    answer: 1,
    explanation: "Fantz developed the preferential looking technique, which measures how long infants look at different visual stimuli to determine their preferences."
  },
  {
    id: "q10",
    weekIds: [4],
    type: "mc",
    question: "At approximately what age do most infants begin to walk independently?",
    choices: ["6 months", "9 months", "12 months", "18 months"],
    answer: 2,
    explanation: "Most infants take their first independent steps around 12 months, though there is considerable individual and cultural variation."
  },

  // --- Week 5 ---
  {
    id: "q11",
    weekIds: [5],
    type: "mc",
    question: "In Piaget's theory, what is the process of modifying existing schemas to fit new experiences?",
    choices: ["Assimilation", "Accommodation", "Equilibration", "Conservation"],
    answer: 1,
    explanation: "Accommodation is modifying existing schemas when new information doesn't fit. Assimilation is the opposite — fitting new information into existing schemas."
  },
  {
    id: "q12",
    weekIds: [5],
    type: "mc",
    question: "Which Piagetian stage involves the development of object permanence?",
    choices: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"],
    answer: 0,
    explanation: "Object permanence — understanding that objects continue to exist when out of sight — develops during the sensorimotor stage (0-2 years)."
  },
  {
    id: "q13",
    weekIds: [5],
    type: "short",
    question: "Explain the concept of conservation and give an example of a conservation task.",
    answer: "Conservation is the understanding that the quantity of something remains the same even when its appearance changes. Example: pouring liquid from a short, wide glass into a tall, thin glass — the amount of liquid stays the same even though the level looks different. Preoperational children typically fail this task because they focus on one dimension (centration).",
    explanation: "Conservation tasks demonstrate the limitations of preoperational thinking, including centration (focusing on one aspect) and lack of reversibility."
  },

  // --- Week 6 ---
  {
    id: "q14",
    weekIds: [6],
    type: "mc",
    question: "What is Vygotsky's Zone of Proximal Development (ZPD)?",
    choices: [
      "The area of the brain responsible for language",
      "The range between what a child can do alone and what they can do with help",
      "The critical period for learning a second language",
      "The stage between preoperational and concrete operational thinking"
    ],
    answer: 1,
    explanation: "The ZPD is the gap between a child's independent ability and what they can achieve with guidance from a more knowledgeable partner."
  },
  {
    id: "q15",
    weekIds: [6],
    type: "tf",
    question: "Core-knowledge (nativist) theories propose that infants are born with some basic understanding of physics and number.",
    choices: ["True", "False"],
    answer: 0,
    explanation: "Core-knowledge theories argue that infants come equipped with innate, domain-specific knowledge systems for understanding objects, number, and people."
  },

  // --- Week 7 ---
  {
    id: "q16",
    weekIds: [7],
    type: "mc",
    question: "At approximately what age do most children pass false-belief tasks?",
    choices: ["2 years", "3 years", "4-5 years", "7 years"],
    answer: 2,
    explanation: "Most children pass standard false-belief tasks (like the Sally-Anne task) around age 4-5, when they understand that others can hold beliefs that differ from reality."
  },
  {
    id: "q17",
    weekIds: [7],
    type: "short",
    question: "Describe the Sally-Anne false-belief task and explain what it measures.",
    answer: "Sally places a marble in a basket and leaves the room. Anne moves the marble to a box. When Sally returns, the child is asked where Sally will look for the marble. Children with theory of mind say 'the basket' (where Sally believes it is). Children without ToM say 'the box' (where it actually is). The task measures whether children understand that others can hold false beliefs.",
    explanation: "False-belief tasks are the gold standard for assessing theory of mind — the understanding that others have mental states that can differ from one's own and from reality."
  },

  // --- Week 9 ---
  {
    id: "q18",
    weekIds: [9],
    type: "mc",
    question: "What does the 'g factor' refer to in intelligence research?",
    choices: [
      "Gardner's multiple intelligences",
      "A general intelligence factor underlying all cognitive abilities",
      "Genetic contribution to IQ scores",
      "The growth factor in brain development"
    ],
    answer: 1,
    explanation: "Spearman proposed the g factor (general intelligence) based on the finding that performance on different cognitive tests is positively correlated, suggesting a common underlying ability."
  },
  {
    id: "q19",
    weekIds: [9],
    type: "mc",
    question: "Which of the following is a key characteristic of Autism Spectrum Disorder (ASD)?",
    choices: [
      "Above-average IQ scores",
      "Difficulties with social communication and restricted/repetitive behaviours",
      "Inability to learn language",
      "Loss of motor skills in early childhood"
    ],
    answer: 1,
    explanation: "ASD is characterized by persistent deficits in social communication and interaction, along with restricted and repetitive patterns of behaviour, interests, or activities."
  },

  // --- Week 10 ---
  {
    id: "q20",
    weekIds: [10],
    type: "mc",
    question: "What is 'fast mapping' in language development?",
    choices: [
      "The ability to speak rapidly",
      "Learning a word's meaning from minimal exposure",
      "Mapping brain regions to language functions",
      "The speed at which bilingual children switch languages"
    ],
    answer: 1,
    explanation: "Fast mapping is the ability to learn a new word's approximate meaning after only one or two exposures, which helps explain the rapid vocabulary growth in toddlers."
  },
  {
    id: "q21",
    weekIds: [10],
    type: "mc",
    question: "What does Chomsky's concept of Universal Grammar propose?",
    choices: [
      "All languages follow the same grammatical rules",
      "Children are born with an innate language acquisition device (LAD) that contains knowledge of grammatical structure",
      "Grammar must be explicitly taught to children",
      "Language can only be learned during the first year of life"
    ],
    answer: 1,
    explanation: "Chomsky proposed that humans are born with a Language Acquisition Device (LAD) containing Universal Grammar — an innate understanding of the structural principles common to all languages."
  },
  {
    id: "q22",
    weekIds: [10],
    type: "tf",
    question: "Newborns can distinguish between phonemes from any language in the world.",
    choices: ["True", "False"],
    answer: 0,
    explanation: "True. Newborns are 'universal listeners' who can discriminate phonemes from all languages. This ability narrows to native-language sounds by about 10-12 months (perceptual narrowing)."
  },

  // --- Additional Week 1 ---
  {
    id: "q23",
    weekIds: [1],
    type: "mc",
    question: "The 'active child' theme in developmental psychology refers to:",
    choices: [
      "Children who are physically hyperactive",
      "Children shaping their own development through preferences, exploration, and play",
      "Children who perform well in school",
      "The role of physical exercise in brain development"
    ],
    answer: 1,
    explanation: "The active child theme emphasizes that children are not passive recipients of environmental input — they actively contribute to their own development."
  },
  {
    id: "q24",
    weekIds: [1],
    type: "mc",
    question: "Which theorist emphasized that cognitive development occurs in four qualitatively distinct stages?",
    choices: ["Vygotsky", "Freud", "Piaget", "Bandura"],
    answer: 2,
    explanation: "Piaget proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational."
  },

  // --- Additional Week 2 ---
  {
    id: "q25",
    weekIds: [2],
    type: "mc",
    question: "What is the leading preventable cause of intellectual disability?",
    choices: [
      "Down syndrome",
      "Fetal Alcohol Spectrum Disorder (FASD)",
      "Maternal malnutrition",
      "Low birth weight"
    ],
    answer: 1,
    explanation: "FASD, caused by maternal alcohol consumption during pregnancy, is the leading preventable cause of intellectual disability."
  },
  {
    id: "q26",
    weekIds: [2],
    type: "mc",
    question: "Which research design follows the same children over an extended period?",
    choices: ["Cross-sectional", "Longitudinal", "Microgenetic", "Correlational"],
    answer: 1,
    explanation: "Longitudinal designs study the same participants repeatedly over time, revealing individual patterns of stability and change."
  },
  {
    id: "q27",
    weekIds: [2],
    type: "tf",
    question: "Teratogens have the same effect regardless of when during pregnancy the exposure occurs.",
    choices: ["True", "False"],
    answer: 1,
    explanation: "False. The effects of teratogens depend heavily on timing. The embryonic period (weeks 3-8) is most vulnerable because major organs are forming. The same teratogen can have different effects at different points in development."
  },

  // --- Additional Week 3 ---
  {
    id: "q28",
    weekIds: [3],
    type: "mc",
    question: "What does myelination do?",
    choices: [
      "Creates new neurons in the brain",
      "Eliminates unused synaptic connections",
      "Coats axons to increase the speed of neural transmission",
      "Connects the two hemispheres of the brain"
    ],
    answer: 2,
    explanation: "Myelination is the process of coating axons with a fatty myelin sheath, which dramatically increases the speed at which electrical impulses travel along neurons."
  },
  {
    id: "q29",
    weekIds: [3],
    type: "mc",
    question: "Monozygotic (identical) twins share what percentage of their genes?",
    choices: ["50%", "75%", "100%", "It varies"],
    answer: 2,
    explanation: "Monozygotic twins develop from a single fertilized egg and share 100% of their genes. Dizygotic (fraternal) twins share about 50%, like any siblings."
  },
  {
    id: "q30",
    weekIds: [3],
    type: "mc",
    question: "Epigenetics refers to:",
    choices: [
      "The study of genetic mutations",
      "Changes in gene expression caused by environmental factors without altering DNA sequence",
      "The mapping of the human genome",
      "The inheritance of acquired characteristics"
    ],
    answer: 1,
    explanation: "Epigenetics involves changes to how genes are expressed (turned on or off) due to environmental influences, without changing the underlying DNA sequence."
  },

  // --- Additional Week 4 ---
  {
    id: "q31",
    weekIds: [4],
    type: "mc",
    question: "The visual cliff experiment by Gibson and Walk demonstrated that:",
    choices: [
      "Newborns have perfect depth perception",
      "Infants who can crawl show fear of the deep side, indicating depth perception",
      "Infants prefer looking at faces over other stimuli",
      "Visual acuity is fully developed at birth"
    ],
    answer: 1,
    explanation: "The visual cliff showed that crawling-age infants (around 6-7 months) perceive depth and avoid the 'deep' side, demonstrating that depth perception develops by the time infants can move independently."
  },
  {
    id: "q32",
    weekIds: [4],
    type: "tf",
    question: "Habituation refers to an increased response to a repeatedly presented stimulus.",
    choices: ["True", "False"],
    answer: 1,
    explanation: "False. Habituation is a DECREASED response to a repeated stimulus. When a new stimulus is presented and the infant responds again, that is called dishabituation."
  },
  {
    id: "q33",
    weekIds: [4],
    type: "mc",
    question: "In Rovee-Collier's mobile conjugate reinforcement paradigm, what did researchers discover about infant memory?",
    choices: [
      "Infants cannot form memories before age 1",
      "Even young infants can form and retain memories for days or weeks",
      "Infant memory is entirely implicit",
      "Memory does not develop until the preoperational stage"
    ],
    answer: 1,
    explanation: "Rovee-Collier showed that infants as young as 2-3 months could learn to kick to move a mobile and remember this association days or even weeks later."
  },

  // --- Additional Week 5 ---
  {
    id: "q34",
    weekIds: [5],
    type: "mc",
    question: "The A-not-B error occurs when infants:",
    choices: [
      "Cannot distinguish between two objects",
      "Search for a hidden object where they previously found it rather than where they saw it moved",
      "Fail to recognize their mother's face",
      "Cannot imitate an adult's actions"
    ],
    answer: 1,
    explanation: "In the A-not-B error, infants who successfully found an object at location A continue to search there even after watching it being hidden at location B."
  },
  {
    id: "q35",
    weekIds: [5],
    type: "mc",
    question: "Egocentrism in Piaget's preoperational stage means:",
    choices: [
      "Children are selfish and don't care about others",
      "Children cannot take another person's spatial or cognitive perspective",
      "Children think they are the centre of the universe",
      "Children refuse to share toys"
    ],
    answer: 1,
    explanation: "Egocentrism is a cognitive limitation, not a personality trait. It means preoperational children have difficulty understanding that others may see things differently than they do, as shown in the three-mountain task."
  },

  // --- Additional Week 6 ---
  {
    id: "q36",
    weekIds: [6],
    type: "mc",
    question: "Scaffolding in Vygotsky's theory refers to:",
    choices: [
      "Building physical structures for children to climb",
      "Temporary support from a more skilled partner that is withdrawn as competence grows",
      "A fixed teaching curriculum",
      "The biological maturation of the brain"
    ],
    answer: 1,
    explanation: "Scaffolding involves adjusting the level of support to match the learner's current level — providing more help when needed and gradually removing it as the child becomes more capable."
  },
  {
    id: "q37",
    weekIds: [6],
    type: "mc",
    question: "Private speech (talking to oneself) in young children is, according to Vygotsky:",
    choices: [
      "A sign of social difficulties",
      "A tool for self-guidance that becomes internalized as inner speech",
      "Evidence of egocentrism",
      "A meaningless behaviour that should be discouraged"
    ],
    answer: 1,
    explanation: "Vygotsky saw private speech as an important developmental tool — children talk themselves through tasks, and this gradually becomes internalized as silent inner speech."
  },
  {
    id: "q38",
    weekIds: [6],
    type: "mc",
    question: "The overlapping waves model of cognitive development suggests that:",
    choices: [
      "Children use only one strategy at a time",
      "Development proceeds in strict stages",
      "Children use multiple strategies simultaneously and gradually shift to more effective ones",
      "Cognitive abilities develop in a fixed sequence with no variation"
    ],
    answer: 2,
    explanation: "Siegler's overlapping waves model shows that children have multiple strategies available at any given time and gradually increase use of more advanced strategies while decreasing use of less effective ones."
  },

  // --- Additional Week 7 ---
  {
    id: "q39",
    weekIds: [7],
    type: "mc",
    question: "Joint attention, an early precursor to theory of mind, involves:",
    choices: [
      "Two children playing side by side without interacting",
      "An infant and caregiver sharing focus on the same object or event",
      "A child talking to an imaginary friend",
      "An infant imitating an adult's facial expression"
    ],
    answer: 1,
    explanation: "Joint attention emerges around 9-12 months when infants follow others' gaze, point to objects, and share attention with a caregiver — a key building block for understanding others' mental states."
  },
  {
    id: "q40",
    weekIds: [7],
    type: "tf",
    question: "Two-year-olds understand that people's actions are driven by desires, even when those desires differ from the child's own.",
    choices: ["True", "False"],
    answer: 0,
    explanation: "True. Around age 2, children develop 'desire psychology' — they understand that people act based on their desires and that others may want different things than they do."
  },
  {
    id: "q41",
    weekIds: [7],
    type: "mc",
    question: "Mirror self-recognition (recognizing oneself in a mirror) typically emerges around:",
    choices: ["6 months", "12 months", "18 months", "3 years"],
    answer: 2,
    explanation: "The 'rouge test' shows that most children recognize themselves in a mirror by about 18 months, touching a mark placed on their own face rather than the mirror."
  },

  // --- Additional Week 9 ---
  {
    id: "q42",
    weekIds: [9],
    type: "mc",
    question: "The Flynn effect refers to:",
    choices: [
      "The decline in IQ scores over time",
      "The steady rise in average IQ scores across generations",
      "The gap between verbal and performance IQ",
      "The correlation between IQ and income"
    ],
    answer: 1,
    explanation: "The Flynn effect is the well-documented finding that average IQ scores have risen substantially (about 3 points per decade) across generations worldwide, likely due to improvements in nutrition, education, and environmental complexity."
  },
  {
    id: "q43",
    weekIds: [9],
    type: "mc",
    question: "Which IQ test is most commonly used with school-age children?",
    choices: [
      "Stanford-Binet",
      "Wechsler Intelligence Scale for Children (WISC)",
      "Bayley Scales of Infant Development",
      "Raven's Progressive Matrices"
    ],
    answer: 1,
    explanation: "The WISC is the most widely used intelligence test for children aged 6-16, providing scores for verbal comprehension, perceptual reasoning, working memory, and processing speed."
  },
  {
    id: "q44",
    weekIds: [9],
    type: "tf",
    question: "Children with Autism Spectrum Disorder typically have no difficulty with theory of mind tasks.",
    choices: ["True", "False"],
    answer: 1,
    explanation: "False. Deficits in theory of mind are a hallmark of ASD. Children with ASD often struggle with false-belief tasks and have difficulty understanding others' mental states, emotions, and intentions."
  },

  // --- Additional Week 10 ---
  {
    id: "q45",
    weekIds: [10],
    type: "mc",
    question: "Overextension in early language development refers to:",
    choices: [
      "Using a word too broadly (e.g., calling all four-legged animals 'dog')",
      "Using a word too narrowly",
      "Speaking in overly long sentences",
      "Mispronouncing difficult words"
    ],
    answer: 0,
    explanation: "Overextension is when a child applies a word too broadly — for example, using 'dog' for dogs, cats, horses, and other four-legged animals. The opposite, underextension, is using a word too narrowly."
  },
  {
    id: "q46",
    weekIds: [10],
    type: "mc",
    question: "The vocabulary spurt (naming explosion) typically occurs around:",
    choices: ["6 months", "12 months", "18 months", "3 years"],
    answer: 2,
    explanation: "Around 18 months, many children show a dramatic acceleration in word learning, sometimes called the naming explosion or vocabulary spurt."
  },
  {
    id: "q47",
    weekIds: [10],
    type: "mc",
    question: "Which of the following is evidence for a critical/sensitive period for language acquisition?",
    choices: [
      "Children learn their first words at 12 months",
      "Bilingual children learn faster than monolingual children",
      "Cases like Genie show that language is very difficult to acquire after prolonged deprivation, and second-language proficiency declines with age of first exposure",
      "All children babble at the same age"
    ],
    answer: 2,
    explanation: "The case of Genie (isolated until age 13) and studies of second-language learners both show that language acquisition becomes increasingly difficult after early childhood, supporting a sensitive period."
  },

  // ===== COURSE QUIZ & MIDTERM QUESTIONS =====

  // --- Quiz 2: Lecture 2 - Theories (Week 1) ---
  {
    id: "cq1",
    weekIds: [1],
    type: "mc",
    question: "In your textbook, what is meant by the term 'The active child'?",
    choices: [
      "Over development, children become less active",
      "Children's own actions contribute to their development",
      "Children are extremely active",
      "Over development, children become more active"
    ],
    answer: 1,
    explanation: "The 'active child' theme means children contribute to their own development through their actions, preferences, and choices — not that they are physically active."
  },
  {
    id: "cq2",
    weekIds: [1],
    type: "mc",
    question: "For Social Learning theorists like Bandura, which of these is important for shaping development?",
    choices: [
      "Reinforcement & punishment",
      "All of the above",
      "Observational learning",
      "Imitation"
    ],
    answer: 1,
    explanation: "Bandura's social learning theory emphasizes that development is shaped by reinforcement/punishment, observational learning, AND imitation — all three work together."
  },
  {
    id: "cq3",
    weekIds: [1],
    type: "mc",
    question: "Cognitive development refers to:",
    choices: [
      "The development of social skills",
      "None of the above",
      "The development of emotions",
      "The development of thinking and reasoning"
    ],
    answer: 3,
    explanation: "Cognitive development specifically refers to the development of thinking, reasoning, and mental processes — not social skills or emotions, which are separate domains."
  },
  {
    id: "cq4",
    weekIds: [1],
    type: "mc",
    question: "The physical, social, cultural, economic, and historical circumstances that make up a child's environment are known as:",
    choices: [
      "Variation",
      "Sociocultural context",
      "Continuous development",
      "Natural selection"
    ],
    answer: 1,
    explanation: "Sociocultural context encompasses all the physical, social, cultural, economic, and historical factors that shape a child's environment and development."
  },
  {
    id: "cq5",
    weekIds: [1],
    type: "mc",
    question: "Uri Bronfenbrenner's Bioecological model stresses:",
    choices: [
      "The many levels of influence on development, ranging from within the child to the broader culture",
      "The effects of the natural environment (trees, rivers, etc.) on development",
      "The child's functioning as a scientist, creating and testing theories about the world",
      "Mainly the child's own biology (genetics, temperament, etc.)"
    ],
    answer: 0,
    explanation: "Bronfenbrenner's model describes nested systems of influence: microsystem (immediate environment), mesosystem, exosystem, macrosystem (cultural values), and chronosystem (historical changes)."
  },
  {
    id: "cq6",
    weekIds: [1],
    type: "mc",
    question: "Lenny is a very active toddler who began to crawl, walk, climb, and run at a very early age. Which of the following is an example of a way in which these characteristics may affect his environment?",
    choices: [
      "Chasing Lenny and keeping him safe makes his parents very tired and stressed, resulting in a lack of patience with Lenny",
      "Lenny regularly seeks out new adventures, such as climbing to the top of his backyard swing set, in which he often gets injured",
      "In an attempt to get Lenny to use his high activity level constructively, his parents enroll him in a gymnastics class",
      "All of the above"
    ],
    answer: 3,
    explanation: "This illustrates the 'active child' theme — a child's characteristics shape the environments and experiences they encounter. Lenny's activity level affects his parents' stress, his risk-taking, and the activities they choose for him."
  },

  // --- Quiz 3: Lecture 4 - Prenatal Development (Week 2) ---
  {
    id: "cq7",
    weekIds: [2],
    type: "mc",
    question: "A fertilized egg is called a(n):",
    choices: ["Embryo", "Fetus", "Zygote", "Teratogen"],
    answer: 2,
    explanation: "A zygote is the single cell formed when a sperm fertilizes an egg. It marks the beginning of the germinal period of prenatal development."
  },
  {
    id: "cq8",
    weekIds: [2],
    type: "mc",
    question: "Cell division that results in two identical cells is called:",
    choices: ["Mitosis", "Placenta", "Apoptosis", "Migration"],
    answer: 0,
    explanation: "Mitosis is the process of cell division that produces two genetically identical daughter cells. This is how the zygote multiplies into the trillions of cells that form a human body."
  },
  {
    id: "cq9",
    weekIds: [2],
    type: "mc",
    question: "Prenatal development begins with:",
    choices: ["Conception", "Implantation", "Mitosis", "Cell death"],
    answer: 0,
    explanation: "Prenatal development begins at conception (fertilization), when a sperm unites with an egg to form a zygote. Implantation occurs later, about 8-10 days after conception."
  },
  {
    id: "cq10",
    weekIds: [2],
    type: "mc",
    question: "The most rapid phase of development is:",
    choices: ["The teen years", "Infancy", "Toddlerhood", "The prenatal period"],
    answer: 3,
    explanation: "The prenatal period is the most rapid phase of development — a single cell becomes a fully formed baby with trillions of cells in just 38 weeks."
  },
  {
    id: "cq11",
    weekIds: [2],
    type: "mc",
    question: "The phenomenon that a low dose of a substance has no effect on prenatal development, but damage occurs when exposure reaches a certain level, is known as:",
    choices: ["Zygote", "Teratogen", "Developmental disorder", "Threshold effect"],
    answer: 3,
    explanation: "The threshold effect means there is a level of exposure below which a teratogen has no detectable effect, but above which damage occurs. This is different from the dose-response relation, where more exposure = more damage."
  },
  {
    id: "cq12",
    weekIds: [2],
    type: "mc",
    question: "The more exposure a fetus has to a potential teratogen, the more severely it is likely to be affected. This principle is called:",
    choices: ["Dose-response relation", "Habituation", "Cephalocaudal development", "Phylogenetic continuity"],
    answer: 0,
    explanation: "The dose-response relation means that the greater the exposure to a teratogen (higher dose or longer duration), the more severe the effects on prenatal development."
  },
  {
    id: "cq13",
    weekIds: [2],
    type: "mc",
    question: "Which of the following is NOT true about fetal learning?",
    choices: [
      "The fetus recognizes the sound of its mother's voice",
      "The fetus can detect flavors",
      "The fetus learns to distinguish between different colors",
      "The fetus 'breathes' amniotic fluid and so experiences different smells"
    ],
    answer: 2,
    explanation: "Fetuses cannot distinguish colors because there is no light in the womb. However, they can hear sounds, detect flavors in amniotic fluid, and experience smells through the fluid they breathe."
  },
  {
    id: "cq14",
    weekIds: [2],
    type: "mc",
    question: "Apoptosis of cells in a developing fetus allows for:",
    choices: [
      "Genes to be turned on and off",
      "Cell differentiation",
      "The development of organ systems",
      "Formation of fingers and toes"
    ],
    answer: 3,
    explanation: "Apoptosis (programmed cell death) is essential for sculpting body structures. For example, the webbing between fingers and toes is removed through apoptosis, allowing separate digits to form."
  },
  {
    id: "cq15",
    weekIds: [2],
    type: "mc",
    question: "Which of the following is NOT true about prenatal development?",
    choices: [
      "Organ development begins in the last 2 weeks before a baby is born",
      "There are three stages: Germinal, Embryonic, and Fetal",
      "The zygote initially divides into identical cells",
      "Prenatal development includes selective cell death"
    ],
    answer: 0,
    explanation: "Organ development begins during the embryonic period (weeks 3-8), NOT in the last 2 weeks. By the end of the embryonic period, all major organs have begun to form."
  },
  {
    id: "cq16",
    weekIds: [2],
    type: "mc",
    question: "Which of the following helps keep the circulatory systems of the fetus and mother separate?",
    choices: ["Neural tube", "Amniotic fluid", "Amniotic sac", "Placenta"],
    answer: 3,
    explanation: "The placenta is a semi-permeable membrane that keeps the mother's and fetus's blood supplies separate while allowing the exchange of oxygen, nutrients, and waste products."
  },
  {
    id: "cq17",
    weekIds: [2],
    type: "mc",
    question: "Low birth weight (LBW) babies:",
    choices: [
      "Have a higher risk of hearing, language, and cognitive impairments",
      "Are more likely among twins and triplets",
      "Benefit from close physical contact with their caregivers",
      "All of the above"
    ],
    answer: 3,
    explanation: "LBW babies face multiple risks (hearing, language, cognitive impairments), are more common in multiple births, and benefit from skin-to-skin contact (kangaroo care) with caregivers."
  },
  {
    id: "cq18",
    weekIds: [2],
    type: "mc",
    question: "Which of these should parents do to decrease their baby's risk for sudden infant death syndrome (SIDS)?",
    choices: [
      "Put infants to sleep on their backs",
      "Put infants to sleep on their stomachs",
      "Put lots of pillows and blankets in the baby's bed",
      "A & C only"
    ],
    answer: 0,
    explanation: "The 'Back to Sleep' campaign recommends placing infants on their backs to sleep, which has significantly reduced SIDS rates. Soft bedding and stomach sleeping increase SIDS risk."
  },
  {
    id: "cq19",
    weekIds: [2],
    type: "mc",
    question: "The disproportionately large head of a 5-month-old fetus is the typical result of the normal process of:",
    choices: ["Lateral development", "Cephalocaudal development", "Proximal-distal development", "Bottom-up development"],
    answer: 1,
    explanation: "Cephalocaudal development means growth proceeds from head to tail. The head and brain develop earlier and faster than the rest of the body, which is why fetuses and young infants have disproportionately large heads."
  },
  {
    id: "cq20",
    weekIds: [2],
    type: "mc",
    question: "A researcher conducts a study and finds that the number of pets children have at home is positively correlated with their language abilities. From this finding, she can conclude that:",
    choices: [
      "Having more pets increases children's language abilities",
      "Having more pets decreases children's language abilities",
      "Children who have more pets have higher language abilities",
      "Children who have more pets have lower language abilities"
    ],
    answer: 2,
    explanation: "A positive correlation only tells us that two variables go together — children with more pets tend to have higher language abilities. It does NOT mean pets cause better language (correlation ≠ causation)."
  },
  {
    id: "cq21",
    weekIds: [2],
    type: "mc",
    question: "Which premise is at the foundation of the scientific method?",
    choices: [
      "Some hypotheses cannot be tested scientifically",
      "If a hypothesis is repeatedly tested and found to be incorrect, it must be abandoned",
      "Beliefs that are plausible to many experts are assumed to be accurate",
      "The scientific method is founded on all of the above"
    ],
    answer: 1,
    explanation: "A core premise of the scientific method is falsifiability — hypotheses must be testable, and if repeatedly disproven by evidence, they must be revised or abandoned."
  },
  {
    id: "cq22",
    weekIds: [2],
    type: "mc",
    question: "What is an important difference between longitudinal and microgenetic designs?",
    choices: [
      "Only longitudinal designs involve studying the same children repeatedly",
      "Only microgenetic designs involve studying the same children repeatedly",
      "Only longitudinal designs allow us to look at stability and change over long periods of time",
      "Only microgenetic designs allow us to look at stability and change over long periods of time"
    ],
    answer: 2,
    explanation: "Both designs study the same children over time, but longitudinal designs track stability and change over long periods (years), while microgenetic designs intensively observe change over short periods to understand the process of change."
  },
  {
    id: "cq23",
    weekIds: [2],
    type: "mc",
    question: "Which of the following is a limitation of using naturalistic observations to answer a scientific question?",
    choices: [
      "The researcher may interpret the data in a biased way",
      "It is often hard to know which factors are causing the behavior of interest",
      "No environment in the modern world is truly natural",
      "A & B only"
    ],
    answer: 3,
    explanation: "Naturalistic observation has two key limitations: observer bias (subjective interpretation) and the inability to determine causation (many uncontrolled factors are at play)."
  },
  {
    id: "cq24",
    weekIds: [2],
    type: "mc",
    question: "A researcher asks children a series of predetermined questions about how much they like to play with their siblings. The researcher is using:",
    choices: ["Naturalistic observation", "Structured interview", "Clinical interview", "Structured observation"],
    answer: 1,
    explanation: "A structured interview uses a predetermined set of questions asked in a fixed order. A clinical interview, by contrast, allows follow-up questions based on responses."
  },
  {
    id: "cq25",
    weekIds: [2],
    type: "mc",
    question: "A researcher wants to know to what degree a survey about children's friendships produces similar results when conducted with the same child on multiple occasions. This researcher is interested in:",
    choices: ["Internal validity", "Test-retest validity", "Internal reliability", "Test-retest reliability"],
    answer: 3,
    explanation: "Test-retest reliability measures whether a test produces consistent results when administered to the same person on different occasions. Reliability is about consistency; validity is about whether you're measuring what you intend to."
  },

  // --- Quiz 4: Genes and Behavior (Week 3) ---
  {
    id: "cq26",
    weekIds: [3],
    type: "mc",
    question: "Human chromosomes exist in which part of the cell?",
    choices: ["Nucleus", "Cell membrane", "Cell wall", "Mitochondria"],
    answer: 0,
    explanation: "Chromosomes, which carry DNA, are located in the nucleus of the cell."
  },
  {
    id: "cq27",
    weekIds: [3],
    type: "mc",
    question: "The egg and sperm each contain _____ chromosomes:",
    choices: ["23", "10", "No", "46"],
    answer: 0,
    explanation: "Egg and sperm cells (gametes) each contain 23 chromosomes. When they combine at fertilization, the resulting zygote has the full complement of 46 chromosomes (23 pairs)."
  },
  {
    id: "cq28",
    weekIds: [3],
    type: "mc",
    question: "When many different genes contribute to a given phenotype, this is known as:",
    choices: ["Genotype-environment correlation", "Dominant-recessive pattern of inheritance", "Myelination", "Polygenic inheritance"],
    answer: 3,
    explanation: "Polygenic inheritance means a trait is influenced by multiple genes rather than a single gene. Most complex traits (intelligence, height, personality) are polygenic."
  },
  {
    id: "cq29",
    weekIds: [3],
    type: "mc",
    question: "Behavior geneticists rely on:",
    choices: ["A & B", "Twin studies", "Neither A nor B", "Adoption studies"],
    answer: 0,
    explanation: "Behavior geneticists use both twin studies (comparing monozygotic vs. dizygotic twins) and adoption studies to estimate the relative contributions of genes and environment to traits."
  },
  {
    id: "cq30",
    weekIds: [3],
    type: "mc",
    question: "Different _____ of a gene act on the same trait but can contribute to different developmental outcomes.",
    choices: ["Genotypes", "Niches", "Phenotypes", "Alleles"],
    answer: 3,
    explanation: "Alleles are different versions of the same gene. For example, the gene for eye color has different alleles that can produce brown, blue, or green eyes."
  },
  {
    id: "cq31",
    weekIds: [3],
    type: "mc",
    question: "Sickle-cell anemia is a homozygous-recessive disease. If Lucy's parents are both heterozygous for the disease, what is the likelihood that Lucy will have sickle-cell anemia?",
    choices: ["100%", "75%", "50%", "25%"],
    answer: 3,
    explanation: "With two heterozygous parents (carriers), there is a 25% chance of a homozygous-recessive child (affected), 50% chance of heterozygous (carrier), and 25% chance of homozygous-dominant (unaffected)."
  },
  {
    id: "cq32",
    weekIds: [3],
    type: "mc",
    question: "The complete set of genetic material that an individual inherits is their _____, and the observable expression of the genetic material is their _____.",
    choices: ["Genotype; Phenotype", "Genome; DNA", "Epigenetics; Phenotype", "Genotype; Environment"],
    answer: 0,
    explanation: "Genotype is the full set of genes an individual inherits. Phenotype is the observable expression of those genes (appearance, behavior, etc.), which results from the interaction of genotype and environment."
  },
  {
    id: "cq33",
    weekIds: [3],
    type: "mc",
    question: "A front-page newspaper headline announces: 'Scientists have found the gene for intelligence.' You know that you should _____ because intelligence is a(n) _____ trait.",
    choices: [
      "Trust the headline; Gene-based",
      "Trust the headline; Experience-based",
      "Not trust the headline; Experience-based",
      "Not trust the headline; Polygenic"
    ],
    answer: 3,
    explanation: "Intelligence is a polygenic trait — influenced by many genes, each with a small effect, plus environmental factors. There is no single 'gene for intelligence.'"
  },
  {
    id: "cq34",
    weekIds: [3],
    type: "mc",
    question: "The study of _____ has demonstrated that behaviors and experiences influence _____, which in turn affects gene expression.",
    choices: [
      "Behavior genetics; Phenotypes",
      "Epigenetics; Methylation",
      "Genetics; Demethylation",
      "Biopsychology; Neurochemicals"
    ],
    answer: 1,
    explanation: "Epigenetics studies how experiences and behaviors influence methylation (and other chemical modifications to DNA), which can turn genes on or off without changing the DNA sequence itself."
  },
  {
    id: "cq35",
    weekIds: [3],
    type: "mc",
    question: "In a study of adopted children, some of whose biological parents were schizophrenic, psychologists found that children were far more likely to become schizophrenic if their biological parent was schizophrenic AND they were adopted into a troubled family. This finding illustrates:",
    choices: [
      "Nature and nurture interact to shape development",
      "Nurture is a greater influence on development than nature",
      "Nature is a greater influence on development than nurture",
      "Development is discontinuous"
    ],
    answer: 0,
    explanation: "This classic study shows gene-environment interaction: having the genetic predisposition alone wasn't sufficient — it took both the genetic risk AND an adverse environment to produce the outcome."
  },
  {
    id: "cq36",
    weekIds: [3],
    type: "mc",
    question: "A researcher is interested in the heritability of soccer skills. She compares identical twins who grew up together versus identical twins separated at birth. This researcher is using the _____ design.",
    choices: ["Twin study", "Adoptive study", "Adoptive twin study", "None of the above"],
    answer: 0,
    explanation: "This is a twin study design — comparing identical twins raised in the same vs. different environments to separate genetic from environmental influences."
  },

  // --- Quiz 5: Brain Development (Week 3) ---
  {
    id: "cq37",
    weekIds: [3],
    type: "mc",
    question: "The fatty sheath around the axons that speeds information transmission between neurons is called:",
    choices: ["Dendrites", "Myelin", "Cortex", "Glia"],
    answer: 1,
    explanation: "Myelin is a fatty sheath that wraps around axons, insulating them and dramatically increasing the speed of neural signal transmission."
  },
  {
    id: "cq38",
    weekIds: [3],
    type: "mc",
    question: "Which of the following is a major process in brain development?",
    choices: ["Gene encoding", "Neurogenesis", "Neuroanalysis", "Event-related potential"],
    answer: 1,
    explanation: "Neurogenesis (the creation of new neurons) is a major process in brain development, occurring primarily during the prenatal period."
  },
  {
    id: "cq39",
    weekIds: [3],
    type: "mc",
    question: "The fact that the brain can be affected by experience is known as:",
    choices: ["Ethnicity", "Toxicity", "Elasticity", "Plasticity"],
    answer: 3,
    explanation: "Plasticity refers to the brain's ability to be shaped and changed by experience. The young brain is especially plastic, which is why early experiences are so important."
  },
  {
    id: "cq40",
    weekIds: [3],
    type: "mc",
    question: "The two hemispheres of the brain communicate via the:",
    choices: ["Glial cells", "Interneurons", "Corpus callosum", "Association areas"],
    answer: 2,
    explanation: "The corpus callosum is a thick bundle of nerve fibers that connects the left and right hemispheres, allowing them to communicate and coordinate."
  },
  {
    id: "cq41",
    weekIds: [3],
    type: "mc",
    question: "Which statement is an example of experience-EXPECTANT processes?",
    choices: [
      "Individuals who have extensive training in playing string instruments have an increased cortical representation of their left hands",
      "Individuals are better able to remember the details of a magazine article after they have read it",
      "Children who are born with cataracts that are not removed early enough will have permanently impaired vision",
      "All of these are examples of experience-expectant processes"
    ],
    answer: 2,
    explanation: "Experience-expectant processes depend on experiences that are universal and expected (like visual input). Without these typical experiences during sensitive periods, normal development is impaired — as with cataracts blocking visual input. The string instrument example is experience-DEPENDENT (unique to the individual)."
  },
  {
    id: "cq42",
    weekIds: [3],
    type: "mc",
    question: "Times when the human brain is in particular need of — and especially susceptible to — external experience in order to develop normally are referred to as:",
    choices: ["Sensitive periods", "Experience-dependent phases", "Synaptic periods", "Plasticity periods"],
    answer: 0,
    explanation: "Sensitive periods are windows of time when the brain especially needs certain types of experience for normal development. Missing these experiences can lead to lasting deficits."
  },
  {
    id: "cq43",
    weekIds: [3],
    type: "mc",
    question: "Children who have sustained an injury to the brain have a better chance of regaining lost function than adults with a similar injury. This is because children's brains have more:",
    choices: ["Neurons", "Myelination", "Synapses", "Plasticity"],
    answer: 3,
    explanation: "Children's brains have greater plasticity — the ability to reorganize and compensate after injury. Other brain areas can take over functions that would normally be handled by the damaged area."
  },
  {
    id: "cq44",
    weekIds: [3],
    type: "mc",
    question: "Which of the following processes of brain development occurs entirely prenatally?",
    choices: ["Neurogenesis", "Synaptogenesis", "Synaptic pruning", "None of the above"],
    answer: 0,
    explanation: "Neurogenesis (the production of new neurons) occurs almost entirely during the prenatal period, largely complete by about 18 weeks gestation. Synaptogenesis and synaptic pruning continue well into postnatal life."
  },

  // --- Midterm 1: Perception/Learning questions (Week 4) ---
  {
    id: "cq45",
    weekIds: [4],
    type: "mc",
    question: "Infants Annabelle, Bailey, and Cindy are playing at a baby gym. Annabelle has very recently begun to crawl, Bailey has been crawling for a while, and Cindy has very recently begun to walk. They notice a toy has rolled down a very steep incline. Which infant(s) will likely attempt to go down the incline?",
    choices: ["Bailey only", "Bailey and Cindy", "Annabelle and Cindy", "Annabelle and Bailey"],
    answer: 2,
    explanation: "Newly mobile infants (Annabelle just started crawling, Cindy just started walking) haven't yet learned to gauge the risks of their new mode of locomotion. Experienced crawlers like Bailey have learned to avoid steep inclines. Each time a new form of locomotion begins, risk assessment must be re-learned."
  },
  {
    id: "cq46",
    weekIds: [4],
    type: "mc",
    question: "An infant plays with a toy block in the dark, so he cannot see it. Later, he is shown a ball and the block. He looks longer at the block. This demonstrates:",
    choices: ["Perceptual learning", "Shape learning", "Habituation", "Intermodal perception"],
    answer: 3,
    explanation: "Intermodal perception is the ability to integrate information across senses. The infant recognized the block visually after only experiencing it through touch in the dark — connecting tactile and visual information."
  },
  {
    id: "cq47",
    weekIds: [4],
    type: "mc",
    question: "Baby Leo hears a bell that he cannot see and immediately turns toward the sound. This is an indication that Leo has which ability?",
    choices: ["Object segregation", "Auditory localization", "Auditory segregation", "Pattern perception"],
    answer: 1,
    explanation: "Auditory localization is the ability to determine where a sound is coming from. Newborns show a primitive version of this, turning toward sounds, though the ability becomes more precise with age."
  },
  {
    id: "cq48",
    weekIds: [4],
    type: "mc",
    question: "Young infants find it equally easy to distinguish between faces of individual humans and individual monkeys. By the end of the first year, infants are much better at distinguishing human faces and often lose the ability to tell monkey faces apart. This is an example of:",
    choices: ["Perceptual narrowing", "Habituation", "Classical conditioning", "Attachment"],
    answer: 0,
    explanation: "Perceptual narrowing is the process by which infants' perceptual abilities become increasingly tuned to the types of stimuli they regularly encounter (human faces, native language sounds) at the expense of less common stimuli."
  },
  {
    id: "cq49",
    weekIds: [4],
    type: "mc",
    question: "Which of the following has been found to correlate with higher IQ and general cognitive ability later in life?",
    choices: [
      "The speed with which an infant habituates to novel stimuli",
      "The age at which an infant begins to crawl",
      "The efficiency of an infant to respond to distinct features in the environment",
      "The ability of an infant to distinguish individual human faces"
    ],
    answer: 0,
    explanation: "Faster habituation in infancy — indicating more efficient information processing — is a modest but reliable predictor of higher IQ later in life."
  },
  {
    id: "cq50",
    weekIds: [4],
    type: "mc",
    question: "Three-year-old Maya notices most blocks in her toy bin are blue, with only one yellow block. Later, without looking, she reaches in and pulls out the yellow block and looks surprised. Her surprise is best explained by:",
    choices: ["Rational learning", "Classical conditioning", "Instrumental conditioning", "Observational learning"],
    answer: 0,
    explanation: "Rational learning involves making inferences based on statistical probabilities. Maya expected to pull out a blue block (most likely outcome) and was surprised by the improbable yellow block — showing she had formed expectations based on the distribution of colors."
  },
  {
    id: "cq51",
    weekIds: [4],
    type: "mc",
    question: "When stroked on the cheek near the mouth, newborn infants exhibit the _____ reflex.",
    choices: ["Rooting", "Grasping", "Moro", "Tonic neck"],
    answer: 0,
    explanation: "The rooting reflex causes infants to turn their head toward the source of touch on their cheek and open their mouth — an adaptive reflex that helps them find the nipple for feeding."
  },
  {
    id: "cq52",
    weekIds: [4],
    type: "mc",
    question: "Newborn infants' bias toward _____ is an underlying factor in their attraction to human faces.",
    choices: [
      "Objects with eyes and noses",
      "Oval-shaped objects",
      "Objects with irregularities around the perimeter",
      "Arrangements with more elements in the upper half than the lower half"
    ],
    answer: 3,
    explanation: "Research shows that newborns prefer patterns with more elements in the upper half (top-heavy configurations), which happens to match the structure of human faces (eyes and eyebrows are in the upper half)."
  },
  {
    id: "cq53",
    weekIds: [4],
    type: "mc",
    question: "Baby Janet must wear a patch over one eye because she has an eye infection. She will be unable to use which depth perception cue?",
    choices: ["Binocular disparity", "Relative size", "Object segregation", "Optical expansion"],
    answer: 0,
    explanation: "Binocular disparity relies on the slightly different images received by each eye to perceive depth. With one eye patched, Janet can still use monocular cues (relative size, optical expansion) but not binocular disparity."
  },
  {
    id: "cq54",
    weekIds: [4],
    type: "mc",
    question: "To investigate whether infants discriminate dogs from cats, a researcher shows infants pictures of many different dogs until they seem bored, then shows a cat and measures looking time. This method is called the _____ technique.",
    choices: ["Head turn", "Contrast sensitivity", "Preferential looking", "Habituation-dishabituation"],
    answer: 3,
    explanation: "The habituation-dishabituation technique first habituates infants to one category (dogs), then presents a new category (cats). If infants look longer at the cat (dishabituate), it shows they can discriminate between the categories."
  },
  {
    id: "cq55",
    weekIds: [4],
    type: "mc",
    question: "In the study by Gergely et al. (2002), 14-month-old infants watched a woman use her head to push a button to light a lamp. Infants copied her only when her hands were free, not when her hands were occupied. This is an example of:",
    choices: ["Overimitation", "Statistical learning", "Naturalistic observation", "Rational imitation"],
    answer: 3,
    explanation: "Rational imitation means infants don't just copy actions blindly — they consider WHY the person used that method. If hands were free, the head-push must be intentional (so they copy it). If hands were occupied, the head-push was just a workaround (so they use their hands instead)."
  },
  {
    id: "cq56",
    weekIds: [4],
    type: "mc",
    question: "Baby Lucas hears a series of syllables: 'ba, da, ga, ba, da, na, ba, da, ma.' Over time, he notices that 'ba' is always followed by 'da.' This ability to pick up on predictable patterns is an example of:",
    choices: ["Habituation", "Statistical learning", "Operant conditioning", "Classical conditioning"],
    answer: 1,
    explanation: "Statistical learning is the ability to detect regularities and patterns in sensory input. Infants track the probability that certain sounds follow others, which helps them segment words from continuous speech."
  },
  // --- Quiz 6: Cognitive Development II (Week 6) ---
  {
    id: "cq57",
    weekIds: [6],
    type: "mc",
    question: "The word 'dynamic' in Dynamic Systems theory indicates that:",
    choices: [
      "development occurs in clearly defined stages",
      "development is marked by continual change",
      "developmental change cannot be studied scientifically",
      "development is driven primarily by genetic factors"
    ],
    answer: 1,
    explanation: "Dynamic Systems theory emphasizes that development is a process of continual change, where multiple components interact and self-organize over time rather than progressing through fixed stages."
  },
  {
    id: "cq58",
    weekIds: [6],
    type: "mc",
    question: "______ theory emphasizes that children's development is a product of their surrounding culture and that children are active contributors to their own development through their interactions with members of their community.",
    choices: ["Dynamic Systems", "Core knowledge", "Sociocultural", "Information processing"],
    answer: 2,
    explanation: "Sociocultural theory (Vygotsky) emphasizes that cognitive development is shaped by cultural context and social interactions. Children learn through guided participation with more knowledgeable members of their community."
  },
  {
    id: "cq59",
    weekIds: [6],
    type: "mc",
    question: "The idea that children have some innate, or inborn, knowledge about the way the world works is associated with which theoretical perspective?",
    choices: ["Sociocultural theory", "Dynamic Systems theory", "Core knowledge theory", "Overlapping Waves theory"],
    answer: 2,
    explanation: "Core knowledge theory proposes that infants are born with innate knowledge systems for understanding basic aspects of the world, such as objects, numbers, faces, and spatial relationships."
  },
  {
    id: "cq60",
    weekIds: [6],
    type: "mc",
    question: "Piaget's theory depicted children of a given age as using one particular strategy to solve problems. In contrast, ______ suggests that children actually use a variety of strategies, similar to overlapping waves.",
    choices: ["Sociocultural theory", "Core knowledge theory", "Dynamic Systems theory", "Overlapping Waves theory"],
    answer: 3,
    explanation: "Overlapping Waves theory (Siegler) proposes that children use multiple strategies at any given age, with the frequency of each strategy changing over time like overlapping waves, rather than abruptly shifting from one stage to the next."
  }
];
