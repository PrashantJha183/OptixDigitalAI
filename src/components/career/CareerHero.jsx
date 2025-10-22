// CareerPage.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Lightbulb, Star, Calendar } from "lucide-react";

const Feature = memo(({ icon: Icon, title, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 12 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 100,
        transition: { duration: 0.3 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 150, damping: 10 },
      }}
      className="
        flex flex-row items-center gap-4 md:flex-col md:items-center md:text-center
        text-left
      "
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-[#5d00c3] flex-shrink-0">
        <Icon className="w-8 h-8" />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-100 text-base md:text-lg">{description}</p>
      </div>
    </motion.div>
  );
});

const CareerHero = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborative Team",
      description:
        "Work with a talented team where your ideas are valued and creativity thrives.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Projects",
      description:
        "Take part in cutting-edge projects that challenge and inspire you.",
    },
    {
      icon: Star,
      title: "Growth Opportunities",
      description:
        "Advance your career with continuous learning and professional growth.",
    },
    {
      icon: Calendar,
      title: "Flexible Work Environment",
      description:
        "Enjoy a work-life balance with flexible schedules and remote options.",
    },
  ];

  return (
    <main className="new-font bg-[#5d00c3] py-32 md:py-40 px-6 md:px-12 rounded-md shadow-lg m-4">
      {/* Hero section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Careers at OptixDigitalAI
        </h1>
        <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto">
          Join our innovative team and help shape the future of digital
          experiences. We value creativity, collaboration, and growth.
        </p>
      </div>

      {/* Features container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
        {features.map((feature, idx) => (
          <Feature
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </main>
  );
};

export default memo(CareerHero);
