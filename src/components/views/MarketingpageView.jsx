import React from "react";
import { Helmet } from "react-helmet-async";
import MarketingHero from "../service/Marketing/MarketingHero";
import MarketingImpact from "../service/Marketing/MarketingImpact";
import MarketingService from "../service/Marketing/MarketingService";
import MarketingContact from "../service/Marketing/MarketingContact";
import ErrorBoundary from "../base/ErrorBoundary";

export default function MarketingpageView() {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/services/marketing";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title =
    "Digital Marketing & SEO Services | Boost Your Online Presence | OptixDigitalAI";
  const description =
    "Grow your brand visibility and conversions with OptixDigitalAI’s data-driven digital marketing, SEO, content strategy, and social media management services. Drive real results with our experts today.";
  const keywords = `
    digital marketing services, SEO agency India, content marketing, social media marketing,
    online advertising, PPC campaigns, brand visibility, OptixDigitalAI marketing,
    growth strategy, digital branding, website traffic boost, local SEO, marketing automation
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
    "@id": "${canonicalUrl}#marketing",
    "serviceType": "Digital Marketing & SEO Services",
    "name": "Digital Marketing",
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
      "name": "Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay-Per-Click (PPC) Advertising" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Strategy & Digital Growth" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "${canonicalUrl}#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "${siteUrl}/about" },
      { "@type": "ListItem", "position": 3, "name": "Designing Services", "item": "${siteUrl}/services/designing" },
      { "@type": "ListItem", "position": 4, "name": "Development Services", "item": "${siteUrl}/services/development" },
      { "@type": "ListItem", "position": 5, "name": "Marketing Services", "item": "${canonicalUrl}" }
    ]
  }
]
`}</script>
      </Helmet>

      {/* --- Page Sections --- */}
      <ErrorBoundary>
        <MarketingHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <MarketingImpact />
      </ErrorBoundary>

      <ErrorBoundary>
        <MarketingService />
      </ErrorBoundary>

      <ErrorBoundary>
        <MarketingContact />
      </ErrorBoundary>
    </>
  );
}
