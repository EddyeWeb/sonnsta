"use client";
import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:min-h-[400px]">
            <Image
              src="/vasvari_gyula.jpg"
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
              A SØNNSTA egy különleges beltéri ablak, amely a természetes napfény látványát és hatását idézi meg ott, ahol valódi napfény nem érhető el. A fejlesztés célja az volt, hogy vizuálisan és érzetre is megtévesztően hiteles napfényélményt hozzon létre, mindezt energiatakarékosan, LED-alapú technológiával.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              A megoldás több éves kutatás és kísérletezés eredménye. A beépített prizmarendszer vizuális mélységérzetet ad, ezzel együtt pedig valódi napfényhatást kelt.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              És még ennél is többet: Jó hangulatot!
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              A SØNNSTA ma már szabadalommal védett innováció, amely lakásokban, irodákban és professzionális környezetben is újraértelmezi a beltéri világítást.
            </p>
            <strong className="text-gray-700 leading-relaxed text-lg mb-5">
              SØNNSTA. Hiszed, ha látod.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
