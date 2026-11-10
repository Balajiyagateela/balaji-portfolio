import React from 'react';
import { Terminal, GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import Card3D from '../components/Card3D';

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
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Formal foundations in Computer Science & Engineering and academic coursework.
          </p>
        </div>

        {/* Education Timeline 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <Card3D
              key={edu.degree}
              maxTilt={5}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--accent)]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-[var(--accent)] font-bold">
                      {edu.period}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-secondary)] font-medium">
                    Accredited
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-semibold text-[var(--accent)] mt-1">
                    {edu.field}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] mt-1.5">
                    {edu.institution}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-3 border-t border-[var(--border)]">
                  <span className="font-mono text-xs text-[var(--text-secondary)] font-bold block mb-1.5">Focus Areas:</span>
                  {edu.description}
                </p>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}
