import React from 'react';
import { 
  Server, 
  Database, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  const iconMap = [Server, Database, CheckCircle2];

  return (
    <section
      id="about"
      className={`py-20 relative border-t transition-colors ${
        isDark ? 'bg-[#0B0F17] border-[#30363D]/60' : 'bg-[#F3F4F6] border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border transition-colors ${
            isDark 
              ? 'bg-[#161B22] border-[#30363D] text-emerald-400' 
              : 'bg-white border-[#E2E8F0] text-emerald-600 shadow-sm'
          }">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
          }`}>
            Engineering Focus & Approach
          </h2>
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
          }`}>
            {aboutContent.summary}
          </p>
        </div>

        {/* 3 Focused Core Pillars (Backend Architecture, Database Consistency, Automated Testing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutContent.corePillars.map((pillar, idx) => {
            const Icon = iconMap[idx] || Server;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 sm:p-7 rounded-2xl border portfolio-card flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#161B22] border-[#30363D] hover:border-emerald-500/40 shadow-card-dark'
                    : 'bg-white border-[#E2E8F0] hover:border-emerald-300 shadow-card-light'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 border transition-colors ${
                    isDark 
                      ? 'bg-[#0B0F17] border-[#30363D] text-emerald-400' 
                      : 'bg-emerald-50 border-emerald-100 text-emerald-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className={`text-lg font-semibold tracking-tight mb-2.5 ${
                    isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                  }`}>
                    {pillar.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#30363D]/40 dark:border-[#30363D]/40 light:border-[#E2E8F0]">
                  <span className={`text-[11px] font-mono font-medium ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    0{idx + 1} • Core Competency
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}