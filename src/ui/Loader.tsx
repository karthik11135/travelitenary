import React from 'react';

interface LoaderProps {
  color?: string
}

const Loader = ({color}: LoaderProps) => {

  return (
    <>
      <div
        className={`animate-spin ${color ? "text-supreme" : "text-teritiary"} inline-block size-6 border-[3px] border-current border-t-transparent rounded-full dark:teritiary`}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
export default Loader;
