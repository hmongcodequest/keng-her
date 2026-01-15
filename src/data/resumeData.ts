export const resumeData = {
  summary: {
    title: "Professional Summary",
    content:
      "Creative Frontend Developer with 5+ years of experience crafting immersive, high-performance web experiences. Specialized in React, Next.js, and modern animation libraries. Passionate about translating complex designs into pixel-perfect, accessible interfaces.",
  },

  experience: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led the frontend architecture for a SaaS platform serving 100K+ users",
        "Reduced page load times by 40% through code splitting and lazy loading",
        "Mentored a team of 4 junior developers on React best practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      location: "Los Angeles, CA",
      duration: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Developed 20+ responsive websites for enterprise clients",
        "Created reusable component library used across 15 projects",
        "Integrated complex animations using GSAP and Framer Motion",
        "Collaborated with design team to establish UI/UX standards",
      ],
      technologies: ["React", "JavaScript", "SCSS", "REST APIs"],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "Remote",
      duration: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Built MVPs for 5 early-stage startups",
        "Implemented responsive designs from Figma mockups",
        "Maintained and improved legacy codebases",
        "Participated in agile development processes",
      ],
      technologies: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California",
      location: "Berkeley, CA",
      duration: "2015 - 2019",
      highlights: [
        "GPA: 3.8/4.0",
        "Dean's List all semesters",
        "Capstone: Interactive Data Visualization Platform",
      ],
    },
    {
      id: 2,
      degree: "Frontend Development Certification",
      institution: "Meta (Facebook)",
      location: "Online",
      duration: "2021",
      highlights: [
        "Advanced React patterns and hooks",
        "Performance optimization techniques",
        "Testing and debugging strategies",
      ],
    },
  ],

  skills: {
    frontend: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 78 },
    ],
    tools: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 88 },
    ],
  },

  achievements: [
    {
      title: "Best Web Application Award",
      issuer: "TechCrunch Disrupt",
      year: "2023",
      description: "Recognized for innovative UI/UX in fintech category",
    },
    {
      title: "Open Source Contributor",
      issuer: "React Community",
      year: "2022",
      description: "Top 100 contributor to React ecosystem packages",
    },
    {
      title: "Hackathon Winner",
      issuer: "Google Developer Groups",
      year: "2021",
      description: "1st place for accessibility-focused web application",
    },
  ],

  languages: [
    { name: "English", level: "Native" },
    { name: "Hmong", level: "Native" },
    { name: "Spanish", level: "Conversational" },
  ],

  interests: [
    "Open Source Development",
    "UI/UX Design",
    "Creative Coding",
    "Tech Mentorship",
  ],
};

export type ResumeData = typeof resumeData;
