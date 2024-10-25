'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { redirect, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import CustomFormMessage from '@/ui/CustomFormMessage';
import { useTransition } from 'react';
import Loader from '@/ui/Loader';
import { GoogleButton } from '@/ui/SocialLogin';

const Login = () => {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const loginHandler = (formData: FormData) => {
    startTransition(async () => {
      try {
        const res = await signIn('credentials', {
          email: formData.get('email'),
          password: formData.get('password'),
          redirect: true,
        });

        if (res?.error) {
          return;
        }
      } catch (err) {
        console.log('heres the error', err);
      }
    });
  };

  if (session) {
    redirect('/');
  }

  return (
    <div className="bg-primary rounded-lg shadow-md p-8 w-full mt-10 mx-auto max-w-md">
      <h2 className="text-2xl font-semibold text-teritiary mb-6">
        Login to your account
      </h2>
      <form action={loginHandler}>
        <div className="mb-4 text-teritiary">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 focus:outline-none p-2 w-full bg-teritiary text-black font-bold border rounded-md "
          />
        </div>
        <div className="mb-4 text-teritiary">
          <label htmlFor="password" className="block text-sm font-medium ">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="mt-1 focus:outline-none p-2 w-full bg-teritiary text-black font-bold border rounded-md "
          />
        </div>
        <div className="">
          {error && (
            <CustomFormMessage
              message="Wrong creds / network issues"
              ok={false}
            />
          )}
        </div>

        <button
          type="submit"
          disabled={isPending ? true : false}
          className="w-full p-2 bg-supreme disabled:cursor-not-allowed disabled:text-primary font-bold hover:-translate-y-0.5 transition text-teritiary rounded-md "
        >
          {!isPending ? 'Login' : <Loader />}
        </button>
      </form>
      <div className="border w-full my-7 border-secondary"></div>
      <GoogleButton />
    </div>
  );
};

export default Login;
