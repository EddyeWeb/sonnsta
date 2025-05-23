import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function EgyModulosAblak() {
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
              src="https://picsum.photos/seed/1m/800/600"
              alt="1 modulos ablak"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">4 modulos ablak</h1>
          <p className="text-gray-700 text-lg">Kis méretű, egymodulos ablak.</p>
        </div>
      </div>
    </>
  );
}
