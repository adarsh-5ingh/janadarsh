import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreakingNewsTicker } from "@/components/layout/BreakingNewsTicker";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "जन आदर्श | बैतूल की आवाज़",
  description: "बैतूल जिले और मध्य प्रदेश की ताजा खबरें — हकीकत जैसी खबर वैसी",
  keywords: ["बैतूल", "मध्य प्रदेश", "हिंदी समाचार", "Betul news", "MP news"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body
        className={`${notoDevanagari.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <Header />
          <BreakingNewsTicker />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
