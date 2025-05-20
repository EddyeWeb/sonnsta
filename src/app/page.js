import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Products />
      <Gallery />
      <Contact />
    </div>
  );
}
