"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { developerData } from "@/data/developerData";

interface ZondaExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({
  scrollYProgress,
}: Readonly<ZondaExperienceProps>) {
  // Phase transitions based on scroll progress
  // Phase 1 (Hero): 0-33%
  // Phase 2 (Skills): 33-66%
  // Phase 3 (Code): 66-100%

  // Hero phase opacity (visible 0-25%, fade out 25-33%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);

  // Skills phase opacity (fade in 28-35%, visible 35-58%, fade out 58-66%)
  const skillsOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.35, 0.58, 0.66],
    [0, 1, 1, 0]
  );

  // Code phase opacity (fade in 60-70%, stay visible 70-100%)
  const codeOpacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

  // Decorative element animations
  const scanLineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Decorative corner frames */}
      <div className="absolute top-8 left-8 w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-pagani-gold/50 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-pagani-gold/50 to-transparent" />
      </div>
      <div className="absolute top-8 right-8 w-24 h-24">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-pagani-gold/50 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-pagani-gold/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-24">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-pagani-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-pagani-gold/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-pagani-gold/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-pagani-gold/50 to-transparent" />
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-pagani-gold/30 to-transparent"
        style={{ top: scanLineY }}
      />

      {/* Progress bar at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48">
        <div className="h-0.5 bg-carbon-gray/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pagani-gold to-bright-gold"
            style={{ width: progressWidth }}
          />
        </div>
        <p className="mt-2 text-center font-body text-[10px] tracking-[0.3em] text-white/40 uppercase">
          Scroll to Explore
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 1: HERO
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow text */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-12 h-px bg-pagani-gold" />
            <span className="font-body text-sm tracking-[0.4em] text-pagani-gold uppercase">
              Portfolio 2024
            </span>
          </motion.div>

          {/* Main headline - No delay for LCP optimization */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
            <span className="text-gold-gradient">
              {developerData.hero.headline}
            </span>
          </h1>

          {/* Sub headline */}
          <motion.h2
            className="font-heading text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-white/80 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {developerData.hero.subheadline}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-body text-lg md:text-xl text-white/60 max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {developerData.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <button className="pointer-events-auto px-8 py-3 border border-pagani-gold font-heading text-sm tracking-[0.2em] uppercase text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300 glow-gold">
              {developerData.hero.cta}
            </button>
            <div className="flex items-center gap-2 text-white/40">
              <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
                <motion.div
                  className="w-1.5 h-1.5 bg-pagani-gold rounded-full"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
              <span className="font-body text-xs tracking-wider">Scroll</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative stats panel (bottom right) */}
        <motion.div
          className="absolute bottom-24 right-8 md:right-16 lg:right-24 hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="hud-border p-4 bg-pagani-black/60">
            <div className="text-[10px] tracking-[0.3em] text-pagani-gold/70 uppercase mb-2">
              Status
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-body text-sm text-white/80">
                Available for Work
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 2: SKILLS / TECH STACK
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 flex items-center justify-between px-8 md:px-16 lg:px-24"
        style={{ opacity: skillsOpacity }}
      >
        {/* Left panel - Title */}
        <div className="max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-pagani-gold" />
            <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
              02 / Tech Stack
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
            <span className="text-gold-gradient">
              {developerData.skills.title}
            </span>
          </h2>

          <p className="font-body text-lg text-white/60 mb-8">
            {developerData.skills.subtitle}
          </p>

          {/* Skill bars */}
          <div className="space-y-4">
            {developerData.skills.items.slice(0, 4).map((skill, index) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-white/80">
                    {skill.name}
                  </span>
                  <span className="font-heading text-xs text-pagani-gold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 bg-carbon-gray/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pagani-gold to-bright-gold"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel - Tech icons/cards */}
        <div className="hidden lg:grid grid-cols-2 gap-4 max-w-sm">
          {developerData.skills.items.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="hud-border p-4 bg-pagani-black/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-[10px] tracking-[0.2em] text-pagani-gold/70 uppercase mb-1">
                {skill.category}
              </div>
              <div className="font-heading text-lg text-white">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 3: CODE SHOWCASE
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24"
        style={{ opacity: codeOpacity }}
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Title and description */}
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                03 / Philosophy
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
              <span className="text-gold-gradient">
                {developerData.codeShowcase.title}
              </span>
            </h2>

            <p className="font-heading text-xl md:text-2xl tracking-[0.2em] text-white/70 mb-6">
              {developerData.codeShowcase.subtitle}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {developerData.experience.highlights.slice(0, 4).map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 border border-pagani-gold/20"
                >
                  <div className="font-heading text-2xl md:text-3xl text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="font-body text-[10px] tracking-[0.2em] text-white/50 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Code block */}
          <div className="hidden lg:block max-w-lg w-full">
            <div className="code-block p-6 overflow-hidden">
              {/* Code header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-pagani-gold/20">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 font-body text-xs text-white/40">
                  page.tsx
                </span>
              </div>

              {/* Code content */}
              <pre className="text-sm leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">{"// "}</span>
                  <span className="text-white/50">
                    Next.js App Router Pattern
                  </span>
                  {"\n"}
                  <span className="text-purple-400">export default </span>
                  <span className="text-blue-400">async function </span>
                  <span className="text-yellow-400">Page</span>
                  <span className="text-white">{"() {"}</span>
                  {"\n"}
                  <span className="text-white">{"  "}</span>
                  <span className="text-purple-400">const </span>
                  <span className="text-white">data = </span>
                  <span className="text-purple-400">await </span>
                  <span className="text-yellow-400">fetchData</span>
                  <span className="text-white">();</span>
                  {"\n\n"}
                  <span className="text-white">{"  "}</span>
                  <span className="text-purple-400">return </span>
                  <span className="text-white">(</span>
                  {"\n"}
                  <span className="text-white">{"    "}</span>
                  <span className="text-green-400">{"<motion.main"}</span>
                  {"\n"}
                  <span className="text-white">{"      "}</span>
                  <span className="text-pagani-gold">initial</span>
                  <span className="text-white">{"={{ "}</span>
                  <span className="text-pagani-gold">opacity</span>
                  <span className="text-white">{": 0 }}"}</span>
                  {"\n"}
                  <span className="text-white">{"      "}</span>
                  <span className="text-pagani-gold">animate</span>
                  <span className="text-white">{"={{ "}</span>
                  <span className="text-pagani-gold">opacity</span>
                  <span className="text-white">{": 1 }}"}</span>
                  {"\n"}
                  <span className="text-white">{"    "}</span>
                  <span className="text-green-400">{">"}</span>
                  {"\n"}
                  <span className="text-white">{"      "}</span>
                  <span className="text-green-400">{"<HeroSection "}</span>
                  <span className="text-pagani-gold">data</span>
                  <span className="text-white">{"={data} />"}</span>
                  {"\n"}
                  <span className="text-white">{"    "}</span>
                  <span className="text-green-400">{"</motion.main>"}</span>
                  {"\n"}
                  <span className="text-white">{"  );"}</span>
                  {"\n"}
                  <span className="text-white">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
