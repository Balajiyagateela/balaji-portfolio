import React from 'react';
import { Terminal, Server, Database, Cpu, ShieldCheck, Layout, Wrench } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import Card3D from '../components/Card3D';

const categoryIcons = {
  "Backend": Server,
  "Database and ORM": Database,
  "Event-Driven and Infrastructure": Cpu,
  "Validation and Data": ShieldCheck,
  "Frontend": Layout,
  "Tools": Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative border-t border-[var(--border)]"
    >
      <div className="bs-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[var(--text-primary)]">
            Technical Stack & Tooling
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Technologies and developer tooling utilized in engineering reliable backend services, database architectures, and full-stack solutions.
          </p>
        </div>

        {/* Categories Grid (6 clean 3D cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((group, index) => {
            const Icon = categoryIcons[group.category] || Terminal;
            const isBackend = group.category === "Backend";

            return (
              <Card3D
                key={group.category}
                maxTilt={6}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full shadow-card ${
                  isBackend
                    ? 'border-[var(--accent)]/50 bg-[var(--surface)] hover:border-[var(--accent)]'
                    : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${
                        isBackend
                          ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/30'
                          : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] border-[var(--border)]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
                        {group.category}
                      </h3>
                    </div>

                    {isBackend && (
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                        Primary Focus
                      </span>
                    )}
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 pt-5 border-t border-[var(--border)]">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
