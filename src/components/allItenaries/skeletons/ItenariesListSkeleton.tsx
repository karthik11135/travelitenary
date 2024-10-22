import React from 'react';
import ItenaryBoxSkeleton from './ItenaryBoxSkeleton';

const ItenariesListSkeleton = () => {
  return (
    <div className="rounded-md overflow-scroll mt-10  max-h-screen w-10/12 mx-auto">
      <h1 className="text-4xl font-bold mb-4 h-10 opacity-75 bg-slate-300 rounded-full w-3/12 text-slate-200"></h1>
      <div className="grid grid-cols-3 gap-6">
        <ItenaryBoxSkeleton />
        <ItenaryBoxSkeleton />
        <ItenaryBoxSkeleton />
        <ItenaryBoxSkeleton />
      </div>
    </div>
  );
};

export default ItenariesListSkeleton;
