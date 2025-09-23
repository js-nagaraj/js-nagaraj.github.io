"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  detailedDescription?: string;
  keyFeatures?: string[];
  techStack?: {
    frontend: string;
    backend: string;
    database: string;
    hosting: string;
  };
  outcomes?: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group relative">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          
          {/* Info button that appears on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full p-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label={`View details about ${project.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {/* Detailed Description */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Description</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.keyFeatures && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {project.techStack && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Tech Stack</h4>
                  <ul className="list-none space-y-2 text-gray-600 dark:text-gray-400">
                    <li><strong>Frontend:</strong> {project.techStack.frontend}</li>
                    <li><strong>Backend:</strong> {project.techStack.backend}</li>
                    <li><strong>Database:</strong> {project.techStack.database}</li>
                    <li><strong>Hosting:</strong> {project.techStack.hosting}</li>
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {project.outcomes && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Outcomes</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.websiteUrl && (
                  <a 
                    href={project.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 inline-flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Visit Website
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 inline-flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
