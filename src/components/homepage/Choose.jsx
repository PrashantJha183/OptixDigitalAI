import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaBolt,
  FaUserShield,
  FaCheckCircle,
  FaThumbsUp,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import chooseImg from "../../assets/Choose.png";
import { Link } from "react-router-dom";
import Optix from "../../assets/Optix Low Opacity Logo.svg";

const points = [
  {
    icon: <FaBolt className="text-yellow-400 text-4xl mb-3" />,
    title: "Lightning Fast Delivery",
    desc: "Experience ultra-fast performance and rapid project deployment designed to accelerate your business growth.",
  },
  {
    icon: <FaUserShield className="text-blue-400 text-4xl mb-3" />,
    title: "Secure & Reliable",
    desc: "Your data is protected with enterprise-grade security and round-the-clock reliability you can trust.",
  },
  {
    icon: <FaCheckCircle className="text-green-400 text-4xl mb-3" />,
    title: "Trusted Expertise",
    desc: "Our skilled professionals deliver creative, high-quality solutions tailored to your unique needs.",
  },
  {
    icon: <FaThumbsUp className="text-pink-400 text-4xl mb-3" />,
    title: "Client Satisfaction",
    desc: "We go the extra mile to ensure every client leaves not just satisfied, but impressed.",
  },
];

const Choose = () => {
  const [isMobile, setIsMobile] = useState(false);
  const buttonControls = useAnimation();
  const buttonRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate button when in view
  useEffect(() => {
    if (!buttonRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          buttonControls.start("visible");
        } else {
          buttonControls.start("hidden");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(buttonRef.current);
    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, [buttonControls]);

  const getItemVariants = (index) => {
    if (isMobile) {
      return {
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.1,
            type: "spring",
            stiffness: 250,
            damping: 18,
            mass: 0.7,
          },
        },
        hover: {
          scale: 1.05,
          transition: { type: "spring", stiffness: 250, damping: 16 },
        },
      };
    }

    return {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay: index * 0.2 },
      },
      hover: {
        scale: 1.05,
        transition: { type: "spring", stiffness: 220, damping: 14 },
      },
    };
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="pb-10 new-font m-4 md:mt-0 md:pt-20 md:pb-12 rounded-md flex flex-col md:flex-row justify-center items-center md:gap-6 lg:gap-8 text-center md:text-left px-4 md:px-12 bg-[#5d00c3] text-white overflow-hidden relative">
      {/* Optix Watermark Top Left */}
      <img
        src={Optix}
        alt="Optix Logo"
        className="absolute top-10 left-4 md:w-96 pointer-events-none select-none hidden md:block"
      />

      {/* Left Image (Wrapped in motion.div for proper animation) */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={chooseImg}
          alt="Why Choose Us"
          className="w-90 pt-10 md:pt-0 md:w-[500px] lg:w-[500px] duration-500"
        />
      </motion.div>

      {/* Right Text */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-full">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-lg md:text-2xl border-2 rounded-full px-6 py-3 mt-6 md:mt-0 font-bold mb-6 text-white"
        >
          Why Choose Us
        </motion.h2>

        {/* Points Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={getItemVariants(i)}
              whileHover="hover"
              className="flex flex-col items-center md:items-start p-5 transition-all duration-300 md:bg-white text-[#5d00c3] md:rounded-xl md:shadow-lg md:hover:shadow-xl"
            >
              {point.icon}
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {point.title}
              </h3>
              <p className="text-gray-200 md:text-gray-900 text-sm md:text-base leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Request a Call Button */}
        <Link to="/contact">
          <motion.button
            ref={buttonRef}
            variants={buttonVariants}
            initial="hidden"
            animate={buttonControls}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md mt-10 md:mt-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiPhone className="text-xl" />
            Get in Touch
          </motion.button>
        </Link>
      </div>

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="absolute w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[180px] -z-10 bottom-0 left-1/2 -translate-x-1/2"
      />
    </section>
  );
};

export default React.memo(Choose);
