'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import CustomTextarea from '@/ui/TextAreaElement';
import { AddIcon } from '@/ui/Icons';
import { useContext } from 'react';
import { ItenaryDetailsContext } from './TripContext';
import DatePickerFeature from '@/ui/DatePicker';
import { DateType } from './TripContext';

const TripBox = ({ num }: { num: number }) => {
  const [titleInput, setTitleInput] = useState('');
  const [description, setDescription] = useState('');
  const [dates, setDates] = useState<DateType>({
    startDate: null,
    endDate: null,
  });
  const costRef = useRef<HTMLInputElement | null>(null)
  const { itenaryArr, setItenaryArr } = useContext(ItenaryDetailsContext);

  const addTripBox = async () => {
    if(costRef.current) console.log(costRef.current.value)
    setItenaryArr((prev) => {
      prev[itenaryArr.length - 1] = {
        title: titleInput,
        description: description,
        pickedDate: dates,
        discreteCost: (costRef.current) ? Number(costRef.current.value) : 0,
      };
      console.log(itenaryArr);
      const tempArr = [
        ...prev,
        {
          title: '',
          description: '',
          pickedDate: { startDate: null, endDate: null },
          discreteCost: 0,
        },
      ];
      console.log(itenaryArr, 'i think its done');
      return tempArr;
    });
  };

  return (
    <div className="w-full relative my-4 py-3 rounded-md  px-5 bg-gradient-to-r from-secondary to-primary">
      {num !== itenaryArr.length && (
        <div className="absolute top-0 left-0 z-10 opacity-35 w-full h-full bg-black"></div>
      )}
      <div className="grid grid-cols-12 ">
        <div className="col-span-9">
          <div className=" mb-5 text-supreme">
            <p className="inline text-2xl text-white font-extrabold me-3">
              {num}.
            </p>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitleInput(e.target.value)
              }
              className="bg-transparant text-zinc-50  bg-transparent border-b outline-none font-extrabold text-2xl  p-2 bg-none w-3/6 focus:outline-none "
              placeholder="Step"
            />
          </div>
          <div className="">
            <p className="inline text-2xl text-transparent font-extrabold  me-3">
              {num}.
            </p>
            <CustomTextarea
              onChange={(e) => setDescription(e.target.value)}
              className="w-5/6 p-2 bg-transparent text-zinc-50 focus:outline-none outline-none border-b text-lgas font-bold "
              minRows={1}
            />
          </div>
        </div>

        <div className="px-2 py-3 col-span-3">
          <DatePickerFeature dates={dates} setDates={setDates} />
          <input
            ref={costRef}
            type="number"
            placeholder='Cost ($)'
            className=" bg-slate-800 text-md text-teritiary  px-4 py-1 my-2 w-4/6 rounded-md focus:outline-none outline-none"
          />
        </div>
      </div>

      {num === itenaryArr.length && (
        <div onClick={addTripBox} className="cursor-pointer w-fit mx-auto mt-4">
          <AddIcon />
        </div>
      )}
    </div>
  );
};

export default TripBox;
