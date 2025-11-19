"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDictionary } from "../providers/DictionaryProvider";
import { LanguageToggle } from "./LanguageToggle";

export default function Header() {
  const { dict, locale } = useDictionary();
  const pathname = usePathname();
  const isLanding =
    pathname === "/hu" ||
    pathname === "/hu/" ||
    pathname === "/en" ||
    pathname === "/en/" ||
    pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isLanding) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLanding]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkBaseClasses =
    "px-3 py-2 text-base font-karla font-medium transition-colors duration-300";

  const linkColorClasses =
    isLanding && !scrolled
      ? "text-white hover:text-gray-300"
      : "text-gray-700 hover:text-gray-900";

  const menuItems = (
    <>
      <Link
        href={`/${locale}#story`}
        className={`${linkBaseClasses} ${linkColorClasses}`}
        onClick={() => setIsOpen(false)}
      >
        {dict.main_sections.story_label}
      </Link>
      <Link
        href={`/${locale}#products`}
        className={`${linkBaseClasses} ${linkColorClasses}`}
        onClick={() => setIsOpen(false)}
      >
        {dict.main_sections.products_label}
      </Link>
      <Link
        href={`/${locale}#gallery`}
        className={`${linkBaseClasses} ${linkColorClasses}`}
        onClick={() => setIsOpen(false)}
      >
        {dict.main_sections.gallery_label}
      </Link>
      <Link
        href={`/${locale}#contact`}
        className={`${linkBaseClasses} ${linkColorClasses}`}
        onClick={() => setIsOpen(false)}
      >
        {dict.main_sections.contact_label}
      </Link>
      <LanguageToggle className={`${linkBaseClasses} ${linkColorClasses}`} />
    </>
  );

  const navClasses = isLanding
    ? scrolled
      ? "glass-navbar"
      : "bg-transparent shadow-none"
    : "bg-white shadow-md";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${navClasses}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${locale}`}
            className={`text-2xl font-bold tracking-wide font-karla transition-colors duration-300 ${
              isLanding && !scrolled ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="uppercase">Sønnsta</span>
          </Link>

          <div className="hidden md:flex space-x-4 items-center">
            {menuItems}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors duration-300 ${
                isLanding && !scrolled
                  ? "text-white hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label={dict.main_sections.toggle_menu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-4 pb-4 border-t space-y-2 flex flex-col items-center transition-colors duration-300 ${
            scrolled
              ? "glass-card border-gray-200"
              : "bg-transparent border-transparent"
          }`}
        >
          {menuItems}
        </div>
      )}
    </nav>
  );
}
