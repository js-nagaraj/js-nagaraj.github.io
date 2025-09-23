import Image from "next/image";
import styles from './Skills.module.css';

const Skills = () => {
    const techStacks = {
        cloud: [
            { name: 'AWS', src: '/icons/tech-icons-100x100/amazon-aws-100.png' },
            { name: 'Azure', src: '/icons/tech-icons-100x100/azure-100.png' },
            { name: 'GCP', src: '/icons/tech-icons-100x100/google-cloud-platform-100.png' },
        ],
        languages: [
            { name: 'TypeScript', src: '/icons/tech-icons-100x100/typescript-100.png' },
            { name: 'Python', src: '/icons/tech-icons-100x100/python-100.png' },
            { name: 'PHP', src: '/icons/tech-icons-100x100/php-100.png' },
            { name: 'NodeJs', src: '/icons/tech-icons-100x100/nodejs-100.png' },
        ],
        frameworks: [
            { name: 'Laravel', src: '/icons/tech-icons-100x100/laravel-100.png' },
            { name: 'Nest.js', src: '/icons/tech-icons-100x100/nestjs-100.png' },
            { name: 'Next.js', src: '/icons/tech-icons-100x100/nextjs-100.png' },
            { name: 'React', src: '/icons/tech-icons-100x100/react-native-100.png' },
            { name: 'SpringBoot', src: '/icons/tech-icons-100x100/spring-boot-100.png' },
        ],
        devops: [
            { name: 'Docker', src: '/icons/tech-icons-100x100/docker-100.png' },
            { name: 'Kubernetes', src: '/icons/tech-icons-100x100/kubernetes-100.png' },
            { name: 'Jenkins', src: '/icons/tech-icons-100x100/jenkins-100.png' },
            { name: 'GitHub', src: '/icons/tech-icons-100x100/github-100.png' },
            { name: 'GitLab', src: '/icons/tech-icons-100x100/gitlab-100.png' },
            { name: 'BitBucket', src: '/icons/tech-icons-100x100/bitbucket-100.png' },
        ],
        database: [
            { name: 'MySql', src: '/icons/tech-icons-100x100/mysql-100.png' },
            { name: 'MongoDB', src: '/icons/tech-icons-100x100/mongodb-100.png' },
            { name: 'PostgreSql', src: '/icons/tech-icons-100x100/postgresql-100.png' },
            { name: 'Sqlite3', src: '/icons/tech-icons-100x100/sqlite-100.png' },
        ],
        os: [
            { name: 'Linux', src: '/icons/tech-icons-100x100/linux-100.png' },
            { name: 'Ubuntu', src: '/icons/tech-icons-100x100/ubuntu-100.png' },
            { name: 'Windows', src: '/icons/tech-icons-100x100/windows-100.png' },
            { name: 'MacOS', src: '/icons/tech-icons-100x100/macos-100.png' },
        ],
        others: [
            { name: 'PowerBI', src: '/icons/tech-icons-100x100/power-bi-100.png' },
        ]
    };

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Critical Thinking",
    "Creativity",
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        
        {/* Tech Skills with Logos */}
        <div className={styles.sectionSpacer}>
        <div className={styles.techStackContainer}>
            <h2 className={styles.techStackTitle}>Technical Skills</h2>
            <div className={styles.category}>
                <div className={styles.iconGrid}>
                    {techStacks.cloud.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>                        
                        </div>
                    ))}
                    {techStacks.languages.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>
                        </div>
                    ))}
                    {techStacks.frameworks.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>
                        </div>
                    ))}
                    {techStacks.devops.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>
                        </div>
                    ))}
                    {techStacks.database.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>
                        </div>
                    ))}
                    {techStacks.os.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>
                        </div>
                    ))}
                    {techStacks.others.map((tech) => (
                        <div key={tech.name} className={styles.iconWrapper}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className={styles.icon}
                            />
                            <span className={styles.techStackIconLabel}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </div>
        
        {/* Soft Skills */}
        <div>
          <h3 className={styles.softTitle}>Soft Skills</h3>
          <div className={styles.softGrid}>
            {softSkills.map((skill) => (
              <div key={skill} className={styles.softItem}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.softIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
