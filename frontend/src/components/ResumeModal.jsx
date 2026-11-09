import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Briefcase, GraduationCap, Code2, Terminal, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { personalDetails, introduction, experienceData, skillsData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyResumePlainText = () => {
    const text = `
BALAJI YAGATEELA
Python Backend Developer
Location: ${personalDetails.location} | Email: ${personalDetails.email}
GitHub: ${personalDetails.github} | LinkedIn: ${personalDetails.linkedin}

PROFESSIONAL SUMMARY
${introduction.fullText}

EXPERIENCE
Company: ${experienceData[0].company}
Role: ${experienceData[0].role}
Period: ${experienceData[0].period} (${experienceData[0].duration})
Responsibilities:
${experienceData[0].responsibilities.map(r => `• ${r}`).join('\n')}

TECHNICAL SKILLS
${skillsData.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}

FEATURED PROJECTS
1. ${projectsData[0].title} (${projectsData[0].technologies.join(', ')})
Description: ${projectsData[0].description}
Contributions:
${projectsData[0].contributedAreas.map(c => `• ${c}`).join('\n')}

EDUCATION
Degree: ${educationData[0].degree}
Field: ${educationData[0].field}
Institution: ${educationData[0].institution} (${educationData[0].year})
`.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:static">
      <div 
        className="relative w-full max-w-4xl bg-[#0e131f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 print:border-none print:shadow-none print:bg-white print:text-black print:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions (Hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 print:hidden">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span>resume_balaji_yagateela.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={copyResumePlainText}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-medium text-white flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-8 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-[#0b0e17] text-slate-200 print:max-h-none print:overflow-visible print:bg-white print:text-slate-900 print:p-6">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-slate-900 tracking-tight">
                  {personalDetails.name}
                </h1>
                <p className="text-base font-semibold text-blue-400 print:text-blue-700 mt-1">
                  {personalDetails.role}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 print:text-slate-600 space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personalDetails.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalDetails.location}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/Balajiyagateela</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
              {introduction.fullText}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {skillsData.map((category) => (
                <div key={category.category} className="space-y-0.5">
                  <span className="font-semibold text-white print:text-slate-900">
                    {category.category}:
                  </span>{' '}
                  <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {category.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <strong className="text-sm text-white print:text-slate-900 font-bold">
                      {exp.role}
                    </strong>{' '}
                    — <span className="text-blue-400 print:text-blue-700">{exp.company}</span>
                  </div>
                  <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-700">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Featured Backend Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <strong className="text-sm text-white print:text-slate-900 font-bold">
                    {projectsData[0].title}
                  </strong>
                  <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {projectsData[0].technologies.join(' • ')}
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-slate-600 italic mt-0.5">
                  {projectsData[0].description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-700 mt-1.5">
                  {projectsData[0].contributedAreas.slice(0, 4).map((area, aIdx) => (
                    <li key={aIdx}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <strong className="text-white print:text-slate-900 font-semibold">
                  {educationData[0].degree}
                </strong>{' '}
                — <span>{educationData[0].field}</span>
              </div>
              <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                {educationData[0].institution} ({educationData[0].year})
              </span>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer (Hidden in print) */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between print:hidden">
          <span className="text-xs font-mono text-slate-500">
            Tip: Click "Print / Save PDF" to generate a clean recruiter resume.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

