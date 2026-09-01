import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { siteConfig } from "../config/site";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [searchParams] = useSearchParams();
  const initialGoal = useMemo(() => searchParams.get("cil") ?? "", [searchParams]);
  const [goal, setGoal] = useState(initialGoal);
  const [experience, setExperience] = useState("Neuvedeno");
  const [start, setStart] = useState("");
  const [note, setNote] = useState("");

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const campaign = ["utm_source", "utm_medium", "utm_campaign"]
      .map((key) => searchParams.get(key))
      .filter(Boolean)
      .join(" / ");
    const message = [
      "Dobrý den, Surene, mám zájem o trénink.",
      `Můj cíl: ${goal}.`,
      `Moje zkušenost: ${experience}.`,
      `Kdy chci začít: ${start}.`,
      note.trim() ? `Poznámka: ${note.trim()}` : "",
      campaign ? `Zdroj návštěvy: ${campaign}.` : "",
      "Rád/a bych se nezávazně domluvil/a na prvním kroku.",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={`inquiry-form${compact ? " is-compact" : ""}`} onSubmit={submitInquiry} data-track="whatsapp-form">
      <div className="form-heading">
        <span className="section-index">01</span>
        <div>
          <p className="eyebrow">Nezávazná poptávka</p>
          <h2>Stačí 30 sekund. Zbytek probereme spolu.</h2>
        </div>
      </div>
      <div className="form-grid">
        <label>
          <span>Váš hlavní cíl</span>
          <select required value={goal} onChange={(event) => setGoal(event.target.value)}>
            <option value="">Vyberte cíl</option>
            {siteConfig.goals.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Aktuální zkušenost <small>volitelné</small></span>
          <select value={experience} onChange={(event) => setExperience(event.target.value)}>
            <option value="Neuvedeno">Nemusím uvádět</option>
            <option>Začínám</option>
            <option>Už nějakou dobu cvičím</option>
            <option>Mám pravidelný trénink</option>
            <option>Vracím se po pauze</option>
          </select>
        </label>
        <label>
          <span>Kdy chcete začít</span>
          <select required value={start} onChange={(event) => setStart(event.target.value)}>
            <option value="">Vyberte možnost</option>
            <option>Co nejdříve</option>
            <option>Během příštích 2 týdnů</option>
            <option>Během příštího měsíce</option>
            <option>Zatím se jen informuji</option>
          </select>
        </label>
        <label className="form-note">
          <span>Krátká poznámka <small>volitelné</small></span>
          <textarea rows={4} maxLength={400} value={note} onChange={(event) => setNote(event.target.value)} placeholder="Např. omezení, předchozí zkušenost nebo co je pro vás důležité" />
        </label>
      </div>
      <div className="form-submit">
        <button className="button button-primary" type="submit">Připravit zprávu pro Surena <span aria-hidden="true">↗</span></button>
        <p>Nezávazně a bez platby. Po kliknutí se otevře připravená zpráva ve WhatsAppu.</p>
      </div>
    </form>
  );
}
