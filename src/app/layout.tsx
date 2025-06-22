import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingBarProvider from "@/components/LoadingBarProvider";
import ReduxProvider from "@/store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakarshan Skill Development Center",
  description: "Professional courses in Computer, Tally, Spoken English, and Beauty Wellness at affordable fees in Gurugram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ReduxProvider>
        <LoadingBarProvider>
          <Navbar />  
          <main className="flex-grow">
            {children}  
          </main>
          <Footer />
        </LoadingBarProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
