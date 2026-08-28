import { useState } from "react";
import { Link } from "react-router-dom";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { siteConfig } from "../config/site";

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappText)}`;

const services = [
  {
    title: "Osobní trénink",
    accent: "Osobní",
    description: "Individuální vedení na míru vašim cílům, možnostem a životnímu stylu.",
    to: "/osobni-treninky",
  },
  {
    title: "Redukce a kondice",
    accent: "Redukce",
    description: "Efektivní trénink a plán pro spalování tuků, lepší kondici a vitalitu.",
    to: "/osobni-treninky",
  },
  {
    title: "Síla a svaly",
    accent: "Síla",
    description: "Budování síly, svalové hmoty a výbušnosti s důrazem na techniku a progres.",
    to: "/osobni-treninky",
  },
  {
    title: "Box a sebeobrana",
    accent: "Box",
    description: "Techniky boxu a sebeobrany pro jistotu, dovednosti a fyzickou připravenost.",
    to: "/box-a-sebeobrana",
  },
];

const faqItems = [
  {
    question: "Je úvodní konzultace závazná?",
    answer: "Ne. Krátce probereme váš cíl, dosavadní zkušenosti a možnosti. Teprve potom se rozhodnete, jestli vám spolupráce dává smysl.",
  },
  {
    question: "Musím mít zkušenosti s posilovnou?",
    answer: "Nemusíte. Trénink i vysvětlení techniky přizpůsobím tomu, kde právě začínáte. Důležité je pouze vědět, čeho chcete dosáhnout.",
  },
  {
    question: "Kde osobní tréninky probíhají?",
    answer: "Osobní tréninky probíhají ve Form Factory Vinohradská v Praze 3. Přesný termín si domluvíme předem.",
  },
  {
    question: "Jak rychle můžeme začít?",
    answer: "Záleží na aktuálních volných termínech. Napište mi na WhatsApp a společně najdeme nejbližší možnost, která vám bude vyhovovat.",
  },
  {
    question: "Pomůže mi trénink také se zhubnutím?",
    answer: "Ano. Trénink nastavíme tak, aby podporoval redukci, lepší kondici a dlouhodobě udržitelný výsledek bez nesmyslných zkratek.",
  },
  {
    question: "Mohu se zaměřit na sílu a nabrání svalů?",
    answer: "Ano. Postup, zátěž i techniku nastavíme podle vaší současné úrovně a budeme je průběžně upravovat podle reálného progresu.",
  },
  {
    question: "Je box a sebeobrana vhodná i pro začátečníka?",
    answer: "Ano. Začneme od základů — postojem, pohybem a bezpečnou technikou — a obtížnost budeme zvyšovat postupně.",
  },
  {
    question: "Jak si domluvím první termín?",
    answer: "Stačí napsat krátkou zprávu na WhatsApp. Uveďte svůj cíl a časové možnosti, abych vám mohl rovnou navrhnout další krok.",
  },
];

function ServiceTitle({ title, accent }: { title: string; accent: string }) {
  return <>{accent}<span>{title.slice(accent.length)}</span></>;
}

export function HomePage() {
  const [showAllFaq, setShowAllFaq] = useState(false);

  return (
    <main className="sn-home">
      <Seo
        title="Osobní trenér Praha"
        description="Osobní tréninky, kondice, redukce, síla, box a sebeobrana se Surenem Najaryanem ve Form Factory Vinohradská."
        path="/"
      />

      <section className="sn-hero" aria-labelledby="hero-title">
        <div className="sn-hero-grid" aria-hidden="true" />
        <div className="sn-hero-copy">
          <p className="sn-eyebrow">Osobní fitness trenér</p>
          <h1 id="hero-title"><span>Suren</span><strong>Najaryan</strong></h1>
          <p className="sn-tagline">Síla, kondice a pohyb, který má směr.</p>
          <a className="sn-primary-cta" href={whatsappHref} target="_blank" rel="noreferrer" data-track="hero-whatsapp">
            Domluvit úvodní konzultaci
          </a>
        </div>

        <div className="sn-hero-visual" aria-hidden="true">
          <span className="sn-portrait-frame" />
          <ResponsiveImage
            name="portrait"
            className="sn-hero-photo"
            alt=""
            eager
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="sn-services" id="sluzby" aria-labelledby="services-title">
        <span className="sn-services-word" aria-hidden="true">SERVICES</span>
        <div className="sn-services-heading">
          <h2 id="services-title">Moje služby</h2>
        </div>

        <div className="sn-services-stage">
          <svg className="sn-service-connectors" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
            <g className="sn-connector-left">
              <polyline points="190,112 250,112 290,156" />
              <circle cx="190" cy="112" r="4" />
              <circle cx="290" cy="156" r="4" />
              <polyline points="190,362 252,362 282,394" />
              <circle cx="190" cy="362" r="4" />
              <circle cx="282" cy="394" r="4" />
            </g>
            <g className="sn-connector-right">
              <polyline points="733,112 706,112 666,172" />
              <circle cx="733" cy="112" r="4" />
              <circle cx="666" cy="172" r="4" />
              <polyline points="733,362 704,362 662,426" />
              <circle cx="733" cy="362" r="4" />
              <circle cx="662" cy="426" r="4" />
            </g>
          </svg>

          <article className="sn-service sn-service-one">
            <h3><ServiceTitle title={services[0].title} accent={services[0].accent} /></h3>
            <p>{services[0].description}</p>
            <Link to={services[0].to}>Zjistit více</Link>
          </article>

          <article className="sn-service sn-service-two">
            <h3><ServiceTitle title={services[1].title} accent={services[1].accent} /></h3>
            <p>{services[1].description}</p>
            <Link to={services[1].to}>Zjistit více</Link>
          </article>

          <div className="sn-services-photo-wrap">
            <ResponsiveImage
              name="training"
              className="sn-services-photo"
              alt="Suren Najaryan během osobního tréninku"
              sizes="(max-width: 760px) 92vw, 34vw"
            />
          </div>

          <article className="sn-service sn-service-three">
            <h3><ServiceTitle title={services[2].title} accent={services[2].accent} /></h3>
            <p>{services[2].description}</p>
            <Link to={services[2].to}>Zjistit více</Link>
          </article>

          <article className="sn-service sn-service-four">
            <h3><ServiceTitle title={services[3].title} accent={services[3].accent} /></h3>
            <p>{services[3].description}</p>
            <Link to={services[3].to}>Zjistit více</Link>
          </article>
        </div>
      </section>

      <section className="sn-process" aria-labelledby="process-title">
        <div className="sn-process-photo" aria-hidden="true">
          <ResponsiveImage
            name="process"
            alt=""
            sizes="(max-width: 760px) 100vw, 54vw"
          />
        </div>
        <div className="sn-process-shade" aria-hidden="true" />

        <div className="sn-process-content">
          <h2 id="process-title"><span>Jak</span><strong>začneme</strong></h2>

          <div className="sn-process-flow">
            <article className="sn-process-step">
              <span className="sn-process-node" aria-hidden="true" />
              <h3>Napíšete <strong>svůj cíl</strong></h3>
              <p>Napište mi, čeho chcete dosáhnout a co vás dnes omezuje.</p>
            </article>

            <article className="sn-process-step">
              <span className="sn-process-node" aria-hidden="true" />
              <h3>Krátce probereme <strong>možnosti</strong></h3>
              <p>Společně vybereme postup, který odpovídá vašemu cíli.</p>
            </article>

            <article className="sn-process-step">
              <span className="sn-process-node" aria-hidden="true" />
              <h3>Domluvíme <strong>první trénink</strong></h3>
              <p>Vybereme termín a začneme bez zbytečného čekání.</p>
            </article>
          </div>

          <div className="sn-process-cta">
            <p>Nemusíte být ve formě, abyste mohli začít.</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer" data-track="process-whatsapp">
              <span>Napište Surenovi</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sn-faq" id="faq" aria-labelledby="faq-title">
        <div className="sn-faq-intro">
          <p>Co je dobré vědět</p>
          <h2 id="faq-title">Časté otázky</h2>
          <span>Stručné odpovědi před prvním tréninkem.</span>
        </div>

        <div className="sn-faq-list" id="faq-list">
          {faqItems.slice(0, showAllFaq ? faqItems.length : 4).map((item) => (
            <details className="sn-faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}

          <button
            className="sn-faq-more"
            type="button"
            aria-expanded={showAllFaq}
            aria-controls="faq-list"
            onClick={() => setShowAllFaq((visible) => !visible)}
          >
            {showAllFaq ? "Zobrazit méně" : "Zobrazit další otázky"}
            <span aria-hidden="true">{showAllFaq ? "↑" : "↓"}</span>
          </button>
        </div>
      </section>
    </main>
  );
}
