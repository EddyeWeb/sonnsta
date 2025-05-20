"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Products() {
  const cards = [
    {
      title: "Természetes hatás",
      description:
        "Olyan fényhatást biztosít, amely a napfény természetességét utánozza.",
      image: "https://picsum.photos/800/600?random=1",
    },
    {
      title: "Egész évben világos",
      description:
        "Télen is világos szobák – csökkentett depresszió, jobb hangulat.",
      image: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Energiatakarékos",
      description:
        "Alacsony fogyasztás, hosszú élettartam, környezetbarát megoldás.",
      image: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "Sokoldalú elhelyezés",
      description: "Falra és plafonra is szerelhető, többféle méret és forma.",
      image: "https://picsum.photos/800/600?random=4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      id="products"
      className="w-full h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-7xl px-4 sm:px-8">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-4">
              {" "}
              <div className="flex flex-col lg:flex-row h-[70vh] bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full lg:w-1/2 relative h-1/2 lg:h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                  <p className="text-gray-700 mb-6">{card.description}</p>
                  <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded">
                    Megtekintés
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
