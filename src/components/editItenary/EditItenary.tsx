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
  
  const [wpData, setWpdata] = useState({});
  
    const router = useRouter()
  
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    if (!itenary) return;
    const wpArr = Object.values(wpData) as [];
    const res = await editItenaryAction(itenary?.id, title, wpArr);

    if (res) {
      console.log('hopefully done well');
      router.push(`/itenaries/${itenary.id}`);
    } else {
      console.log('somethign went wrong');
    }
    setIsPending(false);
  };

  return (
    <div className="text-white pt-10">
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="focus:outline-none text-4xl w-full border-b bg-transparant pb-2 mb-4 border-zinc-500 bg-supreme placeholder:opacity-40 outline-none placeholder:text-neutral-400"
          />
        </div>
        <div className="w-4/6 p-3 rounded-lg border border-teritiary">
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
          className="bg-secondary disabled:cursor-not-allowed disabled:opacity-75 font-bold text-slate-200 px-2 py-1 rounded-full transition hover:-translate-y-0.5"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditItenary;
