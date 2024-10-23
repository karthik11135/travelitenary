'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingScreen = () => {
  return (
    <div className="flex mt-40 w-9/12 mx-auto items-center ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-3/6"
      >
        <h1 className="bg-clip-text  text-6xl p-2 mb-2 font-extrabold text-transparent bg-gradient-to-t from-secondary to-teritiary">
          Plan your vacations with Travel
        </h1>
        <p className="text-slate-500 font-extralight text-lg p-2 px-4">
          Share it with your friends and family!!
          <Link href="/login" className="underline  p-2 px-4 text-slate-200">
            Start here
          </Link>
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className=" gap-2 ms-auto w-2/6 rounded-lg grid grid-cols-2"
      >
        <Image
          src="/beachboipic.jpg"
          width={250}
          height={250}
          alt="Beach Boy"
          className="rounded-md border-4 border-white"
        />
        <Image
          src="/towerpic.jpg"
          className="rounded-md row-span-2 border-4 border-white"
          width={300}
          height={300}
          alt="Beach Boy"
        />
        <Image
          src="/sanfranpic.jpg"
          className="rounded-md border-4 border-white"
          width={200}
          height={200}
          alt="Beach Boy"
        />
      </motion.div>
    </div>
  );
};

export default LandingScreen;
