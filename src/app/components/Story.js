"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Story() {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-stretch md:gap-12">
          <div className="relative w-full md:w-1/3 md:h-[50vh] aspect-[3/4] md:aspect-auto">
            <Image
              src="/gyula.jpg"
              alt="Gyula portré"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col justify-center mt-8 md:mt-0 md:h-[50vh]">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t("story.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t("story.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
