import { useEffect } from "react";
import { siteConfig } from "../config/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
}

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.name}`;
    const canonicalUrl = `${window.location.origin}${path}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: "og:image", content: `${window.location.origin}/images/hero-1440.webp` });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector<HTMLScriptElement>("#suren-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "suren-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      worksFor: {
        "@type": "HealthClub",
        name: siteConfig.location,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Praha",
          addressCountry: "CZ",
        },
      },
      url: canonicalUrl,
    });
  }, [description, path, title]);

  return null;
}
