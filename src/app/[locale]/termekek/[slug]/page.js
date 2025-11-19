import ProductPageClient from "./ProductPageClient";
import { getDictionary } from "../../lib/dictionaries";
import { SLUGS } from "../termekek-adatok";

export async function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }));
}

export default async function TermekOldal({ params }) {
  const { locale, slug } = params;
  const dict = await getDictionary(locale);

  const TERMÉKEK = {
    "1-modulos-ablak": {
      id: 1,
      image: "/S.jpg",
      title: dict.products.S.title,
      description: dict.products.S.description,
      price: "99.900",
      details: {
        features: [
          dict.products.S.key_features[0],
          dict.products.S.key_features[1],
          dict.products.S.key_features[2],
          dict.products.S.key_features[3],
          dict.products.S.key_features[4],
        ],
        specs: [
          dict.products.S.technical_data[0],
          dict.products.S.technical_data[1],
          dict.products.S.technical_data[2],
          dict.products.S.technical_data[3],
          dict.products.S.technical_data[4],
        ],
        package: [
          dict.products.S.package_contents[0],
          dict.products.S.package_contents[1],
          dict.products.S.package_contents[2],
          dict.products.S.package_contents[3],
        ],
        warranty: [dict.products.S.warranty[0], dict.products.S.warranty[1]],
        usage: [
          dict.products.S.recommended_use[0],
          dict.products.S.recommended_use[1],
          dict.products.S.recommended_use[2],
          dict.products.S.recommended_use[3],
        ],
      },
    },
    "2-modulos-ablak": {
      id: 2,
      image: "/M.jpg",
      title: dict.products.M.title,
      description: dict.products.M.description,
      price: "199.900",
      details: {
        features: [
          dict.products.M.key_features[0],
          dict.products.M.key_features[1],
          dict.products.M.key_features[2],
          dict.products.M.key_features[3],
          dict.products.M.key_features[4],
        ],
        specs: [
          dict.products.M.technical_data[0],
          dict.products.M.technical_data[1],
          dict.products.M.technical_data[2],
          dict.products.M.technical_data[3],
          dict.products.M.technical_data[4],
        ],
        package: [
          dict.products.M.package_contents[0],
          dict.products.M.package_contents[1],
          dict.products.M.package_contents[2],
          dict.products.M.package_contents[3],
        ],
        warranty: [dict.products.M.warranty[0], dict.products.M.warranty[1]],
        usage: [
          dict.products.M.recommended_use[0],
          dict.products.M.recommended_use[1],
          dict.products.M.recommended_use[2],
          dict.products.M.recommended_use[3],
        ],
      },
    },
    "4-modulos-ablak": {
      id: 3,
      image: "/L.jpg",
      title: dict.products.L.title,
      description: dict.products.L.description,
      price: "399.900",
      details: {
        features: [
          dict.products.L.key_features[0],
          dict.products.L.key_features[1],
          dict.products.L.key_features[2],
          dict.products.L.key_features[3],
          dict.products.L.key_features[4],
        ],
        specs: [
          dict.products.L.technical_data[0],
          dict.products.L.technical_data[1],
          dict.products.L.technical_data[2],
          dict.products.L.technical_data[3],
          dict.products.L.technical_data[4],
        ],
        package: [
          dict.products.L.package_contents[0],
          dict.products.L.package_contents[1],
          dict.products.L.package_contents[2],
          dict.products.L.package_contents[3],
        ],
        warranty: [dict.products.L.warranty[0], dict.products.L.warranty[1]],
        usage: [
          dict.products.L.recommended_use[0],
          dict.products.L.recommended_use[1],
          dict.products.L.recommended_use[2],
          dict.products.L.recommended_use[3],
        ],
      },
    },
  };

  const termek = TERMÉKEK[slug];

  if (!termek) {
    return <div>{dict.common_values.no_products_found}</div>;
  }

  return <ProductPageClient termek={termek} />;
}
