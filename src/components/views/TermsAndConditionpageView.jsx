// TermsAndConditionpageView.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import TermsAndCondition from "../base/TermsAndCondition";
import ErrorBoundary from "../base/ErrorBoundary";

const TermsAndConditionpageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/terms-and-conditions";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title = "Terms and Conditions | OptixDigitalAI";
  const description =
    "Read the Terms and Conditions of OptixDigitalAI — a global creative technology agency providing web development, mobile apps, branding, SEO, and AI-powered digital marketing solutions.";
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

        {/* --- Open Graph --- */}
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
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "OptixDigitalAI Terms and Conditions",
      "url": "${canonicalUrl}",
      "inLanguage": "en",
      "description": "${description}"
    },
    {
      "@type": "Organization",
      "name": "OptixDigitalAI",
      "url": "${siteUrl}",
      "logo": "${siteUrl}/logo.png",
      "description": "${description}",
      "foundingDate": "2025",
      "founders": [
        { "@type": "Person", "name": "OptixDigitalAI Team" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7420807072",
        "contactType": "Customer Support",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/optixdigitalai",
        "https://www.instagram.com/optixdigitalai",
        "https://x.com/optixdigitalai",
        "https://www.facebook.com/optixdigitalai"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "${siteUrl}/about" },
        { "@type": "ListItem", "position": 3, "name": "Services", "item": "${siteUrl}/services" },
        { "@type": "ListItem", "position": 4, "name": "Pricing", "item": "${siteUrl}/pricing" },
        { "@type": "ListItem", "position": 5, "name": "Contact", "item": "${siteUrl}/contact" },
        { "@type": "ListItem", "position": 6, "name": "Career", "item": "${siteUrl}/career" },
        { "@type": "ListItem", "position": 7, "name": "Terms & Conditions", "item": "${canonicalUrl}" }
      ]
    }
  ]
}
`}</script>
      </Helmet>

      {/* --- Actual Page Content --- */}
      <ErrorBoundary>
        <TermsAndCondition />
      </ErrorBoundary>
    </>
  );
};

export default TermsAndConditionpageView;
