import React from 'react';
import SkillCategory from './SkillCategory';
import { SkillGroup } from '../../types';

interface SkillsProps {
  skillGroups: SkillGroup[];
}

const Skills: React.FC<SkillsProps> = ({ skillGroups }) => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Tecnologias & Competências
          </span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Tecnologias e ferramentas com as quais tenho experiência
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCategory key={index} skillGroup={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;