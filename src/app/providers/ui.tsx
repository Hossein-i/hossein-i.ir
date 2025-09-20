'use client';

import { HeroUIProvider as Provider, ToastProvider } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

import { SplashCursor } from '@/shared/ui/splash-cursor';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UIProviderProps extends React.PropsWithChildren {}

export const UIProvider: React.FC<UIProviderProps> = (props) => {
  const { children } = props;

  const router = useRouter();

  return (
    <Provider navigate={router.push}>
      <ThemeProvider attribute='class' defaultTheme='system'>
        <ToastProvider />
        <SplashCursor />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
