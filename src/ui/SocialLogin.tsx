import { signIn } from 'next-auth/react';
import Image from 'next/image';

export const GoogleButton = () => (
  <div onClick={async () => await signIn('google')}>
    <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        // className="h-[18px] w-[18px] "
        height={30}
        width={30}
      />
      Continue with Google
    </button>
  </div>
);
