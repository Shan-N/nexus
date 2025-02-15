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
  title: "ETSA Nexus'25",
  description: "Join us at Nexus, the ultimate event hosted by ETSA PCCOE! Experience a vibrant blend of tech and non-tech events, competitions, and workshops. Unleash your potential, showcase your skills, and network with like-minded enthusiasts. Don't miss out—mark your calendars for Nexus!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[#050020] h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
