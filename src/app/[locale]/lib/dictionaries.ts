import "server-only";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then(module => module.default),
  hu: () => import("../dictionaries/hu.json").then(module => module.default),
} as const;

// Define supported locales as a union type
export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
