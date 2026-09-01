import { useState } from "react";
import { ArrowIcon, WhatsAppButton, WhatsAppIcon } from "../components/Interior";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { siteConfig } from "../config/site";
import { contactSubjects, getInquiryHref, getPageWhatsAppHref } from "../config/contact";

export function ContactPage() {
  const [subject, setSubject] = useState<string>("training");
  const [note, setNote] = useState("");
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location + ", Praha 3")}`;

  return <main className="sn-interior ip-contact">
    <Seo title="Kontakt" description="Domluvte si trénink nebo jídelníček se Surenem Najaryanem. WhatsApp a telefon +420 608 662 088. Form Factory Vinohradská, Praha 3." path="/kontakt" image="/images/portrait-1440.webp" />
    <section className="ip-container ip-contact-main" aria-labelledby="page-title">
      <div className="ip-contact-intro"><p className="ip-eyebrow">Kontakt · Suren Najaryan</p><h1 id="page-title" className="ip-display">Domluvíme<strong>se.</strong></h1><p className="ip-lead">První krok je krátká zpráva.</p><p className="ip-body">Trénink, jídelníček nebo jen otázka. Napište mi, co máte na mysli, a probereme možnosti.</p><div className="ip-actions"><WhatsAppButton href={getPageWhatsAppHref("/kontakt")}>Napsat na WhatsApp</WhatsAppButton></div>
        <div className="ip-direct-contact"><div><span>Raději zavoláte?</span><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}<ArrowIcon diagonal /></a></div><div><span>E-mail</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowIcon diagonal /></a></div></div>
      </div>
      <div className="ip-message-panel" aria-labelledby="message-title">
        <p className="ip-eyebrow">Stačí pár slov</p><h2 id="message-title" className="ip-display">S čím vám<strong>pomůžu?</strong></h2>
        <p className="ip-body">Vyberte téma a připravte si zprávu.</p>
        <label className="ip-field"><span>Zajímá mě</span><select value={subject} onChange={(event) => setSubject(event.target.value)}>{contactSubjects.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
        <label className="ip-field"><span>Co byste chtěli změnit? <small>Volitelné</small></span><textarea rows={4} maxLength={500} value={note} onChange={(event) => setNote(event.target.value)} placeholder="Např. chci začít cvičit a mohu dvakrát týdně večer." /></label>
        <a className="ip-button ip-whatsapp" href={getInquiryHref(subject, note)} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>Otevřít zprávu ve WhatsAppu</span><ArrowIcon /></a>
        <p className="ip-small-note">Zpráva se neodešle automaticky. Ve WhatsAppu ji můžete ještě upravit a teprve potom odeslat.</p>
      </div>
    </section>
    <section className="ip-contact-location" aria-labelledby="location-title"><div className="ip-container ip-split">
      <figure className="ip-editorial-photo ip-contact-gym"><ResponsiveImage name="movement" alt="Suren při tréninku ve fitness centru, v pozadí řada běžeckých pásů." sizes="(max-width: 760px) 100vw, 570px" /><span aria-hidden="true" /></figure>
      <div className="ip-split-copy"><p className="ip-eyebrow">Osobní tréninky v Praze</p><h2 id="location-title" className="ip-display">Form Factory<strong>Vinohradská.</strong></h2><p className="ip-body">{siteConfig.locationDetail}. Konkrétní termín si potvrdíme předem.</p><a className="ip-text-link ip-inline-action" href={mapsHref} target="_blank" rel="noreferrer">Zobrazit místo na mapě <ArrowIcon diagonal /></a></div>
    </div></section>
  </main>;
}
