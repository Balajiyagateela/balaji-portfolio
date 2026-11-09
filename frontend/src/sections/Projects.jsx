import React, { useState, useRef } from 'react';
import { 
  Server, 
  Layers, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Database,
  Cpu,
  Radio,
  Box,
  Code2,
  Workflow,
  Sparkles
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ArchitectureModal from '../components/ArchitectureModal';

// Reusable 3D Tilt Card wrapper for desktop
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-200, 200], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
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
  const [selectedProject, setSelectedProject] = useState(null);

  const inventoryProject = projectsData.find(p => p.id === 'eaicsp-inventory-service') || projectsData[0];
  const ecommerceProject = projectsData.find(p => p.id === 'ecommerce-mern-app') || projectsData[1];

  return (
    <section 
      id="projects" 
      className={`py-20 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-blue-950/60' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Backend Microservices & Projects
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Enterprise backend architecture, asynchronous event consumers, and full-stack API integration.
          </p>
        </div>

        {/* Large Project Cards */}
        <div className="space-y-12">

          {/* PROJECT 1: EAICSP – ENTERPRISE INVENTORY SERVICE (Featured Backend Microservice) */}
          {inventoryProject && (
            <TiltCard
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-[#080d1a] border-blue-500/30 shadow-xl shadow-blue-950/20' 
                  : 'bg-white border-blue-200 shadow-lg shadow-blue-500/5'
              }`}
            >
              {/* Card Banner */}
              <div className={`px-6 sm:px-8 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-950/50 via-slate-900 to-[#0c1324] border-blue-900/40' 
                  : 'bg-gradient-to-r from-blue-50 via-slate-50 to-white border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-500 border border-blue-500/30">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-wider block">
                      {inventoryProject.module}
                    </span>
                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {inventoryProject.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">
                    {inventoryProject.badge}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Title & Quick Action Buttons */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="space-y-1">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {inventoryProject.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed max-w-3xl ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {inventoryProject.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setSelectedProject(inventoryProject)}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      <Layers className="w-4 h-4" />
                      <span>Inspect Architecture</span>
                    </button>

                    <a
                      href={inventoryProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2 transition-all border ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Contributor Scope Notice */}
                <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${
                  isDark 
                    ? 'bg-blue-950/20 border-blue-900/50 text-blue-200' 
                    : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}>
                  <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Authentic Backend Scope:</strong>
                    {inventoryProject.scopeNote}
                  </div>
                </div>

                {/* Technology Badges */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Technologies Applied:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {inventoryProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-slate-200' 
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Contribution Bullets */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Key Implementation Highlights:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {inventoryProject.contributedAreas.map((area, idx) => (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                          isDark 
                            ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' 
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </TiltCard>
          )}

          {/* PROJECT 2: FULL-STACK MERN E-COMMERCE APPLICATION */}
          {ecommerceProject && (
            <TiltCard
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-[#080d1a] border-slate-800 shadow-lg' 
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              {/* Card Banner */}
              <div className={`px-6 sm:px-8 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
                isDark 
                  ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-[#0c1324] border-slate-800' 
                  : 'bg-gradient-to-r from-slate-50 via-slate-50 to-white border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
                      {ecommerceProject.module}
                    </span>
                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {ecommerceProject.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                    {ecommerceProject.badge}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Title & Quick Action Buttons */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="space-y-1">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {ecommerceProject.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed max-w-3xl ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {ecommerceProject.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={ecommerceProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  </div>
                </div>

                {/* Scope Notice */}
                <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${
                  isDark 
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300' 
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Project Scope:</strong>
                    {ecommerceProject.scopeNote}
                  </div>
                </div>

                {/* Technology Badges */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Technologies Applied:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ecommerceProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-slate-200' 
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Contribution Bullets */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Key Features & Integration:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ecommerceProject.contributedAreas.map((area, idx) => (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                          isDark 
                            ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' 
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </TiltCard>
          )}

        </div>

      </div>

      {/* Interactive Microservice Architecture Modal */}
      {selectedProject && (
        <ArchitectureModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}