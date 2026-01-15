export const developerData = {
  name: "Keng Her",
  title: "Creative Developer",
  tagline: "Crafting Immersive Digital Experiences",

  hero: {
    headline: "KENG HER",
    subheadline: "CREATIVE DEVELOPER",
    description:
      "Transforming ideas into pixel-perfect, performant web experiences",
    cta: "View Projects",
  },

  skills: {
    title: "TECH STACK",
    subtitle: "Modern Technologies I Master",
    items: [
      { name: "Next.js", level: 95, category: "Framework" },
      { name: "React", level: 95, category: "Library" },
      { name: "TypeScript", level: 90, category: "Language" },
      { name: "Tailwind CSS", level: 92, category: "Styling" },
      { name: "Framer Motion", level: 88, category: "Animation" },
      { name: "Node.js", level: 85, category: "Backend" },
    ],
  },

  experience: {
    title: "EXPERIENCE",
    subtitle: "Code Architecture & Design",
    highlights: [
      {
        label: "Years Active",
        value: "5+",
        unit: "YRS",
      },
      {
        label: "Projects Delivered",
        value: "50+",
        unit: "PROJECTS",
      },
      {
        label: "Lines of Code",
        value: "500K+",
        unit: "LOC",
      },
      {
        label: "Client Satisfaction",
        value: "100%",
        unit: "RATE",
      },
    ],
    description:
      "Specializing in scalable architectures, component-driven development, and performance optimization for enterprise-grade applications.",
  },

  codeShowcase: {
    title: "CODE",
    subtitle: "Clean • Scalable • Performant",
    snippet: `// Next.js App Router Pattern
export default async function Page() {
  const data = await fetchData();
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <HeroSection data={data} />
    </motion.main>
  );
}`,
  },

  contact: {
    title: "LET'S BUILD",
    subtitle: "Ready for Your Next Project",
    email: "keng@example.com",
    github: "github.com/kengher",
    linkedin: "linkedin.com/in/kengher",
  },
};

export const specsData = [
  {
    label: "Frontend",
    value: "Next.js 15+",
    icon: "⚡",
    description: "App Router, Server Components, Streaming",
  },
  {
    label: "Language",
    value: "TypeScript",
    icon: "📘",
    description: "Type-safe development with strict mode",
  },
  {
    label: "Styling",
    value: "Tailwind v4",
    icon: "🎨",
    description: "Utility-first CSS with custom design systems",
  },
  {
    label: "Animation",
    value: "Framer Motion",
    icon: "✨",
    description: "Spring physics, gesture handling, layout animations",
  },
  {
    label: "State",
    value: "Zustand / TanStack",
    icon: "🔄",
    description: "Lightweight global state, server cache management",
  },
  {
    label: "Backend",
    value: "Node.js / APIs",
    icon: "🖥️",
    description: "RESTful APIs, GraphQL, serverless functions",
  },
];

export const featuresData = [
  {
    title: "Pixel-Perfect UI",
    description:
      "Every component crafted with attention to detail, ensuring designs translate perfectly from Figma to code.",
    icon: "🎯",
  },
  {
    title: "Performance First",
    description:
      "Optimized for Core Web Vitals with lazy loading, code splitting, and efficient rendering strategies.",
    icon: "🚀",
  },
  {
    title: "Responsive Design",
    description:
      "Fluid layouts that adapt seamlessly across devices, from mobile-first to large desktop displays.",
    icon: "📱",
  },
  {
    title: "Clean Architecture",
    description:
      "Maintainable, scalable codebases with clear separation of concerns and reusable component patterns.",
    icon: "🏗️",
  },
];

export type DeveloperData = typeof developerData;
export type SpecsData = typeof specsData;
export type FeaturesData = typeof featuresData;
