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
    "Boost your brand awareness and conversions with OptixDigitalAI a results-driven digital marketing agency in Pune, India. We specialize in SEO, Google Ads, Meta Ads, content marketing, social media strategy, and performance marketing to grow your business locally and globally.";

  const keywords = `
OptixDigitalAI marketing, OptixDigitalAI digital marketing, OptixDigitalAI Pune marketing,
digital marketing agency Pune, digital marketing company India, online marketing experts,
SEO agency Pune, SEO company India, search engine optimization Pune, Google ranking experts,
local SEO Pune, on-page SEO India, off-page SEO Pune, technical SEO experts,
content marketing Pune, content writing agency India, blog strategy Pune, website content SEO India,
performance marketing Pune, PPC agency India, Google Ads company Pune, PPC campaign optimization India,
Meta Ads Pune, Facebook Ads management India, Instagram marketing Pune, Instagram Ads India,
social media marketing Pune, social media agency India, SMM experts Pune,
social media management Pune, social content creation India, social strategy Pune,
LinkedIn marketing India, YouTube marketing Pune, influencer marketing Pune, digital campaigns India,
Google Search Ads Pune, Google Display Ads India, remarketing campaigns Pune,
lead generation marketing India, conversion rate optimization Pune, CRO experts India,
brand awareness campaigns Pune, brand growth strategy India, creative marketing Pune,
email marketing Pune, drip campaigns India, marketing automation Pune, HubSpot experts India,
CRM marketing Pune, retargeting ads India, paid media strategy Pune, Google Tag Manager setup India,
Google Analytics 4 experts Pune, GA4 tracking India, data-driven marketing Pune,
marketing intelligence India, performance tracking Pune, ad campaign reporting India,
ROI marketing Pune, growth marketing India, startup marketing Pune, business promotion India,
digital ad creatives Pune, video marketing India, reel ads Pune, content optimization India,
website traffic growth Pune, keyword strategy India, SEO audit Pune, SEM company India,
Google Partner agency Pune, ad budget optimization India, competitor research Pune,
market analysis India, brand positioning Pune, creative branding India,
marketing consultancy Pune, digital growth partner India, online business promotion Pune,
B2B marketing Pune, B2C marketing India, ecommerce marketing Pune, Shopify marketing India,
WordPress marketing Pune, local business advertising India, small business marketing Pune,
corporate digital marketing India, enterprise marketing Pune, cross-platform ad campaigns India,
integrated marketing Pune, omnichannel marketing India, influencer collaborations Pune,
social brand engagement India, OptixDigitalAI SEO experts, OptixDigitalAI Google Ads,
OptixDigitalAI Meta Ads, OptixDigitalAI performance marketing, marketing automation tools Pune,
OptixDigitalAI content strategy, digital PR India, press release marketing Pune,
online reputation management Pune, ORM agency India, marketing funnel strategy Pune,
lead nurturing India, ad retargeting Pune, creative content writing India,
visual marketing Pune, brand storytelling India, campaign strategy Pune, 
ROI-driven advertising India, growth hacking Pune, top marketing agency India,
AI-powered marketing Pune, smart ad optimization India, marketing analytics Pune,
OptixDigitalAI digital team Pune, OptixDigitalAI growth experts India, 
marketing intelligence Pune, next-gen digital marketing India, social media campaigns Pune,
ads strategy India, marketing dashboard Pune, PPC remarketing India, 
creative marketing company Pune, online branding India, marketing success Pune,
best digital marketing company Pune, online growth agency India
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
