import examifyImg from "@/assets/project-examify.jpg";
import cinefillyImg from "@/assets/project-cinefilly.jpg";
import tickventoImg from "@/assets/project-tickvento.jpg";
import workstationImg from "@/assets/workstation.jpg";
import portraitImg from "@/assets/portrait.webp";

export const images = {
  portrait: portraitImg,
  workstation: workstationImg,
};

export const profile = {
  name: "Muhammad Riaz",
  shortName: "Riaz",
  role: "Full Stack Developer",
  email: "riazdev18@gmail.com",
  phone: "+92-331-9876376",
  location: "DHA Phase 2 — Sector E, Islamabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/riazdev18",
  linkedinHandle: "riazdev18",
  github: "https://github.com/gitmxr",
  githubHandle: "gitmxr",
  roles: [
    "Full Stack Developer",
    "MERN & Next.js Engineer",
    "Azure Certified (AZ-104, AZ-900)",
    "Real-Time Systems Builder",
  ],
  heroLead:
    "Building production-grade real-time and AI-integrated applications with the MERN stack, Next.js, and ASP.NET Core. Azure-certified with hands-on cloud infrastructure expertise.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  subtitle: string;
  years: string;
  description: string;
  tech: string[];
  demo?: string;
  code?: string;
  image: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Examify",
    subtitle: "Online Examination System",
    years: "2024 – 2025",
    description:
      "A comprehensive examination platform with role-based authentication, question bank management, and an AI-powered chatbot for real-time student support. Designed the platform architecture and delivered a responsive React.js frontend with automated grading, streamlining the end-to-end exam workflow.",
    tech: ["ASP.NET Core", "SQL Server", "React.js", "Dialogflow", "REST API"],
    code: "https://github.com/gitmxr",
    image: examifyImg,
  },
  {
    title: "CineFilly",
    subtitle: "Movie & TV Discovery Platform",
    years: "2025 – Present",
    description:
      "A full-stack movie, TV, and music discovery app optimized for speed and SEO. Built with the Next.js App Router using Server Components, ISR, and SSR; secured TMDB/YouTube API integrations behind server-side proxy routes with rate limiting, backed by a 45+ test Vitest suite.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    code: "https://github.com/gitmxr",
    image: cinefillyImg,
  },
  {
    title: "TickVento",
    subtitle: "Full-Stack Event Ticketing Platform",
    years: "2025 – Present",
    description:
      "A ticketing platform combining a clean, well-architected backend with a modern frontend and admin reporting tools. ASP.NET Core 8 API using Clean Architecture, DDD, and CQRS via MediatR, paired with a Next.js 16 frontend using TanStack Query, JWT refresh-token auth, and a Dockerized CI pipeline.",
    tech: ["ASP.NET Core 8", "Next.js 16", "MediatR", "Docker", "TanStack Query"],
    code: "https://github.com/gitmxr",
    image: tickventoImg,
  },
  {
    title: "Intelli Hub",
    subtitle: "Real-Time Multilingual Speech Translation",
    years: "2025 – Present",
    description:
      "Real-time multilingual speech translation platform supporting three modes (Solo, Room, Conference) with audio streamed over WebSocket, live transcripts, and TTS playback. Hardened with heartbeat/resync logic, JWT and guest authentication, and disconnect handling.",
    tech: ["React", "Vite", "WebSocket", "JWT", "TTS"],
    image: examifyImg,
  },
  {
    title: "Intelli Search",
    subtitle: "Multilingual Semantic Search Platform",
    years: "2025",
    description:
      "Semantic search platform covering 50+ languages using vector embeddings and NLP-based intent matching for typo-tolerant results under 200ms, on a microservices architecture with a FastAPI backend, Elasticsearch/Pinecone vector search, and Redis caching.",
    tech: ["FastAPI", "React", "Pinecone", "Elasticsearch", "Redis"],
    image: cinefillyImg,
  },
  {
    title: "E-Bazaar",
    subtitle: "Marketplace UI Modernization",
    years: "2025",
    description:
      "Modernized a legacy marketplace UI by refactoring legacy state management into a cleaner React architecture, improving responsiveness and UI consistency platform-wide.",
    tech: ["React", "Redux", "Tailwind CSS", "REST API"],
    image: tickventoImg,
  },
];

