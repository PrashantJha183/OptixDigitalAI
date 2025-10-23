// About.jsx
import React, { useEffect, useState, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiBriefcase, FiClock } from "react-icons/fi";
import ErrorBoundary from "../base/ErrorBoundary";

// Animated Counter
const Counter = ({ target, duration = 1500, resetTrigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace("+", ""));
    const increment = end / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration, resetTrigger]);

  return (
    <span>
      {count}
      {target.includes("+") && "+"}
    </span>
  );
};

const AboutContent = () => {
  const [loaded, setLoaded] = useState(false);
  const [counterReset, setCounterReset] = useState(0);

  const heroControls = useAnimation();
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const achievementsControls = useAnimation();
  const { ref: achRef, inView: achInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Hero animation
  useEffect(() => {
    heroControls.start({
      opacity: heroInView ? 1 : 0,
      y: heroInView ? 0 : 60,
      transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.8 },
    });
  }, [heroInView, heroControls]);

  // Achievements animation
  useEffect(() => {
    achievementsControls.start({
      opacity: achInView ? 1 : 0,
      y: achInView ? 0 : 30,
      transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.8 },
    });
    if (achInView) setCounterReset((prev) => prev + 1);
  }, [achInView, achievementsControls]);

  const achievements = [
    {
      icon: <FiUsers className="w-8 h-8 text-yellow-400" />,
      title: "Happy Clients",
      count: "40+",
    },
    {
      icon: <FiBriefcase className="w-8 h-8 text-yellow-400" />,
      title: "Projects Completed",
      count: "100+",
    },
    {
      icon: <FiClock className="w-8 h-8 text-yellow-400" />,
      title: "Years of Experience",
      count: "3+",
    },
  ];

  return (
    <div className="min-h-[70vh] flex flex-col new-font">
      <section className="bg-[#5d00c3] text-white py-20 px-6 md:px-12 rounded-md shadow-md m-4 md:m-6 overflow-hidden">
        {/* Hero */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 70 }}
          animate={heroControls}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-6 md:pt-28">
            About <span className="text-yellow-400">OptixDigitalAI</span>
          </h1>
          <p className="text-lg text-white-custom max-w-3xl mx-auto leading-relaxed">
            We are a creative tech agency delivering innovation, performance,
            and growth. Our mission is to empower brands through digital
            transformation.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          ref={achRef}
          initial={{ opacity: 0, y: 40 }}
          animate={achievementsControls}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 w-full max-w-5xl mx-auto text-center"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ scale: [0.9, 1] }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                mass: 0.8,
              }}
              className="bg-white-custom backdrop-blur-md rounded-2xl-custom border-white-custom transition duration-300"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                <Counter target={item.count} resetTrigger={counterReset} />
              </h3>
              <p className="text-white-custom mt-1 text-lg">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

const AboutHero = () => (
  <ErrorBoundary>
    <AboutContent />
  </ErrorBoundary>
);

export default memo(AboutHero);
