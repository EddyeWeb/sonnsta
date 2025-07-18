"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 250);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = isTop
    ? "text-white hover:text-gray-300 transition-colors duration-700 ease-in-out"
    : "text-gray-800 hover:text-gray-900 transition-colors duration-700 ease-in-out";

  const menuItems = (
    <>
      <Link
        href="/#story"
        className={`${linkClass} px-3 py-2 text-base font-karla font-medium`}
        onClick={() => setIsOpen(false)}
      >
        Történet
      </Link>
      <Link
        href="/#products"
        className={`${linkClass} px-3 py-2 text-base font-karla font-medium`}
        onClick={() => setIsOpen(false)}
      >
        Termékek
      </Link>
      <Link
        href="/#gallery"
        className={`${linkClass} px-3 py-2 text-base font-karla font-medium`}
        onClick={() => setIsOpen(false)}
      >
        Galéria
      </Link>
      <Link
        href="/#contact"
        className={`${linkClass} px-3 py-2 text-base font-karla font-medium`}
        onClick={() => setIsOpen(false)}
      >
        Kapcsolat
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-700 ease-in-out ${
        isTop
          ? "bg-transparent"
          : "bg-white/30 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`uppercase font-karla font-bold tracking-wide text-2xl transition-colors duration-700 ease-in-out ${
              isTop ? "text-white" : "text-gray-900"
            }`}
          >
            <span>Sønnsta</span>
          </Link>

          <div className="hidden md:flex space-x-4 items-center">
            {menuItems}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-700 ease-in-out ${
                isTop ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-4 pb-4 border-t space-y-2 flex flex-col items-center transition-colors duration-700 ease-in-out ${
            isTop
              ? "bg-black/50 text-white border-gray-700"
              : "bg-white/30 backdrop-blur-md border-gray-200 text-gray-700"
          }`}
        >
          {menuItems}
        </div>
      )}
    </nav>
  );
}
