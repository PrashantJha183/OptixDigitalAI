import React from "react";
import Hero from "../homepage/Hero";
import About from "../homepage/About";
import Choose from "../homepage/Choose";
import Services from "../homepage/Services";
import Reviews from "../homepage/Reviews";
import ErrorBoundary from "../base/ErrorBoundary";

const HomepageView = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <About />
      </ErrorBoundary>

      <ErrorBoundary>
        <Choose />
      </ErrorBoundary>

      <ErrorBoundary>
        <Services />
      </ErrorBoundary>

      <ErrorBoundary>
        <Reviews />
      </ErrorBoundary>
    </div>
  );
};

export default HomepageView;
