// DevelopmentpageView.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "../base/ErrorBoundary";
import DevelopmentHero from "../service/Development/DevelopmentHero";
import DevelopmentProcess from "../service/Development/DevelopementProcess";
import ToolsAndTechnologies from "../service/Development/ToolsAndTechnologies";
import DevelopmentContact from "../service/Development/DevelopmentContact";

export default function DevelopmentpageView() {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/services/development";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title = "Full-Stack Web & App Development Services | OptixDigitalAI";
  const description =
    "OptixDigitalAI provides professional full-stack web and mobile app development services using modern technologies. We specialize in scalable, secure, and high-performing solutions tailored to your business needs.";
  const keywords = `
    web development services, app development, full stack development, React developer India,
    Node.js development, backend development, frontend development, OptixDigitalAI developers,
    mobile app development, cloud development, DevOps, scalable web apps, ecommerce development,
    custom software development, progressive web apps, technology solutions
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
        <meta name="revisit-after" content="7 days" />
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
        <meta name="ICBM" content="20.5937,78.9629" />
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
    "@id": "${canonicalUrl}#development",
    "serviceType": "Full-Stack Web & App Development",
    "name": "Web & App Development Services",
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
      "name": "Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frontend Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backend Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps & Deployment" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "${canonicalUrl}#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "${siteUrl}/about" },
        { "@type": "ListItem", "position": 3, "name": "Designing Services", "item": "${siteUrl}/services/designing" },
      { "@type": "ListItem", "position": 4, "name": "Development", "item": "${canonicalUrl}" }
    ]
  }
]
`}</script>
      </Helmet>

      {/* --- Page Content --- */}
      <ErrorBoundary>
        <DevelopmentHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <DevelopmentProcess />
      </ErrorBoundary>

      <ErrorBoundary>
        <ToolsAndTechnologies />
      </ErrorBoundary>

      <ErrorBoundary>
        <DevelopmentContact />
      </ErrorBoundary>
    </>
  );
}
