"use client";

import { motion } from "framer-motion";
import { specsData } from "@/data/developerData";

export default function SpecsGrid() {
  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-16 lg:px-24 bg-pagani-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-pagani-gold" />
            <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
              Technical Expertise
            </span>
            <div className="w-12 h-px bg-pagani-gold" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-4">
            <span className="text-gold-gradient">SPECIFICATIONS</span>
          </h2>

          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies engineered for
            building high-performance, scalable web applications.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specsData.map((spec, index) => (
            <motion.div
              key={spec.label}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="hud-border p-6 bg-carbon-gray/30 h-full transition-all duration-300 group-hover:bg-carbon-gray/50 group-hover:border-pagani-gold/50">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pagani-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pagani-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pagani-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pagani-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="text-3xl mb-4">{spec.icon}</div>

                {/* Label */}
                <div className="font-body text-xs tracking-[0.3em] text-pagani-gold/70 uppercase mb-2">
                  {spec.label}
                </div>

                {/* Value */}
                <h3 className="font-heading text-2xl text-white mb-3 group-hover:text-gold-gradient transition-colors">
                  {spec.value}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {spec.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pagani-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-pagani-gold/50" />
            <div className="w-24 h-px bg-gradient-to-r from-pagani-gold to-transparent" />
            <span className="font-heading text-xs tracking-[0.3em] text-white/30">
              CONSTANTLY EVOLVING
            </span>
            <div className="w-24 h-px bg-gradient-to-l from-pagani-gold to-transparent" />
            <div className="w-2 h-2 bg-pagani-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
