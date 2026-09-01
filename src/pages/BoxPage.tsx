import { Link } from "react-router-dom";
import { InteriorHero, InteriorFaq, WhatsAppButton, ArrowIcon } from "../components/Interior";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { boxingMessage, getWhatsAppHref } from "../config/contact";

export function BoxPage() {
  const href = getWhatsAppHref(boxingMessage);
  return <main className="sn-interior ip-boxing">
    <Seo title="Box a sebeobrana" description="Individuální trénink základů boxu, kondice a sebeobrany se Surenem Najaryanem. Postup podle vašich zkušeností, od prvního postoje." path="/box-a-sebeobrana" image="/images/boxing-1440.webp" />
    <InteriorHero eyebrow="Box a sebeobrana · Individuálně" title="Box" accent="a sebeobrana." lead="Jistota začíná technikou." description="Naučte se lépe hýbat, reagovat a pracovat s vlastním tělem. Základy stavíme postupně podle vašich zkušeností." image="boxing" imageAlt="Ilustrační fotografie černých boxerských rukavic a modrých bandáží." variant="ip-equipment-hero">
      <WhatsAppButton href={href}>Domluvit trénink boxu</WhatsAppButton>
      <a className="ip-text-link" href="#box-zamereni">Co budeme trénovat <ArrowIcon /></a>
    </InteriorHero>
    <section className="ip-container ip-box-foundations" id="box-zamereni" aria-labelledby="boxing-focus-title">
      <div className="ip-wide-heading"><div><p className="ip-eyebrow">Pevné základy</p><h2 id="boxing-focus-title" className="ip-display">Pohyb pod<strong>kontrolou.</strong></h2></div><p className="ip-body">Nejdřív přesnost. Potom tempo. Jednotlivé dovednosti skládáme do smysluplného celku.</p></div>
      <div className="ip-foundations">
        <article><span className="ip-short-rule" aria-hidden="true" /><h3 className="ip-display">Boxerská<strong>technika</strong></h3><p>Postoj, práce nohou, základní údery a kryty. S důrazem na koordinaci a správné provedení.</p></article>
        <article><span className="ip-short-rule" aria-hidden="true" /><h3 className="ip-display">Kondice<strong>a reakce</strong></h3><p>Výdrž, rytmus a soustředění. Tempo upravíme tak, abyste zvládali pohyb s kontrolou.</p></article>
        <article><span className="ip-short-rule" aria-hidden="true" /><h3 className="ip-display">Principy<strong>sebeobrany</strong></h3><p>Vnímání situace, bezpečný odstup a klidnější reakce. Prioritou je vyhnout se konfliktu.</p></article>
      </div>
    </section>
    <section className="ip-story-band"><div className="ip-container ip-split">
      <figure className="ip-editorial-photo ip-box-coach"><ResponsiveImage name="portrait" alt="Suren Najaryan, který má zkušenosti s boxem i MMA." sizes="(max-width: 760px) 100vw, 520px" /><span aria-hidden="true" /></figure>
      <div className="ip-split-copy"><p className="ip-eyebrow">Trénujete se Surenem</p><h2 className="ip-display">Zkušenosti.<strong>Váš vlastní rytmus.</strong></h2><p className="ip-body">Věnoval jsem se boxu i MMA. Vaše zkušenosti, tempo a cíl ale určují, jak bude společný trénink vypadat.</p><Link className="ip-text-link ip-inline-action" to="/o-mne">Více o mně <ArrowIcon diagonal /></Link></div>
    </div></section>
    <InteriorFaq items={[
      { question: "Je trénink vhodný i pro úplné začátečníky?", answer: "Ano. Začneme postojem, pohybem a základní technikou. Předchozí zkušenost s bojovými sporty není podmínkou." },
      { question: "Jak domluvíme místo, termín a cenu?", answer: "Po krátké zprávě probereme zaměření a vaše možnosti. Místo, termín i cenu si potvrdíme předem." },
    ]} />
  </main>;
}
