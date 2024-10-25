'use client';
import { EachWaypointType, DateType } from '@/types/types';
import { useEffect, useState } from 'react';
import CustomTextarea from '@/ui/TextAreaElement';
import DatePickerFeature from '@/ui/DatePicker';
import { motion } from 'framer-motion';

export const EditWaypoint = ({
  wpDetails,
  index,
  onUpdate,
}: {
  wpDetails: EachWaypointType;
  index: number;
  onUpdate: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  const [wpTitle, setWpTitle] = useState(wpDetails.wpTitle);
  const [wpDescription, setWpDescription] = useState(wpDetails.wpDescription);
  const [wpCost, setWpCost] = useState<null | number>(wpDetails.wpCost > 0 ? wpDetails.wpCost : null);
  const [dates, setDates] = useState<DateType>({
    startDate: new Date(Date.parse(wpDetails.wpDate)),
    endDate: new Date(Date.parse(wpDetails.wpDate)),
  });

  useEffect(() => {
    onUpdate((prev) => {
      return {
        ...prev,
        [index - 1]: {
          id: wpDetails.id || -1,
          wpCost,
          wpTitle,
          wpDescription,
          wpDate: dates.startDate ? dates.startDate.toLocaleString() : '',
        },
      };
    });
  }, [wpTitle, wpDescription, wpCost, dates]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 80 }}
      className="w-full mb-4 relative py-3 rounded-md  px-5 bg-gradient-to-r from-secondary to-primary"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className=" mb-5 text-supreme">
            <p className="inline text-2xl text-teritiary font-extrabold me-5">
              {index}
            </p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setWpTitle(e.target.value)
              }
              value={wpTitle}
              className="bg-transparant text-teritiary bg-transparent border-b outline-none font-extrabold text-2xl p-2 bg-none w-3/6 focus:outline-none "
              placeholder="Waypoint title"
            />
          </div>
          <div className="">
            <p className="inline text-2xl text-transparent font-extrabold  me-3">
              {2}.
            </p>
            <CustomTextarea
              initialVal={wpDescription}
              onChange={(e) => setWpDescription(e.target.value)}
              className="w-5/6 p-2 bg-transparent text-zinc-50 focus:outline-none outline-none border-b text-lgas font-bold "
              minRows={1}
            />
          </div>
        </div>

        <div className="px-2 py-3 col-span-3">
          <DatePickerFeature dates={dates} setDates={setDates} />
          <input
            value={wpCost as number}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWpCost(Number(e.target.value))
            }
            type="number"
            placeholder="Cost ($)"
            className=" bg-slate-50 text-md text-black font-bold  px-4 py-1 my-2 w-4/6 rounded-md focus:outline-none outline-none"
          />
        </div>
      </div>
    </motion.div>
  );
};
