import { Link } from "react-router-dom";
import { InteriorHero, InteriorFaq, RelatedLink, ArrowIcon, WhatsAppButton } from "../components/Interior";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { getWhatsAppHref } from "../config/contact";

const focusAreas = [
  { id: "osobni-trenink", title: "Osobní", accent: "trénink", text: "Začínáte, vracíte se po pauze, nebo chcete cvičit lépe? Zaměříme se na techniku, vhodné cviky a jistotu při každém opakování.", tags: "Technika · Individuální vedení · Vlastní tempo", message: "osobní trénink" },
  { id: "redukce-a-kondice", title: "Redukce", accent: "a kondice", text: "Pro lehčí tělo a lepší výdrž. Propojíme silový trénink s kondiční přípravou a nastavíme zátěž, kterou dokážete postupně zvládat.", tags: "Kondice · Pravidelnost · Změna postavy", message: "trénink zaměřený na redukci a kondici" },
  { id: "sila-a-svaly", title: "Síla", accent: "a svaly", text: "Dejte svému úsilí v posilovně jasný směr. Budeme pracovat na správném provedení, přiměřené zátěži a postupném zvyšování nároků.", tags: "Síla · Svalová hmota · Kontrola pohybu", message: "trénink zaměřený na sílu a svaly" },
];

export function TrainingPage() {
  return <main className="sn-interior ip-training">
    <Seo title="Moje služby — osobní tréninky" description="Osobní trénink, redukce, kondice a budování síly se Surenem Najaryanem ve Form Factory Vinohradská, Praha 3." path="/osobni-treninky" image="/images/movement-1440.webp" />
    <InteriorHero eyebrow="Osobní vedení · Praha 3" title="Osobní" accent="trénink." lead="Každý trénink má svůj smysl." description="Chcete začít, zlepšit kondici nebo zesílit? Trénink přizpůsobím vaší úrovni a nastavím jasný postup." image="movement" imageAlt="Suren Najaryan při kontrolovaném cvičení na kladkách.">
      <a className="ip-button ip-blue" href="#zamereni">Vybrat zaměření <ArrowIcon /></a>
      <Link className="ip-text-link" to="/jak-probiha-spoluprace">Jak začneme <ArrowIcon diagonal /></Link>
    </InteriorHero>
    <section className="ip-container ip-focus" id="zamereni" aria-labelledby="focus-title">
      <div className="ip-section-heading"><p className="ip-eyebrow">Kam se chcete posunout</p><h2 id="focus-title" className="ip-display">Trénink<strong>podle vás.</strong></h2><p className="ip-body">Tři směry. Vždy individuální přístup.</p></div>
      <div className="ip-focus-list">{focusAreas.map((item) => <article id={item.id} key={item.id}><div><h3 className="ip-display"><strong>{item.title}</strong> {item.accent}</h3><p className="ip-tags">{item.tags}</p></div><div><p>{item.text}</p><a className="ip-text-link" href={getWhatsAppHref(`Dobrý den, Surene, mám zájem o ${item.message}. Rád/a bych se domluvil/a na možnostech a prvním termínu.`)} target="_blank" rel="noreferrer">Probrat tento cíl <ArrowIcon diagonal /></a></div></article>)}</div>
    </section>
    <section className="ip-story-band"><div className="ip-container ip-split">
      <figure className="ip-editorial-photo ip-training-detail"><ResponsiveImage name="training" alt="Suren Najaryan při silovém tréninku na stroji." sizes="(max-width: 760px) 100vw, 560px" /><span aria-hidden="true" /></figure>
      <div className="ip-split-copy"><p className="ip-eyebrow">Společně v posilovně</p><h2 className="ip-display">Víte co.<strong>Víte proč.</strong></h2><p className="ip-body">Trénink není jen seznam cviků. Vysvětlím vám provedení, pomůžu nastavit zátěž a pohlídám techniku.</p><ul className="ip-check-list"><li>Vedení podle vašich zkušeností.</li><li>Srozumitelné vysvětlení každého cviku.</li><li>Postup podle toho, jak se zlepšujete.</li></ul><WhatsAppButton>Napsat o tréninku</WhatsAppButton></div>
    </div></section>
    <section className="ip-container ip-related" aria-label="Další možnosti spolupráce"><RelatedLink to="/jidelnicek" title="Jídelníček" accent="na míru" description="Podpořte svůj cíl i mimo posilovnu." /><RelatedLink to="/box-a-sebeobrana" title="Box" accent="a sebeobrana" description="Technika, koordinace a jistota v pohybu." /></section>
    <InteriorFaq items={[
      { question: "Můžu přijít, i když teprve začínám?", answer: "Ano. Začneme od vaší aktuální úrovně. Nemusíte znát cviky ani mít perfektní kondici — od vysvětlení a vedení jsem tu já." },
      { question: "Kde tréninky probíhají?", answer: "Ve Form Factory Vinohradská v Praze 3. První termín si domluvíme předem přes WhatsApp nebo telefon." },
    ]} />
  </main>;
}
