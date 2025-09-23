"use client";

import Image from "next/image";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect, useMemo } from "react";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  technologies: string[];
  detailedDescription: string;
  keyFeatures?: string[];
  techStack?: {
    frontend: string;
    backend: string;
    database: string;
    hosting: string;
  };
  outcomes?: string[];
  websiteUrl: string;
  githubUrl: string;
};

export default function Home() {
  const roles = useMemo(() => ["DevOps Engineer", "Multi-cloud Solution Architect"], []);
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < roles[roleIndex].length) {
        setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === roles[roleIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000); // 2-second gap before deleting
      } else if (isDeleting && charIndex === 0) {
        setRoleIndex((prev) => (prev + 1) % roles.length); // Cycle back to the first role
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roles, roleIndex]);

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "International Trade Fair",
      description: "A business engagement platform for customers to connect with exhibitors and manage their trade fair experience.",
      image: "/thumbnails/mmi-connect.png",
      technologies: ["MS SQL Server", "Azure", "CI/CD"],
      detailedDescription: "A full-featured business engagement platform with user authentication, event management, and order management. Built with Angular for the frontend and .Net for the backend API with MS SQL Server as the database.",
      keyFeatures: [
        "User authentication and role-based access",
        "Event scheduling and management",
        "Order tracking and reporting",
      ],
      techStack: {
        frontend: "Angular",
        backend: ".Net",
        database: "MS SQL Server",
        hosting: "Azure",
      },
      outcomes: [
        "Improved customer engagement by 40%",
        "Streamlined event management processes",
      ],
      websiteUrl: "https://mmiconnect.in/",
      githubUrl: "",
    },
    {
      id: 2,
      title: "Digitalize medical images",
      description: "SVAIM is a cutting-edge health record digitization platform for seamless management of medical images.",
      image: "/thumbnails/svasthiya.png",
      technologies: ["Node.js", "React.js", "MongoDB", "GCP"],
      detailedDescription: "SVAIM is a cutting-edge health record digitization platform. It&apos;s a patient-centric healthcare venture with the vision to transform how various players interact within the healthcare ecosystem. Provide medical images directly to your phone - accessible anytime, anywhere.",
      keyFeatures: [
        "Digitized medical image storage",
        "Secure and scalable architecture",
        "Mobile-friendly access",
      ],
      techStack: {
        frontend: "React.js",
        backend: "Node.js",
        database: "MongoDB",
        hosting: "GCP",
      },
      outcomes: [
        "Improved cooking skills for users",
        "Increased engagement through social networking features",
      ],
      websiteUrl: "https://www.svasthiya.in/",
      githubUrl: "",
    },
    {
      id: 3,
      title: "Cooking Training Platform",
      description: "A cooking training platform that offers online courses, video tutorials, and a social network for food enthusiasts",
      image: "/thumbnails/biteunite.png",
      technologies: ["PHP", "MySQL", "Azure"],
      detailedDescription: "A cooking training platform that offers online courses, video tutorials, and a social network for food enthusiasts to share recipes and cooking tips.",
      keyFeatures: [
        "Digitized medical image storage",
        "Secure and scalable architecture",
        "Mobile-friendly access",
      ],
      techStack: {
        frontend: "React.js",
        backend: "Node.js",
        database: "MongoDB",
        hosting: "GCP",
      },
      outcomes: [
        "Enhanced patient experience",
        "Reduced manual record-keeping errors",
      ],
      websiteUrl: "https://www.biteunite.com/",
      githubUrl: "",
    },
    {
      id: 4,
      title: "Skill Assessment Platform",
      description: "UAssess in-depth assessments help advance your company&apos;s tech and leadership skills.",
      image: "/thumbnails/uassess.png",
      technologies: ["Laravel", "MySQL", "AWS"],
      detailedDescription: "It&apos;s an assessment platform, having overall 1000+ assessments across various technologies and domains. It helps organizations to identify skill gaps, streamline hiring, and foster employee growth through targeted learning paths. also provides reports",
      keyFeatures: [
        "Digitized medical image storage",
        "Secure and scalable architecture",
        "Mobile-friendly access",
      ],
      techStack: {
        frontend: "React.js",
        backend: "Node.js",
        database: "MongoDB",
        hosting: "GCP"
      },
      outcomes: [
        "Enhanced patient experience",
        "Reduced manual record-keeping errors"
      ],
      websiteUrl: "https://www.productleadership.com/",
      githubUrl: ""
    },
    {
      id: 5,
      title: "E-commerce Organic Store",
      description: "A comprehensive e-commerce platform with a responsive website and mobile application.",
      image: "/thumbnails/etti-form-store.png",
      technologies: ["Next.js", "Supabase", "Vercel"],
      detailedDescription: "as",
      keyFeatures: [
        "Digitized medical image storage",
        "Secure and scalable architecture",
        "Mobile-friendly access",
      ],
      techStack: {
        frontend: "React.js",
        backend: "Node.js",
        database: "MongoDB",
        hosting: "GCP",
      },
      outcomes: [
        "Enhanced patient experience",
        "Reduced manual record-keeping errors",
      ],
      websiteUrl: "https://etti.in/",
      githubUrl: "",
    },
    {
      id: 6,
      title: "Expense on the go",
      description: "A personal expense tracking mobile app that helps users manage their finances on the go.",
      image: "/thumbnails/expenseothego.png",
      technologies: ["Node.js", "MongoDB", "AWS"],
      detailedDescription: "A personal expense tracking mobile app that helps users manage their finances on the go. Features include expense categorization, budget setting, and visual reports to track spending habits.",
      keyFeatures: [
        "Digitized medical image storage",
        "Secure and scalable architecture", 
        "Mobile-friendly access",
      ],
      techStack: {
        frontend: "React.js",
        backend: "Node.js",
        database: "MongoDB",
        hosting: "GCP",
      },
      outcomes: [
        "Enhanced patient experience",
        "Reduced manual record-keeping errors",
      ],
      websiteUrl: "",
      githubUrl: "",
    },
  ];

  return (
    <div className="page-root">
      {/* Header/Navigation */}
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">Nagaraj Jayaraman</h1>
          <nav className="nav-links">
            {["About", "Education", "Experience", "Projects", "Skills"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section">
        <div className="container hero">
        <div className="hero-left" style={{ display: "flex", justifyContent: "center" }}>
            <div className="avatar">
              {/* Replace with your profile picture */}
              <Image 
                src="/profile-picture/nagaraj-jayaraman-1.jpeg"
                alt="Nagaraj Jayaraman" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="hero-right">
            <h1 className="lead">
              <span className="title">Hi, I&apos;m </span>
              <span className="role">
                {currentRole}
              </span>
            </h1>
            <p className="lead">
              I build in designing scalable architectures, automating deployments, and managing cloud infrastructure across AWS, Azure, and GCP. Skilled in driving cost optimization, high availability, and secure solutions, enabling businesses to innovate faster and more efficiently.
            </p>
            <div className="btn-row">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/1jtkdiPxJsjkfFI5-eFvZrEQsyxtgHcp1/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="hero-right">
              <p className="lead" style={{ marginBottom: "1rem" }}>
                I&apos;m a passionate software developer with expertise in building modern web applications. My journey in software development started with a curiosity about how things work on the internet, which led me to dive deep into web technologies.
              </p>
              <p className="lead" style={{ marginBottom: "1rem" }}>
                I enjoy solving complex problems and creating intuitive, efficient solutions. My approach combines technical skills with creative thinking to deliver high-quality software products.
              </p>
              <p>
                When I&apos;m not coding, you might find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </div>
            <div className="hero-right">
              <h3 className="text-xl font-semibold" style={{ marginBottom: "1rem" }}>My Interests</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Web Development", icon: "M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v10H7V7z" },
                  { name: "Mobile Apps", icon: "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h10V4H7zm5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" },
                  { name: "Cloud Computing", icon: "M5 16a4 4 0 110-8 5.5 5.5 0 0110.9-1.5A4.5 4.5 0 1119 16H5z" },
                  { name: "UI/UX Design", icon: "M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z" },
                  { name: "Machine Learning", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 4h2v6h3v2h-8v-2h3V8z" },
                  { name: "Open Source", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 4h2v6h3v2h-8v-2h3V8z" },
                ].map((interest, index) => (
                  <div key={index} className="card" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 icon-accent"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={interest.icon} />
                    </svg>
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="space-y-8">
            {/* Replace with your actual education details */}
            <div className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4" style={{ marginBottom: "1rem" }}>
                <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Science</h3>
                <p className="icon-accent">2008 - 2012</p>
              </div>
              <p className="text-lg mb-2">Anna University</p>
              <p className="muted">Graduated with First Class Honors. Specialized in Software Engineering and Data Structures.</p>
            </div>
            <div className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4" style={{ marginBottom: "1rem" }}>
                <h3 className="text-xl font-semibold">High School - 12th Standard</h3>
                <p className="icon-accent">2006 - 2008</p>
              </div>
              <p className="text-lg mb-2">Sri Ramakrishna Higher Secondary School</p>
              <p className="muted">Specialized in Mathematics and Computer Science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="space-y-8">
            {/* Replace with your actual work experience */}
            <div className="timeline">
              {[
                {
                  title: "DevOps & Multi-Cloud Solution Architect",
                  company: "Freelancer, Bangalore",
                  duration: "July 2024 - Present",
                  responsibilities: [
                    "Designed and developed MVPs for IT, e-commerce, and education platforms using Next.js, Supabase and Vercel.",
                    "Delivered end-to-end cloud and DevOps solutions across AWS, Azure, and GCP.",
                    "Continuously learning advanced cloud services, including AI integrations.",
                  ],
                },
                {
                  title: "Technical Consultant",
                  company: "Appzoy Technologies Pvt Ltd, Bangalore",
                  duration: "January 2024 - June 2024",
                  responsibilities: [
                    "Consulted on cloud architecture and DevOps strategies for enterprise clients.",
                    "Designed scalable solutions across AWS, Azure, and GCP to meet business requirements.",
                    "Advised development teams on best practices for CI/CD, security, and cost optimization.",
                    "Supported technology evaluations and provided recommendations for digital transformation projects.",
                  ],
                },
                {
                  title: "Technical Lead",
                  company: "Appzoy Technologies Pvt Ltd, Bangalore",
                  duration: "October 2020 - December 2024",
                  responsibilities: [
                    "Led a team in developing scalable web and mobile applications.",
                    "Designed cloud solutions across AWS, Azure, and GCP .",
                    "Introduced microservices and modern frameworks for better performance.",
                    "Mentored developers and improved Agile delivery practices"
                  ],
                },
                {
                  title: "Senior Software Engineer",
                  company: "Appzoy Technologies Pvt Ltd, Bangalore",
                  duration: "October 2018 - September 2020",
                  responsibilities: [
                    "Developed and maintained web applications using PHP , Laravel, and JavaScript frameworks.",
                    "Built REST APIs and optimized MySQL/MongoDB databases for performance.",
                    "Collaborated with teams to deliver client-focused software solutions.",
                    "Contributed to code reviews and improved overall code quality."
                  ],
                },
                {
                  title: "Web Services Developer",
                  company: "Appzoy Technologies Pvt Ltd, Bangalore",
                  duration: "October 2016 - September 2018",
                  responsibilities: [
                    "Designed and deployed cloud infrastructure on AWS and Azure.",
                    "Implemented monitoring and logging solutions for cloud environments.",
                    "Ensured high availability and disaster recovery for critical systems.",
                  ],
                },
                {
                  title: "Full Stack Developer",
                  company: "Sysinnova Infotech Pvt Ltd, Bangalore",
                  duration: "September 2014 - August 2016",
                  responsibilities: [
                    "Developed three complete web applications independently, handling both UI/UX design and full-stack development.",
                    "Built and deployed back-end systems, ensuring scalability and performance.",
                    "Designed custom icons, buttons, and logos using Photoshop to enhance client branding.",
                    "Created and integrated REST APIs, and optimized MySQL databases for efficiency.",
                    "Improved client workload management and increased profits through custom web solutions for individual and corporate training programs."                  
                  ],
                },
                {
                  title: "Computer Hardware Technician",
                  company: "HCL Infosystems Pvt Ltd, Goa",
                  duration: "September 2013 - August 2014",
                  responsibilities: [
                    "Installed, configured, and maintained computer hardware, peripherals, and networking devices.",
                    "Performed troubleshooting, repair, and replacement of faulty components to ensure system uptime.",
                    "Assisted clients with hardware and software issues, providing on-site and remote support.",
                    "Documented technical issues and solutions to improve service efficiency."
                  ],
                },
              ].map((experience, index) => (
                <div key={index} className="relative" style={{ marginBottom: "2rem" }}>
                  <div className="timeline-dot" style={{ top: `${index * 2}px` }}></div>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2" style={{ marginBottom: "0.5rem" }}>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <p className="icon-accent">{experience.duration}</p>
                    </div>
                    <p className="text-lg mb-4">{experience.company}</p>
                    <ul className="list-disc pl-5 space-y-2 muted">
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={{ ...project, image: project.image || "" }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Now using the Skills component */}
      <Skills />

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container" style={{ maxWidth: "56rem" }}>
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-row">
            {/* Contact details in a single line with separators */}
            <div className="contact-inline">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:your.email@example.com" className="contact-link">jsnagaraj37@gmail.com</a>
              </div>
              
              <span className="separator">|</span>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 (080) 8888 5616</span>
              </div>
              
              <span className="separator">|</span>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bangalore, India</span>
              </div>
            </div>
            
            <div className="socials">
              <div className="socials-row">
                {[
                  { 
                    name: "github",
                    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  },
                  { 
                    name: "linkedin",
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  },
                  { 
                    name: "upwork",
                    path: "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
                  }
                ].map((platform) => (
                  <a key={platform.name} href="#" className="social-btn" aria-label={`${platform.name} profile`}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d={platform.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="resume-cta">
              <a 
                href="https://drive.google.com/file/d/1jtkdiPxJsjkfFI5-eFvZrEQsyxtgHcp1/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
