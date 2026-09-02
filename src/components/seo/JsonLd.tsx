import { SITE_CONFIG } from "@/lib/constants";

interface JsonLdProps {
  type?: "home" | "product" | "faq" | "article" | "howto" | "breadcrumb";
  data?: any;
}

export default function JsonLd({ type = "home", data }: JsonLdProps) {
  // Global base Organization and WebSite schema
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        "name": SITE_CONFIG.name,
        "alternateName": SITE_CONFIG.shortName,
        "url": SITE_CONFIG.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_CONFIG.url}/logo.png`,
          "caption": "Streamora IPTV"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": SITE_CONFIG.supportEmail,
          "contactType": "customer service",
          "availableLanguage": ["English", "French", "Spanish"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_CONFIG.address.street,
          "addressLocality": SITE_CONFIG.address.city,
          "addressRegion": SITE_CONFIG.address.province,
          "postalCode": SITE_CONFIG.address.postalCode,
          "addressCountry": "CA"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        "url": SITE_CONFIG.url,
        "name": SITE_CONFIG.name,
        "description": SITE_CONFIG.description,
        "publisher": {
          "@id": `${SITE_CONFIG.url}/#organization`
        }
      },
      {
        "@type": "Product",
        "@id": `${SITE_CONFIG.url}/#product`,
        "name": "Streamora IPTV Premium Subscription",
        "image": `${SITE_CONFIG.url}/og-image.jpg`,
        "description": "Streamora IPTV premium subscription featuring 25,000+ live 4K & FHD TV channels, 120,000+ movies & TV series VOD, and anti-freeze streaming technology.",
        "brand": {
          "@type": "Brand",
          "name": "Streamora IPTV"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": SITE_CONFIG.rating.value.toString(),
          "reviewCount": SITE_CONFIG.rating.count.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "19.00",
          "highPrice": "79.00",
          "offerCount": "3",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  if (type === "home" && !data) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
      />
    );
  }

  const customSchema = {
    "@context": "https://schema.org",
    ...(data || {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }}
    />
  );
}
