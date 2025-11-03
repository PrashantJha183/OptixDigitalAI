// components/sections/PricingHeroSection.jsx
import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link as MotionLink } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import Optix from "../../assets/Optix Low Opacity Logo.svg";

const PricingHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const buttonControls = useAnimation();

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center py-32 md:py-40 px-6 md:px-12 bg-[#5d00c3] text-white overflow-hidden m-4 rounded-md shadow-lg new-font"
    >
      {/* Background logo */}
      <img
        src={Optix}
        alt="Optix Digital AI Background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%]  pointer-events-none select-none hidden md:block"
      />

      {/* Content */}
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.9 }}
        animate={
          isInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 80, opacity: 0, scale: 0.9 }
        }
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* <motion.h1
          className="text-xl md:text-3xl font-bold text-yellow-400 mb-2 md:mb-8"
          animate={isInView ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          OptixDigitalAI
        </motion.h1> */}

        <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
          Pricing & Features
        </h2>

        <p className="text-md md:text-xl text-gray-200 mb-2 md:mb-4 leading-relaxed">
          From startups to enterprises choose the plan that fits your growth.
          Scalable pricing, powerful AI-driven tools, and a partner in your
          success every step of the way.
        </p>

        {/* Updated Animated "Let's Connect" Button */}
        <motion.div
          animate={buttonControls}
          className="inline-flex items-center justify-center"
        >
          <MotionLink
            to="/contact"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400, damping: 12 },
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-flex items-center bg-[#facc15] text-[#5d00c3] font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
          >
            <motion.span
              animate={{ color: ["#ffffff", "#5d00c3", "#ffffff"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <PhoneCall className="w-5 h-5 mr-3" strokeWidth={2} />
            </motion.span>
            Let's Connect
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingHeroSection;
