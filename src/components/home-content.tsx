"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Compass,
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
    signatureTours: [
      {
        title: "Istanbul Heritage & Bosphorus",
        duration: "2-3 days",
        summary:
          "Private Ottoman and Byzantine highlights, curated food stops, and sunset Bosphorus moments.",
        href: "/istanbul",
        galleryLabel: "View Istanbul gallery",
      },
      {
        title: "Cappadocia Luxury Escape",
        duration: "2 days",
        summary:
          "Sunrise valleys, boutique cave hotel guidance, artisan ateliers, and photo-ready scenic routes.",
        href: "/cappadocia",
        galleryLabel: "View Cappadocia gallery",
      },
      {
        title: "Kusadasi Coast Escape",
        duration: "2-3 days",
        summary:
          "Ephesus, Sirince, and Kusadasi seaside highlights with a relaxed premium pace.",
        href: "/kusadasi",
        galleryLabel: "View Kusadasi gallery",
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
    contactButton: "Contact on WhatsApp",
    whatsappText:
      "Hello Best Guides in Turkey, I would like to plan a private tour.",
  },
  tr: {
    heroLabel: "Premium Türkiye Deneyimleri",
    heroTitle:
      "Türkiye'nin en iyisini isteyen gezginler için imza niteliğinde rehberli yolculuklar.",
    heroDescription:
      "Çiftler, aileler ve küçük gruplar için Türkiye'de özel, konfor odaklı seyahat planları hazırlıyoruz. Tüm planlama ve onaylar ekibimizle doğrudan WhatsApp üzerinden yapılır.",
    whatsappHeader: "WhatsApp",
    planButton: "WhatsApp'tan planla",
    exploreButton: "Taslak turları incele",
    researchTitle: "Araştırma destekli konumlandırma",
    travelInsights: [
      "Türkiye gezisi planlayan gezginler, rota, zamanlama ve gizli noktalar için yerel uzmanlığı tercih eder.",
      "Premium misafirler özel rehberlik, esnek planlama ve geliş öncesi net iletişimi önemser.",
      "WhatsApp öncelikli iletişim, karar süresini kısaltır ve uluslararası misafirlerde güven oluşturur.",
    ],
    toursTitle: "Taslak imza turlar",
    signatureTours: [
      {
        title: "İstanbul Mirası ve Boğaz",
        duration: "2-3 gün",
        summary:
          "Özel Osmanlı ve Bizans durakları, özenli lezzet molaları ve gün batımı Boğaz anları.",
        href: "/istanbul",
        galleryLabel: "İstanbul galerisini gör",
      },
      {
        title: "Kapadokya Lüks Kaçamağı",
        duration: "2 gün",
        summary:
          "Gün doğumu vadileri, butik mağara otel önerileri, zanaat atölyeleri ve fotoğrafa uygun rotalar.",
        href: "/cappadocia",
        galleryLabel: "Kapadokya galerisini gör",
      },
      {
        title: "Kuşadası Sahil Kaçamağı",
        duration: "2-3 gün",
        summary:
          "Efes, Şirince ve Kuşadası sahil duraklarıyla rahat bir premium tempo.",
        href: "/kusadasi",
        galleryLabel: "Kuşadası galerisini gör",
      },
    ],
    whyTitle: "Premium gezginler neden bizi seçiyor",
    whyBullets: [
      "İlgi alanı ve temponuza göre özel rehber eşleştirmesi.",
      "Kültürel derinliği olan, daha az turistik tuzak içeren küratörlü rotalar.",
      "Seyahat öncesi ve sırasında doğrudan WhatsApp iletişimi.",
      "VIP havaalanı ve şehir içi transferleri talep üzerine organize edilir.",
    ],
    trustTitle: "Güven ve uyumluluk",
    trustBody:
      "Resmi yetkilendirme ile faaliyet gösteriyoruz. TÜRSAB belgesi görseli yüklendiğinde bu bölüme eklenecektir.",
    trustPlaceholder: "TÜRSAB belge görseli alanı",
    planningTitle: "Planlama nasıl işler",
    planningFlow: [
      {
        title: "Tarihlerinizi paylaşın",
        description: "Seyahat aralığınızı ve şehir listenizi WhatsApp’tan iletin.",
      },
      {
        title: "Kişiye özel plan alın",
        description:
          "Size özel rota, rehber profili ve gün gün öneriler paylaşırız.",
      },
      {
        title: "Ekibimizle onaylayın",
        description:
          "Tüm onaylar yerel operasyon ekibimizle yürütülür.",
      },
      {
        title: "Türkiye’yi güvenle deneyimleyin",
        description:
          "Rehberiniz sahada sizi destekleyerek sorunsuz bir deneyim sağlar.",
      },
    ],
    missionTitle: "Misyonumuz",
    missionBody:
      "Güvenilir yerel rehberlerle, dengeli tempolu ve özgün özel turlar tasarlamak; net iletişim ve özenli misafir deneyimi sunmak.",
    visionTitle: "Vizyonumuz",
    visionBody:
      "Kültürel derinlik, güvenlik ve kişiselleştirilmiş yolculuklarla tanınan, Türkiye'nin en güvenilir premium rehber ağı olmak.",
    contactTitle: "Yolculuğunuza başlayın",
    contactBody:
      "Detaylı program, müsaitlik ve kişiye özel turlar için WhatsApp’tan bize ulaşın.",
    contactButton: "WhatsApp’tan iletişime geçin",
    whatsappText:
      "Merhaba Best Guides in Turkey, özel bir tur planlamak istiyorum.",
  },
} as const;

