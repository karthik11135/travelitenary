'use client';
import React from 'react';
import { LeftIcon } from '@/ui/Icons';
import Link from 'next/link';
import ShareButton from './ShareButton';
import { EachWaypointType, EachItenaryType } from '@/types/types';
import { CommentBox } from '../Comments/CommentBox';
import CommentsTrigger from '../Comments/CommentsTrigger';

const EachItenary = ({ itenary }: { itenary: EachItenaryType | null }) => {
  let totalCost = 0;
  if (!itenary?.waypoints) return;
  for (let i = 0; i < itenary?.waypoints.length; i++) {
    totalCost += itenary.waypoints[i].wpCost;
  }
  return (
    <div className="border px-5 bg-primary rounded-md py-4  w-5/6 mx-auto mt-10">
      <div className="flex mb-4">
        <h1 className="text-5xl text-teritiary font-bold">
          {itenary?.title} Trip
        </h1>
        <div className="ms-auto flex gap-3 items-center">
          <Link
            href={`/itenaries/edit/${itenary.id}`}
            className="bg-white ms-2 text-lg text-supreme font-bold hover:-translate-y-0.5 transition rounded-full z-20 right-2 bottom-2 px-3"
          >
            Edit
          </Link>
          <Link
            href={'/itenaries'}
            className=" cursor-pointer p-1 rounded-full hover:-translate-x-0.5 transition"
          >
            <LeftIcon />
          </Link>
        </div>
      </div>
      <div>
        {itenary?.waypoints.map((eachWp, ind) => {
          return <EachItenaryWaypoint key={ind} wpDetails={eachWp} />;
        })}
      </div>
      <div className="px-2 font bold text-teritiary font-bold">
        Expected cost of the trip is <span className='px-2.5 py-1 rounded-full bg-supreme ms-2 text-green-400'>$ {totalCost}</span>
      </div>

      <div>
        <ShareButton />
      </div>
    </div>
  );
};

export default EachItenary;

const EachItenaryWaypoint = ({
  wpDetails,
}: {
  wpDetails: EachWaypointType;
}) => {
  return (
    <div className="px-4 py-4 mb-3 rounded-md bg-supreme shadow-md">
      <div className="flex mb-3">
        <h2 className="text-2xl flex items-center mb-2 text-teritiary font-semibold">
          {wpDetails.wpTitle}
        </h2>
        <p className="flex font-light items-center opacity-75 text-teritiary ms-auto italic">
          {wpDetails.wpDate.slice(0, -12)}
        </p>
      </div>
      <p className="mb-5 font-light text-teritiary">
        {wpDetails.wpDescription}
      </p>
      <div className="flex text-teritiary">
        <p className="font-bold">$ {wpDetails.wpCost}</p>
        <div className="ms-auto relative ">
          <CommentsTrigger wayPointId={wpDetails.id} />
        </div>
      </div>
    </div>
  );
};
