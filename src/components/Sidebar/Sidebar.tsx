'use client';
import { FlightIcon, LogoutIcon } from '@/ui/Icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, AirplaneTakeoff } from '@phosphor-icons/react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();

  // if (!session) {
  //   return <div className=''></div>;
  // }

  return (
    <div className="overflow-auto w-fit">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className=" pt-4 mx-3 flex text-teritiary h-[40rem] mt-20 rounded-lg px-3 justify-center flex-col bg-primary"
      >
        <div className=" font-bold px-2 mb-4 gap-3 flex mt-2">
          <h1 className="text-3xl  ">Travel</h1>
          <h1 className="text-3xl bg-green-500  ms-auto"></h1>
        </div>
        <div className="flex flex-col gap-3 my-2 ">
          <Link
            href="/plan-trip"
            className="bg-supreme px-3 w-full gap-5 flex py-1.5 rounded-full"
          >
            <div className=" "> Plan your trip</div>
            <div className="ms-auto flex items-center me-1">
              <AirplaneTakeoff size={25} />
            </div>
          </Link>
          <Link
            href="/itenaries"
            className="bg-supreme px-3 w-full gap-5 flex py-1.5 rounded-full"
          >
            <div className="">Your itenaries</div>
            <div className="ms-auto flex items-center me-1">
              <Globe size={25} />
            </div>
          </Link>
        </div>
        <div className="mt-auto  ">
          <div
            onClick={() => signOut({ redirectTo: '/' })}
            className="text-teritiary flex cursor-pointer px-3 mb-3 py-1.5 rounded-full bg-supreme"
          >
            <div className=" ">Logout</div>
            <div className="w-5 flex items-center ms-auto">
              <LogoutIcon />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
