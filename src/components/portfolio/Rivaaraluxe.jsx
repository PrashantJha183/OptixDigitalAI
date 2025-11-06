import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import riva from "../../assets/riva.png";
import riva2 from "../../assets/riva2.png";
import riva3 from "../../assets/riva3.png";
import riva4 from "../../assets/riva5.png";

const images = [riva, riva2, riva3, riva4];

// BlurImage (specific for website collage)
const BlurImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-100">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`object-cover w-full h-full transition-all duration-700 ${
          loaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-105 blur-2xl"
        }`}
      />
    </div>
  );
};

const Rivaaraluxe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-3xl mx-auto"
      >
        {/* Collage Layout (dynamic sizes) */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 p-3 bg-gray-50">
          <div className="col-span-2 row-span-2">
            <BlurImage src={images[0]} alt="Main Collage Image" />
          </div>
          <div className="col-span-2">
            <BlurImage src={images[1]} alt="Collage Image 2" />
          </div>
          <div className="col-span-1">
            <BlurImage src={images[2]} alt="Collage Image 3" />
          </div>
          <div className="col-span-1">
            <BlurImage src={images[3]} alt="Collage Image 4" />
          </div>
        </div>

        {/* Description & Website Link */}
        <div className="p-5 text-center">
          <h3 className="text-2xl font-semibold text-[#5d00c3] mb-2">
            RIVAARALUXE
          </h3>
          <p className="text-gray-600 text-base mb-4">
            Discover{" "}
            <span className="font-medium text-[#5d00c3]">RIVAARALUXE</span> a
            refined lifestyle e-commerce platform offering exquisite bags,
            apparel, and accessories that redefine modern sophistication. Where
            timeless design meets everyday elegance.
          </p>

          <a
            href="https://rivaaraluxe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#5d00c3] text-white font-medium rounded-lg shadow-md hover:bg-[#4a00a0] transition-all duration-300"
          >
            Visit Website
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Rivaaraluxe;
