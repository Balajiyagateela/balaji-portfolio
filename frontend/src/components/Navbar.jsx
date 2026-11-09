import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// EXACT 6 navigation items as required:
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
      const sections = navLinks.map(l => l.href.substring(1));
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
            ? 'bg-[#030712]/92 backdrop-blur-xl border-b border-blue-900/30 shadow-lg shadow-black/40'
            : 'bg-white/92 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-200/50'
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
            aria-label="Balaji Yagateela - Home"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-blue-600/15 border border-blue-500/30 text-blue-400 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.5)]'
                : 'bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-100 group-hover:border-blue-300'
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
                Python Backend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu (Exact 6 items: Home, About, Skills, Projects, Experience, Contact) */}
          <nav 
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-colors ${
              isDark
                ? 'border-blue-950/70 bg-[#070d1c]/85 backdrop-blur-md shadow-inner shadow-black/40'
                : 'border-slate-200/80 bg-slate-100/80 backdrop-blur-md shadow-sm'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const isContact = link.name === 'Contact';

              if (isContact) {
                // Highlight Contact as a distinguished blue accent button
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`ml-1 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-[0_0_15px_-2px_rgba(59,130,246,0.6)]'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-md'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-white bg-blue-600/30 border border-blue-500/40 shadow-sm'
                        : 'text-blue-700 bg-blue-100/80 border border-blue-200 shadow-sm'
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

          {/* Right Toolbar: Dark/Light Mode toggle & Mobile menu button */}
          <div className="flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              className={`p-2 rounded-xl transition-all border cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:text-amber-300 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-blue-600 hover:bg-slate-200 hover:border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isOpen}
              className={`md:hidden p-2 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.25 }}
            className={`md:hidden border-b overflow-hidden ${
              isDark
                ? 'bg-[#050a17]/98 border-blue-900/40 backdrop-blur-2xl'
                : 'bg-white/98 border-slate-200 backdrop-blur-2xl shadow-xl'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                const isContact = link.name === 'Contact';

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isContact
                        ? 'bg-blue-600 text-white font-bold text-center mt-3 shadow-md shadow-blue-600/30'
                        : isActive
                          ? isDark
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                          : isDark
                            ? 'text-slate-300 hover:bg-slate-900 hover:text-white'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
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