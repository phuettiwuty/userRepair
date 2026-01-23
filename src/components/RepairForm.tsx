
import React from 'react';
import { Camera, ClipboardList, ChevronDown, User, AlertCircle } from 'lucide-react';

const RepairForm: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="p-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <ClipboardList className="text-[#8B5CF6]" size={20} />
          กรอกรายละเอียดการแจ้งซ่อม
        </h3>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Photo Upload */}
          <div className="lg:col-span-1 space-y-4">
            <label className="text-sm font-bold text-slate-700 block">รูปภาพความเสียหาย</label>
            <div className="aspect-square w-full border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#8B5CF6] shadow-sm mb-3">
                <Camera size={24} />
              </div>
              <p className="text-xs font-bold text-slate-500">ถ่ายรูปหรือเลือกไฟล์</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">หมายเลขห้อง</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="เช่น 101, 204..." 
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">หมวดหมู่</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-slate-200 rounded-2xl appearance-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm bg-white">
                  <option>เลือกหมวดหมู่...</option>
                  <option>ไฟฟ้า (Electrical)</option>
                  <option>ประปา (Plumbing)</option>
                  <option>เครื่องปรับอากาศ (AC)</option>
                  <option>โครงสร้าง/เฟอร์นิเจอร์</option>
                  <option>อื่นๆ</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700">หัวข้อการแจ้งซ่อม</label>
              <input 
                type="text" 
                placeholder="เช่น ก๊อกน้ำรั่ว, แอร์ไม่เย็น..." 
                className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700">รายละเอียดเพิ่มเติม</label>
              <textarea 
                rows={3}
                placeholder="อธิบายอาการเสียเบื้องต้น..." 
                className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">ความเร่งด่วน</label>
              <div className="flex gap-3">
                {['ปกติ', 'ด่วน', 'ด่วนมาก'].map((level) => (
                  <button 
                    key={level}
                    type="button"
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      level === 'ปกติ' 
                      ? 'bg-slate-50 border-slate-200 text-slate-600' 
                      : level === 'ด่วน'
                      ? 'border-orange-100 text-orange-500'
                      : 'border-red-100 text-red-500'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full py-3 bg-[#8B5CF6] text-white rounded-2xl font-bold hover:bg-[#7C3AED] transition-all shadow-lg shadow-purple-100 active:scale-95 text-sm">
                ส่งรายการแจ้งซ่อม
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairForm;
