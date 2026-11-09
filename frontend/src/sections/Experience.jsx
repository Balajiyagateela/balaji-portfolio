import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  GraduationCap,
  Award,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData, educationData, achievementsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section 
      id="experience" 
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
            <span>04 // EXPERIENCE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
          }`}>
            Experience & Education
          </h2>
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
          }`}>
            Professional backend development contributions at Speshway Solutions alongside academic Computer Science foundations.
          </p>
        </div>

        {/* SUBSECTION 1: PROFESSIONAL EXPERIENCE */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className={`p-2 rounded-lg border transition-colors ${
              isDark 
                ? 'bg-[#161B22] border-[#30363D] text-emerald-400' 
                : 'bg-white border-[#E2E8F0] text-emerald-600 shadow-sm'
            }`}>
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className={`text-xl font-bold tracking-tight ${
              isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
            }`}>
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 sm:p-7 rounded-2xl border portfolio-card ${
                  isDark
                    ? exp.isCurrent
                      ? 'bg-[#161B22] border-emerald-500/40 shadow-card-dark'
                      : 'bg-[#161B22] border-[#30363D] shadow-card-dark'
                    : exp.isCurrent
                      ? 'bg-white border-emerald-300 shadow-card-light'
                      : 'bg-white border-[#E2E8F0] shadow-card-light'
                }`}
              >
                {/* Header Information */}
                <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b ${
                  isDark ? 'border-[#30363D]/70' : 'border-[#E2E8F0]'
                }`}>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className={`text-lg sm:text-xl font-bold tracking-tight ${
                        isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                      }`}>
                        {exp.role}
                      </h4>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-600 text-white">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-emerald-500 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                      isDark 
                        ? 'bg-[#0B0F17] border-[#30363D] text-[#94A3B8]' 
                        : 'bg-slate-50 border-[#E2E8F0] text-[#475569]'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{exp.period}</span>
                    </div>

                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                      isDark 
                        ? 'bg-[#0B0F17] border-[#30363D] text-[#94A3B8]' 
                        : 'bg-slate-50 border-[#E2E8F0] text-[#475569]'
                    }`}>
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="pt-4 space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-400">
                    Key Responsibilities:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                          isDark 
                            ? 'bg-[#0B0F17]/60 border-[#30363D]/70 text-[#94A3B8]' 
                            : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className={`mt-4 pt-3.5 border-t flex flex-wrap items-center gap-1.5 ${
                  isDark ? 'border-[#30363D]/60' : 'border-[#E2E8F0]'
                }`}>
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                        isDark 
                          ? 'bg-[#0B0F17] border-[#30363D] text-[#94A3B8]' 
                          : 'bg-slate-50 border-[#E2E8F0] text-[#475569]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2: EDUCATION */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-6">
            <div className={`p-2 rounded-lg border transition-colors ${
              isDark 
                ? 'bg-[#161B22] border-[#30363D] text-emerald-400' 
                : 'bg-white border-[#E2E8F0] text-emerald-600 shadow-sm'
            }`}>
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className={`text-xl font-bold tracking-tight ${
              isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
            }`}>
              Education & Academic Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 rounded-2xl border portfolio-card flex flex-col justify-between ${
                  isDark 
                    ? 'bg-[#161B22] border-[#30363D] shadow-card-dark' 
                    : 'bg-white border-[#E2E8F0] shadow-card-light'
                }`}
              >
                <div className="space-y-3">
                  <div className={`pb-3 border-b ${isDark ? 'border-[#30363D]/70' : 'border-[#E2E8F0]'}`}>
                    <h4 className={`text-base font-bold tracking-tight ${
                      isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                    }`}>
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-emerald-500 font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${
                      isDark 
                        ? 'bg-[#0B0F17] border-[#30363D] text-[#94A3B8]' 
                        : 'bg-slate-50 border-[#E2E8F0] text-[#475569]'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{edu.year}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      <span>{edu.grade}</span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed pt-1 ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    <span className="font-semibold text-xs block mb-0.5 text-slate-400">Coursework:</span>
                    {edu.coursework}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 3: RECOGNIZED ACHIEVEMENTS */}
        <div className={`p-6 rounded-2xl border ${
          isDark 
            ? 'bg-[#161B22] border-[#30363D] shadow-card-dark' 
            : 'bg-white border-[#E2E8F0] shadow-card-light'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-emerald-500" />
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400">
              Technical Achievements & Recognition
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievementsData.map((ach, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border text-xs space-y-1 ${
                  isDark ? 'bg-[#0B0F17] border-[#30363D]/80' : 'bg-[#F8FAFC] border-[#E2E8F0]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'}`}>
                    {ach.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                    {ach.badge}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-500">{ach.organization}</div>
                <p className={`leading-relaxed text-[11px] ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
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