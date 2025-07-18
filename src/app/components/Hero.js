"use client";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex items-center justify-center h-full z-10 px-4">
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center max-w-4xl">
          <p>SØNNSTA</p>
          <br/>
          Hiszed, ha látod.
        </h2>
      </div>
    </div>
  );
}
