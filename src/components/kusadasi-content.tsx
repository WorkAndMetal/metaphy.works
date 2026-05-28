"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPinned, MessageCircle } from "lucide-react";
import { useLanguage } from "./language-context";

const copy = {
  en: {
    badge: "Kusadasi Premium Tour Gallery",
    title: "Discover Kusadasi's coastal highlights and nearby heritage",
    description:
      "This page showcases key visuals for the Kusadasi package, combining seaside time with heritage stops just outside the city.",
    back: "Back to homepage",
    cta: "Ask about this tour",
    whatsappText:
      "Hello Best Guides in Turkey, I want details for the Kusadasi tour.",
    locations: [
      {
        name: "Ephesus",
        image: "/images/kusadasi/ephesus.jpg",
        description:
          "The legendary ancient city with marble streets, temples, and the Library of Celsus.",
      },
      {
        name: "Sirince Village",
        image: "/images/kusadasi/sirince.jpg",
        description:
          "Charming hillside lanes, stone houses, and local flavors just outside Kusadasi.",
      },
      {
        name: "Ladies Beach",
        image: "/images/kusadasi/ladies-beach.jpg",
        description:
          "A relaxed shoreline for swimming, sunsets, and seaside cafes close to town.",
      },
      {
        name: "Pigeon Island Castle",
        image: "/images/kusadasi/pigeon-island.jpg",
        description:
          "The postcard coastal fort reached by a short causeway from the marina.",
      },
      {
        name: "Kusadasi Marina",
        image: "/images/kusadasi/kusadasi-marina.jpg",
        description:
          "A stylish waterfront promenade with yachts, cafes, and evening ambience.",
      },
    ],
  },
  tr: {
    badge: "Kuşadası Premium Tur Galerisi",
    title: "Kuşadası'nın sahil öne çıkanları ve yakın miras noktalarını keşfedin",
    description:
      "Bu sayfa, Kuşadası paketinin öne çıkan görsellerini paylaşır; şehir dışındaki miras duraklarını sahil zamanı ile birleştirir.",
    back: "Ana sayfaya dön",
    cta: "Bu tur hakkında bilgi alın",
    whatsappText:
      "Merhaba Best Guides in Turkey, Kuşadası turu hakkında bilgi almak istiyorum.",
    locations: [
      {
        name: "Efes",
        image: "/images/kusadasi/ephesus.jpg",
        description:
          "Mermer caddeleri, tapınakları ve Celsus Kütüphanesiyle efsanevi antik kent.",
      },
      {
        name: "Şirince Köyü",
        image: "/images/kusadasi/sirince.jpg",
        description:
          "Kuşadası'nın hemen dışında şirin yokuş sokakları, taş evleri ve yerel lezzetleri.",
      },
      {
        name: "Kadınlar Denizi",
        image: "/images/kusadasi/ladies-beach.jpg",
        description:
          "Şehre yakın, yüzme, gün batımı ve sahil kafeleri için rahat bir sahil.",
      },
      {
        name: "Güvercinada Kalesi",
        image: "/images/kusadasi/pigeon-island.jpg",
        description:
          "Marinadan kısa bir geçitle ulaşılan kartpostallık sahil kalesi.",
      },
      {
        name: "Kuşadası Marina",
        image: "/images/kusadasi/kusadasi-marina.jpg",
        description:
          "Yatlar, kafeler ve akşam atmosferiyle şık bir sahil yürüyüş yolu.",
      },
    ],
  },
} as const;

export default function KusadasiContent() {
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
