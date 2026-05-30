export const services = [
  {
    id: "audit",
    name: "OwnerOS Audit",
    price: "$1,500",
    tagline: "Start here.",
    description:
      "A complete operational diagnostic. We map how your business runs, score it across 10 dimensions, identify what's costing you leads and time, and give you a clear 90-day roadmap.",
    deliverables: [
      "60-minute discovery call",
      "OwnerOS Readiness Score (0–100)",
      "5 Rooms assessment",
      "Visual workflow map",
      "Bottleneck report",
      "Quick wins list",
      "90-day roadmap",
      "12–15 page branded PDF report",
    ],
    cta: "Get Your Audit",
    href: "/audit",
    highlight: false,
  },
  {
    id: "quickstart",
    name: "OwnerOS QuickStart",
    price: "$5,000",
    tagline: "Fix one room fast.",
    description:
      "One focused implementation targeting your biggest operational gap — lead follow-up, SOPs, owner dashboard, or AI office assistant. Built, trained, and handed off in 3–4 weeks.",
    deliverables: [
      "One implemented workflow",
      "OwnerOS Command Center setup",
      "3–5 SOPs",
      "AI prompt library",
      "Team training",
      "30-day usage guide",
      "Handoff document",
    ],
    cta: "Learn More",
    href: "/services",
    highlight: false,
  },
  {
    id: "growth",
    name: "OwnerOS Growth System",
    price: "$10,000–$15,000",
    tagline: "Build the full operating system.",
    description:
      "The complete 5 Rooms implementation. We map everything, build all five rooms, train your team, and hand off a fully working operating system in 60 days.",
    deliverables: [
      "OwnerOS Audit included",
      "All 5 Rooms implemented",
      "10 custom SOPs",
      "AI workflow library",
      "Owner dashboard",
      "Full team training",
      "60-day rollout plan",
    ],
    cta: "Get a Proposal",
    href: "/services",
    highlight: true,
  },
  {
    id: "retainer",
    name: "OwnerOS Partner Retainer",
    price: "$3,000–$8,000/mo",
    tagline: "Keep improving every month.",
    description:
      "Monthly optimization, new SOPs and automations, dashboard reviews, AI prompt updates, and quarterly strategy sessions. Stay on the path without managing it yourself.",
    deliverables: [
      "Monthly dashboard review",
      "New SOPs each month",
      "Automation improvements",
      "AI prompt updates",
      "Monthly summary report",
      "Quarterly strategy session",
    ],
    cta: "Learn More",
    href: "/services",
    highlight: false,
  },
];

export const rooms = [
  {
    number: "01",
    name: "The Front Door",
    icon: "🚪",
    description: "Where leads, calls, forms, and customer requests enter your business.",
    problems: ["Missed leads", "Scattered inquiries", "Slow first response", "No source tracking"],
    systems: ["Lead intake form", "Inquiry routing", "Missed call process", "Initial response template"],
  },
  {
    number: "02",
    name: "The Follow-Up Desk",
    icon: "📋",
    description: "Where prospects are contacted, nurtured, scheduled, quoted, and moved forward.",
    problems: ["Weak follow-up", "Forgotten prospects", "No nurture sequence", "Lost revenue"],
    systems: ["Instant reply templates", "SMS/email sequences", "Quote follow-up", "Reactivation campaigns"],
  },
  {
    number: "03",
    name: "The Playbook",
    icon: "📖",
    description: "Where SOPs, scripts, FAQs, training, and approved responses live.",
    problems: ["Everything in owner's head", "Staff repeat mistakes", "Inconsistent experience", "Slow onboarding"],
    systems: ["SOP library", "FAQ knowledge base", "Brand voice guide", "Customer scripts", "Prompt library"],
  },
  {
    number: "04",
    name: "The Workroom",
    icon: "⚙️",
    description: "Where tasks, projects, approvals, and team responsibilities are managed.",
    problems: ["Unclear ownership", "Tasks fall through cracks", "No accountability", "Owner chases everyone"],
    systems: ["Task board", "Project board", "Recurring checklists", "Owner approval queue"],
  },
  {
    number: "05",
    name: "The Control Room",
    icon: "📊",
    description: "Where the owner sees key metrics, bottlenecks, and weekly business performance.",
    problems: ["No visibility", "Scattered reports", "Decisions based on feeling", "No single source of truth"],
    systems: ["Owner dashboard", "Weekly executive summary", "Lead source report", "AI insights"],
  },
];

export const methodPhases = [
  {
    number: "1",
    name: "Map",
    description: "We document how your business actually runs today — lead flow, communication, tools, SOPs, and owner bottlenecks.",
  },
  {
    number: "2",
    name: "Score",
    description: "We score your business using the OwnerOS Readiness Score across 10 dimensions from 0 to 100.",
  },
  {
    number: "3",
    name: "Build",
    description: "We build the missing pieces — room by room — using tools you already have or can adopt easily.",
  },
  {
    number: "4",
    name: "Train",
    description: "We train your team to use the system so it actually sticks. Documentation, videos, and live sessions.",
  },
  {
    number: "5",
    name: "Optimize",
    description: "We review, improve, and expand monthly — so the system keeps working as your business grows.",
  },
];
