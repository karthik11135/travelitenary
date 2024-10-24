import React from 'react';
import { auth } from '@/db/auth';
import FinalTrip from '@/components/trip-planning/FinalTrip';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth();

  if(!session) {
    redirect("/login")
  }
  return <FinalTrip />;
};

export default page;
