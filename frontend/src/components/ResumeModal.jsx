import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Terminal, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { 
  personalDetails, 
  introduction, 
  experienceData, 
  skillsData, 
  projectsData, 
  educationData,
  achievementsData
} from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyResumePlainText = () => {
    const text = `
${personalDetails.fullName}
${personalDetails.role}
Phone: ${personalDetails.phone} | Email: ${personalDetails.email} | Location: ${personalDetails.location}
LinkedIn: ${personalDetails.linkedin} | GitHub: ${personalDetails.github}

PROFESSIONAL SUMMARY
${introduction.summary}

TECHNICAL SKILLS
${skillsData.map(s => `${s.category}: ${s.skills.map(sk => sk.name).join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE
${experienceData[0].role} | ${experienceData[0].company}
${experienceData[0].period} | ${experienceData[0].location}
${experienceData[0].responsibilities.map(r => `• ${r}`).join('\n')}

INTERNSHIP
${experienceData[1].role} | ${experienceData[1].company} (${experienceData[1].period})
${experienceData[1].responsibilities.map(r => `• ${r}`).join('\n')}

PROJECTS
1. ${projectsData[0].title} (${projectsData[0].technologies.join(', ')})
${projectsData[0].description}
${projectsData[0].contributedAreas.map(c => `• ${c}`).join('\n')}

2. ${projectsData[1].title} (${projectsData[1].technologies.join(', ')})
${projectsData[1].description}
${projectsData[1].contributedAreas.map(c => `• ${c}`).join('\n')}

EDUCATION
1. ${educationData[0].degree} (${educationData[0].grade})
${educationData[0].institution} | ${educationData[0].year}

2. ${educationData[1].degree} (${educationData[1].grade})
${educationData[1].institution} | ${educationData[1].year}

ACHIEVEMENTS
${achievementsData.map(a => `• ${a.title} (${a.organization}): ${a.description}`).join('\n')}
`.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:static">
      <div 
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden my-8 print:border-none print:shadow-none print:bg-white print:text-black print:my-0 ${
          isDark ? 'bg-[#0a0f1d] border-blue-900/50' : 'bg-white border-slate-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions (Hidden in print) */}
        <div className={`flex items-center justify-between px-6 py-4 border-b print:hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2 text-xs font-mono">
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              yagateela_balaji_resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={copyResumePlainText}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border cursor-pointer ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className={`p-8 sm:p-10 max-h-[80vh] overflow-y-auto space-y-7 print:max-h-none print:overflow-visible print:bg-white print:text-slate-900 print:p-6 ${
          isDark ? 'bg-[#070b16] text-slate-200' : 'bg-white text-slate-900'
        }`}>
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  {personalDetails.fullName}
                </h1>
                <p className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                  {personalDetails.role}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-500" />
                  <span>{personalDetails.phone}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  <span>{personalDetails.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{personalDetails.location}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-blue-500" />
                  <span>github.com/Balajiyagateela</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {introduction.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillsData.map((category) => (
                <div key={category.category}>
                  <strong className="text-blue-600 dark:text-blue-400">{category.category}:</strong>{' '}
                  <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300">
                    {category.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Experience
            </h2>
            
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <strong className="text-sm font-bold">{experienceData[0].role}</strong> —{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{experienceData[0].company}</span>
                </div>
                <span className="text-slate-500 font-mono text-[11px]">
                  {experienceData[0].period} | {experienceData[0].location}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {experienceData[0].responsibilities.map((r, rIdx) => (
                  <li key={rIdx}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Featured Backend Projects
            </h2>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <strong className="text-sm font-bold">{projectsData[0].title}</strong>
                <span className="text-slate-500 font-mono text-[11px]">
                  {projectsData[0].technologies.join(' • ')}
                </span>
              </div>
              <p className="text-xs text-slate-500 italic">
                {projectsData[0].description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {projectsData[0].contributedAreas.map((area, aIdx) => (
                  <li key={aIdx}>{area}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {educationData.map((edu, eIdx) => (
                <div key={eIdx} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <strong className="font-bold">{edu.degree}</strong> —{' '}
                    <span>{edu.institution}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">
                    {edu.grade} | {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className={`px-6 py-4 border-t flex items-center justify-between print:hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <span className="text-xs font-mono text-slate-500">
            Press Print / Save PDF to export high-resolution recruiter document.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
