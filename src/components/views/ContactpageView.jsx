import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../contact/Contact";
import ErrorBoundary from "../base/ErrorBoundary";

const ContactpageView = () => {
  const siteUrl = "https://optixdigitalai.com";
  const pagePath = "/contact";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const title =
    "Contact OptixDigitalAI | Get in Touch with Our Digital Experts";
  const description =
    "Get in touch with OptixDigitalAI Pune’s leading creative digital agency specializing in web development, app design, branding, SEO, and AI-driven marketing. Contact our expert team in India to discuss your project, request a quote, or start your digital transformation today.";

  const keywords = `
OptixDigitalAI contact, contact OptixDigitalAI, contact Optix Digital AI, OptixDigitalAI Pune contact,
OptixDigitalAI India contact, get in touch with OptixDigitalAI, reach OptixDigitalAI team,
OptixDigitalAI phone number, OptixDigitalAI email address, OptixDigitalAI office address,
OptixDigitalAI customer support, OptixDigitalAI helpdesk, OptixDigitalAI business inquiries,
contact web development company Pune, contact app development company India,
contact digital agency Pune, contact creative agency India, IT company contact Pune,
software development company contact India, OptixDigitalAI support Pune,
OptixDigitalAI technical support, OptixDigitalAI customer care Pune, client support OptixDigitalAI,
project consultation OptixDigitalAI, business collaboration Pune, startup partnership Pune,
digital consultancy contact Pune, AI web agency contact India, UI UX design contact Pune,
branding agency contact India, marketing agency contact Pune, SEO agency contact India,
performance marketing contact Pune, PPC agency contact India, creative studio Pune contact,
contact OptixDigitalAI for website design, contact for app development Pune,
request a project quote OptixDigitalAI, book consultation OptixDigitalAI,
start a project with OptixDigitalAI, partner with OptixDigitalAI, collaborate with OptixDigitalAI,
hire OptixDigitalAI, hire web developers Pune, hire designers India,
hire digital marketers Pune, hire SEO specialists India, hire branding experts Pune,
contact OptixDigitalAI sales, OptixDigitalAI marketing inquiries, OptixDigitalAI client partnerships,
OptixDigitalAI business proposal, OptixDigitalAI feedback, OptixDigitalAI contact form,
connect with OptixDigitalAI team Pune, contact Optix Digital AI India,
creative technology agency contact Pune, global digital agency contact India,
digital growth consultation Pune, tech consultancy contact Pune,
website inquiry Pune, mobile app inquiry India, startup digital agency contact Pune,
digital marketing contact Pune, branding contact Pune, social media marketing contact India,
AI automation contact Pune, SaaS product consultation India, software consultation Pune,
enterprise solutions contact Pune, innovation agency contact India,
OptixDigitalAI chatbot support, OptixDigitalAI Pune office, OptixDigitalAI location,
digital agency Pune contact details, IT company Pune contact details,
contact OptixDigitalAI India office, connect with web experts Pune,
connect with design team Pune, contact OptixDigitalAI for partnership,
business collaboration India, global business inquiries OptixDigitalAI,
digital strategy contact Pune, AI-driven marketing contact Pune,
OptixDigitalAI new project contact, contact for quotation Pune, OptixDigitalAI official contact
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

        {/* --- Schema.org Structured Data --- */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7420807072",
        "contactType": "customer support",
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
      "@type": "ContactPage",
      "@id": "${canonicalUrl}#contact",
      "name": "Contact OptixDigitalAI",
      "url": "${canonicalUrl}",
      "inLanguage": "en",
      "mainEntity": {
        "@id": "${siteUrl}#organization"
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
          { "@type": "ListItem", "position": 8, "name": "Contact", "item": "${canonicalUrl}" }
        ]
      }
    }
  ]
}
`}</script>
      </Helmet>

      {/* --- Page Content --- */}
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
    </>
  );
};

export default ContactpageView;
