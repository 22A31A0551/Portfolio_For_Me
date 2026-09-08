import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  FolderGit, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Building, 
  MapPin, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { projects } from '../../constants/projects';
import { Button } from '../ui/Button';

// Certifications constants
const certifications = [
  {
    title: "Python Technology Stack Intern Certificate",
    issuer: "Infosys Springboard",
    date: "2026",
    skills: ["Python", "Django", "Pandas", "Data Analytics"],
  },
  {
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2025",
    skills: ["Java Basics", "OOPs Concepts", "Collections Framework"],
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2025",
    skills: ["Python Programming", "Data Structures", "Algorithms"],
  },
  {
    title: "Java Full Stack Certification",
    issuer: "AICTE (All India Council for Technical Education)",
    date: "2025",
    skills: ["React.js", "Spring Boot", "MySQL", "RESTful Web Services"],
  }
];

// Experience Timeline data
const experienceTimeline = [
  {
    role: "Java Developer Intern",
    company: "OperaBox",
    location: "Remote",
    period: "July 2026 - Present",
    type: "Internship",
    description: "Working as a Java Developer Intern on a SaaS platform developed for CA firms, using Java, Spring Boot, PostgreSQL, and AWS.",
    highlights: [
      "Developing and maintaining backend services and REST APIs using Java and Spring Boot",
      "Implementing authentication and authorization using Spring Security",
      "Managing application data and optimizing queries using PostgreSQL",
      "Collaborating on cloud infrastructure and services on AWS"
    ]
  },
  {
    role: "Python Technology Stack Intern",
    company: "Infosys Springboard",
    location: "Remote / Hybrid",
    period: "Nov 2025 - Jan 2026",
    type: "Internship",
    description: "Developing specialized Python-based analytical systems. Processing library metrics, building clean visual interfaces using Django, and compiling capstone technology stack dashboards.",
    highlights: [
      "Built technology stack dependency visualization dashboards",
      "Worked with Pandas & NumPy for heavy data transformations",
      "Gained deep hands-on Python development experience"
    ]
  }
];

// HTML5 SVG Logo
const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E34F26]" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.042 5.25H7.07l.228 2.56h10.963l-.456 5.114-5.8 1.61-5.8-1.61-.31-3.48h2.49l.155 1.74 3.465.96 3.465-.96.228-2.56H7.755l-.47-5.26H18.81l-.268 3.016z"/>
  </svg>
);

// CSS3 SVG Logo
const CSSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1572B6]" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.042 5.25H7.07l.228 2.56h10.963l-.456 5.114-5.8 1.61-5.8-1.61-.31-3.48h2.49l.155 1.74 3.465.96 3.465-.96.228-2.56H7.755l-.47-5.26H18.81l-.268 3.016z"/>
  </svg>
);

// JavaScript SVG Logo
const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#F7DF1E]" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-1.123-.873-1.97-2.385-2.566-.874-.35-1.452-.656-1.452-1.2 0-.41.393-.656.96-.656.59 0 1.05.218 1.287.72l1.9-.186c-.197-1.42-1.135-2.32-2.73-2.32-1.946 0-3.14 1.116-3.14 2.875 0 1.83 1.376 2.45 2.82 3.02 1.026.415 1.616.72 1.616 1.353 0 .46-.437.81-1.114.81-.83 0-1.377-.37-1.55-.902l-1.9.208c.284 1.617 1.486 2.493 3.39 2.493 2.163 0 3.344-1.18 3.344-3.18 0-.022 0-.022 0-.022zm-9.336-.186v-6.386H10.59v6.52c0 1.29-.656 1.944-1.88 1.944-.766 0-1.355-.33-1.617-.874L5.2 20.354c.48 1.027 1.574 1.64 3.323 1.64 2.84 0 4.175-1.574 4.175-4.48l-.001.564z"/>
  </svg>
);

// React SVG Logo
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// Spring Boot SVG Logo
const SpringIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#6DB33F]" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.176 17.518c-1.393.916-3.328 1.157-5.021.734-.848-.212-1.636-.576-2.339-1.079-1.428-1.021-2.28-2.607-2.316-4.321v-.054c.026-.848.243-1.674.633-2.42.394-.755.952-1.392 1.624-1.849a6.386 6.386 0 0 1 4.545-.746c1.554.343 2.923 1.253 3.738 2.565.41.662.665 1.411.746 2.187.085.811-.03 1.634-.339 2.394a5.07 5.07 0 0 1-1.07 1.589zm-4.718-6.195c-.328-.158-.69-.228-1.054-.202a1.954 1.954 0 0 0-1.129.497 2.012 2.012 0 0 0-.583 1.18c-.046.362.015.73.176 1.058l2.59-2.533zm3.125.753c.125.326.175.674.148 1.021-.027.35-.152.686-.363.967a1.968 1.968 0 0 1-1.016.697c-.347.106-.714.108-1.062.008l2.293-2.693z"/>
  </svg>
);

