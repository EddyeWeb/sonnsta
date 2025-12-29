"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useDictionary } from "../providers/DictionaryProvider";

export default function Footer() {
  const { dict, locale } = useDictionary();
  return (
    <footer
      id="contact"
      className="bg-gray-600 text-white border-t border-gray-700"
    >
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {dict.main_sections.navigation_label}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href={`/${locale}/#top`} className="hover:underline">
                {dict.main_sections.story_label}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/#products`} className="hover:underline">
                {dict.main_sections.products_label}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/#gallery`} className="hover:underline">
                {dict.main_sections.gallery_label}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/#contact`} className="hover:underline">
                {dict.main_sections.contact_label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            {dict.main_sections.contact_label}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="tel:+36304171737" className="hover:underline">
                +36 30 417 1737
              </a>
            </li>
            <li>
              <a
                href="mailto:vasvari.gyula@sonnsta.hu"
                className="hover:underline"
              >
                vasvari.gyula@sonnsta.hu
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4225+Debrecen+Pál+u.+24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                4225 Debrecen, Pál u. 24.
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {dict.main_sections.follow_us_label}
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61557242503375"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/sonnsta_windows?igsh=MWVmeXJ2dDFhcWQ1NQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        © {new Date().getFullYear()}
        {` `}
        {dict.brand_name}.{` `}
        {dict.footer.copyright}
      </div>
    </footer>
  );
}
