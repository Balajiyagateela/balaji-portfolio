import React, { useEffect, useLayoutEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  // Reset scroll to top and clear any lingering section hash on full reload/refresh
  useLayoutEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      
      // If refreshed with an anchor hash like #skills, clear it so the browser does not anchor there
      if (window.location.hash && window.location.hash !== '#home') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch (_) {}
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
      } catch (_) {}
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--background)]">
        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Content Sections: Home -> About -> Skills -> Experience -> Projects -> Education -> Contact */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Clean Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
