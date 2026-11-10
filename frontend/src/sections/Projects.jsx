import React from 'react';
import { Terminal, Github, Server, ShoppingBag, ArrowUpRight, Building2, Lock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import Card3D from '../components/Card3D';
import MagneticButton from '../components/MagneticButton';

function ProjectItem({ project, idx }) {
  const isCompany = Boolean(project.isCompanyProject);

  return (
    <Card3D
      maxTilt={5}
      glare={true}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 shadow-card ${
        isCompany
          ? 'border-[var(--accent)]/40 bg-[var(--surface)] hover:border-[var(--accent)]'
          : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)]'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[var(--border)]">
        
        {/* Title, Badge & Description */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2.5">
            <div className={`p-2.5 rounded-xl border ${
              isCompany
                ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/30'
                : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] border-[var(--border)]'
            }`}>
              {isCompany ? <Building2 className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </div>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-mono">
              <span className="font-bold uppercase tracking-wider text-[var(--accent)]">
                {project.projectType}
              </span>
              {project.company && (
                <>
                  <span className="text-[var(--text-secondary)] opacity-60">•</span>
                  <span className="text-[var(--text-secondary)] font-semibold">
                    {project.company}
                  </span>
                </>
              )}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)] tracking-tight">
            {project.title}
          </h3>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action / Privacy Indicator: Only show GitHub if personal project with verified repo */}
        <div className="flex items-center gap-3 shrink-0">
          {project.github ? (
            <MagneticButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] hover:bg-[var(--surface)] hover:border-[var(--accent)] text-[var(--text-primary)] text-xs sm:text-sm font-mono font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </MagneticButton>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-xs sm:text-sm font-mono text-[var(--text-secondary)] font-medium">
              <Lock className="w-4 h-4 text-[var(--accent)]" />
              <span>Proprietary Work</span>
            </div>
          )}
        </div>

      </div>

      {/* Technology Tags */}
      <div className="py-5">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-3">
          Technologies Applied:
        </div>
        <div className="flex flex-wrap gap-2.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 3 Concise Implementation Pillars */}
      <div className="pt-5 border-t border-[var(--border)]">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-3.5">
          Implementation Highlights:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {project.highlights.map((item, hIdx) => (
            <div
              key={hIdx}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed"
            >
              <div className="font-mono text-xs text-[var(--accent)] font-bold mb-1.5">
                0{hIdx + 1} //
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

    </Card3D>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative border-t border-[var(--border)]"
    >
      <div className="bs-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[var(--text-primary)]">
            Featured Projects & Engineering Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Professional backend microservices engineered for Speshway Solutions alongside full-stack application development.
          </p>
        </div>

        {/* 3D Projects Showcase */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => (
            <ProjectItem key={project.id} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
