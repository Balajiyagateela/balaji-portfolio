import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import BackendKnowledge from './sections/BackendKnowledge';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <BackendKnowledge />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
