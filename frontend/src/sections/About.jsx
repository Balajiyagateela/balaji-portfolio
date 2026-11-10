import React from 'react';
import { Terminal, CheckCircle } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';
import Card3D from '../components/Card3D';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative border-t border-[var(--border)]"
    >
      <div className="bs-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[var(--text-primary)]">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {aboutContent.description}
          </p>
        </div>

        {/* 5 3D Engineering Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutContent.highlights.map((item, idx) => (
            <Card3D
              key={item.title}
              maxTilt={5}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--accent-subtle)] text-[var(--accent)] mb-4 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border)] flex items-center justify-between text-xs sm:text-sm font-mono font-semibold text-[var(--accent)]">
                <span>Core Skill</span>
                <CheckCircle className="w-4 h-4" />
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}
