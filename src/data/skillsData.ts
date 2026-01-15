export interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon?: string;
  yearsOfExperience?: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Building beautiful, responsive, and performant user interfaces",
    icon: "⚡",
    skills: [
      { name: "React", proficiency: 95, icon: "⚛️", yearsOfExperience: 5 },
      { name: "Next.js", proficiency: 90, icon: "▲", yearsOfExperience: 4 },
      { name: "TypeScript", proficiency: 92, icon: "📘", yearsOfExperience: 4 },
      { name: "JavaScript", proficiency: 98, icon: "🟨", yearsOfExperience: 6 },
      { name: "HTML5", proficiency: 98, icon: "🌐", yearsOfExperience: 7 },
      { name: "CSS3", proficiency: 95, icon: "🎨", yearsOfExperience: 7 },
      { name: "Vue.js", proficiency: 75, icon: "💚", yearsOfExperience: 2 },
      { name: "Angular", proficiency: 65, icon: "🔺", yearsOfExperience: 1 },
    ],
  },
  {
    title: "Styling & Design",
    description: "Crafting pixel-perfect designs with modern CSS frameworks",
    icon: "🎨",
    skills: [
      {
        name: "Tailwind CSS",
        proficiency: 95,
        icon: "🌊",
        yearsOfExperience: 4,
      },
      { name: "Sass/SCSS", proficiency: 90, icon: "💅", yearsOfExperience: 5 },
      {
        name: "CSS Modules",
        proficiency: 88,
        icon: "📦",
        yearsOfExperience: 4,
      },
      {
        name: "Styled Components",
        proficiency: 85,
        icon: "💄",
        yearsOfExperience: 3,
      },
      {
        name: "Framer Motion",
        proficiency: 88,
        icon: "✨",
        yearsOfExperience: 3,
      },
      { name: "GSAP", proficiency: 80, icon: "🎬", yearsOfExperience: 2 },
      { name: "Figma", proficiency: 75, icon: "🎭", yearsOfExperience: 3 },
    ],
  },
  {
    title: "Backend Development",
    description: "Building scalable server-side applications and APIs",
    icon: "🖥️",
    skills: [
      { name: "Node.js", proficiency: 88, icon: "💚", yearsOfExperience: 5 },
      { name: "Express.js", proficiency: 85, icon: "🚂", yearsOfExperience: 4 },
      { name: "Python", proficiency: 75, icon: "🐍", yearsOfExperience: 3 },
      { name: "PostgreSQL", proficiency: 80, icon: "🐘", yearsOfExperience: 4 },
      { name: "MongoDB", proficiency: 78, icon: "🍃", yearsOfExperience: 3 },
      { name: "GraphQL", proficiency: 82, icon: "◈", yearsOfExperience: 3 },
      { name: "REST APIs", proficiency: 92, icon: "🔗", yearsOfExperience: 5 },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Modern development tools and cloud platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", proficiency: 95, icon: "📚", yearsOfExperience: 6 },
      { name: "Docker", proficiency: 78, icon: "🐳", yearsOfExperience: 3 },
      { name: "AWS", proficiency: 72, icon: "☁️", yearsOfExperience: 3 },
      { name: "Vercel", proficiency: 90, icon: "▲", yearsOfExperience: 4 },
      {
        name: "GitHub Actions",
        proficiency: 82,
        icon: "⚙️",
        yearsOfExperience: 3,
      },
      { name: "Jest", proficiency: 85, icon: "🃏", yearsOfExperience: 4 },
      { name: "Webpack", proficiency: 80, icon: "📦", yearsOfExperience: 4 },
      { name: "Vite", proficiency: 88, icon: "⚡", yearsOfExperience: 2 },
    ],
  },
];

export const additionalSkills = [
  "Responsive Design",
  "Web Accessibility (WCAG)",
  "SEO Optimization",
  "Performance Optimization",
  "Code Review",
  "Agile/Scrum",
  "Technical Writing",
  "Mentoring",
  "Problem Solving",
  "Cross-functional Collaboration",
];

export const certifications = [
  {
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta (Facebook)",
    year: "2023",
    icon: "🎓",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
    icon: "☁️",
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    year: "2022",
    icon: "📊",
  },
];
