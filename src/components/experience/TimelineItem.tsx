import React from 'react';
import { CalendarRange, Building2, Code2 } from 'lucide-react'; // Adicionei o ícone Code2
import { Experience } from '../../types';

interface TimelineItemProps {
  experience: Experience;
  position: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, position }) => {
  return (
    <div className={`flex flex-col md:flex-row ${position === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div 
          className={`
            bg-slate-800/80 p-6 rounded-lg border border-slate-700/50 shadow-lg
            transform transition-transform duration-300 hover:scale-105
            ${position === 'left' ? 'md:mr-8' : 'md:ml-8'}
          `}
        >
          <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
          <p className="text-blue-400 font-medium mb-3">
            <span className="flex items-center">
              <Building2 size={16} className="mr-1" />
              {experience.company}
            </span>
          </p>
          
          <p className="text-gray-300 flex items-center mb-4">
            <CalendarRange size={16} className="mr-2 text-gray-400" />
            {experience.period}
          </p>
          
          <p className="text-gray-400 mb-4 whitespace-pre-line">{experience.description}</p>
          
          {/* Seção de Tecnologias */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <Code2 size={16} className="mr-2 text-blue-400" />
                <span className="font-medium">Tecnologias:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-slate-700/50 text-sm rounded-md text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Timeline dot - hidden on mobile */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default TimelineItem;