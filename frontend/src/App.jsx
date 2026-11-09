import React, { useState } from 'react';
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
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
        {/* Top Sticky Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Portfolio Sections in Exact Sequence:
            Home -> About -> Skills -> Experience -> Projects -> Education -> Contact */}
        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Printable / Viewable Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
