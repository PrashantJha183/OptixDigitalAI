import React from "react";
import { Helmet } from "react-helmet-async";
import PortfolioHero from "../portfolio/PortfolioHero";
import PortfolioContact from "../portfolio/PortfolioContact";
import Gallery from "../portfolio/Gallery";
import ErrorBoundary from "../base/ErrorBoundary";

const PortfoliopageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/portfolio";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title =
    "OptixDigitalAI Portfolio | Creative Web Design, App Development & Marketing Projects";
  const description =
  "Discover OptixDigitalAI’s portfolio a showcase of innovative web design, mobile app development, branding, and digital marketing projects. Explore how our creative solutions and technology deliver measurable business success across India and worldwide.";

const keywords = `
OptixDigitalAI portfolio, OptixDigitalAI projects, OptixDigitalAI case studies,
creative portfolio OptixDigitalAI, OptixDigitalAI work samples, agency portfolio Pune,
digital agency portfolio India, web design portfolio Pune, app development portfolio India,
branding portfolio Pune, digital marketing case studies India, UI UX design showcase Pune,
website design examples India, responsive website portfolio Pune,
mobile app UI design Pune, app UX design India, custom web app portfolio Pune,
software development projects India, ecommerce website showcase Pune,
creative design work India, marketing campaign results Pune, SEO success stories India,
branding and identity design Pune, social media campaign showcase India,
OptixDigitalAI creative showcase, OptixDigitalAI past work, OptixDigitalAI design samples,
digital transformation case studies Pune, business growth portfolio India,
tech innovation showcase Pune, global digital projects OptixDigitalAI,
award-winning designs India, top creative agency portfolio Pune,
OptixDigitalAI client projects, startup project showcase India,
B2B marketing case studies Pune, OptixDigitalAI product design portfolio,
corporate website projects India, marketing performance case studies Pune,
logo design portfolio India, brand identity showcase Pune, rebranding examples India,
UX case studies Pune, UI redesign portfolio India, landing page design samples Pune,
mobile-first web projects India, AI web design case studies Pune,
cross-platform app portfolio India, full stack development showcase Pune,
PWA portfolio India, modern web app design Pune, creative digital solutions India,
OptixDigitalAI innovations, OptixDigitalAI achievements, project success stories Pune,
enterprise app development India, Shopify project showcase Pune,
WordPress portfolio India, SaaS app design Pune, technology case studies India,
marketing impact portfolio Pune, creative tech agency projects India,
data-driven results OptixDigitalAI, client success OptixDigitalAI,
OptixDigitalAI global clients, OptixDigitalAI Pune office projects,
OptixDigitalAI design excellence, OptixDigitalAI web apps, OptixDigitalAI app solutions,
OptixDigitalAI creative agency India, digital agency India portfolio, 
top creative work India, OptixDigitalAI experience, professional portfolio Pune,
client results India, OptixDigitalAI success portfolio, leading digital agency projects Pune,
creative showcase India, best portfolio agency Pune, OptixDigitalAI innovation work
`;

  const image = `${siteUrl}/og-image.jpg`;

  return (
    <>
      <Helmet>
        {/* --- Primary SEO Meta Tags --- */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="OptixDigitalAI" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="1 day" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* --- Device Optimization --- */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* --- Regional SEO Meta --- */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />

        {/* --- Open Graph --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="OptixDigitalAI" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_IN" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@optixdigitalai" />
        <meta name="twitter:site" content="@optixdigitalai" />

        {/* --- Schema.org Structured Data --- */}
        <script type="application/ld+json">{`
[
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "${canonicalUrl}#portfolio",
    "name": "OptixDigitalAI Portfolio",
    "url": "${canonicalUrl}",
    "inLanguage": "en",
    "creator": {
      "@type": "Organization",
      "@id": "${siteUrl}#organization",
      "name": "OptixDigitalAI",
      "url": "${siteUrl}",
      "logo": "${siteUrl}/logo.png",
      "description": "${description}",
      "foundingDate": "2025-01-01",
      "founders": [
        { "@type": "Person", "name": "OptixDigitalAI Team" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7420807072",
        "contactType": "customer support",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61582048281375",
        "https://www.instagram.com/optixdigitalai"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "about": "Showcase of OptixDigitalAI’s design, development, and marketing projects.",
    "genre": "Digital Portfolio",
    "keywords": "portfolio, web design, app development, branding, digital marketing, OptixDigitalAI",
    "hasPart": [
      { "@type": "CreativeWork", "name": "Website Design Projects", "url": "${siteUrl}/services/designing" },
      { "@type": "CreativeWork", "name": "App Development Projects", "url": "${siteUrl}/services/development" },
      { "@type": "CreativeWork", "name": "Marketing Campaigns", "url": "${siteUrl}/services/marketing" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "${canonicalUrl}#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
      { "@type": "ListItem", "position": 2, "name": "Designing Services", "item": "${siteUrl}/services/designing" },
      { "@type": "ListItem", "position": 3, "name": "Development Services", "item": "${siteUrl}/services/development" },
      { "@type": "ListItem", "position": 4, "name": "Marketing Services", "item": "${siteUrl}/services/marketing" },
      { "@type": "ListItem", "position": 5, "name": "Portfolio", "item": "${canonicalUrl}" },
    ]
  }
]
`}</script>
      </Helmet>

      {/* --- Page Content --- */}
      <ErrorBoundary>
        <PortfolioHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Gallery />
      </ErrorBoundary>

      <ErrorBoundary>
        <PortfolioContact />
      </ErrorBoundary>
    </>
  );
};

export default PortfoliopageView;
