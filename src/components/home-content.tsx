"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Crown,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stars,
  Users,
} from "lucide-react";
import { useLanguage } from "./language-context";

const copy = {
  en: {
    heroLabel: "Premium Turkey Experiences",
    heroTitle:
      "Signature guided journeys for travelers who want the best of Turkey.",
    heroDescription:
      "We design private, high-comfort travel plans in Turkey for couples, families, and small groups. All planning and confirmation happens directly on WhatsApp with our team.",
    whatsappHeader: "WhatsApp",
    planButton: "Plan via WhatsApp",
    exploreButton: "Explore draft tours",
    researchTitle: "Research-backed positioning",
    travelInsights: [
      "Travelers planning Turkey trips prefer local expertise for routes, timings, and hidden spots.",
      "Premium guests value private guiding, flexible planning, and clear communication before arrival.",
      "WhatsApp-first communication shortens decision time and builds trust for international guests.",
    ],
    toursTitle: "Draft signature tours",
    priceLabel: "Reference price",
    signatureTours: [
      {
        title: "Istanbul Heritage & Bosphorus",
        duration: "2-3 days",
        summary:
          "Private Ottoman and Byzantine highlights, curated food stops, and sunset Bosphorus moments.",
        image: "/images/istanbul/sultanahmet.jpg",
        price: "€300",
        href: "/istanbul",
        galleryLabel: "View Istanbul gallery",
      },
      {
        title: "Cappadocia Luxury Escape",
        duration: "2 days",
        summary:
          "Sunrise valleys, boutique cave hotel guidance, artisan ateliers, and photo-ready scenic routes.",
        image: "/images/cappadocia/cappadocia-hot-air-balloons.jpg",
        price: "€500",
        href: "/cappadocia",
        galleryLabel: "View Cappadocia gallery",
      },
      {
        title: "Kusadasi Coast Escape",
        duration: "2-3 days",
        summary:
          "Ephesus, Sirince, and Kusadasi seaside highlights with a relaxed premium pace.",
        image: "/images/kusadasi/ephesus.jpg",
        price: "€600",
        href: "/kusadasi",
        galleryLabel: "View Kusadasi gallery",
      },
    ],
    aboutTitle: "About us",
    aboutBody:
      "Best Guides in Turkey is a boutique team of licensed guides and local travel designers. We craft private itineraries that balance culture, comfort, and authentic local moments.",
    aboutPrevLabel: "Previous image",
    aboutNextLabel: "Next image",
    aboutSlideLabel: "Go to image",
    aboutHighlights: [
      "Licensed local guides",
      "Tailor-made itineraries",
      "On-trip WhatsApp support",
    ],
    aboutSlides: [
      {
        src: "/images/istanbul/kapali-carsi.jpg",
        alt: "Grand Bazaar in Istanbul",
      },
      {
        src: "/images/istanbul/misir-carsisi.jpg",
        alt: "Spice Bazaar in Istanbul",
      },
      {
        src: "/images/istanbul/topkapi-sarayi.jpg",
        alt: "Topkapi Palace in Istanbul",
      },
      {
        src: "/images/istanbul/ayasofya.jpg",
        alt: "Hagia Sophia in Istanbul",
      },
      {
        src: "/images/istanbul/sultanahmet.jpg",
        alt: "Sultanahmet Mosque in Istanbul",
      },
    ],
    galleryTitle: "Photo gallery",
    galleryBody:
      "A quick look at the places and moments we curate across Turkey.",
    galleryImages: [
      {
        src: "/images/istanbul/sultanahmet.jpg",
        alt: "Sultanahmet in Istanbul",
      },
      {
        src: "/images/istanbul/ayasofya.jpg",
        alt: "Hagia Sophia exterior",
      },
      {
        src: "/images/cappadocia/cappadocia-hot-air-balloons.jpg",
        alt: "Cappadocia hot air balloons",
      },
      {
        src: "/images/cappadocia/goreme-open-air-museum.jpg",
        alt: "Goreme Open Air Museum",
      },
      {
        src: "/images/kusadasi/ephesus.jpg",
        alt: "Ephesus ruins",
      },
      {
        src: "/images/kusadasi/ladies-beach.jpg",
        alt: "Ladies Beach in Kusadasi",
      },
    ],
    whyTitle: "Why premium travelers choose us",
    whyBullets: [
      "Private guide matching based on interests and pace.",
      "Curated routes with cultural depth and fewer tourist traps.",
      "Direct WhatsApp communication before and during your trip.",
      "VIP airport and city transfers can be arranged on request.",
    ],
    trustTitle: "Trust and compliance",
    trustBody:
      "We operate with official authorization. TÜRSAB documentation image will be added to this section once uploaded.",
    trustPlaceholder: "TÜRSAB license image placeholder",
    planningTitle: "How planning works",
    planningFlow: [
      {
        title: "Tell us your dates",
        description:
          "Message us on WhatsApp with your travel window and city list.",
      },
      {
        title: "Receive a custom plan",
        description:
          "We share a tailored route, guide style, and day-by-day recommendations.",
      },
      {
        title: "Confirm with our team",
        description:
          "All confirmations are managed directly with our local operations team.",
      },
      {
        title: "Enjoy Turkey with confidence",
        description:
          "Your guide supports you on-the-ground for a seamless premium experience.",
      },
    ],
    missionTitle: "Our mission",
    missionBody:
      "To craft authentic, well-paced private tours led by trusted local guides, with clear communication and thoughtful care for every guest.",
    visionTitle: "Our vision",
    visionBody:
      "To be Turkey's most trusted premium guiding network, known for cultural depth, safety, and personalized journeys.",
    contactTitle: "Start your journey",
    contactBody:
      "Contact us on WhatsApp for full itinerary details, availability, and custom tours.",
    contactEmailLabel: "Email",
    contactButton: "Contact on WhatsApp",
    whatsappText:
      "Hello Best Guides in Turkey, I would like to plan a private tour.",
  },
  tr: {
    heroLabel: "Türkiye’de Premium Deneyimler",
    heroTitle:
      "Türkiye’nin en iyisini isteyen gezginler için özenle hazırlanmış rehberli rotalar.",
    heroDescription:
      "Çiftler, aileler ve küçük gruplar için konforu önceleyen özel seyahat planları hazırlıyoruz. Tüm planlama ve onaylar ekibimizle doğrudan WhatsApp üzerinden yürütülür.",
    whatsappHeader: "WhatsApp",
    planButton: "WhatsApp’tan planla",
    exploreButton: "Örnek turları incele",
    researchTitle: "Veriye dayalı içgörüler",
    travelInsights: [
      "Türkiye seyahati planlayanlar, rota ve zamanlamada yerel uzmanlığı tercih ediyor.",
      "Premium misafirler özel rehberlik, esnek planlama ve yolculuk öncesi net iletişim bekliyor.",
      "WhatsApp üzerinden hızlı iletişim, karar süresini kısaltıp güveni artırıyor.",
    ],
    toursTitle: "Örnek imza turlar",
    priceLabel: "Başlangıç fiyatı",
    signatureTours: [
      {
        title: "İstanbul Mirası ve Boğaz",
        duration: "2-3 gün",
        summary:
          "Osmanlı ve Bizans durakları, özenli lezzet molaları ve gün batımında Boğaz anları.",
        image: "/images/istanbul/sultanahmet.jpg",
        price: "€300",
        href: "/istanbul",
        galleryLabel: "İstanbul galerisini görüntüle",
      },
      {
        title: "Kapadokya Lüks Kaçamağı",
        duration: "2 gün",
        summary:
          "Gün doğumu vadileri, butik mağara otel önerileri, zanaat atölyeleri ve fotoğraf dostu rotalar.",
        image: "/images/cappadocia/cappadocia-hot-air-balloons.jpg",
        price: "€500",
        href: "/cappadocia",
        galleryLabel: "Kapadokya galerisini görüntüle",
      },
      {
        title: "Kuşadası Sahil Kaçamağı",
        duration: "2-3 gün",
        summary:
          "Efes, Şirince ve Kuşadası sahil duraklarıyla sakin ve premium bir tempo.",
        image: "/images/kusadasi/ephesus.jpg",
        price: "€600",
        href: "/kusadasi",
        galleryLabel: "Kuşadası galerisini görüntüle",
      },
    ],
    aboutTitle: "Hakkımızda",
    aboutBody:
      "Best Guides in Turkey, lisanslı rehberler ve yerel seyahat tasarımcılarından oluşan butik bir ekiptir. Kültür, konfor ve özgün deneyimleri bir araya getiren kişiye özel rotalar hazırlarız.",
    aboutPrevLabel: "Önceki fotoğraf",
    aboutNextLabel: "Sonraki fotoğraf",
    aboutSlideLabel: "Fotoğraf",
    aboutHighlights: [
      "Lisanslı yerel rehberler",
      "Kişiye özel programlar",
      "Seyahat boyunca WhatsApp desteği",
    ],
    aboutSlides: [
      {
        src: "/images/istanbul/kapali-carsi.jpg",
        alt: "İstanbul Kapalıçarşı",
      },
      {
        src: "/images/istanbul/misir-carsisi.jpg",
        alt: "İstanbul Mısır Çarşısı",
      },
      {
        src: "/images/istanbul/topkapi-sarayi.jpg",
        alt: "Topkapı Sarayı",
      },
      {
        src: "/images/istanbul/ayasofya.jpg",
        alt: "Ayasofya",
      },
      {
        src: "/images/istanbul/sultanahmet.jpg",
        alt: "Sultanahmet Camii",
      },
    ],
    galleryTitle: "Fotoğraf Galerisi",
    galleryBody:
      "Türkiye genelinde tasarladığımız deneyimlerden kısa bir seçki.",
    galleryImages: [
      {
        src: "/images/istanbul/sultanahmet.jpg",
        alt: "İstanbul Sultanahmet",
      },
      {
        src: "/images/istanbul/ayasofya.jpg",
        alt: "Ayasofya dış görünümü",
      },
      {
        src: "/images/cappadocia/cappadocia-hot-air-balloons.jpg",
        alt: "Kapadokya sıcak hava balonları",
      },
      {
        src: "/images/cappadocia/goreme-open-air-museum.jpg",
        alt: "Göreme Açık Hava Müzesi",
      },
      {
        src: "/images/kusadasi/ephesus.jpg",
        alt: "Efes antik kenti",
      },
      {
        src: "/images/kusadasi/ladies-beach.jpg",
        alt: "Kuşadası Kadınlar Denizi",
      },
    ],
    whyTitle: "Premium misafirler neden bizi tercih ediyor",
    whyBullets: [
      "İlgi alanı ve temponuza göre rehber eşleştirmesi.",
      "Kültürel derinliği olan, turistik tuzaklardan uzak rotalar.",
      "Seyahat öncesi ve sırasında doğrudan WhatsApp iletişimi.",
      "VIP havaalanı ve şehir içi transferleri talebe göre organize edilir.",
    ],
    trustTitle: "Güven ve yetkinlik",
    trustBody:
      "Resmi yetkilendirmeyle çalışıyoruz. TÜRSAB lisansımız aşağıda yer alır.",
    trustPlaceholder: "TÜRSAB lisans görseli alanı",
    planningTitle: "Planlama nasıl ilerliyor",
    planningFlow: [
      {
        title: "Tarihlerinizi paylaşın",
        description: "Seyahat aralığınızı ve şehir listenizi WhatsApp’tan iletin.",
      },
      {
        title: "Size özel planı alın",
        description:
          "Size uygun rota, rehber profili ve gün gün öneriler paylaşırız.",
      },
      {
        title: "Ekibimizle netleştirin",
        description:
          "Tüm onaylar yerel operasyon ekibimizle birlikte yürütülür.",
      },
      {
        title: "Türkiye’yi keyifle deneyimleyin",
        description:
          "Rehberiniz sahada yanınızda olur; sorunsuz bir deneyim yaşarsınız.",
      },
    ],
    missionTitle: "Misyonumuz",
    missionBody:
      "Güvenilir yerel rehberlerle, dengeli tempolu ve özgün özel turlar tasarlamak; net iletişim ve özenli bir misafir deneyimi sunmak.",
    visionTitle: "Vizyonumuz",
    visionBody:
      "Kültürel derinlik, güvenlik ve kişiselleştirilmiş yolculuklarla anılan, Türkiye’nin en güvenilir premium rehber ağı olmak.",
    contactTitle: "Yolculuğunuza başlayın",
    contactBody:
      "Detaylı program, müsaitlik ve kişiye özel turlar için WhatsApp’tan bize ulaşın.",
    contactEmailLabel: "E-posta",
    contactButton: "WhatsApp’tan iletişime geçin",
    whatsappText:
      "Merhaba, Best Guides in Turkey. Özel bir tur planlamak istiyorum.",
  },
} as const;

