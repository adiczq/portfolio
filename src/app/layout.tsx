import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adiczq.dev"),

  title: {
    default: "Adrian Lacheta | Frontend & Full-stack Developer",
    template: "%s | Adrian Lacheta",
  },

  description:
    "Frontend and full-stack developer based in Rybnik, Poland. I build modern web applications with React, Next.js and TypeScript, backed by years of engineering and technical experience.",

  keywords: [
    "Adrian Lacheta",
    "Frontend Developer",
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Rybnik",
    "Poland",
  ],

  authors: [
    {
      name: "Adrian Lacheta",
      url: "https://adiczq.dev",
    },
  ],

  creator: "Adrian Lacheta",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adiczq.dev",
    siteName: "Adrian Lacheta",
    title: "Adrian Lacheta | Frontend & Full-stack Developer",
    description:
      "Modern web development with an engineering mindset. React, Next.js, TypeScript and full-stack applications.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adrian Lacheta — Frontend & Full-stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adrian Lacheta | Frontend & Full-stack Developer",
    description:
      "Modern web development with an engineering mindset. React, Next.js and TypeScript.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}