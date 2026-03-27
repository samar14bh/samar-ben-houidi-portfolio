export const data = {
  name: "Samar Ben Houidi",
  title: "Full-Stack Developer",
  titleHighlight: "AI Enthusiast",
  subtitle: "2nd-year Software Engineering student at National Institute of Applied Science and Technology (INSAT), building innovative web platforms with a passion for DevOps and artificial intelligence. I design systems that are performant, intelligent, and purposeful.",
  location: "Zaghouan, Tunisia",
  email: "samar.benhouidi@insat.ucar.tn",
  phone: "+216 99 191 915",
  linkedin: "https://linkedin.com/in/samar-benhouidi-a721172a1",
  github: "https://github.com/samar14bh",

  stats: [
    { num: "8+", label: "Projects Built" },
    { num: "2", label: "Internships" },
    { num: "10+", label: "Technologies" },
    { num: "3", label: "Languages" },
  ],

  experience: [
    {
      role: "Web Development Intern",
      company: "Sofrecom Tunisie",
      date: "Aug 2025 · 1 month",
      bullets: [
        "Developed a dynamic invoice generation module for TV partners (TF1, M6, Paramount, Disney) with configurable templates.",
        "Designed modular, reusable templates to anticipate future service integrations (music, gaming, VOD).",
      ],
      stack: ["Spring Boot", "Angular", "PostgreSQL", "GitLab", "SonarQube"],
    },
    {
      role: "Full-Stack Development Intern",
      company: "International Consulting Canada",
      date: "Jun–Aug 2024 · 3 months",
      bullets: [
        "Built a user-friendly interface for database interaction — enabling database creation and visual entity relationship exploration.",
        "Received a merit certificate for outstanding project contribution.",
      ],
      stack: ["Angular", "Django", "PostgreSQL"],
    },
  ],

  projects: [
    {
      icon: "🌱",
      color: "#00d4aa",
      colorBg: "rgba(0,212,170,0.1)",
      colorBorder: "rgba(0,212,170,0.2)",
      year: "2025",
      title: "Environmental Monitoring Platform",
      desc: "Enterprise carbon footprint tracking system with AI-powered reduction suggestions and predictive modeling. Containerized via Docker.",
      tags: ["Spring Boot", "Angular", "AI/ML", "Docker", "MySQL"],
    },
    {
      icon: "🚗",
      color: "#a8a4ff",
      colorBg: "rgba(108,99,255,0.1)",
      colorBorder: "rgba(108,99,255,0.2)",
      year: "2025",
      title: "Carpooling Platform",
      desc: "Full-featured ride-sharing app with trip management, user profiles, ratings, real-time chat via WebSockets, and optimized GraphQL queries.",
      tags: ["NestJS", "React", "GraphQL", "WebSockets", "MySQL"],
    },
    {
      icon: "📊",
      color: "#ff6b9d",
      colorBg: "rgba(255,107,157,0.1)",
      colorBorder: "rgba(255,107,157,0.2)",
      year: "2025",
      title: "ERP Task & Project Management",
      desc: "Enterprise module for task distribution, progress tracking, and project supervision with dashboards for team analytics.",
      tags: [".NET", "MySQL"],
    },
    {
      icon: "🍽️",
      color: "#ffb347",
      colorBg: "rgba(255,179,71,0.1)",
      colorBorder: "rgba(255,179,71,0.2)",
      year: "2024",
      title: "Recipe Blogging Platform",
      desc: "Recipe sharing platform with publication, comments, user profiles, and admin dashboard for stats and recipe validation.",
      tags: ["Symfony", "PHP", "JavaScript", "HTML/CSS"],
    },
  ],

  skills: [
    { label: "Frameworks", items: ["Angular", "Spring Boot", "Django", ".NET", "NestJS", "React", "Symfony"] },
    { label: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "C++", "PHP"] },
    { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { label: "DevOps & Tools", items: ["Docker", "Kubernetes", "GitLab CI", "GitHub", "SonarQube"] },
    { label: "Interests", items: ["Machine Learning", "DevOps", "Cybersecurity", "Mobile Dev"] },
    { label: "Spoken Languages", items: ["French", "English", "Spanish", "Arabic"] },
  ],

  education: [
    {
      degree: "Cycle Ingénieur — Software Engineering",
      school: "INSAT — Institut National des Sciences Appliquées et de Technologie",
      year: "2024 → present · Tunis, Tunisia",
    },
    {
      degree: "Preparatory Cycle — MPI (Math, Physics, CS)",
      school: "INSAT",
      year: "2022–2024 · Tunis, Tunisia",
    },
    {
      degree: "Baccalauréat — Experimental Sciences, Très Bien",
      school: "Lycée Slimen Ben Slimen",
      year: "2022 · Zaghouan, Tunisia",
    },
  ],

  activities: [
    {
      org: "🔐 SecuriNets INSAT",
      sub: "Cybersecurity Club · Member",
      items: [
        "Workshops in reverse engineering and ethical hacking",
        "CTF competitions — web exploitation, pwn, reversing, crypto, forensics, OSINT",
      ],
    },
    {
      org: "⚙️ ACM INSAT Student Chapter",
      sub: "Algorithm & ML Club · Member",
      items: [
        "Competitive programming workshops — algorithms and problem solving",
        "ML/Deep Learning hackathons (dataoverflow)",
        "ACM Competitive Programming Contest participant",
      ],
    },
  ],

  certifications: [
    {
      icon: "📜",
      title: "Spring Boot 3 & Spring 6 + Hibernate",
      sub: "Udemy Certification",
    },
    {
      icon: "🏆",
      title: "Angular & Django Development",
      sub: "Merit certificate — International Consulting Canada",
    },
  ],
};
