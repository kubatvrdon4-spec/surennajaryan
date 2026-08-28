import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";

export function AboutPage() {
  return (
    <main>
      <Seo title="O mně" description="Poznejte Surena Najaryana, osobního fitness trenéra a bývalého MMA zápasníka ve Form Factory Vinohradská." path="/o-mne" />
      <PageHero index="03" eyebrow="O mně" title="Disciplína má smysl, když víte proč." intro="Jsem Suren Najaryan, osobní fitness trenér a bývalý MMA zápasník. Při vedení spojuji zkušenost se silovým tréninkem, pohybem a kondicí s klidným, srozumitelným přístupem." image="movement" imageAlt="Suren Najaryan při tréninku ve fitness centru" />
      <section className="story-section section-shell">
        <div className="story-lead"><span className="section-index">02</span><p className="eyebrow">Můj přístup</p><h2>Výsledky díky disciplíně a správnému vedení.</h2></div>
        <div className="story-copy"><p>Disciplína pro mě neznamená bezhlavě překonávat bolest nebo cvičit za každou cenu. Znamená dělat dlouhodobě správné věci, rozumět technice a vědět, kdy přidat a kdy naopak upravit směr.</p><p>Zápasnická zkušenost mě naučila respektu k přípravě, detailu a práci pod tlakem. V osobním tréninku tyto principy převádím do prostředí, kde je hlavním měřítkem váš cíl a vaše reálné možnosti.</p></div>
      </section>
      <section className="values-grid">
        <article><span>01</span><h3>Konkrétnost</h3><p>Víte, co děláme, proč to děláme a na co se soustředit.</p></article>
        <article><span>02</span><h3>Technika</h3><p>Kvalita pohybu má přednost před číslem na čince nebo rychlostí.</p></article>
        <article><span>03</span><h3>Kontinuita</h3><p>Plán se upravuje podle průběhu, ale drží jasný směr.</p></article>
      </section>
      <section className="wide-image-section"><ResponsiveImage name="conditioning" className="wide-image" alt="Suren Najaryan při kondičním cvičení" /><div><p className="eyebrow eyebrow-light">Kde trénuji</p><h2>Form Factory Vinohradská</h2><p>Osobní vedení v plně vybaveném fitness centru v Praze 2.</p></div></section>
      <CtaBand />
    </main>
  );
}
