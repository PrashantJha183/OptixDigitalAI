// Pricing.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaShopify, FaWordpress, FaCode, FaMobileAlt } from "react-icons/fa";

// Single Pricing Card Component
const PricingCard = memo(({ icon, title, price, features, reason }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 30,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
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
      {/* === Wrapped logo, title, price, and button inside bordered box === */}
      <div className="w-full border border-[#5d00c3] rounded-lg p-4 mb-6 text-center text-white bg-[#5d00c3]">
        <div className="text-[white] text-5xl mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[white]">
          {title}
        </h3>
        <p className="text-lg font-semibold text-[white] mb-4">
          Pricing: <span className="text-[white]">{price}</span>
          <hr className="mt-4" />
        </p>

        <p className="text-sm md:text-base italic font-medium mb-4 text-yellow-300">
          {reason}
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-yellow-400 text-[#5d00c3] rounded-lg transition-colors duration-300 font-medium shadow-md"
        >
          <Phone size={18} /> Get Started
        </Link>
      </div>

      {/* === Properly aligned features === */}
      <ul className="text-gray-700 text-base md:text-lg space-y-3 w-full">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 leading-snug text-left">
            <div className="flex-shrink-0 pt-1">
              <CheckCircle className="text-[#5d00c3] w-5 h-5" />
            </div>
            <span className="flex-1">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
});

// Main Pricing Section
const Pricing = () => {
  const services = [
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
        "Frontend built using Monstag for modern UI & performance",
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
  ];

  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-12 bg-white m-4 rounded-md shadow-lg new-font overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, idx) => (
            <PricingCard
              key={idx}
              icon={service.icon}
              title={service.title}
              price={service.price}
              features={service.features}
              reason={service.reason}
            />
          ))}
        </div>

        {/* Additional Notes Section */}
        <div className="mt-12 text-gray-800 text-lg leading-relaxed bg-white bg-opacity-90 rounded-lg p-6 shadow-sm">
          <h3 className="text-[#5d00c3] font-bold text-2xl mb-4">
            Additional Notes
          </h3>
          <ul className="space-y-2 text-left">
            <li>
              • All services include responsive design & cross-platform
              compatibility.
            </li>
            <li>
              • Custom features and premium design options available on request.
            </li>
            <li>
              • Each project includes documentation, testing, and deployment
              support.
            </li>
            <li>
              • Timelines and final quotes may vary based on client
              requirements.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(Pricing);
