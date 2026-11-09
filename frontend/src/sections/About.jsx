import React from 'react';
import { 
  Server, 
  Database, 
  Layers, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Code2, 
  GitBranch,
  Radio,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails, introduction, achievementsData, experienceData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-24 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#060b17] border-blue-950/60' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Background & Profile
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Structured overview of backend capabilities, verified metrics, internship experience, and achievements.
          </p>
        </div>

        {/* Content Boxes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Box 1: Professional Summary (8 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-8 p-7 sm:p-9 rounded-2xl border flex flex-col justify-between ${
              isDark 
                ? 'bg-[#0a1122] border-blue-900/40 shadow-xl shadow-black/30' 
                : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Executive Summary
                    </h3>
                    <p className="text-xs font-mono text-blue-500 dark:text-blue-400">
                      Speshway Solutions Pvt. Ltd. • Hyderabad, India
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                  1 Year Experience
                </span>
              </div>

              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {introduction.summary}
              </p>

              {/* 4 Architectural Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                {introduction.focusPillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-800 text-slate-300' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-[11px] opacity-80 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Truthful Identity Notice */}
            <div className={`mt-6 p-3.5 rounded-xl border text-xs flex items-center gap-2.5 ${
              isDark 
                ? 'bg-blue-950/20 border-blue-900/40 text-blue-300' 
                : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}>
              <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
              <span>
                <strong>Primary Engineering Identity:</strong> Python Backend Developer. React.js is utilized for this portfolio frontend architecture.
              </span>
            </div>
          </motion.div>

          {/* Box 2: Key Verified Engineering Metrics (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-4 p-7 sm:p-9 rounded-2xl border flex flex-col justify-between ${
              isDark 
                ? 'bg-[#0a1122] border-blue-900/40 shadow-xl shadow-black/30' 
                : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Verified Metrics
                </h3>
              </div>

              <div className="space-y-3">
                {personalDetails.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-center justify-between ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-800/90' 
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                      {m.label}
                    </span>
                    <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Info Chip */}
            <div className={`mt-6 p-3.5 rounded-xl border text-xs font-mono space-y-1 ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 text-slate-400' 
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <div className="text-[11px] text-slate-500">Location: {personalDetails.location}</div>
              <div className="text-[11px] text-slate-500">Phone: {personalDetails.phone}</div>
              <div className="text-[11px] text-blue-500 font-medium">{personalDetails.email}</div>
            </div>
          </motion.div>

          {/* Box 3: Internship Experience (6 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`lg:col-span-6 p-7 rounded-2xl border space-y-4 ${
              isDark 
                ? 'bg-[#0a1122] border-blue-900/40 shadow-xl' 
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Web Development Intern
                  </h4>
                  <p className="text-xs font-mono text-blue-500 dark:text-blue-400">
                    CSEdge
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-400">
                Internship
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {experienceData[1].responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {experienceData[1].techStack.map((tech) => (
                <span 
                  key={tech} 
                  className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Box 4: Achievements & Recognition (6 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`lg:col-span-6 p-7 rounded-2xl border space-y-4 ${
              isDark 
                ? 'bg-[#0a1122] border-blue-900/40 shadow-xl' 
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Achievements & Recognition
                </h4>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Academic & Technical Demonstrations
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {achievementsData.map((ach, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                    isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {ach.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold">
                      {ach.badge}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-blue-500 dark:text-blue-400">{ach.organization}</div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
