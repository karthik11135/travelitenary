'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const CommentBoxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, width: 0 }}
      animate={{ height: '300px', opacity: 1, width: '400px' }}
      exit={{ height: 0, opacity: 0, width: 0 }}
      className=" bg-slate-200 right-2/3 top-8 rounded-md h-64 w-96"
    >
      {children}
    </motion.div>
  );
};

export default CommentBoxWrapper;
