import { useState } from "react";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { getMealPlanWhatsAppHref, mealPlanGoals, mealPlanOffer, type MealPlanGoal } from "../config/mealPlan";
import "./MealPlanPage.css";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

const mealFaq = [
  { question: "Co je součástí spolupráce?", answer: `Individuální jídelníček až na ${mealPlanOffer.maxDurationMonths} měsíce a možnost konzultace po celou dobu jeho trvání. Po domluvě se můžete ozvat s dotazy k jídelníčku a probrat, jak vám vyhovuje.` },
  { question: "Co ode mě budete potřebovat?", answer: "Na začátku probereme váš cíl, běžný den, pohyb a stravovací preference. Podrobnosti vám pošlu ve zprávě, abyste věděli, co si připravit." },
  { question: "Jaká je cena a doba přípravy?", answer: "Cena je individuální a domluvíme ji po úvodní konzultaci. Příprava jídelníčku trvá orientačně 7–10 dní; přesný termín potvrdím při domluvě. První zpráva vás k nákupu nezavazuje." },
];

export function MealPlanPage() {
  const [goal, setGoal] = useState<MealPlanGoal>("unsure");
  const selectedGoal = mealPlanGoals.find((item) => item.id === goal)!;
  const formattedPrice = mealPlanOffer.priceCzk === null ? null : new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(mealPlanOffer.priceCzk);

  return (
    <main className="sn-meal">
      <Seo title="Jídelníček na míru" description="Jídelníček na míru až na 2 měsíce od Surena Najaryana, s možností konzultace po celou dobu. Pro redukci i nabírání, cena individuálně." path="/jidelnicek" image="/images/meal-hero-1440.webp" />
      <section className="meal-hero" aria-labelledby="meal-title">
        <div className="meal-grid" aria-hidden="true" />
        <div className="meal-container meal-hero-inner">
          <div className="meal-hero-copy">
            <p className="meal-eyebrow">Stravovací plán až na {mealPlanOffer.maxDurationMonths} měsíce</p>
            <h1 id="meal-title" className="meal-display">Jídelníček<strong>na míru.</strong></h1>
            <p className="meal-lead">Váš cíl začíná na talíři.</p>
            <p className="meal-body">Plán pro hubnutí i nabírání podle vašeho cíle, režimu a chutí. S možností konzultace během jeho trvání.</p>
            <a className="meal-button meal-button-blue" href="#meal-start" data-track="meal-hero-start">Chci jídelníček na míru <Arrow /></a>
            <p className="meal-hero-signature"><span aria-hidden="true" />Suren Najaryan · Osobní fitness trenér</p>
          </div>
          <figure className="meal-hero-visual">
            <span className="meal-photo-frame" aria-hidden="true" />
            <ResponsiveImage name="meal-hero" alt="Skutečná fotografie připraveného jídla s grilovaným kuřetem, brokolicí a bramborami." className="meal-hero-photo" eager sizes="(max-width: 760px) 100vw, 600px" />
          </figure>
        </div>
      </section>

      <section className="meal-goals meal-container" aria-labelledby="meal-goals-title">
        <div className="meal-goals-heading">
          <p className="meal-eyebrow">Dva cíle. Vlastní cesta.</p>
          <h2 id="meal-goals-title" className="meal-display">Co chcete<strong>změnit?</strong></h2>
          <p className="meal-body">Začněme tím, co je důležité pro vás.</p>
        </div>
        <div className="meal-goal-options">
          <article className="meal-goal-card">
            <span className="meal-goal-rule" aria-hidden="true" />
            <h3 className="meal-display">Chci<strong>zhubnout.</strong></h3>
            <p>Udělat si ve stravě jasno a pracovat na lehčím těle s plánem zaměřeným na redukci.</p>
            <a href="#meal-start" onClick={() => setGoal("reduction")} data-track="meal-goal-reduction" aria-label="Vybrat cíl: chci zhubnout">To je můj cíl <Arrow diagonal /></a>
          </article>
          <article className="meal-goal-card">
            <span className="meal-goal-rule" aria-hidden="true" />
            <h3 className="meal-display">Chci<strong>nabrat.</strong></h3>
            <p>Podpořit práci v posilovně jídelníčkem zaměřeným na zdravé nabírání.</p>
            <a href="#meal-start" onClick={() => setGoal("gain")} data-track="meal-goal-gain" aria-label="Vybrat cíl: chci nabrat">To je můj cíl <Arrow diagonal /></a>
          </article>
        </div>
      </section>

      <section className="meal-fit" aria-labelledby="meal-fit-title">
        <div className="meal-container meal-fit-inner">
          <figure className="meal-prep-visual">
            <ResponsiveImage name="meal-prep" alt="Skutečná fotografie tří připravených porcí s rýží, čočkou a zeleninou." sizes="(max-width: 760px) 100vw, 620px" />
            <span className="meal-prep-corner" aria-hidden="true" />
          </figure>
          <div className="meal-fit-copy">
            <p className="meal-eyebrow">Co znamená na míru</p>
            <h2 id="meal-fit-title" className="meal-display">Váš den.<strong>Váš jídelníček.</strong></h2>
            <p className="meal-body">Nejdřív poznám vás. Teprve potom sestavím plán.</p>
            <div className="meal-fit-points">
              <div><span aria-hidden="true" /><div><h3>Váš cíl</h3><p>Hubnutí nebo nabírání určí směr plánu.</p></div></div>
              <div><span aria-hidden="true" /><div><h3>Váš režim a chutě</h3><p>Plán přizpůsobím vašemu dni a preferencím.</p></div></div>
              <div><span aria-hidden="true" /><div><h3>Možnost konzultace</h3><p>Během jídelníčku můžete po domluvě probrat své dotazy.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="meal-faq meal-container" aria-labelledby="meal-faq-title">
        <div className="meal-faq-heading">
          <p className="meal-eyebrow">Ještě před začátkem</p>
          <h2 id="meal-faq-title" className="meal-display">Dobré<strong>vědět.</strong></h2>
          <p className="meal-body">Stručně. Bez otazníků.</p>
        </div>
        <div className="meal-faq-list">
          {mealFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="meal-start" id="meal-start" aria-labelledby="meal-start-title" tabIndex={-1}>
        <span className="meal-start-word" aria-hidden="true">VÁŠ PLÁN</span>
        <div className="meal-container meal-start-inner">
          <figure className="meal-coach">
            <span className="meal-coach-frame" aria-hidden="true" />
            <ResponsiveImage name="portrait" alt="Suren Najaryan, osobní fitness trenér." sizes="(max-width: 760px) 85vw, 400px" className="meal-coach-photo" />
            <figcaption><strong>Suren Najaryan</strong><span>Osobní fitness trenér<br />Form Factory Vinohradská, Praha</span></figcaption>
          </figure>
          <div className="meal-start-copy">
            <p className="meal-eyebrow">Jídelníček od Surena Najaryana</p>
            <h2 id="meal-start-title" className="meal-display">Začněte<strong>s plánem.</strong></h2>
            <p className="meal-body">{mealPlanOffer.consultationText} Začíná to krátkou zprávou.</p>
            <fieldset className="meal-goal-picker">
              <legend>Jaký je váš cíl?</legend>
              <div>
                {mealPlanGoals.map((item) => (
                  <label key={item.id}>
                    <input type="radio" name="meal-goal" value={item.id} checked={goal === item.id} onChange={() => setGoal(item.id)} />
                    <span><i aria-hidden="true" />{item.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="meal-offer-summary">
              <p aria-live="polite"><strong>{selectedGoal.label}</strong><span>Jídelníček až na {mealPlanOffer.maxDurationMonths} měsíce</span></p>
              {formattedPrice && <strong className="meal-price">{formattedPrice}</strong>}
            </div>
            {mealPlanOffer.deliveryText && <p className="meal-delivery">{mealPlanOffer.deliveryText}</p>}
            <a className="meal-button meal-button-whatsapp" href={getMealPlanWhatsAppHref(goal)} target="_blank" rel="noreferrer" data-track="meal-plan-whatsapp"><WhatsAppIcon /><span>Chci jídelníček na míru</span><Arrow /></a>
            <p className="meal-order-note">Nezávazně přes WhatsApp. Cenu domluvíme individuálně po úvodní konzultaci.</p>
          </div>
        </div>
        <p className="meal-photo-note meal-container">Fotografie jídel jsou ilustrační. Konkrétní jídelníček vznikne podle vašeho zadání.</p>
      </section>
    </main>
  );
}
