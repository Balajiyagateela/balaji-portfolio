import React, { useState } from 'react';
import { Mail, Download, Github, Linkedin, Server, Database, Cpu, Activity, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails, heroContent } from '../data/portfolioData';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>{heroContent.availability}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-mono font-medium text-[var(--accent)] tracking-wide">
                Hi, I'm {personalDetails.name}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
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
                className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[#0B0F17] font-semibold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </MagneticButton>

              {/* Secondary CTA: Download Resume */}
              <MagneticButton
                href={personalDetails.resumeUrl}
                download="Balaji_Yagateela_Resume.pdf"
                className="px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-secondary)] hover:border-[var(--accent)] text-[var(--text-primary)] font-medium text-sm flex items-center gap-2 transition-all duration-200 cursor-pointer"
                title="Download verified resume PDF"
              >
                <Download className="w-4 h-4 text-[var(--accent)]" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-secondary)]">
              <MagneticButton
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Balajiyagateela</span>
              </MagneticButton>

              <span className="opacity-30">•</span>

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
              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-sm">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    BACKEND SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">STATUS: OPERATIONAL</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {backendNodes.map((node) => {
                    const NodeIcon = node.icon;
                    return (
                      <div
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`p-2 rounded-lg border transition-all duration-200 ${
                          activeNode === node.id
                            ? 'border-[var(--accent)] bg-[var(--surface-secondary)] scale-[1.02]'
                            : 'border-[var(--border)] bg-[var(--surface-secondary)]/50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <NodeIcon className={`w-3.5 h-3.5 ${node.color}`} />
                          <span className="font-heading font-semibold text-xs text-[var(--text-primary)] truncate">
                            {node.label}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-muted)] truncate">
                          {node.sub}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Authentic Photograph with Technical Elevation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Outer Subtle Frame */}
              <div className="relative rounded-2xl overflow-hidden p-2 premium-card">
                
                {/* Photo Element */}
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[var(--surface-secondary)]">
                  <img
                    src={personalDetails.photoUrl}
                    alt={`${personalDetails.name} - Python Backend Developer`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Identification Pill at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[var(--background)]/90 backdrop-blur-md border border-[var(--border)] text-white shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-heading font-semibold text-[var(--text-primary)]">
                          {personalDetails.name}
                        </div>
                        <div className="text-[11px] font-mono text-[var(--accent)]">
                          {personalDetails.company}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30 font-medium">
                        Backend Dev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technical Node Chips below photo */}
                <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[11px]">
                  <div className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-secondary)] flex items-center justify-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Python & FastAPI</span>
                  </div>
                  <div className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-secondary)] flex items-center justify-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
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
