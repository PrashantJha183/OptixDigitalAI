// Footer.jsx
import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
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

  const phoneNumber = "+917420807072";
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

  // Handle email copy on desktop
  const handleEmailClick = (e) => {
    if (!isMobile) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      e.preventDefault(); // prevent mailto on desktop
    }
  };

  const menuLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact", to: "/contact" },
  ];

  const serviceLinks = [
    { name: "Web Devlopent", to: "/ai-solutions" },
    { name: "App Development", to: "/chatbots" },
    { name: "Digital Marketing", to: "/automation" },
    { name: "Graphic Designing", to: "/analytics" },
  ];

  return (
    <FooterErrorBoundary>
      <footer className="bg-black text-white pt-10 m-4 new-font rounded-md">
        {/* Top Footer Grid with extra gap on desktop */}
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

            {/* Contact Information with Icons */}
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
                {!isMobile && copied && (
                  <span className="ml-2 text-green-400 text-sm">Copied!</span>
                )}
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
              {menuLinks.map((link) => (
                <li key={link.to}>
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
              {serviceLinks.map((link) => (
                <li key={link.to}>
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
              to="/request-demo"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition inline-flex items-center gap-2 w-max shadow-md"
            >
              <FiPhone className="w-5 h-5" />
              <span>Request a Call</span>
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/optixdigitalai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <FiFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-700 transition"
              >
                <FiLinkedin className="w-6 h-6" />
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
            <Link to="/terms" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </FooterErrorBoundary>
  );
};

export default memo(Footer);
