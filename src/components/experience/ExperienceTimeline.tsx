import React from 'react';
import TimelineItem from './TimelineItem';
import { Experience } from '../../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Experiência Profissional
          </span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
        </h2>
        
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-violet-500"></div>
          
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index}
                position={index % 2 === 0 ? 'left' : 'right'}
                experience={experience}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            <span className="font-semibold text-white">Total de experiência:</span> 3+ anos no desenvolvimento de aplicações Android
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;