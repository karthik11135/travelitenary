'use client';

import React, { useState } from 'react';
import { Raleway } from 'next/font/google';
import TripBox from './TripBox';
import { useRef } from 'react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ItenaryDetailsContext } from './TripContext';
import { postItenary } from '@/actions/itenaryActions';
import { useSession } from 'next-auth/react';
import Loader from '@/ui/Loader';
import { useRouter } from 'next/navigation';
import TripPlanSkeleton from './skeletons/TripPlanSkeleton';

const poppins = Raleway({
  weight: '400',
  subsets: ['latin'],
});

const TripPlan = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  let { itenaryArr } = useContext(ItenaryDetailsContext);
  const [showPostError, setShowPostError] = useState(false);
  const tripRef = useRef<null | HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const childRef = useRef<{ handleSaveClick: () => void }>(null);

  // if (localStorage.getItem('itenary-cache'))
  //   itenaryArr = JSON.parse(localStorage.getItem('itenary-cache') as string);

  const submitItenaryHandler = async () => {
    setShowPostError(false);
    setLoading(true);
    if ((tripRef.current && tripRef.current.value.trim() === '') || !session)
      return;
    if (!tripRef.current) return;
    if (childRef.current) {
      childRef.current.handleSaveClick();
    }
    try {
      const res = await postItenary(
        session?.user.userId,
        tripRef.current?.value,
        itenaryArr
      );
      if (!res) {
        setShowPostError(true);
      } else {
        router.push(`/itenaries/${res.id}`);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${poppins.className} me-20 my-10`}>
      <TripDestination ref={tripRef} />
      <div>
        {itenaryArr.map((_, ind) => {
          return (
            <div key={ind} className="">
              <TripBox num={ind + 1} ref={childRef} />
              {ind !== itenaryArr.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '3.5rem' }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
                  className="h-14 mx-8 w-[2px] bg-gradient-to-b from-purple-300 to-secondary "
                ></motion.div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-fit mx-auto">
        <button
          disabled={loading ? true : false}
          onClick={submitItenaryHandler}
          className="text-teritiary disabled:cursor-not-allowed disabled:opacity-50 bg-secondary my-2 px-3 py-1.5 rounded-full "
        >
          {loading ? <Loader /> : 'Lets go!'}
        </button>
      </div>
      {showPostError && (
        <p className="text-center text-red-500 font-bold text-sm ">
          Something error occured
        </p>
      )}
    </div>
  );
};

export default TripPlan;

const TripDestination = React.forwardRef<HTMLInputElement>((_, ref) => (
  <motion.div
    initial={{ x: 40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className="w-4/6  font-bold mb-2 text-teritiary text-4xl"
  >
    <input
      ref={ref}
      placeholder="Where are you going?"
      className="focus:outline-none w-full border-b bg-transparant pb-4 border-zinc-500 bg-supreme placeholder:opacity-40 outline-none placeholder:text-neutral-400"
      type="text"
    />
  </motion.div>
));
