"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TERMÉKEK } from "../termekek/termekek-adatok";

function PrevArrow(props) {
  const { className, onClick, style } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "none",
      }}
      onClick={onClick}
      aria-label="Previous"
    >
      <ArrowLeft color="black" size={30} />
    </button>
  );
}

function NextArrow(props) {
  const { className, onClick, style } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "none",
      }}
      onClick={onClick}
      aria-label="Next"
    >
      <ArrowRight color="black" size={30} />
    </button>
  );
}

export default function Products() {
  const cards = Object.values(TERMÉKEK); // ✅ egységes adatforrásból

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section
      id="products"
      className="w-full min-h-screen py-12 flex items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-7xl px-4 sm:px-8">
        <h1 className="text-4xl font-bold mb-10 text-center">Termékek</h1>
        <Slider {...settings}>
          {cards.map(({ id, image, slug, title, description, details, button }) => (
            <div key={id} className="px-4">
              <div className="flex flex-col lg:flex-row h-[70vh] bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full lg:w-1/2 relative h-1/2 lg:h-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      {description}
                    </p>

                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {details.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>

                    <Link href={`/termekek/${slug}`}>
                      <button className="mt-6 bg-black hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 text-white font-karla font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 ease-in-out">
                        {button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-8">
          <Link href="/termekek">
            <button className="mt-6 bg-black hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 text-white font-karla font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 ease-in-out">
              Összes termék
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
