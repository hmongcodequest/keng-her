import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumePage from "@/components/ResumePage";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "Resume | Keng Her - Creative Developer",
  description:
    "Explore the professional experience, skills, and education of Keng Her, a Senior Creative Frontend Developer specializing in Next.js, React, and TypeScript.",
  keywords: [
    "Keng Her Resume",
    "Frontend Developer Resume",
    "React Developer CV",
    "Next.js Developer",
    "Creative Developer Portfolio",
  ],
  openGraph: {
    title: "Resume | Keng Her - Creative Developer",
    description:
      "Explore the professional experience, skills, and education of Keng Her, a Senior Creative Frontend Developer.",
    type: "website",
  },
};

export default function Resume() {
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
        <ResumePage />
        <Footer />
      </main>
    </ClientOnly>
  );
}
