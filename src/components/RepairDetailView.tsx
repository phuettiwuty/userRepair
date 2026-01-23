
import React from 'react';
import { Building2, FileText, X } from 'lucide-react';

interface RepairDetailViewProps {
  repair: any;
  onClose: () => void;
}

const RepairDetailView: React.FC<RepairDetailViewProps> = ({ repair, onClose }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-[48px] p-8 lg:p-12 shadow-2xl border border-white/50 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#8B5CF6] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-200">
                <Building2 size={30} />
            </div>
            <div>
                <h2 className="text-3xl font-black text-slate-800">ห้อง {repair.room}</h2>
                <p className="text-slate-400 font-bold text-sm tracking-wide">หมายเลขแจ้งซ่อม: #{repair.id}</p>
            </div>
        </div>
        
        <span className="bg-[#FFF9C4] text-[#F9A825] text-xs font-black px-6 py-2.5 rounded-full border border-[#FFF59D] shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F9A825] rounded-full animate-pulse"></span>
            กำลังดำเนินการ
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Image Container */}
        <div className="lg:col-span-5">
           <div className="bg-white rounded-[40px] p-8 shadow-lg border border-slate-50 h-full flex items-center justify-center">
              <div className="w-full aspect-[16/11] rounded-[32px] overflow-hidden shadow-inner ring-4 ring-slate-50">
                  <img 
                    src="https://media.discordapp.net/attachments/1118115664366604291/1195610817452634122/repair-bed.png" 
                    alt="Damage" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800";
                    }}
                  />
              </div>
           </div>
        </div>

        {/* Right: Text Details */}
        <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] p-10 shadow-lg border border-slate-50 h-full flex flex-col">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-3 mb-8">
                    <FileText className="text-[#8B5CF6]" size={24} />
                    <span className="border-b-4 border-[#D1C4FF] pb-1">รายละเอียดการซ่อม</span>
                </h3>

                <div className="bg-[#F0F7FF] rounded-[32px] p-8 mb-10 flex-1 flex items-center justify-center">
                    <p className="text-[#334155] font-bold italic leading-relaxed text-lg text-center">
                        "{repair.fullDetail}"
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold text-sm">วันที่แจ้ง</span>
                        <span className="text-slate-800 font-bold text-sm border-b border-slate-200">
                            12 มกราคม 2569 • 14:30 น.
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold text-sm">หมวดหมู่</span>
                        <span className="text-slate-800 font-bold text-sm">
                            {repair.category}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold text-sm">ความเร่งด่วน</span>
                        <span className="bg-[#FFEBEE] text-[#EF5350] px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider">
                            {repair.urgency}
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <button 
          onClick={onClose}
          className="flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6] text-white rounded-full font-black text-lg shadow-2xl shadow-purple-300 hover:scale-105 active:scale-95 transition-all"
        >
          <X size={26} strokeWidth={3} />
          ปิดหน้าต่าง
        </button>
      </div>
    </div>
  );
};

export default RepairDetailView;
