import React, { useState } from 'react';
import { Mail, Download, Github, Linkedin, Server, Database, Cpu, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails, heroContent } from '../data/portfolioData';
import Card3D from '../components/Card3D';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const [activeNode, setActiveNode] = useState(null);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -76;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const backendNodes = [
    { id: 'api', label: 'FastAPI Gateway', sub: 'REST & Pydantic', icon: Server, color: 'text-emerald-400' },
    { id: 'db', label: 'PostgreSQL DB', sub: 'SQLAlchemy ORM', icon: Database, color: 'text-sky-400' },
    { id: 'kafka', label: 'Kafka Streams', sub: 'Event Pub/Sub', icon: Cpu, color: 'text-emerald-400' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-minimal"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />

      <div className="bs-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-medium border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>{heroContent.availability}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <div className="text-base sm:text-lg font-mono font-semibold text-[var(--accent)] tracking-wide">
                Hi, I'm {personalDetails.name}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                {heroContent.role}
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {heroContent.tagline}
            </p>

            {/* Exactly Two Side-by-Side CTAs: Contact Me & Download Resume */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA: Contact Me */}
              <MagneticButton
                onClick={() => handleScroll('contact')}
                className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[#0B0F17] font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </MagneticButton>

              {/* Secondary CTA: Download Resume */}
              <MagneticButton
                href={personalDetails.resumeUrl}
                download="Balaji_Yagateela_Resume.pdf"
                className="px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-secondary)] hover:border-[var(--accent)] text-[var(--text-primary)] font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-200 cursor-pointer"
                title="Download verified resume PDF"
              >
                <Download className="w-4 h-4 text-[var(--accent)]" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-[var(--border)] text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
              <MagneticButton
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Balajiyagateela</span>
              </MagneticButton>

              <span className="text-[var(--text-secondary)] opacity-60">•</span>

              <MagneticButton
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent)]" />
                <span>LinkedIn</span>
              </MagneticButton>
            </div>

            {/* Live Backend System Node Status Strip */}
            <div className="pt-2">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-sm shadow-card">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--border)] text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-[var(--accent)] font-bold">
                    <Activity className="w-4 h-4 animate-pulse" />
                    BACKEND SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-xs text-emerald-400 font-bold font-mono">STATUS: OPERATIONAL</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {backendNodes.map((node) => {
                    const NodeIcon = node.icon;
                    return (
                      <div
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`p-2.5 rounded-lg border transition-all duration-200 ${
                          activeNode === node.id
                            ? 'border-[var(--accent)] bg-[var(--surface-secondary)] scale-[1.02]'
                            : 'border-[var(--border)] bg-[var(--surface-secondary)]/70'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <NodeIcon className={`w-4 h-4 ${node.color}`} />
                          <span className="font-heading font-semibold text-xs sm:text-sm text-[var(--text-primary)] truncate">
                            {node.label}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-[var(--text-secondary)] truncate">
                          {node.sub}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Authentic Photograph in 3D Perspective Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[340px] sm:max-w-[360px]">
              
              <Card3D maxTilt={4} className="p-2.5 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-2xl">
                {/* Photo Element */}
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[var(--surface-secondary)]">
                  <img
                    src={personalDetails.photoUrl}
                    alt={`${personalDetails.name} - Python Backend Developer`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                  {/* Identification Pill at bottom - Solid dark glassmorphic badge for razor-sharp typography in all themes */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0B0F17]/95 border border-slate-700/80 shadow-2xl">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div>
                        <div className="font-heading font-bold text-sm sm:text-base text-white tracking-tight">
                          {personalDetails.name}
                        </div>
                        <div className="text-xs font-mono font-medium text-emerald-400">
                          {personalDetails.company}
                        </div>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                        Backend Dev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technical Node Chips below photo */}
                <div className="grid grid-cols-2 gap-2 mt-2.5 font-mono text-xs sm:text-sm">
                  <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-medium flex items-center justify-center gap-1.5">
                    <Server className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span className="truncate">Python & FastAPI</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-medium flex items-center justify-center gap-1.5">
                    <Database className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span className="truncate">PostgreSQL & Kafka</span>
                  </div>
                </div>
              </Card3D>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
