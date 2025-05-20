"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigáció</h3>
          <ul className="space-y-2">
            <li>
              <a href="#top" className="hover:underline">
                Sonnsta
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Termékek
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">
                Galéria
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Kapcsolat
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Elérhetőségek</h3>
          <ul className="space-y-2">
            <li>+36 30 123 4567</li>
            <li>info@sonnsta.hu</li>
            <li>1234 Budapest, Példa utca 1.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Kövess minket</h3>
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
        © {new Date().getFullYear()} Sonnsta. Minden jog fenntartva.
      </div>
    </footer>
  );
}
