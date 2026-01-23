
import React from 'react';

const RepairStatsCards: React.FC = () => {
  return (
    <div className="bg-white rounded-[28px] p-6 max-w-md shadow-sm border border-slate-50">
      <div className="flex items-center justify-between">
        <span className="text-slate-600 font-bold text-sm">แจ้งซ่อมทั้งหมด</span>
        <span className="text-4xl font-bold text-purple-600">2</span>
      </div>
    </div>
  );
};

export default RepairStatsCards;
