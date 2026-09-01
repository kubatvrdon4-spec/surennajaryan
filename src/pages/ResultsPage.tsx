import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function ResultsPage() {
  return (
    <main>
      <Seo title="Výsledky a reference" description="Jak Suren Najaryan sleduje reálný pokrok klientů bez prázdných slibů a falešných statistik." path="/vysledky-a-reference" />
      <PageHero index="05" eyebrow="Výsledky a reference" title="Pokrok musí být skutečný, ne jen dobře vyfocený." intro="Každý cíl vyžaduje jiné měřítko. Proto sledujeme konkrétní změny v technice, síle, kondici a jistotě pohybu — podle toho, na čem pracujete." />
      <section className="results-principles section-shell">
        <div className="section-title-row"><span className="section-index">02</span><div><p className="eyebrow">Co vyhodnocujeme</p><h2>Výsledek má více než jednu podobu.</h2></div></div>
        <div className="pillar-list three-columns"><article><span>01</span><h3>Pohyb a technika</h3><p>Jistější provedení, lepší rozsah a kontrola pohybu.</p></article><article><span>02</span><h3>Výkon a kondice</h3><p>Schopnost zvládat větší zátěž, objem nebo tempo bez ztráty kvality.</p></article><article><span>03</span><h3>Vztah k tréninku</h3><p>Pravidelnost a samostatnost, které drží výsledky i mimo jednu lekci.</p></article></div>
      </section>
      <aside className="honesty-note"><span>Proč zde nejsou příběhy klientů?</span><p>Konkrétní fotografie, proměny a reference zveřejním pouze se souhlasem klientů a s pravdivým kontextem. Dokud takové podklady nejsou potvrzené, nebudu je nahrazovat anonymními citáty ani ilustračními výsledky.</p></aside>
      <CtaBand title="Váš plán začneme podle vaší výchozí situace." />
    </main>
  );
}
