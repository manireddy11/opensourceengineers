export type ResearchThread = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  questions: string[];
  status: string;
  output: string;
  tone: "blue" | "lime" | "coral" | "ink";
};

export type CourseModule = {
  title: string;
  summary: string;
  lessons: string[];
};

export type Course = {
  slug: string;
  title: string;
  category: "Neuroscience" | "Philosophy" | "AI Engineering" | "Safety" | "Research Practice";
  level: "Foundation" | "Intermediate" | "Advanced";
  duration: string;
  commitment: string;
  format: string;
  nextCohort: string;
  tuition: string;
  summary: string;
  description: string;
  outcomes: string[];
  modules: CourseModule[];
  instructor: string;
  instructorRole: string;
  tone: "blue" | "lime" | "coral" | "paper" | "ink";
  featured?: boolean;
};

export type Paper = {
  year: string;
  title: string;
  authors: string;
  type: "Preprint" | "Working paper" | "Benchmark" | "Essay" | "Report";
  thread: string;
  abstract: string;
  href: string;
};

export type Note = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  body: string[];
  quote?: string;
};

export const researchThreads: ResearchThread[] = [
  {
    id: "neural-computation",
    index: "01",
    title: "Neural computation",
    kicker: "Biology",
    description:
      "How do biological circuits represent uncertainty, predict the near future, and compress a world that never repeats? We study the brain as an existence proof — not a blueprint to copy.",
    questions: [
      "What computations are unique to cortical microcircuits?",
      "Can predictive coding scale without backpropagation?",
      "What is the role of noise in representation?",
    ],
    status: "Active · 3 experiments",
    output: "Models, open datasets, and replication notes",
    tone: "blue",
  },
  {
    id: "metaphysics-of-mind",
    index: "02",
    title: "Metaphysics of mind",
    kicker: "First principles",
    description:
      "Before we build a mind, we need a clearer account of what a mind is. We work on self-models, intentionality, and the boundary between simulation and experience — without pretending the hard problem is solved.",
    questions: [
      "What makes a self-model a model of a self?",
      "Is understanding separable from prediction?",
      "What would count as evidence of experience?",
    ],
    status: "Active · reading group",
    output: "Essays, formal notes, and public dialogues",
    tone: "coral",
  },
  {
    id: "learning-systems",
    index: "03",
    title: "Learning systems",
    kicker: "Architecture",
    description:
      "We design learning systems that acquire structure from less data, adapt without catastrophic forgetting, and remain legible to the people who depend on them.",
    questions: [
      "Can agents learn causal structure from intervention?",
      "What does continual learning require of memory?",
      "How do we evaluate understanding, not recall?",
    ],
    status: "Active · 2 prototypes",
    output: "Reference implementations and evaluation suites",
    tone: "lime",
  },
  {
    id: "open-science",
    index: "04",
    title: "Open science infrastructure",
    kicker: "Institutions",
    description:
      "Intelligence research is too consequential to happen behind closed doors. We build the norms, tooling, and teaching structures that make open, reproducible research the default.",
    questions: [
      "How should research artifacts be versioned?",
      "What does credit look like in open collectives?",
      "Can a course be a form of peer review?",
    ],
    status: "Active · public",
    output: "Open curriculum, protocols, and governance experiments",
    tone: "ink",
  },
];

