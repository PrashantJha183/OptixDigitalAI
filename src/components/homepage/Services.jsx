// Services.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBullhorn,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: <FaLaptopCode className="text-[#5d00c3] text-5xl" />,
    title: "Web Development",
    desc: "High-performance, responsive websites built with the latest technologies to elevate your digital presence.",
    link: "/services/development",
  },
  {
    icon: <FaMobileAlt className="text-[#5d00c3] text-5xl" />,
    title: "App Development",
    desc: "Beautifully crafted Android and iOS applications designed for seamless performance and user delight.",
    link: "/services/development",
  },
  {
    icon: <FaPalette className="text-[#5d00c3] text-5xl" />,
    title: "Graphic Design",
    desc: "Visually stunning and brand-driven designs that communicate, engage, and inspire your audience effectively.",
    link: "/services/designing",
  },
  {
    icon: <FaBullhorn className="text-[#5d00c3] text-5xl" />,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that amplify reach, boost conversions, and deliver measurable ROI.",
    link: "/services/marketing",
  },
];

const Services = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Animate section whenever it enters the viewport
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Ensure animation only starts after mount
          requestAnimationFrame(() => controls.start("visible"));
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);

    // Safe cleanup check
    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
      observer.disconnect();
    };
  }, [controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="new-font py-16 md:py-20 px-4 sm:px-6 md:px-20 bg-white m-4 rounded-2xl shadow-md relative overflow-hidden sm:overflow-visible"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="text-center mb-10">
        <motion.h2
          id="services-title"
          className="text-lg md:text-2xl font-semibold text-[#5d00c3] border-2 border-[#5d00c3] rounded-full inline-block px-6 py-2"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={1}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-2xl md:text-5xl font-bold text-gray-900 mt-6"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={2}
        >
          CREATIVE, SCALABLE & IMPACTFUL SOLUTIONS
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-6 md:gap-8 gap-x-6 md:gap-x-8 overflow-visible">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-gray-50 pt-14 mt-4 md:mt-8 pb-8 px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative group overflow-visible border-[2px] border-[#5d00c3]"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={i + 3}
            whileHover={{ scale: 1.03 }}
          >
            {/* Icon Circle */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-5 rounded-full border-[3px] border-[#5d00c3] shadow-md z-10">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 px-2">
              {service.desc}
            </p>

            <Link
              to={service.link}
              aria-label={`Learn more about ${service.title}`}
              className="inline-flex items-center gap-2 text-[#5d00c3] font-semibold hover:text-yellow-500 transition-all"
            >
              <span>Learn More</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Services);
