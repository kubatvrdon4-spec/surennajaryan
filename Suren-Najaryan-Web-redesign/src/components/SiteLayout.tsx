import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { siteConfig } from "../config/site";

export function SiteLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappText)}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">Přeskočit na obsah</a>
      <Header />
      <div id="main-content"><Outlet /></div>
      {isHome && <Footer />}
      {isHome && (
        <a className="mobile-sticky-cta" href={whatsappHref} target="_blank" rel="noreferrer" data-track="mobile-sticky-whatsapp">
          Domluvit trénink <span aria-hidden="true">↗</span>
        </a>
      )}
    </>
  );
}
