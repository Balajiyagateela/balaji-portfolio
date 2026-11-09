import React, { useState } from 'react';
import { 
  Network, 
  Globe, 
  ShieldCheck, 
  Key, 
  Database, 
  Layers, 
  AlertOctagon, 
  Radio, 
  Cpu, 
  GitFork, 
  FileText, 
  CheckCircle, 
  Terminal, 
  ChevronDown, 
  ChevronUp,
  Search
} from 'lucide-react';
import { backendKnowledgeData } from '../data/portfolioData';

// Knowledge Icon Mapper
const iconMap = {
  "rest-api": Network,
  "http-methods": Globe,
  "request-validation": ShieldCheck,
  "auth": Key,
  "sql-relationships": Database,
  "db-transactions": Layers,
  "exception-handling": AlertOctagon,
  "kafka-consumers": Radio,
  "async-processing": Cpu,
  "service-communication": GitFork,
  "logging-debugging": FileText,
  "automated-testing": CheckCircle,
};

export default function BackendKnowledge() {
  const [activeItem, setActiveItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const filteredKnowledge = backendKnowledgeData.filter((item) => {
    const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSummary = item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPoints = item.keyPoints.some(pt => pt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTitle || matchesSummary || matchesPoints;
  });

  return (
    <section id="knowledge" className="py-20 relative bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // BACKEND ENGINEERING KNOWLEDGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Core Backend Engineering Principles
            </h2>
            <p className="mt-2 text-slate-400 text-sm font-mono">
              Practical technical knowledge areas applied in production API development and service architecture.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts (e.g. Kafka, ACID, JWT)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Knowledge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredKnowledge.map((item) => {
            const Icon = iconMap[item.id] || Network;
            const isExpanded = activeItem === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`group cursor-pointer p-5 rounded-xl bg-[#0e131f] border transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-blue-500/60 ring-1 ring-blue-500/30 shadow-xl shadow-blue-950/30 bg-[#101626]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      aria-label="Expand knowledge details"
                      className="text-slate-400 hover:text-white"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                      {item.category}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Expanded Details List */}
                {isExpanded ? (
                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-2 animate-fade-in">
                    <span className="text-[11px] font-mono text-blue-400 font-semibold block">
                      Core Implementation Concepts:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-[11px] mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-3 pt-2 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                    <span>{item.keyPoints.length} key concepts</span>
                    <span className="text-blue-400/80 group-hover:text-blue-300">Click to inspect →</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredKnowledge.length === 0 && (
          <div className="p-8 text-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400">
            <p className="text-sm">No knowledge areas found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-blue-400 underline font-mono"
            >
              Reset search filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
