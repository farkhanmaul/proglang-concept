import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://farkhanmaul.github.io/proglang-concept'),
  title: {
    default: "Programming Language Concepts - Explore the Evolution of Code",
    template: "%s | Programming Language Concepts"
  },
  description: "Discover the fascinating evolution of programming languages, from their historical origins to modern innovations. Explore concepts, meet the creators, and understand the paradigms that shape software development.",
  keywords: [
    "programming languages",
    "software development",
    "coding",
    "computer science",
    "programming paradigms",
    "language history",
    "programming concepts",
    "developers",
    "programming education",
    "software engineering",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "TypeScript",
    "Rust",
    "Go",
    "Swift",
    "Kotlin",
    "PHP"
  ],
  authors: [{ name: "Programming Language Concepts" }],
  creator: "Programming Language Concepts",
  publisher: "Programming Language Concepts",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farkhanmaul.github.io/proglang-concept",
    siteName: "Programming Language Concepts",
    title: "Programming Language Concepts - Explore the Evolution of Code",
    description: "Discover the fascinating evolution of programming languages, from their historical origins to modern innovations. Explore concepts, meet the creators, and understand the paradigms that shape software development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Programming Language Concepts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Language Concepts - Explore the Evolution of Code",
    description: "Discover the fascinating evolution of programming languages, from their historical origins to modern innovations.",
    images: ["/og-image.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://farkhanmaul.github.io/proglang-concept",
  },
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ProgLang Concepts",
  },
  formatDetection: {
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Programming Language Concepts",
  description: "Discover the fascinating evolution of programming languages, from their historical origins to modern innovations.",
  url: "https://farkhanmaul.github.io/proglang-concept",
  author: {
    "@type": "Organization",
    name: "Programming Language Concepts"
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Programming Languages",
    description: "A comprehensive collection of programming languages with their history, creators, and concepts",
    numberOfItems: 12,
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        name: "JavaScript",
        description: "A high-level, interpreted programming language",
        dateCreated: "1995",
        creator: {
          "@type": "Person",
          name: "Brendan Eich"
        }
      },
      {
        "@type": "SoftwareApplication",
        name: "Python",
        description: "A high-level, interpreted programming language with dynamic semantics",
        dateCreated: "1991",
        creator: {
          "@type": "Person",
          name: "Guido van Rossum"
        }
      },
      {
        "@type": "SoftwareApplication",
        name: "TypeScript",
        description: "A strongly typed programming language that builds on JavaScript",
        dateCreated: "2012",
        creator: {
          "@type": "Organization",
          name: "Microsoft"
        }
      }
    ]
  }
};

import { ThemeProvider } from '@/lib/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="proglang-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}