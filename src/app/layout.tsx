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
  metadataBase: new URL("https://www.adiczq.dev"),

  title: {
    default: "ADICZQ | Adrian Lacheta – Frontend Developer",
    template: "%s | ADICZQ",
  },

  description:
    "ADICZQ — portfolio of Adrian Lacheta, a frontend and full-stack developer from Rybnik, Poland. React, Next.js, TypeScript and modern web development with an engineering mindset.",

  keywords: [
    "ADICZQ",
    "adiczq.dev",
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
      url: "https://www.adiczq.dev",
    },
  ],

  creator: "Adrian Lacheta",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adiczq.dev",
    siteName: "ADICZQ",
    title: "ADICZQ | Adrian Lacheta – Frontend Developer",
    description:
      "Frontend and full-stack development with an engineering mindset. React, Next.js and TypeScript.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ADICZQ — Adrian Lacheta, Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ADICZQ | Adrian Lacheta – Frontend Developer",
    description:
      "Frontend and full-stack development with an engineering mindset. React, Next.js and TypeScript.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ADICZQ",
  alternateName: ["ADICZQ DEV", "adiczq.dev"],
  url: "https://www.adiczq.dev/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}