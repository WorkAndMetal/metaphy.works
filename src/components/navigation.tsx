"use client";

import Link from "next/link";
import { Compass, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./language-context";
import LanguageToggle from "./language-toggle";
import ThemeToggle from "./theme-toggle";

const navLinks = {
  en: [
    { label: "Home", href: "#hero" },
    { label: "Tours", href: "#tours" },
    { label: "About us", href: "#about" },
    { label: "Photo gallery", href: "#gallery" },
  ],
  tr: [
    { label: "Anasayfa", href: "#hero" },
    { label: "Turlar", href: "#tours" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Fotoğraf Galerisi", href: "#gallery" },
  ],
};

const whatsappCopy = {
  en: {
    label: "WhatsApp",
    text: "Hello Best Guides in Turkey, I would like to plan a private tour.",
  },
  tr: {
    label: "WhatsApp",
    text: "Merhaba, Best Guides in Turkey. Özel bir tur planlamak istiyorum.",
  },
} as const;

export default function Navigation() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const links = navLinks[language];
  const whatsapp = whatsappCopy[language];

  const fallbackWhatsapp = "905321646782";
  const configuredWhatsapp = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsapp
  ).replace(/\D/g, "");
  const whatsappNumber = configuredWhatsapp || fallbackWhatsapp;
  const whatsappText = encodeURIComponent(whatsapp.text);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-white/15 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="#hero" className="flex items-center gap-2 text-sm font-semibold text-theme">
          <div className="rounded-full bg-amber-300/20 p-2 text-amber-200">
            <Compass className="size-4" />
          </div>
          <span className="hidden sm:inline">Best Guides in Turkey</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-theme rounded-lg transition hover:bg-white/20"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-emerald-200"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">{whatsapp.label}</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center size-9 rounded-lg text-theme"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <LanguageToggle className="relative" />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden border-t border-white/15 bg-white/10 backdrop-blur-md">
            <div className="flex flex-col gap-1 px-6 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-theme rounded-lg transition hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
