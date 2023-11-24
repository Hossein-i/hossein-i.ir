import "./globals.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import HeaderLayout from "./_layouts/header";
import Providers from "./providers";
import FooterLayout from "./_layouts/footer";
import { GoogleTagManager } from "@next/third-parties/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hossein Hosseini | Hossein-i",
    template: "%s | Hossein-i",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Providers>
          <HeaderLayout />
          <main>{children}</main>
          <FooterLayout />
        </Providers>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      </body>
    </html>
  );
}
