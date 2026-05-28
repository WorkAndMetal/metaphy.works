"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPinned, MessageCircle } from "lucide-react";
import { useLanguage } from "./language-context";

const copy = {
  en: {
    badge: "Cappadocia Premium Tour Gallery",
    title: "Discover Cappadocia's iconic valleys and landmarks",
    description:
      "This page showcases the visual highlights of our Cappadocia package and helps travelers understand the route quality before planning on WhatsApp.",
    back: "Back to homepage",
    cta: "Ask about this tour",
    whatsappText:
      "Hello Best Guides in Turkey, I want details for the Cappadocia tour.",
    locations: [
      {
        name: "Goreme Open Air Museum",
        image: "/images/cappadocia/goreme-open-air-museum.jpg",
        description:
          "Rock-cut churches and frescoes inside one of Cappadocia's most valuable cultural heritage sites.",
      },
      {
        name: "Uchisar Castle",
        image: "/images/cappadocia/uchisar-castle.jpg",
        description:
          "A natural rock fortress with panoramic views over valleys and fairy chimney landscapes.",
      },
      {
        name: "Derinkuyu Underground City",
        image: "/images/cappadocia/derinkuyu-underground-city.jpg",
        description:
          "Multi-level underground settlement revealing the region's remarkable engineering and history.",
      },
      {
        name: "Ihlara Valley",
        image: "/images/cappadocia/ihlara-valley.jpg",
        description:
          "A scenic canyon route blending nature, riverside paths, and hidden cave churches.",
      },
      {
        name: "Cappadocia Balloon View",
        image: "/images/cappadocia/cappadocia-hot-air-balloons.jpg",
        description:
          "The iconic sunrise balloon panorama that defines the premium Cappadocia experience.",
      },
    ],
  },
  tr: {
    badge: "Kapadokya Premium Tur Galerisi",
    title: "Kapadokya’nın ikonik vadilerini ve simge noktalarını keşfedin",
    description:
      "Bu sayfa, Kapadokya paketimizin öne çıkan görsellerini sunar; WhatsApp üzerinden planlama öncesi rotayı daha iyi anlamanızı sağlar.",
    back: "Ana sayfaya dön",
    cta: "Tur hakkında bilgi alın",
    whatsappText:
      "Merhaba, Best Guides in Turkey. Kapadokya turu hakkında bilgi almak istiyorum.",
    locations: [
      {
        name: "Göreme Açık Hava Müzesi",
        image: "/images/cappadocia/goreme-open-air-museum.jpg",
        description:
          "Kapadokya’nın en değerli miras alanlarından birindeki kaya oyma kiliseler ve freskler.",
      },
      {
        name: "Uçhisar Kalesi",
        image: "/images/cappadocia/uchisar-castle.jpg",
        description:
          "Vadiler ve peri bacalarına panoramik bakan doğal kaya kalesi.",
      },
      {
        name: "Derinkuyu Yeraltı Şehri",
        image: "/images/cappadocia/derinkuyu-underground-city.jpg",
        description:
          "Bölgenin etkileyici mühendisliğini ve tarihini gösteren çok katlı yeraltı yerleşimi.",
      },
      {
        name: "Ihlara Vadisi",
        image: "/images/cappadocia/ihlara-valley.jpg",
        description:
          "Doğa, dere kenarı yolları ve gizli kaya kiliselerini birleştiren manzaralı kanyon rotası.",
      },
      {
        name: "Kapadokya Balon Manzarası",
        image: "/images/cappadocia/cappadocia-hot-air-balloons.jpg",
        description:
          "Kapadokya deneyimini özetleyen ikonik gün doğumu balon manzarası.",
      },
    ],
  },
} as const;

export default function CappadociaContent() {
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
