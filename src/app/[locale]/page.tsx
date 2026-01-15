"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import ZondaScrollCanvas from "@/components/ZondaScrollCanvas";
import ZondaExperience from "@/components/ZondaExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  // Master scroll container ref - 600vh to lock the user into the scroll sequence
  const containerRef = useRef<HTMLDivElement>(null);

  // Master scroll progress - this drives both the canvas AND the HUD overlay
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-pagani-black min-h-screen">
      {/* Fixed Navigation */}
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          SCROLL SEQUENCE SECTION
          600vh tall container that locks the user into the experience
          ═══════════════════════════════════════════════════════════════ */}
      <section ref={containerRef} className="h-[600vh] relative" id="hero">
        {/* Sticky wrapper - stays in viewport while scrolling through 600vh */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Layer 1: Canvas (z-0) - Renders the 240-frame car sequence */}
          <div className="absolute inset-0 z-0">
            <ZondaScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={240}
              imageFolderPath="/images/zonda-sequence"
            />
          </div>

          {/* Layer 2: Gradient overlays for depth */}
          <div className="absolute inset-0 z-[5] pointer-events-none">
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pagani-black to-transparent" />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pagani-black to-transparent" />
            {/* Left gradient */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-pagani-black/50 to-transparent" />
            {/* Right gradient */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pagani-black/50 to-transparent" />
          </div>

          {/* Layer 3: HUD Experience (z-10) - Text overlays that transition with scroll */}
          <div className="absolute inset-0 z-10">
            <ZondaExperience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          REST OF SITE
          Scrolls naturally after the sequence is complete
          ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 bg-pagani-black">
        {/* Transition element */}
        <div className="h-24 bg-gradient-to-b from-transparent to-pagani-black" />

        {/* Technical Specifications Grid */}
        <SpecsGrid />

        {/* Features / What I Deliver */}
        <Features />

        {/* Footer with Contact */}
        <Footer />
      </div>
    </main>
  );
}
