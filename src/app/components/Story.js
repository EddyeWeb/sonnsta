"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Story() {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:min-h-[400px]">
            <Image
              src="/gyula.jpg"
              alt="Gyula portré"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="w-full md:w-2/3 bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t("story.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {t("story.description")}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {t("story.description2")}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {t("story.description3")}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              {t("story.description4")}
            </p>
            <strong className="text-gray-700 leading-relaxed text-lg mb-5">
              {t("story.description5")}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
