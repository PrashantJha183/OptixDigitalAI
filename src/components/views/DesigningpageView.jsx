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
    "OptixDigitalAI offers professional web design and UI/UX design services that transform your brand identity into visually stunning, user-friendly digital experiences. Explore our creative design process and tools.";
  const keywords = `
    web designing services, UI UX design, website design company, creative agency India,
    responsive design, OptixDigitalAI design process, branding design, web design experts,
    user interface design, digital design, UX strategy, modern website design, brand experience,
    graphic design services, website redesign, design optimization
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
