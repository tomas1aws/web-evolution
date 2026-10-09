import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Methodology } from './sections/Methodology';
import { Solutions } from './sections/Solutions';
import { Philosophy } from './sections/Philosophy';
import { Segments } from './sections/Segments';
import { Team } from './sections/Team';
import { FinalCTA } from './sections/FinalCTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#15202B] selection:bg-[#103B5E] selection:text-white font-sans">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Sections Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Methodology />
        <Solutions />
        <Philosophy />
        <Segments />
        <Team />
        <FinalCTA />
        <Contact />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