// Java SVG Logo
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E22D30]" fill="currentColor">
    <path d="M0 15.65c0 3.01 2.93 5.46 6.54 5.46 3.61 0 6.54-2.45 6.54-5.46S10.15 10.19 6.54 10.19C2.93 10.19 0 12.64 0 15.65zm14.73-10.42c-.22.61.08 1.25.72 1.5l6.54 2.52c.64.25 1.34-.08 1.56-.69.22-.61-.08-1.25-.72-1.5l-6.54-2.52c-.64-.25-1.34.08-1.56.69zm-1.85 4.88c-.22.61.08 1.25.72 1.5l7.56 2.91c.64.25 1.34-.08 1.56-.69.22-.61-.08-1.25-.72-1.5l-7.56-2.91c-.64-.25-1.34.08-1.56.69zm-3.08-6.19c-.22.61.08 1.25.72 1.5l8.58 3.3c.64.25 1.34-.08 1.56-.69.22-.61-.08-1.25-.72-1.5l-8.58-3.3c-.64-.25-1.34.08-1.56.69z"/>
  </svg>
);

// Python SVG Logo
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#3776AB]" fill="currentColor">
    <path d="M12.002.015c-3.146 0-5.83.176-7.14 1.156C3.078 2.5 3.25 3.937 3.25 5.625v2.875h8.875V9.75H3.25v2.875c0 1.688-.172 3.125 1.612 4.453 1.31.98 3.994 1.156 7.14 1.156 3.146 0 5.83-.176 7.14-1.156C20.922 15.75 20.75 14.313 20.75 12.625V9.75h-8.875V8.5h8.875V5.625c0-1.688.172-3.125-1.612-4.453C17.83.19 15.147.015 12.002.015zM8.5 3.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
);

// MySQL SVG Logo
const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#4479A1]" fill="currentColor">
    <path d="M12.002 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12.002 0zm4.545 15.65c0 1.5-1.5 2.5-3.5 2.5s-3.5-1-3.5-2.5V12h7v3.65zM13.047 6.1c0-.6.4-1.1.9-1.1s.9.5.9 1.1-.4 1.1-.9 1.1-.9-.5-.9-1.1zm-3.08 1.5c0-.6.4-1.1.9-1.1s.9.5.9 1.1-.4 1.1-.9 1.1-.9-.5-.9-1.1zm-.5 3c0-.6.4-1.1.9-1.1s.9.5.9 1.1-.4 1.1-.9 1.1-.9-.5-.9-1.1z"/>
  </svg>
);

