"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [overlayOpacity, setOverlayOpacity] = useState(0.8);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(0, 0.8 - (scrollTop / maxScroll) * 0.8);
      setOverlayOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("./hero.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative flex items-center justify-center h-full z-10 px-4">
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center max-w-4xl">
          <p>SØNNSTA</p>
          <br />
          Hiszed, ha látod.
        </h2>
      </div>
    </div>
  );
}
