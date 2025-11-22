import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Your Site Name",
    template: "%s | Your Site Name",
  },

  description:
    "This is a modern web application built using Next.js. Fast, SEO-friendly and fully responsive.",

  keywords: [
    "next js",
    "react",
    "full stack",
    "seo friendly website",
    "modern web app",
  ],

  authors: [
    { name: "Sheauly Akhter", url: "https://your-portfolio.com" },
  ],

  creator: "Sheauly Akhter",
  publisher: "Your Company",

  metadataBase: new URL("https://your-domain.com"),

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "bn-BD": "/bn-BD",
    },
  },

  openGraph: {
    title: "Your Site Name – Modern Web App",
    description:
      "A powerful web application built with Next.js, optimized for performance and SEO.",
    url: "https://your-domain.com",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Your Site Name",
    description: "Modern Web App built with Next.js",
    images: ["https://your-domain.com/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  manifest: "/site.webmanifest",

  category: "technology",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-code",
    bing: "your-bing-code",
    other: {
      me: ["sheauly@example.com"],
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
