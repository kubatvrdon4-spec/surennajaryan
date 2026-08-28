import { InquiryForm } from "../components/InquiryForm";
import { Seo } from "../components/Seo";
import { siteConfig } from "../config/site";

export function ContactPage() {
  return (
    <main>
      <Seo title="Kontakt" description="Nezávazná poptávka osobního tréninku se Surenem Najaryanem ve Form Factory Vinohradská." path="/kontakt" />
      <section className="contact-page">
        <div className="contact-intro"><span className="section-index">06</span><p className="eyebrow eyebrow-light">Kontakt</p><h1>Začněte krátkou zprávou.</h1><p>Vyberte svůj cíl a několik základních informací. Formulář připraví přirozenou zprávu, kterou můžete ve WhatsAppu ještě upravit.</p><div className="direct-contact"><span>Přímý kontakt</span><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><p>{siteConfig.location}<br />{siteConfig.locationDetail}</p></div></div>
        <InquiryForm compact />
      </section>
    </main>
  );
}
