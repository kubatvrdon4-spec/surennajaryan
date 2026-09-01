import { Link, useLocation } from "react-router-dom";
import { Seo } from "../components/Seo";
import { ArrowIcon } from "../components/Interior";

export function NotFoundPage() {
  const { pathname } = useLocation();
  return <main className="sn-interior"><Seo title="Stránka nenalezena" description="Požadovaná stránka nebyla nalezena. Vraťte se na úvod webu Surena Najaryana." path={pathname} /><section className="ip-container ip-not-found"><p className="ip-eyebrow">Stránka nenalezena</p><h1 className="ip-display">Tudy cesta<strong>nevede.</strong></h1><p className="ip-body">Tato adresa už neplatí nebo byla zadána chybně. Pokračujte na úvod, kde najdete aktuální služby i kontakt.</p><div className="ip-actions"><Link className="ip-button ip-blue" to="/">Zpět na úvod <ArrowIcon /></Link><Link className="ip-text-link" to="/kontakt">Kontakt <ArrowIcon diagonal /></Link></div></section></main>;
}
