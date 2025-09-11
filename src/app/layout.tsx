import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programming Language Concepts",
  description: "A comprehensive resource for programming language concepts, definitions, origins, and creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}