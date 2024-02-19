import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The best animated portfolio website",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ---------- Animate Prisence from framer motion ---------- */}
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
