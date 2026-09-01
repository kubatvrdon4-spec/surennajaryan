import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ResponsiveImage, type ImageName } from "./ResponsiveImage";
import { getWhatsAppHref } from "../config/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";
import "../pages/InteriorPages.css";

export { WhatsAppIcon } from "./WhatsAppIcon";

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

export function WhatsAppButton({ children = "Napište Surenovi", href = getWhatsAppHref() }: { children?: ReactNode; href?: string }) {
  return <a className="ip-button ip-whatsapp" href={href} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>{children}</span><ArrowIcon /></a>;
}

export function InteriorHero({ eyebrow, title, accent, lead, description, image, imageAlt, children, variant = "" }: {
  eyebrow: string; title: string; accent: string; lead: string; description: string;
  image: ImageName; imageAlt: string; children: ReactNode; variant?: string;
}) {
  return <section className={`ip-hero ${variant}`} aria-labelledby="page-title">
    <div className="ip-container ip-hero-inner">
      <div className="ip-hero-copy">
        <p className="ip-eyebrow">{eyebrow}</p>
        <h1 id="page-title" className="ip-display">{title}<strong>{accent}</strong></h1>
        <p className="ip-lead">{lead}</p><p className="ip-body">{description}</p>
        <div className="ip-actions">{children}</div>
      </div>
      <figure className="ip-hero-visual">
        <span className="ip-frame" aria-hidden="true" />
        <ResponsiveImage name={image} alt={imageAlt} eager sizes="(max-width: 760px) 100vw, 600px" className="ip-hero-photo" />
      </figure>
    </div>
  </section>;
}

export function InteriorFaq({ items }: { items: { question: string; answer: string }[] }) {
  return <section className="ip-container ip-faq" aria-labelledby="ip-faq-title">
    <div><p className="ip-eyebrow">Ještě před začátkem</p><h2 id="ip-faq-title" className="ip-display">Dobré<strong>vědět.</strong></h2></div>
    <div className="ip-faq-list">{items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
  </section>;
}

export function RelatedLink({ to, title, accent, description }: { to: string; title: string; accent: string; description: string }) {
  return <Link className="ip-related-link" to={to}><div><h3 className="ip-display">{title} <strong>{accent}</strong></h3><p>{description}</p></div><ArrowIcon diagonal /></Link>;
}
