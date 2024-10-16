'use client';

import React from 'react';

import { Poppins } from 'next/font/google';
import TripBox from './TripBox';
import { useRef } from 'react';

import { useContext } from 'react';
import { ItenaryDetailsContext } from './TripContext';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const TripPlan = () => {
  const { itenaryArr } = useContext(ItenaryDetailsContext);
  const tripRef = useRef<null | HTMLInputElement>(null);
  const lastTripRef = useRef(null)

  const submitItenaryHandler = () => {
    if(tripRef.current) console.log(tripRef.current.value)
    console.log(itenaryArr);
  };

  return (
    <div className={`${poppins.className} me-20 my-10 border-pink-700`}>
      <TripDestination ref={tripRef} />
      <div>
        {itenaryArr.map((it, ind) => {
          return <TripBox key={ind} num={ind + 1} />;
        })}
      </div>
      <div className="w-fit mx-auto">
        <button
          onClick={submitItenaryHandler}
          className="text-teritiary bg-secondary my-2 px-3 py-1.5 rounded-full "
        >
          Lets go!
        </button>
      </div>
    </div>
  );
};

export default TripPlan;

const TripDestination = React.forwardRef<HTMLInputElement>((props, ref) => (
  <div className="w-4/6  font-bold mb-2 text-teritiary text-4xl">
    <input
      ref={ref}
      placeholder="Where are you going?"
      className="focus:outline-none w-full border-b bg-transparant pb-4 border-zinc-500 bg-supreme placeholder:opacity-40 outline-none placeholder:text-neutral-400"
      type="text"
    />
  </div>
));
