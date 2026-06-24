export const profile = {
  name: "Mohammed Bilal Manna",
  role: "Full Stack Engineer",
  location: "Bengaluru, Karnataka",
  degree: "Bachelor of Computer Applications",
  college: "Surana College Autonomous"
} as const;

export const quickFacts = [
  ["Projects built", "04+"], ["Technologies", "15+"], ["Experience", "02 roles"],
  ["Hackathons", "02"], ["Peak SGPA", "9.73"], ["AI projects", "02"], ["Graduation", "2026"]
] as const;

export const skills = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "TensorFlow.js", "Gemini API"] as const;

export const experiences = [
  { title: "Full Stack Developer (Freelance)", company: "Hayaa By Noor", period: "2025–2026", summary: "Built a production-minded commerce experience that connects clear product interfaces with dependable operational workflows.", details: ["Developed responsive product and checkout experiences with Next.js, TypeScript, and Tailwind CSS.", "Designed authentication, backend API flows, and relational PostgreSQL data models for products, orders, and inventory.", "Implemented Razorpay payment verification with webhook-driven status updates and HMAC signature validation.", "Supported deployment-ready workflows with environment-aware configuration and reliable user-facing states."], stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Razorpay", "REST APIs", "Deployment"] },
  { title: "Frontend Web Developer Intern", company: "IAAHE", period: "2025", summary: "Collaborated on accessible digital experiences for an education-focused organization.", details: ["Designed responsive web pages and reusable UI components using WordPress and Figma workflows.", "Created 60+ logo concepts while working closely with a cross-functional team.", "Balanced visual consistency, usability, and fast iteration across a broad set of communication needs."], stack: ["WordPress", "Figma", "Responsive UI", "Design systems"] }
] as const;

export const projects = [
  { title: "Plant Health Assistant", accent: "from-blue-500 to-emerald-400", description: "An AI-assisted plant-care experience that turns an image and a question into clearer next steps for growers.", details: "Built with TensorFlow.js for browser-side classification and Gemini API for practical, multilingual guidance. The project is trained around 4,000+ labeled plant images and joins AI capability with a human-friendly product flow.", stack: ["TensorFlow.js", "Gemini API", "React", "Express", "AI", "Multilingual"], stats: ["4,000+ labeled images", "Browser-side ML", "Multilingual support"] },
  { title: "BrewBuddy", accent: "from-amber-400 to-rose-500", description: "A specialty coffee price prediction product that makes machine learning useful at the moment of a decision.", details: "Developed an end-to-end, leakage-aware prediction pipeline with feature preprocessing, model tuning, and an interactive Streamlit interface for real-time estimates.", stack: ["Python", "Scikit-Learn", "GridSearchCV", "Streamlit", "Pandas"], stats: ["ML pipeline", "Real-time predictions", "Feature engineering"] }
] as const;

export const principles = [
  ["Build for users first", "Start with the decision or friction a person is actually facing."],
  ["Think in systems", "Interfaces, APIs, data, and operations should reinforce one another."],
  ["Start simple, iterate", "Ship the clearest useful version, then learn from reality."],
  ["Design for reliability", "Trust comes from considered states, verification, and resilient flows."],
  ["Focus on impact", "Good engineering should create a measurable improvement for someone."],
  ["Learn continuously", "New tools matter most when they expand what a product can do well."]
] as const;

export const timeline = [
  ["2023", "Started BCA", "Began a hands-on foundation in computing and product development."],
  ["2024", "Machine Learning Project", "Explored predictive systems and practical data workflows."],
  ["2025", "Hackathons · IAAHE · Plant Health Assistant", "Applied design, frontend engineering, and AI in real project settings."],
  ["2025–2026", "Hayaa By Noor", "Built full-stack commerce workflows from product interface to payment verification."],
  ["2026", "Graduation", "Completing BCA at Surana College Autonomous."]
] as const;
