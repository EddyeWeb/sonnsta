"use client";
import Link from "next/link";
import Header from "../components/Header";

const TERMÉKEK = [
  {
    slug: "1-modulos-ablak",
    cim: "1 modulos ablak",
    leiras: "Kis méretű, egymodulos ablak.",
  },
  {
    slug: "2-modulos-ablak",
    cim: "2 modulos ablak",
    leiras: "Kétszárnyú megoldás, több fény.",
  },
  {
    slug: "4-modulos-ablak",
    cim: "4 modulos ablak",
    leiras: "Maximális világosság nagy felületen.",
  },
];

export default function TermekekPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:underline font-medium mb-8"
          >
            ← Vissza
          </Link>
          <h1 className="text-4xl font-bold mb-10 text-center">Termékek</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {TERMÉKEK.map((termek) => (
              <div
                key={termek.slug}
                className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-2">{termek.cim}</h2>
                <p className="text-gray-700 mb-4">{termek.leiras}</p>
                <Link
                  href={`/termekek/${termek.slug}`}
                  className="inline-block mt-auto text-blue-600 hover:underline font-medium"
                >
                  Tovább →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
