"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Language = "en" | "tr";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const listeners = new Set<() => void>();

const getStoredLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }
  const stored = window.localStorage.getItem("siteLanguage");
  return stored === "tr" ? "tr" : "en";
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  if (typeof window === "undefined") {
    return () => listeners.delete(listener);
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === "siteLanguage") {
      listener();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
};

const notify = () => {
  listeners.forEach((listener) => listener());
};

const setStoredLanguage = (language: Language) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem("siteLanguage", language);
  document.documentElement.lang = language === "tr" ? "tr" : "en";
  notify();
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribe,
    getStoredLanguage,
    () => "en"
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    document.documentElement.lang = language === "tr" ? "tr" : "en";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage: setStoredLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
