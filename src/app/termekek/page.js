"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Contact from '../components/Contact';
import { useTranslation } from "react-i18next";

const TERMÉKEK = [
  {
    id: 1,
    slug: "1-modulos-ablak",
    image: "/S.jpg",
  },
  {
    id: 2,
    slug: "2-modulos-ablak",
    image: "/M.jpg",
  },
  {
    id: 3,
    slug: "4-modulos-ablak",
    image: "/L.jpg",
  },
];

export default function TermekekPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="min-h-screen py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:underline font-medium mb-8"
          >
            ← {t("footer.home")}
          </Link>
          <h1 className="text-4xl font-bold mb-10 text-center">
            {t("products.title")}
          </h1>

          <div className="space-y-12">
            {TERMÉKEK.map(({ id, slug, image }) => (
              <div
                key={slug}
                className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
                  <Image
                    src={image}
                    alt={t(`products.cards.${id}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-4">
                    {t(`products.cards.${id}.title`)}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t(`products.cards.${id}.description`)}
                  </p>
                  <p className="text-gray-600 whitespace-pre-wrap text-sm mb-6">
                    {t(`products.cards.${id}.details`)}
                  </p>
                  <Link href={`/termekek/${slug}`}>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded">
                      {t(`products.cards.${id}.button`)}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
