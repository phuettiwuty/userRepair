
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface RepairItem {
  id: string;
  room: string;
  description: string;
  status: 'processing' | 'completed';
  date: string;
  fullDetail: string;
  category: string;
  urgency: string;
}

interface RepairTableProps {
  onSelectRepair: (repair: RepairItem) => void;
}

const RepairTable: React.FC<RepairTableProps> = ({ onSelectRepair }) => {
  const data: RepairItem[] = [
    { 
      id: 'MT-8842', 
      room: 'A401', 
      description: 'เตียงหักค่ะ....', 
      status: 'processing', 
      date: '12/01/2026',
      category: 'เฟอร์นิเจอร์ / ห้องนอน',
      urgency: 'เร่งด่วน',
      fullDetail: 'พอดีนอนๆ อยู่แล้วเตียงหักอะค่ะ เสียงดังมากเลย รบกวนช่วยส่งช่างมาดูให้หน่อยนะคะ ว่าจะซ่อมหรือเปลี่ยนใหม่ได้ไหม'
    },
    { 
      id: 'MT-8843', 
      room: 'A301', 
      description: 'ผนังห้องนอน', 
      status: 'completed', 
      date: '31/12/2025',
      category: 'โครงสร้าง',
      urgency: 'ปกติ',
      fullDetail: 'มีรอยร้าวบริเวณผนังห้องนอนครับ'
    },
  ];

  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F1F3FF]">
            <th className="px-8 py-5 text-[13px] font-bold text-[#4C5E8A]">เลขที่ห้อง</th>
            <th className="px-8 py-5 text-[13px] font-bold text-[#4C5E8A]">วันที่</th>
            <th className="px-8 py-5 text-[13px] font-bold text-[#4C5E8A]">รายละเอียด</th>
            <th className="px-8 py-5 text-[13px] font-bold text-[#4C5E8A] text-center">สถานะ</th>
            <th className="px-8 py-5 text-[13px] font-bold text-[#4C5E8A] text-center">จัดการสถานะ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50/50 transition-all cursor-pointer group">
              <td 
                className="px-8 py-7 font-black text-slate-800 text-sm"
                onClick={() => onSelectRepair(item)}
              >
                {item.room}
              </td>
              <td className="px-8 py-7 text-sm text-slate-500 font-medium" onClick={() => onSelectRepair(item)}>{item.date}</td>
              <td className="px-8 py-7 text-sm text-slate-500 font-medium" onClick={() => onSelectRepair(item)}>{item.description}</td>
              <td className="px-8 py-7 text-center" onClick={() => onSelectRepair(item)}>
                {item.status === 'processing' ? (
                  <span className="bg-[#FFF9C4] text-[#F9A825] text-[10px] font-extrabold px-5 py-2 rounded-full shadow-sm">
                    กำลังดำเนินการ
                  </span>
                ) : (
                  <span className="bg-[#DFFFD6] text-[#4CAF50] text-[10px] font-extrabold px-5 py-2 rounded-full shadow-sm">
                    ซ่อมเสร็จแล้ว
                  </span>
                )}
              </td>
              <td className="px-8 py-7">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center gap-1.5 group/btn">
                    <button className="w-20 h-10 rounded-full bg-[#E8FBF4] flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all shadow-sm">
                        <CheckCircle2 size={24} strokeWidth={2.5} />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400">สำเร็จ</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 group/btn">
                    <button className="w-20 h-10 rounded-full bg-[#FFF1F1] flex items-center justify-center text-[#EF5350] hover:bg-[#EF5350] hover:text-white transition-all shadow-sm">
                        <XCircle size={24} strokeWidth={2.5} />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400">ยกเลิก</span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepairTable;
