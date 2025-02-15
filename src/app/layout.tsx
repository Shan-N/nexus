import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";



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
    <>
    <Analytics />
    <html lang="en">
      <body
        className={`antialiased text-white bg-[#050020] h-screen`}
      >
        {children}
      </body>
    </html>
    </>
  );
}
