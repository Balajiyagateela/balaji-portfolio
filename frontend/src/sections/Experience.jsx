import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Server, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section 
      id="experience" 
      className={`py-24 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#060b17] border-blue-950/60' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience Timeline
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Professional backend development contributions, microservice architectures, and automated testing pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 dark:border-blue-500/30 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform hover:scale-125 ${
                exp.isCurrent
                  ? 'bg-blue-600 border-white dark:border-[#060b17] shadow-[0_0_15px_rgba(37,99,235,0.8)]'
                  : 'bg-slate-400 dark:bg-slate-700 border-white dark:border-[#060b17]'
              }`}>
                {exp.isCurrent && (
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Main Experience Card */}
              <div className={`p-7 sm:p-9 rounded-2xl border transition-all duration-300 ${
                exp.isCurrent
                  ? isDark
                    ? 'bg-[#0a1122] border-blue-500/30 shadow-xl shadow-blue-950/20'
                    : 'bg-white border-blue-200 shadow-lg shadow-blue-500/5'
                  : isDark
                    ? 'bg-slate-900/50 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
              }`}>
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{exp.period}</span>
                    </div>

                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400 dark:text-slate-400">
                    Key Technical Contributions:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm leading-relaxed transition-colors ${
                          isDark 
                            ? 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-blue-900/60' 
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-200'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Environment Tech Pills */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Environment:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${
                        isDark 
                          ? 'bg-slate-900 border-slate-800 text-slate-300' 
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
