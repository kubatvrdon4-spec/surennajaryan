import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";
import { getPageWhatsAppHref } from "../config/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const whatsappHref = getPageWhatsAppHref(location.pathname);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <nav className="desktop-nav" aria-label="Hlavní navigace">
        <NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : undefined}>Úvod</NavLink>
        {siteConfig.nav.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "is-active" : undefined}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer" data-track="header-whatsapp">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobilní navigace">
        <NavLink to="/">Úvod</NavLink>
        {siteConfig.nav.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
