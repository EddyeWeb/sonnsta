'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function ClientWrapper() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Products />
      <Gallery />
      <Contact />
    </>
  );
}
