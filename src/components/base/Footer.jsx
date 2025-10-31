// Footer.jsx
import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import logoSrc from "../../assets/Optix DIgital Ai logo white.svg";

// Inline ErrorBoundary Component
class FooterErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Footer Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-black text-white p-4 text-center">
          Footer failed to load.
        </div>
      );
    }
    return this.props.children;
  }
}

// Skeleton Loader for Logo
const LogoSkeleton = () => (
  <div className="w-28 md:w-40 h-10 bg-gray-700 animate-pulse rounded" />
);

const Footer = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+91 7420807072";
  const email = "support@optixdigitalai.com";
  const address =
    "Office #1306 (13th floor), Ambrosia Galaxy, Pan Card Club Road, Baner High St, Hill Road, Baner, Pune, Maharashtra 411069";

  // Preload logo for better UX
  useEffect(() => {
    const img = new Image();
    img.src = logoSrc;
    img.onload = () => setLogoLoaded(true);
  }, []);

  // Detect mobile for responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle email click on desktop
  const handleEmailClick = (e) => {
    if (!isMobile) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
      e.preventDefault();
    }
  };

  const menuLinks = [
    { name: "About", to: "/about" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Pricing", to: "/pricing" },
    { name: "Career", to: "/career" },
  ];

  const serviceLinks = [
    { name: "Web Devlopment", to: "/services/development" },
    { name: "App Development", to: "/services/development" },
    { name: "Digital Marketing", to: "/services/marketing" },
    { name: "Graphic Designing", to: "/services/designing" },
  ];

  return (
    <FooterErrorBoundary>
      <footer className="bg-black text-white pt-10 m-4 new-font rounded-md relative">
        {/* Clipboard popup for desktop */}
        {copied && !isMobile && (
          <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeInOut">
            Email copied to clipboard!
          </div>
        )}

        {/* Top Footer Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 md:justify-items-center">
          {/* Column 1: Logo + Contact Info */}
          <div className="flex flex-col space-y-5">
            <Link to="/">
              {logoLoaded ? (
                <img
                  src={logoSrc}
                  alt="OptixDigitalAI Logo"
                  className="w-36 md:w-44 h-auto object-contain"
                  loading="lazy"
                />
              ) : (
                <LogoSkeleton />
              )}
            </Link>

            {/* Contact Information */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-400">
                <FiPhone className="text-xl text-yellow-400" />
                {isMobile ? (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="hover:text-yellow-400 transition"
                  >
                    {phoneNumber}
                  </a>
                ) : (
                  <span>{phoneNumber}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-xl text-yellow-400" />
                <a
                  href={`mailto:${email}`}
                  onClick={handleEmailClick}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-gray-400 leading-snug">
                <FiMapPin className="text-xl text-yellow-400 mt-1 flex-shrink-0" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  {address}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:text-center">
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              {menuLinks.map((link, index) => (
                <li key={`menu-${index}`}>
                  <Link
                    to={link.to}
                    className="hover:text-yellow-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:text-center">
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((link, index) => (
                <li key={`service-${index}`}>
                  <Link
                    to={link.to}
                    className="hover:text-yellow-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col space-y-4 md:items-center">
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">
              Get in Touch
            </h3>

            <Link
              to="/contact"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition inline-flex items-center gap-2 w-max shadow-md"
            >
              <FiPhone className="w-5 h-5" />
              <span>Get in Touch</span>
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61582048281375"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <FiFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/optixdigitalai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/917420807072"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-green-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 13.487c-.267-.133-1.58-.78-1.826-.868-.247-.089-.427-.133-.607.133-.18.267-.7.868-.857 1.047-.157.178-.313.2-.58.067-.267-.133-1.126-.415-2.146-1.323-.794-.707-1.33-1.58-1.486-1.846-.157-.267-.017-.412.117-.545.12-.119.267-.313.4-.467.134-.156.179-.267.268-.445.089-.178.045-.333-.022-.467-.067-.133-.607-1.46-.833-2.006-.22-.533-.445-.46-.607-.468l-.52-.009c-.178 0-.467.067-.713.333-.246.267-.935.912-.935 2.226 0 1.314.958 2.583 1.09 2.761.133.178 1.883 2.874 4.562 4.028.638.275 1.135.44 1.523.562.64.203 1.222.174 1.683.106.513-.076 1.58-.647 1.804-1.272.223-.625.223-1.16.156-1.272-.067-.111-.247-.178-.514-.311zM12.002 2.004c-5.52 0-9.998 4.477-9.998 9.996 0 1.76.46 3.392 1.267 4.825L2 22l5.28-1.236a9.95 9.95 0 004.723 1.199c5.52 0 9.998-4.477 9.998-9.996 0-5.518-4.478-9.995-9.998-9.995z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10"></div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm space-y-2 md:space-y-0">
          <p>
            © {new Date().getFullYear()} OptixDigitalAI. All rights reserved.
          </p>
          <a
            href="https://www.bazaardigital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Designed & Developed by Bazaar Digital
          </a>

          <div className="flex space-x-4">
            <Link
              to="/terms-and-conditions"
              className="hover:text-yellow-400 transition"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Animation for popup */}
        <style>{`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fadeInOut {
            animation: fadeInOut 3.5s ease-in-out forwards;
          }
        `}</style>
      </footer>
    </FooterErrorBoundary>
  );
};

export default memo(Footer);
