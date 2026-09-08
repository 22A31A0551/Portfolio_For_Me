import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin } from 'lucide-react';
import { LeetCodeIcon, HackerRankIcon, ReactIcon, JavaIcon, SpringIcon, JSIcon } from '../icons';
import { Container } from '../layout/Container';

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
