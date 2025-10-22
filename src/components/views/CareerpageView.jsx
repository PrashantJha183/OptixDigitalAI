// CareerpageView.jsx
import React from "react";
import CareerHero from "../career/CareerHero";
import Hiring from "../career/Hiring";
import ErrorBoundary from "../base/ErrorBoundary";

const CareerpageView = () => {
  return (
    <>
      <ErrorBoundary>
        <CareerHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hiring />
      </ErrorBoundary>
    </>
  );
};

export default CareerpageView;
