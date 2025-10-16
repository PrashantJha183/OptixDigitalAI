import React from "react";
import Hero from "../homepage/Hero";
import About from "../homepage/About";
import Choose from "../homepage/Choose";
import Services from "../homepage/Services";
import Reviews from "../homepage/Reviews";
const HomepageView = () => {
  return (
    <div>
      <Hero />
      <About />
      <Choose />
      <Services />
      <Reviews />
    </div>
  );
};

export default HomepageView;
