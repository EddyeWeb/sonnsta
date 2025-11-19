"use client";

import React, { createContext, useContext, ReactNode } from "react";
import type { Dictionary } from "../lib/dictionaries";

const DictionaryContext = createContext(null);

export function DictionaryProvider({
  children,
  dict,
  locale,
}: {
  children: ReactNode;
  dict: Dictionary;
  locale: string;
}) {
  return React.createElement(
    DictionaryContext.Provider,
    { value: { dict, locale } },
    children
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}
