import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import ErrorBoundary from "../base/ErrorBoundary";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiPhone,
} from "react-icons/fi";
import { debounce } from "lodash";

const Contact = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Scroll-trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting
          ? controls.start("visible")
          : controls.start("hidden"),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Validation logic
  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number (10-15 digits).";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Debounced input update
  const handleInputChange = useCallback(
    debounce((field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }, 250),
    []
  );

  // Real-time validation when user types
  useEffect(() => {
    validate();
  }, [formData, validate]);

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });

    if (!validate()) {
      setStatus("error");
      controls.start({
        x: [-10, 10, -10, 10, 0],
        transition: { duration: 0.4 },
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      setIsFormValid(false);
    }, 1500);
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <ErrorBoundary>
      <section
        ref={sectionRef}
        id="contact"
        className="bg-[#5d00c3] new-font text-white min-h-[85vh] flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-24 rounded-md m-4 overflow-hidden relative"
      >
        {/* Decorative gradients */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LEFT SIDE - TEXT */}
        <motion.div
          className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0"
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
        >
          <h2 className="text-2xl md:text-5xl pt-4 md:pt-0 font-bold leading-tight mb-6">
            Let’s Build Something <br />
            <span className="text-yellow-400">Extraordinary Together</span>
          </h2>
          <p className="text-gray-200 text-md max-w-lg mx-auto md:mx-0">
            Have a project in mind or just want to say hello? We’d love to
            collaborate and help bring your ideas to life.
          </p>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          className="md:w-1/2 z-10 w-full max-w-lg"
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            noValidate
          >
            {/* Name */}
            <div className="relative">
              <FiUser className="absolute left-4 top-4 text-gray-500" />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none ${
                  touched.name && errors.name
                    ? "border-red-400"
                    : "border-gray-300 focus:border-[#5d00c3]"
                } transition-all`}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <FiMail className="absolute left-4 top-4 text-gray-500" />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none ${
                  touched.email && errors.email
                    ? "border-red-400"
                    : "border-gray-300 focus:border-[#5d00c3]"
                } transition-all`}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <FiPhone className="absolute left-4 top-4 text-gray-500" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none ${
                  touched.phone && errors.phone
                    ? "border-red-400"
                    : "border-gray-300 focus:border-[#5d00c3]"
                } transition-all`}
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-gray-500" />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-md text-gray-800 placeholder-gray-500 resize-none focus:outline-none ${
                  touched.message && errors.message
                    ? "border-red-400"
                    : "border-gray-300 focus:border-[#5d00c3]"
                } transition-all`}
              />
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 flex justify-center items-center gap-2 text-lg font-semibold rounded-md transition-all duration-300 ${
                !isFormValid || isSubmitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#5d00c3] text-white hover:bg-[#6a00e8]"
              }`}
              whileHover={isFormValid && !isSubmitting ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FiSend className="w-5 h-5" />
            </motion.button>

            {/* Status Messages */}
            {status === "success" && (
              <motion.p
                className="text-green-600 text-center font-semibold mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="text-red-600 text-center font-semibold mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Please correct the errors above.
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Contact;