export const services = [
  {
    no: "01",
    title: "Frontend Engineering",
    body: "Designing and building premium, responsive user interfaces with React, Next.js, Redux, and Tailwind CSS design systems focused on speed and UX.",
  },
  {
    no: "02",
    title: "Backend & APIs",
    body: "Architecting robust server business logic, microservices, and secure endpoints with Node.js, Express, ASP.NET Core, Entity Framework Core, and SQL/NoSQL data layers.",
  },
  {
    no: "03",
    title: "Cloud & DevOps",
    body: "Azure-certified (AZ-104, AZ-900) cloud infrastructure management, Dockerized deployments, and automated CI/CD pipelines for secure, scalable environments.",
  },
  {
    no: "04",
    title: "Real-Time & AI Systems",
    body: "WebSocket audio streaming, semantic/RAG search with vector embeddings, NLP intent matching, and AI assistant integrations inside production apps.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    caption: "Core software syntax and computational logic",
    items: ["JavaScript", "TypeScript", "C#", "SQL", "Python"],
  },
  {
    title: "Front-End",
    caption: "User interfaces and responsive designs",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "IndexedDB",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Back-End",
    caption: "Business logic, APIs, and authorization security",
    items: ["Node.js", "Express.js", "ASP.NET Core", "Entity Framework Core", "JWT", "REST API"],
  },
  {
    title: "Databases & Testing",
    caption: "Persistence layers and quality assurance",
    items: ["MongoDB", "Mongoose", "SQL", "SQL Server", "PostgreSQL", "Jest", "Vitest"],
  },
  {
    title: "Tools & Cloud",
    caption: "Infrastructure, delivery, and modern workflow",
    items: ["Git", "Docker", "Postman", "Microsoft Azure", "CI/CD", "Cursor", "Claude Code"],
  },
  {
    title: "Practices",
    caption: "Agile practices, project lifecycles, and architectures",
    items: ["Agile/Scrum", "SDLC", "Microservices", "Clean Architecture", "CQRS", "DDD"],
  },
];

export const certifications = [
  { label: "AZ-104: Azure Administrator Associate — Microsoft", href: profile.linkedin },
  { label: "AZ-900: Azure Fundamentals — Microsoft", href: profile.linkedin },
];

export const experience = [
  {
    period: "2025 — Present",
    title: "Software Engineer — Full-time (Onsite)",
    org: "Softech Business Services (SMC-PVT) Limited",
    place: "Islamabad, Pakistan",
    status: "Current",
    points: [
      "Engineered the React/Vite frontend for Intli Hub, a real-time multilingual speech translation platform supporting Solo, Room, and Conference modes with audio streamed over WebSocket, live transcripts, and TTS playback.",
      "Strengthened real-time reliability through WebSocket heartbeat/resync logic, JWT and guest authentication, and disconnect handling, reducing session drops in multi-user calls.",
      "Architected Intelli Search, a multilingual (50+ languages) semantic search platform using vector embeddings and NLP-based intent matching to deliver typo-tolerant results in under 200ms.",
      "Designed a microservices architecture with a FastAPI backend and React frontend, leveraging Elasticsearch/Pinecone for vector search and Redis caching.",
      "Modernized the E-Bazaar UI by refactoring legacy state management into a cleaner React architecture, improving responsiveness and UI consistency platform-wide.",
    ],
  },
];

export const education = [
  {
    period: "2021 — 2025",
    title: "B.S. in Software Engineering",
    org: "Sarhad University of Science and Information Technology, Peshawar",
    note: "CGPA 3.8 / 4.0",
  },
  {
    period: "2025",
    title: "AZ-104: Azure Administrator Associate",
    org: "Microsoft",
    note: "Certified",
  },
  {
    period: "2026",
    title: "AZ-900: Azure Fundamentals",
    org: "Microsoft",
    note: "Certified",
  },
];

export const articles = [
  {
    tag: "real-time",
    read: "7 min read",
    title: "Designing Resilient WebSocket Audio Streams",
    excerpt:
      "Heartbeats, resync windows, and disconnect handling — the three mechanics that keep multi-user voice sessions alive when the network does not cooperate.",
    placeholder: true,
  },
  {
    tag: "search",
    read: "9 min read",
    title: "Semantic Search in 50+ Languages Under 200ms",
    excerpt:
      "How vector embeddings, NLP intent matching, and a Redis cache layer combine into a typo-tolerant multilingual search experience.",
    placeholder: true,
  },
  {
    tag: "architecture",
    read: "6 min read",
    title: "Clean Architecture with CQRS in ASP.NET Core 8",
    excerpt:
      "Splitting reads from writes with MediatR, and why the boundary pays for itself the moment reporting requirements arrive.",
    placeholder: true,
  },
];

export const stats = [
  { value: 12, suffix: "+", label: "Projects" },
  { value: 1, suffix: "K+", label: "Commits" },
];
