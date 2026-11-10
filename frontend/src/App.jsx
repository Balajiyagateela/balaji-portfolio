import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
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
  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--background)]">
        {/* Custom Interactive Cursor (fine-pointer desktop only) */}
        <CustomCursor />

        {/* Sticky Navigation (7 sections) */}
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
