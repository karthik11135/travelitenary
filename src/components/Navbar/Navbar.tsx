import Link from 'next/link';
import React from 'react';
import { auth } from '@/db/auth';
import Logout from './Logout';
import NavbarMotionWrapper from './NavbarMotionWrapper';

const Navbar = async () => {
  const session = await auth()
  if (session) return <div></div>;
  return (
    <div className="overflow-auto">
      <NavbarMotionWrapper>
        <Link href={'/'} className="font-bold text-4xl text-teritiary ms-4 ">
          Travel
        </Link>
        <div className="ms-auto flex font-semibold items-center space-x-5 text-teritiary me-4">
          {!session && (
            <>
              <Link
                href={'/signup'}
                className="text-lg transition hover:-translate-y-0.5"
              >
                Signup
              </Link>
              <Link
                href={'/login'}
                className="text-lg transition hover:-translate-y-0.5"
              >
                Login
              </Link>
            </>
          )}
          {session && <Logout />}
        </div>
      </NavbarMotionWrapper>
    </div>
  );
};

export default Navbar;
