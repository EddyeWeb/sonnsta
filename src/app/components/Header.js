"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = (
    <>
      <Link
        href="/#products"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium"
        onClick={() => setIsOpen(false)}
      >
        {t("hero.products")}
      </Link>
      <Link
        href="/#story"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium"
        onClick={() => setIsOpen(false)}
      >
        {t("hero.story")}
      </Link>
      <Link
        href="/#gallery"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium"
        onClick={() => setIsOpen(false)}
      >
        {t("hero.gallery")}
      </Link>
      <Link
        href="/#contact"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium"
        onClick={() => setIsOpen(false)}
      >
        {t("hero.contact")}
      </Link>
      <div className="flex space-x-2 px-3 py-2">
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            setIsOpen(false);
          }}
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          🇬🇧 EN
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("hu");
            setIsOpen(false);
          }}
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          🇭🇺 HU
        </button>
      </div>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 tracking-wide"
          >
            {t("hero.logo")}
          </Link>

          <div className="hidden sm:flex space-x-4 items-center">
            {menuItems}
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="sm:hidden px-4 pb-4 bg-white border-t border-gray-200 space-y-2
               flex flex-col items-center
               animate-in fade-in slide-in-from-top duration-300"
        >
          {menuItems}
        </div>
      )}
    </nav>
  );
}
