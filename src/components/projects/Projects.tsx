import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Projetos
          </span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Uma seleção dos meus projetos mais recentes demonstrando minhas habilidades
          em desenvolvimento mobile com Kotlin e Java.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/choicedev?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-700 rounded-lg font-medium text-gray-300 hover:bg-slate-600 transition-colors"
          >
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;