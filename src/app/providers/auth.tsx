'use client';

import { SessionProvider } from 'next-auth/react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AuthProviderProps extends React.PropsWithChildren {}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;

  return <SessionProvider>{children}</SessionProvider>;
};
