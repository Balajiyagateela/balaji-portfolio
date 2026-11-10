import React from 'react';
import { Terminal, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import Card3D from '../components/Card3D';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative border-t border-[var(--border)]"
    >
      <div className="bs-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[var(--text-primary)]">
            Professional Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Professional backend development contributions at Speshway Solutions alongside team web development experience.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[var(--border)] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-5 h-5 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] shadow-sm z-20" />

              {/* 3D Experience Card */}
              <Card3D
                maxTilt={4}
                className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card transition-all duration-300"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[var(--border)]">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      {exp.period.includes('Present') && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--accent)] text-[#0B0F17]">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-[var(--accent)] flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-medium">
                      <Calendar className="w-4 h-4 text-[var(--accent)]" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-medium">
                      <MapPin className="w-4 h-4 text-[var(--accent)]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="pt-5 space-y-3">
                  <div className="text-xs uppercase font-mono tracking-wider font-bold text-[var(--text-secondary)]">
                    Key Responsibilities:
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-sm sm:text-base text-[var(--text-secondary)] flex items-start gap-3 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-1" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Environment Tech Stack */}
                <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[var(--text-secondary)] mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs sm:text-sm font-mono font-medium border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
