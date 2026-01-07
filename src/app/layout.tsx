import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Zen_Dots } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";


const inter = Inter({
  variable: "--font-inter",
  weight: ["500"], // Medium
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const  zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: {
    default: "Novrith Technology | Web, Mobile, AI & Software Solutions in Sri Lanka",
    template: "%s | Novrith Technology",
  },

  description:
    "Novrith Technology is a leading Sri Lanka–based software company specializing in web development, mobile applications, AI-powered systems, IoT solutions, and custom business software for startups and enterprises.",

  keywords: [
    "Novrith Technology",
    "Software company in Sri Lanka",
    "Web development company Sri Lanka",
    "Mobile app development Sri Lanka",
    "AI solutions Sri Lanka",
    "IoT systems Sri Lanka",
    "Custom software development",
    "Business automation software",
    "Enterprise software solutions",
    "Startup software development",
    "Sumal Nadeera",
  ],

  authors: [{ name: "Novrith Technology", url: "https://www.novrithtechnology.com" }],
  creator: "Novrith Technology",
  publisher: "Novrith Technology",

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },

  alternates: {
    canonical: "https://www.novrithtechnology.com",
  },

  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://www.novrithtechnology.com",
    siteName: "Novrith Technology",
    title: "Novrith Technology | Smart Software Solutions Sri Lanka",
    description:
      "We engineer modern web platforms, mobile apps, AI-driven systems, and advanced software solutions that help businesses grow smarter and faster.",
    images: [
      {
        url: "android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Novrith Technology – Software & AI Solutions Sri Lanka",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Novrith Technology | Web, Mobile & AI Software Solutions",
    description:
      "Future-ready web, mobile, AI, IoT, and custom software solutions built by Novrith Technology in Sri Lanka.",
    images: ["android-chrome-512x512.png"],
    creator: "@NovrithTechnology",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} ${zenDots.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
      
    </html>
  );
}
