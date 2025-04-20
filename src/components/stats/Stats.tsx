import React from 'react';
import StatCard from './StatCard';
import { GitBranch, Star, Users, Code } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Estatísticas
          </span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Métricas do meu trabalho no GitHub
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Repositórios" 
            value={12} 
            icon={<GitBranch size={24} />} 
            color="blue"
          />
          <StatCard 
            title="Stars" 
            value={24} 
            icon={<Star size={24} />} 
            color="yellow"
          />
          <StatCard 
            title="Seguidores" 
            value={8} 
            icon={<Users size={24} />} 
            color="green"
          />
          <StatCard 
            title="Linguagens" 
            value={4} 
            icon={<Code size={24} />} 
            color="purple"
          />
        </div>
        
        <div className="bg-slate-800/80 rounded-lg border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Linguagens Mais Usadas</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Kotlin</span>
                <span className="text-gray-400">70%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Java</span>
                <span className="text-gray-400">20%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-violet-500 h-2.5 rounded-full" style={{width: '20%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Outros</span>
                <span className="text-gray-400">10%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;