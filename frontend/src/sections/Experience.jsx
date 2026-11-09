import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  GraduationCap,
  Award,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData, educationData, achievementsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'experience', 'education'

  return (
    <section 
      id="experience" 
      className={`py-20 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#060b17] border-blue-950/60' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Journey & Academic Credentials
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Practical backend engineering contributions at Speshway Solutions alongside formal Computer Science education.
          </p>
        </div>

        {/* Filter View Selector */}
        <div className="flex items-center gap-2 mb-10 pb-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : isDark
                  ? 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Background
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'experience'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : isDark
                  ? 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : isDark
                  ? 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
        </div>

        {/* SECTION 1: WORK EXPERIENCE TIMELINE */}
        {(activeTab === 'all' || activeTab === 'experience') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-blue-600/10 text-blue-500 border border-blue-500/20">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Professional Work Experience
              </h3>
            </div>

            <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Bullet Node */}
                  <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform hover:scale-110 ${
                    exp.isCurrent
                      ? 'bg-blue-600 border-white dark:border-[#060b17] shadow-[0_0_15px_rgba(37,99,235,0.8)]'
                      : 'bg-slate-400 dark:bg-slate-700 border-white dark:border-[#060b17]'
                  }`}>
                    {exp.isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    )}
                  </div>

                  {/* Main Experience Card */}
                  <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 ${
                    exp.isCurrent
                      ? isDark
                        ? 'bg-[#0a1122] border-blue-500/30 shadow-xl shadow-blue-950/20'
                        : 'bg-white border-blue-200 shadow-md shadow-blue-500/5'
                      : isDark
                        ? 'bg-slate-900/40 border-slate-800'
                        : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    
                    {/* Header Information */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h4 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {exp.role}
                          </h4>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white">
                              Present
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Metadata Tags */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
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
                    <div className="pt-5 space-y-3">
                      <div className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400">
                        Key Technical Responsibilities:
                      </div>
                      <div className="grid grid-cols-1 gap-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                              isDark 
                                ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' 
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Environment Tech Stack Pills */}
                    <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
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
        )}

        {/* SECTION 2: ACADEMIC BACKGROUND & EDUCATION */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-blue-600/10 text-blue-500 border border-blue-500/20">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Education & Academic Qualifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
                    isDark 
                      ? 'bg-[#0a1122] border-blue-900/40 shadow-lg' 
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <h4 className={`text-lg font-bold tracking-tight ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-mono text-blue-500 dark:text-blue-400 font-medium mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
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
                      <span className="font-semibold text-blue-500 font-mono text-xs block mb-1">Foundations:</span>
                      {edu.coursework}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements Card */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#080d1a] border-blue-900/30' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-blue-500" />
                <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Academic & Technical Achievements
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievementsData.map((ach, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                      isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {ach.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/15 text-blue-400 font-semibold border border-blue-500/20">
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
        )}

      </div>
    </section>
  );
}