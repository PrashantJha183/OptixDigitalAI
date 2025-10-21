import ServiceHero from "../service/ServiceHero";
import ServicesCards from "../service/ServicesCards";
import ServiceContact from "../service/ServiceContact";
import ErrorBoundary from "../base/ErrorBoundary";

const ServicepageView = () => {
  return (
    <>
      <ErrorBoundary>
        <ServiceHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <ServicesCards />
      </ErrorBoundary>

      <ErrorBoundary>
        <ServiceContact />
      </ErrorBoundary>
    </>
  );
};
export default ServicepageView;
