"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

export const THEME_KEY = "sj-theme";

type ThemeContextValue = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

/**
 * The inline script in layout.tsx stamps data-theme on <html> before paint, so
 * that attribute — not a React state copy of it — is the source of truth. Mirroring
 * it into state meant two places could disagree; subscribing to it instead means
 * they cannot. The server snapshot is "dark" so markup matches the pre-hydration
 * default and nothing flashes.
 */
const subscribeToTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

const readTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const readServerTheme = (): Theme => "dark";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, readServerTheme);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // private mode / blocked storage — the theme still applies for this visit
    }
    window.setTimeout(() => root.classList.remove("theme-anim"), 500);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
