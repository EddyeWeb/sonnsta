"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useTranslation } from "react-i18next";

const images = Array.from({ length: 8 }).map((_, i) => ({
  src: `https://picsum.photos/seed/${i + 1}/1200/800`,
  thumbnail: `https://picsum.photos/seed/${i + 1}/400/300`,
}));

const Gallery = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("gallery.title")}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md group"
            >
              <Image
                src={image.thumbnail}
                alt={t("gallery.imageAlt", { index: i + 1 })}
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
          plugins={[Thumbnails]}
        />
      </div>
    </section>
  );
};

export default Gallery;
