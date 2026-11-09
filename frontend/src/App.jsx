import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
        {/* Top Sticky Navigation (Exact 6 items: Home | About | Skills | Projects | Experience | Contact) */}
        <Navbar />

        {/* Portfolio Sections in Exact Sequence:
            Home -> About -> Skills -> Projects -> Experience -> Contact */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Clean Footer with matching 6 nav links */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}