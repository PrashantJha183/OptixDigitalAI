import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../homepage/Hero";
import About from "../homepage/About";
import Choose from "../homepage/Choose";
import Services from "../homepage/Services";
import Reviews from "../homepage/Reviews";
import ErrorBoundary from "../base/ErrorBoundary";

const HomepageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const title =
    "OptixDigitalAI — Creative Tech Agency | Web, App & Digital Solutions";
  const description =
    "OptixDigitalAI is a next-gen creative tech agency offering AI-powered web design, mobile app development, digital marketing, and branding solutions to help businesses grow globally.";
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
  const image = `${siteUrl}/og-image.jpg`; // Replace with your actual OG image path

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="OptixDigitalAI" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="OptixDigitalAI" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@optixdigitalai" />

        {/* Regional Targeting */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />

        {/* Responsive / Device Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Schema.org Structured Data (JSON-LD for Google Rich Results) */}
        <script type="application/ld+json">{`
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "${siteUrl}#organization",
    "name": "OptixDigitalAI",
    "url": "${siteUrl}",
    "logo": "${siteUrl}/favicon.png",
    "description": "${description}",
    "sameAs": [
      "https://www.linkedin.com/company/optixdigitalai",
      "https://www.instagram.com/optixdigitalai",
      "https://x.com/optixdigitalai"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 7420807072",
        "contactType": "customer service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "${siteUrl}#website",
    "url": "${siteUrl}",
    "name": "OptixDigitalAI",
    "inLanguage": "en",
    "publisher": {
      "@id": "${siteUrl}#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "${siteUrl}/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
]
`}</script>
      </Helmet>

      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Choose />
      </ErrorBoundary>
      <ErrorBoundary>
        <Services />
      </ErrorBoundary>
      <ErrorBoundary>
        <Reviews />
      </ErrorBoundary>
    </div>
  );
};

export default HomepageView;
