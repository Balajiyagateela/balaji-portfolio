import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  FileCode2, 
  Database, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { personalDetails, introduction } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-400 font-medium">status:</span>
              <span>Python & Backend Engineering</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-sm font-mono text-blue-400 tracking-wider uppercase font-semibold">
                Hi, I'm {personalDetails.name}
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {introduction.headline}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 leading-snug">
                {introduction.supportingHeadline}
              </p>
            </div>

            {/* Quick Context Summary */}
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              Specialized in developing REST APIs, backend microservices, and database-driven solutions with <span className="text-slate-200 font-medium">Python</span>, <span className="text-slate-200 font-medium">FastAPI</span>, and <span className="text-slate-200 font-medium">PostgreSQL</span>. Experienced with asynchronous event processing using <span className="text-slate-200 font-medium">Apache Kafka</span> and caching via <span className="text-slate-200 font-medium">Redis</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
              >
                <span>View Backend Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
              >
                Contact Me
              </a>

              {/* Copy Email Fast Action */}
              <button
                onClick={copyEmail}
                className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 text-sm font-mono flex items-center gap-2 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">rajbalajiyagateela@gmail.com</span>
                    <span className="sm:hidden">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <span className="text-slate-600">Company:</span>
                <span className="text-slate-300">{personalDetails.company}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Backend Terminal Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>uvicorn main:app --reload</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Terminal Code & Log Stream */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed bg-[#090d16]">
                <div>
                  <span className="text-slate-500">$ </span>
                  <span className="text-blue-400">python</span> -m venv .venv && source .venv/bin/activate
                </div>
                <div>
                  <span className="text-slate-500">$ </span>
                  <span className="text-emerald-400">uvicorn</span> app.main:app --host 0.0.0.0 --port 8000
                </div>

                <div className="pt-2 text-[11px] text-slate-400 space-y-1 border-t border-slate-800/80">
                  <p className="text-slate-500">INFO: Started server process [PID 4120]</p>
                  <p className="text-slate-500">INFO: Waiting for application startup.</p>
                  <p className="text-emerald-400">INFO: PostgreSQL connection pool initialized.</p>
                  <p className="text-violet-400">INFO: Kafka consumer joined group 'inventory-sync'.</p>
                  <p className="text-amber-400">INFO: Redis cache client connected.</p>
                  <p className="text-slate-300">INFO: Application startup complete. [Docs: /docs]</p>
                </div>

                {/* Simulated API Endpoint Request */}
                <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px]">
                  <div className="text-slate-400 mb-1 flex items-center justify-between">
                    <span>GET /api/v1/inventory/items</span>
                    <span className="text-emerald-400 font-bold">200 OK (14ms)</span>
                  </div>
                  <pre className="text-slate-300 overflow-x-auto text-[10px]">
{`{
  "status": "success",
  "role": "Python Backend Developer",
  "developer": "Balaji Yagateela",
  "tech_stack": ["FastAPI", "Postgres", "Kafka", "Redis"]
}`}
                  </pre>
                </div>
              </div>

              {/* Terminal Quick Specs Footer */}
              <div className="px-4 py-3 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>Python 3.10+</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PostgreSQL</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-violet-400" />
                  <span>Kafka</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
