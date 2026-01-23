
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RepairStatsCards from './components/RepairStatsCards';
import RepairTable from './components/RepairTable';
import RepairDetailView from './components/RepairDetailView';
import UserDashboard from './components/UserDashboard';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'admin' | 'user'>('user'); // Default to User view as requested
  const [activeMenu, setActiveMenu] = useState('repair');
  const [selectedRepair, setSelectedRepair] = useState<any>(null);

  if (viewMode === 'user') {
    return (
      <div className="w-screen h-screen bg-slate-900 flex justify-center items-center p-0 sm:p-4">
        <UserDashboard />
      </div>
    );
  }

  const renderContent = () => {
    if (selectedRepair) {
      return (
        <div className="animate-in fade-in zoom-in-95 duration-500 w-full">
          <RepairDetailView 
            repair={selectedRepair} 
            onClose={() => setSelectedRepair(null)} 
          />
        </div>
      );
    }

    switch (activeMenu) {
      case 'repair':
        return (
          <div className="space-y-8 animate-in fade-in duration-500 w-full">
            <h2 className="text-[44px] font-black text-[#1E293B] tracking-tight leading-none mb-10">
              รายการแจ้งซ่อม
            </h2>
            
            <RepairStatsCards />
            
            <div className="mt-14 space-y-4">
               <label className="text-[15px] font-black text-slate-400 block px-4 uppercase tracking-wider">ค้นหา</label>
               <div className="relative max-w-lg">
                 <input 
                  type="text" 
                  placeholder="ค้นหาห้อง" 
                  className="w-full pl-14 pr-6 py-4 bg-white border-none rounded-[24px] text-base shadow-sm focus:ring-4 focus:ring-purple-200/50 transition-all placeholder:text-slate-300 font-bold"
                 />
                 <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[48px] shadow-2xl shadow-purple-900/5 overflow-hidden border border-white mt-10 w-full">
              <RepairTable onSelectRepair={setSelectedRepair} />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 font-bold w-full">
            <div className="w-24 h-24 bg-white/50 rounded-[40px] mb-6 flex items-center justify-center shadow-inner">
              <span className="text-4xl">🛠️</span>
            </div>
            <p className="text-xl">ฟีเจอร์นี้กำลังอยู่ระหว่างการพัฒนา...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#E9E6FF] overflow-x-hidden font-['Kanit']">
      {/* Toggle Button for Demo */}
      <button 
          onClick={() => setViewMode('user')}
          className="fixed top-4 right-4 z-[100] bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-indigo-700 transition-all"
        >
          Switch to User View
      </button>

      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onSelectMenu={setActiveMenu} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 w-full relative">
        {/* User Info Header */}
        <header className="h-28 flex items-center justify-end px-16 lg:px-24">
            <p className="text-[#334155] font-black text-2xl tracking-tight">Mr. Kittidet Suksarn</p>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 px-16 lg:px-24 pb-24">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
