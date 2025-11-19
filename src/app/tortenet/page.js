"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Contact from "../components/Contact";

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center hover:underline font-medium text-gray-700"
            >
              ← Főoldal
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
                A történet, ami fénybe fordult
              </h1>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Vasvári Gyula vagyok, a SØNNSTA ablakok megalkotója. A SØNNSTA
                ötlete egy ablaktalan pinceszobából indult. Egy olyan térből,
                ahol a természetes fény hiánya nap mint nap érezhető volt – és
                ahol megszületett az igény egy ablakra, amely valójában nincs,
                mégis teljesen valódinak tűnik.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Ez a belső motiváció indította el a több éves fejlesztést és
                kísérletezést. A cél nem pusztán egy lámpa megalkotása volt,
                hanem egy olyan vizuális élmény megteremtése, amely a napfényt
                nemcsak fényként, hanem hangulatként és térként is visszaadja.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                A SØNNSTA lényege éppen ebben rejlik: a pár centiméter mélységű
                szerkezet mégis mélységet mutat, olyan, mintha egy valódi
                ablakon át látnánk a külvilágot. Ez a vizuális perspektíva és a
                hiteles napfényhatás együttese teszi a terméket különlegessé.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Mára a SØNNSTA nem csupán egy személyes szükségletből született
                ötlet, hanem egy szabadalommal védett innováció, amely bárhol
                képes új távlatokat nyitni. Az egyedi megrendelésre gyártott,
                kézzel készített SØNNSTA ablak otthonokban, irodákban, közösségi
                vagy professzionális terekben ugyanazt az élményt adja: a
                napfényt ott, ahol eddig lehetetlen volt.
              </p>

              <strong className="text-gray-900 text-xl lg:text-2xl mt-6 block">
                SØNNSTA. Hiszed, ha látod.
              </strong>
            </div>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
