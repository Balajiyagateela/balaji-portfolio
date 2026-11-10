import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Navigation items:
// Home | About | Skills | Experience | Projects | Contact
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  // Detect scroll offset for sticky header styling & active section indicator
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="bs-container">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Balaji Yagateela - Home"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-200 shadow-sm shrink-0">
              <span className="font-heading font-bold text-base tracking-tight">BY</span>
            </div>
            <div>
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-[var(--text-primary)] block transition-colors group-hover:text-[var(--accent)]">
                {personalDetails.name}
              </span>
              <span className="text-xs font-mono font-semibold text-[var(--accent)] block -mt-0.5">
                {personalDetails.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md shadow-sm"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#0B0F17] bg-[var(--accent)] font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Toolbar: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200 cursor-pointer shadow-sm"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open mobile menu"
              aria-expanded={isOpen}
              className="md:hidden p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition-colors cursor-pointer shadow-sm"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="bs-container py-4 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold border border-[var(--accent)]/30'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
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
