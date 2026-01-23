
import React from 'react';
import { Search, PlusCircle, Upload, Calendar, ChevronDown } from 'lucide-react';

const ParcelForm: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Top Bar with Search and Add Button */}
      <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="ค้นหาห้อง หรือ เลขพัสดุ..." 
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all placeholder:text-slate-400"
          />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8B5CF6] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#7C3AED] transition-all shadow-lg shadow-purple-100 active:scale-95">
          <PlusCircle size={20} />
          <span>แจ้งพัสดุใหม่</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-slate-700 block">รูปภาพพัสดุ</label>
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/3] w-full border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center bg-slate-50 group-hover:border-[#8B5CF6]/50 group-hover:bg-[#8B5CF6]/5 transition-all">
                <div className="w-16 h-16 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={32} />
                </div>
                <div className="text-center px-6">
                  <p className="text-slate-600 font-semibold text-lg">ลากไฟล์มาวาง หรือ คลิกเพื่ออัปโหลด</p>
                  <p className="text-slate-400 text-sm mt-1 font-medium tracking-wide">รองรับไฟล์ JPG, PNG (สูงสุด 10MB)</p>
                </div>
              </div>
              <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-slate-800 px-8 py-2.5 rounded-full text-sm font-bold shadow-xl border border-slate-100 hover:bg-slate-50 transition-all">
                อัปโหลดรูปภาพ
              </button>
            </div>
          </div>

          {/* Inputs Section */}
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">เลขพัสดุ (Tracking Number)</label>
              <input 
                type="text" 
                placeholder="ระบุเลขพัสดุ..." 
                className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#8B5CF6]/20 focus:border-[#8B5CF6] transition-all text-slate-700 placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">ห้อง (Room Number)</label>
              <div className="relative">
                <select className="w-full px-5 py-4 border border-slate-200 rounded-2xl appearance-none focus:ring-2 focus:ring-[#8B5CF6]/20 focus:border-[#8B5CF6] transition-all text-slate-700 bg-white">
                  <option value="" disabled selected>เลือกหมายเลขห้อง...</option>
                  <option value="101">101</option>
                  <option value="102">102</option>
                  <option value="203">203</option>
                  <option value="405">405</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">วันที่มาถึง (Arrival Date/Time)</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="datetime-local" 
                  className="w-full pl-12 pr-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#8B5CF6]/20 focus:border-[#8B5CF6] transition-all text-slate-700 uppercase text-sm"
                />
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <button className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95">
                ล้างข้อมูล
              </button>
              <button className="py-4 bg-[#8B5CF6] text-white rounded-2xl font-bold hover:bg-[#7C3AED] transition-all shadow-lg shadow-purple-200 active:scale-95">
                บันทึกข้อมูล
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelForm;
