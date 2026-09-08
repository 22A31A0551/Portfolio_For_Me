export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Full Stack' | 'Java / Spring' | 'React' | 'Python';
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Gold Loan Management System",
    description: "Developed a full-stack Gold Loan Management System using Java, Spring Boot, React.js, and MySQL to manage customer loan records, repayments, authentication, and real-time business operations efficiently.",
    image: "/project-images/gold-loan.png",
    tags: ["Java", "Spring Boot", "React.js", "MySQL"],
    category: "Full Stack",
    github: "https://github.com/22A31A0551/MyApp-Frontend",
    demo: "https://srinubankers.vercel.app/",
  },
  {
    title: "Cyber Risk Assessment & Threat Intelligence Platform",
    description: "Developed a Cyber Risk Assessment & Threat Intelligence Platform that processed security-related data, classified cyber risks based on severity and likelihood, and automated risk analysis and report generation using Python.",
    image: "/project-images/cyber-threat.png",
    tags: ["Python", "React", "JS", "HTML5/CSS3"],
    category: "Python",
    github: "https://github.com/22A31A0551",
    demo: "https://github.com/22A31A0551",
  },
  {
    title: "ProjectNexus – Project Maintenance & Service Management Platform",
    description: "Developed a full-stack platform for managing project maintenance, support requests, bug tracking, and feature enhancement workflows. Implemented role-based dashboards and authentication for Admin, Manager, Developer, and Client using Spring Security and React JS.",
    image: "/project-images/project-nexus.png",
    tags: ["Java", "Spring Boot", "React JS", "MySQL", "Spring Security", "REST APIs"],
    category: "Full Stack",
    github: "https://github.com/22A31A0551",
    demo: "https://project-nexus-orcin-one.vercel.app/",
  }
];
