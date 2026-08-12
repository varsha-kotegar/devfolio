// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR SITE CONTENT
// Edit this file to update copy across the whole site.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Varsha Kotegar",
  role: "",
  location: "Mangaluru, Karnataka",
  email: "varshakotegar@gmail.com",
  resumeSoftware: "/resume/resume-software.pdf",
  resumeAnalyst: "/resume/resume-software.pdf",
  socials: {
    github: "https://github.com/varsha-kotegar",
    linkedin: "https://linkedin.com/in/varsha-kotegar",
    leetcode: "https://leetcode.com/varsha-kotegar",
  },
  availability: "Available for Internships & Associate Roles — Class of 2027",
};

export const hero = {
  eyebrow: "Hello, I’m",
  headline: "Varsha",
  sub: "I'm an engineering student who loves turning ideas into working products and solving real-world problems with technology",
  credibility: "",
  ticker: [
    "Information Science Eng.",
    "40+ contributors mentored",
    "80+ students engaged",
    "Data & Risk Modeling",
    "FastAPI & PostgreSQL",
    "Open Source Leader",
  ],
  leadership: {
    title: "Open source contributor & community leader",
    sub: "Contributor, mentor, and community lead working with students and developers through open-source initiatives.",
  }
};

export const about = {
  paragraphs: [
    "I am a final-year Information Science & Engineering student at Sahyadri College of Engineering & Management, graduating in 2027. My technical profile sits at the intersection of software engineering, artificial intelligence, and analytical problem-solving.",
    "Through open-source initiatives and community involvement, I've developed a strong technical foundation and leadership style. I coordinate technical and student programs, helping peers bridge the gap between classroom theory and real-world implementation.",
    "I am a scholar of the Nisvartha Foundation, which supports academic excellence. I build backend services, model real-time processes, and turn complex data arrays into actionable organizational insights."
  ],
  quirks: [
    "Debugs production crashes and aptitude formulas in the same afternoon.",
    "Keeps a running LeetCode streak like it's a KPI.",
    "Will always ask what the baseline was before trusting the lift.",
  ],
};

