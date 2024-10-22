import React from 'react';
import TripBoxSkeleton from './TripBoxSkeleton';

const TripPlanSkeleton = () => {
  return (
    <div className={` me-20 my-10`}>
      <div className=' h-20 mb-4 w-5/12 border-b border-slate-600'></div>
      <div>
        <TripBoxSkeleton />
        <TripBoxSkeleton />
      </div>
      <div className=" mx-auto opacity-50">
        <div className="rounded-full h-6 w-1/12 mx-auto bg-slate-400"></div>
      </div>
    </div>
  );
};

export default TripPlanSkeleton;
