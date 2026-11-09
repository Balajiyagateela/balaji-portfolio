import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Info,
  Database,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ArchitectureModal from '../components/ArchitectureModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const inventoryProject = projectsData.find(p => p.id === 'inventory-management-service');
  const ecommerceProject = projectsData.find(p => p.id === 'e-commerce-application');

  return (
    <section id="projects" className="py-20 relative bg-[#0a0d14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Backend Engineering & Applications
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-mono">
            Enterprise backend microservices and full-stack software development projects.
          </p>
        </div>

        <div className="space-y-10">

          {/* PROJECT 1: FEATURED ENTERPRISE BACKEND SERVICE */}
          {inventoryProject && (
            <div className="rounded-2xl bg-[#0e131f] border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-950/20">
              
              {/* Card Top Banner */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-blue-300 uppercase tracking-wider">
                    {inventoryProject.type}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {inventoryProject.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Title & Description */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {inventoryProject.title}
                    </h3>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(inventoryProject)}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-2 transition-all shadow-md shadow-blue-600/20"
                      >
                        <Layers className="w-4 h-4" />
                        <span>Inspect Architecture</span>
                      </button>

                      <a
                        href={inventoryProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-2 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                  {/* Verbatim Description */}
                  <p className="text-base text-slate-300 leading-relaxed">
                    "{inventoryProject.description}"
                  </p>
                </div>

                {/* Truthful Contributor Scope Notice */}
                <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-blue-200/90 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-300 font-semibold block mb-0.5">
                      Authentic Ownership Boundary:
                    </strong>
                    {inventoryProject.scopeNote}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies Applied:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {inventoryProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 text-xs font-mono font-medium flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Relevant Implementation Areas */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Verified Contribution Areas:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {inventoryProject.contributedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PROJECT 2: E-COMMERCE APPLICATION (MERN Stack with Editable Placeholders) */}
          {ecommerceProject && (
            <div className="rounded-2xl bg-[#0e131f] border border-slate-800 overflow-hidden shadow-xl">
              
              {/* Card Top Banner */}
              <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-violet-500/20 text-violet-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                    {ecommerceProject.type}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    {ecommerceProject.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Title & Description */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {ecommerceProject.title}
                    </h3>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={ecommerceProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-2 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Repo</span>
                      </a>

                      <a
                        href={ecommerceProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-medium flex items-center gap-2 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo (Placeholder)</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-base text-slate-300 leading-relaxed font-mono text-sm bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {ecommerceProject.description}
                  </p>
                </div>

                {/* Scope Note */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
                  <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-300 font-semibold block mb-0.5">
                      Editable Portfolio Project:
                    </strong>
                    {ecommerceProject.scopeNote} Placeholders for description, features, and deployment links are ready to be customized in <code className="text-blue-400">src/data/portfolioData.js</code>.
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ecommerceProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 text-xs font-mono font-medium flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Editable Features List */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Project Features (Editable Placeholders):
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {ecommerceProject.contributedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-2.5 text-slate-400 font-mono"
                      >
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="leading-snug">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Architecture Modal Dialog */}
        <ArchitectureModal
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />

      </div>
    </section>
  );
}

