import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";

export function TrainingPage() {
  return (
    <main>
      <Seo title="Osobní tréninky" description="Individuální silový trénink, redukce, kondice, mobilita a správná technika s osobním trenérem v Praze." path="/osobni-treninky" />
      <PageHero index="01" eyebrow="Osobní tréninky" title="Plán postavený na vašem těle a vašem cíli." intro="Od prvního pohybu po dlouhodobý progres. Trénink upravuji podle vaší úrovně, techniky, možností a toho, co chcete opravdu změnit." image="training" imageAlt="Suren Najaryan během silového tréninku" />
      <section className="service-pillars section-shell">
        <div className="section-title-row"><span className="section-index">02</span><div><p className="eyebrow">Zaměření</p><h2>Výsledek není jedna metoda.</h2></div></div>
        <div className="pillar-list">
          <article><span>01</span><h3>Hubnutí a tvarování</h3><p>Trénink, který spojuje výdej, sílu a udržitelný postup bez náhodného střídání cviků.</p></article>
          <article><span>02</span><h3>Svaly a síla</h3><p>Technicky přesná práce se zátěží, postupné navyšování nároků a kontrola provedení.</p></article>
          <article><span>03</span><h3>Kondice</h3><p>Lepší pracovní kapacita a odolnost, které využijete při sportu i v běžném dni.</p></article>
          <article><span>04</span><h3>Pohyb bez slabých míst</h3><p>Mobilita, stabilita a správné pohybové vzory jako součást každého smysluplného plánu.</p></article>
        </div>
      </section>
      <section className="editorial-split">
        <ResponsiveImage name="conditioning" className="editorial-split-media" alt="Kontrolovaný kondiční trénink se Surenem Najaryanem" />
        <div className="editorial-split-copy"><p className="eyebrow eyebrow-light">Profesionální začátek</p><h2>Nejdřív zjistit. Potom zatížit.</h2><p>Úvodní diagnostika pomůže odhalit, jak se pohybujete, kde chybí stabilita nebo mobilita a na co se v technice zaměřit. Z těchto informací vznikne plán, ne další obecná sestava z internetu.</p><ul><li>posouzení aktuálního pohybu,</li><li>nastavení realistických priorit,</li><li>volba cviků a bezpečné zátěže,</li><li>průběžná úprava podle pokroku.</li></ul></div>
      </section>
      <CtaBand />
    </main>
  );
}
