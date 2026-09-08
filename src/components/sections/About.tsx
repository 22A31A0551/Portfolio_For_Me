import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, GraduationCap } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const About = () => {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle 
          title="About Me" 
          subtitle="A passionate developer with a knack for building clean, efficient, and user-centric solutions."
        />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent font-medium mb-2 text-lg">Hello, I'm</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Venkata Vamsi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Pemmada
              </span>
            </h3>
            <p className="text-text/60 leading-relaxed mb-8">
              Passionate Computer Science student skilled in Java, Spring Boot, React.js, and full-stack development. Experienced in building responsive web applications, REST APIs, and real-world software solutions with a strong focus on problem-solving and clean development practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-accent/20 to-purple-500/20 flex items-center justify-center">
                 <User size={120} className="text-accent/20" />
              </div>
            </div>
            {/* Decorative elements */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)' }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)' }}
            />
          </motion.div>
        </div>

        {/* Detail Cards: Projects, Internships, Certifications */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Briefcase size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Projects</h4>
              <span className="text-accent font-semibold text-base mb-1">4+ Projects</span>
              <p className="text-text/40 text-xs">Personal & Academic Development</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Internships</h4>
              <span className="text-accent font-semibold text-base mb-1">2 Internships</span>
              <p className="text-white/80 text-sm font-medium leading-relaxed">OperaBox & Infosys</p>
              <p className="text-text/40 text-xs mt-0.5">Java & Python Development</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 h-full flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Certifications</h4>
              <span className="text-accent font-semibold text-base mb-1">5+ Certifications</span>
              <p className="text-text/40 text-xs">Professional Credentials Earned</p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { About };
