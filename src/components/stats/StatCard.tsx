import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-slate-800/80 rounded-lg border border-slate-700/50 p-6
                    transition-all duration-300 hover:shadow-lg
                    hover:border-${color}-500/30 group`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
          {title}
        </h3>
        <div className={`text-${color}-400`}>
          {icon}
        </div>
      </div>
      
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      
      <div className={`w-full h-1 bg-${color}-500/30 rounded-full mt-2`}></div>
    </div>
  );
};

export default StatCard;