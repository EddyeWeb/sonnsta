"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = (
    <>
      <Link
        href="/#story"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-karla font-medium"
        onClick={() => setIsOpen(false)}
      >
        Történet
      </Link>
      <Link
        href="/#products"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-karla font-medium"
        onClick={() => setIsOpen(false)}
      >
        Termékek
      </Link>
      <Link
        href="/#gallery"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-karla font-medium"
        onClick={() => setIsOpen(false)}
      >
        Galéria
      </Link>
      <Link
        href="/#contact"
        className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-karla font-medium"
        onClick={() => setIsOpen(false)}
      >
        Kapcsolat
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 tracking-wide font-karla"
          >
            <span className="text-2xl font-bold uppercase">Sønnsta</span>
          </Link>

          <div className="hidden md:flex space-x-4 items-center">
            {menuItems}
          </div>

          <div className="md:hidden">
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
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200 space-y-2 flex flex-col items-center">
          {menuItems}
        </div>
      )}
    </nav>
  );
}
