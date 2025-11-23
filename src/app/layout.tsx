import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import { LanguageProvider } from "@/context/LanguageContext";
import { AppLayout } from "./AppLayout";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: '--font-roboto-mono' });

const siteUrl = "https://enrikehernandez.com"; // Replace with your actual site URL
const ogImageUrl = `${siteUrl}/og-image.jpg`; // Replace with your actual Open Graph image URL
const twitterHandle = "@enrikehernandez"; // Replace with your actual Twitter handle

export const metadata: Metadata = {
  title: "Enrike Hernández | Elite Executor",
  description: "Elite Executor for immediate execution intervention.",
  metadataBase: new URL(siteUrl), // For absolute URLs in metadata
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Enrike Hernández | Elite Executor",
    description: "Elite Executor for immediate execution intervention.",
    url: siteUrl,
    siteName: "Enrike Hernández",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Enrike Hernández | Elite Executor",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    creator: twitterHandle,
    title: "Enrike Hernández | Elite Executor",
    description: "Elite Executor for immediate execution intervention.",
    images: [ogImageUrl],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${roboto_mono.variable} font-sans antialiased`}>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Enrike Hernández",
              "url": siteUrl,
              "logo": `${siteUrl}/logo.png`, // Assuming you have a logo.png in public folder
              "sameAs": [
                "https://twitter.com/enrikehernandez", // Replace with actual social media links
                "https://linkedin.com/in/enrikehernandez"
              ]
            })
          }}
        />
          <LanguageProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </LanguageProvider>
      </body>
    </html>
  );
}