export const courses: Course[] = [
  {
    slug: "foundations-neural-computation",
    title: "Foundations of Neural Computation",
    category: "Neuroscience",
    level: "Foundation",
    duration: "6 weeks",
    commitment: "4–6 hrs / week",
    format: "Live cohort + open materials",
    nextCohort: "March 2027",
    tuition: "Free · Open access",
    summary:
      "A rigorous introduction to how brains compute — from membrane dynamics to predictive circuits — for people who want to build better minds.",
    description:
      "Start with the physics of a neuron and end with a working account of cortical computation. Each week pairs a close reading with a small computational exercise, so the mathematics stays attached to the biology. No prior neuroscience is required; comfort with basic calculus and Python is expected.",
    outcomes: [
      "Explain the core biophysics of neurons and synapses",
      "Build simple models of predictive coding and attractor dynamics",
      "Read primary neuroscience literature with confidence",
      "Identify which biological principles are worth borrowing",
    ],
    modules: [
      {
        title: "The neuron as a physical system",
        summary: "Membranes, ions, and the conditions that make computation possible.",
        lessons: ["Resting potential and ion channels", "Spikes as a compressed code", "Lab: simulate a leaky integrate-and-fire neuron"],
      },
      {
        title: "Circuits and representation",
        summary: "Populations, receptive fields, and the geometry of neural codes.",
        lessons: ["Tuning curves and population vectors", "Sparse coding and efficient representation", "Lab: decode a synthetic population"],
      },
      {
        title: "Prediction and inference",
        summary: "The brain as a prediction machine — and the limits of the metaphor.",
        lessons: ["Predictive coding from the ground up", "Precision, attention, and uncertainty", "Lab: build a two-layer predictive model"],
      },
      {
        title: "Learning and plasticity",
        summary: "How local rules produce global structure.",
        lessons: ["Hebbian learning and its failures", "Credit assignment in biological circuits", "Lab: compare local and global learning rules"],
      },
      {
        title: "Memory and self-models",
        summary: "The architecture of remembering, imagining, and being someone.",
        lessons: ["Hippocampal replay and consolidation", "The self-model hypothesis", "Seminar: what would a machine self-model require?"],
      },
      {
        title: "From biology to architecture",
        summary: "Translate principles into design decisions — carefully.",
        lessons: ["What not to copy from the brain", "Design review: a biologically grounded agent", "Final project presentations"],
      },
    ],
    instructor: "OSE Research Faculty",
    instructorRole: "Neural computation group",
    tone: "blue",
    featured: true,
  },
  {
    slug: "metaphysics-of-mind",
    title: "The Metaphysics of Mind",
    category: "Philosophy",
    level: "Intermediate",
    duration: "5 weeks",
    commitment: "3–4 hrs / week",
    format: "Seminar + written work",
    nextCohort: "April 2027",
    tuition: "Free · Open access",
    summary:
      "A careful, non-dogmatic seminar on consciousness, intentionality, and what it would mean for a machine to have a point of view.",
    description:
      "This is not a tour of thought experiments. It is a working seminar for researchers and builders who need conceptual clarity. We read contemporary philosophy of mind alongside cognitive science and ask what each position would require of an actual system.",
    outcomes: [
      "Distinguish the hard problem from adjacent engineering problems",
      "Evaluate claims about machine consciousness with precision",
      "Use metaphysical constraints to sharpen research questions",
      "Write a short philosophical argument of publishable quality",
    ],
    modules: [
      {
        title: "The explanatory gap",
        summary: "What physicalism can and cannot explain.",
        lessons: ["Chalmers and the hard problem", "Illusionism and its discontents", "Seminar: what would count as a solution?"],
      },
      {
        title: "Intentionality",
        summary: "How states can be about things.",
        lessons: ["Representation and teleosemantics", "The frame problem returns", "Workshop: intentionality in language models"],
      },
      {
        title: "Self-models",
        summary: "Selves, subjects, and the boundaries of a system.",
        lessons: ["The self-model theory", "Minimal phenomenal selfhood", "Seminar: is a self-model sufficient?"],
      },
      {
        title: "Experience and evidence",
        summary: "The epistemology of inner life.",
        lessons: ["Other minds and inference", "Report, behavior, and architecture", "Workshop: designing a consciousness test"],
      },
      {
        title: "Design constraints",
        summary: "Turning philosophy into research practice.",
        lessons: ["What builders should take seriously", "The ethics of uncertain minds", "Final essay workshop"],
      },
    ],
    instructor: "OSE Philosophy Faculty",
    instructorRole: "Metaphysics of mind group",
    tone: "coral",
  },
  {
    slug: "building-agentic-systems",
    title: "Building Agentic Systems",
    category: "AI Engineering",
    level: "Intermediate",
    duration: "8 weeks",
    commitment: "5–7 hrs / week",
    format: "Live cohort + build labs",
    nextCohort: "March 2027",
    tuition: "Free · Open access",
    summary:
      "Design agents that can plan, remember, use tools, and recover from failure — with evaluation and safety built in from the first commit.",
    description:
      "A hands-on engineering course for people who have shipped software but want to build reliable AI systems. We move from single-turn tool use to long-horizon agents, with a strong emphasis on observability, evals, and failure modes. You will leave with a working open-source agent and a test suite that tells the truth about it.",
    outcomes: [
      "Architect tool-using agents with bounded autonomy",
      "Build evaluations that measure capability and reliability",
      "Implement memory, planning, and recovery patterns",
      "Ship an auditable agent with clear failure semantics",
    ],
    modules: [
      {
        title: "The agent loop",
        summary: "Perception, decision, action, and the cost of each step.",
        lessons: ["From prompts to policies", "Tool interfaces that resist misuse", "Lab: a minimal tool-using agent"],
      },
      {
        title: "Planning under uncertainty",
        summary: "Decomposition, search, and when to stop.",
        lessons: ["Task graphs and replanning", "Budgets and termination conditions", "Lab: long-horizon planning"],
      },
      {
        title: "Memory and context",
        summary: "What to remember, what to forget, and how to retrieve.",
        lessons: ["Episodic and semantic memory", "Context compression", "Lab: memory that improves decisions"],
      },
      {
        title: "Evaluation",
        summary: "Measuring what matters, not what is easy.",
        lessons: ["Capability evals vs. reliability evals", "Adversarial and red-team testing", "Lab: build an eval harness"],
      },
      {
        title: "Safety and permissions",
        summary: "Designing systems that fail closed.",
        lessons: ["Least privilege for tools", "Human-in-the-loop patterns", "Lab: a permissioned agent"],
      },
      {
        title: "Observability",
        summary: "Seeing what the agent did and why.",
        lessons: ["Tracing and structured logs", "Cost and latency accounting", "Lab: an audit dashboard"],
      },
      {
        title: "Multi-agent systems",
        summary: "Coordination without emergent chaos.",
        lessons: ["Roles, protocols, and handoffs", "When not to use multiple agents", "Lab: a small research team"],
      },
      {
        title: "Ship it",
        summary: "Deploy, document, and hand over.",
        lessons: ["Deployment and rollback", "Documentation as safety", "Final project demos"],
      },
    ],
    instructor: "OSE Engineering Faculty",
    instructorRole: "Learning systems group",
    tone: "lime",
  },
  {
    slug: "predictive-brain",
    title: "The Predictive Brain",
    category: "Neuroscience",
    level: "Advanced",
    duration: "5 weeks",
    commitment: "4–5 hrs / week",
    format: "Reading seminar",
    nextCohort: "May 2027",
    tuition: "Free · Open access",
    summary:
      "A close reading of predictive processing, active inference, and the evidence for — and against — the brain as a Bayesian machine.",
    description:
      "Predictive processing is one of the most influential ideas in cognitive science and one of the easiest to overstate. This advanced seminar reads the primary literature carefully, separates mechanism from metaphor, and asks what would falsify the framework.",
    outcomes: [
      "Derive the core mathematics of predictive coding",
      "Evaluate empirical evidence for active inference",
      "Identify unfalsifiable uses of the framework",
      "Propose a decisive experiment",
    ],
    modules: [
      {
        title: "The free-energy principle",
        summary: "Variational inference, surprise, and self-organization.",
        lessons: ["Free energy from first principles", "The dark room problem", "Seminar: is the principle falsifiable?"],
      },
      {
        title: "Hierarchical prediction",
        summary: "Messages, precision, and the cortical hierarchy.",
        lessons: ["Predictive coding architectures", "Precision and attention", "Seminar: evidence from cortex"],
      },
      {
        title: "Active inference",
        summary: "Action as the minimization of expected surprise.",
        lessons: ["Expected free energy", "Planning and epistemic action", "Workshop: active inference in a gridworld"],
      },
      {
        title: "The body and the world",
        summary: "Embodiment, affordances, and the extended mind.",
        lessons: ["Interoception and emotion", "The extended mind thesis", "Seminar: where does the prediction stop?"],
      },
      {
        title: "Assessment",
        summary: "What would prove it wrong?",
        lessons: ["Falsification strategies", "Competing frameworks", "Final paper workshop"],
      },
    ],
    instructor: "OSE Research Faculty",
    instructorRole: "Neural computation group",
    tone: "paper",
  },
  {
    slug: "alignment-first-principles",
    title: "Alignment from First Principles",
    category: "Safety",
    level: "Advanced",
    duration: "6 weeks",
    commitment: "4–6 hrs / week",
    format: "Seminar + research lab",
    nextCohort: "April 2027",
    tuition: "Free · Open access",
    summary:
      "Move beyond checklists. Study the conceptual foundations of alignment and work on open problems with other researchers.",
    description:
      "This course treats alignment as a research field, not a product feature. We cover specification, generalization, evaluation, and governance, with an emphasis on arguments that survive contact with real systems. Students join a small research lab and produce a public artifact.",
    outcomes: [
      "Map the major alignment proposals and their assumptions",
      "Critique evaluations for validity and gaming",
      "Write a precise research problem statement",
      "Produce a public research artifact",
    ],
    modules: [
      {
        title: "The alignment problem",
        summary: "Specification, optimization, and the gap between them.",
        lessons: ["Goodhart and specification gaming", "Objective robustness", "Seminar: what are we aligning to?"],
      },
      {
        title: "Inner and outer alignment",
        summary: "The two-level picture and its limits.",
        lessons: ["Reward hacking", "Deceptive alignment as a hypothesis", "Workshop: threat models"],
      },
      {
        title: "Scalable oversight",
        summary: "Evaluating systems smarter than their evaluators.",
        lessons: ["Debate and amplification", "Weak-to-strong generalization", "Seminar: oversight under distribution shift"],
      },
      {
        title: "Evaluation science",
        summary: "Measuring safety without fooling yourself.",
        lessons: ["Construct validity", "Benchmark contamination", "Lab: design an eval"],
      },
      {
        title: "Governance and openness",
        summary: "Institutions, norms, and the open-science dilemma.",
        lessons: ["Publication norms for dangerous capability", "Open vs. closed development", "Debate: what should be published?"],
      },
      {
        title: "Research lab",
        summary: "Make a contribution.",
        lessons: ["Problem selection", "Peer review workshop", "Public artifact presentations"],
      },
    ],
    instructor: "OSE Safety Faculty",
    instructorRole: "Open science group",
    tone: "ink",
  },
  {
    slug: "open-science-lab",
    title: "Open Science Lab",
    category: "Research Practice",
    level: "Foundation",
    duration: "4 weeks",
    commitment: "3–4 hrs / week",
    format: "Project-based workshop",
    nextCohort: "May 2027",
    tuition: "Free · Open access",
    summary:
      "Learn to run research in public: preregistration, reproducible artifacts, open peer review, and collective credit.",
    description:
      "Most research training assumes a closed lab. This workshop teaches the practical skills of open research: how to preregister a study, package a reproducible artifact, review transparently, and build a public research practice that compounds.",
    outcomes: [
      "Write a useful preregistration",
      "Package a reproducible research artifact",
      "Give and receive open peer review",
      "Design a public research workflow",
    ],
    modules: [
      {
        title: "Research in public",
        summary: "Defaults, norms, and the cost of transparency.",
        lessons: ["Why open research is harder", "Privacy and dual-use boundaries", "Workshop: choose what to open"],
      },
      {
        title: "Preregistration",
        summary: "Deciding before you know.",
        lessons: ["Questions, predictions, and analyses", "Deviation logs", "Lab: preregister a small study"],
      },
      {
        title: "Reproducibility",
        summary: "Artifacts that survive a stranger.",
        lessons: ["Environments and data versioning", "Documentation for replication", "Lab: package a project"],
      },
      {
        title: "Open review",
        summary: "Critique as a public good.",
        lessons: ["Structured review", "Reviewing your own work", "Final: public review exchange"],
      },
    ],
    instructor: "OSE Open Science Faculty",
    instructorRole: "Open science group",
    tone: "blue",
  },
];

