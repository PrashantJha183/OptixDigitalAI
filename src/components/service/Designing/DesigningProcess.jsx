// components/HighlightsSection.jsx
import React, { memo, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Cpu, Layers, Wand2 } from "lucide-react";

// Static, frozen array for performance (no reallocation)
const highlights = Object.freeze([
  {
    icon: <Zap size={42} aria-hidden="true" />,
    title: "Creative Energy",
    desc: "We spark bold ideas that energize your brand and connect emotionally.",
  },
  {
    icon: <Cpu size={42} aria-hidden="true" />,
    title: "AI-Enhanced Workflow",
    desc: "Harnessing smart automation to design with precision and innovation.",
  },
  {
    icon: <Layers size={42} aria-hidden="true" />,
    title: "Seamless Integration",
    desc: "We blend design, development, and intelligence into one unified experience.",
  },
  {
    icon: <Wand2 size={42} aria-hidden="true" />,
    title: "Impactful Results",
    desc: "Every pixel is refined to inspire, engage, and drive real-world success.",
  },
]);

// Individual Card (memoized)
const HighlightCard = memo(({ icon, title, desc, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  // Motion logic identical to original but wrapped in useEffect
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 18,
          mass: 0.8,
          delay,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 100,
        transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.8 },
      });
    }
  }, [inView, controls, delay]);

  // Floating icon animation config
  const iconFloat = useMemo(
    () => ({
      animate: { y: [0, -8, 0] },
      transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
    }),
    []
  );

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 250, damping: 15 },
      }}
      role="listitem"
      aria-label={`${title} highlight card`}
    >
      <motion.div
        {...iconFloat}
        className="text-white bg-[#5d00c3] mb-4 border-2 border-[#5d00c3] p-5 rounded-full shadow-lg"
        aria-hidden="true"
      >
        {icon}
      </motion.div>

      <h3 className="text-lg font-semibold mb-2 text-[#5d00c3]">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.article>
  );
});

const DesigningProcess = () => {
  // Memoized highlight cards (avoid re-render on parent updates)
  const renderedHighlights = useMemo(
    () =>
      highlights.map((item, idx) => (
        <HighlightCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          delay={idx * 0.12}
        />
      )),
    []
  );

  return (
    <section
      className="relative bg-white text-[#5d00c3] py-24 md:py-16 px-6 md:px-12 rounded-md shadow-lg new-font overflow-hidden m-4"
      aria-labelledby="designing-process-heading"
      role="region"
    >
      {/* Accessible SEO heading */}
      <motion.h2
        id="designing-process-heading"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-5xl font-extrabold text-center mb-16 leading-tight"
      >
        Transforming Concepts into Intelligent Reality
      </motion.h2>

      {/* Cards grid with ARIA role for semantics */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
        role="list"
        aria-label="Key design process highlights"
      >
        {renderedHighlights}
      </div>
    </section>
  );
};

export default memo(DesigningProcess);
