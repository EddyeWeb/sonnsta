"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const sectionControls = useAnimation();
  const titleControls = useAnimation();
  const [showNav, setShowNav] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      sectionControls.start({
        height: "4rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        transition: { duration: 0.75, ease: "easeInOut" },
      });

      titleControls.start({
        top: "0.5rem",
        left: "1.5rem",
        transform: "translate(0, 0)",
        scale: 0.5,
        transition: { duration: 0.75, ease: "easeInOut" },
      });

      setTimeout(() => {
        setShowNav(true);
        setShowHeroContent(true);
      }, 800);
    }, 1500);

    return () => clearTimeout(timer);
  }, [sectionControls, titleControls]);

  return (
    <div className="relative w-full h-screen">
      {showHeroContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://picsum.photos/1600/900?grayscale")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
              Hiszed, ha látod.
            </h2>
          </div>
        </motion.div>
      )}

      <motion.section
        initial={{ height: "100vh", position: "relative" }}
        animate={sectionControls}
        className="bg-white w-full flex items-center justify-center z-50 overflow-hidden"
      >
        <motion.a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          initial={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            scale: 1,
          }}
          animate={titleControls}
          className="text-5xl font-bold text-gray-900 z-50 cursor-pointer"
        >
          SONNSTA
        </motion.a>

        {showNav && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 right-0 w-full bg-white shadow-md z-40"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">

                <div className="hidden sm:flex space-x-6 ml-auto">
                  <a
                    href="#products"
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Termékek
                  </a>
                  <a
                    href="#gallery"
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Galéria
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Kapcsolat
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </motion.section>
    </div>
  );
}
