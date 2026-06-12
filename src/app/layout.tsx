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
  metadataBase: new URL("https://shandayai.com"),
  title: "ShandayAI — Enterprise AI Advisory & Semantic Intelligence Platforms",
  description:
    "ShandayAI helps enterprises move from AI experimentation to governed, production-ready systems through AI advisory, SCRCA, and semantic intelligence platforms.",
  openGraph: {
    title: "ShandayAI — Enterprise AI Advisory & Semantic Intelligence Platforms",
    description:
      "AI strategy, platform architecture, SCRCA, and semantic intelligence for measurable enterprise impact.",
    url: "https://shandayai.com",
    siteName: "ShandayAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ShandayAI",
    description:
      "Enterprise AI advisory and semantic intelligence platforms for governed, production-ready AI systems.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
