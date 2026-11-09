import React from 'react';
import { 
  Server, 
  Database, 
  Cpu, 
  Layout, 
  Wrench, 
  Terminal,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const categoryIconMap = {
  "Backend Development": Server,
  "Databases": Database,
  "Event-Driven & Infrastructure": Cpu,
  "Frontend": Layout,
  "Tools": Wrench,
};

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section 
      id="skills" 
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
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
          }`}>
            Technical Stack & Tooling
          </h2>
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
          }`}>
            Hands-on technical capabilities utilized across API design, relational modeling, event streaming, and automated testing.
          </p>
        </div>

        {/* Skills Cards Grid - Consistent 14-16px radius, subtle borders, soft shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, index) => {
            const Icon = categoryIconMap[categoryGroup.category] || Terminal;
            const isBackendCore = categoryGroup.category === "Backend Development";

            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 rounded-2xl border portfolio-card flex flex-col justify-between ${
                  isDark
                    ? isBackendCore
                      ? 'bg-[#161B22] border-emerald-500/40 shadow-card-dark hover:border-emerald-500/60'
                      : 'bg-[#161B22] border-[#30363D] shadow-card-dark hover:border-[#484F58]'
                    : isBackendCore
                      ? 'bg-white border-emerald-300 shadow-card-light hover:border-emerald-400'
                      : 'bg-white border-[#E2E8F0] shadow-card-light hover:border-[#CBD5E1]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg border transition-colors ${
                        isBackendCore
                          ? isDark 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                          : isDark
                            ? 'bg-[#0B0F17] text-[#94A3B8] border-[#30363D]'
                            : 'bg-slate-50 text-[#475569] border-[#E2E8F0]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className={`font-semibold text-base tracking-tight ${
                        isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                      }`}>
                        {categoryGroup.category}
                      </h3>
                    </div>

                    {isBackendCore && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium border ${
                        isDark 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        Primary Focus
                      </span>
                    )}
                  </div>

                  {/* Category Description */}
                  <p className={`text-xs mb-5 leading-relaxed ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    {categoryGroup.description}
                  </p>
                </div>

                {/* Skill Badges (Clean tags, no fake progress percentages) */}
                <div className={`flex flex-wrap gap-2 pt-4 border-t ${
                  isDark ? 'border-[#30363D]/60' : 'border-[#E2E8F0]'
                }`}>
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                        skill.isCore
                          ? isDark
                            ? 'bg-[#0B0F17] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50'
                            : 'bg-emerald-50/80 text-emerald-700 border border-emerald-200 hover:border-emerald-300'
                          : isDark
                            ? 'bg-[#0B0F17] text-[#94A3B8] border border-[#30363D] hover:text-[#E5E7EB]'
                            : 'bg-slate-50 text-[#475569] border border-[#E2E8F0] hover:text-[#0F172A]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        skill.isCore ? 'bg-emerald-500' : 'bg-slate-400'
                      }`} />
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