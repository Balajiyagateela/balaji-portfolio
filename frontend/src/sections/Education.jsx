import React from 'react';
import { Terminal, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 relative border-t border-[var(--border)]"
    >
      <div className="bs-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[var(--text-primary)]">
            Academic Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Formal foundations in Computer Science & Engineering and academic coursework.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--accent)]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                      {edu.period}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-muted)]">
                    Accredited
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-[var(--accent)] mt-0.5">
                    {edu.field}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-secondary)] mt-1">
                    {edu.institution}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-2 border-t border-[var(--border)]">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] block mb-1">Focus Areas:</span>
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

