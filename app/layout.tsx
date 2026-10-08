import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Assuming we want to use next/font/google since the design used Google Fonts
import { Geist, Geist_Mono } from 'next/font/google';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Brandon Horishny | AI & Talent Systems Architect",
  description: "Enterprise AI & Automation Architecture for Talent Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-surface font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

