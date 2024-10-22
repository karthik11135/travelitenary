import React from 'react';

const ItenaryBoxSkeleton = () => {
  return (
    <div className="w-full  h-48 px-2 py-3 cursor-pointer rounded-xl opacity-75 bg-slate-200">
      <div className=" bg-slate-300 h-7 rounded-full px-4 mb-4 font-semibold"></div>
      <p className="px-4 h-3 bg-slate-200 rounded-full mb-1.5"></p>
      <p className="px-4 h-3 bg-slate-200 rounded-full mb-1.5"></p>
      <p className="px-4 h-3 bg-slate-200 rounded-full mb-1.5"></p>
      <p></p>
    </div>
  );
};

export default ItenaryBoxSkeleton;
