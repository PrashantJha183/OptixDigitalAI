// AboutUsView.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import ErrorBoundary from "../base/ErrorBoundary";
import SkeletonLoader from "../base/SkeletonLoader";
import { FiArrowRight } from "react-icons/fi";
const About = () => {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Simulate load for skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Trigger animation on scroll for mobile and desktop
  useEffect(() => {
    if (!loaded || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden"); // Reset when leaving viewport
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [loaded, controls]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, type: "spring", stiffness: 120 },
    }),
  };

  if (!loaded) return <SkeletonLoader />;

  return (
    <ErrorBoundary>
      <section
        ref={sectionRef}
        className="min-h-[50vh] flex flex-col justify-start py-8 items-center px-4 md:px-8 text-center new-font m-4 rounded-md bg-white shadow-lg"
        role="region"
        aria-labelledby="about-title"
      >
        <motion.h1
          id="about-title"
          className="text-lg md:text-2xl font-semibold mb-4 text-[#5d00c3] border-2 border-[#5d00c3] rounded-full px-6 py-2 inline-block"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={1}
          tabIndex={0}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-2xl md:text-5xl text-gray-900 max-w-3xl mb-5 md:mb-6 md:mt-4 font-bold"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={2}
          tabIndex={0}
        >
          Concepts That Captivate, Solutions That Perform
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-gray-600 max-w-2xl mb-6"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={3}
        >
          Our team of designers, developers, and creative strategists work
          together to transform ideas into visually compelling and highly
          functional digital experiences. We focus on innovation, usability, and
          aesthetics to ensure your brand stands out in a crowded digital world.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={4}
        >
          <Link
            to="/about"
            className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition-transform transform hover:scale-105 space-x-2"
            aria-label="Contact OptixDigitalAI"
          >
            <span>Know More</span>
            <FiArrowRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default About;
