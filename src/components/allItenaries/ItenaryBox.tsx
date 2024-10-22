import React from 'react';
import { ItenaryBoxWrapper } from './Wrappers';
import { EachItenaryPreviewType } from '@/types/types';

const ItenaryBox = ({ title, date, id, wpTitle, wpDes }: EachItenaryPreviewType) => {
  return (
    <ItenaryBoxWrapper id={id}>
      <div className="flex px-2 mb-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="flex items-center ms-auto text-slate-400 text-sm">
          starts {date}
        </p>
      </div>
      <div className="px-2 text-sm text-neutral-300 tracking-tight">
        <p className="font-bold mb-2"> {wpTitle.slice(0, 90) + '...'}</p>
        <p className="text-zinc-400">{wpDes.slice(0, 150) + '..'}</p>
      </div>
    </ItenaryBoxWrapper>
  );
};

export default ItenaryBox;
