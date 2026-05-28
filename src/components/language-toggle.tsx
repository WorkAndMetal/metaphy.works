"use client";

import { useLanguage } from "./language-context";

type LanguageToggleProps = {
  className?: string;
};

const baseButton =
  "rounded-full px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60";
const baseContainer =
  "language-toggle inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-theme backdrop-blur-md";

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const containerClassName = className
    ? `${className} ${baseContainer}`
    : `fixed left-4 top-4 z-20 ${baseContainer}`;

  return (
    <div className={containerClassName}>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`${baseButton} ${
          language === "en" ? "bg-white/70" : "hover:bg-white/40"
        }`}
        aria-pressed={language === "en"}
        data-active={language === "en"}
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
        data-active={language === "tr"}
      >
        TR
      </button>
    </div>
  );
}
