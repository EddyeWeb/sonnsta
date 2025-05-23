"use client";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-wide">
            SONNSTA
          </Link>
          <div className="hidden sm:flex space-x-6 ml-auto">
            <Link href="/termekek" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
              Termékek
            </Link>
            <Link href="/#gallery" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
              Galéria
            </Link>
            <Link href="/#contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
              Kapcsolat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
