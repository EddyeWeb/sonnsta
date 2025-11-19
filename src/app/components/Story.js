"use client";

import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:min-h-[400px]">
            <Image
              src="./vasvari_gyula.jpg"
              alt="Sønnsta portré"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="w-full md:w-2/3 bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Természetes fényélmény, beltérben. SØNNSTA.
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              Vasvári Gyula vagyok, a SØNNSTA ablakok megalkotója. A SØNNSTA egy
              különleges beltéri ablak, amely a természetes napfény látványát és
              hatását idézi meg ott, ahol valódi fényforrás nem érhető el. A
              fejlesztés célja az volt, hogy olyan élményt teremtsen, amely
              nemcsak fényt ad, hanem vizuális mélységi perspektívát is: a
              termékbe épített innovatív technikai megoldás tágas, napfényben
              fürdő tér hatását kelti, ezáltal pedig maximális illúziót hoz
              létre.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              Ez teszi a kézzel készített, egyedi megrendelésre gyártott
              SØNNSTA-t igazán egyedivé – a fény nemcsak világít, hanem{" "}
              <strong>mélységet, hangulatot és inspirációt hoz</strong>{" "}
              minden belső térbe.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              A SØNNSTA ablak ma már szabadalommal védett innováció, amely
              lakásokban, irodákban és professzionális környezetekben is
              újraértelmezi a beltéri világítást.
            </p>
            <strong className="text-gray-700 leading-relaxed text-lg">
              SØNNSTA. Hiszed, ha látod.
            </strong>
            <Link href="/tortenet">
              <button className="mt-6 bg-black hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 text-white font-karla font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 ease-in-out">
                Bővebben
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
