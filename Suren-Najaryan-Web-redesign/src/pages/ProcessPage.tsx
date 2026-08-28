import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function ProcessPage() {
  return (
    <main>
      <Seo title="Jak probíhá spolupráce" description="Od první domluvy přes diagnostiku a plán až po pravidelný trénink a průběžné vedení." path="/jak-probiha-spoluprace" />
      <PageHero index="04" eyebrow="Průběh spolupráce" title="Jasný začátek. Smysluplný postup." intro="Nemusíte přesně vědět, jak trénovat. Od toho je vedení. Stačí popsat, co chcete změnit a jaká je vaše současná situace." />
      <section className="timeline section-shell">
        <article><span className="timeline-number">01</span><div><p className="eyebrow">Nezávazná domluva</p><h2>Nejdřív si ujasníme směr.</h2><p>Přes WhatsApp stručně popíšete svůj cíl, zkušenost a časové možnosti. Navážeme krátkou domluvou, zda vám můj způsob vedení dává smysl.</p></div></article>
        <article><span className="timeline-number">02</span><div><p className="eyebrow">Diagnostika a konzultace</p><h2>Zjistíme, odkud vycházíme.</h2><p>Probereme historii tréninku a podíváme se na pohyb, stabilitu, mobilitu a techniku. Bez hodnocení — jde o informace pro správné nastavení.</p></div></article>
        <article><span className="timeline-number">03</span><div><p className="eyebrow">Nastavení plánu</p><h2>Zvolíme priority a správnou zátěž.</h2><p>Určíme, čemu se věnovat nejdřív, jak často pracovat a jak bude vypadat postup směrem k vašemu cíli.</p></div></article>
        <article><span className="timeline-number">04</span><div><p className="eyebrow">Trénink a vedení</p><h2>Pracujeme, sledujeme, upravujeme.</h2><p>Každý trénink má jasný účel. Průběžně sledujeme techniku, výkonnost a to, jak plán funguje v reálném životě.</p></div></article>
      </section>
      <section className="expectations"><div><p className="eyebrow eyebrow-light">Co můžete čekat</p><h2>Žádné zkratky. Žádný chaos.</h2></div><ul><li>srozumitelné vysvětlení techniky,</li><li>trénink podle vaší úrovně,</li><li>průběžnou zpětnou vazbu,</li><li>postup, který lze dlouhodobě udržet.</li></ul></section>
      <CtaBand />
    </main>
  );
}
