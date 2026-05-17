import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppinsBody = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "500", "600"],
});

const poppinsHeading = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "500", "600"],
});

export const metadata: Metadata = {
  title: "BR Lonestar Landscaping & Property Maintenance",
  description:
    "Premium commercial landscaping, HOA grounds care, and property maintenance for Texas communities and commercial properties.",
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsBody.variable} ${poppinsHeading.variable}`}>{children}</body>
    </html>
  );
}
