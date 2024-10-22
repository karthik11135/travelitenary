'use client';
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { itenaryType } from '@/types/types';
import { ItenaryDetailType } from '@/types/types';

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
