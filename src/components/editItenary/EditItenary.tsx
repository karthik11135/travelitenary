'use client';
import React, { ChangeEvent, FormEvent } from 'react';
import { EachItenaryType, EachWaypointType } from '@/types/types';
import { useState } from 'react';
import { AddIcon } from '@/ui/Icons';
import { EditWaypoint } from './EditWaypoint';
import { editItenaryAction } from '@/actions/itenaryActions';

import { useRouter } from 'next/navigation';

const EditItenary = ({ itenary }: { itenary: EachItenaryType | null }) => {
  const [title, setTitle] = useState(itenary?.title as string);
  const [wps, setWps] = useState<EachWaypointType[] | undefined>(
    itenary?.waypoints
  );
  const [isPending, setIsPending] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const [wpData, setWpdata] = useState({});

  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    if (title.trim() === '') {
      setIsPending(false);
      setErrMessage('You cannot submit without giving titles');
      return;
    }
    if (!itenary) return;
    let wpArr = Object.values(wpData) as [];
    const wpArrProcessed = wpArr.filter((wp) => wp['wpTitle'] !== '');
    const noTitleArr = wpArr.filter((wp) => wp['wpTitle'] === '');

    if (
      (wpArr.length === 0 && wpArr[wpArr.length - 1]['wpTitle'] === '') ||
      noTitleArr.length > 0
    ) {
      setIsPending(false);
      setErrMessage('You cannot submit without giving titles');
      return;
    }

    console.log(wpArr);
    const res = await editItenaryAction(itenary?.id, title, wpArrProcessed);

    if (res) {
      console.log('hopefully done well');
      router.push(`/itenaries/${itenary.id}`);
    } else {
      console.log('somethign went wrong');
    }
    setIsPending(false);
  };

  return (
    <div className="text-white pt-10 w-10/12">
      <h1 className='text-3xl text-teritiary mb-4 font-extralight px-3'>Edit your Itenary</h1>
      <form onSubmit={submitHandler}>
        <div className="px-3">
          <input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="focus:outline-none text-4xl w-full border-b bg-transparant pb-2 mb-4 border-zinc-500 bg-supreme placeholder:opacity-40 outline-none placeholder:text-neutral-400"
          />
        </div>
        <div className="w/6 px-3 rounded-lg">
          {wps?.map((wpDetails, ind) => {
            return (
              <EditWaypoint
                onUpdate={setWpdata}
                key={ind}
                index={ind + 1}
                wpDetails={wpDetails}
              />
            );
          })}
        </div>
        <div
          className="scale-105 cursor-pointer w-fit mx-auto"
          onClick={() => {
            setWps((prev) => {
              if (!prev) return prev;
              return [
                ...prev,
                {
                  id: 0,
                  wpCost: 0,
                  wpTitle: '',
                  wpDescription: '',
                  wpDate: '',
                },
              ];
            });
          }}
        >
          <AddIcon />
        </div>

        <button
          disabled={isPending ? true : false}
          className="bg-secondary mx-3 disabled:cursor-not-allowed disabled:opacity-75 font-bold text-slate-200 px-4 py-1 rounded-full transition hover:-translate-y-0.5"
        >
          Update
        </button>
        {errMessage.length > 0 && (
          <p className="font-bold bg-supreme w-fit rounded-full text-red-300 px-3 py-2">
            {errMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default EditItenary;
