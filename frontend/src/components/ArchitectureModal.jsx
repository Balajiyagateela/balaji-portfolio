import React from 'react';
import { X, Server, Database, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ArchitectureModal({ isOpen, onClose, project }) {
  const { isDark } = useTheme();

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden my-8 ${
          isDark ? 'bg-[#0a0f1d] border-blue-900/50' : 'bg-white border-slate-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>
              <p className="text-xs font-mono text-blue-500">
                Microservice Architecture & Data Flow Overview
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Scope notice */}
          <div className={`p-4 rounded-2xl border text-xs flex items-start gap-3 ${
            isDark ? 'bg-blue-950/20 border-blue-900/50 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-900'
          }`}>
            <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold mb-0.5">Backend Contributor Scope:</strong>
              {project.scopeNote}
            </div>
          </div>

          {/* Interactive Flow Visualizer */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400">
              End-to-End System Request Flow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
              {/* Step 1 */}
              <div className={`p-4 rounded-2xl border flex flex-col items-center ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  1
                </div>
                <span className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Inbound REST API
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  FastAPI + Pydantic validation & JWT/API Key
                </span>
              </div>

              {/* Step 2 */}
              <div className={`p-4 rounded-2xl border flex flex-col items-center ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  2
                </div>
                <span className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  PostgreSQL ACID
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  15+ tables, 3-tier hierarchy & optimistic locking
                </span>
              </div>

              {/* Step 3 */}
              <div className={`p-4 rounded-2xl border flex flex-col items-center ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  3
                </div>
                <span className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Redis Caching
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  In-memory cache invalidation reducing DB queries
                </span>
              </div>

              {/* Step 4 */}
              <div className={`p-4 rounded-2xl border flex flex-col items-center ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  4
                </div>
                <span className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Kafka Consumers
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Supplier compliance event stream synchronization
                </span>
              </div>
            </div>
          </div>

          {/* Key Contributions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400">
              Verified Technical Contributions:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.contributedAreas.map((area, index) => (
                <div
                  key={index}
                  className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
                    isDark ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blueprint Specs */}
          <div className={`p-4 rounded-2xl border font-mono text-xs ${
            isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <div className="text-blue-500 font-bold mb-2">Service Specification Blueprint:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><span className="text-slate-500">Framework:</span> FastAPI (Python 3.10+)</div>
              <div><span className="text-slate-500">Data Store:</span> PostgreSQL (SQLAlchemy ORM + Alembic)</div>
              <div><span className="text-slate-500">Event Stream:</span> Apache Kafka Consumer Groups</div>
              <div><span className="text-slate-500">Cache Layer:</span> Redis In-Memory Key-Value</div>
              <div><span className="text-slate-500">Testing Suite:</span> 280+ Pytest Test Cases (0 Failures)</div>
              <div><span className="text-slate-500">Security:</span> JWT + 4-Tier RBAC Permission Levels</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-end ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
