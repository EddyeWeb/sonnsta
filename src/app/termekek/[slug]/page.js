import ProductPageClient from "./ProductPageClient";

const TERMÉKEK = {
  "1-modulos-ablak": { id: 1, image: "/S.jpg" },
  "2-modulos-ablak": { id: 2, image: "/M.jpg" },
  "4-modulos-ablak": { id: 3, image: "/L.jpg" },
};

export async function generateStaticParams() {
  return Object.keys(TERMÉKEK).map((slug) => ({ slug }));
}

export default function TermekOldal({ params }) {
  const termek = TERMÉKEK[params.slug];

  if (!termek) return <div>Termék nem található</div>;

  return <ProductPageClient termek={termek} />;
}
