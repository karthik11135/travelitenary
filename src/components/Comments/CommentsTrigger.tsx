'use client';
import React from 'react';
import { useState } from 'react';
import { CrossIcon } from '@/ui/Icons';
import { CommentBox } from './CommentBox';
import { AnimatePresence } from 'framer-motion';

const CommentsTrigger = ({ wayPointId }: { wayPointId: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col text-slate-200">
      <button
        className="bg-secondary rounded-full cursor-pointer px-3 py-1.5 text-xs font-bold "
        onClick={() => setOpen((open) => !open)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
      >
        {!open ? (
          'Comments'
        ) : (
          <div className="mx-auto w-fit">
            <CrossIcon />
          </div>
        )}
      </button>
      <div>
        <AnimatePresence>
          {open && <CommentBox wayPointId={wayPointId} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CommentsTrigger;
