
import React from 'react';
import { Package, CheckCircle2, TrendingUp, History } from 'lucide-react';

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pending Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group cursor-default">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
            <Package size={28} />
          </div>
          <div>
            <p className="text-slate-500 font-medium text-sm">พัสดุรอรับ</p>
            <p className="text-3xl font-bold text-slate-900">2</p>
          </div>
        </div>
        <TrendingUp className="text-slate-200 group-hover:text-[#8B5CF6] transition-colors" size={24} />
      </div>

      {/* Received Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group cursor-default">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <p className="text-slate-500 font-medium text-sm">รับแล้ว</p>
            <p className="text-3xl font-bold text-slate-900">2</p>
          </div>
        </div>
        <History className="text-slate-200 group-hover:text-[#8B5CF6] transition-colors" size={24} />
      </div>
    </div>
  );
};

export default StatsCards;
