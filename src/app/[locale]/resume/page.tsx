import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumePage from "@/components/ResumePage";
import ClientOnly from "@/components/ClientOnly";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "Resume | Keng Her - Creative Developer",
    lo: "ປະຫວັດຫຍໍ້ | ແກງ ເຮີ - ນັກພັດທະນາ",
  };

  const descriptions: Record<string, string> = {
    en: "Explore the professional experience, skills, and education of Keng Her.",
    lo: "ສຳຫຼວດປະສົບການ, ທັກສະ, ແລະ ການສຶກສາຂອງ ແກງ ເຮີ.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "Keng Her Resume",
      "Frontend Developer Resume",
      "React Developer CV",
      "Next.js Developer",
      "Creative Developer Portfolio",
    ],
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: "website",
    },
  };
}

export default async function Resume({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
