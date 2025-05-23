'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function ClientWrapper() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Gallery />
      <Contact />
    </>
  );
}
