import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[var(--border)] py-14 bg-[var(--background)] text-[var(--text-secondary)]">
      <div className="bs-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border)]">
          
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="font-heading font-bold text-lg text-[var(--text-primary)]">
                {personalDetails.name}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30 font-medium">
                {personalDetails.role}
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Building reliable backend applications and practical web solutions using Python, FastAPI, databases, and modern web technologies.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-2.5">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-2 md:text-right">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-2.5">
              Connect
            </span>
            <div className="flex items-center md:justify-end gap-2">
              <MagneticButton
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent)]" />
              </MagneticButton>

              <MagneticButton
                href={`mailto:${personalDetails.email}`}
                aria-label="Direct Email"
                className="social-icon-btn w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-9 h-9 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--background)] flex items-center justify-center transition-colors shadow-sm cursor-pointer ml-1"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-3 font-mono">
          <p>© {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved.</p>
          <div className="text-[11px]">
            Python Backend Developer Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}
