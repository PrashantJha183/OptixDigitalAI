// ServicesWeOffer.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaEnvelopeOpenText,
  FaChartLine,
  FaPenNib,
  FaBullhorn,
  FaLaptopCode,
} from "react-icons/fa";

const ServiceCard = memo(({ title, description, icon }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 12, mass: 0.7 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 30,
        scale: 0.95,
        transition: { duration: 0.4 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={controls}
      whileHover={{ scale: 1.03 }}
      className="relative p-6 md:p-8 bg-yellow-400 shadow-md border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg text-center marketingservice flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg md:text-2xl font-bold text-[#5d00c3] mb-3 break-words">
          {title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed overflow-hidden">
          {description}
        </p>
      </div>

      {/* Icon bottom-right */}
      <div className="absolute bottom-0 right-0 bg-[#5d00c3] rounded-tl-3xl p-3 text-white text-2xl md:text-3xl opacity-90">
        {icon}
      </div>
    </motion.div>
  );
});

const ServicesWeOffer = () => {
  const services = {
    col1: [
      {
        title: "Social Media Marketing",
        description:
          "Enhance brand presence across platforms and build lasting audience engagement.",
        icon: <FaFacebookF />,
      },
    ],
    col2: [
      {
        title: "Digital Marketing",
        description:
          "Drive traffic, conversions, and ROI through multi-channel digital strategies.",
        icon: <FaChartLine />,
      },
      {
        title: "Email Marketing",
        description:
          "Deliver personalized campaigns that convert subscribers into customers.",
        icon: <FaEnvelopeOpenText />,
      },
      {
        title: "Content Marketing",
        description:
          "Engage audiences with impactful stories and consistent brand voice.",
        icon: <FaPenNib />,
      },
      {
        title: "Paid Ads Campaigns",
        description:
          "Maximize reach and sales with data-driven ad targeting and optimization.",
        icon: <FaBullhorn />,
      },
    ],
    col3: [
      {
        title: "SEO Optimization",
        description:
          "Boost your website's visibility with on-page and off-page SEO strategies, including link building, content optimization, and keyword research.",
        icon: <FaLaptopCode />,
      },
    ],
  };

  return (
    <section
      className="relative py-16 md:py-24 px-4 sm:px-8 md:px-12 bg-white m-4 rounded-md shadow-lg new-font overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2
          id="services-heading"
          className="text-3xl md:text-5xl font-bold text-[#5d00c3] mb-12"
        >
          Services We Offer
        </h2>

        {/* parent grid switched to 12-col on large screens:
            left = col-span-3, middle = col-span-6, right = col-span-3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Column 1 (left) */}
          <div className="lg:col-span-3 flex flex-col gap-8 justify-center">
            {services.col1.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>

          {/* Column 2 (middle) — wider on lg screens */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.col2.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>

          {/* Column 3 (right) */}
          <div className="lg:col-span-3 flex flex-col gap-8 justify-center">
            {services.col3.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesWeOffer);
