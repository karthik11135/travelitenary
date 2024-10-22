'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const ItenaryBoxWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) => {

  const router = useRouter();
  const showTripHandler = () => {
    try {
      router.push(`/itenaries/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      initial={{ x: 20, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      onClick={showTripHandler}
      className="w-full  text-slate-200 h-48 px-2 py-3 cursor-pointer rounded-xl bg-primary"
    >
      {children}
    </motion.div>
  );
};
