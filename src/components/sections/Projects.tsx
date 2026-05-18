import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { projects } from '../../constants/projects';
import { Button } from '../ui/Button';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <Container>
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore some of my recent work, ranging from web applications to creative experiments."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-0 overflow-hidden flex flex-col h-full group">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                  {/* Placeholder image background */}
                  <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent/20">Project {i + 1}</span>
                  </div>
                  {/* Real image if exists */}
                  {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> */}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text/60 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="p-0 hover:text-accent gap-1">
                      <Github size={18} /> Code
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 hover:text-accent gap-1">
                      <ExternalLink size={18} /> Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline">View All Projects</Button>
        </div>
      </Container>
    </section>
  );
};

export { Projects };
