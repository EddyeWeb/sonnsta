"use client";

import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductPageClient({ termek }) {
  const { t } = useTranslation();
  const { id, image } = termek;

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link
              href="/termekek"
              className="inline-flex items-center hover:underline font-medium text-gray-700"
            >
              ← {t("products.allProductsButton")}
            </Link>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="relative w-full lg:w-1/2 h-72 lg:h-auto shadow-xl rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={t(`products.cards.${id}.title`)}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="w-full lg:w-1/2 p-8 bg-white shadow-xl rounded-lg flex flex-col justify-center">
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
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
