import React from 'react';
import {
  Server,
  Database,
  Layers,
  ShieldCheck,
  Terminal,
  Zap,
  Cpu,
  GitBranch,
  Radio
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails, introduction } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#060b17] border-blue-950/60' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
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
            Focused on reliable backend architectures, FastAPI REST endpoints, and PostgreSQL data persistence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: Focused Professional Paragraph & Core Focus Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-8 p-7 sm:p-8 rounded-2xl border flex flex-col justify-between ${
              isDark
                ? 'bg-[#0a1122] border-blue-900/40 shadow-xl shadow-black/30'
                : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Python Backend Developer
                    </h3>
                    <p className="text-xs font-mono text-blue-500 dark:text-blue-400">
                      {personalDetails.company} • {personalDetails.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                  ~1 Year Experience
                </span>
              </div>

              {/* Concise 3-4 Line Professional Paragraph */}
              <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {introduction.summary}
              </p>

              {/* 4 Core Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {introduction.focusPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border text-xs space-y-1.5 transition-colors ${
                      isDark
                        ? 'bg-slate-900/80 border-slate-800/90 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 text-xs sm:text-sm">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-[11px] opacity-80 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Role Identity Badge */}
            <div className={`mt-6 p-3.5 rounded-xl border text-xs flex items-center gap-2.5 ${
              isDark
                ? 'bg-blue-950/25 border-blue-900/40 text-blue-300'
                : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}>
              <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
              <span>
                <strong>Primary Technical Role:</strong> Python Backend Developer. React, Node.js, and Express.js are used strictly to build and serve this portfolio application.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Key Verified Metrics & Technical Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-4 p-7 sm:p-8 rounded-2xl border flex flex-col justify-between ${
              isDark
                ? 'bg-[#0a1122] border-blue-900/40 shadow-xl shadow-black/30'
                : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Verified Engineering Metrics
                </h3>
              </div>

              <div className="space-y-3">
                {personalDetails.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
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
            <div className={`mt-6 p-4 rounded-xl border text-xs font-mono space-y-1.5 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-400'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center justify-between">
                <span>Location:</span>
                <span className={isDark ? 'text-slate-200 font-medium' : 'text-slate-800 font-medium'}>
                  {personalDetails.location}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status:</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}