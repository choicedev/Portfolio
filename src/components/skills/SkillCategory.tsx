import React, { useMemo } from 'react';
import { SkillGroup } from '../../types';

interface SkillCategoryProps {
  skillGroup: SkillGroup;
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ skillGroup, className = '' }) => {
  const Icon = skillGroup.icon;
  const categoryId = useMemo(() => 
    `skill-category-${skillGroup.category.toLowerCase().replace(/\s+/g, '-')}`,
    [skillGroup.category]
  );

  return (
    <article 
      className={`
        group relative bg-slate-800/80 rounded-lg border border-slate-700/50 p-6 h-full 
        transition-all duration-300 hover:shadow-xl hover:border-slate-600
        focus-within:shadow-xl focus-within:border-slate-600 outline-none
        flex flex-col overflow-hidden ${className}
      `}
      tabIndex={0}
      aria-labelledby={categoryId}
    >
      {/* Efeito de destaque sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <header className="flex items-center mb-5 z-10">
        <div 
          className="
            w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center mr-3
            transition-all duration-300 group-hover:bg-slate-600 group-hover:scale-110
          "
          aria-hidden="true"
        >
          <Icon />
        </div>
        <h3 
          id={categoryId}
          className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300"
        >
          {skillGroup.category}
        </h3>
      </header>
      
      <div className="flex flex-wrap gap-2 mt-auto z-10">
        {skillGroup.skills.map((skill) => (
          <span 
            key={`${skill}-${categoryId}`}
            className="
              px-3 py-1.5 bg-slate-700/80 text-blue-300 rounded-md 
              hover:bg-slate-600 hover:text-white transition-all duration-200
              text-sm md:text-base hover:scale-105
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default React.memo(SkillCategory);