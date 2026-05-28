import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IstanbulBackground from "../components/istanbul-background";
import Navigation from "../components/navigation";
import { LanguageProvider } from "../components/language-context";
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
  title: {
    default: "Best Guides in Turkey",
    template: "%s | Best Guides in Turkey",
  },
  description:
    "Premium private tour planning in Turkey with expert local guides. Contact us directly on WhatsApp.",
  keywords: [
    "Turkey private tours",
    "Istanbul guide",
    "Cappadocia tour guide",
    "premium turkey travel",
    "Best Guides in Turkey",
  ],
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
      <body className="min-h-full flex flex-col relative">
        <IstanbulBackground />
        <LanguageProvider>
          <Navigation />
          <div className="relative z-10 flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <footer className="mt-auto border-t border-white/15 bg-white/20 px-6 py-6 text-center text-sm text-theme-muted backdrop-blur-md">
              All copyrights Atakan Design
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
