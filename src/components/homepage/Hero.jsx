import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ErrorBoundary from "../base/ErrorBoundary";
import { FiArrowRight } from "react-icons/fi";
import hook from "../../assets/Optix Hero Section.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Mark component mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Small loading delay (skeleton)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Safe scroll-based animation trigger
  useEffect(() => {
    if (!loaded || !sectionRef.current || !hasMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!hasMounted) return;

        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loaded, hasMounted, controls]);

  // Animation variants
  const fadeVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.25,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  if (!loaded)
    return (
      <div className="bg-[#5d00c3] text-white min-h-[70vh] flex justify-center items-center rounded-md m-4 px-4 md:px-8 animate-pulse" />
    );

  return (
    <ErrorBoundary>
      <section
        ref={sectionRef}
        className="bg-[#5d00c3] text-white md:pt-52 md:pb-24 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-40 py-32 md:py-10 rounded-md m-4 overflow-hidden new-font relative"
        role="banner"
      >
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 space-y-6 md:space-y-5 z-10"
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          custom={1}
        >
          <motion.h1
            className="text-lg md:text-3xl leading-tight"
            tabIndex={0}
            variants={fadeVariant}
            custom={1}
          >
            Welcome to OptixDigitalAI
          </motion.h1>

          <motion.p
            className="text-4xl md:text-6xl text-gray-100 max-w-5xl font-extrabold"
            tabIndex={0}
            variants={fadeVariant}
            custom={2}
          >
            Transforming Ideas Into
            <span className="text-yellow-400"> Digital World</span>
          </motion.p>

          <motion.p
            className="text-md md:text-xl text-gray-100 max-w-5xl"
            tabIndex={0}
            variants={fadeVariant}
            custom={2}
          >
            Crafting intuitive designs that captivate and inspire. Building
            dynamic websites that define your digital identity. Empowering
            brands with intelligent, future-ready solutions.
          </motion.p>
          <Link to="/contact">
            <motion.button
              className="mt-4 bg-transparent text-white font-semibold px-6 py-3 rounded-md border-2 border-white hover:bg-white hover:text-[#5d00c3] transition-all duration-300 inline-flex items-center space-x-3"
              aria-label="Get Started with OptixDigitalAI"
              variants={fadeVariant}
              custom={3}
              whileHover={{
                scale: 1.08,
                x: 6,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <FiArrowRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-2" />
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center z-10"
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          custom={4}
        >
          <motion.img
            src={hook}
            alt="Creative agency illustration - OptixDigitalAI"
            loading="lazy"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl rounded-lg object-contain mx-auto transition-transform duration-700 ease-in-out"
            whileHover={{
              scale: 1.1,
              rotate: 1.5,
              transition: { type: "spring", stiffness: 200, damping: 12 },
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Hero;
