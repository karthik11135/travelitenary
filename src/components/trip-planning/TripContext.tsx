'use client';
import React from 'react';

import { createContext } from 'react';
import { useState } from 'react';
import TripPlan from './TripPlan';

export interface DateType {
  startDate: null | Date
  endDate: null | Date
}

export interface itenaryType {
  title: string;
  description: string;
  pickedDate: DateType
  discreteCost: number;
}

interface ItenaryDetailType {
  itenaryArr: itenaryType[];
  setItenaryArr:
    | React.Dispatch<React.SetStateAction<itenaryType[]>>
    | (() => void);
}

export const ItenaryDetailsContext = createContext<ItenaryDetailType>({
  itenaryArr: [
    {
      title: '',
      description: '',
      pickedDate: {
        startDate: null,
        endDate: null,
      }, 
      discreteCost: 0,
    },
  ],
  setItenaryArr: () => {},
});

const TripContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [itenaryArr, setItenaryArr] = useState<itenaryType[]>([
    {
      title: '',
      description: '',
      pickedDate: {
        startDate: null,
        endDate: null,
      },
      discreteCost: 0,
    },
  ]);

  return (
    <ItenaryDetailsContext.Provider value={{ itenaryArr, setItenaryArr }}>
      {children}
    </ItenaryDetailsContext.Provider>
  );
};

export default TripContextProvider;
