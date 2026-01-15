"use client";

import { motion } from "framer-motion";
import { developerData } from "@/data/developerData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative py-20 px-8 md:px-16 lg:px-24 bg-pagani-black border-t border-pagani-gold/10"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Contact Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left - Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-6">
              <span className="text-gold-gradient">
                {developerData.contact.title}
              </span>
            </h2>

            <p className="font-body text-lg text-white/60 mb-8 max-w-md">
              {developerData.contact.subtitle}. Whether you have a project in
              mind or just want to connect, I&apos;m always open to discussing
              new opportunities.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${developerData.contact.email}`}
                className="group flex items-center gap-4 p-4 border border-pagani-gold/20 hover:border-pagani-gold/50 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-pagani-gold/30 text-pagani-gold">
                  ✉
                </div>
                <div>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider">
                    Email
                  </div>
                  <div className="font-heading text-white group-hover:text-pagani-gold transition-colors">
                    {developerData.contact.email}
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`https://${developerData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-pagani-gold/20 hover:border-pagani-gold/50 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-pagani-gold/30 text-pagani-gold">
                  ⌘
                </div>
                <div>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider">
                    GitHub
                  </div>
                  <div className="font-heading text-white group-hover:text-pagani-gold transition-colors">
                    {developerData.contact.github}
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`https://${developerData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-pagani-gold/20 hover:border-pagani-gold/50 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-pagani-gold/30 text-pagani-gold">
                  in
                </div>
                <div>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider">
                    LinkedIn
                  </div>
                  <div className="font-heading text-white group-hover:text-pagani-gold transition-colors">
                    {developerData.contact.linkedin}
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right - Quick Form / Logo */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Large decorative logo */}
              <div className="w-48 h-48 border border-pagani-gold/30 flex items-center justify-center relative">
                <span className="font-heading text-7xl font-bold text-gold-gradient">
                  K
                </span>

                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-pagani-gold" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-pagani-gold" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-pagani-gold" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-pagani-gold" />

                {/* Animated ring */}
                <div className="absolute inset-4 border border-pagani-gold/20 animate-pulse" />
              </div>

              <p className="mt-6 text-center font-heading text-sm tracking-[0.3em] text-white/50">
                KENG HER
              </p>
              <p className="text-center font-body text-xs tracking-[0.2em] text-pagani-gold/50">
                CREATIVE DEVELOPER
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-pagani-gold/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40 tracking-wider">
            © {currentYear} Keng Her. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-body text-xs text-white/40 tracking-wider">
              Crafted with
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-pagani-gold">Next.js</span>
              <span className="text-white/20">•</span>
              <span className="text-xs text-pagani-gold">Tailwind</span>
              <span className="text-white/20">•</span>
              <span className="text-xs text-pagani-gold">Framer Motion</span>
            </div>
          </div>

          <p className="font-body text-xs text-white/40 tracking-wider">
            Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
