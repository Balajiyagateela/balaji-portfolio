import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
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
    <footer className={`border-t transition-colors py-12 ${
      isDark 
        ? 'bg-[#0B0F17] border-[#30363D]/60 text-[#94A3B8]' 
        : 'bg-[#F3F4F6] border-[#E2E8F0] text-[#475569]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b ${
          isDark ? 'border-[#30363D]/60' : 'border-[#E2E8F0]'
        }`}>
          
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${
                isDark 
                  ? 'bg-[#161B22] border-[#30363D] text-emerald-400' 
                  : 'bg-white border-[#E2E8F0] text-emerald-600 shadow-sm'
              }`}>
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className={`font-semibold tracking-tight text-base ${
                isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
              }`}>
                {personalDetails.name}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
              }`}>
                Python Backend Developer
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Focused on scalable REST APIs, event-driven architectures using Kafka, and reliable PostgreSQL data persistence.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 block mb-2">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-emerald-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-2 md:text-right">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 block mb-2">
              Connect
            </span>
            <div className="flex items-center md:justify-end gap-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-[#161B22] border-[#30363D] text-[#94A3B8] hover:text-[#E5E7EB] hover:border-emerald-500/50' 
                    : 'bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] shadow-sm hover:border-emerald-400'
                }`}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-[#161B22] border-[#30363D] text-[#94A3B8] hover:text-[#E5E7EB] hover:border-emerald-500/50' 
                    : 'bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] shadow-sm hover:border-emerald-400'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Direct Email"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-[#161B22] border-[#30363D] text-[#94A3B8] hover:text-[#E5E7EB] hover:border-emerald-500/50' 
                    : 'bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] shadow-sm hover:border-emerald-400'
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer ml-1"
                title="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved.</p>
          <div className="text-[11px] font-mono text-slate-400">
            Python & FastAPI Backend Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}