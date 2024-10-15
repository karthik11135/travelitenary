import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" border-green-800 border grid grid-cols-6 gap-5">
      <div className=" border-pink-500">
        <Sidebar />
      </div>
      <div className="border col-span-6 border-yellow-800">
        hi there
       {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
