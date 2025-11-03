// DevelopmentProcess.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import {
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import Optix from "../../../assets/Optix Low Opacity Logo.svg";

// Single Process Card (animation same as MarketingImpact)
const ProcessCard = memo(({ icon, title, phase, points }) => {
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
        y: 40,
        scale: 0.95,
        transition: { type: "spring", stiffness: 80, damping: 12, mass: 0.7 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={controls}
      whileHover={{ scale: 1 }}
      className="relative flex flex-col items-center text-center p-8 bg-[#5d00c3] shadow-md rounded-xl transition-shadow duration-300 border-2 border-[#5d00c3]"
    >
      <div className="absolute top-4 right-4 text-[#5d00c3] bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
        {phase}
      </div>

      <div className="text-yellow-400 text-5xl mb-4">{icon}</div>

      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        {title}
      </h3>

      <ul className="text-gray-200 text-base md:text-lg text-left space-y-2 mt-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start space-x-2">
            <CheckCircle className="text-white w-5 h-5 mt-1" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
});

const DevelopmentProcess = () => {
  const phases = [
    {
      icon: <RiLightbulbFlashLine />,
      title: "Planning & Strategy",
      phase: "Phase 1",
      points: [
        "Define business goals & target users",
        "Outline features & project scope",
        "Create technical roadmap",
        "Finalize tools and frameworks",
      ],
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      phase: "Phase 2",
      points: [
        "Craft intuitive layouts & wireframes",
        "Design for all devices (responsive)",
        "Focus on usability & aesthetics",
        "Deliver interactive prototypes",
      ],
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      phase: "Phase 3",
      points: [
        "Develop responsive user interfaces",
        "Implement modern animations & logic",
        "Integrate APIs and CMS",
        "Ensure high performance & security",
      ],
    },
    {
      icon: <FaServer />,
      title: "Backend Integration",
      phase: "Phase 4",
      points: [
        "Develop secure backend architecture",
        "Set up databases & APIs",
        "Manage data flow efficiently",
        "Ensure scalability & reliability",
      ],
    },
    {
      icon: <FaRocket />,
      title: "Testing & Launch",
      phase: "Phase 5",
      points: [
        "Perform quality assurance & debugging",
        "Test performance across devices",
        "Launch with smooth deployment",
        "Monitor and optimize continuously",
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Maintenance & Growth",
      phase: "Phase 6",
      points: [
        "Monitor site performance & uptime",
        "Regular updates & feature upgrades",
        "Implement analytics & insights",
        "Support long-term scalability",
      ],
    },
  ];

  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-12 bg-white m-4 rounded-md shadow-lg new-font overflow-hidden"
      aria-labelledby="development-process-heading"
    >
      {/* Background logo */}
      <img
        src={Optix}
        alt="Optix background logo"
        className="absolute left-50 top-1/2 -translate-y-1/2 w-100 pointer-events-none select-none hidden md:block"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2
          id="development-process-heading"
          className="text-3xl md:text-5xl font-bold text-[#5d00c3] mb-12"
        >
          From <span className="text-yellow-400">Idea to Impact</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {phases.map((phase, idx) => (
            <ProcessCard
              key={idx}
              icon={phase.icon}
              title={phase.title}
              phase={phase.phase}
              points={phase.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(DevelopmentProcess);
