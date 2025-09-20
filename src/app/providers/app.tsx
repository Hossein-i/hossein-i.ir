'use client';

import React from 'react';

import { AuthProvider } from './auth';
import { UIProvider } from './ui';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AppProviderProps extends React.PropsWithChildren {}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const { children } = props;

  return (
    <AuthProvider>
      <UIProvider>{children}</UIProvider>
    </AuthProvider>
  );
};
