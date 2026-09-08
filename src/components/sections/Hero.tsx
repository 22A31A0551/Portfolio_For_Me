import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin } from 'lucide-react';
import { LeetCodeIcon, HackerRankIcon } from '../icons';
import { Container } from '../layout/Container';

// Minimalist Premium Tech SVGs
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E22D30]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15.5c0 1.38 1.13 2.5 2.5 2.5h10c1.38 0 2.5-1.12 2.5-2.5v-7h-15v7zm15-6h1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H17v-5zm-9-6c0-1.1.9-2 2-2s2 .9 2 2v2H8V3.5zm4 0c0-1.1.9-2 2-2s2 .9 2 2v2h-4V3.5z" />
  </svg>
);

const SpringIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#6DB33F]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07l14.14-14.14C17.26 3.12 14.76 2 12 2zm7.07 17.07C20.88 17.26 22 14.76 22 12c0-5.52-4.48-10-10-10-2.76 0-5.26 1.12-7.07 2.93L19.07 19.07z" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#F7DF1E]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v18H3V3zm11.38 12.81c-.26-.81-.84-1.39-1.89-1.39-1.07 0-1.63.56-1.63 1.25 0 .84.58 1.15 1.54 1.56.96.41 2.21.84 2.21 2.22 0 1.5-1.18 2.28-2.81 2.28-1.69 0-2.61-.75-2.93-1.92h1.49c.21.58.62.99 1.44.99.78 0 1.3-.39 1.3-1.05 0-.75-.46-1.03-1.39-1.42-.96-.4-2.31-.81-2.31-2.28 0-1.33 1.05-2.19 2.58-2.19 1.5 0 2.37.69 2.68 1.75h-1.42zm4.84-2.94h1.52v7.1c0 1.58-.87 2.28-2.47 2.28-1.58 0-2.39-.73-2.58-1.88h1.46c.16.58.54.96 1.12.96.6 0 .97-.31.97-.99v-7.47z"/>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B1120]">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20 -z-10" />

      {/* High-Performance Radial Glows */}
      <div 
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }} 
      />
      <div 
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)' }} 
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3 text-text/90">
              <span className="text-text/60">I am a</span>
              <span className="text-accent">
                <Typewriter
                  options={{
                    strings: [
                      'Software Developer',
                      'Full Stack Developer',
                      'Java Developer',
                      'React Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </div>

            <p className="text-lg text-text/60 mb-10 max-w-lg leading-relaxed">
              I build modern, scalable, and user-friendly web applications using React, Spring Boot, and modern web technologies.
            </p>


            <div className="flex items-center gap-6">
              <a
                href="https://github.com/22A31A0551"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/40 hover:text-accent transition-all hover:scale-110"
                title="GitHub - 22A31A0551 (VENKATA VAMSI PEMMADA)"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/venkatavamsipemmada/"
                target="_blank"
                rel="noopener"
                className="text-text/40 hover:text-accent transition-all hover:scale-110"
                title="Venkata Vamsi Pemmada | LinkedIn"
                aria-label="Venkata Vamsi Pemmada | LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://leetcode.com/u/Venkata-Vamsi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/40 hover:text-accent transition-all hover:scale-110"
                title="LeetCode - Venkata-Vamsi"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon size={28} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/22A31A0551"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/40 hover:text-accent transition-all hover:scale-110"
                title="HackerRank - 22A31A0551"
                aria-label="HackerRank Profile"
              >
                <HackerRankIcon size={28} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Profile Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            {/* Glowing Background Effect */}
            <div 
              className="absolute -inset-4 rounded-full animate-pulse pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)' }} 
            />

            <div className="relative z-10 w-full aspect-square glass rounded-full overflow-hidden border-4 border-white/10 group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20" />

              {/* Animated Avatar / Illustration Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-20"
                >
                  <div className="w-full h-full border-[20px] border-dashed border-accent/30 rounded-full" />
                </motion.div>

                <motion.img
                  src="/hero-illustration.png"
                  alt="Developer Illustration"
                  loading="eager"
                  fetchPriority="high"
                  className="w-[85%] h-[85%] object-contain rounded-full z-10 will-change-transform"
                  animate={{ 
                    scale: [1, 1.03, 1],
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />

              </div>
            </div>

            {/* Premium Animated Tech Badges */}
            {/* React Icon - Top Left */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -left-12 glass px-4 py-3 rounded-2xl border-accent/20 shadow-2xl z-20 flex items-center gap-3"
            >
              <ReactIcon />
              <div>
                <div className="text-[10px] text-text/40 font-medium uppercase tracking-wider">Frontend</div>
                <div className="text-xs font-bold text-white">React.js</div>
              </div>
            </motion.div>

            {/* Java Icon - Top Right */}
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-12 right-4 glass px-4 py-3 rounded-2xl border-accent/20 shadow-2xl z-20 flex items-center gap-3"
            >
              <JavaIcon />
              <div>
                <div className="text-[10px] text-text/40 font-medium uppercase tracking-wider">Language</div>
                <div className="text-xs font-bold text-white">Java</div>
              </div>
            </motion.div>

            {/* Spring Boot Icon - Bottom Right */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 -right-12 glass px-4 py-3 rounded-2xl border-accent/20 shadow-2xl z-20 flex items-center gap-3"
            >
              <SpringIcon />
              <div>
                <div className="text-[10px] text-text/40 font-medium uppercase tracking-wider">Backend</div>
                <div className="text-xs font-bold text-white">Spring Boot</div>
              </div>
            </motion.div>

            {/* JavaScript Icon - Bottom Left */}
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, 4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-12 left-4 glass px-4 py-3 rounded-2xl border-accent/20 shadow-2xl z-20 flex items-center gap-3"
            >
              <JSIcon />
              <div>
                <div className="text-[10px] text-text/40 font-medium uppercase tracking-wider">Language</div>
                <div className="text-xs font-bold text-white">JavaScript</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { Hero };
