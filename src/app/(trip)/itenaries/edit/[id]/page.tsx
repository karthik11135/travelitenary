import React from 'react';
import { auth } from '@/db/auth';
import { redirect } from 'next/navigation';
import { getItenaryAction } from '@/actions/itenaryActions';
import EditItenary from '@/components/editItenary/EditItenary';

const page = async ({ params }: { params: { id: number } }) => {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  const itenary = await getItenaryAction(Number(params.id));

  return (
    <div>
      <EditItenary itenary={itenary} />
    </div>
  );
};

export default page;
