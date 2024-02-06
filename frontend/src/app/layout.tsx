import type { Metadata } from "next";

import dotenv from "dotenv"

import '../styles/globals.css'

export const metadata: Metadata = {
  title: "Notes",
  description: "A Notes app that is different form other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
