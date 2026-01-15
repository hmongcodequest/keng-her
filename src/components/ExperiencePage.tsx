"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  experienceData,
  projectHighlights,
  stats,
} from "@/data/experienceData";

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

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experienceData)[0];
  index: number;
  isLast: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline connector */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full">
        {!isLast && (
          <div className="w-full h-full bg-gradient-to-b from-pagani-gold/50 to-pagani-gold/10" />
        )}
      </div>

      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-pagani-gold rounded-full items-center justify-center z-10">
        <div className="w-2 h-2 bg-pagani-black rounded-full" />
      </div>

      {/* Content */}
      <div
        className={`lg:w-[calc(50%-2rem)] ${
          isEven ? "lg:pr-8" : "lg:ml-auto lg:pl-8"
        }`}
      >
        <div className="group relative hud-border p-6 md:p-8 bg-carbon-gray/20 hover:bg-carbon-gray/30 transition-all duration-300">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />

          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 flex items-center justify-center border border-pagani-gold/30 text-2xl flex-shrink-0">
              {experience.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-body text-xs tracking-wider text-pagani-gold uppercase">
                  {experience.startDate} — {experience.endDate}
                </span>
                <span
                  className={`px-2 py-0.5 font-body text-[10px] uppercase tracking-wider border ${
                    experience.type === "full-time"
                      ? "border-green-500/50 text-green-400"
                      : experience.type === "freelance"
                      ? "border-purple-500/50 text-purple-400"
                      : "border-blue-500/50 text-blue-400"
                  }`}
                >
                  {experience.type}
                </span>
              </div>
              <h3 className="font-heading text-xl text-white mb-1">
                {experience.title}
              </h3>
              <p className="font-body text-sm text-white/60">
                {experience.company} • {experience.location}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-sm text-white/70 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="font-heading text-xs tracking-wider text-pagani-gold/70 uppercase mb-2">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.slice(0, 4).map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-pagani-gold mt-1">→</span>
                  <span className="font-body text-sm text-white/60">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 font-body text-xs border border-pagani-gold/20 text-white/50 bg-pagani-gold/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectHighlights)[0];
  index: number;
}) {
  return (
    <motion.div
      className="group relative hud-border p-6 bg-carbon-gray/20 hover:bg-carbon-gray/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />

      <h3 className="font-heading text-lg text-white mb-2">{project.name}</h3>
      <p className="font-body text-sm text-white/60 mb-4">
        {project.description}
      </p>

      {/* Impact */}
      <div className="mb-4 p-3 bg-pagani-gold/5 border-l-2 border-pagani-gold">
        <span className="font-body text-xs tracking-wider text-pagani-gold/70 uppercase">
          Impact
        </span>
        <p className="font-body text-sm text-white/80">{project.impact}</p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 font-body text-xs border border-pagani-gold/20 text-white/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
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
                Career Journey
              </span>
              <div className="w-12 h-px bg-pagani-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Work <span className="text-gold-gradient">Experience</span>
            </h1>
            <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
              A timeline of my professional journey, showcasing roles,
              achievements, and the impact I&apos;ve made at each organization.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat) => (
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

      {/* Timeline Section */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
              Professional Timeline
            </h2>
            <p className="font-body text-white/50">
              From junior developer to senior engineer
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8 lg:space-y-12">
            {experienceData.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
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
                Featured Work
              </span>
              <div className="w-8 h-px bg-pagani-gold" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
              Project Highlights
            </h2>
            <p className="font-body text-white/50">
              Notable projects with measurable impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectHighlights.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="hud-border p-8 md:p-12 bg-carbon-gray/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-white text-center mb-8">
              What I Bring to the Table
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Technical Excellence",
                  description:
                    "Deep expertise in modern frontend technologies with a focus on performance and user experience.",
                },
                {
                  icon: "🤝",
                  title: "Team Leadership",
                  description:
                    "Experience mentoring developers and collaborating with cross-functional teams.",
                },
                {
                  icon: "📈",
                  title: "Business Impact",
                  description:
                    "Track record of delivering solutions that drive measurable business results.",
                },
                {
                  icon: "🔧",
                  title: "Problem Solving",
                  description:
                    "Ability to tackle complex challenges and architect elegant solutions.",
                },
                {
                  icon: "📚",
                  title: "Continuous Learning",
                  description:
                    "Staying current with emerging technologies and best practices.",
                },
                {
                  icon: "💬",
                  title: "Communication",
                  description:
                    "Clear communication with stakeholders, designers, and fellow developers.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-heading text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/50">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Add to This Journey?
            </h2>
            <p className="font-body text-white/60 mb-8 max-w-xl mx-auto">
              I&apos;m always open to discussing new opportunities and how my
              experience can contribute to your team&apos;s success.
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
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
