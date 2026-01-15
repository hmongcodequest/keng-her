import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsPage from "@/components/SkillsPage";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "Skills | Keng Her - Creative Developer",
  description:
    "Explore the technical skills and proficiencies of Keng Her, a Senior Creative Frontend Developer. Expertise in React, Next.js, TypeScript, and more.",
  keywords: [
    "Keng Her Skills",
    "Frontend Developer Skills",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Web Development Skills",
  ],
  openGraph: {
    title: "Skills | Keng Her - Creative Developer",
    description:
      "Explore the technical skills and proficiencies of Keng Her, a Senior Creative Frontend Developer.",
    type: "website",
  },
};

export default function Skills() {
  return (
    <ClientOnly
      fallback={
        <main className="bg-pagani-black min-h-screen flex items-center justify-center">
          <div className="text-pagani-gold font-heading text-xl animate-pulse">
            Loading...
          </div>
        </main>
      }
    >
      <main className="bg-pagani-black min-h-screen">
        <Navbar />
        <SkillsPage />
        <Footer />
      </main>
    </ClientOnly>
  );
}
