"use client";

import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "../providers/DictionaryProvider";

export default function Story() {
  const { dict, locale } = useDictionary();
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:min-h-[400px]">
            <Image
              src="/vasvari_gyula.jpg"
              alt="Sønnsta portré"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="w-full md:w-2/3 bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {dict.main_sections.hero_subtitle}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {dict.main_sections.hero_intro}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {dict.main_sections.hero_uniqueness}{" "}
              <strong>{dict.main_sections.hero_uniqueness_bold}</strong>{" "}
              {dict.main_sections.hero_uniqueness_bold_after}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {dict.main_sections.hero_patent}
            </p>
            <strong className="text-gray-700 leading-relaxed text-lg">
              {dict.brand_name}.{` `}
              {dict.main_sections.tagline_full}
            </strong>
            <Link href={`/${locale}/tortenet`}>
              <button className="mt-6 bg-black hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 text-white font-karla font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 ease-in-out">
                {dict.common_values.see_more}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