// Tech stack skills
const techSkills = [
  { name: "HTML5", icon: <HTMLIcon />, level: "95%", desc: "Structure & Semantics" },
  { name: "CSS3", icon: <CSSIcon />, level: "90%", desc: "Responsive Layouts" },
  { name: "JavaScript", icon: <JSIcon />, level: "88%", desc: "Interactivity & Logic" },
  { name: "React", icon: <ReactIcon />, level: "92%", desc: "Frontend Interfaces" },
  { name: "Spring Boot", icon: <SpringIcon />, level: "90%", desc: "Enterprise Services" },
  { name: "Java", icon: <JavaIcon />, level: "92%", desc: "Robust Backend APIs" },
  { name: "Python", icon: <PythonIcon />, level: "85%", desc: "Scripts & Analytics" },
  { name: "MySQL", icon: <MySQLIcon />, level: "88%", desc: "Relational Databases" }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>('Projects');

  const tabs = ['Projects', 'Experience', 'Certificates', 'Tech Stack'];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Glowing Orbs (Hardware-accelerated) */}
      <div 
        className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-10 animate-pulse"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-1/3 -left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, transparent 70%)' }}
      />

      <Container>
        <SectionTitle 
          title="Portfolio" 
          subtitle="A unified showcase of my software projects, internships, certified skills, and development expertise."
        />
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative border ${
                activeTab === tab
                  ? 'border-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                  : 'border-white/10 text-text/60 hover:text-white hover:border-white/20'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePortfolioTab"
                  className="absolute inset-0 bg-accent/10 rounded-full border border-accent/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === 'Projects' && <FolderGit size={16} />}
                {tab === 'Experience' && <Briefcase size={16} />}
                {tab === 'Certificates' && <GraduationCap size={16} />}
                {tab === 'Tech Stack' && <Sparkles size={16} />}
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Rendering with AnimatePresence */}
        <div className="min-h-[400px] max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* PROJECTS TAB */}
            {activeTab === 'Projects' && (
              <motion.div
                key="projects-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={projects.length > 0 ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" : "flex justify-center w-full"}
              >
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <Card key={project.title} className="p-6 overflow-hidden flex flex-col h-full group relative border border-white/5 bg-[#0e1726]/70 hover:border-accent/25 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Compact Card Header */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                          <FolderGit size={20} />
                        </div>
                        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-text/50 font-bold border border-white/5">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors line-clamp-3 min-h-[4.5rem] leading-snug" title={project.title}>
                        {project.title}
                      </h3>
                      
                      <p className="text-text/60 text-xs mb-4 leading-relaxed flex-grow line-clamp-5">
                        {project.description}
                      </p>

                      <div className="flex gap-1.5 mb-5 flex-wrap min-h-[2.75rem] content-start">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[8px] uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent font-bold border border-accent/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full gap-1.5 text-[10px] h-8 py-0">
                            <Github size={12} /> Code
                          </Button>
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="w-full gap-1.5 text-[10px] h-8 py-0">
                            <ExternalLink size={12} /> Demo
                          </Button>
                        </a>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="w-full max-w-lg p-10 rounded-3xl border border-dashed border-white/10 bg-[#0e1726]/10 flex flex-col items-center text-center py-16 backdrop-blur-sm shadow-2xl">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      <FolderGit size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Projects Coming Soon</h4>
                    <p className="text-text/40 text-sm max-w-sm leading-relaxed">
                      Exciting Spring Boot services, React dashboards, and custom software systems are under development and will be released here!
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === 'Experience' && (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 max-w-4xl mx-auto relative before:absolute before:inset-y-0 before:left-8 before:w-[2px] before:bg-white/10"
              >
                {experienceTimeline.map((exp, idx) => (
                  <div key={idx} className="relative pl-20 group">
                    {/* Floating Timeline Bullet */}
                    <div className="absolute left-4 top-2 w-8 h-8 rounded-full border-4 border-background bg-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={12} />
                    </div>

                    <Card className="p-8 border border-white/5 bg-[#0e1726]/70 relative overflow-hidden group-hover:border-accent/25 transition-all duration-300">
                      <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-accent/10 border-l border-b border-accent/20 text-[10px] uppercase font-bold text-accent tracking-widest">
                        {exp.type}
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-4 text-text/60 text-sm mt-1">
                            <span className="flex items-center gap-1.5"><Building size={14} /> {exp.company}</span>
                            <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-accent text-sm font-semibold">
                          <Calendar size={14} /> {exp.period}
                        </div>
                      </div>

                      <p className="text-text/70 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-2 border-t border-white/5 pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-text/40">Core Contributions</span>
                        <ul className="grid md:grid-cols-2 gap-2 mt-2">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs text-text/70 leading-normal">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CERTIFICATES TAB */}
            {activeTab === 'Certificates' && (
              <motion.div
                key="certificates-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications.map((cert, idx) => (
                  <Card key={idx} className="p-6 border border-white/5 bg-[#0e1726]/70 h-full flex flex-col justify-between group hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent pointer-events-none" />
                    
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck size={20} />
                      </div>
                      
                      <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-text/50 text-xs font-medium mb-4">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] text-text/40 uppercase tracking-widest font-bold">Skills Acquired</span>
                        <span className="text-accent text-[11px] font-bold">{cert.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 text-text/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}

            {/* TECH STACK TAB */}
            {activeTab === 'Tech Stack' && (
              <motion.div
                key="tech-stack-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
              >
                {techSkills.map((skill, idx) => (
                  <Card key={idx} className="p-6 border border-white/5 bg-[#0e1726]/70 hover:border-accent/25 transition-all duration-300 flex flex-col items-center text-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Icon container with high-impact color pulse */}
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/5 group-hover:border-accent/10 transition-all duration-300 relative shadow-inner">
                      {skill.icon}
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-accent transition-colors">
                      {skill.name}
                    </h4>
                    
                    <p className="text-[10px] text-text/40 font-semibold mb-4 tracking-wider uppercase">
                      {skill.desc}
                    </p>

                    {/* Compact glowing linear progress bar */}
                    <div className="w-full space-y-1.5 mt-auto">
                      <div className="flex justify-between text-[10px] font-bold text-text/40">
                        <span>PROFICIENCY</span>
                        <span className="text-accent group-hover:scale-105 transition-transform">{skill.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: idx * 0.05 }}
                          className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export { Portfolio };
