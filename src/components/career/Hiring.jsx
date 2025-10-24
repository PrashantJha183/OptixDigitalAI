// Hiring.jsx
import React, { memo, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail } from "lucide-react";

const Hiring = () => {
  // Controls for the header and contact section
  const headerControls = useAnimation();
  const contactControls = useAnimation();

  // Intersection observers
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Toast state
  const [showToast, setShowToast] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const email = "support@optixdigitalai.com";

  // Detect mobile for responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate header when it comes into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 12 },
      });
    } else {
      headerControls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.3 },
      });
    }
  }, [headerInView, headerControls]);

  // Animate contact section when it comes into view
  useEffect(() => {
    if (contactInView) {
      contactControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 12 },
      });
    } else {
      contactControls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.3 },
      });
    }
  }, [contactInView, contactControls]);

  // Email click handler
  const handleEmailClick = (e) => {
    if (!isMobile) {
      navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      e.preventDefault(); // prevent mailto on desktop
    }
    // on mobile, default mailto will open
  };

  return (
    <main className="bg-white min-h-[50vh] new-font py-20 px-6 md:px-12 m-4 rounded-md shadow-lg relative">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-6 right-6 bg-white text-[#5d00c3] px-4 py-2 rounded shadow-lg z-50"
        >
          Email copied to clipboard!
        </motion.div>
      )}

      {/* SEO-friendly header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={headerControls}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={headerControls}
          className="text-4xl md:text-5xl font-bold text-[#5d00c3] mb-4"
        >
          We're Hiring!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={headerControls}
          className="text-[#5d00c3] text-lg md:text-xl"
        >
          Currently, we do not have any open positions. If you are interested in
          joining our team, feel free to contact us and we will notify you about
          any future openings.
        </motion.p>
      </motion.header>

      {/* Contact section with spring bouncy animation */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={contactControls}
        whileHover={{
          transition: { type: "spring", stiffness: 150, damping: 10 },
        }}
        className="max-w-xl mx-auto p-6 md:p-12 flex items-center gap-4 md:gap-6 cursor-pointer"
        onClick={handleEmailClick}
      >
        <Mail className="w-8 h-8 text-gray-900 flex-shrink-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={contactControls}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
        >
          <p className="text-gray-900 text-base md:text-lg">
            Contact us at:{" "}
            <a
              href={`mailto:${email}`}
              className="underline font-medium hover:text-gray-800"
            >
              {email}
            </a>
          </p>
          <p className="text-gray-900 text-sm md:text-base mt-2">
            We will notify you about any available openings.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default memo(Hiring);
