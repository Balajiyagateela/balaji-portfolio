import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Terminal, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData, achievementsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section 
      id="education" 
      className={`py-24 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#060b17] border-blue-950/60' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Academic Credentials
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Formal foundations in Computer Science & Engineering, algorithms, operating systems, and database systems.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-7 sm:p-9 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                isDark 
                  ? 'bg-[#0a1122] border-blue-900/40 shadow-xl' 
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-mono text-blue-500 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{edu.year}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">
                    <span>{edu.grade}</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  <span className="font-semibold text-blue-500 font-mono text-xs block mb-1">Coursework & Foundations:</span>
                  {edu.coursework}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Companion Achievements Strip */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          isDark ? 'bg-[#080d1a] border-blue-900/40' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-blue-500" />
            <h4 className={`text-sm font-bold uppercase tracking-wider font-mono ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Recognized Achievements
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievementsData.map((ach, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border text-xs space-y-1 ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {ach.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 font-semibold">
                    {ach.badge}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-blue-500">{ach.organization}</div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