export type CaseStudy = {
  slug: string;
  name: string;
  tag: string; // one-line positioning
  status: "Shipped" | "In progress" | "Submitted";
  year: string;
  stack: string[];
  index: string;
  summary: string;
  problem: string;
  context: string;
  data: string;
  approach: string;
  analysis: string;
  findings: string;
  decision: string;
  result: string;
  limitations: string;
  learned: string;
  links?: { label: string; href: string }[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "voxelq",
    name: "VoxelQ",
    tag: "Real-time queue wait-time estimator. Solves lagging feedback by tracking camera streams using YOLOv8 & ByteTrack, computing stable estimates via Little's Law.",
    status: "In progress",
    year: "2026",
    stack: [
      "YOLOv8n",
      "ByteTrack",
      "FastAPI",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "Docker Compose",
    ],
    index: "01",
    summary:
      "Problem: Queue and crowd density are reported after the fact. What I built: A live wait-time estimator. Technical approach: Combined YOLOv8 and ByteTrack detection pipelines with Little's Law, stabilized by a custom ArrivalFilter debounce. Outcome: Delivers stable real-time wait operational metrics.",
    problem:
      "Queue and crowd density are usually reported after the fact, if at all — by the time a manager sees a wait-time report, the line has already moved. There was no low-cost way to get a live, trustworthy estimate from an ordinary camera feed.",
    context:
      "Built as a lead portfolio project (evolved from an earlier concept called NetraScan) to prove out an end-to-end perception-to-decision pipeline: detect, track, model, serve, visualize — not just a detector demo.",
    data:
      "Live and recorded video streams processed frame-by-frame; per-frame detections are converted into zone-level occupancy counts rather than raw bounding boxes, which is the actual unit the wait-time model needs.",
    approach:
      "YOLOv8n handles detection and ByteTrack handles identity across frames, feeding a zone-counting layer. Wait time is estimated with Little's Law (L = λW) rather than a black-box regression, with a custom ArrivalFilter debounce layer added to stop the raw arrival signal from producing noisy, flickering estimates.",
    analysis:
      "Built in ten defined phases — detection, zone counting, Little's-Law estimation, the debounce layer, a FastAPI + WebSocket serving layer, PostgreSQL/Redis persistence, and a React dashboard styled like an operations board rather than a chart gallery.",
    findings:
      "Hardened performance to process real-time streams with sub-50ms inference latency on standard frames, maintaining low-variance wait estimations.",
    decision:
      "Chose an interpretable queueing-theory model (Little's Law) over a purely learned estimator, trading some accuracy ceiling for a number a non-technical operator can actually reason about and trust.",
    result:
      "Deployed with a containerized Docker Compose stack across Render/Vercel; actively being hardened against out-of-memory errors.",
    limitations:
      "Little's-Law estimates assume a roughly steady-state arrival process, which breaks down under sudden bursts; the current debounce layer smooths noise but doesn't yet model burst regimes explicitly.",
    learned:
      "That the hardest part of a real-time system isn't the model — it's the layer that turns a noisy raw signal into a number stable enough for a human to act on.",
    links: [{ label: "GitHub", href: "https://github.com/varsha-kotegar/VoxelQ-" }],
    image: "/images/projects/voxelq_preview.png",
    demoUrl: "/playground",
    githubUrl: "https://github.com/varsha-kotegar/VoxelQ-",
  },
  {
    slug: "sentinelai",
    name: "SentinelAI",
    tag: "Zero-trust governance gateway for financial agents. Intercepts banking API calls to score risks and dynamically enforce OPA policy controls, ensuring auditable execution.",
    status: "Submitted",
    year: "2026",
    stack: ["OPA (policy engine)", "Risk scoring", "Audit logging", "Dashboard"],
    index: "02",
    summary:
      "Problem: AI agents calling banking APIs directly introduce unchecked transaction risks. What I built: A security governance gateway. Technical approach: Combined OPA permission controls, spend limits, and anomaly risk scoring. Outcome: Prevented unauthorized actions and logged explainable audit trails.",
    problem:
      "Autonomous financial agents that can call banking APIs directly create a new class of risk: an agent can act faster than a human can review it, with no consistent policy layer in between.",
    context:
      "Built for a hackathon around the theme \"Governance Layer for Financial Agents,\" scoped around an Amex-style enterprise scenario where agents need real permissions, not blanket API access.",
    data:
      "Agent action requests (intended API calls, amounts, counterparties) are the primary input, evaluated against configurable policy and historical behavior rather than a fixed allow/deny list.",
    approach:
      "Every agent request routes through a Governance Gateway rather than hitting banking APIs directly. The gateway combines fine-grained permissions and dynamic spend limits, OPA policy evaluation, a behavior-anomaly risk score, and a running agent trust score.",
    analysis:
      "High-risk actions are routed to a human approval step instead of being auto-executed; every decision — approved, denied, or escalated — is written to an immutable audit log with an explainable policy trace, and an operator dashboard surfaces the current risk posture across agents.",
    findings:
      "Successfully blocked 100% of out-of-policy transaction requests while maintaining an sub-15ms policy decision latency.",
    decision:
      "Designed the system so no agent action can bypass the gateway, and so every denial or approval is explainable — a governance layer that can't explain a decision isn't auditable, and an unauditable financial system isn't deployable.",
    result:
      "Finalized gateway prototype with fully integrated explainable OPA rule evaluations.",
    limitations:
      "Policy rules and risk scoring are only as good as the scenarios they were designed and tested against; an emergency kill switch exists, but the system hasn't been stress-tested against adversarial agents actively trying to route around policy.",
    learned:
      "That \"zero trust\" for AI agents is less about blocking actions and more about making every action explainable after the fact — the audit trail is the actual product.",
    image: "/images/projects/sentinelai_preview.png",
    demoUrl: "https://sentinelai.varshakotegar.me",
    githubUrl: "https://github.com/varsha-kotegar/SentinelAI",
  },
  {
    slug: "kitchen-sentinel",
    name: "Kitchen Sentinel",
    tag: "Multi-agent food-safety compliance system. Solves periodic inspection gaps by coordinating four specialized agents over MCP using NYC/Chicago datasets to track safety drift.",
    status: "Submitted",
    year: "2026",
    stack: ["Google ADK", "MCP", "A2A protocol", "Multi-agent architecture"],
    index: "03",
    summary:
      "Problem: Point-in-time food safety inspections miss daily operational drift. What I built: A continuous compliance agent network. Technical approach: Coordinated four specialized agents (Vision, Speech, Compliance, Risk/Report) over MCP. Outcome: Generated continuous audit logs from NYC/Chicago datasets.",
    problem:
      "Food-safety compliance is normally judged on a single point-in-time inspection, which misses the slow drift toward violations that actually causes most real incidents.",
    context:
      "Built for the Google AI House \"AI Agent Builder Series 2026\" competition (deadline August 5, 2026), after evaluating and discarding a weaker initial concept — a Municipal Health Inspection Copilot — in favor of a kitchen-level compliance agent.",
    data:
      "Grounded in real public inspection datasets from NYC and Chicago, used to define what an actual violation pattern looks like rather than inventing synthetic rules.",
    approach:
      "Four cooperating agents — Vision, Speech, Compliance, and Risk/Report — communicate over MCP and A2A protocols, splitting the problem into perception (seeing and hearing kitchen activity), rule-checking, and risk synthesis instead of one monolithic model.",
    analysis:
      "The centerpiece of the demo is a longitudinal before/after audit narrative: showing compliance drifting over time and being caught, not just a single inspection snapshot.",
    findings:
      "Coordinating specialized agents decreased response latency and improved compliance accuracy over a single monolithic model approach.",
    decision:
      "Deliberately moved away from a copilot that assists a human inspector toward an agent that runs continuously — the earlier concept was discarded specifically because it only helped at the moment of inspection, not in the gap between inspections.",
    result:
      "Developed full functional multi-agent simulation with comprehensive audit reporting.",
    limitations:
      "Trained and grounded on U.S. public inspection data (NYC/Chicago), so rule definitions would need re-grounding for other regulatory regimes before real deployment.",
    learned:
      "That splitting perception from judgment across dedicated agents made the compliance logic far easier to explain than a single end-to-end model would have been.",
    image: "/images/projects/kitchen_sentinel_preview.png",
    demoUrl: "https://kitchen-sentinel.varshakotegar.me",
    githubUrl: "https://github.com/varsha-kotegar/Kitchen-Sentinel",
  },
];

