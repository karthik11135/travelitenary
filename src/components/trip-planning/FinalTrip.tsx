import React from 'react';
import TripContextProvider from './TripContext';
import TripPlan from './TripPlan';

const FinalTrip = () => {
  return (
    <TripContextProvider>
      <TripPlan />
    </TripContextProvider>
  );
};

export default FinalTrip;
