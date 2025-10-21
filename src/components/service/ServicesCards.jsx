// ServicesCards.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PenTool,
  Image,
  Users,
  Monitor,
  Smartphone,
  Megaphone,
  RefreshCw,
  Smartphone as AppIcon,
  //   RefreshCw as RedesignIcon,
  Edit3,
} from "lucide-react";

// Single Service Card
const ServiceCard = memo(({ icon: Icon, title, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12, mass: 0.7 },
      });
    } else {
      controls.start({ opacity: 0, y: 40, scale: 0.95 });
    }
  }, [inView, controls]);

  return (
    <div className="mb-8 sm:mb-0">
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={controls}
        className="relative bg-white p-6 pt-16 rounded-xl shadow-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border-2 border-[#5d00c3]"
        aria-label={title}
      >
        {/* Icon overlapping top with purple stroke */}
        <div className="absolute -top-8 flex items-center justify-center w-20 h-20 rounded-full bg-[#ffff] border-2 border-[#5d00c3]">
          <Icon className="w-12 h-12 text-[#5d00c3]" strokeWidth={2} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-6">{title}</h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.article>
    </div>
  );
});

const ServicesCards = () => {
  const services = [
    {
      icon: PenTool,
      title: "Graphic Design",
      description:
        "Transforming ideas into visually stunning designs that communicate your brand’s message effectively.",
    },

    {
      icon: Image,
      title: "Logo Design",
      description:
        "Crafting unique and memorable logos that represent your brand identity and values.",
    },
    {
      icon: Users,
      title: "Consultation",
      description:
        "Providing expert guidance and strategic advice to help you make informed digital and design decisions.",
    },
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Building responsive, fast, and SEO-friendly websites tailored to your business goals.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Creating high-performance mobile applications for iOS and Android that enhance user engagement.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Boost your brand’s reach and engagement with data-driven marketing strategies and campaigns.",
    },
    {
      icon: RefreshCw,
      title: "Website Redesign & Revamp",
      description:
        "Revamping existing websites with modern designs, improved UX, and optimized performance to elevate your brand online.",
    },
    {
      icon: AppIcon,
      title: "App Redesign & Optimization",
      description:
        "Enhancing your mobile applications with intuitive interfaces, better performance, and updated features for maximum engagement.",
    },
    {
      icon: Edit3,
      title: "Graphic Redesign",
      description:
        "Refreshing and redesigning existing graphics to modernize your visual identity and maintain brand consistency.",
    },
  ];

  return (
    <section className="new-font m-4 rounded-md shadow-lg py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#5d00c3]">
          Our Services
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesCards);
