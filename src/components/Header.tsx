
import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "แจ้งพัสดุมาใหม่" }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-bold text-slate-900 leading-tight">Mr. Kittidet Suksarn</p>
          <p className="text-[11px] text-slate-500 font-medium">Admin Staff</p>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/kittidet/100/100" 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-[#8B5CF6]/20 object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
