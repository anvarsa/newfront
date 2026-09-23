import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angor Servis | Professional Ustaxona",
  description: "Avtomobillar va texnikalarni sifatli va kafolatli ta'mirlash xizmati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-100 text-slate-900 font-sans">
        <div className="site-wrapper flex flex-col min-h-screen">
          <Header />
          
          <div className="main-container flex flex-col lg:flex-row flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 gap-6">
            <Sidebar />
            
            <main className="content flex-1 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              {children}
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}