"use client";

import Header from "../../components/Header";
import Contact from '../../components/Contact';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductPageClient({ termek }) {
  const { t } = useTranslation();
  const { id, image, link } = termek;

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gray-100">
        <Link
          href="/termekek"
          className="inline-flex items-center text-blue-600 hover:underline font-medium mb-8"
        >
          ← {t("products.allProductsButton")}
        </Link>

        <div className="bg-white shadow-xl max-w-5xl w-full flex flex-col lg:flex-row overflow-hidden">
          {/* Kép */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden mb-6 lg:mb-0">
            <Image
              src={image}
              alt={t(`products.cards.${id}.title`)}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Infók */}
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              {t(`products.cards.${id}.title`)}
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t(`products.cards.${id}.description`)}
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-8">
              {t(`products.cards.${id}.details`)
                .split("\n")
                .map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
            </ul>

            <Link href={link || "/termekek"}>
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition duration-200 w-max">
                {t(`products.cards.${id}.button`) || t("products.allProductsButton")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
