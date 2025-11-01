// MarketingHero.jsx
import React, { memo, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

const MotionLink = motion(Link);

// Unified typing hook to keep both texts in sync
const useSynchronizedTyping = (words1, words2) => {
  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const w1 = words1[index];
    const w2 = words2[index];
    const maxLen = Math.max(w1.length, w2.length);
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = 1000; // pause when both fully typed

    const handleTyping = () => {
      setDisplay1((prev) =>
        isDeleting
          ? w1.substring(0, prev.length - 1)
          : w1.substring(0, prev.length + 1)
      );
      setDisplay2((prev) =>
        isDeleting
          ? w2.substring(0, prev.length - 1)
          : w2.substring(0, prev.length + 1)
      );

      // Both finished typing
      if (!isDeleting && display1 === w1 && display2 === w2) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }

      // Both finished deleting
      else if (isDeleting && display1 === "" && display2 === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words1.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [display1, display2, isDeleting, index]);

  return { display1, display2 };
};

const MarketingHero = () => {
  const { display1, display2 } = useSynchronizedTyping(
    ["Sell", "Connect", "Engage"],
    ["Letters", "Words", "Stories"]
  );

  const titleControls = useAnimation();
  const buttonControls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!titleInView) return;
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
    buttonControls.start({
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    });
  }, [titleInView, titleControls, buttonControls]);

  return (
    <section
      className="bg-[#5d00c3] py-32 md:py-48 px-6 md:px-12 text-white new-font overflow-hidden m-4 rounded-md shadow-lg"
      aria-labelledby="marketing-hero-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          animate={titleControls}
          initial={{ opacity: 0, y: 60 }}
          className="mb-10"
        >
          <motion.h2
            id="marketing-hero-heading"
            className="text-2xl md:text-5xl font-bold mb-2 md:mb-6 leading-tight"
          >
            that{" "}
            <motion.span
              className="inline-block text-yellow-400 font-bold"
              animate={{ scale: [1, 1.1, 1], y: [0, -4, 0] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {display1}
              <span className="border-r-2 border-yellow-400 ml-1 animate-pulse"></span>
            </motion.span>
            <br />
            Transforming{" "}
            <motion.span
              className="inline-block text-yellow-400 font-bold ml-2 mt-2  md:mt-6"
              animate={{ scale: [1, 1.1, 1], y: [0, -4, 0] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {display2}
              <span className="border-r-2 border-yellow-400 ml-1 animate-pulse"></span>
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Button Section */}
        <motion.div
          animate={{ scale: [0.8, 1.05, 1], opacity: [0, 1] }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={buttonControls}
            className="inline-flex items-center"
          >
            <MotionLink
              to="/contact"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 12 },
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center bg-[#facc15] text-[#5d00c3] font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
            >
              <motion.span
                animate={{ color: ["#ffffff", " #5d00c3", "#ffffff"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <PhoneCall className="w-5 h-5 mr-3" strokeWidth={2} />
              </motion.span>
              Let's Connect
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(MarketingHero);
