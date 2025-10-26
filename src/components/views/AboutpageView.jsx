import React from "react";
import { Helmet } from "react-helmet-async";
import AboutHero from "../about/AboutHero";
import Mission from "../about/Mission";
import Value from "../about/Value";
import ErrorBoundary from "../base/ErrorBoundary";

const AboutpageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/about";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title =
    "About OptixDigitalAI | Global Creative Digital Agency for Web, App, Branding & AI Marketing";
  const description =
    "Discover OptixDigitalAI — a global creative technology agency specializing in web development, mobile app design, branding, and AI-powered digital marketing. Learn about our mission, vision, and values driving innovation worldwide.";

  // 50+ SEO-optimized keywords
  const keywords = `
    OptixDigitalAI, about OptixDigitalAI, digital agency India, creative tech agency,
    AI marketing agency, web development company, mobile app development, UI UX design,
    software company India, global digital agency, SEO experts, social media marketing,
    performance marketing, PPC advertising, creative branding, digital transformation,
    AI-driven design, custom web design, eCommerce solutions, app developers, SaaS apps,
    website optimization, digital consultancy, Optix Digital AI team, innovation agency,
    brand strategy, content marketing, tech consultancy, cloud web apps, business growth,
    OptixDigitalAI company, AI web agency, top marketing agency, design and technology,
    data-driven marketing, responsive web apps, web design experts, full stack developers,
    software engineers, startup solutions, B2B marketing, online business growth,
    web app developers, UX research agency, branding experts, digital strategy, marketing intelligence
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
    "@type": "AboutPage",
    "@id": "${canonicalUrl}#aboutpage",
    "name": "About OptixDigitalAI",
    "url": "${canonicalUrl}",
    "inLanguage": "en",
    "isPartOf": { "@id": "${siteUrl}#website" },
    "mainEntity": { "@id": "${siteUrl}#organization" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "${siteUrl}"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "${canonicalUrl}"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "${siteUrl}#organization",
    "name": "OptixDigitalAI",
    "url": "${siteUrl}",
    "logo": "${siteUrl}/logo.png",
    "description": "${description}",
    "foundingDate": "2025",
    "founders": [
      { "@type": "Person", "name": "OptixDigitalAI Team" }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 7420807072",
        "contactType": "customer support",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
     "https://www.facebook.com/profile.php?id=61582048281375",
          "https://www.instagram.com/optixdigitalai"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "${siteUrl}#website",
    "url": "${siteUrl}",
    "name": "OptixDigitalAI",
    "publisher": { "@id": "${siteUrl}#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "${siteUrl}/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
]
`}</script>
      </Helmet>

      {/* --- Actual Page Content --- */}
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
