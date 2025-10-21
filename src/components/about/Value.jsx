// CoreValues.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBalanceScale } from "react-icons/fa"; // Integrity
import { PiUsersThreeBold } from "react-icons/pi"; // Collaboration
import { RiStarSmileLine } from "react-icons/ri"; // Excellence

// Single Core Value Card with animation
const CoreValueCard = memo(({ icon, title, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

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
        transition: { type: "spring", stiffness: 80, damping: 12, mass: 0.7 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={controls}
      className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-[#5d00c3] text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 text-base md:text-lg">{description}</p>
    </motion.article>
  );
});

const Value = () => {
  const values = [
    {
      icon: <FaBalanceScale />,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our actions, building trust with clients and colleagues alike.",
    },
    {
      icon: <PiUsersThreeBold />,
      title: "Collaboration",
      description:
        "We believe in teamwork and collective intelligence, fostering a culture where every voice is valued and ideas thrive.",
    },
    {
      icon: <RiStarSmileLine />,
      title: "Excellence",
      description:
        "We strive for exceptional quality in our solutions, ensuring every project exceeds expectations and drives impact.",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 px-6 md:px-12 bg-[#5d00c3] m-4 rounded-md shadow-lg new-font"
      aria-labelledby="core-values-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="core-values-heading"
          className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <CoreValueCard
              key={idx}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Value);
