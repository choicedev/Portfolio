import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * 
 * A reusable component for displaying project information in a card format
 * 
 * Props:
 * - project: Project object containing title, description, techStack, and link
 * 
 * Usage:
 * <ProjectCard project={projectData} />
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/80 rounded-lg overflow-hidden border border-slate-700/50 shadow-lg transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/30 group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label={`Link to ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        
        <p className="text-gray-300 mb-6 min-h-[60px]">{project.description}</p>
        
        <div className="fmt-4 pt-4 border-t border-slate-700/50">
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <Code2 size={16} className="mr-2 text-blue-400" />
            <span className="text-sm">Tech Stack:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-slate-700/50 text-sm rounded-md text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;