import React from 'react';
import { X, Server, Database, Cpu, ShieldCheck, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export default function ArchitectureModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0e131f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {project.title} — Technical Architecture
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Microservice Architecture & Data Flow Overview
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Scope notice */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/50 text-xs text-blue-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-blue-300 font-semibold mb-0.5">
                Backend Contributor Scope
              </strong>
              {project.scopeNote}
            </div>
          </div>

          {/* Interactive Flow Visualizer */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
              End-to-End System Request Flow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  1
                </div>
                <span className="text-xs font-semibold text-white mb-1">Inbound REST API</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  FastAPI + Pydantic validation & API Key Auth
                </span>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  2
                </div>
                <span className="text-xs font-semibold text-white mb-1">PostgreSQL Session</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  ACID transactional stock & order commits
                </span>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  3
                </div>
                <span className="text-xs font-semibold text-white mb-1">Redis Invalidation</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Atomic cache update for fast inventory lookups
                </span>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-2 font-mono text-sm font-bold">
                  4
                </div>
                <span className="text-xs font-semibold text-white mb-1">Kafka Consumers</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Subscribed to compliance & dispatch events
                </span>
              </div>
            </div>
          </div>

          {/* Technical Implementation Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Key Contributions & Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.contributedAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Properties */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
            <div className="text-slate-400 mb-2 font-semibold">Service Blueprint Specification:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div><span className="text-slate-500">Framework:</span> FastAPI (Python 3.10+)</div>
              <div><span className="text-slate-500">Data Store:</span> PostgreSQL (SQLAlchemy ORM)</div>
              <div><span className="text-slate-500">Event Stream:</span> Apache Kafka Consumer Groups</div>
              <div><span className="text-slate-500">Cache Layer:</span> Redis In-Memory Key-Value</div>
              <div><span className="text-slate-500">Testing Suite:</span> pytest & FastAPI TestClient</div>
              <div><span className="text-slate-500">Service Auth:</span> Custom API Key Middleware</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

