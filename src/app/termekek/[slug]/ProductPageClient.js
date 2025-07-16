"use client";

import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductPageClient({ termek }) {
  const { t } = useTranslation();
  const { id, image } = termek;

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

        <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8">
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={t(`products.cards.${id}.title`)}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">
            {t(`products.cards.${id}.title`)}
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            {t(`products.cards.${id}.description`)}
          </p>

          <p className="text-gray-600 whitespace-pre-wrap text-sm">
            {t(`products.cards.${id}.details`)}
          </p>
        </div>
      </div>
    </>
  );
}