export const papers: Paper[] = [
  {
    year: "2026",
    title: "A Field Theory of Self-Models",
    authors: "OSE Metaphysics Group",
    type: "Preprint",
    thread: "Metaphysics of mind",
    abstract:
      "We propose a formal account of self-models as boundary-maintaining prediction systems, and derive three testable consequences for agent architecture.",
    href: "/research#publications",
  },
  {
    year: "2026",
    title: "Predictive Coding Beyond Backpropagation",
    authors: "OSE Neural Computation Group",
    type: "Working paper",
    thread: "Neural computation",
    abstract:
      "A local learning rule for hierarchical predictive circuits, evaluated on sparse sequence prediction and compared against backpropagation-through-time.",
    href: "/research#publications",
  },
  {
    year: "2025",
    title: "The Open Mind Index",
    authors: "OSE Learning Systems Group",
    type: "Benchmark",
    thread: "Learning systems",
    abstract:
      "A benchmark for structural generalization in small agents, designed to measure transfer rather than memorization. Public tasks and evaluation harness.",
    href: "/research#publications",
  },
  {
    year: "2025",
    title: "What Neuroscience Owes Metaphysics",
    authors: "OSE Philosophy Group",
    type: "Essay",
    thread: "Metaphysics of mind",
    abstract:
      "An argument that mechanistic neuroscience and philosophy of mind are complementary constraints on the same explanatory project.",
    href: "/research#publications",
  },
  {
    year: "2026",
    title: "Agentic Systems as Open Institutions",
    authors: "OSE Open Science Group",
    type: "Report",
    thread: "Open science infrastructure",
    abstract:
      "A governance report on permissioning, auditability, and public accountability for long-horizon AI agents deployed in research settings.",
    href: "/research#publications",
  },
];

