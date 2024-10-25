import React from 'react';
import { ItenaryBoxWrapper } from './Wrappers';
import { EachItenaryPreviewType } from '@/types/types';

const ItenaryBox = ({
  title,
  date,
  id,
  wpTitle,
  wpDes,
}: EachItenaryPreviewType) => {
  console.log(wpTitle);
  return (
    <ItenaryBoxWrapper id={id}>
      <div className="flex px-2 mb-2">
        <h2 className="text-3xl font-bold">{title.slice(0, 25) + `${title.length > 24 ? '...' : ''}`}</h2>
        <p className="flex font-light items-center ms-auto text-teritiary opacity-80 text-sm">
          {date ? `starts ${date}` : ''}
        </p>
      </div>
      <div className="px-2 text-sm text-teritiary tracking-tight">
        <p className="font-bold mb-1">
          {wpTitle.slice(0, 70) + `${wpTitle.length > 60 ? '...' : ''}`}
        </p>
        <p className="text-teritiary opacity-65">
          {wpDes.slice(0, 100) + `${wpDes.length > 90 ? '...' : ''}`}
        </p>
      </div>
    </ItenaryBoxWrapper>
  );
};

export default ItenaryBox;
