
import React, { useState } from 'react';
import { ChevronLeft, User, Building, Home, Camera, Save } from 'lucide-react';

interface UserInfo {
  name: string;
  condo: string;
  unit: string;
}

interface UserProfileEditProps {
  userInfo: UserInfo;
  onSave: (info: UserInfo) => void;
  onBack: () => void;
}

const UserProfileEdit: React.FC<UserProfileEditProps> = ({ userInfo, onSave, onBack }) => {
  const [formData, setFormData] = useState<UserInfo>(userInfo);

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#E0E7FF] bg-gradient-to-b from-[#E0E7FF] to-[#D8B4FE]/30 pb-10 font-['Kanit'] animate-in slide-in-from-right duration-300">
      {/* Header */}
      <header className="px-6 pt-8 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="w-15 h-10 bg-white/50 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-700 hover:bg-white transition-colors border border-white/40"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">แก้ไขโปรไฟล์</h1>
      </header>

      <div className="px-6 mt-8 space-y-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-indigo-100 flex items-center justify-center">
               <User size={64} className="text-indigo-300" />
               {/* Overlay for edit */}
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera size={24} className="text-white" />
               </div>
            </div>
            <div className="absolute bottom-1 right-1 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg">
               <Camera size={16} />
            </div>
          </div>
          <p className="mt-4 text-slate-500 font-bold text-sm">เปลี่ยนรูปโปรไฟล์</p>
        </div>

        {/* Form Fields Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-[32px] p-6 shadow-xl shadow-indigo-900/5 border border-white/60 space-y-5">
          <div className="space-y-2">
            <label className="text-[15px] font-bold text-slate-700 ml-1 flex items-center gap-2">
              <User size={16} className="text-indigo-400" />
              ชื่อ-นามสกุล
            </label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#E0E7FF]/60 border-none rounded-[20px] px-5 py-4 text-slate-600 font-bold focus:ring-2 focus:ring-purple-300 transition-all placeholder:text-slate-400"
              placeholder="ระบุชื่อจริง..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-[15px] font-bold text-slate-700 ml-1 flex items-center gap-2">
              <Building size={16} className="text-indigo-400" />
              ชื่อคอนโด / โครงการ
            </label>
            <input 
              type="text" 
              value={formData.condo}
              onChange={(e) => setFormData({ ...formData, condo: e.target.value })}
              className="w-full bg-[#E0E7FF]/60 border-none rounded-[20px] px-5 py-4 text-slate-600 font-bold focus:ring-2 focus:ring-purple-300 transition-all placeholder:text-slate-400"
              placeholder="เช่น Condo ABC..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-[15px] font-bold text-slate-700 ml-1 flex items-center gap-2">
              <Home size={16} className="text-indigo-400" />
              เลขที่ห้อง (Unit Number)
            </label>
            <input 
              type="text" 
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="w-full bg-[#E0E7FF]/60 border-none rounded-[20px] px-5 py-4 text-slate-600 font-bold focus:ring-2 focus:ring-purple-300 transition-all placeholder:text-slate-400"
              placeholder="เช่น A-301..."
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 space-y-4">
          <button 
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white py-5 rounded-[24px] font-black text-lg shadow-xl shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <Save size={24} />
            บันทึกการเปลี่ยนแปลง
          </button>
          
          <button 
            onClick={onBack}
            className="w-full py-4 bg-white/40 backdrop-blur-md text-slate-500 rounded-[24px] font-bold hover:bg-white transition-all"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