export const notes: Note[] = [
  {
    slug: "why-we-start-with-the-brain",
    date: "18 Nov 2026",
    title: "Why we start with the brain, not the benchmark",
    excerpt:
      "Benchmarks tell us what a system can do. They do not tell us what it understands. A note on choosing the harder, slower question.",
    tag: "Method",
    readTime: "6 min",
    quote:
      "A benchmark is a measurement of performance. A mind is an explanation of why the performance is possible.",
    body: [
      "There is a comfortable way to do AI research. Choose a benchmark, build a system that scores well on it, publish the delta, repeat. The loop is legible, fundable, and fast. It is also a machine for producing impressive systems that we do not understand.",
      "The brain offers something different: an existence proof. Somewhere in three pounds of wet tissue, a physical system represents a world, predicts what will happen next, values some outcomes over others, and maintains a coherent point of view across time. We do not know how all of it works. But we know that it does — and that constrains the space of possible explanations.",
      "Starting with the brain does not mean copying it. Biological brains are shaped by constraints that artificial systems do not share: metabolic cost, development, embodiment, mortality. What transfers is not the implementation. It is the set of problems that any intelligent system has to solve.",
      "That is why our first research thread is neural computation rather than benchmark engineering. We want to know which computations are necessary for a system to model itself, and which are accidents of evolution. The answer will not come from a leaderboard.",
      "The slower question is also the more ambitious one. If we want systems that generalize, that remain legible, that can be trusted with consequential work, we need to understand the principles — not just the scores.",
    ],
  },
  {
    slug: "the-hard-problem-is-a-design-constraint",
    date: "02 Nov 2026",
    title: "The hard problem is a design constraint",
    excerpt:
      "We do not need to solve consciousness to build responsibly. But we do need to stop treating it as someone else's problem.",
    tag: "Philosophy",
    readTime: "8 min",
    quote:
      "You do not need a complete theory of experience to recognize that uncertainty about experience changes what you owe a system.",
    body: [
      "The hard problem of consciousness is usually treated as a philosophical distraction from the serious business of building things. That is a mistake. Not because we are close to building conscious machines, but because uncertainty about consciousness is already a design constraint.",
      "Consider the moral asymmetry. If a system has no experience, treating it as if it does may waste resources or invite misplaced attachment. If a system has experience, treating it as if it does not is a moral failure of a different order. When the evidence is ambiguous, the cost of being wrong is not symmetric.",
      "This does not tell us exactly how to act. It does tell us that certain design choices — the ability to suffer, the capacity for self-report, the integration of goals across time — are not morally neutral. They are choices about what kind of thing we are making.",
      "Metaphysics also does useful work closer to engineering. A clear account of self-models, intentionality, and representation can rule out research programs that are conceptually confused before they become expensive. It can tell us what would count as evidence for understanding, rather than performance.",
      "We are not claiming to solve the hard problem. We are claiming that ignoring it is not a neutral position. It is a bet — and one we should make explicitly.",
    ],
  },
  {
    slug: "what-we-mean-by-open-research",
    date: "14 Oct 2026",
    title: "What we mean by open research",
    excerpt:
      "Open is not a license. It is a set of practices for making knowledge legible, contestable, and useful to people outside the lab.",
    tag: "Institutions",
    readTime: "5 min",
    quote:
      "A PDF on the internet is not open science. It is a press release with equations.",
    body: [
      "Open research is often reduced to a licensing question. Did you publish the paper? Is the code on GitHub? Can someone read it without a paywall? These things matter, but they are the bare minimum. They do not make knowledge usable.",
      "Usable knowledge is legible: a stranger can understand what was done, why, and what would count as a failure. It is contestable: the data, code, and analysis are available for someone to challenge. It is cumulative: the next person can build on it without reconstructing the whole apparatus from scratch.",
      "That requires more than a repository. It requires protocols, versioning, preregistration, negative results, and a culture that treats replication as a contribution rather than a demotion. It requires time and money that most research institutions do not allocate.",
      "We are experimenting with a different default. Every course produces a public artifact. Every working paper ships with its evaluation harness. Every reading group has public notes. We are not always good at this yet. But the standard is the point.",
      "Openness is also a safety strategy. Systems that shape public life should be studied in public. That does not mean publishing everything — some capabilities are genuinely dangerous. It means making the boundaries of what is published an explicit, contestable decision rather than a business default.",
    ],
  },
];

export const stats = [
  { value: "04", label: "research threads" },
  { value: "06", label: "open courses" },
  { value: "100%", label: "public materials" },
  { value: "01", label: "question" },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
