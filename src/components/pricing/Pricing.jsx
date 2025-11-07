// ...rest of your imports
import React, { memo, useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaShopify,
  FaWordpress,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaExternalLinkAlt,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

// Single Pricing Card Component
const PricingCard = memo(({ icon, title, price, features, reason }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 30,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [inView, controls]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      className="relative flex flex-col items-start p-4 md:p-6 bg-white shadow-md rounded-xl border-2 border-[#5d00c3] transition-all duration-300"
    >
      {/* === Header box === */}
      <div className="w-full border border-[#5d00c3] rounded-lg p-4 mb-6 text-center text-white bg-[#5d00c3]">
        <div className="text-5xl mb-4 flex justify-center">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        {price && (
          <p className="text-lg font-semibold mb-2">
            Pricing: <span>{price}</span>
            <sup className="text-yellow-300 ml-1">*</sup>
          </p>
        )}
        <hr className="my-3 border-yellow-300/40" />
        {reason && (
          <p className="text-sm md:text-base italic font-medium mb-4 text-yellow-300">
            {reason}
          </p>
        )}

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-yellow-400 text-[#5d00c3] rounded-lg transition-colors duration-300 font-medium shadow-md"
        >
          <Phone size={18} /> Get Started
        </Link>
      </div>

      {/* === Features list === */}
      <ul className="text-gray-700 text-base md:text-lg space-y-3 w-full">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 leading-snug text-left">
            <div className="flex-shrink-0 pt-1">
              <CheckCircle className="text-[#5d00c3] w-5 h-5" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
});

// Main Pricing Section
const Pricing = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleEmailClick = () => {
    const email = "support@optixdigitalai.com";
    if (navigator.userAgent.includes("Mobi")) {
      window.location.href = `mailto:${email}`;
    } else {
      navigator.clipboard.writeText(email);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 5000);
    }
  };

  // === Development Services ===
  const developmentServices = [
    {
      icon: <FaShopify />,
      title: "Shopify Development",
      price: "₹20,000 (Basic Package)",
      reason: "Turn your idea into an online store that sells effortlessly!",
      features: [
        "Custom Shopify store setup",
        "Responsive, mobile-friendly, and SEO-optimized design",
        "Theme customization (colors, layouts, sections)",
        "Product and collection setup",
        "Payment gateway integration (Razorpay / PayPal / Stripe)",
        "Custom domain connection",
        "3-month technical support and maintenance",
      ],
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      price: "₹15,000 (Basic Package)",
      reason: "Launch a stunning, manageable site that drives engagement fast!",
      features: [
        "WordPress setup and configuration",
        "Custom responsive theme development",
        "Blog and landing page creation",
        "Basic website security configuration",
        "Speed optimization (caching & image compression)",
        "SEO optimization for better visibility",
        "1-month technical support and maintenance",
      ],
    },
    {
      icon: <FaCode />,
      title: "Website Development (Custom)",
      price: "₹15,000 (Basic Package)",
      reason: "Stand out with a fully custom-built website made just for you!",
      features: [
        "Fully customized website development",
        "Frontend built using React.js for modern UI & performance",
        "Backend infrastructure using Node.js, Express.js, and PHP",
        "Databases: MongoDB, MySQL, PostgreSQL for reliability and scalability",
        "Responsive design for all devices",
        "Contact and inquiry form integration",
        "SEO-friendly structure & clean code",
        "Domain & hosting setup assistance",
        "Deployment and performance optimization",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Application Development",
      price: "Custom Quotation",
      reason: "Build a high-performing mobile app that users love to use!",
      features: [
        "Frontend: React Native | Backend: Node.js (Express.js)",
        "Database: MySQL / PostgreSQL",
        "Hosting: AWS, Play Store, App Store",
        "User Authentication (Google, 2FA)",
        "Push Notifications & RESTful APIs",
        "Admin Dashboard & Secure Payment Integration",
        "JWT-based security and role-based access control",
      ],
    },
    {
      icon: <FaSearch />,
      title: "On-Page SEO",
      price: "₹10,000",
      reason: "Optimize your website pages to rank higher on search engines!",
      features: [
        "Keyword research & meta tag optimization",
        "Header tags, ALT tags & image optimization",
        "Internal linking strategy",
        "Content structure & readability improvements",
        "Page speed & mobile performance optimization",
      ],
    },
  ];

  // Center the On-Page SEO card
  // Inside Pricing component, replace developmentServicesGrid with:

  const developmentServicesGrid = [
    developmentServices[0],
    developmentServices[1],
    developmentServices[2],
    developmentServices[3],
    <div
      key="seo-card"
      className="col-span-1 md:col-span-2 flex justify-center"
    >
      <PricingCard {...developmentServices[4]} />
    </div>,
  ];

  const designServices = [
    // Original cards
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      price: "₹10,000 (Basic Package)",
      reason: "Design that’s not just beautiful — it converts!",
      features: [
        "Custom UI/UX design using Figma & Adobe XD",
        "User flow and wireframe creation",
        "Responsive layout design for all devices",
        "Brand-focused visual design",
        "Prototype testing & iteration",
        "Delivery of design assets and style guide",
      ],
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      price: "₹12,000 (Basic Package)",
      reason: "Grow your brand visibility with data-driven marketing!",
      features: [
        "Social media strategy and content design",
        "SEO optimization and keyword research",
        "Google Ads and Meta Ads setup",
        "Email marketing and automation",
        "Analytics tracking & monthly reports",
        "Content marketing & engagement strategies",
      ],
    },
    {
      icon: <FaExternalLinkAlt />,
      title: "Off-Page SEO",
      price: "₹10,000",
      reason:
        "Boost your website authority and traffic through external strategies!",
      features: [
        "Backlink building & guest posting",
        "Social bookmarking & forum engagement",
        "Local business listings & citations",
        "Influencer outreach and PR strategies",
        "Brand mentions & authority building",
      ],
    },

    // New separate cards
    {
      icon: <FaFacebook />,
      title: "Social Media Management",
      price: "₹10,000",
      reason: "Manage and grow your social presence professionally!",
      features: [
        "Content creation & scheduling for Facebook, Instagram, LinkedIn, X/Twitter",
        "Community engagement & follower growth",
        "Performance tracking & monthly reports",
        "Strategy optimization based on insights",
      ],
    },
    {
      icon: <FaGoogle />,
      title: "Google Ads Management",
      price: "₹10,000",
      reason: "Reach your audience with targeted Google ad campaigns!",
      features: [
        "Dedicated team support: Google Ads Executive, Graphic Designer, Copywriter, with WhatsApp collaboration",
        "Campaign setup & strategy: account setup/overhaul, keyword research, bidding strategy, audience targeting",
        "Ad creation & optimization: Search Ads, Performance Max, Display, Dynamic Search Ads, ad extensions, retargeting",
        "Performance tracking & analytics: Google Analytics integration, conversion tracking, CPC/CPA optimization, monthly ROAS reporting",
        "Ongoing support & consultation: budget management (up to ₹100,000), monthly performance reviews, phone/chat/email support",
      ],
    },
    {
      icon: <FaInstagram />,
      title: "Meta Ads Management",
      price: "₹10,000",
      reason: "Run effective Facebook & Instagram advertising campaigns!",
      features: [
        "Ad creation & targeting strategy",
        "Campaign management for Meta Ads",
        "Conversion tracking & performance reporting",
        "Optimizations to maximize ROI",
      ],
    },
  ];

  const services =
    activeTab === "development" ? developmentServicesGrid : designServices;

  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-12 bg-white m-4 rounded-md shadow-lg new-font overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab("development")}
            className={`px-6 py-2 font-semibold rounded-lg border-2 transition-all duration-300 ${
              activeTab === "development"
                ? "bg-[#5d00c3] text-white border-[#5d00c3]"
                : "text-[#5d00c3] border-[#5d00c3] hover:bg-[#5d00c3] hover:text-white"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-2 font-semibold rounded-lg border-2 transition-all duration-300 ${
              activeTab === "design"
                ? "bg-[#5d00c3] text-white border-[#5d00c3]"
                : "text-[#5d00c3] border-[#5d00c3] hover:bg-[#5d00c3] hover:text-white"
            }`}
          >
            Design & Marketing
          </button>
        </div>

        {/* Animated Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          >
            {services.map((service, idx) =>
              React.isValidElement(service) ? (
                service
              ) : (
                <PricingCard key={idx} {...service} />
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Note under section */}
        <p className="mt-10 text-gray-600 text-sm italic text-center">
          * Final pricing and delivery timelines may vary based on specific
          project requirements. Please refer to our{" "}
          <Link
            to="/terms-and-conditions"
            className="text-[#5d00c3] hover:underline"
          >
            Terms & Conditions
          </Link>{" "}
          for complete details.
        </p>

        {/* Additional Contact Statement */}
        <p
          onClick={handleEmailClick}
          className="mt-2 text-gray-600 text-sm italic text-center cursor-pointer hover:text-[#5d00c3] underline"
        >
          For more details, kindly contact us at support@optixdigitalai.com
        </p>

        {/* Popup message */}
        {showCopyMessage && (
          <div className="fixed top-5 right-5 bg-[#5d00c3] text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300">
            Email copied to clipboard!
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Pricing);
