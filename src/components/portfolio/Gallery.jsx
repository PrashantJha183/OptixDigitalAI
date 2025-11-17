// Gallery.jsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Local assets
import Social_1 from "../../assets/Digital Marketing.jpeg";
import Social_2 from "../../assets/Digital Marketing Social Media Post Design.jpeg";
import Social_3 from "../../assets/DM.jpeg";
import Social_4 from "../../assets/social_media_4.png";
import Social_5 from "../../assets/social_media_6.jpeg";
import Logo_1 from "../../assets/logo_1.png";
import Logo_2 from "../../assets/logo_2.png";
import Logo_3 from "../../assets/logo_3.png";
import Logo_4 from "../../assets/logo_4.png";
import Logo_5 from "../../assets/logo_5.png";
import Graphics_1 from "../../assets/download.jpeg";
import Graphics_2 from "../../assets/graphics.jpeg";
import Graphics_3 from "../../assets/Tony.jpeg";
import Graphics_4 from "../../assets/VK.jpeg";
import Graphics_5 from "../../assets/graphics_5.jpeg";

// Gallery Data
const galleryData = {
  social: [Social_1, Social_2, Social_3, Social_4, Social_5],
  graphics: [Graphics_1, Graphics_2, Graphics_3, Graphics_4, Graphics_5],
  logo: [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5],
};

// Lazy load website section
const Rivaaraluxe = lazy(() => import("./Rivaaraluxe"));
const Diva = lazy(() => import("./Diva"));

// BlurImage (for other categories)
const BlurImage = React.memo(({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [showLqip, setShowLqip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLqip(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100">
      {!loaded && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite]" />
      )}

      {showLqip && !loaded && (
        <img
          src={src}
          alt={`${alt} - LQIP`}
          className="absolute w-full h-full object-cover filter blur-2xl scale-110 opacity-70 transition-all duration-500"
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`relative w-full h-full object-cover transition-all duration-700 ${
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105"
        }`}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
});

const Gallery = () => {
  const [selected, setSelected] = useState("social");
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 15 },
      });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="bg-white px-6 sm:px-10 py-12 m-4 rounded-lg shadow-xl new-font"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#5d00c3]">
        Our Works
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2">
          {["social", "graphics", "logo", "website"].map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setSelected(cat)}
              className={`flex-shrink-0 px-6 py-2 text-sm sm:text-base rounded-md font-semibold border transition-all duration-300 ${
                selected === cat
                  ? "bg-[#5d00c3] text-white shadow-lg"
                  : "bg-white text-black border-black hover:bg-gray-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Hide scrollbar visually but keep scrollable */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Category Display */}
      <AnimatePresence mode="wait">
        {selected !== "website" ? (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {galleryData[selected].map((img, index) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: index * 0.1,
                  }}
                  className="flex justify-center"
                >
                  <BlurImage
                    src={img}
                    alt={`${selected} design ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="website"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row justify-center items-stretch w-full gap-6 md:gap-8 lg:gap-10"
          >
            {/* Rivaaraluxe */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Suspense
                fallback={
                  <div className="w-full flex justify-center items-center py-20">
                    <div className="w-16 h-16 border-4 border-[#5d00c3] border-t-transparent rounded-full" />
                  </div>
                }
              >
                <Rivaaraluxe />
              </Suspense>
            </div>

            {/* Diva Deluxe */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Suspense
                fallback={
                  <div className="w-full flex justify-center items-center py-20">
                    <div className="w-16 h-16 border-4 border-[#5d00c3] border-t-transparent rounded-full" />
                  </div>
                }
              >
                <Diva />
              </Suspense>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
