import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { CompactFooter } from "./CompactFooter";
import { Header } from "./Header";
import { getPageWhatsAppHref } from "../config/contact";

export function SiteLayout() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  const whatsappHref = getPageWhatsAppHref(pathname);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main-content">Přeskočit na obsah</a>
      <Header />
      <div id="main-content"><Outlet /></div>
      {isHome ? <Footer whatsappHref={whatsappHref} /> : <CompactFooter />}
      {isHome && (
        <a className="mobile-sticky-cta" href={whatsappHref} target="_blank" rel="noreferrer" data-track="mobile-sticky-whatsapp">
          Domluvit trénink <span aria-hidden="true">↗</span>
        </a>
      )}
    </>
  );
}
