"use client";

import { useRouter, usePathname } from "next/navigation";
import { useDictionary } from "../providers/DictionaryProvider";

export function LanguageToggle({ className }) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useDictionary();

  const computeTarget = fromLocale => {
    const newLocale = fromLocale === "en" ? "hu" : "en";
    const rawPath = pathname || "/";
    const segments = rawPath.split("/");

    let newPath;
    if (segments[1] === "en" || segments[1] === "hu") {
      segments[1] = newLocale;
      newPath = segments.join("/");
      if (!newPath.startsWith("/")) newPath = "/" + newPath;
    } else {
      // prefix with new locale
      newPath = `/${newLocale}${
        rawPath.startsWith("/") ? rawPath : "/" + rawPath
      }`;
    }

    return { newLocale, newPath };
  };

  const handleClick = e => {
    e.preventDefault();
    const { newLocale, newPath } = computeTarget(locale);
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    // Set cookie NEXT_LOCALE for 1 year
    const maxAge = 60 * 60 * 24 * 365;
    try {
      document.cookie = `NEXT_LOCALE=${newLocale}; Path=/; Max-Age=${maxAge}`;
    } catch (err) {
      // ignore cookie set errors (e.g., strict CSP)
    }

    router.push(newPath + search + hash);
  };

  const { newPath: href } = computeTarget(locale);

  return (
    <a href={href} onClick={handleClick} className={className}>
      {locale === "en" ? "HU" : "EN"}
    </a>
  );
}
