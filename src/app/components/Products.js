"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      image: "https://picsum.photos/800/600?random=1",
      link: "/termekek/1-modulos-ablak",
    },
    {
      id: 2,
      image: "https://picsum.photos/800/600?random=2",
      link: "/termekek/2-modulos-ablak",
    },
    {
      id: 3,
      image: "https://picsum.photos/800/600?random=3",
      link: "/termekek/4-modulos-ablak",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      id="products"
      className="w-full h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-7xl px-4 sm:px-8">
        <h1 className="text-4xl font-bold mb-10 text-center">{t("products.title")}</h1>
        <Slider {...settings}>
          {cards.map(({ id, image, link }) => (
            <div key={id} className="px-4">
              <div className="flex flex-col lg:flex-row h-[70vh] bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full lg:w-1/2 relative h-1/2 lg:h-full">
                  <Image
                    src={image}
                    alt={t(`products.cards.${id}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold mb-4">{t(`products.cards.${id}.title`)}</h2>
                  <p className="text-gray-700 mb-6">{t(`products.cards.${id}.description`)}</p>
                  <Link href={link}>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded">
                      {t(`products.cards.${id}.button`)}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-8">
          <Link href="/termekek">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {t("products.allProductsButton")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
