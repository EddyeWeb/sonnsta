"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { useDictionary } from "../providers/DictionaryProvider";

export default function StoryPage() {
  const { dict, locale } = useDictionary();

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center hover:underline font-medium text-gray-700"
            >
              ← {dict.common_values.homepage_label}
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
            <div className="relative w-full lg:w-2/5 aspect-[3/4] lg:aspect-auto lg:min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/vasvari_gyula.jpg"
                alt="Sønnsta portré"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full lg:w-3/5 bg-gray-100 p-10 lg:p-12 rounded-xl shadow-lg flex flex-col justify-center mt-10 lg:mt-0">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {dict.main_sections.story_title}
              </h1>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {dict.main_sections.story_intro}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {dict.main_sections.story_development}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {dict.main_sections.story_essence}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {dict.main_sections.story_today}
              </p>

              <strong className="text-gray-900 text-xl lg:text-2xl mt-6 block">
                {dict.brand_name}.{` `}
                {dict.tagline_short}
              </strong>
            </div>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
