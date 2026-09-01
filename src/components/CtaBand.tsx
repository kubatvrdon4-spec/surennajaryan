import { Link } from "react-router-dom";

export function CtaBand({ title = "První krok je krátká domluva." }: { title?: string }) {
  return (
    <section className="cta-band">
      <p className="eyebrow eyebrow-light">Bez závazků. Konkrétně.</p>
      <h2>{title}</h2>
      <Link className="button button-light" to="/kontakt" data-track="cta-band">Chci začít trénovat <span aria-hidden="true">→</span></Link>
    </section>
  );
}
