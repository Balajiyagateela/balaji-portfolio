import React from 'react';
import { Terminal, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

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
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
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
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] shadow-sm" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-all duration-200">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      {exp.period.includes('Present') && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[var(--accent)] text-[var(--background)]">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-[var(--accent)] flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-secondary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-secondary)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="pt-4 space-y-2.5">
                  <div className="text-[11px] uppercase font-mono tracking-wider font-semibold text-[var(--text-muted)]">
                    Key Responsibilities:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Environment Tech Stack */}
                <div className="mt-4 pt-3.5 border-t border-[var(--border)] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border)] bg-[var(--background)] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
