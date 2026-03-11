import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { AppUserProvider } from "./userAuth/AppUserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velt + TipTap Collaborative Editor",
  description: "Real-time collaborative document editor with Velt and TipTap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        <AppUserProvider>{children}</AppUserProvider>
      </body>
    </html>
  );
}
