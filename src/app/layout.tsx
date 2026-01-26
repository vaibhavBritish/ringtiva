import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import ReduxProvider from "@/components/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ringtiva | Performance Marketing & Call Tracking Platform",
  description:
    "Ringtiva offers AI-powered performance marketing, call tracking, lead routing, and real-time analytics to maximize conversions and business growth.",
  keywords: [
    "Ringtiva",
    "performance marketing",
    "call tracking",
    "lead generation",
    "analytics",
    "call routing",
    "marketing automation",
  ],
  icons: {
    icon: "/logo.png", 
  },
  openGraph: {
    title: "Ringtiva | Performance Marketing & Call Tracking Platform",
    description:
      "AI-powered performance marketing, call tracking, and real-time analytics for businesses to scale conversions.",
    type: "website",
    url: "https://ringtiva.com",
  },
  category: "technology",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <AuthProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
