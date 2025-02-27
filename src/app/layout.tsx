import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nihongo Quiz Arena",
  description: "Improve your knowledge quickly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b263b]`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="text-slate-300 hover:text-slate-200 hover:bg-slate-600 transition-all duration-300 ease-in-out cursor-pointer size-8 aspect-square m-2 lg:relative absolute left-0 top-0" />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
