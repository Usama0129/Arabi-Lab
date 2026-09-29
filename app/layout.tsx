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
  title: "Arabi Lab",
  description: "アラビア語学習プラットフォーム",
  openGraph: {
    title: "Arabi Lab",
    description: "アラビア語学習プラットフォーム",
    url: "https://www.arabilab.com",
    siteName: "Arabi Lab",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Arabi Lab Logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}