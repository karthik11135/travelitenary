import { getItenaryAction } from '@/actions/itenaryActions';
import EachItenary from '@/components/allItenaries/EachItenary';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
  const itenary = await getItenaryAction(Number(params.id));
  if (!itenary) {
    console.log("couldnot load")
    return <div>Could not load your data. Maybe try again</div>;
  }
  return <EachItenary itenary={itenary} />;
};

export default page;
