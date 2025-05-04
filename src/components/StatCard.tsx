import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, title, value, bgColor, suffix }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start">
        <div className={`p-3 rounded-full ${bgColor} mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-slate-700">{title}</h3>
          <p className="text-2xl font-bold">{value}{suffix && <span className="text-sm font-normal ml-1">{suffix}</span>}</p>
        </div>
      </div>
    </div>
  );
};