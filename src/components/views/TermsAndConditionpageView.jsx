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
    "Review OptixDigitalAI’s Terms and Conditions outlining the policies, user responsibilities, and legal guidelines governing the use of our web development, app design, branding, SEO, and AI-powered digital marketing services in India and globally.";

  const keywords = `
OptixDigitalAI terms and conditions, OptixDigitalAI policies, OptixDigitalAI legal notice,
OptixDigitalAI user agreement, OptixDigitalAI privacy terms, OptixDigitalAI terms of service,
digital agency terms India, creative tech agency legal policy, web development terms Pune,
app development terms India, SEO services terms, marketing agency disclaimer,
OptixDigitalAI usage policy, website terms and conditions India, software company legal India,
OptixDigitalAI agreement, OptixDigitalAI disclaimer, AI marketing terms India,
OptixDigitalAI service policy, OptixDigitalAI website legal, online business policy India,
creative agency Pune terms, OptixDigitalAI compliance, OptixDigitalAI company policies,
OptixDigitalAI user rights, OptixDigitalAI customer policy, OptixDigitalAI site usage rules,
OptixDigitalAI legal compliance, AI agency India terms, web design company terms,
OptixDigitalAI legal document, website terms Pune, OptixDigitalAI India legal,
OptixDigitalAI information policy, OptixDigitalAI service terms and conditions,
OptixDigitalAI liability policy, OptixDigitalAI intellectual property terms,
digital agency service agreement India, online marketing terms Pune,
OptixDigitalAI platform policy, global digital agency legal terms,
OptixDigitalAI content policy, OptixDigitalAI fair use policy, OptixDigitalAI company terms,
OptixDigitalAI data policy, OptixDigitalAI rights reserved, OptixDigitalAI legal framework,
OptixDigitalAI website disclaimer, OptixDigitalAI global terms, web development contract terms,
OptixDigitalAI website usage policy, creative tech agency legal document,
OptixDigitalAI Pune terms and conditions, OptixDigitalAI global compliance,
digital marketing company terms India, OptixDigitalAI professional policies,
OptixDigitalAI official terms, software development legal India
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
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "${siteUrl}/about" },
     { "@type": "ListItem", "position": 3, "name": "Designing Services", "item": "${siteUrl}/services/designing" },
      { "@type": "ListItem", "position": 4, "name": "Development Services", "item": "${siteUrl}/services/development" },
      { "@type": "ListItem", "position": 5, "name": "Marketing Services", "item": "${siteUrl}/services/marketing" },
      { "@type": "ListItem", "position": 6, "name": "Pricing", "item": "${siteUrl}/portfolio" },
        { "@type": "ListItem", "position": 7, "name": "Pricing", "item": "${siteUrl}/pricing" },
        { "@type": "ListItem", "position": 8, "name": "Contact", "item": "${siteUrl}/contact" },
        { "@type": "ListItem", "position": 9, "name": "Career", "item": "${siteUrl}/career" },
        { "@type": "ListItem", "position": 10, "name": "Terms & Conditions", "item": "${canonicalUrl}" }
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
