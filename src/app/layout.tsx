import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amoa-tech.vercel.app/"),
  title: {
    default: "AMOA Tech Solutions",
    template: "%s - AMOA Tech Solution",
  },
  description:
    "The AMOA Tech Solution is a platform  dedicated to being a hub of creativity and innovation, specializing in designing stunning websites and apps tailored to elevate your business. ",
  icons: {
    icon: "@/app/favicon.ico",
  },
  keywords: [
    "AMOA",
    "AMOA Tech",
    "AMOA Tech Solution",
    "Tech",
    "Solutions",
    "website",
    "design",
    "development",
    "app",
    "innovation",
    "creativity",
    "business",
    "elevate",
    "tailored",
    "stunning",
    "hub",
  ],
  openGraph: {
    title: "AMOA Tech Solutions",
    description:
      "The AMOA Tech Solution is a platform  dedicated to being a hub of creativity and innovation, specializing in designing stunning websites and apps tailored to elevate your business. ",
    url: "https://amoa-tech.vercel.app/",
    siteName: "AMOA Tech Solutions",
    images: [
      {
        url: "https://amoa-tech.vercel.app/logo.webp",
        width: 1200,
        height: 630,
        alt: "AMOA Tech Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
