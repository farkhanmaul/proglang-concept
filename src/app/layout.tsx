import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programming Language Concepts | ProgLang",
  description: "Discover the fascinating evolution of programming languages. Explore concepts, meet creators, and understand paradigms that shape software development. From JavaScript to Rust, explore 50+ languages.",
  keywords: ["programming languages", "software development", "JavaScript", "Python", "Java", "C++", "TypeScript", "Rust", "programming concepts", "language history"],
  authors: [{ name: "Programming Language Concepts" }],
  creator: "ProgLang Concepts",
  publisher: "ProgLang Concepts",
  openGraph: {
    title: "Programming Language Concepts | ProgLang",
    description: "Discover the fascinating evolution of programming languages. Explore concepts, meet creators, and understand paradigms that shape software development.",
    url: "https://proglang-concept.vercel.app",
    siteName: "ProgLang Concepts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Language Concepts | ProgLang",
    description: "Discover the fascinating evolution of programming languages. Explore concepts, meet creators, and understand paradigms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
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