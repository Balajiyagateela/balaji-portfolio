import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Layout, 
  Wrench, 
  Terminal, 
  Check 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Category icon map
const categoryIcons = {
  "Programming Languages": Code2,
  "Backend Development": Server,
  "Databases": Database,
  "Backend Technologies": Layers,
  "Frontend": Layout,
  "Tools": Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#0a0d14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Categorized Technical Stack
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-mono">
            Directly utilized programming languages, backend frameworks, databases, and development tooling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 border border-blue-500'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((categoryGroup) => {
            const Icon = categoryIcons[categoryGroup.category] || Terminal;
            const isBackendCore = categoryGroup.category === "Backend Development" || categoryGroup.category === "Backend Technologies";

            return (
              <div
                key={categoryGroup.category}
                className={`p-6 rounded-2xl bg-[#0e131f] border transition-all duration-200 flex flex-col justify-between ${
                  isBackendCore 
                    ? 'border-blue-500/30 hover:border-blue-500/50 shadow-lg shadow-blue-950/20' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-white text-base">
                        {categoryGroup.category}
                      </h3>
                    </div>
                    {isBackendCore && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Core Focus
                      </span>
                    )}
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {categoryGroup.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-200 border border-slate-700/80 text-xs font-mono flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Non-Inflated Assessment Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-slate-300">Verified Technical Stack:</span>
            <span>All skills listed represent hands-on engineering exposure and project application.</span>
          </div>
          <span className="text-slate-500 font-mono text-[11px]">No arbitrary percentage metrics</span>
        </div>

      </div>
    </section>
  );
}