const frostedPanel =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md";

export default function HomeContent() {
  const { language } = useLanguage();
  const t = copy[language];
  const signatureTours = t.signatureTours;
  const planningFlow = t.planningFlow;

  const fallbackWhatsapp = "905321646782";
  const configuredWhatsapp = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsapp
  ).replace(/\D/g, "");
  const whatsappNumber = configuredWhatsapp || fallbackWhatsapp;
  const whatsappText = encodeURIComponent(t.whatsappText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(250,204,21,0.2),transparent_34%),radial-gradient(circle_at_48%_100%,rgba(139,92,246,0.18),transparent_38%)]" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 md:px-10 lg:py-14">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-amber-300/20 p-2 text-amber-200">
              <Compass className="size-4" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-[#0a1f44]">
              Best Guides in Turkey
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-[#0a1f44] transition hover:bg-emerald-200"
          >
            <MessageCircle className="size-4" />
            {t.whatsappHeader}
          </a>
        </header>

        <section className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`space-y-6 ${frostedPanel}`}>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-100/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#0a1f44] uppercase">
              <Stars className="size-3.5" />
              {t.heroLabel}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0a1f44] md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#1b3160]">
              {t.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-[#0a1f44] shadow-[0_10px_30px_-12px_rgba(52,211,153,0.75)] transition hover:bg-emerald-200"
              >
                {t.planButton}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#tours"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-[#0a1f44] transition hover:bg-white/10"
              >
                {t.exploreButton}
              </a>
            </div>
          </div>

          <div className={frostedPanel}>
            <p className="flex items-center gap-2 text-sm font-medium text-[#1b3160]">
              <Sparkles className="size-4 text-sky-300" />
              {t.researchTitle}
            </p>
            <ul className="mt-4 space-y-4">
              {t.travelInsights.map((insight) => (
                <li key={insight} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-relaxed text-[#1b3160]">
                    {insight}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="tours" className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#0a1f44] md:text-3xl">
            {t.toursTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {signatureTours.map((tour) => {
              const cardContent = (
                <>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-[#1b3160]">
                    <CalendarDays className="size-3.5" />
                    {tour.duration}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#0a1f44]">
                    {tour.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1b3160]">
                    {tour.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#0a1f44] transition group-hover:bg-emerald-200/20">
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

        <section className="grid gap-4 md:grid-cols-2">
          <article className={frostedPanel}>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0a1f44]">
              <Crown className="size-5 text-amber-300" />
              {t.whyTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#1b3160]">
              {t.whyBullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Users className="mt-0.5 size-4 text-sky-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className={frostedPanel}>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0a1f44]">
              <ShieldCheck className="size-5 text-emerald-300" />
              {t.trustTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1b3160]">
              {t.trustBody}
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-emerald-200/30 bg-emerald-100/10 p-4 text-sm text-[#0a1f44]">
              {t.trustPlaceholder}
            </div>
          </article>
        </section>

        <section className={`space-y-5 ${frostedPanel}`}>
          <h2 className="text-2xl font-semibold text-[#0a1f44]">
            {t.planningTitle}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {planningFlow.map((step, index) => (
              <article key={step.title} className={frostedPanel}>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#2b436e] uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[#0a1f44]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#1b3160]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className={frostedPanel}>
            <h2 className="text-xl font-semibold text-[#0a1f44]">
              {t.missionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1b3160]">
              {t.missionBody}
            </p>
          </article>

          <article className={frostedPanel}>
            <h2 className="text-xl font-semibold text-[#0a1f44]">
              {t.visionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1b3160]">
              {t.visionBody}
            </p>
          </article>
        </section>

        <section id="contact" className={frostedPanel}>
          <h2 className="text-2xl font-semibold text-[#0a1f44]">
            {t.contactTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-[#1b3160]">{t.contactBody}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-[#0a1f44] shadow-[0_10px_30px_-12px_rgba(52,211,153,0.75)] transition hover:bg-emerald-200"
          >
            <MessageCircle className="size-4" />
            {t.contactButton}
          </a>
        </section>
      </main>
    </div>
  );
}
