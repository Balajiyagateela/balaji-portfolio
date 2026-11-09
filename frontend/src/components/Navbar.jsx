import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// EXACT 6 navigation items:
// Home | About | Skills | Projects | Experience | Contact
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  // Scroll detection for sticky header styling & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 160;

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? isDark
            ? 'bg-[#0B0F17]/92 backdrop-blur-md border-b border-[#30363D]/70 shadow-lg shadow-black/30'
            : 'bg-[#F3F4F6]/92 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Identity & Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Balaji Yagateela - Home"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
              isDark 
                ? 'bg-[#161B22] border border-[#30363D] text-emerald-400 group-hover:border-emerald-500/50'
                : 'bg-white border border-[#E2E8F0] text-emerald-600 shadow-sm group-hover:border-emerald-400'
            }`}>
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className={`font-semibold tracking-tight text-sm sm:text-base block transition-colors ${
                isDark ? 'text-[#E5E7EB] group-hover:text-emerald-400' : 'text-[#0F172A] group-hover:text-emerald-600'
              }`}>
                {personalDetails.name}
              </span>
              <span className={`text-[11px] font-mono block -mt-0.5 ${
                isDark ? 'text-emerald-400' : 'text-emerald-600 font-medium'
              }`}>
                Python Backend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu (Exact 6 items) */}
          <nav 
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-colors ${
              isDark
                ? 'border-[#30363D] bg-[#161B22]/80 backdrop-blur-md'
                : 'border-[#E2E8F0] bg-white/90 backdrop-blur-md shadow-sm'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? isDark
                        ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                        : 'text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold'
                      : isDark
                        ? 'text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#1F242C]'
                        : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Toolbar: Dark/Light Mode toggle & Mobile menu button */}
          <div className="flex items-center gap-2">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`p-2 rounded-lg transition-colors border cursor-pointer ${
                isDark
                  ? 'bg-[#161B22] border-[#30363D] text-amber-400 hover:text-amber-300 hover:border-[#484F58]'
                  : 'bg-white border-[#E2E8F0] text-amber-600 hover:text-amber-700 shadow-sm'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              className={`md:hidden p-2 rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-[#161B22] border-[#30363D] text-[#E5E7EB]'
                  : 'bg-white border-[#E2E8F0] text-[#0F172A] shadow-sm'
              }`}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Exact 6 items) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-b overflow-hidden ${
              isDark
                ? 'bg-[#0B0F17]/98 border-[#30363D]'
                : 'bg-white/98 border-[#E2E8F0] shadow-lg'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? isDark
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : isDark
                          ? 'text-[#94A3B8] hover:bg-[#161B22] hover:text-[#E5E7EB]'
                          : 'text-[#475569] hover:bg-slate-100 hover:text-[#0F172A]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}