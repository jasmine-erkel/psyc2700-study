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
      "Why study child development? Three key reasons: (1) to raise children effectively, (2) to inform social policy decisions (education, health, welfare), and (3) to understand human nature — children provide a window into fundamental questions about how we become who we are.",
      "Historical foundations — Plato believed children are born with innate knowledge and parents should direct their development. Aristotle emphasized that knowledge comes from experience (fit for 'empiricism'). John Locke (1632–1704) proposed the 'tabula rasa' (blank slate) — children are shaped entirely by experience, and parents should mold them through reward and example. Jean-Jacques Rousseau (1712–1778) believed children are innately good and develop through stages: infancy (learning through senses), childhood (concrete thinking), and adolescence (reasoning and empathy). These early debates on nature vs. nurture set the stage for modern developmental psychology.",
      "Darwin's contribution — His theory of evolution (natural selection) shaped developmental psychology by introducing the idea that children's behaviours may have adaptive value. Baby biographies (detailed observations of individual children) were among the first scientific approaches to studying development.",
      "The rise of developmental science — Social reform movements in the 19th-20th centuries led to child labour laws and compulsory education. Organizations like the Children's Bureau (1912) pushed for scientific research on children's welfare. Developmental psychology became a formal discipline.",
      "7 Enduring Themes of Child Development: These themes recur throughout the course and the textbook. (1) Nature and Nurture: development is shaped by the interplay of genes (nature) and environment (nurture) — they interact continuously rather than working in isolation. The genome provides a blueprint, but environmental factors (nutrition, parenting, culture) influence how genes are expressed. (2) The Active Child: children are not passive recipients of experience — they actively contribute to their own development by choosing activities, seeking stimulation, and interpreting experiences in their own way. Even infants shape their environments through their temperament and behaviour. (3) Continuity/Discontinuity: is development a smooth, gradual process (like a ramp) or does it proceed in discrete stages (like a staircase)? The answer depends on what aspect of development you examine — some processes are continuous, others show stage-like transitions.",
      "(4) Mechanisms of Change: what processes cause development to occur? These include biological maturation, learning, social interaction, and self-organization. Understanding mechanisms (not just describing changes) is a central goal. (5) The Sociocultural Context: development is deeply shaped by the child's cultural, economic, historical, and social circumstances. Children growing up in different cultures, time periods, or socioeconomic backgrounds have fundamentally different developmental experiences. Bronfenbrenner's bioecological model illustrates this with nested systems of influence: microsystem (immediate settings like family and school), mesosystem (connections between microsystems), exosystem (settings the child doesn't directly participate in but that affect them, like parents' workplaces), macrosystem (cultural values, laws, customs), and chronosystem (changes over time). (6) Individual Differences: children of the same age vary enormously in every aspect of development. Understanding the sources of these differences — genetic, environmental, or their interaction — is a key goal. (7) Research and Children's Welfare: developmental research should ultimately improve children's lives through better policies, programs, and parenting practices.",
      "Major Theoretical Frameworks — Piaget's Constructivism: children actively construct knowledge through interaction with the world, progressing through qualitatively different stages (sensorimotor → preoperational → concrete operational → formal operational). Vygotsky's Sociocultural Theory: cognitive development is driven by social interaction and cultural tools (especially language); emphasizes the zone of proximal development. Information-Processing Theories: the mind works like a computer with limited processing capacity that increases with age; focus on attention, memory, and problem-solving strategies. Social Learning Theory (Bandura): children learn through observation, imitation, and reinforcement — not just direct experience. Key concept: children can learn new behaviours simply by watching others (observational learning). Psychoanalytic Theories — Freud: development is driven by unconscious drives and early experiences, progressing through psychosexual stages. Erikson: expanded Freud's theory to cover the whole lifespan with psychosocial stages, each involving a central conflict (e.g., trust vs. mistrust in infancy). Each theory highlights different aspects of development and contributes important insights."
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
      "METHODS (Chapter 1.4) — The scientific method requires that hypotheses be testable and falsifiable. If a hypothesis is repeatedly tested and found to be incorrect, it must be revised or abandoned. Two key properties of good measurements: reliability (consistency — does the measure produce similar results on repeated occasions? test-retest reliability) and validity (accuracy — does the measure actually assess what it's supposed to?). Internal validity = confidence that effects are due to the variable being studied; external validity = ability to generalize findings beyond the study.",
      "Data-gathering contexts — Structured observation: researcher creates a controlled situation and records how children respond (consistent conditions for all participants, but less naturalistic). Naturalistic observation: watching behaviour in real-world settings (ecologically valid, but hard to determine causation and subject to observer bias). Interviews: structured (predetermined questions in fixed order), clinical (flexible follow-up questions based on responses). Each method has trade-offs between control and ecological validity.",
      "Correlational designs — Measure two or more variables and examine their relationship. Correlation coefficient ranges from -1 to +1. Positive correlation: both variables increase together (e.g., more pets ↔ higher language scores). Negative correlation: one increases while the other decreases. CRITICAL: correlation does NOT imply causation due to the direction-of-causation problem (which variable causes which?) and the third-variable problem (an unmeasured variable may cause both). Only experiments can establish causation.",
      "Experimental designs — The only method that can establish cause and effect. Researchers manipulate an independent variable and measure its effect on the dependent variable. Random assignment ensures groups are equivalent. Experimental control holds all other factors constant. Example: to test whether a reading program improves vocabulary, randomly assign children to program vs. no-program groups and compare vocabulary scores.",
      "Developmental research designs — Cross-sectional: compare different age groups at a single point in time (quick, but cannot track individual change; cohort effects possible). Longitudinal: follow the same children over time (reveals individual patterns of change, but expensive, time-consuming, and subject to attrition/practice effects). Microgenetic: intensively study children during a period of rapid change (reveals the process of change in detail, but only over short periods). Important difference between longitudinal and microgenetic: only longitudinal designs allow us to examine stability and change over long periods.",
      "Research ethics — Studies must protect children's welfare. Informed consent required from parents (and assent from older children). Children must not be harmed physically or psychologically. Confidentiality must be maintained. In Canada, governed by the Tri-Council Policy Statement on Ethical Conduct for Research Involving Humans.",
      "PRENATAL DEVELOPMENT (Chapter 2) — Conception: a sperm cell fertilizes an egg cell, forming a zygote — a single cell containing 46 chromosomes (23 from each parent). Prenatal development is the most rapid period of human development. Three stages: (1) Germinal period (conception to ~2 weeks): zygote undergoes rapid mitosis (cell division producing identical cells), travels down the fallopian tube, and implants in the uterine wall. Inner cells become the embryo, outer cells become the placenta and support structures. (2) Embryonic period (~3–8 weeks): most critical period for organ formation. Neural tube forms (becomes brain and spinal cord). Heart begins beating. By week 8, all major organ systems have begun to develop. Embryo is now ~1 inch long. (3) Fetal period (~9 weeks–birth): rapid growth and refinement of existing structures. Bones harden, muscles develop, brain develops rapidly. The fetus exhibits cephalocaudal development (growth proceeds from head downward — explains the disproportionately large head) and proximodistal development (growth proceeds from the center outward).",
      "Key prenatal processes — The placenta is a semi-permeable organ that keeps the mother's and fetus's circulatory systems SEPARATE while allowing exchange of oxygen, nutrients, and waste. The amniotic sac cushions and protects the fetus. Apoptosis (programmed cell death) is essential for normal development — for example, the webbing between fingers and toes is eliminated through apoptosis, allowing separate digits to form. Cell differentiation allows a single fertilized egg to produce the many specialized cell types of the body.",
      "Teratogens — Environmental agents that can cause abnormal prenatal development. Include alcohol, tobacco, drugs, pollutants, and infections. Effects depend on: (1) Timing — same teratogen can cause different defects depending on which structures are developing at the time of exposure; embryonic period is most vulnerable for major structural defects. (2) Dose-response relation — the MORE exposure, the MORE severe the effects (higher dose = more damage). (3) Threshold effect — below a certain level of exposure, a teratogen has NO detectable effect, but above that threshold, damage occurs. These are different concepts. (4) Individual differences — due to genetics, some fetuses are more vulnerable than others.",
      "Fetal Alcohol Spectrum Disorder (FASD) — The leading preventable cause of intellectual disability. Caused by maternal alcohol consumption during pregnancy. Effects range from mild learning difficulties to full Fetal Alcohol Syndrome (FAS): facial abnormalities, growth retardation, and intellectual disability. No safe amount of alcohol during pregnancy has been established. Other common teratogens: tobacco (low birth weight, premature birth), illegal drugs (cocaine, opioids), prescription medications (certain antibiotics, antidepressants), and environmental pollutants (lead, mercury).",
      "Fetal learning and competencies — The fetus is NOT a passive organism. Fetal learning research shows: (1) Newborns recognize and prefer their mother's voice over strangers' voices (DeCasper & Fifer, 1980). (2) Newborns prefer stories read repeatedly during pregnancy over novel stories. (3) The fetus can detect flavors — amniotic fluid takes on flavors from the mother's diet, and newborns prefer those flavors. (4) The fetus 'breathes' amniotic fluid and experiences smells. (5) The fetus CANNOT distinguish colours because there is no light in the womb.",
      "The newborn — States of arousal cycle through sleep (active/REM and quiet/non-REM — newborns spend ~50% of sleep in REM vs. ~20% for adults), alert, fussing, and crying. SIDS (Sudden Infant Death Syndrome): unexplained death during sleep; prevention includes placing infants on their BACKS to sleep ('Back to Sleep' campaign), avoiding soft bedding, and avoiding overheating. Low birth weight (LBW): babies weighing less than 2500g (5.5 lbs) at birth. LBW babies have higher risk of hearing, language, and cognitive impairments; are more likely among twins and triplets; and benefit from close physical contact with caregivers (kangaroo care). Risk factors for negative birth outcomes include poverty, maternal stress, inadequate prenatal care, and teen pregnancy."
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
      "GENES AND BEHAVIOUR (Chapter 3.1–3.2) — DNA (deoxyribonucleic acid) is the molecule that carries genetic instructions. Genes are sections of DNA that code for proteins. Chromosomes are long strands of DNA; humans have 46 chromosomes arranged in 23 pairs. 22 pairs are autosomes (non-sex chromosomes); 1 pair is sex chromosomes (XX = female, XY = male). Gametes (egg and sperm) each contain only 23 chromosomes, so that when they combine at fertilization, the resulting zygote has the full 46.",
      "Genotype vs. Phenotype — Genotype: the complete set of genetic material (genes) an individual inherits. Phenotype: the observable expression of the genotype — what you can see (appearance, behaviour, abilities). The phenotype results from the INTERACTION of genotype and environment. Same genotype can produce different phenotypes depending on environmental conditions.",
      "Alleles and inheritance patterns — Alleles are different versions of the same gene (e.g., the gene for eye color has alleles for brown, blue, green). Each person inherits two alleles for each gene (one from each parent). Dominant alleles are expressed when even one copy is present. Recessive alleles are only expressed when two copies are present (homozygous recessive). Heterozygous = two different alleles. Homozygous = two identical alleles. Example: sickle-cell anemia is a homozygous-recessive disease — both parents must carry the recessive allele. If both parents are heterozygous carriers, there is a 25% chance their child will have the disease, 50% chance of being a carrier, 25% chance of being unaffected.",
      "Polygenic inheritance — Most complex traits (intelligence, height, personality, mental health) are polygenic — influenced by MANY genes, each contributing a small effect. This is why you cannot find 'the gene for intelligence' — it's a polygenic trait influenced by hundreds of genes plus environmental factors. Sex-linked traits are carried on the X chromosome (e.g., colour blindness, hemophilia) and are more common in males because they have only one X chromosome.",
      "Genetic disorders — PKU (phenylketonuria): recessive disorder; cannot metabolize phenylalanine; intellectual disability results if untreated, but a special diet prevents damage (example of gene-environment interaction). Sickle-cell disease: recessive; abnormal hemoglobin causes red blood cells to sickle, blocking blood flow. Down syndrome: trisomy 21 (three copies of chromosome 21); intellectual disability, characteristic facial features; risk increases with maternal age. Genetic testing and counselling help families understand risks.",
      "Behaviour genetics — The field that studies how genetic and environmental factors contribute to individual differences in behaviour. Two main research designs: (1) Twin studies: compare monozygotic (identical, MZ) twins — who share 100% of DNA — with dizygotic (fraternal, DZ) twins — who share ~50%. If MZ twins are more similar than DZ twins on a trait, genetics plays a role. (2) Adoption studies: compare adopted children to both their biological parents (genetic influence) and adoptive parents (environmental influence). Behaviour geneticists rely on BOTH twin and adoption studies.",
      "Heritability — The proportion of variation in a trait within a population that is attributable to genetic differences. Important: heritability applies to POPULATIONS, not individuals. A heritability of 50% for IQ does not mean 50% of YOUR intelligence is genetic. Heritability can differ across environments and populations.",
      "Gene-environment interactions — Genes and environment are not independent — they interact in complex ways. (1) Gene-environment correlation: children's genes influence the environments they experience. Three types: passive (parents provide genes AND environment), evocative (child's genetically influenced traits evoke responses from others), active/niche-picking (children seek environments that match their genetic predispositions). (2) Epigenetics: the study of how experiences and behaviours influence methylation and other chemical modifications to DNA, which can turn genes on or off WITHOUT changing the DNA sequence. Behaviours and experiences influence methylation, which in turn affects gene expression. Example (Dr. Krol's research): the quality of maternal behaviour at 5 months predicted methylation of infants' oxytocin receptor gene (OXTR) at 18 months — showing how caregiving experiences directly affect gene expression.",
      "Gene-environment interaction example — A study of adopted children whose biological parents were schizophrenic found that children were far more likely to develop schizophrenia if they had the genetic predisposition AND were adopted into a troubled family. Neither factor alone was sufficient — this illustrates that nature and nurture INTERACT to shape development.",
      "BRAIN DEVELOPMENT (Chapter 3.3) — The brain contains ~100 billion neurons (nerve cells). Each neuron has: a cell body, dendrites (receive signals), an axon (sends signals), and synapses (gaps between neurons where neurotransmitters are released). Major processes of brain development: (1) Neurogenesis: the production of new neurons — occurs almost ENTIRELY during the prenatal period (largely complete by ~18 weeks gestation). This is the ONLY major brain development process that occurs entirely prenatally. (2) Cell migration: newly formed neurons travel to their designated locations. (3) Cell differentiation: neurons become specialized for different functions.",
      "(4) Synaptogenesis: formation of synapses (connections between neurons). Begins prenatally but accelerates after birth — by age 2, children have MORE synapses than adults. Peak synapse density varies by brain region. (5) Synaptic pruning: 'use it or lose it' — unused or weak synaptic connections are eliminated, while frequently used connections are strengthened. This makes the brain more efficient and specialized. Pruning continues through adolescence. (6) Myelination: axons are coated with myelin, a fatty sheath that dramatically increases the speed of neural signal transmission. Continues into early adulthood. Key brain structures: the cerebral cortex (outer layer, responsible for higher-order thinking) has four lobes — frontal (planning, decision-making, self-regulation), parietal (spatial processing), temporal (language, memory, auditory processing), occipital (vision). The two hemispheres communicate via the corpus callosum. Lateralization: certain functions are more concentrated in one hemisphere (e.g., language typically left hemisphere).",
      "Brain plasticity — The brain's ability to be shaped and changed by experience. Children who sustain brain injuries have a better chance of recovery than adults because children's brains have MORE PLASTICITY — other brain areas can take over functions normally handled by the damaged area. Two types of plasticity: (1) Experience-expectant plasticity: the brain EXPECTS certain universal experiences (visual input, language exposure, social interaction) during sensitive periods. If these expected experiences don't occur, development is impaired. Example: children born with cataracts that aren't removed early enough will have permanently impaired vision — the visual cortex needed input during a sensitive period. (2) Experience-dependent plasticity: the brain is shaped by experiences UNIQUE to the individual (learning to play an instrument, speaking a particular language). Example: musicians who extensively train on string instruments have increased cortical representation of their left hand. NOTE: the string instrument example is experience-DEPENDENT, not experience-expectant.",
      "Sensitive periods — Times when the brain is particularly in need of — and especially susceptible to — certain types of external experience for normal development. Missing critical experiences during sensitive periods can have lasting effects that are difficult to reverse. These are distinct from 'critical periods' (originally thought to be absolute windows) — sensitive periods acknowledge that some recovery may be possible, though it becomes increasingly difficult. Methods for studying brain development: EEGs/ERPs (electrophysiological recordings measuring electrical brain activity), MRI/fMRI (structural and functional brain imaging), and NIRS/fNIRS (near-infrared spectroscopy measuring blood oxygenation) — ALL of these are valid methods used in developmental cognitive neuroscience."
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
      "PERCEPTION (Chapter 5.1) — How do we study what infants can perceive? Key methods: (1) Preferential looking technique (Fantz): present two stimuli side by side — if infants consistently look longer at one, they can discriminate between them and have a preference. (2) Habituation-dishabituation: repeatedly show a stimulus until the infant gets bored (habituates), then present something new — if the infant looks longer (dishabituates), they noticed the change. This is one of the most important methods in infant research. (3) Head-turn preference: train infants to turn their head toward interesting sounds. (4) Physiological measures: heart rate changes, brain activity (ERPs).",
      "Visual development — Visual acuity is poor at birth (~20/600) but improves rapidly to near-adult levels by ~8 months. Contrast sensitivity also develops gradually. Colour vision is limited at birth but functional by ~2-3 months. Face perception: newborns show a bias toward arrangements with more elements in the UPPER HALF — this top-heavy preference underlies their attraction to faces (eyes and eyebrows are in the upper half). By 3-4 months, infants prefer attractive faces. By end of first year, perceptual narrowing occurs — infants become better at discriminating faces of their own race/ethnicity and lose the ability to distinguish individual faces of other races (same phenomenon seen with monkey faces — young infants can distinguish individual monkeys, but older infants cannot).",
      "Depth perception — Visual cliff experiments (Gibson & Walk): a glass-topped table with a shallow side and a deep side. Infants who can crawl (~6-7 months) refuse to cross the 'deep' side, showing depth perception. Depth cues include: binocular disparity (slightly different images from each eye — requires BOTH eyes, so a patch over one eye eliminates this cue), optical expansion (objects loom larger as they approach), and relative size (distant objects look smaller). Auditory perception: newborns prefer speech over other sounds; can distinguish phonemes from all languages at birth, but by ~10-12 months, perceptual narrowing tunes perception to native language sounds. Auditory localization: newborns turn toward sounds (e.g., Baby Leo hears a bell and turns toward it), though this ability becomes more precise with age.",
      "Taste, smell, and touch — Newborns show clear preferences: prefer sweet over bitter/sour. Respond to pain and are soothed by touch, sucking, and rocking. Can detect odors and prefer the smell of their own mother's breast milk. Intermodal perception: the ability to integrate information from MULTIPLE senses. Example: an infant plays with a block in the dark (touch only), then later recognizes it visually — connecting tactile and visual information. This ability is present early in infancy and becomes more sophisticated.",
      "MOTOR DEVELOPMENT (Chapter 5.2) — Reflexes: innate, automatic responses present at birth that have survival value. Rooting reflex: when stroked on the cheek near the mouth, infant turns head toward touch and opens mouth (helps find nipple for feeding). Grasping reflex: infant grips anything placed in palm. Moro (startle) reflex: arms fling out when startled. Tonic neck reflex: when head turns to one side, arm on that side extends. Stepping reflex: stepping motions when held upright with feet touching a surface. Most reflexes disappear within the first months as the cortex matures and voluntary control develops.",
      "Motor milestones follow a generally predictable sequence: rolling over (~4 months), sitting without support (~6 months), crawling (~8 months), standing (~10 months), walking (~12 months). However, there is significant individual and cultural variation in timing. The sequence is more consistent than the timing. Important insight from research on locomotion and slopes: newly mobile infants (those who just started crawling, or those who just started walking) have NOT yet learned to gauge the risks of their new mode of locomotion and will attempt to go down steep slopes. Experienced crawlers have learned to avoid steep slopes. But when experienced crawlers begin to WALK, they lose this caution and must re-learn risk assessment for the new locomotion mode. This means Annabelle (new crawler) and Cindy (new walker) would attempt a steep incline, but Bailey (experienced crawler) would not.",
      "Dynamic systems theory of motor development — New motor skills are NOT simply the result of brain maturation. Instead, they emerge from the dynamic interaction of multiple factors: physical growth (body proportions, muscle strength), brain maturation, motivation, and environmental support. Development is self-organizing — small changes in one component can trigger reorganization of the whole system.",
      "LEARNING (Chapter 5.3) — Habituation: decreased response to repeated or familiar stimulation. When a NEW stimulus is presented and interest increases, this is dishabituation. Habituation is both a key research method AND an important learning mechanism. Speed of habituation in infancy has been found to correlate with higher IQ and general cognitive ability later in life — faster habituators are more efficient information processors.",
      "Classical conditioning — Learning that two events go together (association). An initially neutral stimulus (e.g., a tone) is paired with an unconditioned stimulus (e.g., a puff of air) that naturally produces a response (blinking). After repeated pairings, the neutral stimulus alone triggers the response. Newborns can be classically conditioned. Operant/instrumental conditioning — Learning from consequences. Behaviours followed by reinforcement (reward) increase; behaviours followed by punishment decrease. Example: Rovee-Collier's mobile conjugate reinforcement paradigm — infants learn to kick to make a mobile move, demonstrating that even very young infants can learn from their actions and retain this memory for days or weeks.",
      "Observational learning/imitation — Infants learn by watching others. Rational imitation (Gergely et al., 2002): 14-month-olds watched a woman use her head to push a button to light a lamp. When her hands were FREE, infants copied the head action (she must have chosen it deliberately). When her hands were OCCUPIED (holding a blanket), infants used their hands instead (she used her head because she had to, not because it was the best method). This shows infants don't blindly imitate — they consider WHY someone performed an action and make rational inferences about the best method. Statistical learning: the ability to detect patterns and regularities in sensory input. Example: Baby Lucas hears syllables and notices that 'ba' is always followed by 'da' — tracking the probability that certain sounds follow others. This mechanism is crucial for word segmentation in language acquisition."
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
      "PIAGET'S THEORY (Chapter 4.1) — Jean Piaget (1896–1980) was the most influential developmental psychologist. His constructivist theory proposes that children ACTIVELY construct their understanding of the world through their interactions with it. Children are not passive recipients of knowledge — they are 'little scientists' who build and revise theories about how the world works.",
      "Core cognitive processes — (1) Schemas: organized patterns of thought or action that represent the child's understanding. (2) Assimilation: incorporating new experiences into EXISTING schemas (fitting new information into what you already know). (3) Accommodation: modifying EXISTING schemas or creating new ones to fit new experiences that don't match current understanding. (4) Equilibration: the drive to maintain a balance between assimilation and accommodation. When existing schemas fail to explain new experiences, the child experiences disequilibrium — cognitive discomfort that motivates them to accommodate (learn). This cycle of equilibrium → disequilibrium → new equilibrium drives cognitive development.",
      "Sensorimotor Stage (birth to ~2 years) — Infants learn about the world through their senses and motor actions. Major achievement: object permanence — the understanding that objects continue to exist even when out of sight. Young infants (under ~8 months) act as if hidden objects cease to exist (out of sight, out of mind). Around 8 months, infants begin to search for hidden objects. The A-not-B error: after successfully finding an object hidden at location A several times, when the object is visibly moved to location B, infants around 8-12 months still search at A. This error reveals the limits of their understanding and gradually disappears. By ~12 months, infants can track visible displacements; by ~18 months, invisible displacements (inferring where a hidden object was moved). Substages progress from pure reflexes → deliberate action → mental representation.",
      "Preoperational Stage (~2 to 7 years) — Major advance: symbolic representation — the ability to use symbols (words, images, pretend play) to represent objects and events mentally. Children in this stage are much more sophisticated thinkers than sensorimotor infants, but have key limitations: (1) Egocentrism: difficulty taking another person's spatial or cognitive perspective. Demonstrated by the three-mountain task — children describe what THEY see, not what someone on the other side of the display would see. (2) Centration: focusing on one dimension of a problem while ignoring others. Leads to failure on conservation tasks. (3) Conservation failure: inability to understand that the quantity of something remains the same even when its appearance changes. Examples: pouring liquid from a short wide glass to a tall thin glass — preoperational children say the tall glass has 'more' because they center on height. Same with number (spreading out a row of coins), mass (reshaping a ball of clay), etc.",
      "Concrete Operational Stage (~7 to 12 years) — Children can think logically about CONCRETE (tangible, real) objects and events. Key achievements: (1) Conservation mastery — understand that quantity is conserved despite perceptual changes. (2) Classification — can organize objects into hierarchies of categories. (3) Seriation — can arrange objects in a logical order (shortest to tallest). (4) Reversibility — understand that actions can be undone (if you pour water back, it's the same amount). Limitation: thinking is still tied to concrete, observable reality — difficulty with abstract, hypothetical reasoning.",
      "Formal Operational Stage (~12 years and older) — The hallmark is abstract and hypothetical thinking. Adolescents can: (1) Think about possibilities, not just realities. (2) Use systematic, scientific reasoning (e.g., the pendulum task — systematically test each variable while holding others constant). (3) Engage in hypothetico-deductive reasoning — form hypotheses and test them logically. Not all adolescents or adults consistently operate at this level — formal operations are not universal.",
      "Piaget's legacy and criticisms — Legacy: Piaget pioneered the scientific study of cognitive development, generated thousands of studies, and showed that children think in qualitatively different ways than adults. Criticisms: (1) He UNDERESTIMATED children's cognitive abilities — infants and young children are more competent than Piaget believed (shown by newer methods like habituation and violation-of-expectation). (2) Development is MORE CONTINUOUS than his stage theory suggests — children don't make abrupt transitions between stages. (3) Children's abilities are DOMAIN-SPECIFIC rather than general — a child might show concrete operational thinking in one area but not another. (4) Piaget underemphasized the role of social interaction and cultural context in cognitive development (addressed by Vygotsky). (5) Vague about the mechanisms of change — how exactly does the transition from one stage to the next occur? Despite these criticisms, Piaget's theory remains foundational."
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
      "INFORMATION-PROCESSING THEORIES (Chapter 4.2) — View the mind as analogous to a computer: information is encoded (input), stored (memory), and retrieved (output). Unlike Piaget's stage theory, information-processing theories see development as CONTINUOUS — gradual improvements in processing speed, capacity, and strategies, rather than qualitative stage shifts. Key developmental changes: (1) Processing speed increases with age (faster encoding and retrieval). (2) Working memory capacity grows (can hold and manipulate more information simultaneously). (3) Children develop increasingly sophisticated strategies for attention, memory, and problem-solving. (4) Knowledge base expands, making new information easier to learn (existing knowledge provides a framework for new learning).",
      "Overlapping Waves Theory (Siegler) — Piaget depicted children of a given age as using ONE particular strategy. In contrast, Siegler's Overlapping Waves theory shows that children actually use a VARIETY of strategies at any given age, like overlapping waves. Over time, more effective strategies are used more frequently while less effective ones are used less — but the shift is gradual, not abrupt. Example: in addition, a child might use counting on fingers, counting from the larger number, and retrieval from memory — all in the same week. Gradually, the more efficient strategies become dominant.",
      "CORE KNOWLEDGE THEORIES (Chapter 4.3) — Nativist perspective proposing that children have some INNATE, inborn knowledge about the way the world works in areas that are evolutionarily important for survival. Infants are born with 'core knowledge' in several domains: (1) Physics/objects: understanding that objects are solid, persist when hidden, and are affected by gravity. (2) Number: sensitivity to quantity and simple arithmetic. (3) Faces/people: preferential attention to faces and understanding of intentional action. (4) Language: innate capacity to learn language. Evidence: Baillargeon's violation-of-expectation studies showed that very young infants have a naive understanding of objects — they look longer at 'impossible' events (objects passing through barriers, appearing to defy gravity), suggesting they EXPECT objects to behave in certain ways. This contradicts Piaget's claim that object knowledge develops slowly over the sensorimotor period.",
      "SOCIOCULTURAL THEORIES (Chapter 4.4) — Vygotsky's theory emphasizes that children's development is a product of their SURROUNDING CULTURE and that children are ACTIVE CONTRIBUTORS to their own development through their interactions with members of their community. Cognitive development is fundamentally a social process — children learn by participating in culturally organized activities with more experienced partners. Cultural tools (language, number systems, writing, computers) shape how children think. Different cultures emphasize different skills and values, producing different developmental pathways.",
      "Zone of Proximal Development (ZPD) — The range between what a child can do INDEPENDENTLY and what they can do with HELP from a more skilled partner (parent, teacher, peer). Learning occurs most effectively within this zone. Below the ZPD = too easy, no growth. Above the ZPD = too difficult, even with help. Scaffolding: the process by which a more knowledgeable person provides support tailored to the child's current level, then gradually WITHDRAWS that support as the child becomes more competent (like removing scaffolding from a building as it becomes self-supporting). Guided participation (Rogoff): the process by which more experienced members of a community organize activities and structure children's participation to promote learning — a broader concept that captures how learning happens in everyday cultural activities, not just formal teaching.",
      "Private speech — Children (especially ages 3-7) often talk aloud to themselves while working on tasks. Vygotsky argued this is NOT egocentric (as Piaget claimed) but serves a crucial self-regulatory function — children use speech to guide their own behaviour and thinking. With development, private speech becomes internalized as INNER SPEECH (silent verbal thought). Private speech increases when tasks are difficult — evidence that it's a problem-solving tool.",
      "DYNAMIC SYSTEMS THEORIES (Chapter 4.5) — View development as emerging from the continuous interaction of multiple components (brain, body, perception, action, social context) in real time. The word 'dynamic' indicates that development is marked by CONTINUAL CHANGE — the system is never static. No single component drives development; instead, development self-organizes through the interaction of all components. Small changes in one component can trigger large reorganizations of the whole system (like how a small improvement in balance can trigger the transition from crawling to walking). Emphasizes variability — the same child may show different levels of ability in different contexts and at different moments.",
      "CONCEPTUAL DEVELOPMENT — Dividing objects into categories (Chapter 7.1): Young children typically divide objects into 3 main categories: (1) People, (2) Other animals, and (3) Inanimate objects. Note: PLANTS are NOT one of these default categories — young children don't intuitively categorize plants as a separate group. Category hierarchies have three levels: SUPERORDINATE (broad — e.g., 'animal'), BASIC (the level used most naturally — e.g., 'dog'), and SUBORDINATE (specific — e.g., 'poodle'). 'Ordinate' is NOT a real level. Children typically learn basic-level categories first.",
      "Knowledge of living things — Essentialism: the belief that living things have an innate ESSENCE inside them that makes them what they are. Most preschoolers (and adults) believe that dogs have a 'dogness' — an invisible, internal property that determines category membership and typical behaviour. Children believe this essence is inherited from birth parents (not adoptive parents) and cannot be changed by external transformations. Naïve biology: preschoolers understand basic biological concepts — growth, inheritance, illness — but their understanding is incomplete and sometimes influenced by psychological reasoning (e.g., thinking illness is a punishment).",
      "Understanding causality (Chapter 7.2) — Children develop understanding of cause and effect gradually. Physical causality: understanding how physical forces work (objects fall, collisions transfer motion). Biological causality: understanding of growth, inheritance, and bodily functions. Psychological causality: understanding that people's actions are caused by their thoughts, desires, and intentions. Children's causal reasoning begins with simple, direct causes and gradually encompasses more complex, indirect, and abstract causal chains. Understanding of number: even infants have rudimentary number sense — they can discriminate between small quantities. Preschoolers can count and understand basic principles of number (one-to-one correspondence, cardinality). Mathematical understanding builds from these early foundations."
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
      "SOCIAL COGNITION / THEORY OF MIND (Chapter 7.1 — 'Understanding Oneself and Other People') — Naïve psychology: from very early in life, children recognize that people are fundamentally different from objects — people have invisible mental states (desires, beliefs, intentions, emotions) that drive their behaviour. Understanding these mental states is essential for navigating the social world.",
      "Developmental progression of understanding minds — (1) Early infancy (~3-6 months): infants pay special attention to people; prefer faces, respond to emotional expressions, and are drawn to biological motion. (2) Joint attention (~9-12 months): a critical milestone — infants begin to follow others' gaze direction and point to direct others' attention to objects or events. This 'sharing of attention' shows that infants understand others as intentional beings whose attention can be directed. Joint attention is an early building block of theory of mind and a key predictor of later social-cognitive development. Deficits in joint attention are one of the earliest signs of ASD.",
      "(3) Intentionality (~9-12 months): infants begin to understand that people act with GOALS and INTENTIONS. They distinguish intentional actions from accidental ones. By 12-18 months, they understand that people's actions are directed toward achieving goals, even if the specific actions vary. (4) Desire psychology (~2 years): children understand that people's actions are motivated by their DESIRES — and that others' desires can differ from their own. A 2-year-old can understand that someone else wants broccoli even though they themselves want cookies. But at this age, children don't yet understand that beliefs can differ.",
      "(5) Belief-desire psychology (~4-5 years): the full understanding that actions are caused by BOTH beliefs AND desires — and crucially, that beliefs can be FALSE. This is the hallmark of a mature theory of mind. False-belief tasks test this understanding: (a) Sally-Anne task: Sally puts a marble in a basket and leaves. Anne moves it to a box. Where will Sally look for the marble? Children with theory of mind answer 'the basket' (where Sally BELIEVES it is). Children without theory of mind answer 'the box' (where it actually is). (b) Unexpected contents task: show a child a Smarties box that actually contains pencils. Ask what another child who hasn't seen inside will think is in the box. Children with ToM say 'Smarties' (the other child's false belief). Most children pass these tasks around age 4-5. Younger children (3-year-olds) consistently fail — they assume others know what they know.",
      "Understanding the self — Self-awareness develops gradually. Mirror self-recognition (the 'rouge test'): a mark is secretly placed on the child's face, and they are shown a mirror. If they reach for the mark on their OWN face (not the mirror), this shows self-recognition. Most children show this by ~18-24 months. Before this age, infants may treat their mirror image as another child. Self-concept becomes increasingly complex through the preschool years — children describe themselves in terms of observable characteristics first, then psychological traits.",
      "Cultural influences — The SEQUENCE of theory of mind development appears similar across cultures (joint attention → understanding desires → understanding false beliefs), but the TIMING varies. Some studies find that children in certain cultures pass false-belief tasks earlier or later, influenced by factors like the number of siblings (more siblings = more practice with different perspectives), cultural practices around deception and mental state talk, and parental communication styles. Despite these variations, the general developmental pathway is universal.",
      "Theory of mind and ASD — Children with Autism Spectrum Disorder show marked difficulties with theory of mind. They struggle with false-belief tasks, joint attention, and understanding others' perspectives. However, Dr. Robertson's guest lecture presented evidence that autistic children are MORE LIKELY to pass theory of mind tests when there is an incentive (reward) for getting the answer right — suggesting the difficulty may be partly about motivation or performance demands rather than a complete inability to represent mental states."
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
      "INTELLIGENCE (Chapter 8) — What is intelligence? No single agreed-upon definition, but generally involves the ability to learn, reason, solve problems, and adapt to new situations. Major debate: is intelligence ONE general ability or MANY separate abilities? Spearman's g factor: proposed that a single general intelligence ('g') underlies performance across ALL cognitive tasks. Evidence: scores on different cognitive tests are positively correlated — people who do well on one tend to do well on others. This general factor accounts for these correlations. Thurstone's primary mental abilities: argued g is too simplistic; proposed 7 separate abilities (verbal, number, spatial, word fluency, memory, reasoning, perceptual speed).",
      "Multiple intelligences theories — Howard Gardner's theory of multiple intelligences: proposed 8 distinct types — linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal (understanding others), intrapersonal (understanding self), and naturalistic (understanding the natural world). Strengths: recognizes diverse abilities. Criticism: some 'intelligences' may be better described as talents or skills, and the theory lacks strong empirical support. Robert Sternberg's triarchic theory: three aspects — analytical (academic problem-solving), creative (generating novel ideas), and practical (real-world problem-solving/'street smarts'). Emotional intelligence (Salovey & Mayer): ability to perceive, understand, manage, and use emotions effectively.",
      "Measuring intelligence — The first modern IQ test was developed by Alfred Binet (1904) to identify children who needed extra help in school. Introduced the concept of mental age. Modern tests: Stanford-Binet Intelligence Scales and Wechsler Intelligence Scale for Children (WISC) — the most widely used. IQ (Intelligence Quotient) is now a normalized score: mean = 100, standard deviation = 15. So ~68% of people score between 85-115, ~95% between 70-130. IQ tests include subtests measuring vocabulary, reasoning, working memory, processing speed, and spatial abilities. What IQ scores predict: moderately strong predictor of academic achievement, occupation, income, and even health outcomes. But IQ is NOT the only predictor of life success — motivation, self-discipline, creativity, and social skills also matter enormously.",
      "Stability and prediction — IQ scores become relatively stable after about age 5-6 (correlations between age 5 IQ and adult IQ are ~0.50-0.70). Before age 5, scores are less stable. Infant predictors of later IQ: the SPEED of habituation to novel stimuli in infancy is a modest but reliable predictor of later IQ — faster habituators are more efficient information processors.",
      "Genes and environment — Both contribute substantially to IQ. Heritability estimates are approximately 50% (meaning about half of the VARIATION in IQ within a population is attributable to genetic differences). Key pattern: shared family environment has a strong influence in EARLY CHILDHOOD (growing up in the same home makes siblings more similar). But as children grow older and increasingly choose their own environments (niche-picking), GENETIC influence on IQ INCREASES while shared environment influence DECREASES. By adulthood, genes account for a larger share of variation.",
      "Environmental influences on IQ — (1) Poverty: strongly associated with lower IQ scores, through multiple pathways — less cognitive stimulation, poorer nutrition, more stress, less access to quality education. (2) Education quality: schooling raises IQ; missing school lowers it. (3) Family environment: parental involvement, language richness, availability of learning materials. (4) The Flynn Effect: average IQ scores have been RISING steadily over generations (about 3 points per decade) across many countries. Reasons likely include improved nutrition, education, health care, and greater exposure to complex visual media. This proves that environment powerfully influences IQ at the population level. (5) Early intervention programs: programs like the Carolina Abecedarian Project (intensive early childhood education for at-risk children) have shown lasting positive effects on IQ and academic achievement, demonstrating that environmental enrichment can boost cognitive development, especially for disadvantaged children.",
      "AUTISM SPECTRUM DISORDER (Chapter 7, Box 7.1 + Dr. Robertson's lecture) — ASD is a neurodevelopmental condition characterized by two core features: (1) persistent difficulties with SOCIAL COMMUNICATION and social interaction (reduced joint attention, difficulty understanding others' perspectives, challenges with back-and-forth conversation), and (2) RESTRICTED, REPETITIVE patterns of behaviour, interests, or activities (repetitive movements, insistence on sameness, intense focused interests). It is a 'spectrum' — severity varies widely, from individuals who need substantial support to those who function independently.",
      "Prevalence and causes — The most recent (2025) CDC report estimates prevalence at 1 in 31 children, reflecting increased awareness, screening, and broadened diagnostic criteria. Causes: current research strongly points to GENETIC FACTORS as the primary cause. Twin studies show high concordance rates in identical twins. Many genes are implicated (polygenic). Discredited theories: (1) The MMR vaccine-autism link was based on a FRAUDULENT paper by Andrew Wakefield (1998 in The Lancet), which has since been RETRACTED. Wakefield falsified data and lost his medical license. Large-scale studies have found NO link between vaccines and autism. (2) 'Refrigerator mother' theory (Bettelheim) — the false claim that insensitive parenting causes autism — has been thoroughly debunked. (3) Tylenol/acetaminophen during pregnancy: no causal evidence supports this claim.",
      "ASD and theory of mind — Children with ASD show marked difficulties with theory of mind, including false-belief tasks and joint attention. However, Dr. Robertson presented evidence that autistic children are MORE LIKELY to pass theory of mind tests when there is an incentive for getting the answer right (e.g., a reward) — suggesting the difficulty may involve performance/motivation factors, not a complete inability. Granieri et al. (2020): studied how autistic children evaluated their autistic peers. Found that children with MORE atypical behaviours (atypical vocalizations, atypical eye contact) were actually evaluated MORE POSITIVELY by their autistic peers — suggesting autistic children may be more accepting of or drawn to atypical behaviours. Early diagnosis and intervention (e.g., applied behaviour analysis, speech therapy) improve outcomes significantly."
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
      "LANGUAGE DEVELOPMENT (Chapter 6) — Language is one of the most remarkable human achievements. It is species-specific (only humans have full language) and universal (every human society has language). Children acquire language without formal instruction — they learn it naturally through exposure and interaction. The components of language: (1) Phonology: the sound system — the rules governing which sounds are used and how they're combined. Phonemes are the smallest units of sound that distinguish meaning (e.g., /b/ vs. /p/ in 'bat' vs. 'pat'). (2) Morphology: the rules for forming words from meaningful units (morphemes). Free morphemes stand alone ('dog'); bound morphemes are attached ('-s' for plural, 'un-' for negation). (3) Semantics: the meaning system — word meanings and how they combine. (4) Syntax/grammar: the rules for combining words into sentences. (5) Pragmatics: the social rules for using language in context — taking turns, being relevant, adjusting speech for the audience.",
      "Speech perception in infancy — Newborns can distinguish phonemes from ALL of the world's languages — a remarkable ability. But by ~10-12 months, perceptual narrowing occurs: infants become increasingly tuned to their NATIVE language's sounds and lose sensitivity to non-native contrasts. This is the same perceptual narrowing process seen in face perception. It reflects the brain specializing for the specific environment the infant is growing up in. Categorical perception: infants perceive speech sounds in discrete categories rather than on a continuum (e.g., they hear a sharp boundary between /b/ and /p/, not a gradual change).",
      "Word segmentation — Continuous speech has no pauses between words (unlike written language with spaces). How do infants figure out where one word ends and the next begins? STATISTICAL LEARNING: infants track the probability that certain syllables follow each other. Within a word, syllable transitions are highly predictable ('ba' is almost always followed by 'by' in 'baby'). Between words, transitions are less predictable. By 8 months, infants use these statistical patterns to segment words from the speech stream. This was demonstrated in elegant experiments by Saffran et al. (1996). Additional cues: stress patterns (in English, stress typically falls on the first syllable of words), phonotactic rules, and prosody (rhythm and intonation).",
      "Language production milestones — (1) Cooing (~2 months): vowel-like sounds ('oooh', 'aaah') — the earliest vocalizations beyond crying. (2) Babbling (~6 months): consonant-vowel combinations ('bababa', 'mamama'). Initially includes sounds from all languages; by ~10 months, babbling narrows to reflect native language sounds. Deaf infants exposed to sign language 'babble' with their hands. (3) First words (~12 months): typically names for important people, objects, and actions ('mama', 'ball', 'more'). (4) Vocabulary spurt/naming explosion (~18 months): rapid acceleration in word learning after children acquire ~50 words. (5) Fast mapping: the ability to learn a new word's approximate meaning from very limited exposure (sometimes a single encounter).",
      "Word-learning errors and processes — Overextension: using a word too broadly (calling all four-legged animals 'dog'). Underextension: using a word too narrowly (calling only THEIR dog 'dog'). Both errors reveal how children are working out the boundaries of word meanings. Children use several strategies to learn new words: (1) Whole-object assumption: a new word refers to the whole object, not a part. (2) Mutual exclusivity: each object has only one name — if a child already knows 'cup', a new word must refer to something else. (3) Syntactic bootstrapping: using the grammatical structure of a sentence to infer a word's meaning (e.g., 'the rabbit is gorping the duck' — 'gorping' must be an action).",
      "Grammar development — Two-word stage (~18-24 months): children combine words into simple phrases ('more milk', 'daddy gone', 'big dog'). These show understanding of word order and basic semantic relationships. Telegraphic speech: like a telegram — content words included, function words omitted ('want cookie' instead of 'I want a cookie'). Grammatical development: children gradually master increasingly complex grammatical structures through the preschool years. Overregularization: applying regular grammatical rules to irregular forms ('goed' instead of 'went', 'foots' instead of 'feet') — actually shows that children are learning RULES, not just memorizing forms.",
      "Theories of language development — (1) Nativist theory (Chomsky): humans have an innate Language Acquisition Device (LAD) — a biological endowment that contains Universal Grammar (the set of structural principles common to all languages). Children don't learn language from scratch; they are born with the basic grammatical framework and use input to set language-specific parameters. Evidence: universality of language, poverty of the stimulus (children hear imperfect/incomplete input but still learn perfect grammar), critical period effects. (2) Social-interactionist theory: language is learned through SOCIAL INTERACTION, not just innate mechanisms. Infant-directed speech ('motherese/parentese') — the simplified, high-pitched, exaggerated speech adults use with infants — helps language learning. Joint attention, turn-taking, and social context are crucial. (3) Connectionist/statistical learning models: language emerges from powerful general-purpose learning mechanisms (pattern detection, statistical learning) applied to the massive amount of language input children receive.",
      "Critical/sensitive period for language — Evidence that early exposure is crucial: (1) Genie: discovered at age 13 after extreme isolation; despite years of training, never acquired normal language — especially grammar. (2) Second-language learning: earlier exposure leads to greater ultimate proficiency. Immigrants who arrive before age 7 achieve native-like proficiency; those arriving after puberty rarely do. (3) Deaf children who receive sign language input early develop normal language; those who receive it late show lasting deficits. These findings support a sensitive period for language acquisition, particularly for grammar.",
      "Bilingualism — Bilingual children may show slight initial delays in each individual language (smaller vocabulary in each language when measured separately), but their TOTAL vocabulary across both languages is comparable to monolinguals. Bilingualism confers COGNITIVE ADVANTAGES: better executive function (attention control, task-switching, inhibition), enhanced metalinguistic awareness (understanding language as a system), and greater cognitive flexibility. Code-switching (alternating between languages) is NOT a sign of confusion — it's a sophisticated skill that reflects awareness of social context.",
      "Nonlinguistic symbols and dual representation — Children must learn to use and interpret symbols beyond language: pictures, maps, models, numbers, and writing. Dual representation (DeLoache): understanding that something is BOTH an object in its own right AND a symbol representing something else. Example: a scale model of a room is both a small toy room AND a representation of a real room. Young children (~2.5 years) struggle with dual representation — they may understand the model as a toy but fail to use it as a map of the real room. By age 3, most children succeed. This ability is crucial for understanding pictures, maps, and other symbolic representations."
    ],
    isBreak: false
  }
];

