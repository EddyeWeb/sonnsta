"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery-bundle.css";
import { useTranslation } from "react-i18next";

const images = Array.from({ length: 8 }).map((_, i) => ({
  src: `https://picsum.photos/seed/${i + 1}/800/800`,
}));

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("gallery.title")}</h2>

        <LightGallery speed={500} plugins={[lgThumbnail]}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map(({ src }, index) => (
              <a key={index} href={src}>
                <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md group">
                  <Image
                    src={src}
                    alt={t("gallery.imageAlt", { index: index + 1 })}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </LightGallery>
      </div>
    </section>
  );
};

export default Gallery;
