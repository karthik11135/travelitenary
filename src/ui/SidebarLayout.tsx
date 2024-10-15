import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';
import { auth } from '@/db/auth';

const SidebarLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) {
    return (
      <div className="grid grid-cols-6 gap-7">
        <div className="">
          <Sidebar />
        </div>
        <div className="col-span-5">{children}</div>
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-6 gap-5">
      <div className=" col-span-6 ">{children}</div>
    </div>
  );
};

export default SidebarLayout;
