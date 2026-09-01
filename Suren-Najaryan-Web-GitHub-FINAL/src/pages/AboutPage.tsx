import { useRef } from "react";
import { Link } from "react-router-dom";
import { InteriorHero, ArrowIcon, WhatsAppButton } from "../components/Interior";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";

export function AboutPage() {
  const certificate = useRef<HTMLDialogElement>(null);
  return <main className="sn-interior ip-about">
    <Seo title="O mně" description="Suren Najaryan: více než 30 let zkušeností se cvičením, zkušenosti s boxem a MMA a rekvalifikace Trenér kulturistiky v programu akreditovaném MŠMT." path="/o-mne" image="/images/portrait-1440.webp" />
    <InteriorHero eyebrow="Osobní fitness trenér · Praha" title="Suren" accent="Najaryan." lead="Zkušenosti, které předávám dál." description="Cvičení se věnuji více než 30 let. Zkušenosti ze silového tréninku, boxu i MMA dnes předávám svým klientům." image="portrait" imageAlt="Portrét osobního trenéra Surena Najaryana." variant="ip-portrait-hero">
      <WhatsAppButton>Pojďme probrat váš cíl</WhatsAppButton>
      <a className="ip-text-link" href="#muj-pristup">Můj přístup <ArrowIcon /></a>
    </InteriorHero>
    <section className="ip-container ip-about-story" id="muj-pristup" aria-labelledby="approach-title">
      <div><p className="ip-eyebrow">Každý začíná jinde</p><h2 id="approach-title" className="ip-display">Vaše tempo.<strong>Jasný směr.</strong></h2></div>
      <div className="ip-about-story-copy"><p className="ip-lead">Každý člověk je individuální.<br />Stejně tak musí vypadat jeho trénink.</p><p className="ip-body">Probereme vaše zkušenosti, cíl a možnosti. Techniku vysvětlím, nastavím vhodnou zátěž a při cvičení vás povedu.</p></div>
    </section>
    <section className="ip-qualification" aria-labelledby="qualification-title"><div className="ip-container ip-qualification-inner">
      <div className="ip-qualification-heading"><p className="ip-eyebrow">Odborný základ</p><h2 id="qualification-title" className="ip-display">Praxe<strong>i vzdělání.</strong></h2><p className="ip-body">Dlouholeté zkušenosti se cvičením doplňuji absolvovanou trenérskou rekvalifikací.</p></div>
      <div className="ip-credential"><span className="ip-short-rule" aria-hidden="true" /><p className="ip-eyebrow">Osvědčení o rekvalifikaci</p><h3 className="ip-display">Trenér<strong>kulturistiky</strong></h3><p>Vzdělávací program akreditovaný MŠMT.</p><dl><div><dt>Rozsah studia</dt><dd>100 hodin teorie · 50 hodin praxe</dd></div><div><dt>Závěrečná zkouška</dt><dd>27. října 2025</dd></div></dl><button className="ip-text-link ip-certificate-open" type="button" onClick={() => certificate.current?.showModal()}>Prohlédnout osvědčení <ArrowIcon diagonal /></button></div>
    </div></section>
    <section className="ip-container ip-about-place"><figure className="ip-editorial-photo ip-about-place-photo"><ResponsiveImage name="process" alt="Suren Najaryan během tréninku ve fitness centru." sizes="(max-width: 760px) 100vw, 570px" /></figure><div><p className="ip-eyebrow">Potkáme se v posilovně</p><h2 className="ip-display">Form Factory<strong>Vinohradská.</strong></h2><p className="ip-body">Osobní tréninky v Praze 3 — Vinohradech. Napište mi, čeho chcete dosáhnout, a probereme první společný trénink.</p><Link className="ip-text-link ip-inline-action" to="/kontakt">Kontakt a domluva <ArrowIcon diagonal /></Link></div></section>
    <dialog className="ip-certificate-dialog" ref={certificate} aria-labelledby="certificate-title" onClick={(event) => { if (event.target === event.currentTarget) certificate.current?.close(); }}>
      <div className="ip-certificate-toolbar"><h2 id="certificate-title">Osvědčení o rekvalifikaci</h2><button type="button" autoFocus onClick={() => certificate.current?.close()} aria-label="Zavřít osvědčení">Zavřít <span aria-hidden="true">×</span></button></div>
      <img src="/images/suren-osvedceni.webp" width="899" height="1599" alt="Osvědčení Surena Najaryana o rekvalifikaci Trenér kulturistiky, závěrečná zkouška 27. října 2025." loading="lazy" />
    </dialog>
  </main>;
}
