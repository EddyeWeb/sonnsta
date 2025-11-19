import ProductPageClient from "./ProductPageClient";

const TERMÉKEK = {
  "1-modulos-ablak": {
    id: 1,
    image: "./S.jpg",
    title: "Egymodulos napfényablak",
    description:
      "A SØNNSTA S a legkompaktabb modell, amely egyetlen modullal is képes megidézni a természetes napfényt. Ideális választás kisebb terekbe – előszobákba, fürdőszobákba vagy dolgozósarokba –, ahol valódi ablak nincs, mégis szükség van világosságra és inspiráló térélményre.",
    price: "Ár: 99.900 Ft",
    details: {
      features: [
        "Természetes napfényhatás beltérben – a fény karaktere a valódi napfény élményét idézi.",
        "Egymodulos rendszer – kompakt, helytakarékos kivitel.",
        "Fogyasztás: 20 Watt – alacsony energiaigény.",
        "Állítható fényerő – manuálisan és okostelefonról is vezérelhető dimmelési lehetőség.",
        "Egyszerű telepítés – 12 V-os tápellátással, falra akasztható kivitelben.",
      ],
      specs: [
        "Méretek: kb. 57 cm × 52 cm × 3,5 cm",
        "Energiaellátás: 12 V DC adapter (tartozék)",
        "Fényforrás: nagy hatékonyságú LED-ek",
        "Fogyasztás: 20 W",
        "Színhőmérséklet: a természetes napfény tartományában",
      ],
      package: [
        "SØNNSTA S egység",
        "12 V tápegység",
        "Rögzítőelemek",
        "Rövid telepítési útmutató",
      ],
      warranty: [
        "2 év gyártói garancia",
        "Magyar nyelvű ügyfélszolgálat és szerviz",
      ],
      usage: [
        "Előszoba vagy folyosó",
        "Fürdőszoba",
        "Dolgozósarok vagy kisebb irodahelyiség",
        "Olyan terek, ahol nincs természetes fény",
      ],
    },
  },
  "2-modulos-ablak": {
    id: 2,
    image: "./M.jpg",
    title: "SØNNSTA M",
    description:
      "A SØNNSTA M a legnépszerűbb modell: két modulja tökéletes egyensúlyt kínál a kompakt méret és a látványos napfényhatás között. Nappalikba, hálószobákba és irodákba is ideális, ahol a tér tágasabbá és világosabbá válhat.",
    price: "Ár: 199.900 Ft",
    details: {
      features: [
        "Természetes napfényhatás beltérben – élethű fény és vizuális térélmény.",
        "Kétmodulos rendszer – látványosabb, erőteljesebb fényhatás, közepes méretű terekhez.",
        "Fogyasztás: 40 Watt – energiatakarékos működés.",
        "Állítható fényerő – manuálisan és okostelefonról is vezérelhető dimmelési lehetőség.",
        "Egyszerű telepítés – 12 V-os tápellátással, falra akasztható kivitelben.",
      ],
      specs: [
        "Méretek: kb. 57 cm × 97 cm × 3,5 cm",
        "Energiaellátás: 12 V DC adapter (tartozék)",
        "Fényforrás: nagy hatékonyságú LED-ek",
        "Fogyasztás: 40 W",
        "Színhőmérséklet: a természetes napfény tartományában",
      ],
      package: [
        "SØNNSTA M egység",
        "12 V tápegység",
        "Rögzítőelemek",
        "Rövid telepítési útmutató",
      ],
      warranty: [
        "2 év gyártói garancia",
        "Magyar nyelvű ügyfélszolgálat és szerviz",
      ],
      usage: [
        "Nappali",
        "Hálószoba",
        "Dolgozószoba, irodák",
        "Kisebb közösségi terek",
      ],
    },
  },
  "4-modulos-ablak": {
    id: 3,
    image: "./L.jpg",
    title: "SØNNSTA L",
    description:
      "A SØNNSTA L a legnagyobb modell, amely négymodulos kialakításával lenyűgöző napfényélményt nyújt. Nagyobb belső terek, vendéglátóhelyek, wellness-központok vagy exkluzív enteriőrök ideális kiegészítője.",
    price: "Ár: 399.900 Ft",
    details: {
      features: [
        "Természetes napfényhatás beltérben – nagyméretű, élethű fényélmény.",
        "Négymodulos rendszer – erőteljes fényhatás nagyobb terekhez.",
        "Fogyasztás: 80 Watt – hatékony energiafelhasználás.",
        "Állítható fényerő – manuálisan és okostelefonról is vezérelhető dimmelési lehetőség.",
        "Egyszerű telepítés – 12 V-os tápellátással, falra akasztható kivitelben.",
      ],
      specs: [
        "Méretek: kb. 107 cm × 97 cm × 3,5 cm",
        "Energiaellátás: 12 V DC adapter (tartozék)",
        "Fényforrás: nagy hatékonyságú LED-ek",
        "Fogyasztás: 80 W",
        "Színhőmérséklet: a természetes napfény tartományában",
      ],
      package: [
        "SØNNSTA L egység",
        "12 V tápegység",
        "Rögzítőelemek",
        "Rövid telepítési útmutató",
      ],
      warranty: [
        "2 év gyártói garancia",
        "Magyar nyelvű ügyfélszolgálat és szerviz",
      ],
      usage: [
        "Tágas nappali",
        "Vendéglátóhelyek",
        "Wellness és relaxációs terek",
        "Exkluzív irodák vagy közösségi terek",
      ],
    },
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
