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
  const description = `
Discover OptixDigitalAI a global creative technology agency based in Pune, India, 
driving innovation through web development, mobile app design, AI-powered digital marketing, 
and brand transformation. Learn about our mission, vision, and values shaping the future 
of technology and creativity worldwide.
`;

  // 50+ SEO-optimized keywords
  const keywords = `OptixDigitalAI, Optix Digital AI, OptixDigitalAI Pune, OptixDigitalAI India, 
OptixDigitalAI company, about OptixDigitalAI, OptixDigitalAI team Pune, OptixDigitalAI vision, 
OptixDigitalAI mission, OptixDigitalAI values, OptixDigitalAI global clients, OptixDigitalAI services, 
creative technology agency, digital agency India, digital agency Pune, top digital agency Pune, 
global digital agency, leading tech agency India, modern tech agency India, 
creative tech agency, innovation agency India, digital innovation agency, 
AI web agency, AI marketing agency, AI automation Pune, AI-driven marketing solutions, 
AI-powered branding Pune, AI tools for business, AI-powered marketing, 
AI web development India, AI-driven design, AI digital solutions India, 
AI marketing agency Pune, AI web design India, data-driven marketing Pune, 
data-driven marketing India, marketing intelligence firm Pune, marketing automation Pune, 
marketing analytics Pune, marketing consultancy Pune, marketing intelligence, 
performance marketing India, performance marketing Pune, PPC advertising, PPC agency Pune, 
SEO experts, SEO company Pune, local SEO Pune, website SEO Pune, SEO optimization Pune, 
social media marketing, social media agency Pune, online advertising Pune, 
digital consultancy, digital consultancy Pune, digital strategy, 
digital transformation, digital transformation agency India, 
digital growth partner, digital growth experts India, digital excellence Pune, 
digital creatives Pune, digital innovation Pune, digital solutions Pune, 
creative studio Pune, design studio Pune, creative branding, creative branding Pune, 
branding agency Pune, branding experts, branding experts Pune, 
tech-driven branding, online branding Pune, brand strategy, brand strategy experts Pune, 
holistic digital marketing, content marketing, content marketing Pune, 
business growth, business growth with AI, online business growth, business automation Pune, 
innovation-led design Pune, innovation lab Pune, innovation agency Pune, 
cloud web apps, cloud app developers Pune, cloud web development, 
website design Pune, custom website design India, web design and development India, 
web design experts, web designers Pune, responsive web apps, 
custom web design, website redesign Pune, website optimization, web optimization company Pune, 
web presence optimization, web app developers, web app developers Pune, 
web development company, web development company Pune, website development India, 
web development India, full stack developers, full stack developers India, 
full stack agency Pune, full stack web design Pune, software company India, 
software company Pune, software engineers, software developers Pune, software agency Pune, 
software development agency India, software development Pune, custom software Pune, 
custom web apps Pune, custom web solutions Pune, 
mobile app development, mobile app developers Pune, mobile app design Pune, 
mobile solutions Pune, app developers, app development company Pune, 
cross-platform apps India, enterprise app development Pune, SaaS apps, 
SaaS development Pune, startup digital agency Pune, startup web solutions India, 
startup accelerator Pune, startup solutions, startup solutions India, 
product design agency Pune, UI UX design, UI UX design Pune, UI UX design company India, 
UI UX experts Pune, user experience design Pune, UX research agency, UX research company India, 
graphic design Pune, creative UI design India, visual design Pune, 
eCommerce solutions, eCommerce development Pune, eCommerce website Pune, 
SaaS app development India, next-gen digital agency Pune, 
top marketing agency, top marketing agency Pune, B2B marketing, B2B marketing Pune, 
B2B marketing solutions Pune, IT company Pune, tech consultancy, tech consultancy Pune, 
technology consultancy Pune, technology agency India, technology experts Pune, 
software solutions Pune, global innovation company India, 
enterprise solutions Pune, business automation India, 
data-driven design, creative technology experts Pune, 
design and technology, design and innovation India, 
creative solutions Pune, creative technology India, 
OptixDigitalAI creative solutions, OptixDigitalAI global presence, 
OptixDigitalAI innovation, OptixDigitalAI AI solutions, 
OptixDigitalAI digital marketing, OptixDigitalAI software development, 
OptixDigitalAI branding, OptixDigitalAI web design, OptixDigitalAI mobile apps, 
OptixDigitalAI ecommerce, OptixDigitalAI business solutions, 
OptixDigitalAI India team, OptixDigitalAI Pune office, OptixDigitalAI tech experts, 
global creative agency, global technology agency, international web design agency, 
international app development, India web app developers, Pune creative agency, 
Pune web design experts, Pune app developers, Pune software company, 
Pune technology consultancy, Pune digital marketing experts, 
OptixDigitalAI digital growth, OptixDigitalAI design innovation, 
Pune IT professionals, Indian software company, Indian digital agency, 
creative business solutions India, business innovation Pune, 
digital excellence India, next-gen web solutions, 
web and app solutions India, AI digital transformation India, 
creative innovation India, digital marketing experts Pune, 
web development India agency, OptixDigitalAI design team, 
OptixDigitalAI innovation team, creative tech India, 
digital future India, OptixDigitalAI success stories, 
digital marketing India, creative design India, branding India`;

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
        "availableLanguage": ["English"]
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
