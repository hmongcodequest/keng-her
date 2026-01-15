export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "internship";
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface ProjectHighlight {
  name: string;
  description: string;
  impact: string;
  technologies: string[];
  link?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "tech-innovations",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "full-time",
    startDate: "2022",
    endDate: "Present",
    description:
      "Leading frontend architecture and development for a SaaS platform serving over 100,000 users. Driving technical decisions, mentoring junior developers, and implementing best practices across the engineering team.",
    achievements: [
      "Led the frontend architecture redesign, improving performance by 40%",
      "Reduced page load times from 4.2s to 1.8s through code splitting and lazy loading",
      "Mentored a team of 4 junior developers on React and TypeScript best practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Introduced component testing with 85% coverage across the codebase",
      "Collaborated with design team to establish a comprehensive design system",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "AWS",
      "Jest",
      "Cypress",
    ],
    logo: "🏢",
  },
  {
    id: "digital-agency",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "Los Angeles, CA",
    type: "full-time",
    startDate: "2020",
    endDate: "2022",
    description:
      "Developed responsive, high-performance websites for enterprise clients across various industries including e-commerce, healthcare, and fintech.",
    achievements: [
      "Developed 20+ responsive websites for Fortune 500 clients",
      "Created a reusable component library used across 15+ projects",
      "Integrated complex animations using GSAP and Framer Motion",
      "Collaborated with UX designers to establish UI/UX standards",
      "Improved client satisfaction scores by 25% through attention to detail",
      "Led accessibility audits achieving WCAG 2.1 AA compliance",
    ],
    technologies: [
      "React",
      "Vue.js",
      "JavaScript",
      "SCSS",
      "GSAP",
      "Framer Motion",
      "Figma",
      "Storybook",
    ],
    logo: "🎨",
  },
  {
    id: "startup-ventures",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Remote",
    type: "full-time",
    startDate: "2018",
    endDate: "2020",
    description:
      "Built MVPs and production applications for early-stage startups in a fast-paced, agile environment. Gained hands-on experience with full-stack development.",
    achievements: [
      "Built MVPs for 5 early-stage startups from scratch",
      "Implemented responsive designs from Figma and Sketch mockups",
      "Maintained and improved legacy React and Angular codebases",
      "Participated in daily standups and sprint planning sessions",
      "Contributed to 3 successful product launches",
      "Developed RESTful APIs using Node.js and Express",
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
    logo: "🚀",
  },
  {
    id: "freelance",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "freelance",
    startDate: "2017",
    endDate: "2018",
    description:
      "Provided web development services to small businesses and startups, building custom websites and web applications.",
    achievements: [
      "Completed 15+ projects for clients across different industries",
      "Built e-commerce sites generating $50K+ in monthly revenue for clients",
      "Developed custom WordPress themes and plugins",
      "Managed end-to-end project delivery from requirements to deployment",
      "Maintained long-term relationships with 8 recurring clients",
    ],
    technologies: [
      "JavaScript",
      "PHP",
      "WordPress",
      "WooCommerce",
      "HTML/CSS",
      "MySQL",
      "cPanel",
    ],
    logo: "💼",
  },
];

export const projectHighlights: ProjectHighlight[] = [
  {
    name: "Enterprise SaaS Dashboard",
    description:
      "Led the complete frontend redesign of a B2B analytics dashboard used by 50,000+ daily active users.",
    impact: "40% faster page loads, 25% increase in user engagement",
    technologies: ["Next.js", "TypeScript", "D3.js", "TanStack Query"],
  },
  {
    name: "E-commerce Platform Migration",
    description:
      "Migrated a legacy e-commerce platform to a modern headless architecture with improved performance.",
    impact: "$2M+ annual revenue increase, 60% reduction in cart abandonment",
    technologies: ["React", "Shopify Storefront API", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Healthcare Patient Portal",
    description:
      "Built a HIPAA-compliant patient portal enabling virtual consultations and medical record access.",
    impact: "30,000+ patients onboarded in first 6 months",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Companies", value: "4" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "30+" },
];
