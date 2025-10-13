// Header.jsx
import React, { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import { FiPhone } from "react-icons/fi";
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 m-4 md:mt-4">
      {/* Header Container */}
      <div className="max-w-5xl mx-auto flex items-center justify-between md:justify-center px-6 py-4 md:py-0 bg-white border border-white rounded-t-md shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0 mr-auto md:mr-0">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
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
            {/* Top Bar */}
            <span
              className={`block absolute h-0.5 w-8 bg-black rounded transition-all duration-300 ${
                isOpen
                  ? "rotate-45 top-1/2"
                  : "top-[35%] left-[2px] translate-x-1"
              }`}
            />
            {/* Bottom Bar */}
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
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              onClick={toggleMenu}
            />

            {/* Expanding menu */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="overflow-hidden shadow-md md:hidden bg-white max-w-5xl mx-auto rounded-b-md"
            >
              <div className="flex flex-col space-y-4 p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`text-lg transition-colors ${
                      location.pathname === item.path
                        ? "text-blue-600 font-semibold"
                        : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile Request a Call */}
                <button
                  className="bg-yellow-400 text-black font-semibold px-4 py-3 rounded-md hover:bg-yellow-300 transition inline-flex items-center space-x-2 "
                  style={{ width: "40vw" }}
                >
                  <FiPhone className="w-5 h-5" />
                  <span>Request a Call</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Header);
