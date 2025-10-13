// App.jsx
import React, { memo, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/base/ErrorBoundary";
import Header from "./components/base/Header";
import SkeletonLoader from "./components/base/SkeletonLoader";

// Lazy-load page components
const Home = lazy(() => import("./components/views/HomepageView"));

// const About = lazy(() => import("./pages/About"));
// const Services = lazy(() => import("./pages/Services"));
// const Contact = lazy(() => import("./pages/Contact"));

const AppContent = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
          {/* <Route
            path="/about"
            element={
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            }
          />
          <Route
            path="/services"
            element={
              <ErrorBoundary>
                <Services />
              </ErrorBoundary>
            }
          />
          <Route
            path="/contact"
            element={
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
            }
          /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

const MemoizedAppContent = memo(AppContent);

function App() {
  return (
    <ErrorBoundary>
      <MemoizedAppContent />
    </ErrorBoundary>
  );
}

export default App;
