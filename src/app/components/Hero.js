"use client";
import { useTranslation } from "react-i18next";
import "../lib/i18n.client";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900?grayscale")' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex items-center justify-center h-full z-10 px-4">
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center max-w-4xl">
          {t("hero.title")}a
        </h2>
      </div>
    </div>
  );
}
