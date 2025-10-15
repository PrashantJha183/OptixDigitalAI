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

// Optional: Lazy load other pages
// const About = lazy(() =>
//   import("./pages/About").catch(() => ({ default: () => null }))
// );

//////////////////////////
// ScrollToTop Component
//////////////////////////
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            {/* Uncomment when needed
            <Route
              path="/about"
              element={
                <ErrorBoundary>
                  <About />
                </ErrorBoundary>
              }
            />
            */}
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
