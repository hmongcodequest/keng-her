import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Keng Her | Creative Developer Portfolio",
  description:
    "Senior Creative Frontend Developer specializing in Next.js, React, TypeScript, and immersive web experiences. Explore my work through this interactive scrollytelling showcase.",
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
    title: "Keng Her | Creative Developer Portfolio",
    description:
      "Senior Creative Frontend Developer specializing in Next.js, React, TypeScript, and immersive web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className={`${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