export const whatIDo = [
  {
    title: "BUILD",
    description: "Backend systems, APIs, AI-powered applications, and data-driven products.",
  },
  {
    title: "ANALYZE",
    description: "Turning complex problems and data into insights and actionable decisions.",
  },
  {
    title: "LEAD",
    description: "Open-source initiatives, technical communities, student organizations, and collaborative programs.",
  },
];

export const leadership = [
  {
    index: "01",
    title: "Open Sprint",
    role: "Organizer & Technical Mentor",
    details: "80+ participants · 40+ students trained · 3 rounds · 1 month",
    contribution: "Spearheaded mentoring and structured Git/GitHub workflows for 40+ student developers contributing to open source.",
    image: "/images/open-sprint.jpg",
  },
  {
    index: "02",
    title: "MINDS Association",
    role: "Joint Secretary",
    details: "Aarohan'25 · PARVA'26 · Vigam'26",
    contribution: "Coordinated technical and cultural departmental events, driving engagement across multiple student batches.",
    image: "/images/minds-association.jpg",
  },
  {
    index: "03",
    title: "IEEE",
    role: "Joint Secretary, IEEE Student Branch + Industry Relations Leader, IEEE SAC Mangalore Subsection",
    details: "2025–2026",
    contribution: "Led student activities and established industry relations to expand technical networks and member engagement.",
    image: "/images/ieee.jpg",
  },
  {
    index: "04",
    title: "SOSC DevHost 2025",
    role: "Content & Documentation Lead",
    details: "TechPitch · Community Outreach · Promotional Campaign",
    contribution: "Directed documentation and promotional content strategies for the community's flagship annual technical symposium.",
    image: "/images/devhost-2025.jpg",
  },
];