// eslint-disable-next-line no-unused-vars
const MIDTERM_IDS = new Set([
  "cq5", "cq6",
  "cq12", "cq13", "cq14", "cq15", "cq16", "cq17", "cq18", "cq19",
  "cq20", "cq21", "cq22", "cq23", "cq24", "cq25",
  "cq30", "cq31", "cq32", "cq33", "cq34", "cq35", "cq36",
  "cq40", "cq41", "cq42", "cq43", "cq44",
  "cq45", "cq46", "cq47", "cq48", "cq49", "cq50", "cq51", "cq52",
  "cq53", "cq54", "cq55", "cq56"
]);

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
    id: "cq70",
    weekIds: [3],
    type: "mc",
    question: "In her guest lecture, Dr. Krol showed us evidence that methylation of infants' oxytocin receptor gene (OXTR) at 18 months is predicted by:",
    choices: [
      "infants' motor abilities at 5 months",
      "the quality of maternal behavior at 5 months",
      "the number of siblings the infant has",
      "infants' weight at 5 months"
    ],
    answer: 1,
    explanation: "Dr. Krol's research showed that the quality of maternal behavior at 5 months predicted epigenetic changes (methylation) in the infant's oxytocin receptor gene by 18 months, demonstrating how early caregiving experiences can influence gene expression."
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
    id: "cq71",
    weekIds: [3],
    type: "mc",
    question: "The following is NOT a method used to study brain development and functioning:",
    choices: [
      "Electrophysiological recordings (EEGs, ERPs)",
      "Magnetic resonance imaging (MRI and fMRI)",
      "Near Infrared Spectroscopy (NIRS and fNIRS)",
      "All of the above are methods used to study brain development and functioning"
    ],
    answer: 3,
    explanation: "EEGs/ERPs, MRI/fMRI, and NIRS/fNIRS are all valid methods used to study brain development. EEGs measure electrical activity, MRI provides structural/functional images, and NIRS measures blood oxygenation using infrared light."
  },
  {
    id: "cq72",
    weekIds: [3],
    type: "mc",
    question: "Based on Olivia Allison's guest lecture, which of the following is NOT a fundamental question of developmental cognitive neuroscience?",
    choices: [
      "What does it mean to be human?",
      "Why and how is learning enhanced during certain periods in development?",
      "How similar is artificial intelligence to human intelligence?",
      "What are the interrelations between developmental changes in the brain and developmental changes in behavioral and cognitive abilities?"
    ],
    answer: 2,
    explanation: "Developmental cognitive neuroscience focuses on understanding human brain development, sensitive periods for learning, and brain-behavior relationships — not comparisons between AI and human intelligence."
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
  },
  // --- Quiz 7: Conceptual Development I (Week 7) ---
  {
    id: "cq61",
    weekIds: [7],
    type: "mc",
    question: "Young children typically divide objects into 3 categories. Which of the following is NOT one of those categories?",
    choices: ["Inanimate objects", "Other animals", "People", "Plants"],
    answer: 3,
    explanation: "Young children typically categorize the world into three groups: people, other animals, and inanimate objects. Plants are not intuitively categorized as a separate group by young children."
  },
  {
    id: "cq62",
    weekIds: [7],
    type: "mc",
    question: "Most preschoolers (and adults) believe that living things have an essence inside them that makes them what they are, e.g., dogs have a 'dogness' that makes them members of one category and makes them behave in certain ways. This belief is known as:",
    choices: ["Empiricism", "Egocentrism", "Enthusiasm", "Essentialism"],
    answer: 3,
    explanation: "Essentialism is the belief that living things have an innate, unchangeable essence that makes them what they are. Children as young as preschool age believe that a dog has an internal 'dogness' that determines its category membership and behavior."
  },
  {
    id: "cq63",
    weekIds: [7],
    type: "mc",
    question: "Baillargeon's work demonstrated that infants:",
    choices: [
      "have a naive understanding of how plants grow",
      "don't understand object permanence",
      "don't understand how plants grow",
      "have a naive understanding of objects"
    ],
    answer: 3,
    explanation: "Renée Baillargeon's violation-of-expectation studies showed that infants have a naive (intuitive) understanding of objects — including that objects continue to exist when hidden (object permanence) and follow basic physical laws — much earlier than Piaget proposed."
  },
  {
    id: "cq64",
    weekIds: [7],
    type: "mc",
    question: "Children's category hierarchies do NOT include which of the following:",
    choices: ["Subordinate", "Basic", "Ordinate", "Superordinate"],
    answer: 2,
    explanation: "Category hierarchies include three levels: superordinate (e.g., animal), basic (e.g., dog), and subordinate (e.g., poodle). 'Ordinate' is not a level in category hierarchies."
  },
  // --- Quiz 8: Autism - Guest Lecture Dr. Zoe Robertson (Week 9) ---
  {
    id: "cq65",
    weekIds: [9],
    type: "mc",
    question: "According to your textbook, autistic children have particular difficulty with Theory of Mind. In her guest lecture, Dr. Robertson presented evidence that autistic children are ____ to pass Theory of Mind tests when there is an incentive for getting the answer right (e.g., a reward).",
    choices: ["more likely", "less likely", "equally likely", "unlikely"],
    answer: 0,
    explanation: "Dr. Robertson's lecture presented evidence that autistic children are more likely to pass Theory of Mind tests when there is an incentive (reward) for getting the answer right, suggesting their difficulty may be partly about motivation rather than a complete inability."
  },
  {
    id: "cq66",
    weekIds: [9],
    type: "mc",
    question: "In Dr. Robertson's guest lecture, we learned that the original article arguing that the MMR vaccine causes autism was _____ and has since been _____.",
    choices: [
      "doubted; proven right",
      "badly written; edited",
      "fraudulent; retracted",
      "excellent; supported"
    ],
    answer: 2,
    explanation: "Andrew Wakefield's 1998 Lancet paper linking the MMR vaccine to autism was found to be fraudulent — data was falsified — and was retracted by the journal in 2010. Wakefield lost his medical license."
  },
  {
    id: "cq67",
    weekIds: [9],
    type: "short",
    question: "The most recent (2025) report by the CDC estimates prevalence of Autism to be 1 in _____ children.",
    answer: "31",
    explanation: "The CDC's 2025 report estimates that 1 in 31 children are diagnosed with autism, reflecting both increased awareness/screening and broadened diagnostic criteria over time."
  },
  {
    id: "cq68",
    weekIds: [9],
    type: "mc",
    question: "Current research suggests that autism is caused by:",
    choices: [
      "insensitive parenting",
      "vaccines",
      "Tylenol or similar medicines during pregnancy",
      "genetic factors"
    ],
    answer: 3,
    explanation: "Current research points to genetic factors as the primary cause of autism. Twin studies show high heritability, and many genes have been implicated. The discredited theories about vaccines and parenting have no scientific support."
  },
  {
    id: "cq69",
    weekIds: [9],
    type: "mc",
    question: "In the study by Granieri and colleagues (2020), how did atypical behaviors (e.g., atypical vocalizations, atypical eye contact) influence autistic children's evaluations of their autistic peers?",
    choices: [
      "Children with more atypical behaviors were evaluated more negatively",
      "Children with more atypical behaviors were evaluated more positively",
      "Children with more atypical behaviors were evaluated both positively and negatively",
      "Atypical behaviors had no effect on how the children were evaluated"
    ],
    answer: 1,
    explanation: "Granieri et al. (2020) found that autistic children actually evaluated peers with more atypical behaviors more positively, suggesting autistic children may be more accepting of or drawn to behaviors that neurotypical peers might judge negatively."
  }
];
