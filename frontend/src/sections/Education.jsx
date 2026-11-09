import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Terminal } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#0a0d14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-mono">
            Formal foundations in computer science, software engineering, and database systems.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e131f] border border-slate-800 shadow-xl space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-medium text-blue-400">
                      {edu.field}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Institution: <span className="text-slate-200 font-semibold">{edu.institution}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                  {edu.details}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                Note: Details are editable in <code className="text-slate-400">frontend/src/data/portfolioData.js</code>.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

