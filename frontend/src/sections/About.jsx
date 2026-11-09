import React from 'react';
import { 
  Server, 
  Database, 
  Layers, 
  GitBranch, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Workflow 
} from 'lucide-react';
import { personalDetails, introduction } from '../data/portfolioData';

export default function About() {
  const paragraphs = introduction.fullText.split('\n\n');

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Background & Philosophy
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-mono">
            Focusing on clean APIs, resilient database models, and scalable asynchronous communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Introduction Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e131f] border border-slate-800/90 shadow-xl space-y-5">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2.5">
                <span>Professional Profile</span>
                <span className="text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  Python Backend Developer
                </span>
              </h3>

              {paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-base leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Core Strengths Callout */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                  Core Technical Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>FastAPI & RESTful Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>PostgreSQL & ACID Transactions</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Kafka Event Stream Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pydantic Request Validation</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Inter-Service Communication</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Automated Testing with pytest</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Truthful Positioning Disclaimer Card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-0.5">Engineering Focus Notice</strong>
                My primary identity is as a Python Backend Developer. React.js, Node.js, and Express.js are utilized strictly for this portfolio web application and full-stack integration comprehension.
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & Backend Focus Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Experience Card */}
            <div className="p-5 rounded-xl bg-[#0e131f] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Professional Experience</div>
                <div className="text-2xl font-bold text-white mt-0.5">{personalDetails.experience}</div>
                <div className="text-xs text-slate-400">{personalDetails.company}</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <Server className="w-6 h-6" />
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-5 rounded-xl bg-[#0e131f] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Primary Stack</div>
                <div className="text-xl font-bold text-white mt-0.5">Python & FastAPI</div>
                <div className="text-xs text-slate-400">PostgreSQL • Kafka • Redis</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#0e131f] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Location & Availability</div>
                <div className="text-xl font-bold text-white mt-0.5">{personalDetails.location}</div>
                <div className="text-xs text-slate-400">Open to On-site & Remote Backend Roles</div>
              </div>
              <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                <Cpu className="w-6 h-6" />
              </div>
            </div>

            {/* Asynchronous Resiliency Highlight */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-[#111625] border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                <Workflow className="w-4 h-4" />
                <span>BACKEND DESIGN PRINCIPLE</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1.5">
                Reliability Over Premature Complexity
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritizing deterministic database transactions, explicit error handling, and robust schema validation to ensure backend systems behave reliably under operational loads.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

