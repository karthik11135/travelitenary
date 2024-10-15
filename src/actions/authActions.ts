'use server';
import prisma from '@/db/client';
import { formMessage } from '@/types/actionTypes';
import { signupZodSchema } from '@/types/zodSchemas';
import { loginType, loginZodSchema } from '@/types/zodSchemas';

export const signupAction = async (
  initialMessage: formMessage,
  formData: FormData
) => {
  const signupDetails = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    provider: 'credentials',
  };

  const { success } = signupZodSchema.safeParse(signupDetails);
  if (!success) {
    return { message: 'Wrong inputs', ok: false };
  }

  try {
    const user = await userExists(signupDetails.email);

    if (user) return { message: 'User already exists', ok: false };

    await prisma.user.create({
      data: signupDetails,
    });
    return { message: 'User created successfully', ok: true };
  } catch (err) {
    console.log(err);
    return { message: 'Db connection failed/no network', ok: false };
  }
};

export const loginAction = async (
  credentials: Partial<Record<'email' | 'password', unknown>>
) => {
  const loginDetails: loginType = {
    email: credentials.email as string,
    password: credentials.password as string,
  };

  console.log('login detiLS', loginDetails);
  const { success } = loginZodSchema.safeParse(loginDetails);

  if (!success) return null;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email as string,
      },
    });

    if (!user) return null;

    if (
      user?.password === credentials.password &&
      user.provider === 'credentials'
    ) {
      return {
        username: user?.name as string,
        userId: user?.id as number,
        emailId: credentials.email as string,
      };
    }
  } catch (err) {
    return null;
  }
};

export const userExists = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) return false;
  return user;
};
