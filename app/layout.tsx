import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAREFLOW OS - Caregiver Staffing Coordination Platform",
  description: "Stop managing caregiver staffing through chaos. CAREFLOW OS helps staffing coordinators reduce no-shows, organize scheduling, and manage open shifts efficiently.",
  keywords: "caregiver staffing, scheduling, coordination, home care",
  openGraph: {
    title: "CAREFLOW OS - Caregiver Staffing Coordination",
    description: "Reduce staffing chaos and organize caregiver coordination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
