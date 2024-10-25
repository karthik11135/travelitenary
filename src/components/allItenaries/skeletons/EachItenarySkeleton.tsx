import React from 'react';

const EachItenarySkeleton = () => {
  return (
    <div>
      <div className="border px-5 bg-slate-300 rounded-md py-4  w-5/6 mx-auto mt-10">
        <div className="flex mb-4">
          <div className="h-10 animate-pulse w-5/12 bg-slate-100 rounded-full "></div>
          <div className="ms-auto flex  gap-3 items-center">
            <div className="bg-slate-100 animate-pulse ms-2 text-lg h-7 w-16 font-bold hover:-translate-y-0.5 transition rounded-full z-20 right-2 bottom-2 px-3"></div>
            <div className=" cursor-pointer p-1 rounded-full h-7  w-7 bg-slate-100"></div>
          </div>
        </div>
        <div className="h-36 mb-3 animate-pulse w-full rounded-lg bg-slate-100">
          <div className="flex p-2">
            <div className="h-7 w-2/6 bg-slate-200 rounded-full"></div>
            <div className="h-7 w-1/12 bg-slate-200 rounded-full ms-auto"></div>
          </div>
          <div className="h-14 bg-slate-200 p-2 rounded-lg m-2"></div>
          <div className="w-1/12 bg-slate-200 rounded-full h-4 ms-auto me-2"></div>
        </div>
        <div className="h-36 animate-pulse  mb-3 w-full rounded-lg bg-slate-100">
          <div className="flex p-2">
            <div className="h-7 w-2/6 bg-slate-200 rounded-full"></div>
            <div className="h-7 w-1/12 bg-slate-200 rounded-full ms-auto"></div>
          </div>
          <div className="h-14 bg-slate-200 p-2 rounded-lg m-2"></div>
          <div className="w-1/12 bg-slate-200 rounded-full h-4 ms-auto me-2"></div>
        </div>{' '}
        <div className="h-36 animate-pulse mb-3 w-full rounded-lg bg-slate-100">
          <div className="flex p-2">
            <div className="h-7 w-2/6 bg-slate-200 rounded-full"></div>
            <div className="h-7 w-1/12 bg-slate-200 rounded-full ms-auto"></div>
          </div>
          <div className="h-14 bg-slate-200 p-2 rounded-lg m-2"></div>
          <div className="w-1/12 bg-slate-200 rounded-full h-4 ms-auto me-2"></div>
        </div>
        <div className="px-2 animate-pulse mx-auto w-fit font bold text-teritiary font-bold">
          <div className="px-2.5 py-1 h-6 w-20 rounded-full bg-slate-100 ms-2 "></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EachItenarySkeleton;
