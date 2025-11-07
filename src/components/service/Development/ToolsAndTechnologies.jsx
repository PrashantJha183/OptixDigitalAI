// ToolsAndTechnologies.jsx
"use client";

import React, { memo, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaAndroid,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaCode,
  FaGithub,
  FaShopify,
  FaGoogle,
  FaSearch,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
  SiKubernetes,
  // SiSemrush,
  SiGoogleanalytics,
} from "react-icons/si";

/* ===========================
   Loader (Placeholder)
=========================== */
const SkeletonLoader = () => (
  <div className="flex flex-wrap justify-center gap-4 animate-pulse">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="w-64 h-40 bg-gray-200 rounded-xl shadow-md"></div>
    ))}
  </div>
);

/* ===========================
   Animated Tech Card
=========================== */
const TechCard = memo(({ category, items, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.3 });

  const descriptions = {
    Frontend:
      "We craft visually engaging, responsive, and high-performance user interfaces using modern frontend technologies that ensure seamless experiences across all devices.",
    Backend:
      "Our backend development focuses on robust architecture, scalability, and security — delivering efficient server-side solutions that power seamless business operations.",
    Database:
      "We design optimized, secure, and reliable data structures to manage information efficiently, ensuring performance and scalability for every project.",
    Cloud:
      "We leverage leading cloud platforms to enhance reliability, scalability, and global reach while ensuring cost-efficient and secure deployment environments.",
    DevOps:
      "Our DevOps practices streamline development, deployment, and monitoring ensuring faster delivery, automation, and continuous improvement of digital solutions.",
    "Mobile Apps":
      "We develop intuitive, fast, and feature-rich mobile applications that deliver consistent performance and engaging user experiences across platforms.",
    CMS: "We create flexible, easy-to-manage, and scalable CMS solutions, enabling effortless content management with powerful customization and automation capabilities.",
    "SEO Optimization":
      "We boost online visibility and drive organic traffic through advanced SEO strategies, including keyword optimization, analytics tracking, and technical audits for lasting growth.",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: index * 0.1,
      }}
      className="bg-white border-2 border-[#5d00c3] shadow-xl rounded-2xl p-8 w-full max-w-sm text-center select-none relative"
    >
      <h3 className="text-2xl font-bold text-[#5d00c3] mb-4">{category}</h3>
      <div className="flex flex-wrap justify-center gap-4 text-4xl text-[#5d00c3] mb-4">
        {items.map((tech, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-200"
          >
            {tech.icon}
            <span className="text-sm mt-1 text-gray-700">{tech.name}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-gray-600">{descriptions[category]}</p>
    </motion.div>
  );
});

/* ===========================
   Main Section
=========================== */
const ToolsAndTechnologies = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const techData = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
    {
      category: "Mobile Apps",
      items: [
        { name: "React Native", icon: <FaReact /> },
        { name: "Android", icon: <FaAndroid /> },
      ],
    },
    {
      category: "CMS",
      items: [
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Shopify", icon: <FaShopify /> },
        { name: "Custom CMS", icon: <FaCode /> },
      ],
    },
    {
      category: "SEO Optimization",
      items: [
        { name: "Google Search Console", icon: <FaGoogle /> },
        { name: "Google Analytics", icon: <SiGoogleanalytics /> },
        // { name: "SEMRush", icon: <SiSemrush /> },
        { name: "Keyword Research", icon: <FaSearch /> },
      ],
    },
  ];

  return (
    <section
      className="relative bg-yellow-400 text-center py-20 rounded-md shadow-lg overflow-hidden new-font m-4 p-10"
      aria-labelledby="tools-tech-heading"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          id="tools-tech-heading"
          className="text-3xl md:text-5xl font-bold text-[#5d00c3] mb-12"
        >
          The Perfect Tech Stack
        </h2>

        {/* Loader */}
        {loading ? (
          <SkeletonLoader />
        ) : isMobile ? (
          // --- Vertical Scroll (Mobile)
          <div className="flex flex-col items-center space-y-12 scrollbar-hide">
            {techData.map((data, idx) => (
              <TechCard
                key={idx}
                category={data.category}
                items={data.items}
                index={idx}
              />
            ))}
          </div>
        ) : (
          // --- Grid Layout (Desktop)
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 justify-items-center scrollbar-hide">
            {techData.slice(0, techData.length - 2).map((data, idx) => (
              <div key={idx} className="w-full flex justify-center">
                <TechCard
                  category={data.category}
                  items={data.items}
                  index={idx}
                />
              </div>
            ))}

            {/* Last two cards centered */}
            <div className="md:col-span-3 flex justify-center gap-10 flex-wrap">
              {techData.slice(-2).map((data, idx) => (
                <TechCard
                  key={idx + techData.length - 2}
                  category={data.category}
                  items={data.items}
                  index={idx + techData.length - 2}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Smooth scroll + hide scrollbar */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default memo(ToolsAndTechnologies);
