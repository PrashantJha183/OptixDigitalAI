import React from "react";
import { Helmet } from "react-helmet-async";
import DesigningHero from "../service/Designing/DesigningHero";
import DesigningProcess from "../service/Designing/DesigningProcess";
import DesigningTools from "../service/Designing/DesigningTools";
import DesignContact from "../service/Designing/DesignContact";
import ErrorBoundary from "../base/ErrorBoundary";

export default function DesigningpageView() {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/services/designing";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title = "Professional Web & UI/UX Designing Services | OptixDigitalAI";
  const description =
    "Discover OptixDigitalAI’s expert web design and UI/UX design services — where creativity meets technology. We craft visually stunning, user-focused, and responsive digital experiences that elevate your brand identity. Based in Pune, serving clients across India and globally.";

  const keywords = `
OptixDigitalAI design, OptixDigitalAI web design, OptixDigitalAI UI UX, web designing services,
UI UX design agency, website design company Pune, website design company India,
creative design agency Pune, design studio India, responsive website design,
modern web design, UX strategy experts Pune, digital design services India,
user interface design, user experience design, UX research company Pune,
graphic design services, branding and design agency India, creative design experts Pune,
UI UX designers India, website redesign services Pune, landing page design Pune,
eCommerce design agency India, custom web design Pune, portfolio website design India,
design optimization services, product design agency Pune, visual identity design India,
UX prototyping Pune, interface design company India, mobile app design Pune,
cross-platform design India, website UI design India, user flow design Pune,
UX consultancy India, digital branding design Pune, creative UI UX company India,
OptixDigitalAI creative design, OptixDigitalAI branding design, digital experience design Pune,
motion design Pune, interaction design India, design systems Pune,
responsive interface design, modern UX principles India, accessibility design Pune,
creative technology design India, web design and development agency Pune,
best design agency India, professional website designers Pune,
UI design for startups India, UX experts Pune, design innovation India,
web design firm Pune, brand design solutions India, website aesthetics Pune,
minimal design India, OptixDigitalAI creative process, UX research and testing Pune,
user-centered design India, human interface design Pune, visual storytelling India,
website layout design Pune, digital art direction India, OptixDigitalAI design experts,
creative web agency Pune, top UI UX company India, interactive website design Pune,
creative identity design India, UI UX trends Pune, next-gen digital design India,
responsive web design Pune, enterprise web design India, global design studio,
OptixDigitalAI Pune design services, OptixDigitalAI India design agency,
creative innovation Pune, design excellence India, brand enhancement design Pune
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

        {/* --- Open Graph (Facebook, LinkedIn, WhatsApp) --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="OptixDigitalAI" />
        <meta property="og:locale" content="en_US" />

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
    "@type": "Service",
    "@id": "${canonicalUrl}#designing",
    "serviceType": "Web & UI/UX Designing Services",
    "name": "Web & UI/UX Designing",
    "url": "${canonicalUrl}",
    "provider": {
      "@type": "Organization",
      "@id": "${siteUrl}#organization",
      "name": "OptixDigitalAI",
      "url": "${siteUrl}",
      "logo": "${siteUrl}/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7420807072",
        "contactType": "customer support",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61582048281375",
        "https://www.instagram.com/optixdigitalai"
      ]
    },
    "description": "${description}",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logo Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Redesigning" } },
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "${canonicalUrl}#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "${siteUrl}/about" },
      { "@type": "ListItem", "position": 3, "name": "Designing Services", "item": "${canonicalUrl}" }
    ]
  }
]
`}</script>
      </Helmet>

      {/* --- Page Content --- */}
      <ErrorBoundary>
        <DesigningHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <DesigningProcess />
      </ErrorBoundary>

      <ErrorBoundary>
        <DesigningTools />
      </ErrorBoundary>

      <ErrorBoundary>
        <DesignContact />
      </ErrorBoundary>
    </>
  );
}
