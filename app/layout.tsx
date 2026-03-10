import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../components/velt/ui-customization/styles.css";
import { AppProviders } from "@/app/userAuth/AppProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js + Velt Collaboration Starter",
  description:
    "A minimal Next.js template with Velt SDK for real-time comments, presence, and notifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
