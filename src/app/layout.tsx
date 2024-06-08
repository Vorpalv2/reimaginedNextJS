import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeController } from "@/components/ThemeController";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="theme-controller" data-theme="default">
        <body className={inter.className}>
          {/* <ThemeController /> */}
          <Navbar />
          <div className="container pt-12">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
