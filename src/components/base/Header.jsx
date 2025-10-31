// Header.jsx
import React, { useState, useEffect, useRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import ErrorBoundary from "../base/ErrorBoundary";
import logoSrc from "../../assets/logo.svg";
import lowQualityLogo from "../../assets/logo.svg";

const menuItems = [
  { name: "About", path: "/about" },
  {
    name: "Services",
    hasDropdown: true,
    subItems: [
      { name: "Designing", path: "/services/designing" },
      { name: "Development", path: "/services/development" },
      { name: "Marketing", path: "/services/marketing" },
    ],
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
];

const LogoSkeleton = () => (
  <div className="w-28 md:w-40 h-10 bg-gray-300 rounded animate-pulse" />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // LOCK to prevent immediate re-toggle on mobile (fixes rapid reopen issue)
  const toggleLockRef = useRef(false);

  const toggleMenu = () => {
    console.log("Toggle main mobile menu:", !isOpen);
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    console.log("Closing mobile menu");
    setIsOpen(false);
  };

  // Preload logo
  useEffect(() => {
    const img = new Image();
    img.src = logoSrc;
    img.onload = () => setLogoLoaded(true);
  }, []);

  // Close dropdown when clicking outside (for desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        console.log("Click outside detected — closing desktop dropdown");
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    console.log("Toggle dropdown:", name);
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <ErrorBoundary>
      <header className="fixed top-0 left-0 right-0 z-50 m-6 md:mt-8 new-font">
        {/* Header Container */}
        <div className="max-w-5xl mx-auto flex items-center justify-between md:justify-center px-6 py-4 md:py-0 bg-white border border-white rounded-t-md md:rounded-md shadow-md">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <div className="flex-shrink-0 mr-auto md:mr-0">
              {logoLoaded ? (
                <img
                  src={logoSrc}
                  alt="OptixDigitalAI Logo"
                  className="w-28 h-auto md:w-40 md:h-24 object-contain transition-all duration-300"
                />
              ) : (
                <div className="relative w-28 md:w-40 h-10">
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
          <nav
            ref={dropdownRef}
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center"
          >
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 transition-colors ${
                        location.pathname.startsWith("/services")
                          ? "text-[#5d00c3] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[210%] left-0 right-8 bg-white shadow-md rounded-b-md mt-2 w-40 overflow-hidden z-50"
                        >
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition-colors ${
                      location.pathname === item.path
                        ? "text-[#5d00c3] font-semibold"
                        : "text-gray-700"
                    }`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Request a Call Button (Desktop) */}
          <div className="hidden md:flex ml-auto">
            <Link to="/contact">
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition inline-flex items-center space-x-2">
                <FiPhone className="w-5 h-5" />
                <span>Get in Touch</span>
              </button>
            </Link>
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
              {/* Blur overlay */}
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
                    <div key={item.name} className="flex flex-col space-y-2">
                      {item.hasDropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              // prevent parent handlers from interfering
                              e.stopPropagation();
                              // ignore if locked (prevents immediate re-open)
                              if (toggleLockRef.current) {
                                console.log(
                                  "Toggle locked — ignoring rapid click"
                                );
                                return;
                              }

                              setActiveDropdown((prev) => {
                                const isClosing = prev === item.name;
                                console.log(
                                  isClosing
                                    ? "Closing dropdown for"
                                    : "Opening dropdown for",
                                  item.name
                                );

                                // short lock to avoid immediate re-open on some devices/touch handlers
                                toggleLockRef.current = true;
                                setTimeout(() => {
                                  toggleLockRef.current = false;
                                }, 220);

                                return isClosing ? null : item.name;
                              });
                            }}
                            className={`flex justify-between items-center text-lg transition-colors ${
                              location.pathname.startsWith("/services")
                                ? "text-[#5d00c3] font-semibold"
                                : "text-gray-800"
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 flex flex-col space-y-2"
                              >
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    onClick={() => {
                                      console.log(
                                        "Navigating to subitem:",
                                        sub.path
                                      );
                                      setActiveDropdown(null);
                                      closeMenu();
                                    }}
                                    className="text-gray-700 hover:text-[#5d00c3] transition"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className={`text-lg transition-colors ${
                            location.pathname === item.path
                              ? "text-[#5d00c3] font-semibold"
                              : "text-gray-800"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile Request a Call closes menu */}
                  <Link to="/contact" onClick={closeMenu}>
                    <button className="bg-yellow-400 text-black font-semibold px-4 py-3 rounded-md hover:bg-yellow-300 transition inline-flex items-center space-x-2 w-max">
                      <FiPhone className="w-5 h-5" />
                      <span>Get in Touch</span>
                    </button>
                  </Link>
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
