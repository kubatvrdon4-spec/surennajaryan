import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function BoxPage() {
  return (
    <main>
      <Seo title="Box a sebeobrana" description="Základy boxu, koordinace, kondice a praktické principy sebeobrany s bývalým MMA zápasníkem v Praze." path="/box-a-sebeobrana" />
      <PageHero index="02" eyebrow="Box a sebeobrana" title="Technika, klid a jistota v pohybu." intro="Naučíte se základní postoj, pohyb, práci rukou a praktické reakce. Bez chaosu a bez tlaku na výkon, který neodpovídá vaší úrovni." />
      <section className="combat-grid section-shell">
        <div className="combat-word" aria-hidden="true">MOVE</div>
        <div className="combat-intro"><p className="eyebrow">Co trénujeme</p><h2>Od postoje k přirozené reakci.</h2><p>Jednotlivé prvky skládáme postupně, aby technika zůstala pod kontrolou i ve vyšším tempu.</p></div>
        <div className="combat-list">
          <article><span>01</span><h3>Postoj a pohyb</h3><p>Stabilní základ, práce nohou, vzdálenost a rovnováha.</p></article>
          <article><span>02</span><h3>Technika boxu</h3><p>Základní údery, kryty, koordinace a jejich čisté spojování.</p></article>
          <article><span>03</span><h3>Kondice</h3><p>Tempo, výdrž a schopnost udržet techniku i při rostoucí zátěži.</p></article>
          <article><span>04</span><h3>Principy sebeobrany</h3><p>Vnímání situace, bezpečný odstup a praktické reakce bez zbytečných gest.</p></article>
        </div>
      </section>
      <section className="quote-band"><p>„Zkušenost z MMA používám jako základ disciplíny, koordinace a práce pod tlakem. Samotný trénink ale stavím podle člověka přede mnou.“</p><span>— Suren Najaryan</span></section>
      <CtaBand title="Chcete se v pohybu cítit jistěji?" />
    </main>
  );
}
