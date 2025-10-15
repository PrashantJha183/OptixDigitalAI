// Header.jsx
import React, { useState, useEffect, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import ErrorBoundary from "../base/ErrorBoundary";
// import SkeletonLoader from "../base/SkeletonLoader";
import logoSrc from "../../assets/logo.svg";
import lowQualityLogo from "../../assets/logo.svg";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Case Study", path: "/case-study" },
];

const LogoSkeleton = () => (
  <div className="w-28 md:w-40 h-10 bg-gray-300 rounded animate-pulse" />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Preload logo
  useEffect(() => {
    const img = new Image();
    img.src = logoSrc;
    img.onload = () => setLogoLoaded(true);
  }, []);

  return (
    <ErrorBoundary>
      <header className="fixed top-0 left-0 right-0 z-50 m-6 md:mt-8 new-font">
        {/* Header Container */}
        <div className="max-w-5xl mx-auto flex items-center justify-between md:justify-center px-6 py-4 md:py-0 bg-white border border-white rounded-t-md md:rounded-md shadow-md">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0 mr-auto md:mr-0">
              {logoLoaded ? (
                <img
                  src={logoSrc}
                  alt="OptixDigitalAI Logo"
                  className="w-28 h-auto md:w-40 md:h-24 object-contain transition-all duration-300"
                />
              ) : (
                <div className="relative w-28 md:w-40 h-10">
                  {/* Low-quality blurred image placeholder */}
                  <img
                    src={lowQualityLogo}
                    alt="Placeholder Logo"
                    className="w-full h-full object-contain filter blur-sm"
                  />
                  <LogoSkeleton />
                </div>
              )}
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "text-[#5d00c3] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Request a Call Button */}
          <div className="hidden md:flex ml-auto">
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition inline-flex items-center space-x-2">
              <FiPhone className="w-5 h-5" />
              <span>Request a Call</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative ml-auto">
            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="relative w-10 h-10 flex flex-col justify-center items-center"
            >
              <span
                className={`block absolute h-0.5 w-8 bg-black rounded transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 top-1/2"
                    : "top-[35%] left-[2px] translate-x-1"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-8 bg-black rounded transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 top-1/2"
                    : "top-[65%] left-[2px] -translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Blur overlay behind content but BELOW header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-[100px] inset-x-0 bottom-0 z-40 bg-white/5 backdrop-blur-[2px] backdrop-saturate-100 m-4"
                onClick={toggleMenu}
              />

              {/* Expanding menu */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="overflow-hidden shadow-md md:hidden bg-white max-w-5xl mx-auto rounded-b-md relative z-50"
              >
                <div className="flex flex-col space-y-4 px-8 py-6">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={toggleMenu}
                      className={`text-lg transition-colors ${
                        location.pathname === item.path
                          ? "text-[#5d00c3] font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Request a Call */}
                  <button className="bg-yellow-400 text-black font-semibold px-4 py-3 rounded-md hover:bg-yellow-300 transition inline-flex items-center space-x-2 w-max">
                    <FiPhone className="w-5 h-5" />
                    <span>Request a Call</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </ErrorBoundary>
  );
};

export default memo(Header);
