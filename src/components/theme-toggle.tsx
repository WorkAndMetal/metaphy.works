"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type ThemeToggleProps = {
  className?: string;
};

const STORAGE_KEY = "bgit-theme";
const THEME_EVENT = "bgit-theme-change";
const baseClassName =
  "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-2 text-theme transition hover:bg-white/15";

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
};

const subscribeToTheme = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener(THEME_EVENT, handler);

  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(THEME_EVENT, handler);
  };
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, () => "light");
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className ? `${baseClassName} ${className}` : baseClassName}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
