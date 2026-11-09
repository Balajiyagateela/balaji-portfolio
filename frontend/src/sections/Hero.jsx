import React, { useRef } from 'react';
import { 
  Send, 
  Download, 
  Github, 
  Linkedin, 
  Server, 
  Database,
  ArrowRight
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalDetails, heroContent } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  // Subtle 3D Tilt effect tracking for desktop portrait card
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-150, 150], [6, -6]);
  const rotateY = useTransform(mouseXSpring, [-150, 150], [-6, 6]);

  const handleMouseMove = (e) => {
    // Disable 3D tilt on touch screens or small viewports
    if (window.innerWidth < 768 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -76;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden transition-colors ${
        isDark ? 'bg-[#0B0F17] bg-grid-subtle-dark' : 'bg-[#F3F4F6] bg-grid-subtle-light'
      }`}
    >
      {/* Restrained subtle ambient accent */}
      <div className="absolute inset-0 spot-emerald pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Supporting text, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Context Pill */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
              isDark 
                ? 'bg-[#161B22] border-[#30363D] text-[#94A3B8]' 
                : 'bg-white border-[#E2E8F0] text-[#475569] shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalDetails.role}</span>
              <span className="opacity-40">•</span>
              <span>{personalDetails.company}</span>
            </div>

            {/* Professional Headline & Subtitle */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
                isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
              }`}>
                {heroContent.headline}
              </h1>

              <p className={`text-lg sm:text-xl font-medium leading-snug ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}>
                {heroContent.subtitle}
              </p>
            </div>

            {/* One Short Supporting Sentence (Non-repetitive) */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${
              isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
            }`}>
              {heroContent.supportingText}
            </p>

            {/* Two Primary Actions Side by Side: Contact Me & Download Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* 1. Contact Me (Scrolls to Contact) */}
              <button
                onClick={handleScrollToContact}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer group"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* 2. Download Resume (Direct PDF Download) */}
              <a
                href={personalDetails.resumeUrl}
                download="Balaji_Yagateela_Resume.pdf"
                className={`px-5 py-3 rounded-xl text-sm font-medium flex items-center gap-2 border transition-all duration-200 cursor-pointer ${
                  isDark
                    ? 'bg-[#161B22] hover:bg-[#1C2128] text-[#E5E7EB] border-[#30363D] hover:border-[#484F58]'
                    : 'bg-white hover:bg-slate-50 text-[#0F172A] border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]'
                }`}
              >
                <Download className="w-4 h-4 text-emerald-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Professional Profiles */}
            <div className={`flex items-center gap-5 pt-3 border-t text-xs font-mono ${
              isDark ? 'border-[#30363D]/60 text-[#94A3B8]' : 'border-[#E2E8F0] text-[#64748B]'
            }`}>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Balajiyagateela</span>
              </a>

              <span className="opacity-40">•</span>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-subtle" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Professional Portrait with Subtle Depth */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[320px] sm:max-w-[350px]"
            >
              {/* Card Container */}
              <div className={`relative rounded-2xl overflow-hidden border p-2 portfolio-card ${
                isDark 
                  ? 'bg-[#161B22] border-[#30363D] shadow-card-dark' 
                  : 'bg-white border-[#E2E8F0] shadow-card-light'
              }`}>
                {/* Photo Element (Preserving original face, structure, hair, skin tone) */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[3/4]">
                  <img
                    src={personalDetails.photoUrl}
                    alt={`${personalDetails.fullName} - Python Backend Developer`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle lower gradient for metadata contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Identification strip at bottom of photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-[#0B0F17]/90 backdrop-blur-sm border border-[#30363D]/80 text-white">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-[#E5E7EB]">{personalDetails.fullName}</div>
                        <div className="text-[11px] font-mono text-emerald-400">Speshway Solutions</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Backend Dev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro tech tags below photo */}
                <div className="grid grid-cols-2 gap-2 mt-2 px-0.5 font-mono text-[11px]">
                  <div className={`p-2 rounded-lg border flex items-center justify-center gap-1.5 ${
                    isDark 
                      ? 'bg-[#0B0F17] border-[#30363D] text-[#94A3B8]' 
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]'
                  }`}>
                    <Server className="w-3.5 h-3.5 text-emerald-500" />
                    <span>FastAPI & REST</span>
                  </div>

                  <div className={`p-2 rounded-lg border flex items-center justify-center gap-1.5 ${
                    isDark 
                      ? 'bg-[#0B0F17] border-[#30363D] text-[#94A3B8]' 
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]'
                  }`}>
                    <Database className="w-3.5 h-3.5 text-cyan-subtle" />
                    <span>PostgreSQL & Kafka</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}