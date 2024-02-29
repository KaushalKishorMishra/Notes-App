import type { Metadata } from "next";
import dotenv from "dotenv"
import { UserProvider } from "@auth0/nextjs-auth0/client";

import '../styles/globals.css'
import '../styles/waves_patterns.css'
import Navbar from "./components/templates/Navbar";


export const metadata: Metadata = {
  title: "NoteVerse",
  description: "A free notes app that is different form others and is open source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en" data-theme="light">
        <head>
          {/* <link rel="icon" href="../../public/SVG/noteverse-lightmode-logo.svg" /> */}
        </head>
        <body>
          {/* <Navbar /> */}
          {children}
        </body>
      </html>
    </UserProvider>
  );
}
