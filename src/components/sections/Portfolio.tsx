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
  Sparkles,
  FileText,
  Download 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { projects } from '../../constants/projects';
import { Button } from '../ui/Button';
import { 
  JavaIcon, 
  SpringIcon, 
  MicroservicesIcon, 
  ReactIcon, 
  JSIcon, 
  PythonIcon, 
  MySQLIcon, 
  HTMLIcon, 
  CSSIcon,
  DockerIcon,
  PostmanIcon
} from '../icons';

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
      "Developing and integrating a real-time chat application as part of the SaaS platform",
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

// Tech stack skills
const techSkills = [
  { name: "Java", icon: <JavaIcon size={34} />, desc: "Core & Enterprise APIs" },
  { name: "Spring Boot", icon: <SpringIcon size={34} />, desc: "REST APIs & Backend" },
  { name: "Microservices", icon: <MicroservicesIcon size={34} />, desc: "Distributed Architecture" },
  { name: "Docker", icon: <DockerIcon size={34} />, desc: "Containerization & Images" },
  { name: "Postman", icon: <PostmanIcon size={34} />, desc: "API Testing & Automation" },
  { name: "React", icon: <ReactIcon size={34} />, desc: "Frontend Interfaces" },
  { name: "JavaScript", icon: <JSIcon size={34} />, desc: "Modern ES6+ Logic" },
  { name: "MySQL", icon: <MySQLIcon size={34} />, desc: "Relational Databases" },
  { name: "Python", icon: <PythonIcon size={34} />, desc: "Scripts & Analytics" },
  { name: "HTML5", icon: <HTMLIcon size={34} />, desc: "Structure & Semantics" },
  { name: "CSS3", icon: <CSSIcon size={34} />, desc: "Responsive Layouts" }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>('Projects');

  const tabs = ['Projects', 'Experience', 'Certificates', 'Tech Stack', 'Resume'];

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
                {tab === 'Resume' && <FileText size={16} />}
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
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              >
                {techSkills.map((skill, idx) => (
                  <Card key={idx} className="p-6 border border-white/5 bg-[#0e1726]/70 hover:border-accent/25 transition-all duration-300 flex flex-col items-center text-center relative group overflow-hidden hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Icon container with high-impact color pulse */}
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/5 group-hover:border-accent/10 transition-all duration-300 relative shadow-inner">
                      {skill.icon}
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-accent transition-colors">
                      {skill.name}
                    </h4>
                    
                    <p className="text-[11px] text-text/50 font-medium leading-relaxed tracking-wide">
                      {skill.desc}
                    </p>
                  </Card>
                ))}
              </motion.div>
            )}

            {/* RESUME TAB */}
            {activeTab === 'Resume' && (
              <motion.div
                key="resume-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto space-y-8"
              >
                {/* Header Action Card */}
                <Card className="p-6 md:p-8 border border-white/10 bg-[#0e1726]/80 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                        Curriculum Vitae
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Venkata Vamsi Pemmada
                      </h3>
                      <p className="text-text/60 text-sm md:text-base max-w-xl mb-4 leading-relaxed">
                        Aspiring Software Engineer with hands-on experience in developing full-stack applications using Java, Spring Boot, React.js, and SQL.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs text-text/50 font-medium">
                        <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-text/70">B.Tech CSE (8.25 CGPA)</span>
                        <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-text/70">OperaBox Intern</span>
                        <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-text/70">Kakinada, AP, India</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                      <a
                        href="/resume.pdf"
                        download="Venkata_Vamsi_Pemmada_Resume.pdf"
                        className="w-full sm:w-auto"
                      >
                        <Button size="lg" className="w-full gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                          <Download size={18} />
                          Download Resume
                        </Button>
                      </a>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button variant="outline" size="lg" className="w-full gap-2 border-white/10 hover:border-white/30">
                          <ExternalLink size={18} />
                          Open PDF in New Tab
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* PDF Document Frame & Viewer */}
                <div className="rounded-2xl border border-white/10 bg-[#0b1320] shadow-2xl overflow-hidden">
                  {/* Mac-style Window Header Bar */}
                  <div className="px-4 py-3 bg-[#0f172a] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      <span className="ml-3 text-xs font-mono text-text/60 flex items-center gap-1.5">
                        <FileText size={14} className="text-accent" />
                        resume.pdf
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text/40 hidden sm:inline">106 KB • PDF Document</span>
                      <a
                        href="/resume.pdf"
                        download="Venkata_Vamsi_Pemmada_Resume.pdf"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text/70 hover:text-white transition-colors"
                        title="Download PDF"
                      >
                        <Download size={15} />
                      </a>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text/70 hover:text-white transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Embedded PDF Viewer */}
                  <div className="relative w-full h-[650px] md:h-[850px] bg-slate-900">
                    <iframe
                      src="/resume.pdf#toolbar=1"
                      title="Venkata Vamsi Pemmada - Resume PDF"
                      className="w-full h-full border-none"
                    />
                  </div>
                </div>

                {/* Structured Highlights (Recruiter-friendly summary cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Education */}
                  <Card className="p-6 border border-white/5 bg-[#0e1726]/70">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Education</h4>
                        <p className="text-xs text-text/50">Academic Credentials</p>
                      </div>
                    </div>
                    <div className="space-y-3.5 text-xs">
                      <div>
                        <p className="font-semibold text-white">B.Tech in Computer Science</p>
                        <p className="text-text/60">Pragati Engineering College • 2022–2026</p>
                        <p className="text-accent font-medium mt-0.5">CGPA: 8.25</p>
                      </div>
                      <div className="pt-2.5 border-t border-white/5">
                        <p className="font-semibold text-white">Intermediate (MPC)</p>
                        <p className="text-text/60">Aditya Junior College • 2020–2022</p>
                        <p className="text-accent font-medium mt-0.5">Percentage: 93.9%</p>
                      </div>
                      <div className="pt-2.5 border-t border-white/5">
                        <p className="font-semibold text-white">SSC</p>
                        <p className="text-text/60">Little Buds School • 2019–2020</p>
                        <p className="text-accent font-medium mt-0.5">Percentage: 91.1%</p>
                      </div>
                    </div>
                  </Card>

                  {/* Experience */}
                  <Card className="p-6 border border-white/5 bg-[#0e1726]/70">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Experience</h4>
                        <p className="text-xs text-text/50">Industry & Projects</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <p className="font-semibold text-white">Java Developer Intern</p>
                        <p className="text-purple-400 font-medium">OperaBox • July 2026 - Present</p>
                        <p className="text-text/60 mt-1 leading-relaxed">
                          SaaS platform for CA firms using Java, Spring Boot, PostgreSQL, real-time chat & AWS.
                        </p>
                      </div>
                      <div className="pt-2.5 border-t border-white/5">
                        <p className="font-semibold text-white">Featured Projects</p>
                        <p className="text-text/60 mt-0.5">• Gold Loan Management System</p>
                        <p className="text-text/60">• ProjectNexus Platform</p>
                      </div>
                    </div>
                  </Card>

                  {/* Certifications */}
                  <Card className="p-6 border border-white/5 bg-[#0e1726]/70">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Certifications</h4>
                        <p className="text-xs text-text/50">Verified Qualifications</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Java & Python Certifications</p>
                          <p className="text-text/50">Infosys SpringBoard</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Java Full Stack Certification</p>
                          <p className="text-text/50">AICTE</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Java Programming Fundamentals</p>
                          <p className="text-text/50">edX</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export { Portfolio };
