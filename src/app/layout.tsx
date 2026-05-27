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
  title: "Shandayai",
  description:
    "Operational intelligence, deterministic AI, and agentic infrastructure systems.",
  openGraph: {
    title: "Shandayai",
    description:
      "Operational intelligence, deterministic AI, and agentic infrastructure systems.",
    url: "https://shandayai.com",
    siteName: "Shandayai",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shandayai",
    description:
      "Operational intelligence, deterministic AI, and agentic infrastructure systems.",
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
