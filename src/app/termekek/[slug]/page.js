import ProductPageClient from "./ProductPageClient";
import { TERMÉKEK } from "../termekek-adatok";

export async function generateStaticParams() {
  return Object.keys(TERMÉKEK).map((slug) => ({ slug }));
}

export default function TermekOldal({ params }) {
  const termek = TERMÉKEK[params.slug];

  if (!termek) return <div>Termék nem található</div>;

  return <ProductPageClient termek={termek} />;
}
