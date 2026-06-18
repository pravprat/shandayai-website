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
  title: "ShandayAI — Enterprise AI Strategy & Semantic Intelligence",
  description:
    "ShandayAI helps enterprises design and operationalize governed AI systems across heterogeneous data, cloud, application, and model environments.",
  openGraph: {
    title: "ShandayAI — Enterprise AI Strategy & Semantic Intelligence",
    description:
      "AI strategy, agentic systems, and semantic intelligence platforms for governed, measurable enterprise AI.",
    url: "https://shandayai.com",
    siteName: "ShandayAI",
    type: "website",
    images: [
      {
        url: "/Shandayai_banner.png",
        width: 1600,
        height: 640,
        alt: "ShandayAI Reliability Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ShandayAI",
    description:
      "Enterprise AI strategy and reliability intelligence — evidence-backed RCA, AI-assisted reports, and governed AI systems.",
  },
  icons: {
    icon: "/Shandayai_icon.png",
    apple: "/Shandayai_icon.png",
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
