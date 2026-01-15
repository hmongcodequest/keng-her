"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  skillsData,
  additionalSkills,
  certifications,
} from "@/data/skillsData";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function SkillBar({
  name,
  proficiency,
  icon,
  yearsOfExperience,
  index,
}: {
  name: string;
  proficiency: number;
  icon?: string;
  yearsOfExperience?: number;
  index: number;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-body text-sm text-white/90">{name}</span>
        </div>
        <div className="flex items-center gap-3">
          {yearsOfExperience && (
            <span className="font-body text-xs text-white/40">
              {yearsOfExperience}y
            </span>
          )}
          <span className="font-heading text-sm text-pagani-gold">
            {proficiency}%
          </span>
        </div>
      </div>
      <div className="h-2 bg-carbon-gray/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pagani-gold to-bright-gold rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function SkillCategory({
  title,
  description,
  icon,
  skills,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    proficiency: number;
    icon?: string;
    yearsOfExperience?: number;
  }[];
  index: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="hud-border p-6 md:p-8 bg-carbon-gray/20 hover:bg-carbon-gray/30 transition-all duration-300 h-full">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-pagani-gold/30 text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="font-heading text-xl text-white">{title}</h3>
            <p className="font-body text-sm text-white/50">{description}</p>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skills.map((skill, idx) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              proficiency={skill.proficiency}
              icon={skill.icon}
              yearsOfExperience={skill.yearsOfExperience}
              index={idx}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-pagani-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm text-white/50 hover:text-pagani-gold transition-colors"
            >
              <span>←</span>
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.3em] text-pagani-gold uppercase">
                Technical Expertise
              </span>
              <div className="w-12 h-px bg-pagani-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              <span className="text-gold-gradient">Skills</span> & Proficiencies
            </h1>
            <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and
              technologies I work with to build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Technologies", value: "30+" },
              { label: "Projects Completed", value: "50+" },
              { label: "Certifications", value: "3" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 border border-pagani-gold/20 bg-carbon-gray/20"
                variants={itemVariants}
              >
                <div className="font-heading text-3xl md:text-4xl text-gold-gradient mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs tracking-[0.2em] text-white/50 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                skills={category.skills}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
              Additional Skills
            </h2>
            <p className="font-body text-white/50">
              Soft skills and other competencies
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 font-body text-sm border border-pagani-gold/30 text-white/70 hover:border-pagani-gold hover:text-white hover:bg-pagani-gold/10 transition-all cursor-default"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-pagani-gold" />
              <span className="font-body text-xs tracking-[0.3em] text-pagani-gold uppercase">
                Credentials
              </span>
              <div className="w-8 h-px bg-pagani-gold" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-white">
              Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="relative p-6 border border-pagani-gold/20 bg-carbon-gray/20 text-center group hover:border-pagani-gold/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-heading text-lg text-white mb-2">
                  {cert.name}
                </h3>
                <p className="font-body text-sm text-white/50 mb-1">
                  {cert.issuer}
                </p>
                <p className="font-body text-xs text-pagani-gold">
                  {cert.year}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="hud-border p-8 md:p-12 bg-carbon-gray/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="font-body text-white/60 mb-8 max-w-xl mx-auto">
              I&apos;m always looking for new challenges and opportunities to
              apply my skills. Let&apos;s discuss how I can help with your next
              project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-3 font-heading text-sm tracking-[0.2em] uppercase bg-pagani-gold text-pagani-black hover:bg-bright-gold transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                href="/resume"
                className="px-8 py-3 font-heading text-sm tracking-[0.2em] uppercase border border-pagani-gold/50 text-pagani-gold hover:border-pagani-gold hover:bg-pagani-gold/10 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
