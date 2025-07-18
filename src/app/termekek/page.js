"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { TERMÉKEK } from "../termekek/termekek-adatok";

export default function TermekekPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center hover:underline font-medium text-gray-700"
            >
              ← Főoldal
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Termékek
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(TERMÉKEK).map(({ id, slug, image, title, description, details, button }) => (
              <div
                key={slug}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{description}</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm mb-6 flex-grow">
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
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
