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
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    title: "HVS-Growth Company Website",
    description: "Developed a high-fidelity static company website for HVS-Growth to showcase services, brand value, and company overview. Built using React.js for the component architecture along with modern HTML5, CSS3, and JavaScript.",
    image: "/project-images/hvs-growth.png",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3"],
    category: "React",
    github: "https://github.com/",
    demo: "https://github.com/",
  }
];
