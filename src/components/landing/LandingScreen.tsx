'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DotPattern from '../ui/dot-pattern';
import { cn } from '@/lib/utils';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

const LandingScreen = () => {
  return (
    <div className="flex mt-40 w-9/12 mx-auto items-center ">
      <DotPattern
        width={20}
        height={20}
        x={1}
        cx={13}
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-3/6 "
      >
        <h1 className="bg-clip-text  text-6xl p-2 mb-2 font-extrabold text-transparent bg-gradient-to-t from-secondary to-teritiary">
          Plan your vacations with Travel
        </h1>
        <p className="text-teritiary font-light text-lg p-2 px-4">
          Share it with your friends and family!!
          <Link href="/login" className="flex text-teritiary underline gap-2">
            Login
          </Link>
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="gap-4 ms-auto w-2/6 border rounded-lg"
      >
        <CardContainer>
          <CardBody className="p-2">
            <CardItem translateX={-2} translateY={-1} translateZ={70}>
              <Image
                src="/beachboipic.jpg"
                width={250}
                height={250}
                alt="Beach Boy"
                className="rounded-md transition border-4 border-white"
              />
            </CardItem>
          </CardBody>

          <CardBody className="row-span-2 p-2">
            <CardItem translateX={2} translateY={-1} translateZ={70}>
              <Image
                src="/towerpic.jpg"
                className="rounded-md  ms-1 row-span-2 border-4 border-white"
                width={300}
                height={300}
                alt="Beach Boy"
              />
            </CardItem>
          </CardBody>

          <CardBody className="p-2">
            <CardItem translateX={-2} translateY={1} translateZ={70}>
              <Image
                src="/sanfranpic.jpg"
                className="rounded-md mt-2 border-4 border-white"
                width={200}
                height={200}
                alt="Beach Boy"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
};

export default LandingScreen;
