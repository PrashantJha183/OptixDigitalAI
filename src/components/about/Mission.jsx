// MissionContent.jsx
import React, { useEffect, useState, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiBookOpen } from "react-icons/fi";

// Mission card component
const MissionCard = ({
  icon,
  iconColor = "text-yellow-400",
  iconSize = "text-5xl",
  title,
  description,
  animationControls,
  bgColor,
  textColor = "text-gray-700",
  descriptionClass = "text-base md:text-lg",
  titleColor = "text-[#5d00c3]",
  titleClass = "text-2xl md:text-4xl",
  removeShadow = false,
  hideIcon = false,
  centerIconTitle = false,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.8 },
      });
    } else {
      animationControls.start({
        opacity: 0,
        y: 100,
        transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.8 },
      });
    }
  }, [inView, animationControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={animationControls}
      className={`${bgColor} flex flex-col items-center md:items-start text-center md:text-left p-6 ${
        removeShadow ? "" : "shadow-md rounded-2xl"
      }`}
    >
      {/* Icon */}
      {!hideIcon && icon && (
        <div
          className={`${iconColor} ${iconSize} mb-4 ${
            centerIconTitle ? "md:flex md:justify-center md:w-full" : ""
          }`}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      <h3
        className={`font-bold mb-3 ${titleColor} ${titleClass} ${
          centerIconTitle ? "md:text-center md:w-full" : ""
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className={`${textColor} ${descriptionClass}`}>{description}</p>
    </motion.div>
  );
};

const Mission = () => {
  const [loaded, setLoaded] = useState(false);

  const animationControlsMission = useAnimation();
  const animationControlsWho = useAnimation();
  const animationControlsStory = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Mission card
  const missionCard = {
    title: "OptixDigitalAI's Mission",
    description:
      "OptixDigitalAI is a creative tech agency delivering innovative solutions that empower brands and drive digital growth. We specialize in building transformative digital experiences that elevate brand presence, optimize performance, and foster sustainable success in a rapidly evolving digital landscape.",
    controls: animationControlsMission,
    titleClass: "text-3xl md:text-5xl mb-4",
    descriptionClass:
      "text-base md:text-lg font-semibold text-center md:text-justify",
  };

  // Sub cards
  const subCards = [
    {
      icon: <FiUsers />,
      iconColor: "text-[#5d00c3]",
      iconSize: "text-5xl",
      title: "Who We Are",
      description:
        "We are a team of passionate professionals focused on delivering cutting-edge technology and creative digital solutions. Our expertise spans software development, digital marketing, UI/UX design, and strategic consulting, enabling brands to thrive in the competitive digital world.",
      controls: animationControlsWho,
      bgColor: "bg-yellow-400",
      textColor: "text-[#5d00c3]",
      descriptionClass: "text-base md:text-lg text-center",
      titleColor: "text-[#5d00c3]",
      titleClass: "text-2xl md:text-4xl",
      centerIconTitle: true,
    },
    {
      icon: <FiBookOpen />,
      iconColor: "text-white",
      iconSize: "text-5xl",
      title: "Our Story",
      description:
        "Founded with a vision to combine creativity and technology, we help brands transform and thrive in the digital world. Over the years, our dedication to innovation and client success has allowed us to build a portfolio of impactful projects and long-lasting relationships.",
      controls: animationControlsStory,
      bgColor: "bg-[#5d00c3]",
      textColor: "text-white",
      descriptionClass: "text-base md:text-lg text-center",
      titleColor: "text-white",
      titleClass: "text-2xl md:text-4xl",
      centerIconTitle: true,
    },
  ];

  return (
    <div className="new-font min-h-[70vh] py-12 md:py-0 px-6 md:px-12 bg-white shadow-lg rounded-md m-4 ">
      <section className="max-w-6xl mx-auto flex flex-col items-start space-y-12 md:pb-12">
        {loaded && (
          <>
            {/* Mission Card WITHOUT icon, always left-aligned on desktop */}
            <MissionCard
              hideIcon={true}
              title={missionCard.title}
              description={missionCard.description}
              animationControls={missionCard.controls}
              bgColor="bg-white"
              titleColor="text-[#5d00c3] uppercase"
              titleClass={missionCard.titleClass}
              descriptionClass={missionCard.descriptionClass}
              removeShadow={true}
            />

            {/* Thin line */}
            <span className="w-full border-b border-gray-600 mt-0"></span>

            {/* Sub Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {subCards.map((card, idx) => (
                <MissionCard
                  key={idx}
                  icon={card.icon}
                  iconColor={card.iconColor}
                  iconSize={card.iconSize}
                  title={card.title}
                  description={card.description}
                  animationControls={card.controls}
                  bgColor={card.bgColor}
                  textColor={card.textColor}
                  descriptionClass={card.descriptionClass}
                  titleColor={card.titleColor}
                  titleClass={card.titleClass}
                  centerIconTitle={card.centerIconTitle}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default memo(Mission);
