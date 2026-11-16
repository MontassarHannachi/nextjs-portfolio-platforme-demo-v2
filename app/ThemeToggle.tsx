"use client";

import { useEffect, useRef } from "react";

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function applyTheme(dark: boolean) {
    document.documentElement.dataset.theme = dark ? "dark" : "light";

    const button = buttonRef.current;

    if (button) {
      button.textContent = dark ? "☀️ Light mode" : "🌙 Dark mode";
      button.setAttribute("aria-pressed", String(dark));
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");

    const dark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(dark);
  }, []);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "dark";
    const next = !current;

    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    applyTheme(next);
  }

  return (
    <button
      ref={buttonRef}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle color theme"
      aria-pressed="false"
    >
      ◐ Theme
    </button>
  );
}
