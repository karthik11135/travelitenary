import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginAction, userExists } from '@/actions/authActions';
import google from 'next-auth/providers/google';
import prisma from './client';
import { NextAuthConfig } from 'next-auth';

declare module 'next-auth' {
  interface JWT {
    userId: number;
    emailId: string;
  }

  interface User {
    userId: number;
    emailId: string;
    username: string;
  }

  interface Session {
    user: {
      userId: number;
      username: string;
      emailId: string;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    google,
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        console.log('Reacher authorize function');
        try {
          const user = await loginAction(credentials);
          if (user) return user;
          return null;
        } catch (err) {
          console.log(err)
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user && account?.provider === 'credentials') {
        token.userId = user.userId;
        token.emailId = user.emailId;
        token.username = user.username;
      }

      if (account?.provider === 'google' && profile) {
        const userPresent = await userExists(profile?.email as string);
        if (!userPresent) {
          try {
            const newUser = await prisma.user.create({
              data: {
                email: profile.email as string,
                name: profile.name as string,
                password: null,
                provider: 'google',
              },
            });
            token.userId = newUser.id;
          } catch (err) {
            console.log(err)
            return null;
          }
        } else {
          token.userId = userPresent.id;
        }
        token.emailId = profile.email;
        token.username = profile.name;
      }

      return token;
    },

    async session({ session, token }) {
      const newSession = session;
      if (token) {
        newSession.user.userId = token.userId as number;
        newSession.user.emailId = token.emailId as string;
        newSession.user.username = token.username as string;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET || 'secr3t',

  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig);
