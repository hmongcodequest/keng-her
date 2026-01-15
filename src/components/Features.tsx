"use client";

import { motion } from "framer-motion";
import { featuresData } from "@/data/developerData";

export default function Features() {
  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-16 lg:px-24 bg-carbon-gray/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-pagani-gold" />
            <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
              What I Deliver
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-4">
            <span className="text-gold-gradient">FEATURES</span>
          </h2>

          <p className="font-body text-lg text-white/60 max-w-2xl">
            Precision-engineered solutions that combine aesthetics with
            performance. Every project is crafted to exceed expectations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="relative flex gap-6 p-6 border border-pagani-gold/10 bg-pagani-black/50 transition-all duration-500 group-hover:border-pagani-gold/30 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pagani-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center border border-pagani-gold/30 text-3xl group-hover:border-pagani-gold group-hover:glow-gold transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="font-heading text-xl tracking-wider text-white mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pagani-gold to-bright-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="inline-block">
            <div className="hud-border p-8 bg-carbon-gray/30">
              <p className="font-body text-sm tracking-[0.2em] text-white/50 uppercase mb-4">
                Ready to elevate your project?
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-white mb-6">
                Let&apos;s Build Something{" "}
                <span className="text-gold-gradient">Extraordinary</span>
              </h3>
              <button className="px-10 py-4 border border-pagani-gold font-heading text-sm tracking-[0.2em] uppercase text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300 glow-gold">
                Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
