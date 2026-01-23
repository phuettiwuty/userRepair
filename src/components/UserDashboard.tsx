
import React, { useState } from 'react';
import { Bell, User, Wrench, Receipt, Package, Calendar, ChevronRight, Menu, PhoneCall, Headphones, Camera, CheckCircle2 } from 'lucide-react';
import UserRepairForm from './UserRepairForm';
import UserProfileEdit from './UserProfileEdit';
import { supabase } from '../supabase';
interface UserInfo {
  name: string;
  condo: string;
  unit: string;
}

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'repair' | 'profile'>('home');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "Mr. Kittidet Suksarn",
    condo: "Condo ABC",
    unit: "Unit A-301"
  });

  const handleSaveProfile = (newInfo: UserInfo) => {
    setUserInfo(newInfo);
    setActiveTab('home');
  };

  if (activeTab === 'repair') {
    return <UserRepairForm onBack={() => setActiveTab('home')} unit={userInfo.unit} />;
  }

  if (activeTab === 'profile') {
    return <UserProfileEdit userInfo={userInfo} onSave={handleSaveProfile} onBack={() => setActiveTab('home')} />;
  }

  // Helper component for Service Buttons
  const ServiceBtn = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) => (
    <div 
      onClick={onClick}
      className="bg-white/40 backdrop-blur-md rounded-[28px] p-5 shadow-sm border border-white/50 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer hover:bg-white/60 min-h-[140px]"
    >
      <div className="w-14 h-14 bg-indigo-50/50 rounded-2xl flex items-center justify-center text-indigo-400">
         <Icon size={32} strokeWidth={1.5} />
      </div>
      <span className="text-[14px] font-medium text-slate-500 text-center leading-tight">{label}</span>
    </div>
  );

  // Helper component for Activity List Items
  const ActivityItem = ({ icon: Icon, title, subtitle1, subtitle2, hasStatus }: any) => (
    <div className="bg-white/40 backdrop-blur-md rounded-[24px] p-5 flex items-center gap-4 border border-white/50 relative overflow-hidden group active:scale-[0.99] transition-all cursor-pointer">
       {/* City silhouette simulation background */}
       <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none transform translate-y-2">
          <svg width="150" height="60" viewBox="0 0 200 100" fill="currentColor">
            <rect x="10" y="40" width="20" height="60" />
            <rect x="40" y="20" width="25" height="80" />
            <rect x="75" y="50" width="20" height="50" />
            <rect x="105" y="30" width="30" height="70" />
            <rect x="145" y="60" width="20" height="40" />
          </svg>
       </div>
       
       <div className="flex-1">
          <p className="font-bold text-slate-600 text-[15px]">{title}</p>
          <p className="text-xs text-slate-400 font-medium mt-0.5">{subtitle1}</p>
          <p className="text-xs text-slate-400 font-medium">{subtitle2}</p>
       </div>
       <ChevronRight size={18} className="text-slate-400" />
    </div>
  );

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#E0E7FF] bg-gradient-to-b from-[#E0E7FF] to-[#D6E2FF] pb-10 font-['Kanit'] relative overflow-x-hidden animate-in fade-in duration-500">
      
      {/* Top Header */}
      <header className="px-6 pt-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-black text-lg">S</div>
           <h1 className="text-2xl font-black text-slate-800 tracking-tight">RentSphere</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-indigo-600 hover:scale-110 transition-transform">
            <Bell size={26} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className="text-indigo-600 hover:scale-110 transition-transform"
          >
            <User size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Greeting Card */}
      <section className="px-6 mt-6">
        <div 
          onClick={() => setActiveTab('profile')}
          className="bg-white/40 backdrop-blur-md rounded-[28px] p-7 shadow-sm border border-white/50 cursor-pointer active:scale-[0.98] transition-all"
        >
          <h2 className="text-lg font-bold text-slate-700">Hi, {userInfo.name}</h2>
          <p className="text-slate-400 text-sm mt-0.5 font-medium">{userInfo.condo}</p>
          <p className="text-slate-400 text-sm font-medium">{userInfo.unit}</p>
        </div>
      </section>

      {/* Service Grid (2x2) */}
      <section className="px-6 mt-6 grid grid-cols-2 gap-4">
        <ServiceBtn icon={Wrench} label="รายงานซ่อมบำรุง" onClick={() => setActiveTab('repair')} />
        <ServiceBtn icon={Receipt} label="บิล / การชำระเงิน" />
        <ServiceBtn icon={Package} label="พัสดุ" />
        <ServiceBtn icon={Calendar} label="จองส่วนกลาง" />
      </section>

      {/* Contact Card (Niti) */}
      <section className="px-6 mt-6">
        <div className="bg-white/40 backdrop-blur-md rounded-[28px] p-6 shadow-sm border border-white/50 flex items-center justify-center gap-8 group cursor-pointer active:scale-[0.98] transition-all overflow-hidden relative min-h-[120px]">
          <h2 className="text-2xl font-black text-slate-500/80 tracking-tight relative z-10">ติดต่อนิติ</h2>
          <div className="relative z-10">
             {/* Character Illustration Placeholder/Style */}
             <div className="w-20 h-20 bg-indigo-100/50 rounded-full flex items-center justify-center relative overflow-hidden">
                <Headphones size={40} className="text-indigo-500 absolute top-2" strokeWidth={1.5} />
             </div>
          </div>
        </div>
      </section>

      {/* Latest Activity Section */}
      <section className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold text-slate-400 tracking-tight uppercase text-[13px] tracking-widest">Latest</h3>
          <ChevronRight size={20} className="text-slate-800" strokeWidth={3} />
        </div>

        <div className="space-y-3">
          <ActivityItem 
            icon={Receipt} 
            title="บิล / การชำระเงิน" 
            subtitle1="Amount Due: $4,200" 
            subtitle2="Due Date: May 31, 2024" 
          />
          <ActivityItem 
            icon={Package} 
            title="พัสดุ" 
            subtitle1="1 item awaiting pickup" 
            subtitle2="Please contact the staff for collection" 
          />
          <ActivityItem 
            icon={Calendar} 
            title="จองส่วนกลาง" 
            subtitle1="Swimming Pool" 
            subtitle2="Today at 5:00 PM" 
          />
          <ActivityItem 
            icon={Wrench} 
            title="รายงานซ่อมบำรุง" 
            subtitle1="Ticket #2069" 
            subtitle2="Status: In Progress" 
          />
        </div>
      </section>

    </div>
  );
};

export default UserDashboard;
