import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BR Lonestar Landscaping & Property Maintenance",
  description:
    "Premium commercial landscaping, HOA grounds care, and property maintenance for Texas communities and commercial properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
