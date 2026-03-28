import Image from "next/image";
import styles from "./page.module.css";

type TimelineEntry = {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
};

type Project = {
  title: string;
  image: string;
  summary: string;
  stack: string[];
  website?: string;
};

const focusAreas = [
  "Platform Engineering",
  "Cloud Architecture",
  "Kubernetes & Containers",
  "CI/CD & GitOps",
  "Observability",
  "Security & FinOps",
];

const technicalSkills = [
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "Crossplane",
  "Kubernetes",
  "Helm",
  "GitHub Actions",
  "GitLab CI",
  "Argo CD",
  "Docker",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Node.js",
  "Next.js",
  "Laravel",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
];

const timeline: TimelineEntry[] = [
  {
    role: "DevOps & Multi-Cloud Solution Architect",
    company: "Freelancer, Bangalore",
    duration: "Jul 2024 - Present",
    highlights: [
      "Designed and delivered cloud-native MVPs for IT, e-commerce, and education platforms.",
      "Implemented end-to-end DevOps across AWS, Azure, and GCP.",
      "Established secure deployment pipelines with reliability and cost guardrails.",
    ],
  },
  {
    role: "Technical Consultant",
    company: "Appzoy Technologies Pvt Ltd, Bangalore",
    duration: "Jan 2024 - Jun 2024",
    highlights: [
      "Consulted enterprise teams on architecture and DevOps operating models.",
      "Defined multi-cloud reference patterns for scalable and resilient delivery.",
      "Improved CI/CD, security controls, and optimization strategies.",
    ],
  },
  {
    role: "Technical Lead",
    company: "Appzoy Technologies Pvt Ltd, Bangalore",
    duration: "Oct 2020 - Dec 2024",
    highlights: [
      "Led full-stack delivery teams building cloud-based web and mobile products.",
      "Introduced modern service architecture and engineering standards.",
      "Mentored developers and strengthened Agile execution quality.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Appzoy Technologies Pvt Ltd, Bangalore",
    duration: "Oct 2018 - Sep 2020",
    highlights: [
      "Built and maintained business applications using Laravel and JavaScript stacks.",
      "Developed REST APIs and optimized relational and NoSQL databases.",
      "Raised delivery quality through review discipline and collaboration.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "International Trade Fair Platform",
    image: "/thumbnails/mmi-connect.png",
    summary:
      "Business engagement platform connecting customers and exhibitors with event and order workflows.",
    stack: ["Angular", ".NET", "MS SQL Server", "Azure", "CI/CD"],
    website: "https://mmiconnect.in/",
  },
  {
    title: "SVAIM Medical Image Digitization",
    image: "/thumbnails/svasthiya.png",
    summary:
      "Healthcare platform that digitizes and delivers medical images with secure anytime access.",
    stack: ["React", "Node.js", "MongoDB", "GCP"],
    website: "https://www.svasthiya.in/",
  },
  {
    title: "UAssess Skill Assessment Suite",
    image: "/thumbnails/uassess.png",
    summary:
      "Assessment ecosystem supporting large-scale technology and leadership evaluations.",
    stack: ["Laravel", "MySQL", "AWS"],
    website: "https://www.productleadership.com/",
  },
  {
    title: "Etti Organic Commerce",
    image: "/thumbnails/etti-form-store.png",
    summary:
      "Commerce platform with responsive buying journeys and operational simplicity.",
    stack: ["Next.js", "Supabase", "Vercel"],
    website: "https://etti.in/",
  },
  {
    title: "BiteUnite Cooking Platform",
    image: "/thumbnails/biteunite.png",
    summary:
      "Learning and social experience for cooking enthusiasts with training and content delivery.",
    stack: ["PHP", "MySQL", "Azure"],
    website: "https://www.biteunite.com/",
  },
  {
    title: "Expense On The Go",
    image: "/thumbnails/expenseothego.png",
    summary:
      "Mobile-first personal finance tracker focused on budgeting and spending visibility.",
    stack: ["Node.js", "MongoDB", "AWS"],
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.gradientOrbTop} aria-hidden="true" />
      <div className={styles.gradientOrbBottom} aria-hidden="true" />

      <section id="home" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>DevOps Engineer + Multi-Cloud Solution Architect</p>
          <h1 className={styles.heroTitle}>Nagaraj Jayaraman</h1>
          <p className={styles.heroSubtitle}>
            I design scalable cloud platforms, automate delivery pipelines, and build resilient
            systems across AWS, Azure, and GCP.
          </p>

          <div className={styles.heroActions}>
            <a href="#contact" className={styles.primaryButton}>
              Let&apos;s Work Together
            </a>
            <a
              href="/Resume/Nagaraj-Jayaraman-Resume-w11.0.2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              View Resume
            </a>
          </div>

          <div className={styles.metricsRow}>
            <div className={styles.metricCard}>
              <p className={styles.metricNumber}>11+</p>
              <p className={styles.metricLabel}>Years in software and cloud delivery</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricNumber}>3</p>
              <p className={styles.metricLabel}>Cloud platforms in active use</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricNumber}>1000+</p>
              <p className={styles.metricLabel}>Assessments supported in product solutions</p>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.portraitWrap}>
            <Image
              src="/profile-picture/nagaraj-jayaraman-1.jpeg"
              alt="Nagaraj Jayaraman"
              fill
              priority
              className={styles.portrait}
            />
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>About</p>
          <h2>Building reliable products from architecture to operations</h2>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.panel}>
            <p>
              I work at the intersection of cloud architecture, DevOps, and product delivery.
              My focus is helping teams ship faster without compromising reliability,
              security, or cost discipline.
            </p>
            <p>
              From greenfield builds to modernization initiatives, I design practical systems
              that improve developer velocity and business outcomes.
            </p>
          </article>

          <aside className={styles.panelAccent}>
            <h3>Focus Areas</h3>
            <ul className={styles.tagList}>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Experience</p>
          <h2>Professional Journey</h2>
        </div>

        <div className={styles.timeline}>
          {timeline.map((entry) => (
            <article key={entry.role} className={styles.timelineCard}>
              <div className={styles.timelineMeta}>
                <p>{entry.duration}</p>
              </div>
              <div>
                <h3>{entry.role}</h3>
                <p className={styles.company}>{entry.company}</p>
                <ul>
                  {entry.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Projects</p>
          <h2>Selected Work</h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectImageWrap}>
                <Image src={project.image} alt={project.title} fill className={styles.projectImage} />
              </div>

              <div className={styles.projectBody}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <ul className={styles.stackList}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Visit Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Skills</p>
          <h2>Technology Toolkit</h2>
        </div>

        <ul className={styles.skillCloud}>
          {technicalSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className={styles.resumeStrip}>
          <p>Detailed skills and work history are available in the attached portfolio documents.</p>
          <div className={styles.resumeActions}>
            <a
              href="/Resume/Nagaraj-Jayaraman-Resume-w11.0.2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Open Resume PDF
            </a>
            <a
              href="/Resume/Nagaraj-Jayaraman-skills-works-nc-w11.8.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Open Skills & Works PDF
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Contact</p>
          <h2>Let&apos;s build something strong together</h2>
        </div>

        <div className={styles.contactCard}>
          <p>
            Email: <a href="mailto:jsnagaraj37@gmail.com">jsnagaraj37@gmail.com</a>
          </p>
          <p>Phone: +91 (080) 8888 5616</p>
          <p>Location: Bangalore, India</p>
          <p>
            Portfolio: <a href="http://js-nagaraj.github.io">js-nagaraj.github.io</a>
          </p>
        </div>
      </section>
    </main>
  );
}
