import React from 'react';

const TripBoxSkeleton = () => {
  return (
    <div className="w-full relative my-4 py-3 rounded-xl bg-slate-300 opacity-50 px-5">
      <div className="grid grid-cols-12 ">
        <div className="col-span-9">
          <div className=" mb-5 text-supreme">
            <div className="bg-slate-400 rounded-full h-5 outline-none font-extrabold p-2 bg-none w-3/6  " />
          </div>
          <div className="">
            <div className=" h-16 w-full rounded-full bg-slate-400 -ms-2 "></div>
          </div>
        </div>

        <div className="px-2 py-3 col-span-3">
          <div className="h-4 bg-slate-400 rounded-full mb-2 w-4/6" />
          <div className=" bg-slate-400  rounded-full h-4 w-4/6" />
        </div>
      </div>

      <div className=" h-4 bg-slate-400 rounded-full w-1/12  mt-4"></div>
    </div>
  );
};

export default TripBoxSkeleton;
