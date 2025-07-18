"use client";

import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function ProductPageClient({ termek }) {
  const { image, title, description, details } = termek;

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link
              href="/termekek"
              className="inline-flex items-center hover:underline font-medium text-gray-700"
            >
              ← Összes termék
            </Link>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-lg p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">{title}</h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>

              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-8">
                {details.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
