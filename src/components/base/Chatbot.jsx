// Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";
import ZayraAvatar from "../../assets/generated-image.png";

const faqData = [
  {
    question: "hello",
    answer:
      "Hello! 👋 Zayra here. How can I help you today? Feel free to ask about our services, pricing, or projects.",
  },
  {
    question: "hi",
    answer:
      "Hi there! Zayra here. I'm happy to assist you. Ask me anything about our web, mobile, or design services.",
  },
  {
    question: "hey",
    answer:
      "Hey! Welcome to OptixDigitalAI. Zayra here to guide you. You can ask about our services, pricing, or how to get started.",
  },
  {
    question: "what services do you offer",
    answer:
      "Zayra here! We provide Web Development, Mobile App Development, UI/UX Design, Logo & Graphic Design, Website & Mobile Redesign, and Digital Consulting services.",
  },
  {
    question: "logo",
    answer:
      "Absolutely! Zayra says: We create professional logos tailored to your brand identity and vision.",
  },
  {
    question: "redesign",
    answer:
      "Yes! Zayra can help revamp your website to improve usability, aesthetics, and performance.",
  },
  {
    question: "app",
    answer:
      "Yes, Zayra confirms: We build iOS and Android apps with modern UI/UX practices and smooth functionality.",
  },
  {
    question: "ui",
    answer:
      "Zayra here! We craft intuitive and visually appealing UI/UX designs for web and mobile platforms.",
  },
  {
    question: "graphic",
    answer:
      "Yes! Zayra says: We design creative visuals including banners, social media graphics, brochures, and more.",
  },
  {
    question: "price",
    answer:
      "Zayra here! Our prices depend on project scope. Please contact us at support@optixdigitalai.com for a detailed quote.",
  },
  {
    question: "delivery",
    answer:
      "Yes! Zayra confirms: We deliver completed projects digitally and provide post-launch support.",
  },
  {
    question: "how long",
    answer:
      "Zayra here! Small projects usually take 2–4 weeks, while larger projects may take 2–3 months, depending on complexity.",
  },
  {
    question: "custom",
    answer:
      "Absolutely! Zayra says: Contact us at support@optixdigitalai.com to discuss your custom project requirements.",
  },
  {
    question: "support",
    answer:
      "Yes! Zayra provides ongoing maintenance and support. Reach out to support@optixdigitalai.com for more details.",
  },
  {
    question: "get started",
    answer:
      "Zayra here! Click on the 'Get in Touch' button in the header to contact us and start your project.",
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = { type: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);

    const faq = faqData.find((item) =>
      inputValue.toLowerCase().includes(item.question.toLowerCase())
    );

    const botMsg = faq
      ? { type: "bot", text: faq.answer }
      : {
          type: "bot",
          text: "Zayra here! Thank you for your question. Please reach out to support@optixdigitalai.com, and our team will get back to you promptly.",
        };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 500);

    setInputValue("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* Floating Zayra Avatar Button */}
      <motion.div
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg cursor-pointer overflow-hidden bg-yellow-400"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={ZayraAvatar}
          alt="Zayra"
          className="w-full h-full object-cover"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-yellow-400 text-[#5d00c3] px-4 py-3 font-bold flex items-center gap-2">
              <img
                src={ZayraAvatar}
                alt="Zayra"
                className="w-8 h-8 rounded-full object-cover border-2 border-white"
              />
              Chat with Zayra
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto max-h-96 md:max-h-[500px] scrollbar-none">
              {messages.length === 0 && (
                <p className="text-gray-500 text-sm">
                  Hi! Zayra here 💬 — Ask me anything about our services,
                  prices, or projects.
                </p>
              )}
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 rounded-md max-w-[80%] break-words flex items-start gap-2 ${
                    msg.type === "user"
                      ? "bg-yellow-400 self-end text-black"
                      : "bg-gray-100 self-start text-gray-900"
                  }`}
                >
                  {msg.type === "bot" && (
                    <img
                      src={ZayraAvatar}
                      alt="Zayra"
                      className="w-6 h-6 rounded-full object-cover mt-1 shrink-0"
                    />
                  )}
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-4 py-3 border-t border-gray-200 flex gap-2 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#5d00c3]"
              />
              <motion.button
                onClick={handleSend}
                className="bg-[#5d00c3] text-white px-3 py-2 rounded-md flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default Chatbot;
