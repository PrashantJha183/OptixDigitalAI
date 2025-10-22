// PrivacyPolicy.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  FileText,
  Lock,
  Globe,
  UserCheck,
  Mail,
  Info,
  CheckCircle,
  Hammer,
} from "lucide-react";

const Section = memo(({ icon: Icon, title, points, isLast }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
          mass: 0.8,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        scale: 0.95,
        transition: { duration: 0.3 },
      });
    }
  }, [inView, controls]);

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={controls}
        whileHover={{
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 14,
          },
        }}
        className="bg-transparent p-6 md:p-10 rounded-xl transition-transform duration-300 w-full max-w-5xl mx-auto text-left"
      >
        <div className="flex items-center mb-6 md:ml-2">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#fff5e1] border-2 border-[#0d9488] mr-4 flex-shrink-0">
            <Icon className="w-8 h-8 text-[#0d9488]" />
          </div>
          <h3 className="text-xl md:text-3xl font-bold text-[#0d9488]">
            {title}
          </h3>
        </div>

        <ul className="list-none space-y-3 text-gray-700 leading-relaxed text-base md:text-lg md:ml-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#0d9488] mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* horizontal separator line, skip if last section */}
      {!isLast && (
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0d9488]/20 to-transparent my-8 w-full max-w-5xl mx-auto" />
      )}
    </>
  );
});

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Introduction",
      points: [
        "OptixDigitalAI is committed to protecting your privacy and providing a safe user experience.",
        "By using our services, you consent to this Privacy Policy and agree to its terms.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Information Collection",
      points: [
        "We collect only necessary information including name, email, and project-related details.",
        "Analytics data may be collected to improve website and campaign performance.",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      points: [
        "We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.",
        "Despite best efforts, no method of transmission over the internet is 100% secure; absolute security cannot be guaranteed.",
      ],
    },
    {
      icon: UserCheck,
      title: "User Rights",
      points: [
        "You have the right to access, modify, or request deletion of your personal data.",
        "Requests can be submitted via our official contact channels.",
      ],
    },
    {
      icon: Globe,
      title: "Cookies & Tracking",
      points: [
        "We use cookies to improve user experience, analyze traffic, and personalize content.",
        "No personal data is sold or shared with third parties without consent.",
      ],
    },
    {
      icon: Mail,
      title: "Communication Policy",
      points: [
        "Official communications will be conducted through verified email or contact methods.",
        "We are not responsible for delays caused by incorrect or unresponsive contact information.",
      ],
    },
    {
      icon: Info,
      title: "Policy Updates",
      points: [
        "Privacy Policy may be updated periodically to comply with legal requirements or improve practices.",
        "Changes will be communicated via our website.",
      ],
    },
    {
      icon: Hammer,
      title: "Third-Party Services",
      points: [
        "Some services may integrate third-party tools for analytics, marketing, or project delivery.",
        "Third-party privacy policies may apply separately, and we encourage users to review them.",
      ],
    },
    {
      icon: Lock,
      title: "Contact Us",
      points: [
        "For questions about privacy or personal data, contact us at support@optixdigitalai.com.",
      ],
    },
  ];

  return (
    <main className="new-font bg-yellow-50 py-32 md:py-40 px-6 md:px-12 m-4 rounded-md shadow-lg">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0d9488] mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Your privacy is important to us. Please read our Privacy Policy
          carefully to understand how we handle and protect your information.
        </p>
      </div>

      <div className="flex flex-col items-center w-full">
        {sections.map((section, idx) => (
          <Section
            key={idx}
            icon={section.icon}
            title={section.title}
            points={section.points}
            isLast={idx === sections.length - 1}
          />
        ))}
      </div>
    </main>
  );
};

export default memo(PrivacyPolicy);
