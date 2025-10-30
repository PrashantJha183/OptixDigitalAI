import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anita Sharma",
    title: "Founder, StudioNova",
    quote:
      "OptixDigitalAI transformed our digital presence. Their team is creative, responsive, and highly professional.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    title: "CTO, Fintrix Systems",
    quote:
      "We saw an immediate improvement in our website traffic and conversion rates. Highly recommend their services.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sonia Mehta",
    title: "Marketing Head, BrandBuzz",
    quote:
      "Beautiful UI, fast performance, and incredible attention to detail — OptixDigitalAI nailed it!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  }),
};

const Reviews = React.memo(() => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section
      id="client-reviews"
      className="bg-[#5d00c3] py-20 px-6 md:px-12 overflow-hidden m-4 rounded-md review-main"
      aria-label="Client testimonials and reviews"
    >
      <div className="flex justify-center">
        <motion.h2
          className="text-lg md:text-2xl font-bold mb-10 text-white border-2 border-white inline-block px-6 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((review, index) => (
          <motion.article
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between text-center border border-gray-100  transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={index}
            variants={fadeUp}
          >
            <FaQuoteLeft className="text-[#5d00c3] text-3xl mb-4 mx-auto opacity-80" />
            <p className="text-gray-700 italic mb-6">{review.quote}</p>
            <div className="flex flex-col items-center">
              <img
                src={review.image}
                alt={`Photo of ${review.name}`}
                loading="lazy"
                width={64}
                height={64}
                className="rounded-full w-16 h-16 object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-900">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.title}</p>
            </div>
          </motion.article>
        ))}
      </Slider>
    </section>
  );
});

export default Reviews;
