import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

import { UserRole } from '@/entities/user';

export const {
  auth,
  handlers,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  trustHost: true,
  session: { strategy: 'jwt' },
  providers: [
    GitHub({
      profile(profile) {
        return {
          ...profile,
          id: String(profile.id),
          role: (profile.role as UserRole) ?? UserRole.USER,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || UserRole.USER;
      }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role || UserRole.USER;
      }

      return session;
    },
  },
  pages: {
    // signIn: '/auth',
    // signOut: '/auth/logout',
    // error: '/auth/error',
    // newUser: '/auth/register',
    // verifyRequest: '/auth/verify-request',
  },
});
