
import React, { useState } from 'react';
import { ChevronLeft, Camera, ChevronDown, CheckCircle2, Image as ImageIcon, X } from 'lucide-react';
import { supabase } from '../supabase';

interface UserRepairFormProps {
  onBack: () => void;
  unit: string;
}

const UserRepairForm: React.FC<UserRepairFormProps> = ({ onBack, unit }) => {
  const [problemType, setProblemType] = useState('');
  const [location, setLocation] = useState('');
  const [detail, setDetail] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!problemType || !location) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl: string | null = null;

      // 1️⃣ upload รูป (Keeping Logic)
      if (image) {
        const fileName = `${Date.now()}-${image.name}`;
        const { error: uploadError } = await supabase.storage
          .from('repair-images')
          .upload(fileName, image);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('repair-images')
          .getPublicUrl(fileName);

        imageUrl = data.publicUrl;
      }

      // 2️⃣ insert ลง table (Keeping Logic)
      const { error } = await supabase
        .from('repair_request')
        .insert({
            room: unit,
            problem_type: problemType,
            location: location,
            description: detail,
            image_url: imageUrl,
            status: 'pending',
        });

      if (error) throw error;

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      alert('ส่งไม่สำเร็จ: ' + (err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-[480px] mx-auto min-h-screen bg-[#F0F4FF] flex items-center justify-center p-6 font-['Kanit'] animate-in zoom-in duration-500">
        <div className="bg-white rounded-[48px] p-12 shadow-2xl border border-white flex flex-col items-center text-center w-full relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-indigo-500"></div>
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-8 shadow-inner">
            <CheckCircle2 size={70} strokeWidth={2.5} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">ส่งรายการสำเร็จ!</h2>
          <p className="text-slate-500 font-medium mb-10">
            เราได้รับข้อมูลการแจ้งซ่อมแล้ว<br/>เจ้าหน้าที่จะดำเนินการโดยเร็วที่สุด
          </p>
          <button
            onClick={onBack}
            className="w-full py-5 bg-indigo-600 text-black rounded-[26px] font-black text-lg shadow-xl shadow-indigo-100 active:scale-95 transition-all"
          >
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#F0F4FF] bg-gradient-to-b from-[#E0E7FF] to-[#D6E2FF] pb-12 font-['Kanit'] animate-in slide-in-from-right duration-500">
      
      {/* Header - Fixed Visibility */}
      <header className="px-6 pt-10 flex items-center gap-5">
        <button
          onClick={onBack}
          className="w-15 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg shadow-indigo-900/5 border border-white active:scale-90 transition-all"
          aria-label="Back"
        >
          <ChevronLeft size={28} strokeWidth={3.5} />
        </button>
        <div className="flex flex-col">
          <h1 className="text-2xl font-black text-slate-800 tracking-tight leading-none">แจ้งซ่อม</h1>
          <p className="text-indigo-600/60 text-xs font-black uppercase tracking-widest mt-1">Room {unit}</p>
        </div>
      </header>

      <div className="px-6 mt-8 space-y-6">
        
        {/* Form Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 space-y-7 shadow-2xl shadow-indigo-900/5 border border-white/80">
          
          <div className="space-y-3">
            <label className="text-[15px] font-black text-slate-700 ml-1">ประเภทปัญหา</label>
            <div className="relative">
              <select
                value={problemType}
                onChange={(e) => setProblemType(e.target.value)}
                className="w-full rounded-[22px] p-5 bg-[#F8FAFF] border-none focus:ring-4 focus:ring-indigo-100 transition-all font-bold text-slate-700 appearance-none shadow-sm"
              >
                <option value="">เลือกประเภทปัญหา...</option>
                <option value="ระบบประปา">ระบบประปา</option>
                <option value="ระบบไฟฟ้า">ระบบไฟฟ้า</option>
                <option value="เครื่องปรับอากาศ">เครื่องปรับอากาศ</option>
                <option value="โครงสร้างอาคาร">โครงสร้างอาคาร</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-300 pointer-events-none" size={20} strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[15px] font-black text-slate-700 ml-1">ตำแหน่งในห้อง</label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-[22px] p-5 bg-[#F8FAFF] border-none focus:ring-4 focus:ring-indigo-100 transition-all font-bold text-slate-700 appearance-none shadow-sm"
              >
                <option value="">ระบุตำแหน่งที่เกิดปัญหา...</option>
                <option value="ห้องน้ำ">ห้องน้ำ</option>
                <option value="ห้องครัว">ห้องครัว</option>
                <option value="ห้องนอน">ห้องนอน</option>
                <option value="ห้องนั่งเล่น">ห้องนั่งเล่น</option>
                <option value="ระเบียง">ระเบียง</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-300 pointer-events-none" size={20} strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[15px] font-black text-slate-700 ml-1">รายละเอียด</label>
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="w-full rounded-[22px] p-5 bg-[#F8FAFF] border-none focus:ring-4 focus:ring-indigo-100 transition-all font-bold text-slate-700 min-h-[140px] shadow-sm placeholder:text-slate-300"
              placeholder="ระบุรายละเอียดความเสียหาย เช่น ก๊อกน้ำหลุด, แอร์มีน้ำหยด..."
            />
          </div>
        </div>

        {/* Media Upload Area */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl shadow-indigo-900/5 border border-white/80">
          <label className="text-[15px] font-black text-slate-700 block mb-5 ml-1">แนบรูปภาพความเสียหาย</label>

          <input
            type="file"
            accept="image/*"
            hidden
            id="upload-image"
            onChange={handleImageChange}
          />

          {!previewUrl ? (
            <button
              onClick={() => document.getElementById('upload-image')?.click()}
              className="w-full aspect-video border-4 border-dashed border-indigo-100 rounded-[30px] flex flex-col items-center justify-center gap-4 group hover:bg-indigo-50 transition-all active:scale-95"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-400 shadow-md group-hover:scale-110 transition-transform">
                <Camera size={32} strokeWidth={2.5} />
              </div>
              <p className="font-black text-indigo-300 text-sm tracking-wide">กดเพื่อเลือกรูปภาพ</p>
            </button>
          ) : (
            <div className="relative w-full aspect-video rounded-[30px] overflow-hidden shadow-xl ring-4 ring-white">
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              <button 
                onClick={() => { setImage(null); setPreviewUrl(null); }}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
              >
                <X size={20} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>

        {/* Submission Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white py-6 rounded-[28px] font-black text-xl shadow-2xl shadow-indigo-200 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-3">
               <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
               <span>กำลังส่ง...</span>
            </div>
          ) : (
            <>
              <span>ส่งข้อมูลแจ้งซ่อม</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserRepairForm;
