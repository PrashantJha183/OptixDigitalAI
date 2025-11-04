// components/Hero.jsx
import React, { useRef, memo, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  PenTool,
  Layout,
  MonitorSmartphone,
  Smartphone,
  Palette,
  RefreshCw,
} from "lucide-react";

// Static data memoized for performance (won’t recreate on every render)
const services = Object.freeze([
  { name: "Graphic Design", icon: <Palette size={40} aria-hidden="true" /> },
  { name: "UI/UX Design", icon: <Layout size={40} aria-hidden="true" /> },
  {
    name: "Web Design",
    icon: <MonitorSmartphone size={40} aria-hidden="true" />,
  },
  { name: "App Design", icon: <Smartphone size={40} aria-hidden="true" /> },
  { name: "Logo Design", icon: <PenTool size={40} aria-hidden="true" /> },
  { name: "Redesigning", icon: <RefreshCw size={40} aria-hidden="true" /> },
]);

const DesigningHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Memoized service icons to avoid re-rendering
  const renderedServices = useMemo(
    () =>
      services.map((service, index) => (
        <motion.div
          key={service.name}
          className="flex flex-col items-center justify-center p-4 transition-transform duration-300"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className="flex flex-col items-center"
          >
            <div
              className="text-white mb-2 border-2 border-yellow-400 p-6 md:p-10 rounded-full shadow-xl"
              role="img"
              aria-label={`${service.name} icon`}
            >
              {service.icon}
            </div>
            <p
              className="text-sm md:text-lg font-medium text-white mt-2"
              aria-label={service.name}
            >
              {service.name}
            </p>
          </motion.div>
        </motion.div>
      )),
    []
  );

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-8 flex flex-col items-center justify-center min-h-[75vh] new-font text-white bg-[#5d00c3] m-4 rounded-md shadow-lg overflow-hidden"
      aria-labelledby="designing-hero-heading"
      role="region"
    >
      {/* SEO-optimized heading */}
      <motion.h1
        id="designing-hero-heading"
        initial={{ opacity: 0, y: -80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight"
      >
        We Don’t Just Design
        <br />
        <span className="block mt-4 text-yellow-400">
          We Create Digital Intelligence
        </span>
      </motion.h1>

      {/* SEO + accessibility improved description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-lg sm:text-xl text-center text-white max-w-2xl p-2 md:p-0"
      >
        At{" "}
        <strong className="font-semibold text-yellow-400">
          OptixDigitalAI
        </strong>
        , design meets innovation blending creativity with smart, AI-driven
        digital experiences.
      </motion.p>

      {/* Animated service icons */}
      <div
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center"
        aria-label="List of design services"
      >
        {renderedServices}
      </div>
    </section>
  );
};

// Memoized for top-level render optimization
export default memo(DesigningHero);
