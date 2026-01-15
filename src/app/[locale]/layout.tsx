import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "Keng Her | Creative Developer Portfolio",
    lo: "ແກງ ເຮີ | ແຟ້ມສະສົມຜົນງານນັກພັດທະນາ",
  };

  const descriptions: Record<string, string> = {
    en: "Senior Creative Frontend Developer specializing in Next.js, React, TypeScript, and immersive web experiences.",
    lo: "ນັກພັດທະນາ Frontend ອາວຸໂສທີ່ຊ່ຽວຊານ Next.js, React, TypeScript, ແລະ ປະສົບການເວັບທີ່ດຶງດູດໃຈ.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "Keng Her",
      "Developer",
      "Portfolio",
      "Next.js",
      "React",
      "TypeScript",
      "Frontend",
      "Creative Developer",
    ],
    authors: [{ name: "Keng Her" }],
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: "website",
    },
    alternates: {
      languages: {
        en: "/en",
        lo: "/lo",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "en" | "lo")) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className={`${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
