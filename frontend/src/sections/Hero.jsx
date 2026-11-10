import React from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Database, Server, Code2, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails, heroContent } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -76;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-minimal"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />

      <div className="bs-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
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

            {/* Name & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                {heroContent.name}
              </h1>
              <div className="text-xl sm:text-2xl font-heading font-medium text-[var(--accent)]">
                {heroContent.role}
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {heroContent.tagline}
            </p>

            {/* Magnetic Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary CTA: View Projects */}
              <MagneticButton
                onClick={() => handleScroll('projects')}
                className="px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--background)] font-medium text-sm flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              {/* Secondary CTA: Contact Me */}
              <MagneticButton
                onClick={() => handleScroll('contact')}
                className="px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-secondary)] hover:border-[var(--accent)] text-[var(--text-primary)] font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
              </MagneticButton>

              {/* Download Resume Link */}
              <a
                href={personalDetails.resumeUrl}
                download="Balaji_Yagateela_Resume.pdf"
                className="px-4 py-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Download Resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Resume</span>
              </a>
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
                <span>LinkedIn Profile</span>
              </MagneticButton>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Design with subtle depth & photo */}
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
                    alt={`${personalDetails.fullName} - Python Backend Developer`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Identification Pill at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[var(--background)]/90 backdrop-blur-md border border-[var(--border)] text-white shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-heading font-semibold text-[var(--text-primary)]">
                          {personalDetails.fullName}
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
                    <Database className="w-3.5 h-3.5 text-[var(--accent)]" />
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
