import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { getHealthStatus } from '../services/api';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Architecture', href: '#knowledge' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [backendHealth, setBackendHealth] = useState({ checked: false, online: false });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick background health probe on mount
  useEffect(() => {
    let isMounted = true;
    getHealthStatus().then((result) => {
      if (isMounted) {
        setBackendHealth({
          checked: true,
          online: result.success,
          mailerReady: result.data?.mailerReady,
        });
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-400/60 transition-colors">
              <Terminal className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <div>
              <span className="font-semibold text-slate-100 tracking-tight block text-base group-hover:text-blue-400 transition-colors">
                {personalDetails.name}
              </span>
              <span className="text-xs font-mono text-slate-400 block -mt-0.5">
                python_backend_dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Live API Status Badge & Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Backend Connection Indicator */}
            <div
              title={
                backendHealth.checked
                  ? backendHealth.online
                    ? 'Node/Express API connected'
                    : 'Backend API offline (run backend on port 5000)'
                  : 'Checking backend status...'
              }
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  backendHealth.checked
                    ? backendHealth.online
                      ? 'bg-emerald-400 animate-pulse'
                      : 'bg-amber-400'
                    : 'bg-slate-500'
                }`}
              />
              <span className="text-slate-400 text-[11px]">
                {backendHealth.checked
                  ? backendHealth.online
                    ? 'API: ONLINE'
                    : 'API: STANDBY'
                  : 'API: CHECKING'}
              </span>
            </div>

            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20 flex items-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0d14]/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span>Navigation</span>
            <span className="flex items-center gap-1 text-[11px]">
              <span
                className={`w-2 h-2 rounded-full ${
                  backendHealth.online ? 'bg-emerald-400' : 'bg-amber-400'
                }`}
              />
              {backendHealth.online ? 'Backend Online' : 'Backend Standby'}
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-800/60 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
