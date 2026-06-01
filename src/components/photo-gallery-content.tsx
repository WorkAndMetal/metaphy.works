"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";

const galleryImages = [
  "/bg.jpeg",
  ...Array.from({ length: 26 }, (_, index) => `/images/gallery/${index + 1}.jpeg`),
];

const copy = {
  en: {
    title: "Photo Gallery",
    body: "A curated selection from our premium experiences across Turkey.",
    altPrefix: "Gallery image",
  },
  tr: {
    title: "Fotoğraf Galerisi",
    body: "Türkiye genelinde tasarladığımız premium deneyimlerden özenli bir seçki.",
    altPrefix: "Galeri görseli",
  },
} as const;

export default function PhotoGalleryContent() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(250,204,21,0.2),transparent_34%),radial-gradient(circle_at_48%_100%,rgba(139,92,246,0.18),transparent_38%)]" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-12 pt-24 md:px-10 md:pt-28">
        <div>
          <h1 className="text-3xl font-semibold text-theme md:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-theme-muted">
            {t.body}
          </p>
        </div>

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={src}
                alt={`${t.altPrefix} ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
