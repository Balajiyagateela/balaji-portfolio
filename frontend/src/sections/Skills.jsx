import React from 'react';
import { Terminal, Code2, Server, Database, Layout, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  "Programming Languages": Code2,
  "Backend Development": Server,
  "Databases": Database,
  "Frontend Development": Layout,
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
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Technologies and developer tools applied in building resilient backend microservices, REST APIs, and full-stack solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((group, index) => {
            const Icon = categoryIcons[group.category] || Terminal;
            const isBackend = group.category === "Backend Development";

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isBackend
                    ? 'border-[var(--accent)]/50 bg-[var(--surface)] hover:border-[var(--accent)] shadow-sm'
                    : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg border ${
                        isBackend
                          ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/30'
                          : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] border-[var(--border)]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-semibold text-base text-[var(--text-primary)]">
                        {group.category}
                      </h3>
                    </div>

                    {isBackend && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                        Primary
                      </span>
                    )}
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
