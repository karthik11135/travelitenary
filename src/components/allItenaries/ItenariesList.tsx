import React from 'react';
import ItenaryBox from './ItenaryBox';
import { auth } from '@/db/auth';
import { redirect } from 'next/navigation';
import { getItenariesForUser } from '@/actions/itenaryActions';

const ItenariesList = async () => {
  const session = await auth();

  if (!session) redirect('/login');
  const itenaries = await getItenariesForUser(session.user.userId);;

  return (
    <div className="rounded-md overflow-scroll mt-10  max-h-screen w-11/12 mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-teritiary">Itenaries</h1>
      <div className="grid grid-cols-3 gap-6">
        {(itenaries === null || itenaries?.length === 0) && (
          <p className="w-fit text-yellow-500 p-1 mt-10 text-lg">
            No trips planned
          </p>
        )}
        {itenaries?.map((it, ind) => {
          return (
            <ItenaryBox
              title={it.title}
              date={it.waypoints[0].wpDate.slice(0, -12)}
              wpDes={it.waypoints[0].wpDescription}
              wpTitle={it.waypoints[0].wpTitle}
              id={it.id}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItenariesList;
