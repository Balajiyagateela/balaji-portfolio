import React, { useState } from 'react';
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
  Workflow
} from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ArchitectureModal from '../components/ArchitectureModal';

export default function Projects() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const inventoryProject = projectsData.find(p => p.id === 'eaicsp-inventory-service') || projectsData[0];
  const ecommerceProject = projectsData.find(p => p.id === 'ecommerce-mern-app') || projectsData[1];

  return (
    <section 
      id="projects" 
      className={`py-24 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-blue-950/60' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // FEATURED PROJECTS</span>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-[#080d1a] border-blue-500/40 shadow-2xl shadow-blue-950/30' 
                  : 'bg-white border-blue-200 shadow-xl shadow-blue-500/10'
              }`}
            >
              {/* Card Banner */}
              <div className={`px-6 sm:px-8 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-950/60 via-slate-900 to-[#0c1324] border-blue-900/50' 
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
              <div className="p-6 sm:p-9 space-y-7">
                
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
                <div className={`p-4 rounded-2xl border text-xs flex items-start gap-3 ${
                  isDark 
                    ? 'bg-blue-950/20 border-blue-900/50 text-blue-200' 
                    : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}>
                  <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Authentic Contributor Scope:</strong>
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
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium border flex items-center gap-1.5 ${
                          isDark 
                            ? 'bg-slate-900 text-slate-200 border-slate-800' 
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Implementation Details Grid */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Key Implementation Details (From Resume):
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {inventoryProject.contributedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
                          isDark 
                            ? 'bg-slate-900/70 border-slate-800/90 text-slate-300' 
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights Spec Strip */}
                <div className={`p-4 rounded-2xl border font-mono text-xs ${
                  isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div><span className="text-slate-500">Framework:</span> {inventoryProject.architectureHighlights.framework}</div>
                    <div><span className="text-slate-500">Database:</span> {inventoryProject.architectureHighlights.database}</div>
                    <div><span className="text-slate-500">Event Stream:</span> {inventoryProject.architectureHighlights.eventStreaming}</div>
                    <div><span className="text-slate-500">Caching:</span> {inventoryProject.architectureHighlights.cache}</div>
                    <div><span className="text-slate-500">Tests:</span> {inventoryProject.architectureHighlights.tests}</div>
                    <div><span className="text-slate-500">Concurrency:</span> {inventoryProject.architectureHighlights.concurrency}</div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* PROJECT 2: E-COMMERCE WEB APPLICATION (Full-Stack MERN Project) */}
          {ecommerceProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-[#080d1a] border-slate-800 shadow-xl' 
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              {/* Card Banner */}
              <div className={`px-6 sm:px-8 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      {ecommerceProject.module}
                    </span>
                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {ecommerceProject.type}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {ecommerceProject.badge}
                </span>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-9 space-y-6">
                
                {/* Title & Quick Actions */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className={`text-2xl font-bold tracking-tight ${
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
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2 transition-all border ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
                </div>

                {/* Tech Badges */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Technologies Applied:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ecommerceProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium border ${
                          isDark 
                            ? 'bg-slate-900 text-slate-300 border-slate-800' 
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Implementation Highlights:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {ecommerceProject.contributedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
                          isDark 
                            ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' 
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
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
