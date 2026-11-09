import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sun, Moon, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { getHealthStatus } from '../services/api';

// EXACT 7 navigation items as required:
// Home | About | Skills | Experience | Projects | Education | Contact
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [backendHealth, setBackendHealth] = useState({ checked: false, online: false });
  const { isDark, toggleTheme } = useTheme();

  // Scroll detection for sticky header styling & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick backend health check
  useEffect(() => {
    let mounted = true;
    getHealthStatus().then(res => {
      if (mounted) {
        setBackendHealth({
          checked: true,
          online: res.success,
        });
      }
    });
    return () => { mounted = false; };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-blue-900/30 shadow-lg shadow-black/40'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          
          {/* Identity & Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-blue-600/15 border border-blue-500/30 text-blue-400 group-hover:border-blue-400/80 group-hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.5)]'
                : 'bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-100'
            }`}>
              <Terminal className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <span className={`font-bold tracking-tight text-base sm:text-lg block transition-colors ${
                isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
              }`}>
                {personalDetails.name}
              </span>
              <span className="text-[11px] font-mono block -mt-1 text-blue-500 dark:text-blue-400 font-medium">
                Python Backend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu (Exact 7 items) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full border border-slate-200/60 dark:border-blue-950/60 bg-slate-100/60 dark:bg-[#070d1c]/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-white bg-blue-600 shadow-[0_0_15px_-2px_rgba(59,130,246,0.6)]'
                        : 'text-white bg-blue-600 shadow-sm'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Toolbar: Live API status, Resume button, Dark/Light Mode toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live API Heartbeat */}
            <div
              title={backendHealth.online ? 'Backend API: Online' : 'Backend API: Standby'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                backendHealth.online ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'
              }`} />
              <span className="hidden xl:inline text-[10px]">API: {backendHealth.online ? 'ONLINE' : 'ACTIVE'}</span>
            </div>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all border ${
                isDark
                  ? 'bg-blue-950/40 border-blue-500/30 text-blue-300 hover:bg-blue-900/40 hover:border-blue-400'
                  : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className={`p-2 rounded-lg transition-colors border ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:text-amber-300'
                  : 'bg-slate-100 border-slate-200 text-blue-600 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Right Controls: Dark Toggle & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-amber-400' 
                  : 'bg-slate-100 border-slate-200 text-blue-600'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white' 
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
              aria-label="Toggle navigation drawer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-1 shadow-2xl ${
              isDark 
                ? 'bg-[#030712]/98 border-blue-900/40 text-slate-200' 
                : 'bg-white/98 border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/40 text-xs font-mono text-slate-400">
              <span>Navigation Menu</span>
              <button
                onClick={() => { setIsOpen(false); onOpenResume(); }}
                className="text-blue-500 font-semibold hover:underline"
              >
                View Resume →
              </button>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : isDark
                        ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
