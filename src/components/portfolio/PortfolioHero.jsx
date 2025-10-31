// ServiceHero.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Lucide-react icons (lightweight, SVG-based)
import {
  Brain,
  Zap,
  ShieldCheck,
  Users,
  LineChart,
  Sparkles,
} from "lucide-react";

// Individual Feature Item with animated entry and bounce
const FeatureItem = memo(({ icon: Icon, title, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false, // replay animation on re-entry
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 10,
          mass: 0.6,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.3 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      className="flex items-start space-x-4 p-2 group"
    >
      {/* Icon Section with bounce hover */}
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 8,
          transition: { type: "spring", stiffness: 300, damping: 12 },
        }}
        whileTap={{ scale: 0.9 }}
        className="flex-shrink-0 bg-white p-3 rounded-full backdrop-blur-sm shadow-md group-hover:shadow-lg transition-shadow duration-300"
      >
        <Icon className="text-[#5d00c3] w-6 h-6" strokeWidth={2} />
      </motion.div>

      {/* Text Section */}
      <motion.div
        whileHover={{
          x: 4,
          transition: { type: "spring", stiffness: 200, damping: 14 },
        }}
      >
        <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
          {title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
});

const PortfolioHero = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Innovation",
      description:
        "Harnessing cutting-edge AI and automation to create smart, scalable digital solutions.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "We collaborate closely with you, understanding your vision and turning ideas into impactful products.",
    },
    {
      icon: LineChart,
      title: "Data-Backed Strategy",
      description:
        "Our solutions are guided by insights, analytics, and measurable results that fuel growth.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Trust",
      description:
        "Transparent processes, consistent delivery, and long-term relationships built on integrity.",
    },
    {
      icon: Zap,
      title: "Speed & Performance",
      description:
        "We deliver optimized, high-performing digital platforms without compromising quality.",
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description:
        "From UI/UX to content, we blend creativity and technology for memorable brand experiences.",
    },
  ];

  // Title animation controller
  const titleControls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (titleInView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          bounce: 0.5,
          mass: 0.7,
        },
      });
    } else {
      titleControls.start({ opacity: 0, y: 60, scale: 0.95 });
    }
  }, [titleInView, titleControls]);

  return (
    <section
      className="bg-[#5d00c3] py-32 md:py-40 px-6 md:px-12 text-white new-font overflow-hidden m-4 rounded-md shadow-lg"
      aria-labelledby="service-hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section with bounce animation */}
        <motion.div
          ref={titleRef}
          animate={titleControls}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          className="text-center mb-16"
        >
          <motion.h2
            id="service-hero-heading"
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Why{" "}
            <motion.span
              className="text-yellow-400 inline-block"
              animate={{
                scale: [1, 1.12, 1],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              OptixDigitalAI
            </motion.span>{" "}
            is the Right Choice
          </motion.h2>

          <motion.p
            className="text-white/80 max-w-3xl mx-auto text-base md:text-lg"
            animate={{
              opacity: [0.8, 1, 0.8],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
          >
            We empower brands with transformative technology and creative
            strategy delivering innovation that drives measurable success in
            every digital experience.
          </motion.p>
        </motion.div>

        {/* Features Grid with staggered entry */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((feature, idx) => (
            <FeatureItem
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(PortfolioHero);
