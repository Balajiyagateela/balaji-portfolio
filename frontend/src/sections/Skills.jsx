import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Layout, 
  Terminal, 
  Radio, 
  GitBranch, 
  Box, 
  Wrench,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const categoryIconMap = {
  "Programming Languages": Code2,
  "Backend Development": Server,
  "Databases": Database,
  "Backend Technologies & Tools": Cpu,
  "Tools & Environment": Wrench,
  "Frontend (Supporting)": Layout,
};

export default function Skills() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section 
      id="skills" 
      className={`py-20 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-blue-950/60' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Technical Skills & Architecture Stack
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Practical competencies directly applied across REST API design, database modeling, distributed messaging, and testing.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500'
                  : isDark
                    ? 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Consistent 14-16px radius, subtle borders, soft shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((categoryGroup, index) => {
            const Icon = categoryIconMap[categoryGroup.category] || Terminal;
            const isBackendCore = [
              "Backend Development", 
              "Databases", 
              "Backend Technologies & Tools",
              "Programming Languages"
            ].includes(categoryGroup.category);

            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
                  isBackendCore
                    ? isDark
                      ? 'bg-[#080d1a] border-blue-900/40 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-950/40'
                      : 'bg-white border-blue-200/90 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5'
                    : isDark
                      ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border transition-colors ${
                        isBackendCore
                          ? 'bg-blue-600/10 text-blue-500 border-blue-500/20'
                          : 'bg-slate-800/40 text-slate-400 border-slate-700'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className={`font-bold text-base tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {categoryGroup.category}
                      </h3>
                    </div>
                    {isBackendCore && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-600/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 font-bold">
                        Primary
                      </span>
                    )}
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {categoryGroup.description}
                  </p>
                </div>

                {/* Skill Badges (No fake percentage bars) */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                        skill.isCore
                          ? isDark
                            ? 'bg-blue-950/40 text-blue-200 border border-blue-800/50'
                            : 'bg-blue-50 text-blue-800 border border-blue-200 font-semibold'
                          : isDark
                            ? 'bg-slate-900/90 text-slate-300 border border-slate-800'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.isCore ? 'bg-blue-400' : 'bg-slate-400'}`} />
                      <span>{skill.name}</span>
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