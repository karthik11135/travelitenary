import React from 'react';
import { formMessage } from '@/types/types';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CustomFormMessage = ({ message, ok }: formMessage) => {
  const colorClass = ok
    ? 'bg-green-200 text-blue-800'
    : 'bg-red-200 text-red-800';

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.2, type: 'spring', stiffness: 120 }}
      className={`${colorClass} flex px-3 font-bold border mb-2 gap-5 w-fit rounded-md`}
    >
      {message}
      {ok && <LoginLink />}
    </motion.div>
  );
};

const LoginLink = () => {
  return (
    <Link href="/login" className="ms-auto mx-2">
     {`->`} <span className="underline ">Login</span>
    </Link>
  );
};

export default CustomFormMessage;
