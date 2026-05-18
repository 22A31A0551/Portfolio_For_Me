import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { skills } from '../../constants/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <Container>
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive list of technologies I work with to bring ideas to life."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {/* Since we don't have icons for each skill yet, we'll use first letter */}
                  <span className="text-xl font-bold">{skill.name[0]}</span>
                </div>
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <span className="text-xs text-text/40">{skill.category}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { Skills };
