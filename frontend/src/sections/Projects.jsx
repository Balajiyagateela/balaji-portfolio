import React, { useRef } from 'react';
import { 
  Server, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Database,
  Cpu,
  ShoppingBag
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Subtle 3D Tilt Wrapper for Project Cards
function TiltProjectCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-200, 200], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-200, 200], [-4, 4]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section 
      id="projects" 
      className={`py-20 relative border-t transition-colors ${
        isDark ? 'bg-[#0B0F17] border-[#30363D]/60' : 'bg-[#F3F4F6] border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border transition-colors ${
            isDark 
              ? 'bg-[#161B22] border-[#30363D] text-emerald-400' 
              : 'bg-white border-[#E2E8F0] text-emerald-600 shadow-sm'
          }`}>
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
          }`}>
            Backend Engineering Projects
          </h2>
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
          }`}>
            Practical implementation of microservices, asynchronous event consumers, and full-stack REST APIs.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {projectsData.map((project, idx) => {
            const isPrimary = project.id === 'eaicsp-inventory-service';

            return (
              <TiltProjectCard
                key={project.id}
                className={`rounded-2xl border portfolio-card overflow-hidden transition-all duration-200 ${
                  isDark
                    ? isPrimary
                      ? 'bg-[#161B22] border-emerald-500/40 shadow-card-dark'
                      : 'bg-[#161B22] border-[#30363D] shadow-card-dark'
                    : isPrimary
                      ? 'bg-white border-emerald-300 shadow-card-light'
                      : 'bg-white border-[#E2E8F0] shadow-card-light'
                }`}
              >
                {/* Header Strip */}
                <div className={`px-6 sm:px-8 py-4 border-b flex flex-wrap items-center justify-between gap-4 transition-colors ${
                  isDark
                    ? 'bg-[#111722] border-[#30363D]/80'
                    : 'bg-[#F8FAFC] border-[#E2E8F0]'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-[#0B0F17] text-emerald-400 border-[#30363D]'
                        : 'bg-white text-emerald-600 border-[#E2E8F0] shadow-sm'
                    }`}>
                      {isPrimary ? <Server className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-500 block">
                        {project.module}
                      </span>
                      <span className={`text-xs ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full font-medium border ${
                      isDark
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Description */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-3xl">
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                        isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 border transition-colors cursor-pointer ${
                          isDark
                            ? 'bg-[#0B0F17] hover:bg-[#161B22] text-[#E5E7EB] border-[#30363D] hover:border-[#484F58]'
                            : 'bg-white hover:bg-slate-50 text-[#0F172A] border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    </div>
                  </div>

                  {/* Compact Technology Badges */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                      Technologies Applied:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${
                            isDark
                              ? 'bg-[#0B0F17] text-[#E5E7EB] border-[#30363D]'
                              : 'bg-slate-50 text-[#0F172A] border-[#E2E8F0]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Concise Implementation Highlights */}
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Technical Highlights:
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {project.highlights.map((highlight, hIdx) => (
                        <div
                          key={highlight.category}
                          className={`p-4 rounded-xl border text-xs space-y-2 transition-colors ${
                            isDark
                              ? 'bg-[#0B0F17]/70 border-[#30363D]/80'
                              : 'bg-[#F8FAFC] border-[#E2E8F0]'
                          }`}
                        >
                          <div className={`font-semibold text-xs flex items-center gap-1.5 ${
                            isDark ? 'text-emerald-400' : 'text-emerald-700'
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{highlight.category}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {highlight.points.map((pt, pIdx) => (
                              <li key={pIdx} className={`text-xs leading-relaxed ${
                                isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
                              }`}>
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </TiltProjectCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}