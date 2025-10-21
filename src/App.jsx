// App.jsx
import React, { memo, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ErrorBoundary from "./components/base/ErrorBoundary";
import SkeletonLoader from "./components/base/SkeletonLoader";

// Lazy-load components with fallback
const Header = lazy(() =>
  import("./components/base/Header").catch(() => ({ default: () => null }))
);
const Footer = lazy(() =>
  import("./components/base/Footer").catch(() => ({ default: () => null }))
);
const Home = lazy(() =>
  import("./components/views/HomepageView").catch(() => ({
    default: () => null,
  }))
);

const About = lazy(() =>
  import("./components/views/AboutpageView").catch(() => ({
    default: () => null,
  }))
);

const Contact = lazy(() =>
  import("./components/views/ContactpageView").catch(() => ({
    default: () => null,
  }))
);

const Pricing = lazy(() =>
  import("./components/views/PricingpageView").catch(() => ({
    default: () => null,
  }))
);

const Service = lazy(() =>
  import("./components/views/ServicepageView").catch(() => ({
    default: () => null,
  }))
);

const CaseStudy = lazy(() =>
  import("./components/views/CaseStudypageView").catch(() => ({
    default: () => null,
  }))
);

//////////////////////////
// ScrollToTop Component
//////////////////////////
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
};

const AppContent = () => {
  return (
    // Outer wrapper sets grab cursor everywhere
    <div className="cursor-grab">
      <Router>
        <ScrollToTop />

        {/* Header */}
        <Suspense fallback={<SkeletonLoader />}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
        </Suspense>

        {/* Main Routes */}
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

            <Route
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
                  <Service />
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
            />

            <Route
              path="/case-study"
              element={
                <ErrorBoundary>
                  <CaseStudy />
                </ErrorBoundary>
              }
            />

            <Route
              path="/pricing"
              element={
                <ErrorBoundary>
                  <Pricing />
                </ErrorBoundary>
              }
            />
          </Routes>
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<SkeletonLoader />}>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </Router>
    </div>
  );
};

export default memo(AppContent);
