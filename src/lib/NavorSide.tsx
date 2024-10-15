import React from 'react';
import { auth } from '@/db/auth';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';

const NavorSide = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border overflow-auto">
      <div className="border col-span-3 mt-20">
        <Sidebar />
      </div>
      <div className="col-span-8 border">
        {children}
      </div>
    </div>
  );
};

export default NavorSide;
