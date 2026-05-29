import type { IconName } from "@/types/portfolio";

export const navItems = [
  { label: "Systems", href: "#hayaa" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
] as const;

export const proofItems = [
  "Transactional Workflows",
  "Payment Verification",
  "PostgreSQL Architecture",
  "Responsive Product Systems",
  "Production Deployment"
] as const;

export const workflowSteps: Array<{
  label: string;
  detail: string;
  note: string;
  state: string;
  icon: IconName;
}> = [
  {
    label: "Customer",
    detail: "checkout intent",
    note: "The flow begins as a product action, not a technical event.",
    state: "cart ready",
    icon: "BriefcaseBusiness"
  },
  {
    label: "Checkout",
    detail: "order created",
    note: "The backend creates a traceable order before the payment handoff.",
    state: "order open",
    icon: "Workflow"
  },
  {
    label: "Razorpay",
    detail: "payment attempt",
    note: "Payment moves through an external system without trusting the client alone.",
    state: "awaiting event",
    icon: "ShieldCheck"
  },
  {
    label: "Webhook",
    detail: "server receives",
    note: "The backend listens for the payment event as the reliable source of change.",
    state: "event received",
    icon: "ServerCog"
  },
  {
    label: "HMAC",
    detail: "payload verified",
    note: "HMAC verification protects the order state from forged payment updates.",
    state: "signature valid",
    icon: "CheckCircle2"
  },
  {
    label: "Order Update",
    detail: "state transition",
    note: "The order lifecycle changes only after verification and backend checks.",
    state: "paid",
    icon: "Zap"
  },
  {
    label: "PostgreSQL",
    detail: "state persisted",
    note: "Relational records keep products, orders, inventory, and payment state aligned.",
    state: "source of truth",
    icon: "Database"
  }
];

export const hayaaNotes = [
  "Webhook-first confirmation instead of client-only trust",
  "Payment signature checked before order state changes",
  "Inventory and order records kept in sync around checkout",
  "Frontend states shaped around real backend outcomes"
] as const;

export const focusAreas: Array<{
  title: string;
  body: string;
  icon: IconName;
}> = [
  {
    title: "Product Interfaces",
    body: "Designing responsive product surfaces that make complex workflows feel clear, fast, and usable.",
    icon: "Sparkles"
  },
  {
    title: "Backend Systems",
    body: "Building API layers, service logic, and data flows that support real product behavior beyond the screen.",
    icon: "ServerCog"
  },
  {
    title: "Payments & Transactions",
    body: "Creating checkout flows, payment verification, webhook handling, and order lifecycle logic.",
    icon: "ShieldCheck"
  },
  {
    title: "Data Modeling",
    body: "Structuring relational PostgreSQL schemas around users, orders, products, and operational states.",
    icon: "Database"
  },
  {
    title: "AI-Integrated Features",
    body: "Using AI as a practical product layer for automation, assistance, and faster workflow execution.",
    icon: "Sparkles"
  },
  {
    title: "Deployment & Reliability",
    body: "Shipping production-minded applications with environment discipline, failure states, and clean handoff paths.",
    icon: "Workflow"
  }
];

export const projects = [
  {
    title: "BrewBuddy- Coffee Price Prediction Pipeline",
    description:
      "Developed an end-to-end machine learning pipeline for specialty coffee price prediction using scikit-learn, GridSearchCV, and feature preprocessing workflows.  Engineered data leakage-free preprocessing pipelines and built an interactive Streamlit interface for real-time predictions using competitor pricing, roast levels, and flavor profile features.",
    points: ["Interactive Interface", "Real Time Predictions", "End to End ML Pipeline"],
    stack: ["Python", "Scikit-Learn", "Pandas", "SteamLit"]
  },
  {
    title: "UrbanStitch Co.- Modern Frontend Fashion Platform",
    description:
      "Developed a responsive frontend fashion platform using Next.js, TypeScript, Tailwind CSS, and reusable animated UI systems with emphasis on modern product presentation and mobile-first UX.",
    points: ["Responsive Design", "Modern UI Libraries", "Clean User Flow"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Aceternity UI", "Magic UI", "Framer Motion"]
  }
] as const;

export const principles = [
  "Reliability matters more than unnecessary complexity.",
  "Frontend UX and backend system design should reinforce each other.",
  "Good products come from understanding the workflow, not just the stack.",
  "AI should accelerate useful execution, not replace engineering judgment."
] as const;

export const exploring = [
  "AI-integrated product workflows",
  "Backend reliability patterns",
  "Startup engineering systems",
  "Scalable product architecture",
  "AI-assisted shipping velocity"
] as const;
