
import React from 'react';
import { 
  LayoutDashboard, 
  DoorOpen, 
  Wrench, 
  Package, 
  Calendar, 
  Zap, 
  Receipt, 
  Wallet, 
  BarChart3,
  Building2
} from 'lucide-react';

interface SidebarProps {
  activeMenu: string;
  onSelectMenu: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onSelectMenu }) => {
  const menuItems = [
    { id: 'dashboard', label: 'ข้อมูลภาพรวม', icon: LayoutDashboard },
    { id: 'rooms', label: 'ห้อง', icon: DoorOpen },
    { id: 'repair', label: 'แจ้งซ่อม', icon: Wrench },
    { id: 'parcel', label: 'แจ้งพัสดุ', icon: Package },
    { id: 'booking', label: 'จองส่วนกลาง', icon: Calendar },
    { id: 'meters', label: 'จดมิเตอร์', icon: Zap },
    { id: 'billing', label: 'ออกบิล', icon: Receipt },
    { id: 'payments', label: 'แจ้งชำระเงิน', icon: Wallet },
    { id: 'reports', label: 'รายงาน', icon: BarChart3 },
  ];

  return (
    <aside className="w-60 bg-[#D1C4FF] flex flex-col h-screen sticky top-0 shrink-0 border-r border-white/20">
      {/* Brand Logo */}
      <div className="p-5 flex items-center gap-3">
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-lg font-bold text-slate-800 px-4 mb-3">คอนโดมิเนียม</h2>
        <div className="border border-dashed border-[#8B5CF6]/40 rounded-[32px] p-2 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectMenu(item.id)}
                className={`w-full flex items-center px-6 py-2.5 rounded-2xl transition-all duration-300 font-bold text-[14px] ${
                  isActive 
                  ? 'bg-white text-[#6D28D9] shadow-sm' 
                  : 'text-[#4C1D95]/70 hover:bg-white/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
