import React from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateType } from '@/types/types';

interface DatePickProps {
  dates: DateType;
  setDates: React.Dispatch<React.SetStateAction<DateType>>;
}

const DatePickerFeature = ({ dates, setDates }: DatePickProps) => {

  return (

      <Datepicker
        primaryColor={'sky'}
        useRange={false}
        asSingle={true}
        value={dates}
        onChange={(newValue) =>
          setDates(newValue as React.SetStateAction<DateType>)
        }
      />

  );
};

export default DatePickerFeature;
