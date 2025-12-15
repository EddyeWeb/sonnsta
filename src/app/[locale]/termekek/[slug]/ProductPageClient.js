"use client";

import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "../../providers/DictionaryProvider";

export default function ProductPageClient({ termek }) {
  const { dict, locale } = useDictionary();
  const { image, title, description, details, price } = termek;

  const renderSection = (title, items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          {items.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link
              href={`/${locale}/termekek`}
              className="inline-flex items-center hover:underline font-medium text-gray-700"
            >
              ← {dict.main_sections.all_products}
            </Link>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl lg:sticky lg:top-20">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-lg p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">{title}</h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {description}
              </p>

              {price && (
                <p className="text-gray-700 text-lg mb-6">
                  <strong>
                    {dict.common_values.price}
                    {` `}
                    {price}
                    {` `}
                    {dict.common_values.currency_huf}
                  </strong>
                </p>
              )}

              {renderSection(
                dict.common_values.key_features_label,
                details.features
              )}
              {renderSection(
                dict.common_values.technical_data_label,
                details.specs
              )}
              {renderSection(
                dict.common_values.warranty_label,
                details.warranty
              )}
              {renderSection(
                dict.common_values.recommended_use_label,
                details.usage
              )}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
