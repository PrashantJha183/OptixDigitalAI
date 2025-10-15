import React from "react";
import Hero from "../homepage/Hero";
import About from "../homepage/About";
import Choose from "../homepage/Choose";
import Services from "../homepage/Services";
const HomepageView = () => {
  return (
    <div>
      <Hero />
      <About />
      <Choose />
      <Services />
    </div>
  );
};

export default HomepageView;
