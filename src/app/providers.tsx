"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FunctionComponent } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  const router = useRouter();

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
