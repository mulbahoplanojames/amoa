import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/layout/Navbar/Navbar";
import Footer from "@/layout/Footer/Footer";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMOA Tech Solutions",
  description:
    "The AMOA Tech Solution is a platform  dedicated to being a hub of creativity and innovation, specializing in designing stunning websites and apps tailored to elevate your business. ",
  icons: {
    icon: "/logo.webp",
  },
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
