"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { developerData } from "@/data/developerData";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Skill bar component
function SkillBar({ name, level }: Readonly<{ name: string; level: number }>) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-white/80">{name}</span>
        <span className="font-heading text-xs text-pagani-gold">{level}%</span>
      </div>
      <div className="h-1.5 bg-carbon-gray rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pagani-gold to-bright-gold rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// Timeline item component
function TimelineItem({
  experience,
  index,
}: Readonly<{
  experience: (typeof resumeData.experience)[0];
  index: number;
}>) {
  return (
    <motion.div
      className="relative flex items-start gap-8 pb-12 last:pb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-pagani-gold/50 to-transparent" />

      {/* Timeline dot */}
      <motion.div
        className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full border-2 border-pagani-gold bg-pagani-black flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-2 h-2 rounded-full bg-pagani-gold animate-pulse" />
      </motion.div>

      {/* Content card */}
      <motion.div
        className="flex-1 glass hud-border p-6 hover:border-pagani-gold/50 transition-all duration-300"
        whileHover={{ x: 10, scale: 1.01 }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              {experience.role}
            </h3>
            <p className="font-body text-pagani-gold">{experience.company}</p>
            <p className="font-body text-sm text-white/50">
              {experience.location}
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 border border-pagani-gold/30 font-heading text-xs text-pagani-gold tracking-wider">
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-white/70 font-body text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="text-pagani-gold mt-1">▸</span>
              {achievement}
            </motion.li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-pagani-gold/10 border border-pagani-gold/20 font-body text-xs text-pagani-gold rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-pagani-black">
      {/* Hero Section */}
      <section className="relative py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Label */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-pagani-gold" />
            <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
              Curriculum Vitae
            </span>
            <div className="w-12 h-px bg-pagani-gold" />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold tracking-wider mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-gradient">{developerData.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="font-heading text-xl md:text-2xl tracking-[0.3em] text-white/70 uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {developerData.title}
          </motion.p>

          {/* Summary */}
          <motion.p
            className="font-body text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {resumeData.summary.content}
          </motion.p>

          {/* Download Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="group relative px-8 py-4 font-heading text-sm tracking-[0.2em] uppercase overflow-hidden">
              <div className="absolute inset-0 border border-pagani-gold/50 group-hover:border-pagani-gold transition-colors" />
              <motion.div
                className="absolute inset-0 bg-pagani-gold/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-pagani-gold" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-pagani-gold" />
              <span className="relative text-pagani-gold group-hover:text-bright-gold transition-colors flex items-center gap-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                Career Journey
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider">
              <span className="text-gold-gradient">Work Experience</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {resumeData.experience.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-carbon-gray/30">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                Technical Expertise
              </span>
              <div className="w-12 h-px bg-pagani-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider">
              <span className="text-gold-gradient">Skills & Proficiencies</span>
            </h2>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              className="glass hud-border p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="font-heading text-lg font-bold text-pagani-gold mb-6 tracking-wider">
                FRONTEND
              </h3>
              <div className="space-y-4">
                {resumeData.skills.frontend.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="glass hud-border p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="font-heading text-lg font-bold text-pagani-gold mb-6 tracking-wider">
                BACKEND
              </h3>
              <div className="space-y-4">
                {resumeData.skills.backend.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="glass hud-border p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="font-heading text-lg font-bold text-pagani-gold mb-6 tracking-wider">
                TOOLS & PLATFORMS
              </h3>
              <div className="space-y-4">
                {resumeData.skills.tools.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                Academic Background
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider">
              <span className="text-gold-gradient">Education</span>
            </h2>
          </motion.div>

          {/* Education cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="glass hud-border p-6 hover:border-pagani-gold/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 border border-pagani-gold/30 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <span className="font-heading text-xs text-pagani-gold tracking-wider">
                    {edu.duration}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="font-body text-pagani-gold mb-1">
                  {edu.institution}
                </p>
                <p className="font-body text-sm text-white/50 mb-4">
                  {edu.location}
                </p>

                <ul className="space-y-1">
                  {edu.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-white/60 flex items-center gap-2"
                    >
                      <span className="text-pagani-gold text-xs">●</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-carbon-gray/30">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                Recognition
              </span>
              <div className="w-12 h-px bg-pagani-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider">
              <span className="text-gold-gradient">Achievements & Awards</span>
            </h2>
          </motion.div>

          {/* Achievements grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resumeData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="glass hud-border p-6 text-center hover:border-pagani-gold/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 border border-pagani-gold/30 flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="font-heading text-sm font-bold text-white mb-2 tracking-wider">
                  {achievement.title}
                </h3>
                <p className="font-body text-xs text-pagani-gold mb-2">
                  {achievement.issuer} • {achievement.year}
                </p>
                <p className="font-body text-sm text-white/60">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-pagani-gold" />
                <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                  Languages
                </span>
              </div>

              <div className="space-y-4">
                {resumeData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-4 border border-pagani-gold/20 hover:border-pagani-gold/40 transition-colors"
                  >
                    <span className="font-heading text-white">{lang.name}</span>
                    <span className="font-body text-sm text-pagani-gold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-pagani-gold" />
                <span className="font-body text-xs tracking-[0.4em] text-pagani-gold uppercase">
                  Interests
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {resumeData.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-4 py-2 border border-pagani-gold/30 font-body text-sm text-white/80 hover:border-pagani-gold/60 hover:text-white transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 border-t border-pagani-gold/10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider mb-6">
            <span className="text-gold-gradient">Let&apos;s Work Together</span>
          </h2>
          <p className="font-body text-lg text-white/60 mb-8">
            Interested in collaborating or have a project in mind? I&apos;d love
            to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${developerData.contact.email}`}
              className="group relative px-8 py-4 font-heading text-sm tracking-[0.2em] uppercase overflow-hidden"
            >
              <div className="absolute inset-0 border border-pagani-gold group-hover:bg-pagani-gold/10 transition-colors" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-pagani-gold" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-pagani-gold" />
              <span className="relative text-pagani-gold">Get In Touch</span>
            </a>
            <Link
              href="/"
              className="group relative px-8 py-4 font-heading text-sm tracking-[0.2em] uppercase overflow-hidden"
            >
              <div className="absolute inset-0 border border-white/30 group-hover:border-white/50 transition-colors" />
              <span className="relative text-white/70 group-hover:text-white transition-colors">
                Back to Portfolio
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
