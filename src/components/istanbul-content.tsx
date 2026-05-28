"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPinned, MessageCircle } from "lucide-react";
import { useLanguage } from "./language-context";

const copy = {
  en: {
    badge: "Istanbul Premium Tour Gallery",
    title: "Discover Istanbul's iconic districts and landmarks",
    description:
      "This page is the second-step detail screen for the Istanbul package. Click any visual to understand what guests can expect from this curated route.",
    back: "Back to homepage",
    cta: "Ask about this tour",
    whatsappText:
      "Hello Best Guides in Turkey, I want details for the Istanbul tour.",
    locations: [
      {
        name: "Blue Mosque",
        image: "/images/istanbul/sultanahmet.jpg",
        description:
          "Iconic Ottoman imperial mosque in the Sultanahmet district, celebrated for its blue İznik tiles.",
      },
      {
        name: "Hagia Sophia",
        image: "/images/istanbul/ayasofya.jpg",
        description:
          "A masterpiece of world history where imperial architecture and spiritual heritage meet.",
      },
      {
        name: "Topkapı Palace",
        image: "/images/istanbul/topkapi-sarayi.jpg",
        description:
          "The imperial residence of Ottoman sultans, featuring courtyards, treasury, and Bosphorus views.",
      },
      {
        name: "Grand Bazaar",
        image: "/images/istanbul/kapali-carsi.jpg",
        description:
          "One of the oldest covered markets in the world, famous for crafts, jewelry, and atmosphere.",
      },
      {
        name: "Spice Bazaar",
        image: "/images/istanbul/misir-carsisi.jpg",
        description:
          "A vibrant market known for spices, teas, sweets, and Istanbul's classic trading culture.",
      },
    ],
  },
  tr: {
    badge: "İstanbul Premium Tur Galerisi",
    title: "İstanbul'un ikonik semtlerini ve simge noktalarını keşfedin",
    description:
      "Bu sayfa, İstanbul paketinin ikinci adım detay ekranıdır. Seçili rotadan neler bekleyebileceğinizi görmek için görselleri inceleyin.",
    back: "Ana sayfaya dön",
    cta: "Bu tur hakkında bilgi alın",
    whatsappText:
      "Merhaba Best Guides in Turkey, İstanbul turu hakkında bilgi almak istiyorum.",
    locations: [
      {
        name: "Sultanahmet Camii",
        image: "/images/istanbul/sultanahmet.jpg",
        description:
          "Sultanahmet'te yer alan, mavi İznik çinileriyle ünlü simgesel Osmanlı camisi.",
      },
      {
        name: "Ayasofya",
        image: "/images/istanbul/ayasofya.jpg",
        description:
          "İmparatorluk mimarisi ile manevi mirasın buluştuğu dünya tarihinin başyapıtı.",
      },
      {
        name: "Topkapı Sarayı",
        image: "/images/istanbul/topkapi-sarayi.jpg",
        description:
          "Avluları, hazinesi ve Boğaz manzarasıyla Osmanlı sultanlarının saray ikameti.",
      },
      {
        name: "Kapalıçarşı",
        image: "/images/istanbul/kapali-carsi.jpg",
        description:
          "Dünyanın en eski kapalı çarşılarından biri; el sanatları, takılar ve atmosferiyle ünlü.",
      },
      {
        name: "Mısır Çarşısı",
        image: "/images/istanbul/misir-carsisi.jpg",
        description:
          "Baharat, çay, tatlı ve İstanbul'un klasik ticaret kültürüyle ünlü canlı bir pazar.",
      },
    ],
  },
} as const;

export default function IstanbulContent() {
  const { language } = useLanguage();
  const t = copy[language];

  const fallbackWhatsapp = "905321646782";
  const configuredWhatsapp = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsapp
  ).replace(/\D/g, "");
  const whatsappNumber = configuredWhatsapp || fallbackWhatsapp;
  const whatsappText = encodeURIComponent(t.whatsappText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:px-10 lg:py-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-theme transition hover:bg-white/10"
        >
          <ArrowLeft className="size-4" />
          {t.back}
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-emerald-200"
        >
          <MessageCircle className="size-4" />
          {t.cta}
        </a>
      </div>

      <section className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-200/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-theme uppercase">
          <MapPinned className="size-3.5" />
          {t.badge}
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-theme md:text-5xl">
          {t.title}
        </h1>
        <p className="max-w-3xl text-theme-muted">{t.description}</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.locations.map((location) => (
          <article
            key={location.name}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={location.name === t.locations[0].name}
              />
            </div>
            <div className="space-y-3 p-4">
              <h2 className="text-lg font-semibold text-theme">
                {location.name}
              </h2>
              <p className="text-sm leading-relaxed text-theme-muted">
                {location.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
