'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { signupAction } from '@/actions/authActions';
import { formMessage } from '@/types/types';
import Loader from '@/ui/Loader';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomFormMessage from '@/ui/CustomFormMessage';
import { GoogleButton } from '@/ui/SocialLogin';

const initialMessage: formMessage = {
  message: '',
  ok: null,
};

const Signup = () => {
  const [state, action] = useFormState(signupAction, initialMessage);
  const colors = [
    'bg-red-200',
    'text-red-800',
    'bg-green-200',
    'text-green-800',
  ];
  return (
    <div className="bg-primary rounded-lg shadow-md p-8 w-full mx-auto mt-10 max-w-md">
      <h2 className="text-2xl font-semibold text-teritiary mb-6">
        Create an Account
      </h2>
      <form action={action}>
        <div className="mb-4 text-teritiary">
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 focus:outline-none p-2 w-full bg-teritiary text-black font-bold border rounded-md "
          />
        </div>
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

        {state.ok === false && (
          <CustomFormMessage message={state.message} ok={state.ok} />
        )}

        {state.ok && (
          <CustomFormMessage message={state.message} ok={state.ok} />
        )}
        <SignupButton />
        <div className="border w-full my-7 border-secondary"></div>
        <GoogleButton />
      </form>
    </div>
  );
};

export default Signup;

const SignupButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full p-2 bg-supreme font-bold hover:-translate-y-0.5 transition text-teritiary rounded-md "
    >
      {pending ? <Loader /> : 'Sign Up'}
    </button>
  );
};
