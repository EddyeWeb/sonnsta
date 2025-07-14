import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";

const TERMÉKEK = {
  "1-modulos-ablak": {
    cim: "1 modulos ablak",
    leiras: "Kis méretű, egymodulos ablak.",
    kep: "/S.jpg",
  },
  "2-modulos-ablak": {
    cim: "2 modulos ablak",
    leiras: "Kétszárnyú megoldás, több fény.",
    kep: "/M.jpg",
  },
  "4-modulos-ablak": {
    cim: "4 modulos ablak",
    leiras: "Maximális világosság nagy felületen.",
    kep: "/L.jpg",
  },
};

export async function generateStaticParams() {
  return Object.keys(TERMÉKEK).map((slug) => ({ slug }));
}

export default async function TermekOldal({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const termek = TERMÉKEK[slug];

  if (!termek) {
    return <div>Termék nem található</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
        <Link
          href="/termekek"
          className="inline-flex items-center text-blue-600 hover:underline font-medium mb-8"
        >
          ← Vissza a termékekhez
        </Link>
        <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 text-center">
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
            <Image
              src={termek.kep}
              alt={termek.cim}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{termek.cim}</h1>
          <p className="text-gray-700 text-lg">{termek.leiras}</p>
        </div>
      </div>
    </>
  );
}
