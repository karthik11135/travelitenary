'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

const Logout = () => {

  return (
    <div
      onClick={() => signOut()}
      className="text-lg cursor-pointer transition hover:-translate-y-0.5"
    >
      Logout
    </div>
  );
};

export default Logout;
