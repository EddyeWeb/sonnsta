import ProductPageClient from "./ProductPageClient";

const TERMÉKEK = {
  "1-modulos-ablak": {
    id: 1,
    image: "/S.jpg",
    title: "SØNNSTA S",
    description: "Egymodulos napfényablak – a legkompaktabb SØNNSTA-élmény\nTermészetes napfényhatás beltérben\nEgymodulos rendszer – ideális kisebb terekbe, előszobába, fürdőszobába vagy dolgozósarokba\nFogyasztás: 20 Watt\nValódi napfény színhőmérséklet és fénydinamika\nEgyszerű telepítés: 12V-os tápellátás, falra akasztható kivitel",
    details: [
      "Természetes napfényhatás beltérben",
      "Egymodulos rendszer – ideális kisebb terekbe, előszobába, fürdőszobába vagy dolgozósarokba",
      "Fogyasztás: 20 Watt",
      "Valódi napfény színhőmérséklet és fénydinamika",
      "Egyszerű telepítés: 12V-os tápellátás, falra akasztható kivitel",
    ],
  },
  "2-modulos-ablak": {
    id: 2,
    image: "/M.jpg",
    title: "SØNNSTA M",
    description: "Kétmodulos napfényablak – tökéletes egyensúly méret és hatás között\nTermészetes napfényhatás beltérben\nKétmodulos rendszer – nappalikba, hálószobákba, irodákba ideális választás\nFogyasztás: 40 Watt\nValódi napfény színhőmérséklet és fénydinamika\nEgyszerű telepítés: 12V-os tápellátás, falra akasztható kivitel",
    details: [
      "Természetes napfényhatás beltérben",
      "Kétmodulos rendszer – nappalikba, hálószobákba, irodákba ideális választás",
      "Fogyasztás: 40 Watt",
      "Valódi napfény színhőmérséklet és fénydinamika",
      "Egyszerű telepítés: 12V-os tápellátás, falra akasztható kivitel",
    ],
  },
  "4-modulos-ablak": {
    id: 3,
    image: "/L.jpg",
    title: "SØNNSTA L",
    description: "Négymodulos napfényablak – a lenyűgöző napfényélmény beltérben\nTermészetes napfényhatás beltérben\nNégymodulos rendszer – nagyobb terekbe, vendéglátóipari vagy wellness környezetbe ideális\nFogyasztás: 80 Watt\nValódi napfény színhőmérséklet és fénydinamika\nEgyszerű telepítés: 12V-os tápellátás, falra akasztható kivitel",
    details: [
      "Természetes napfényhatás beltérben",
      "Négymodulos rendszer – nagyobb terekbe, vendéglátóipari vagy wellness környezetbe ideális",
      "Fogyasztás: 80 Watt",
      "Valódi napfény színhőmérséklet és fénydinamika",
      "Egyszerű telepítés: 12V-os tápellátás, falra akasztható kivitel",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(TERMÉKEK).map((slug) => ({ slug }));
}

export default async function TermekOldal({ params }) {
  const { slug } = await params;
  const termek = TERMÉKEK[slug];

  if (!termek) {
    return <div>Termék nem található</div>;
  }

  return <ProductPageClient termek={termek} />;
}