const frostedPanel =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md";

export default function HomeContent() {
  const { language } = useLanguage();
  const t = copy[language];
  const signatureTours = t.signatureTours;
  const aboutHighlights = t.aboutHighlights;
  const aboutSlides = t.aboutSlides;
  const planningFlow = t.planningFlow;
  const [aboutSlideIndex, setAboutSlideIndex] = useState(0);
  const aboutSlidesCount = aboutSlides.length;

  const fallbackWhatsapp = "905321646782";
  const configuredWhatsapp = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsapp
  ).replace(/\D/g, "");
  const whatsappNumber = configuredWhatsapp || fallbackWhatsapp;
  const whatsappText = encodeURIComponent(t.whatsappText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  useEffect(() => {
    if (!aboutSlidesCount) {
      return;
    }

    const interval = setInterval(() => {
      setAboutSlideIndex((current) => (current + 1) % aboutSlidesCount);
    }, 4500);

    return () => clearInterval(interval);
  }, [aboutSlidesCount]);

  const handleAboutPrev = () => {
    if (!aboutSlidesCount) {
      return;
    }

    setAboutSlideIndex(
      (current) => (current - 1 + aboutSlidesCount) % aboutSlidesCount
    );
  };

  const handleAboutNext = () => {
    if (!aboutSlidesCount) {
      return;
    }

    setAboutSlideIndex((current) => (current + 1) % aboutSlidesCount);
  };

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(250,204,21,0.2),transparent_34%),radial-gradient(circle_at_48%_100%,rgba(139,92,246,0.18),transparent_38%)]" />

      <main
        id="hero"
        className="mx-auto flex w-full max-w-6xl scroll-mt-24 flex-col gap-16 px-6 pb-10 pt-24 md:px-10 md:pt-28 lg:pb-14"
      >
        <section className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`space-y-6 ${frostedPanel}`}>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-100/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-theme uppercase">
              <Stars className="size-3.5" />
              {t.heroLabel}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-theme md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-theme-muted">
              {t.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(52,211,153,0.75)] transition hover:bg-emerald-200"
              >
                {t.planButton}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#tours"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-theme transition hover:bg-white/10"
              >
                {t.exploreButton}
              </a>
            </div>
          </div>

          <div className={frostedPanel}>
            <p className="flex items-center gap-2 text-sm font-medium text-theme-muted">
              <Sparkles className="size-4 text-sky-300" />
              {t.researchTitle}
            </p>
            <ul className="mt-4 space-y-4">
              {t.travelInsights.map((insight) => (
                <li key={insight} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-relaxed text-theme-muted">
                    {insight}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-semibold text-theme md:text-3xl">
            {t.toursTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {signatureTours.map((tour) => {
              const cardContent = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-theme-muted">
                      <CalendarDays className="size-3.5" />
                      {tour.duration}
                    </p>
                    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-200/10 px-2.5 py-1 text-xs font-semibold text-theme">
                      <Crown className="size-3.5 text-amber-300" />
                      {t.priceLabel} {tour.price}
                    </p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-theme">
                    {tour.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                    {tour.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-theme transition group-hover:bg-emerald-200/20">
                    {tour.galleryLabel}
                    <ArrowRight className="size-3.5" />
                  </span>
                </>
              );

              return (
                <Link
                  key={tour.title}
                  href={tour.href}
                  className={`${frostedPanel} transition hover:-translate-y-0.5 hover:bg-white/10`}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
        >
          <article className={frostedPanel}>
            <h2 className="text-2xl font-semibold text-theme">
              {t.aboutTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-theme-muted">
              {t.aboutBody}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-theme-muted">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            {aboutSlides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === aboutSlideIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={handleAboutPrev}
                aria-label={t.aboutPrevLabel}
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-ink transition hover:bg-white"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="flex items-center gap-2">
                {aboutSlides.map((_, index) => (
                  <button
                    key={`${t.aboutSlideLabel}-${index}`}
                    type="button"
                    onClick={() => setAboutSlideIndex(index)}
                    aria-label={`${t.aboutSlideLabel} ${index + 1}`}
                    className={`h-2 w-2 rounded-full transition ${
                      index === aboutSlideIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleAboutNext}
                aria-label={t.aboutNextLabel}
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-ink transition hover:bg-white"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className={frostedPanel}>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-theme">
              <Crown className="size-5 text-amber-300" />
              {t.whyTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-theme-muted">
              {t.whyBullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Users className="mt-0.5 size-4 text-sky-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className={frostedPanel}>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-theme">
              <ShieldCheck className="size-5 text-emerald-300" />
              {t.trustTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-theme-muted">
              {t.trustBody}
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-emerald-200/30 bg-emerald-100/10 p-4 text-sm text-theme">
              <div className="flex items-center justify-center">
                <Image
                  src="/tursab.svg"
                  alt="TÜRSAB license"
                  width={220}
                  height={80}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </article>
        </section>

        <section className={`space-y-5 ${frostedPanel}`}>
          <h2 className="text-2xl font-semibold text-theme">
            {t.planningTitle}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {planningFlow.map((step, index) => (
              <article key={step.title} className={frostedPanel}>
                <p className="text-xs font-semibold tracking-[0.16em] text-theme-muted uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-theme">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-theme-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className={frostedPanel}>
            <h2 className="text-xl font-semibold text-theme">
              {t.missionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-theme-muted">
              {t.missionBody}
            </p>
          </article>

          <article className={frostedPanel}>
            <h2 className="text-xl font-semibold text-theme">
              {t.visionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-theme-muted">
              {t.visionBody}
            </p>
          </article>
        </section>

        <section id="contact" className={frostedPanel}>
          <h2 className="text-2xl font-semibold text-theme">
            {t.contactTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-theme-muted">{t.contactBody}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-theme-muted">
            <span className="font-semibold text-theme">{t.contactEmailLabel}</span>
            <a
              href="mailto:baistsnbul@yahoo.com"
              className="underline decoration-white/40 underline-offset-4 transition hover:text-theme"
            >
              baistsnbul@yahoo.com
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(52,211,153,0.75)] transition hover:bg-emerald-200"
          >
            <MessageCircle className="size-4" />
            {t.contactButton}
          </a>
        </section>
      </main>
    </div>
  );
}
