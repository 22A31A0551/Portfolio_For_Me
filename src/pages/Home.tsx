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
      {/* High-Performance Atmospheric Glows (Radial gradients replace expensive GPU blur filters) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full animate-blob-1 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[10%] right-[-10%] w-[65vw] h-[65vw] rounded-full animate-blob-2 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[40%] left-[20%] w-[45vw] h-[45vw] rounded-full animate-blob-3 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)' }}
        />
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
