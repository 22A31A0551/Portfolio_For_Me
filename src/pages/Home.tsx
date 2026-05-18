import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Portfolio } from '../components/sections/Portfolio';
import { Contact } from '../components/sections/Contact';
import { ParticlesBackground } from '../components/ui/ParticlesBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 overflow-x-hidden relative">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] animate-blob-1" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/5 blur-[150px] animate-blob-2" />
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[120px] animate-blob-3" />
      </div>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
