// CareerpageView.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import CareerHero from "../career/CareerHero";
import Hiring from "../career/Hiring";
import ErrorBoundary from "../base/ErrorBoundary";

const CareerpageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/career";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title =
    "Join OptixDigitalAI | Careers & Job Opportunities in Digital Tech";
  const description =
    "Join OptixDigitalAI a leading creative technology and AI-driven digital agency based in Pune, India. Explore exciting career opportunities in web development, app design, branding, AI innovation, and digital marketing. Grow your career with a global team shaping the future of technology and creativity.";

  const keywords = `
OptixDigitalAI careers, OptixDigitalAI jobs, OptixDigitalAI hiring, careers at Optix Digital AI,
OptixDigitalAI Pune jobs, digital agency hiring Pune, work with OptixDigitalAI, join Optix Digital AI team,
career growth at OptixDigitalAI, software company careers India, creative technology agency jobs,
web development jobs Pune, web designer jobs Pune, front end developer Pune, back end developer jobs Pune,
React developer Pune, Next.js developer Pune, Node.js developer Pune, full stack developer Pune,
UI UX designer Pune, UX researcher Pune, product designer jobs Pune, creative designer Pune,
motion graphics jobs Pune, video editor Pune, branding agency careers Pune, graphic designer jobs Pune,
marketing agency jobs Pune, digital marketing jobs India, SEO executive Pune, PPC expert Pune,
social media marketing jobs Pune, content writer jobs Pune, content strategist Pune,
performance marketing jobs Pune, AI engineer jobs India, AI developer Pune, AI automation jobs,
machine learning engineer Pune, AI-powered marketing roles, data analyst Pune, data engineer Pune,
software engineer Pune, software tester Pune, QA engineer Pune, automation tester jobs Pune,
DevOps engineer Pune, cloud engineer Pune, AWS developer Pune, SaaS developer Pune,
WordPress developer Pune, Shopify developer Pune, eCommerce developer Pune, app developer Pune,
React Native developer Pune, Flutter developer Pune, mobile developer Pune, iOS developer Pune,
Android developer Pune, technology jobs Pune, IT company hiring Pune, tech jobs India,
remote tech jobs India, work from home tech jobs Pune, software internship Pune,
design internship Pune, marketing internship Pune, OptixDigitalAI internship, fresher jobs Pune,
fresher hiring India, startup jobs Pune, innovation-driven careers, career in AI and technology,
business development executive Pune, client relationship manager jobs, project manager Pune,
digital strategist jobs Pune, marketing executive Pune, HR executive Pune, recruiter Pune,
talent acquisition Pune, business analyst Pune, SaaS solutions careers, UX researcher India,
UI UX design jobs India, creative jobs Pune, creative technologist Pune, OptixDigitalAI team Pune,
OptixDigitalAI opportunities, global career opportunities, work culture OptixDigitalAI,
innovation careers Pune, top tech company Pune, AI-driven career India, web app developer Pune,
cloud web apps Pune, app design agency careers, UI UX studio Pune, digital consultancy Pune,
digital transformation jobs India, design and development careers Pune, digital growth jobs,
product management Pune, startup accelerator Pune, tech innovation Pune, creative thinkers Pune,
enterprise app development Pune, data-driven design Pune, next-gen digital careers,
AI automation engineer Pune, future-ready careers Pune, innovation lab Pune, creative professionals Pune,
global digital agency hiring, tech opportunity Pune, business growth careers Pune, Optix Digital AI Pune careers
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
  "@type": "WebPage",
  "name": "OptixDigitalAI Careers",
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
      "contactType": "HR / Recruitment",
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "${siteUrl}" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "${siteUrl}/about" },
 { "@type": "ListItem", "position": 3, "name": "Designing Services", "item": "${siteUrl}/services/designing" },
      { "@type": "ListItem", "position": 4, "name": "Development Services", "item": "${siteUrl}/services/development" },
      { "@type": "ListItem", "position": 5, "name": "Marketing Services", "item": "${siteUrl}/services/marketing" },
      { "@type": "ListItem", "position": 6, "name": "Pricing", "item": "${siteUrl}/portfolio" },
      { "@type": "ListItem", "position": 7, "name": "Pricing", "item": "${siteUrl}/pricing" },
      { "@type": "ListItem", "position": 8, "name": "Contact", "item": "${siteUrl}/contact" },
      { "@type": "ListItem", "position": 9, "name": "Career", "item": "${canonicalUrl}" }
    ]
  }
}
`}</script>
      </Helmet>

      {/* --- Actual Page Content --- */}
      <ErrorBoundary>
        <CareerHero />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hiring />
      </ErrorBoundary>
    </>
  );
};

export default CareerpageView;
