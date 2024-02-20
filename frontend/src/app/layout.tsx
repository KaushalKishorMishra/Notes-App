import type { Metadata } from "next";
import dotenv from "dotenv"

import '../styles/globals.css'

export const metadata: Metadata = {
  title: "NoteVerse",
  description: "A free notes app that is different form others and is open source/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
