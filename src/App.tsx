
import React, { useState } from 'react';
import Header from './components/Header';
import ParcelForm from './components/ParcelForm';
import ParcelTable from './components/ParcelTable';
import RepairDetailView from './components/RepairDetailView';
import RepairStatsCards from './components/RepairStatsCards';
import RepairTable from './components/RepairTable';
import Sidebar from './components/Sidebar';
import StatsCards from './components/StatsCards';
const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('repair');
  const [selectedRepair, setSelectedRepair] = useState<any>(null);

  const renderContent = () => {
    if (selectedRepair) {
      return (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <RepairDetailView 
            repair={selectedRepair} 
            onClose={() => setSelectedRepair(null)} 
          />
        </div>
      );
    }

    switch (activeMenu) {
      case 'parcel':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <StatsCards />
            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
              <ParcelForm />
            </div>
            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-50">
                <h3 className="text-lg font-bold text-slate-800">รายการพัสดุล่าสุด</h3>
              </div>
              <ParcelTable />
            </div>
          </div>
        );
      case 'repair':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-black text-slate-800 px-2 tracking-tight">รายการแจ้งซ่อม</h2>
            <RepairStatsCards />
            
            <div className="mt-10 space-y-4">
               <label className="text-sm font-bold text-slate-500 block px-4">ค้นหา</label>
               <div className="relative max-w-sm px-2">
                 <input 
                  type="text" 
                  placeholder="ค้นหาห้อง" 
                  className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl text-sm shadow-sm focus:ring-4 focus:ring-purple-100 transition-all placeholder:text-slate-300 font-bold"
                 />
                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[40px] shadow-xl shadow-purple-900/5 overflow-hidden border border-slate-50 mt-6">
              <RepairTable onSelectRepair={setSelectedRepair} />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-96 text-slate-400 font-bold animate-pulse">
            <div className="w-20 h-20 bg-slate-200 rounded-3xl mb-4"></div>
            ฟีเจอร์นี้กำลังอยู่ระหว่างการพัฒนา...
          </div>
        );
    }
  };

  return (
    <div className="flex w-screen h-screen bg-[#E9E6FF]">
      {/* Sidebar - Persistent */}
      <Sidebar activeMenu={activeMenu} onSelectMenu={setActiveMenu} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 flex items-center justify-end px-16">
            <p className="text-slate-700 font-black text-lg">Mr. Kittidet Suksarn</p>
        </header>
        
        <div className="flex-1 p-10 lg:p-14 overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
