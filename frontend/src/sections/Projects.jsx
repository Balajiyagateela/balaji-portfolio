import React, { useRef } from 'react';
import { Terminal, Github, ExternalLink, Server, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

// Reusable 3D Tilt Card wrapper using CSS perspective transforms
function Project3DCard({ project, idx }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 20 });
  const springY = useSpring(y, { stiffness: 180, damping: 20 });

  // Moderate tilt: rotateX based on mouseY, rotateY based on mouseX
  const rotateX = useTransform(springY, [-180, 180], [5, -5]);
  const rotateY = useTransform(springX, [-180, 180], [-5, 5]);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isPrimary = project.id === 'inventory-management-system';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`project-3d-card rounded-2xl border p-6 sm:p-8 transition-all duration-300 will-change-transform ${
        isPrimary
          ? 'border-[var(--accent)]/40 bg-[var(--surface)] hover:border-[var(--accent)] shadow-card'
          : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[var(--border)]">
        
        {/* Title & Description */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg border ${
              isPrimary
                ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/30'
                : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] border-[var(--border)]'
            }`}>
              {isPrimary ? <Server className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              {isPrimary ? 'Core Backend Project' : 'Full-Stack MERN Project'}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)] tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <MagneticButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] hover:bg-[var(--surface)] hover:border-[var(--accent)] text-[var(--text-primary)] text-xs font-mono font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </MagneticButton>
        </div>

      </div>

      {/* Technology Tags */}
      <div className="py-5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2.5">
          Technologies Applied:
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 3 Concise Highlights */}
      <div className="pt-4 border-t border-[var(--border)]">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-3">
          Implementation Highlights:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {project.highlights.map((item, hIdx) => (
            <div
              key={hIdx}
              className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-xs text-[var(--text-secondary)] leading-relaxed"
            >
              <div className="font-mono text-[11px] text-[var(--accent)] font-semibold mb-1">
                0{hIdx + 1} //
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
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
            Featured Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Practical development across backend microservices, REST APIs, and full-stack web applications.
          </p>
        </div>

        {/* 3D Projects Showcase */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => (
            <Project3DCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
