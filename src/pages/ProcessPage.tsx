import { Link } from "react-router-dom";
import { InteriorHero, InteriorFaq, ArrowIcon, WhatsAppButton } from "../components/Interior";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { getPageWhatsAppHref } from "../config/contact";
import { mealPlanOffer } from "../config/mealPlan";

export function ProcessPage() {
  return <main className="sn-interior ip-process">
    <Seo title="Jak probíhá spolupráce" description="Od první zprávy k osobnímu tréninku nebo jídelníčku na míru. Domluva, individuální postup a srozumitelné vedení se Surenem Najaryanem." path="/jak-probiha-spoluprace" image="/images/conditioning-1440.webp" />
    <InteriorHero eyebrow="Spolupráce se Surenem" title="Začněme" accent="společně." lead="Nemusíte mít všechno promyšlené." description="Stačí vědět, co chcete změnit. Společně vybereme směr, který zapadne do vašeho života." image="conditioning" imageAlt="Suren Najaryan při kondičním tréninku na stroji." variant="ip-cooperation-hero">
      <WhatsAppButton href={getPageWhatsAppHref("/jak-probiha-spoluprace")}>Napište mi svůj cíl</WhatsAppButton>
      <a className="ip-text-link" href="#prvni-krok">Jak to probíhá <ArrowIcon /></a>
    </InteriorHero>
    <section className="ip-container ip-process-steps" id="prvni-krok" aria-labelledby="steps-title">
      <div className="ip-wide-heading"><div><p className="ip-eyebrow">Od domluvy k prvnímu kroku</p><h2 id="steps-title" className="ip-display">Jasný začátek.<strong>Vlastní cesta.</strong></h2></div><p className="ip-body">Žádné složité přihlašování. Nejdřív krátká zpráva, potom konkrétní domluva.</p></div>
      <div className="ip-foundations ip-steps">
        <article><span className="ip-short-rule" aria-hidden="true" /><h3 className="ip-display">Napište<strong>svůj cíl.</strong></h3><p>Co chcete zlepšit a s čím potřebujete pomoct? Stačí pár vět o vás a vašich možnostech.</p></article>
        <article><span className="ip-short-rule" aria-hidden="true" /><h3 className="ip-display">Probereme<strong>možnosti.</strong></h3><p>Ujasníme si zaměření, rozsah a cenu. Navrhneme postup, který odpovídá vašemu zadání.</p></article>
        <article><span className="ip-short-rule" aria-hidden="true" /><h3 className="ip-display">Domluvíme<strong>začátek.</strong></h3><p>U tréninku vybereme první termín. U jídelníčku probereme podklady a domluvíme přípravu.</p></article>
      </div>
    </section>
    <section className="ip-process-options" aria-labelledby="cooperation-options"><div className="ip-container">
      <p className="ip-eyebrow">Podle toho, co potřebujete</p><h2 className="ip-display" id="cooperation-options">Pohyb. Strava.<strong>Nebo obojí.</strong></h2>
      <div className="ip-paths"><article><h3 className="ip-display">Osobní<strong>vedení</strong></h3><p>Správné provedení cviků, vhodná zátěž a zpětná vazba přímo při tréninku.</p><Link className="ip-text-link" to="/osobni-treninky">Prohlédnout tréninky <ArrowIcon diagonal /></Link><Link className="ip-text-link" to="/box-a-sebeobrana">Box a sebeobrana <ArrowIcon diagonal /></Link></article><article><h3 className="ip-display">Jídelníček<strong>na míru</strong></h3><p>Plán až na {mealPlanOffer.maxDurationMonths} měsíce pro hubnutí nebo nabírání s možností konzultace.</p><p className="ip-small-note">Cena individuálně. Příprava orientačně 7–10 dní.</p><Link className="ip-text-link" to="/jidelnicek">Prohlédnout jídelníček <ArrowIcon diagonal /></Link></article><figure><ResponsiveImage name="meal-prep" alt="Skutečná fotografie připravených porcí s rýží, čočkou a zeleninou." sizes="(max-width: 760px) 100vw, 400px" /></figure></div>
    </div></section>
    <InteriorFaq items={[
      { question: "Musím už vědět, jakou službu chci?", answer: "Nemusíte. Popište, čeho chcete dosáhnout. Společně probereme, jestli dává smysl začít tréninkem, jídelníčkem nebo jejich kombinací." },
      { question: "Mohu se během jídelníčku na něco zeptat?", answer: "Ano. Součástí je možnost konzultace po dobu jídelníčku. Po domluvě můžete probrat dotazy a to, jak vám plán vyhovuje." },
    ]} />
  </main>;
}
