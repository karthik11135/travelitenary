'use client';
import React, { useState } from 'react';
import { TickIcon } from '@/ui/Icons';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const ShareButton = () => {
  const pathname = usePathname();
  const [saved, setSaved] = useState(false);
  const clickHandler = async () => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_FULLURL}${pathname}`
    );
    console.log('im clicked');
  };

  return (
    <div
      onClick={clickHandler}
      className={`flex gap-3 ${
        !saved ? 'cursor-pointer hover:shadow-lg' : ''
      }  px-3 py-1.5 border border-zinc-500 transition rounded-full text-sm font-bold w-fit mx-auto`}
    >
      {!saved && <p onClick={() => setSaved(true)}>Share</p>}
      {saved && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex gap-3"
        >
          <TickIcon />
          <p className="flex items-center">Link saved to clipboard</p>
        </motion.div>
      )}
    </div>
  );
};

export default ShareButton;
