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
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="social-icon-btn w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[#25D366] hover:border-[#25D366] transition-colors cursor-pointer"
                title="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
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
