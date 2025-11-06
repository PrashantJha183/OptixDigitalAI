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
    "OptixDigitalAI offers cutting-edge full-stack web and mobile app development services in Pune, India, and globally. We build scalable, secure, and high-performing digital solutions using modern technologies like React, Node.js, Next.js, and cloud infrastructure to empower business growth.";

  const keywords = `
OptixDigitalAI development, OptixDigitalAI web development, OptixDigitalAI app development,
web development company Pune, web development company India, full stack development agency,
React developers Pune, Node.js developers India, frontend development company Pune,
backend development services India, custom web app development Pune,
mobile app development Pune, cross-platform app development India, React Native developers Pune,
Flutter app development India, Next.js development Pune, scalable web apps India,
enterprise software development Pune, SaaS app development India, ecommerce development Pune,
cloud application development India, API integration services Pune, database management India,
DevOps company Pune, CI/CD pipeline setup India, AWS development Pune,
Azure app development India, modern web architecture Pune, secure software development India,
custom software solutions Pune, digital transformation development India,
PWA (Progressive Web App) development Pune, technology consulting India,
AI-powered development Pune, automation solutions India, business web apps Pune,
product engineering India, UI UX integrated development Pune, responsive web apps India,
CMS development Pune, WordPress development India, Shopify development Pune,
MERN stack developers India, MEAN stack development Pune, Laravel developers India,
Python developers Pune, Django development India, cloud-based web apps Pune,
mobile solutions India, enterprise mobile app Pune, web portal development India,
application modernization Pune, full stack engineers India, software company Pune,
custom CRM development India, ERP development Pune, B2B web solutions India,
startup development partner Pune, MVP development India, SaaS platform Pune,
real-time app development India, database optimization Pune, performance tuning India,
OptixDigitalAI software engineers, top development company Pune, technology agency India,
AI integration services Pune, IoT app development India, blockchain solutions Pune,
API-first development India, cloud hosting Pune, scalable infrastructure India,
serverless app development Pune, web performance optimization India,
OptixDigitalAI coding experts, modern web technology Pune, app design and development India,
secure mobile app Pune, UX-driven development India, top developers Pune,
custom backend architecture India, agile development Pune, software innovation India,
app deployment Pune, code optimization India, digital product engineering Pune,
OptixDigitalAI Pune developers, OptixDigitalAI India tech team, app development company Pune,
global development agency India, technology-driven web solutions Pune
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
        "availableLanguage": ["English"]
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
