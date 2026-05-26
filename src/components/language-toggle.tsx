"use client";

import { useLanguage } from "./language-context";

const baseButton =
  "rounded-full px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed left-4 top-4 z-20 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-[#0a1f44] backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`${baseButton} ${
          language === "en" ? "bg-white/70" : "hover:bg-white/40"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("tr")}
        className={`${baseButton} ${
          language === "tr" ? "bg-white/70" : "hover:bg-white/40"
        }`}
        aria-pressed={language === "tr"}
      >
        TR
      </button>
    </div>
  );
}
