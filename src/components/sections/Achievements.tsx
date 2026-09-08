import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const achievements = [
  {
    title: "Best Developer Award",
    organization: "Tech Innovators Hub",
    date: "2023",
    description: "Awarded for exceptional performance in full-stack development and team leadership.",
    icon: <Trophy className="text-yellow-500" />
  },
  {
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    date: "2023",
    description: "Validation of expertise in developing, deploying, and maintaining applications on AWS.",
    icon: <Award className="text-accent" />
  },
  {
    title: "Hackathon Winner",
    organization: "Global Code Fest",
    date: "2022",
    description: "First place out of 500+ participants for building an AI-powered sustainability tool.",
    icon: <Star className="text-purple-500" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background/50">
      <Container>
        <SectionTitle 
          title="Key Achievements" 
          subtitle="A collection of my professional milestones, certifications, and awards."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full group hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start gap-4 p-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-xs text-accent font-medium mb-1">{achievement.date}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <div className="text-sm text-text/60 font-medium mb-3">
                      {achievement.organization}
                    </div>
                    <p className="text-sm text-text/40 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { Achievements };
