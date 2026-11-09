import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Shield, Phone, MapPin } from 'lucide-react';
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
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t transition-colors duration-300 py-12 ${
      isDark ? 'bg-[#02050c] border-blue-950/60 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200/60 dark:border-slate-800/80">
          
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-500 border border-blue-500/30">
                <Terminal className="w-4 h-4" />
              </div>
              <span className={`font-bold tracking-tight text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalDetails.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-600/10 text-blue-500 font-mono font-semibold">
                Python Backend Developer
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-md">
              Specialized in developing resilient REST APIs, microservices, and database-driven solutions with Python, FastAPI, and PostgreSQL.
            </p>
            <div className="pt-1 text-xs font-mono text-slate-500 flex flex-wrap gap-4">
              <span>{personalDetails.location}</span>
              <span>•</span>
              <span>{personalDetails.email}</span>
            </div>
          </div>

          {/* Quick Navigation Links (Exact 6 items) */}
          <div className="md:col-span-3 space-y-2">
            <span className={`text-xs font-mono uppercase tracking-wider font-bold block mb-2.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <span className={`text-xs font-mono uppercase tracking-wider font-bold block mb-2.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Connect
            </span>
            <div className="flex items-center md:justify-end gap-2.5">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Direct Email"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Back to Top"
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all shadow-md shadow-blue-600/30 cursor-pointer ml-1"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            <span>Stateless Architecture • Zero Database Storage</span>
          </div>
        </div>

      </div>
    </footer>
  );
}