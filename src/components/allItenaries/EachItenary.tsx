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
    <div className="border px-5 bg-slate-300 rounded-md py-4  w-5/6 mx-auto mt-10">
      <div className="flex mb-4">
        <h1 className="text-5xl text-primary font-bold">
          {itenary?.title} Trip
        </h1>
        <Link
          href={'/itenaries'}
          className="flex cursor-pointer p-2 rounded-full hover:bg-slate-400 items-center ms-auto"
        >
          <LeftIcon />
        </Link>
      </div>
      <div>
        {itenary?.waypoints.map((eachWp, ind) => {
          return <EachItenaryWaypoint key={ind} wpDetails={eachWp} />;
        })}
      </div>
      <div className="px-2">
        ${totalCost} is the total expected cost of the trip
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
    <div className="px-2 py-2 mb-3  rounded-md border-l border-secondary shadow-md">
      <div className="flex">
        <h2 className="text-lg mb-2 text-supreme font-semibold">
          {wpDetails.wpTitle}
        </h2>
        <p className="flex items-center ms-auto opacity-75 italic">
          {wpDetails.wpDate.slice(0, -12)}
        </p>
      </div>
      <p className="mb-2">{wpDetails.wpDescription}</p>
      <div className="flex ">
        <p>${wpDetails.wpCost} - expected cost</p>
        <div className="ms-auto relative ">
          <CommentsTrigger wayPointId={wpDetails.id} />
        </div>
      </div>
    </div>
  );
};
