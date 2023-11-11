"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { FunctionComponent } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default Providers;
