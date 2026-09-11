import type { Locale } from "@/data/home";

export function homePath(locale: Locale): string {
  const base = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/`;
  return locale === "en" ? `${base}en/` : base;
}
