import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperiencePage from "@/components/ExperiencePage";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "Experience | Keng Her - Creative Developer",
  description:
    "Explore the professional experience of Keng Her, a Senior Creative Frontend Developer with 5+ years of experience building exceptional web applications.",
  keywords: [
    "Keng Her Experience",
    "Frontend Developer Experience",
    "Work History",
    "React Developer",
    "Next.js Developer",
    "Web Development Career",
  ],
  openGraph: {
    title: "Experience | Keng Her - Creative Developer",
    description:
      "Explore the professional experience of Keng Her, a Senior Creative Frontend Developer.",
    type: "website",
  },
};

export default function Experience() {
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
        <ExperiencePage />
        <Footer />
      </main>
    </ClientOnly>
  );
}
