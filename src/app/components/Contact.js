"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.navigation")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#top" className="hover:underline">
                {t("footer.home")}
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                {t("footer.products")}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">
                {t("footer.gallery")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                {t("footer.contact")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h3>
          <ul className="space-y-2">
            <li>{t("footer.phone")}</li>
            <li>{t("footer.email")}</li>
            <li>{t("footer.address")}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
