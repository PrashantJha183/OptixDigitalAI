import React from "react";
import { Helmet } from "react-helmet-async";
import PricingHero from "../pricing/PricingHero";
import Pricing from "../pricing/Pricing";
import PricingContact from "../pricing/PricingContact";
import ErrorBoundary from "../base/ErrorBoundary";

const PricingpageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/pricing";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title =
    "Pricing Plans | OptixDigitalAI – Affordable Web, App, and Digital Marketing Solutions";
  const description =
    "Explore OptixDigitalAI’s transparent and flexible pricing plans for web development, mobile app design, branding, SEO, and AI-powered digital marketing. Get custom packages tailored to your business goals from startups to enterprises in India and worldwide.";

  const keywords = `
OptixDigitalAI pricing, OptixDigitalAI pricing plans, OptixDigitalAI packages,
OptixDigitalAI cost, digital agency pricing India, web development pricing India,
website design packages Pune, mobile app development cost Pune,
branding services pricing India, SEO packages Pune, social media marketing cost India,
AI marketing pricing, AI-powered digital marketing packages India,
OptixDigitalAI plan comparison, website cost Pune, app development cost India,
custom website pricing, ecommerce development packages Pune,
UI UX design pricing India, digital marketing plans India, PPC campaign cost,
performance marketing pricing Pune, creative agency packages India,
full stack development pricing, software development cost India,
OptixDigitalAI website pricing, OptixDigitalAI development rates,
OptixDigitalAI SEO pricing, digital agency packages Pune,
branding and logo design pricing India, content marketing plans Pune,
AI solutions pricing India, automation and analytics packages Pune,
startup website cost India, business website plans Pune,
B2B marketing packages India, SaaS app development pricing,
custom web app pricing India, mobile app design packages Pune,
OptixDigitalAI service cost, digital consultancy pricing India,
marketing intelligence packages, tech consultancy plans Pune,
OptixDigitalAI global pricing, international service rates India,
creative web solutions pricing Pune, enterprise website cost India,
marketing and advertising packages India, OptixDigitalAI quote,
request pricing OptixDigitalAI, affordable digital marketing India,
OptixDigitalAI pricing Pune, hire OptixDigitalAI, cost of website design India,
custom plan OptixDigitalAI, web design company pricing India,
top digital agency India pricing, creative tech agency Pune pricing,
digital transformation packages India, AI web agency cost,
data-driven marketing pricing Pune, responsive web apps pricing,
software engineers cost India, branding experts pricing Pune,
OptixDigitalAI affordable plans, online business growth pricing,
B2B digital pricing India, creative solutions pricing Pune,
OptixDigitalAI transparent pricing, OptixDigitalAI rate plans,
OptixDigitalAI cost calculator, OptixDigitalAI development estimate
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
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_IN" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@optixdigitalai" />
        <meta name="twitter:site" content="@optixdigitalai" />

        {/* --- Schema.org Structured Data with ContactPoint & Breadcrumbs --- */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "OptixDigitalAI Pricing Plans",
  "url": "${canonicalUrl}",
  "inLanguage": "en",
  "description": "${description}",
  "publisher": {
    "@type": "Organization",
    "name": "OptixDigitalAI",
    "url": "${siteUrl}",
    "logo": {
      "@type": "ImageObject",
      "url": "${siteUrl}/logo.png"
    },
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
        "name": "About",
        "item": "${siteUrl}/about"
      },
      { "@type": "ListItem", "position": 3, "name": "Designing Services", "item": "${siteUrl}/services/designing" },
      { "@type": "ListItem", "position": 4, "name": "Development Services", "item": "${siteUrl}/services/development" },
      { "@type": "ListItem", "position": 5, "name": "Marketing Services", "item": "${siteUrl}/services/marketing" },
      { "@type": "ListItem", "position": 6, "name": "Pricing", "item": "${siteUrl}/portfolio" },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Pricing",
        "item": "${canonicalUrl}"
      }
    ]
  }
}
`}</script>
      </Helmet>

      {/* --- Page Content --- */}

      <ErrorBoundary>
        <PricingHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Pricing />
      </ErrorBoundary>

      <ErrorBoundary>
        <PricingContact />
      </ErrorBoundary>
    </>
  );
};

export default PricingpageView;