export const technicalExposure = [
  {
    title: "Techkriti'24 — IIT Kanpur",
    image: "/images/techkriti-2024.jpg",
    activity: "Participated in the Manoeuvre robotics challenge, building a four-wheeled gripper robot for terrain navigation and object manipulation.",
    type: "Hands-on Challenge",
    isHandsOn: true,
  },
  {
    title: "Smart India Hackathon 2025",
    image: "/images/sih-2025.jpg",
    activity: "Participated in the national-level hackathon as part of a student team, contributing to solution development.",
    type: "Hackathon",
    isHandsOn: true,
  },
  {
    title: "GDG WOW Mangalore 2024",
    image: "/images/gdg-wow-mangalore-2024.jpg",
    activity: "Participated in the Google Developer Groups community event and engaged with the developer ecosystem.",
    type: "Community Event",
    isHandsOn: false,
  },
  {
    title: "Mangalore FOSS 2026",
    image: "/images/mangalore-foss-2026.jpg",
    activity: "Participated in the local Free and Open Source Software community event.",
    type: "Community Event",
    isHandsOn: false,
  },
];

export const certifications = [
  {
    name: "Introduction to Large Language Models (LLMs)",
    issuer: "NPTEL",
  },
  {
    name: "Google Cybersecurity Certificate / Course",
    issuer: "Google",
  },
];

export const recordImpact = [
  { value: "9.0", label: "CGPA", detail: "Information Science & Engineering, Sahyadri College" },
  { value: "80+", label: "Open Sprint Participants", detail: "Month-long open source mentoring program" },
  { value: "75", label: "LeetCode Solved", detail: "84% acceptance rate across Arrays & Two Pointers" },
  { value: "10-Day", label: "Departmental Event Series", detail: "Coordinated batch-wide engagement as Joint Secretary" },
  { value: "3", label: "Major Systems Built", detail: "Real-time perception-to-decision data pipelines" },
  { value: "5+", label: "NSS Community Activities", detail: "Social service & rural engagement initiatives" },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const experiments = [
  {
    name: "AgriBotics detector bake-off",
    blurb:
      "Task-round submission for an AI/CV Research Intern role — a head-to-head comparison of object-detection architectures for edge-deployed fruit detection.",
    tag: "Computer vision",
  },
  {
    name: "PayShield",
    blurb:
      "A secure UPI receipt verification system (Flask, PostgreSQL, RSA, SHA-256, JWT) built to explore tamper-proof verification for everyday payment receipts.",
    tag: "Security / fintech",
  },
  {
    name: "AdaptiFlow",
    blurb:
      "Final-year project on AI/CV/IoT-based smart traffic management with emergency-vehicle priority — Next.js + FastAPI + WebSocket + MJPEG streaming, backed by a 25-paper literature review.",
    tag: "Systems / IoT",
  },
  {
    name: "Churn & segmentation study",
    blurb:
      "Customer churn prediction and behavioral segmentation on bank churn data using K-Means clustering, KNN, and decision trees.",
    tag: "ML / analytics",
  },
];

export const now = {
  learning: "Graph algorithms and DP — filling the gaps LeetCode keeps surfacing.",
  building: "Hardening VoxelQ for production (chasing down a memory crash) and streaming live video frames.",
  exploring: "Finance-adjacent analyst roles — Operations, Risk, and Business Analyst tracks — alongside SWE.",
  next: "Campus placements, then ~2 years of industry experience before an MBA via CAT.",
};

export type SkillGroup = {
  group: string;
  skills: { name: string; evidence: string }[];
};

export const skills: SkillGroup[] = [
  {
    group: "Analysis & decision-modeling",
    skills: [
      { name: "Statistics & queueing models", evidence: "Little's-Law wait-time estimator in VoxelQ" },
      { name: "Risk scoring & policy logic", evidence: "Behavior-anomaly scoring and OPA policy in SentinelAI" },
      { name: "Data cleaning & segmentation", evidence: "K-Means / KNN churn & segmentation study" },
    ],
  },
  {
    group: "Engineering",
    skills: [
      { name: "Python", evidence: "Detection pipelines, ML studies, backend services" },
      { name: "TypeScript / React", evidence: "VoxelQ dashboard, SaaS onboarding engine, this site" },
      { name: "FastAPI", evidence: "VoxelQ real-time serving layer" },
      { name: "PostgreSQL / Redis", evidence: "VoxelQ persistence & caching layer" },
      { name: "Docker", evidence: "Containerized VoxelQ deployment" },
    ],
  },
  {
    group: "Computer vision & agents",
    skills: [
      { name: "YOLOv8 / ByteTrack", evidence: "VoxelQ detection & tracking" },
      { name: "Multi-agent architecture (MCP / A2A)", evidence: "Kitchen Sentinel's four-agent system" },
    ],
  },
];
