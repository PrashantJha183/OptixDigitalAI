import React from "react";

export default function Hero() {
  return (
    <section className="bg-purple-800 text-white min-h-[70vh] flex flex-col justify-center items-center px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Welcome to OptixDigitalAI
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-2xl">
        We provide cutting-edge AI solutions to take your business to the next
        level. Explore our services and stay tuned for our launch!
      </p>
      <button className="mt-6 bg-white text-purple-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
}
