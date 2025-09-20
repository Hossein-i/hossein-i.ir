import type { DefaultSession } from 'next-auth';

import { UserRole, User as IUser } from '@/entities/user';

declare module 'next-auth' {
  interface Session {
    user: IUser & DefaultSession['user'];
  }

  interface User extends IUser {
    role?: UserRole;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: UserRole;
  }
}
