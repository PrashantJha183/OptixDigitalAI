// TermsAndConditions.jsx
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
  CreditCard,
  Hammer,
  Info,
  CheckCircle,
} from "lucide-react";
import { FaPaintBrush } from "react-icons/fa"; // 🎨 Added for General Service Notes section

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
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f3e8ff] border-2 border-[#5d00c3] mr-4 flex-shrink-0">
            <Icon className="w-8 h-8 text-[#5d00c3]" />
          </div>
          <h3 className="text-xl md:text-3xl font-bold text-[#5d00c3]">
            {title}
          </h3>
        </div>

        <ul className="list-none space-y-3 text-gray-700 leading-relaxed text-base md:text-lg md:ml-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#5d00c3] mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Separator */}
      {!isLast && (
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#5d00c3]/30 to-transparent my-8 w-full max-w-5xl mx-auto" />
      )}
    </>
  );
});

const TermsAndConditions = () => {
  const sections = [
    {
      icon: FileText,
      title: "Introduction",
      points: [
        "Welcome to OptixDigitalAI, a creative digital agency specializing in web development, mobile app creation, digital marketing, and brand design.",
        "By accessing or using our services, you agree to these Terms & Conditions. Please read them carefully before engaging with our services.",
        "These terms apply to all visitors, clients, and users of OptixDigitalAI.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Service Usage & Obligations",
      points: [
        "All services provided by OptixDigitalAI are intended for lawful business use only.",
        "You agree to provide accurate project requirements, materials, and feedback in a timely manner.",
        "Any delay in client response may extend project timelines accordingly.",
        "You must not use our services to violate laws, infringe intellectual property, or engage in fraudulent activities.",
      ],
    },
    {
      icon: Lock,
      title: "Intellectual Property Rights",
      points: [
        "All designs, code, and creative work remain the property of OptixDigitalAI until full payment is received.",
        "Upon completion and payment, ownership of final deliverables is transferred to the client, excluding underlying frameworks or reusable components.",
        "Clients must not resell, redistribute, or claim ownership of unfinished drafts or concepts.",
      ],
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      points: [
        "All invoices must be paid according to the payment terms mentioned in the agreement or proposal.",
        "OptixDigitalAI reserves the right to pause or terminate ongoing work in case of delayed payments.",
        "Refunds are not applicable for partially completed work, once the design or development process has commenced.",
        "Clients are responsible for all bank charges or transaction fees associated with payments.",
      ],
    },
    {
      icon: UserCheck,
      title: "Client Responsibilities",
      points: [
        "Clients must provide all necessary materials, credentials, and content required for project execution.",
        "Clients are responsible for reviewing deliverables and providing feedback within the agreed timeframe.",
        "Any unauthorized access, misuse, or violation of platform policies may lead to termination of services.",
        "Clients must ensure content provided does not violate laws, infringe copyrights, or contain harmful material.",
      ],
    },
    {
      icon: Globe,
      title: "Digital Marketing & Data Usage",
      points: [
        "OptixDigitalAI may collect limited analytics data to optimize website and campaign performance.",
        "No personal data is shared with third parties without explicit client consent.",
        "We follow ethical marketing and SEO practices in compliance with digital advertising regulations.",
        "Clients consent to usage of their data for service delivery and optimization purposes.",
        "Marketing performance is influenced by various external factors such as algorithms, audience behavior, and competition; hence, specific outcomes cannot be guaranteed.",
      ],
    },
    {
      icon: Mail,
      title: "Communication Policy",
      points: [
        "All official communications will be conducted via registered email or verified communication channels.",
        "OptixDigitalAI is not liable for delays caused by miscommunication or client-side unresponsiveness.",
        "Clients must ensure that contact information provided is accurate and up to date.",
      ],
    },
    {
      icon: Hammer,
      title: "Limitation of Liability",
      points: [
        "OptixDigitalAI will not be held liable for indirect, incidental, or consequential damages arising from project outcomes.",
        "We ensure quality and reliability but cannot guarantee third-party software, platforms, or hosting services.",
        "Clients are responsible for backup of their own content and data.",
      ],
    },
    {
      icon: FaPaintBrush,
      title: "General Service Notes",
      points: [
        "All services include responsive design and cross-platform compatibility to ensure seamless user experiences across all devices.",
        "Custom features and premium design options are available upon request to enhance project functionality and aesthetics.",
        "Each project includes documentation, testing, and deployment support to ensure long-term performance and maintainability.",
        "Timelines and final quotations may vary based on client requirements, scope adjustments, and feedback response time.",
        "Design and marketing services include brand strategy consultations, visual consistency audits, and post-launch support to maximize impact.",
        "OptixDigitalAI follows modern design standards, accessibility guidelines, and ethical marketing practices across all creative and promotional deliverables.",
      ],
    },
    {
      icon: Info,
      title: "Policy Updates & Contact",
      points: [
        "These Terms & Conditions may be updated periodically to reflect changes in our business or regulations.",
        "Any updates will be communicated through our website or official channels.",
        "For any questions, please contact us at support@optixdigitalai.com.",
        "By continuing to use our services after updates, you agree to the revised terms.",
      ],
    },
    {
      icon: Lock,
      title: "Governing Law & Dispute Resolution",
      points: [
        "These terms shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising from these Terms & Conditions or services shall be resolved through mutual discussion or, if necessary, in the competent courts of India.",
      ],
    },
  ];

  return (
    <main className="new-font bg-yellow-50 py-32 md:py-40 px-6 md:px-12 m-4 rounded-md shadow-lg">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5d00c3] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Please review our terms carefully before using any services offered by
          OptixDigitalAI. Your use of our services indicates agreement to these
          conditions.
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

export default memo(TermsAndConditions);
