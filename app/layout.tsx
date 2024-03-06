import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rgm1dlw.css" />
      </head>
      <body className="font-[sofia-pro,_sans-serif] font-medium not-italic antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
