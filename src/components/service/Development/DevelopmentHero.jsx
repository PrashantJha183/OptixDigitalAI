// components/sections/DevelopmentHero.jsx
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Optix from "../../../assets/Optix Low Opacity Logo.svg";

const DevelopmentHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Memoize text lines to avoid recreation on each render
  const lines = useMemo(() => ["esign", "evelop", "eploy"], []);

  const textVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: i * 0.25,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="development-hero-bg flex justify-center items-center m-4 new-font bg-[#5d00c3] text-white overflow-hidden rounded-md shadow-lg"
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] pl-12 md:pl-28">
        {/* Background Logo */}
        <img
          src={Optix}
          alt="Optix Logo Background Left"
          className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] pointer-events-none select-none hidden md:block"
        />

        {/* Big 'D' Letter */}
        <motion.span
          initial={{ y: 150, opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, scale: 1 }
              : { y: 150, opacity: 0, scale: 0.8 }
          }
          transition={{ type: "spring", stiffness: 160, damping: 12 }}
          className="absolute pr-32 md:pr-96 text-[200px] xs:text-[180px] sm:text-[220px] md:text-[350px] lg:text-[450px] font-black leading-none text-white/70 md:text-yellow-400 select-none pointer-events-none"
        >
          D
        </motion.span>

        {/* Text beside D */}
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-5 text-center relative z-10">
          {lines.map((word, i) => (
            <motion.div
              key={word}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`font-bold tracking-wider ${
                i === 1 ? "flex items-center justify-center gap-4 sm:gap-2" : ""
              } text-2xl sm:text-3xl md:text-5xl lg:text-6xl`}
            >
              {i === 1 ? (
                <>
                  <span className="text-transparent">D</span>
                  {word}
                </>
              ) : (
                word
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(DevelopmentHero);
