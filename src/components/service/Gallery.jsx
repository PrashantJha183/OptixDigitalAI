// Gallery.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Local assets (replace with your actual paths)
import Social_1 from "../../assets/Digital Marketing.jpeg";
import Social_2 from "../../assets/Digital Marketing Social Media Post Design.jpeg";
import Social_3 from "../../assets/DM.jpeg";
import Social_4 from "../../assets/social_media_4.png";
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
  social: [Social_1, Social_2, Social_3, Social_4],
  graphics: [Graphics_1, Graphics_2, Graphics_3, Graphics_4, Graphics_5],
  logo: [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5],
};

// Reusable BlurImage Component
const BlurImage = React.memo(({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full md:h-full overflow-hidden rounded-xl bg-gray-100">
      {/* Low-quality blur fallback */}
      <img
        src={src}
        alt={`${alt} - blurred preview`}
        className={`absolute w-full h-full object-cover filter blur-2xl scale-110 transition-all duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`relative w-full h-full object-cover transition-all duration-700 ${
          loaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-105 blur-lg"
        }`}
      />
    </div>
  );
});

// Main Gallery Component
const Gallery = () => {
  const [selected, setSelected] = useState("social");

  // Entrance + Scroll animation setup
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
      className="min-h-[60vh] bg-white px-6 sm:px-10 py-12 m-4 rounded-lg shadow-xl new-font"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#5d00c3]">
        Our Works
      </h2>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["social", "graphics", "logo"].map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 text-sm sm:text-base rounded-md font-semibold border transition-all duration-300 ${
              selected === cat
                ? "bg-[#5d00c3] text-white shadow-lg"
                : "bg-white text-black border-black hover:bg-gray-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Image Grid with smooth transition */}
      {/* Image Grid with smooth transition */}
      <AnimatePresence mode="wait">
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
                <BlurImage src={img} alt={`${selected} design ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
