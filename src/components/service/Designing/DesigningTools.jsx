import React, { useEffect, useState, memo, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Local assets (SEO-friendly names)
import FigmaLogo from "../../../assets/figma.png";
import IllustratorLogo from "../../../assets/illustrator.png";
import PhotoshopLogo from "../../../assets/photoshop.png";
import CanvaLogo from "../../../assets/canva.jpeg";

// Static tool data (frozen for immutability)
const tools = Object.freeze([
  {
    logo: FigmaLogo,
    name: "Figma",
    desc: "A collaborative design powerhouse for crafting modern interfaces. From brainstorming wireframes to building interactive prototypes, Figma allows real-time teamwork and seamless developer handoff ensuring ideas evolve beautifully into final designs.",
  },
  {
    logo: IllustratorLogo,
    name: "Adobe Illustrator",
    desc: "The industry's gold standard for precision vector art. Create everything from logos and brand systems to detailed illustrations and typography scalable across any device or medium with unmatched accuracy.",
  },
  {
    logo: PhotoshopLogo,
    name: "Adobe Photoshop",
    desc: "The creative playground for digital artists. From photo retouching to surreal composites, Photoshop empowers creators to blend reality and imagination, producing captivating visuals for both print and digital media.",
  },
  {
    logo: CanvaLogo,
    name: "Canva",
    desc: "The go-to design platform for fast, polished visuals. Whether you're crafting social media posts, presentations, or marketing graphics, Canva makes design accessible with templates, smart tools, and drag-and-drop simplicity.",
  },
]);

/** Individual Tool Card */
const ToolCard = memo(({ logo, name, desc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // allow re-animation on every view
  });

  // Run animation each time card enters/leaves viewport
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: [0.9, 1.08, 1],
        transition: {
          opacity: { duration: 0.4, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeInOut" },
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 60,
        scale: 0.9,
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={controls}
      className="flex flex-col items-center bg-white text-[#5d00c3]
                 p-6 rounded-2xl shadow-md border border-gray-100
                 transition-all duration-300 w-full max-w-md mx-auto"
      aria-label={`${name} design tool card`}
    >
      <motion.img
        src={logo}
        alt={`${name} logo`}
        title={`${name} – AI Design Tool`}
        loading="lazy"
        decoding="async"
        className="w-20 h-20 md:w-40 md:h-40 object-contain rounded-full mb-4"
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <h3 className="text-xl md:text-2xl font-bold text-[#5d00c3] mb-2 text-center">
        {name}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
        {desc}
      </p>
    </motion.article>
  );
});

/** Main Section */
const DesigningTools = () => {
  const toolCards = useMemo(
    () =>
      tools.map((tool) => (
        <ToolCard
          key={tool.name}
          logo={tool.logo}
          name={tool.name}
          desc={tool.desc}
        />
      )),
    []
  );

  return (
    <section
      className="new-font bg-[#5d00c3] text-[#f9f9f9]
                 py-16 md:py-28 px-6 md:px-12
                 rounded-md m-4 overflow-hidden shadow-lg"
      aria-labelledby="creative-toolkit-heading"
    >
      <motion.h2
        id="creative-toolkit-heading"
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }} // replays animation when re-entered
        transition={{ type: "spring", stiffness: 180, damping: 10 }}
        className="text-3xl sm:text-5xl font-extrabold text-center mb-16 leading-tight"
      >
        Our <span className="text-yellow-400">Creative Toolkit</span>
      </motion.h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10
                   place-items-center max-w-5xl mx-auto"
      >
        {toolCards}
      </div>
    </section>
  );
};

export default memo(DesigningTools);
