import AboutHero from "../about/AboutHero";
import Mission from "../about/Mission";
import Value from "../about/Value";
import ErrorBoundary from "../base/ErrorBoundary";
const AboutpageView = () => {
  return (
    <>
      <ErrorBoundary>
        <AboutHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Mission />
      </ErrorBoundary>

      <ErrorBoundary>
        <Value />
      </ErrorBoundary>
    </>
  );
};
export default AboutpageView;
