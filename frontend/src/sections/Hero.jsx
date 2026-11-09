import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  Database, 
  Server, 
  Cpu, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails, introduction } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ onOpenResume }) {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [keywordIndex, setKeywordIndex] = useState(0);

  // Cycling animated keywords
  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % introduction.animatedKeywords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#030712] bg-tech-grid-dark' : 'bg-slate-50 bg-tech-grid-light'
      }`}
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
      <div className="absolute inset-0 radial-glow-royal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Animated Keywords, Intro, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border shadow-sm ${
              isDark 
                ? 'bg-slate-900/90 border-blue-900/40 text-slate-300' 
                : 'bg-white border-blue-200 text-slate-700 shadow-blue-500/5'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-blue-500 dark:text-blue-400 font-semibold">ROLE:</span>
              <span className="font-medium">{personalDetails.role}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-slate-500 dark:text-slate-400">{personalDetails.company}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-sm font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase font-semibold">
                Hi, I'm {personalDetails.name}
              </div>
              <h1 className={`text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Python Backend <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400">Developer</span>
              </h1>
            </div>

            {/* Animated Technology Keywords */}
            <div className="flex items-center gap-2.5 h-10 font-mono text-base sm:text-lg">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Specializing in</span>
              <div className="relative overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={keywordIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="inline-block font-bold text-blue-600 dark:text-blue-400 underline decoration-blue-500/50 underline-offset-4"
                  >
                    {introduction.animatedKeywords[keywordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Clear Introduction from Resume */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {introduction.summary}
            </p>

            {/* Action Buttons: View Projects, Contact Me, Resume */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => handleScroll('projects')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-white border-blue-900/40 hover:border-blue-500/50'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm'
                }`}
              >
                Contact Me
              </button>

              <button
                onClick={onOpenResume}
                className={`px-5 py-3.5 rounded-xl font-mono text-xs font-medium transition-all border cursor-pointer ${
                  isDark
                    ? 'bg-blue-950/30 hover:bg-blue-900/30 text-blue-300 border-blue-800/40'
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200'
                }`}
              >
                View Full Resume
              </button>

              {/* Fast Copy Email Action */}
              <button
                onClick={copyEmail}
                className={`px-3.5 py-3.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all border cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 border-slate-800 hover:text-white'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                }`}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">{personalDetails.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Proof Links */}
            <div className={`flex items-center gap-6 pt-4 border-t text-xs font-mono ${
              isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Balajiyagateela</span>
              </a>

              <span className="opacity-40">•</span>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Professional Portrait Frame with Blue Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-70 blur-xl animate-pulse-slow" />
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-b from-blue-500 via-blue-600 to-indigo-700 opacity-60" />

              {/* Main Photo Card Container */}
              <div className={`relative rounded-3xl overflow-hidden border shadow-2xl p-2 ${
                isDark 
                  ? 'bg-[#080d1a] border-blue-500/40 shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)]' 
                  : 'bg-white border-blue-200 shadow-xl shadow-blue-500/10'
              }`}>
                {/* Photo Element (Original Uploaded Photo - Unmodified Face & Structure) */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4]">
                  <img
                    src={personalDetails.photoUrl}
                    alt={`${personalDetails.fullName} - Python Backend Developer`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay at the base for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Badge at Bottom of Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-blue-500/30 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
                          <span>{personalDetails.fullName}</span>
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                        </div>
                        <div className="text-[11px] font-mono text-blue-400 font-medium">
                          Speshway Solutions Pvt. Ltd.
                        </div>
                      </div>
                      <div className="text-right font-mono text-[10px] text-slate-300">
                        <span className="px-2 py-0.5 rounded bg-blue-600/30 border border-blue-500/40 text-blue-300">
                          Dec 2025 – Present
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Architectural Spec Pills */}
                <div className="grid grid-cols-2 gap-2 mt-2 px-1 text-center font-mono text-[11px]">
                  <div className={`p-2 rounded-xl border flex items-center justify-center gap-1.5 ${
                    isDark 
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <Server className="w-3.5 h-3.5 text-blue-500" />
                    <span>FastAPI & REST</span>
                  </div>

                  <div className={`p-2 rounded-xl border flex items-center justify-center gap-1.5 ${
                    isDark 
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PostgreSQL & Kafka</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
