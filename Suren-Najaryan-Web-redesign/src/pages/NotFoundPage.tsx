import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function NotFoundPage() {
  return <main className="not-found"><Seo title="Stránka nenalezena" description="Požadovaná stránka nebyla nalezena." path={window.location.pathname} /><span>404</span><h1>Tahle cesta nikam nevede.</h1><Link className="button button-primary" to="/">Zpět na úvod <span aria-hidden="true">→</span></Link></main>;
}
