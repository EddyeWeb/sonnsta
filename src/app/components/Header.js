"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-wide">
            {t("hero.logo")}
          </Link>
          <div className="hidden sm:flex space-x-4 ml-auto items-center">
            <Link href="/#products" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
              {t("hero.products")}
            </Link>
            <Link href="/#gallery" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
              {t("hero.gallery")}
            </Link>
            <Link href="/#contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
              {t("hero.contact")}
            </Link>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="ml-2 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
            >
              🇬🇧 EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("hu")}
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
            >
              🇭🇺 HU
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
