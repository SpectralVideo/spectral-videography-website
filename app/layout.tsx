import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nimbetics — Capture what others can't reach.",
  description: "Charlotte-based aerial drone videography. FAA Part 107 Certified. Real estate, contractors, sporting, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400&family=Cormorant+Garamond:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full" style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-white)' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
