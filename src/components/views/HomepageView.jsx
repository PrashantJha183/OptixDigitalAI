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
    "OptixDigitalAI delivers high-performance web and mobile app development along with expert digital marketing services in Pune, India, and worldwide. From scalable full-stack solutions to social media marketing, Google Ads, Meta Ads, and SEO we help brands grow through technology and creativity.";

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
PWA development Pune, technology consulting India, AI-powered development Pune,
automation solutions India, business web apps Pune, product engineering India,
UI UX integrated development Pune, responsive web apps India, CMS development Pune,
WordPress development India, Shopify development Pune, MERN stack developers India,
MEAN stack development Pune, Laravel developers India, Python developers Pune,
Django development India, cloud-based web apps Pune, mobile solutions India,
enterprise mobile app Pune, web portal development India, application modernization Pune,
full stack engineers India, software company Pune, custom CRM development India,
ERP development Pune, B2B web solutions India, startup development partner Pune,
MVP development India, SaaS platform Pune, real-time app development India,
database optimization Pune, performance tuning India, OptixDigitalAI software engineers,
top development company Pune, technology agency India, AI integration services Pune,
IoT app development India, blockchain solutions Pune, API-first development India,
cloud hosting Pune, scalable infrastructure India, serverless app development Pune,
web performance optimization India, OptixDigitalAI coding experts,
modern web technology Pune, app design and development India,
secure mobile app Pune, UX-driven development India, top developers Pune,
custom backend architecture India, agile development Pune, software innovation India,
app deployment Pune, code optimization India, digital product engineering Pune,
OptixDigitalAI Pune developers, OptixDigitalAI India tech team, global development agency India,
technology-driven web solutions Pune,

-- Digital Marketing & Social Media --
digital marketing services Pune, social media marketing Pune, SMM agency India,
Google Ads management Pune, Meta Ads experts India, Facebook Ads agency Pune,
Instagram marketing Pune, performance marketing Pune, PPC campaigns India,
Google Ads optimization Pune, YouTube marketing India, LinkedIn marketing Pune,
social media strategy India, content marketing Pune, digital brand growth India,
paid advertising Pune, SEO services India, SEO company Pune, keyword optimization Pune,
on-page SEO India, off-page SEO Pune, local SEO experts Pune, SEM agency India,
Google Partner agency Pune, marketing automation Pune, remarketing campaigns India,
retargeting ads Pune, influencer marketing Pune, brand awareness campaigns India,
marketing analytics Pune, conversion optimization India, landing page optimization Pune,
email marketing Pune, CRM marketing India, lead generation Pune, ROI marketing India,
digital media buying Pune, social ads management India, campaign reporting Pune,
marketing intelligence India, digital growth partner Pune, business advertising India,
creative social media Pune, ad creatives Pune, content design Pune, video marketing Pune,
reel ads optimization India, brand engagement Pune, omnichannel marketing India,
cross-platform ad campaigns Pune, B2B digital marketing India, ecommerce marketing Pune,
Google Search Ads Pune, Google Display Ads India, Meta ad campaigns Pune,
creative content marketing India, OptixDigitalAI digital marketing team Pune,
best social media agency Pune, digital marketing Pune India, AI-driven marketing solutions India,
OptixDigitalAI Meta Ads, OptixDigitalAI Google Ads, digital consultancy Pune, ad strategy India,
social media optimization Pune, paid media strategy India, content planning Pune,
campaign performance India, ROI-driven campaigns Pune, influencer collaboration India,
OptixDigitalAI marketing experts, OptixDigitalAI ad management Pune
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
        <meta name="revisit-after" content="1 day" />

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
     "https://www.facebook.com/optixdigitalai",
          "https://www.instagram.com/optixdigitalai"
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
        "availableLanguage": ["English"]
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
