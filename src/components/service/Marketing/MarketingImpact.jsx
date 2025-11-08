// MarketingImpact.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import { FaLightbulb } from "react-icons/fa";
import { RiMegaphoneLine, RiBarChart2Fill } from "react-icons/ri";
import { MdTrendingUp } from "react-icons/md";
import Optix from "../../../assets/Optix Low Opacity Logo.svg"; // rename file (no spaces)

// Single Impact Card
const ImpactCard = memo(({ icon, title, stage, features }) => {
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
      className="relative flex flex-col items-center text-center p-8 bg-white shadow-md rounded-xl transition-shadow duration-300 border-2 border-[#5d00c3]"
    >
      <div className="absolute top-4 right-4 border border-[#5d00c3] text-white bg-[#5d00c3] text-xs font-semibold px-3 py-1 rounded-full">
        {stage}
      </div>

      <div className="text-[#5d00c3] text-5xl mb-4">{icon}</div>

      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#5d00c3]">
        {title}
      </h3>

      <ul className="text-gray-700 text-base md:text-lg text-left space-y-2 mt-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2">
            <CheckCircle className="text-[#5d00c3] w-5 h-5 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
});

const MarketingImpact = () => {
  const impacts = [
    {
      icon: <FaLightbulb />,
      title: "Brand Building & Identity",
      stage: "Stage 1",
      features: [
        "Develop unique visual identity",
        "Craft a strong brand voice",
        "Create emotional brand connection",
        "Establish credibility & consistency",
      ],
    },
    {
      icon: <RiMegaphoneLine />,
      title: "Brand Awareness",
      stage: "Stage 2",
      features: [
        "Increase digital visibility",
        "Expand social media reach",
        "Build audience trust",
        "Drive engagement & recognition",
      ],
    },
    {
      icon: <MdTrendingUp />,
      title: "Cultivating Leads & Sales",
      stage: "Stage 3",
      features: [
        "Targeted lead generation",
        "Effective conversion strategies",
        "Nurture loyal customers",
        "Boost ROI through analytics",
      ],
    },

    {
      icon: <RiBarChart2Fill />,
      title: "Insight & Growth",
      stage: "Stage 4",
      features: [
        "Leverage data-driven insights",
        "Analyze performance trends",
        "Optimize campaigns for scalability",
        "Achieve measurable business growth",
      ],
    },
  ];

  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-12 bg-yellow-400 m-4 rounded-md shadow-lg new-font overflow-hidden"
      aria-labelledby="marketing-impact-heading"
    >
      {/* Visible background logos only on laptops & larger */}
      <img
        src={Optix}
        alt="Optix background left"
        className="absolute left-50 top-1/2 -translate-y-1/2 w-100 pointer-events-none select-none hidden md:block"
      />

      <div className="max-w-full mx-auto text-center relative z-10 ">
        <h2
          id="marketing-impact-heading"
          className="text-3xl md:text-5xl font-bold text-[#5d00c3] mb-12"
        >
          What Impact We Create?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 md:m-5">
          {impacts.map((impact, idx) => (
            <ImpactCard
              key={idx}
              icon={impact.icon}
              title={impact.title}
              stage={impact.stage}
              features={impact.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(MarketingImpact);
