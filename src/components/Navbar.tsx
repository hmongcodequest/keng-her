"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "lo">("en");
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "lo" : "en"));
    // TODO: Integrate with i18n when enabled
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 border-b border-pagani-gold/10"
          style={{
            opacity,
            backdropFilter,
            backgroundColor: "rgba(26, 26, 26, 0.7)",
          }}
        />

        <div className="relative max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 border border-pagani-gold/50 flex items-center justify-center relative overflow-hidden">
                <span className="font-heading text-lg font-bold text-gold-gradient">
                  K
                </span>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pagani-gold" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-pagani-gold" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pagani-gold" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pagani-gold" />
              </div>
            </motion.div>

            <div className="hidden sm:block">
              <span className="font-heading text-sm tracking-[0.3em] text-white/90">
                KENG HER
              </span>
              <div className="text-[10px] tracking-[0.2em] text-pagani-gold/70 uppercase">
                Creative Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative font-body text-sm tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-pagani-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              className="relative flex items-center gap-2 px-3 py-1.5 font-heading text-xs tracking-wider border border-pagani-gold/30 hover:border-pagani-gold/60 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-base">
                {currentLang === "en" ? "🇺🇸" : "🇱🇦"}
              </span>
              <span className="text-pagani-gold uppercase">
                {currentLang === "en" ? "EN" : "ລາວ"}
              </span>
            </motion.button>

            {/* CTA Button - Hidden on mobile */}
            <motion.button
              className="hidden sm:block relative px-6 py-2 font-heading text-xs tracking-[0.2em] uppercase overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Button border */}
              <div className="absolute inset-0 border border-pagani-gold/50 group-hover:border-pagani-gold transition-colors" />

              {/* Hover fill */}
              <motion.div
                className="absolute inset-0 bg-pagani-gold/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Corner details */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pagani-gold" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pagani-gold" />

              <span className="relative text-pagani-gold group-hover:text-bright-gold transition-colors">
                Hire Me
              </span>
            </motion.button>

            {/* Hamburger Menu Button - Mobile only */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-pagani-gold block"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-pagani-gold block"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-pagani-gold block"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Scan line effect */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-pagani-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              className="fixed top-0 right-0 z-50 w-full max-w-sm h-screen bg-pagani-black border-l border-pagani-gold/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-pagani-gold/30 hover:border-pagani-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-pagani-gold text-xl">✕</span>
              </button>

              {/* Menu Content */}
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-center gap-4 py-4 border-b border-pagani-gold/10 hover:border-pagani-gold/30 transition-colors"
                        >
                          <span className="w-8 h-px bg-pagani-gold/30 group-hover:bg-pagani-gold group-hover:w-12 transition-all" />
                          <span className="font-heading text-lg tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Bottom Section */}
                <div className="space-y-6">
                  {/* Language Toggle */}
                  <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button
                      onClick={() => {
                        setCurrentLang("en");
                      }}
                      className={`flex items-center gap-2 px-4 py-2 border transition-colors ${
                        currentLang === "en"
                          ? "border-pagani-gold bg-pagani-gold/10 text-pagani-gold"
                          : "border-pagani-gold/30 text-white/50 hover:text-white hover:border-pagani-gold/50"
                      }`}
                    >
                      <span>🇺🇸</span>
                      <span className="font-heading text-sm">English</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLang("lo");
                      }}
                      className={`flex items-center gap-2 px-4 py-2 border transition-colors ${
                        currentLang === "lo"
                          ? "border-pagani-gold bg-pagani-gold/10 text-pagani-gold"
                          : "border-pagani-gold/30 text-white/50 hover:text-white hover:border-pagani-gold/50"
                      }`}
                    >
                      <span>🇱🇦</span>
                      <span className="font-heading text-sm">ລາວ</span>
                    </button>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-4 text-center font-heading text-sm tracking-[0.2em] uppercase bg-pagani-gold text-pagani-black hover:bg-bright-gold transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Hire Me
                  </motion.a>

                  {/* Footer */}
                  <motion.p
                    className="text-center text-white/30 text-xs font-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    © 2024 Keng Her
                  </motion.p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-pagani-gold/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-pagani-gold/30" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
