// ServiceContact.jsx
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import Optix from "../../assets/Optix Low Opacity Logo.svg";

// Motion-enabled Link
const MotionLink = motion(Link);

const ServiceContact = () => {
  const buttonControls = useAnimation();

  // Animate button on page load with smooth bouncy effect
  useEffect(() => {
    const sequence = async () => {
      await buttonControls.start({
        // rotate: [0, -10, 10, -6, 6, -3, 3, 0],
        // x: [0, -3, 3, -2, 2, -1, 1, 0],
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 12,
        },
      });
    };
    sequence();
  }, [buttonControls]);

  return (
    <section className="relative bg-yellow-400 py-20 px-6 md:px-12 rounded-md shadow-lg overflow-hidden m-4 new-font">
      {/* Optix logo behind text - left side */}
      <img
        src={Optix}
        alt="Optix Logo Background Left"
        className="absolute left-50 top-1/2 -translate-y-1/2 w-100 pointer-events-none select-none hidden md:block"
      />

      <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center justify-center space-y-6 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#5d00c3] leading-tight">
          Want to see our work in action?
        </h2>
        <p className="text-[#5d00c3]/90 text-base md:text-lg max-w-2xl">
          Request a demo today and discover how our services can transform your
          business digitally and creatively.
        </p>

        <MotionLink
          to="/contact"
          initial={{ rotate: 0, x: 0 }}
          animate={buttonControls}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 12 },
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-flex items-center bg-[#5d00c3] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#4a00a8] transition-colors duration-300"
        >
          <PhoneCall className="w-5 h-5 mr-2 animate-pulse" strokeWidth={2} />
          Request a Demo
        </MotionLink>
      </div>
    </section>
  );
};

export default memo(ServiceContact);
