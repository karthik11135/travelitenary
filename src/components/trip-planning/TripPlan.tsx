'use client';

import React, { useState } from 'react';
import { Raleway } from 'next/font/google';
import TripBox from './TripBox';
import { useRef } from 'react';
import { useContext } from 'react';
import { ItenaryDetailsContext } from './TripContext';
import { postItenary } from '@/actions/itenaryActions';
import { useSession } from 'next-auth/react';
import Loader from '@/ui/Loader';
import { useRouter } from 'next/navigation';

const poppins = Raleway({
  weight: '400',
  subsets: ['latin'],
});

const TripPlan = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  const { itenaryArr } = useContext(ItenaryDetailsContext);
  const [showPostError, setShowPostError] = useState(false);
  const tripRef = useRef<null | HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const childRef = useRef<{ handleSaveClick: () => void }>(null);

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
          return <TripBox key={ind} num={ind + 1} ref={childRef} />;
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
  <div className="w-4/6  font-bold mb-2 text-teritiary text-4xl">
    <input
      ref={ref}
      placeholder="Where are you going?"
      className="focus:outline-none w-full border-b bg-transparant pb-4 border-zinc-500 bg-supreme placeholder:opacity-40 outline-none placeholder:text-neutral-400"
      type="text"
    />
  </div>
));
