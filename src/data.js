export const data = {
  name: "Samar Ben Houidi",
  title: "Full-Stack Developer",
  titleHighlight: "AI Enthusiast",
  subtitle: "2nd-year Software Engineering student at National Institute of Applied Science and Technology (INSAT), building innovative web platforms with a passion for DevOps and artificial intelligence. ",
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
    category: "ai",
    color: "#00d4aa",
    colorBg: "rgba(0,212,170,0.1)",
    colorBorder: "rgba(0,212,170,0.2)",
    year: "2025",
    title: "Environmental Monitoring Platform",
    image: "/project-images/ecopilot.png",
    desc: "Enterprise carbon footprint tracking system with AI-powered reduction suggestions and predictive modeling. Containerized via Docker.",
    tags: ["Spring Boot", "Angular", "AI/ML", "Docker", "MySQL"],
    order:1,
  },
  {
    icon: "🚗",
    category: "web",
    color: "#a8a4ff",
    colorBg: "rgba(108,99,255,0.1)",
    colorBorder: "rgba(108,99,255,0.2)",
    year: "2025",
    title: "Carpooling Platform",
    image: "/project-images/rides.png",
    desc: "Full-featured ride-sharing app with trip management, user profiles, ratings, real-time chat via WebSockets, and optimized GraphQL queries.",
    tags: ["NestJS", "React", "GraphQL", "WebSockets", "MySQL"],
    order:2,
  },
  {
    icon: "📊",
    category: "web",
    color: "#ff6b9d",
    colorBg: "rgba(255,107,157,0.1)",
    colorBorder: "rgba(255,107,157,0.2)",
    year: "2025",
    title: "ERP Task & Project Management",
    image: "/project-images/erp.png",
    desc: "Enterprise module for task distribution, progress tracking, and project supervision with dashboards for team analytics.",
    tags: [".NET", "MySQL"],
    order:3,
  },
  {
    icon: "🧠",
    category: "ai",
    color: "#9b59b6",
    colorBg: "rgba(155,89,182,0.1)",
    colorBorder: "rgba(155,89,182,0.2)",
    year: "2026-current",
    title: "Final Year Project – Distributed & Sustainable Deep Learning",
    image: "/project-images/introvert.png",
    desc: "Developed a distributed deep learning model with optimized task scheduling to reduce energy consumption while maintaining high prediction accuracy. Focused on sustainable AI practices and efficiency improvements for large-scale computations.",
    tags: ["Deep Learning", "Distributed Systems", "Python", "Task Scheduling"],
    order:5,
  },
  {
    icon: "🍼",
    category: "ai",
    color: "#ff6f61",
    colorBg: "rgba(255,111,97,0.1)",
    colorBorder: "rgba(255,111,97,0.2)",
    year: "2026",
    title: "NeoRisk Monitor – Backend ML API",
    image: "/project-images/neoRisk.png",
    desc: "Designed a backend API deploying four independent ML models to predict newborn health risks. Each model runs as a separate Flask microservice, ensuring modularity and scalability. Implemented multi-model ensemble predictions via REST APIs.",
    tags: ["Python", "Flask", "scikit-learn", "Microservices", "ML API"],
    order:2,
  },
  {
  icon: "📦",
  category: "ai",
  color: "#f39c12",
  colorBg: "rgba(243,156,18,0.1)",
  colorBorder: "rgba(243,156,18,0.2)",
  year: "2025",
  title: "Package Delivery System – INSAT AI Project",
  image: "/project-images/bestDelivery.png",
  desc: "Developed a corrected and fully functional package delivery system with accurate cost calculations based on traffic. Implemented 8 search algorithms, 2 admissible heuristics, traffic-aware path planning, obstacles, and tunnels. Validated with TestCorrectCosts.java demonstrating optimal path selection using A*.",
  tags: ["Java", "Algorithms", "A*", "Heuristics", "Traffic Simulation"],
  order:3,
},
  {
    icon: "🎧",
    category: "ai",
    color: "#8e44ad",
    colorBg: "rgba(142,68,173,0.1)",
    colorBorder: "rgba(142,68,173,0.2)",
    year: "2026",
    title: "Respiratory Sound Classification – Deep Learning",
    image: "/project-images/sound.png",
    desc: "Built a transformer-based model for automatic classification of respiratory sounds (normal, crackle, wheeze, both). Focused on enhancing recall to minimize false negatives. Reproduced or extended approaches from the paper on SAM-optimized audio spectrogram transformers, experimenting with preprocessing, training, and architecture improvements.",
    tags: ["Python", "Transformers", "Audio Processing", "Deep Learning", "ML"],
    order:4,
  },
  {
    icon: "🍽️",
    category: "web",
    color: "#ffb347",
    colorBg: "rgba(255,179,71,0.1)",
    colorBorder: "rgba(255,179,71,0.2)",
    year: "2024",
    title: "Recipe Blogging Platform",
    image: "/project-images/recipes.png",
    desc: "Recipe sharing platform with publication, comments, user profiles, and admin dashboard for stats and recipe validation.",
    tags: ["Symfony", "PHP", "JavaScript", "HTML/CSS"],
    order:1,
  },

],
  skills: [
  { 
    label: "Frameworks & Libraries", 
    items: [
      { name: "Angular", logoUrl: "https://cdn.simpleicons.org/angular" },
      { name: "Spring Boot", logoUrl: "https://cdn.simpleicons.org/springboot" },
      { name: "Django", logoUrl: "https://cdn.simpleicons.org/django" },
      { name: ".NET", logoUrl: "https://cdn.simpleicons.org/dotnet" },
      { name: "NestJS", logoUrl: "https://cdn.simpleicons.org/nestjs" },
      { name: "React", logoUrl: "https://cdn.simpleicons.org/react" },
      { name: "Symfony", logoUrl: "https://cdn.simpleicons.org/symfony" },
      { name: "Flask", logoUrl: "https://cdn.simpleicons.org/flask" },
      { name: "scikit-learn", logoUrl: "https://cdn.simpleicons.org/scikitlearn" },
      { name: "Transformers", logoUrl: "https://cdn.simpleicons.org/huggingface" }
    ] 
  },
  { 
    label: "Programming Languages", 
    items: [
      { name: "Python", logoUrl: "https://cdn.simpleicons.org/python" },
      { name: "Java", logoUrl: "https://cdn.simpleicons.org/openjdk" },
      { name: "TypeScript", logoUrl: "https://cdn.simpleicons.org/typescript" },
      { name: "JavaScript", logoUrl: "https://cdn.simpleicons.org/javascript" },
      { name: "C++", logoUrl: "https://cdn.simpleicons.org/cplusplus" },
      { name: "PHP", logoUrl: "https://cdn.simpleicons.org/php" },
      { name: "SQL", logoUrl: "https://cdn.simpleicons.org/mysql" }
    ] 
  },
  { 
    label: "Big Data & Distributed Systems", 
    items: [
      { name: "Hadoop", logoUrl: "https://cdn.simpleicons.org/apachehadoop" },
      { name: "Spark", logoUrl: "https://cdn.simpleicons.org/apachespark" },
      { name: "Kafka", logoUrl: "https://cdn.simpleicons.org/apachekafka" },
      { name: "Distributed Deep Learning", logoUrl: "https://cdn.simpleicons.org/pytorch" },
      { name: "Microservices Architecture", logoUrl: "https://cdn.simpleicons.org/kubernetes" }
    ] 
  },
  { 
    label: "DevOps & Tools", 
    items: [
      { name: "Docker", logoUrl: "https://cdn.simpleicons.org/docker" },
      { name: "Kubernetes", logoUrl: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Git", logoUrl: "https://cdn.simpleicons.org/git" },
      { name: "GitLab CI", logoUrl: "https://cdn.simpleicons.org/gitlab" },
      { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github" },
      { name: "SonarQube", logoUrl: "https://cdn.simpleicons.org/sonarqube" },
      { name: "CI/CD", logoUrl: "https://cdn.simpleicons.org/githubactions" }
    ] 
  },
  { 
    label: "Databases", 
    items: [
      { name: "PostgreSQL", logoUrl: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", logoUrl: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB", logoUrl: "https://cdn.simpleicons.org/mongodb" }
    ] 
  },
  { 
    label: "Machine Learning & AI", 
    items: [
      { name: "Machine Learning", logoUrl: "https://cdn.simpleicons.org/scikitlearn" },
      { name: "Deep Learning", logoUrl: "https://cdn.simpleicons.org/tensorflow" },
      { name: "Audio Signal Processing", logoUrl: "https://cdn.simpleicons.org/audacity" },
      { name: "Optimization & Algorithms", logoUrl: "https://cdn.simpleicons.org/leetcode" },
      { name: "REST APIs", logoUrl: "https://cdn.simpleicons.org/fastapi" }
    ] 
  },
  { 
    label: "Spoken Languages", 
    items: [
      { name: "French" },
      { name: "English" },
      { name: "Spanish" },
      { name: "Arabic" }
    ] 
  },
],

  education: [
  {
    degree: "Engineering Cycle — Software Engineering",
    school: "INSAT — National Institute of Applied Sciences and Technology",
    year: "2024 → present · Tunis, Tunisia",
  },
  {
    degree: "Preparatory Cycle — MPI (Math, Physics, CS)",
    school: "INSAT",
    year: "2022–2024 · Tunis, Tunisia",
  },
  {
    degree: "High School Diploma — Experimental Sciences, Highest Honors",
    school: "Slimen Ben Slimen High School",
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
      title: "Spring Boot 3 & Spring 6 + Hibernate",
      sub: "Udemy Certification",
      pdf: "/pdfs/udemy_certif.pdf",
    },
    {
      title: "Angular & Django Development",
      sub: "Merit certificate — International Consulting Canada",
      pdf: "/pdfs/Certificat%20IC%20Canada%20-%20Samar%20Ben%20Houidi.pdf",
    },
  ],
};
