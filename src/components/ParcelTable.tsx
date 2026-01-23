
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ParcelItem {
  id: string;
  carrier: string;
  room: string;
  tracking: string;
  status: 'pending' | 'received';
  date: string;
}

const ParcelTable: React.FC = () => {
  const data: ParcelItem[] = [
    { 
      id: '1', 
      carrier: 'Flash Express', 
      room: '102', 
      tracking: 'TH23129384812', 
      status: 'pending', 
      date: '22 Oct 2023, 10:30' 
    },
    { 
      id: '2', 
      carrier: 'Kerry Express', 
      room: '405', 
      tracking: 'KER781239102', 
      status: 'received', 
      date: '21 Oct 2023, 15:45' 
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F8FAFC]">
          <tr>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">รายการ</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">ห้อง</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">เลขพัสดุ</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">สถานะ</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">วันที่</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-300">
                    <ImageIcon size={20} />
                  </div>
                  <span className="font-semibold text-slate-800 text-[15px]">{item.carrier}</span>
                </div>
              </td>
              <td className="px-6 py-5 text-center font-medium text-slate-600">{item.room}</td>
              <td className="px-6 py-5">
                <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded">
                  {item.tracking}
                </span>
              </td>
              <td className="px-6 py-5 text-center">
                {item.status === 'pending' ? (
                  <span className="bg-orange-50 text-orange-500 text-[11px] font-bold px-3 py-1.5 rounded-full border border-orange-100 uppercase tracking-tight">
                    รอรับ
                  </span>
                ) : (
                  <span className="bg-emerald-50 text-emerald-500 text-[11px] font-bold px-3 py-1.5 rounded-full border border-emerald-100 uppercase tracking-tight">
                    รับแล้ว
                  </span>
                )}
              </td>
              <td className="px-6 py-5 text-[13px] text-slate-500 font-medium">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelTable;
