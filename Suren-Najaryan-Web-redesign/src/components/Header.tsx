import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappText)}`;

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Suren Najaryan — domů">
        <span className="brand-mark" aria-hidden="true"><b>S</b><b>N</b></span>
      </Link>
      <nav className="desktop-nav" aria-label="Hlavní navigace">
        <NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : undefined}>Úvod</NavLink>
        {siteConfig.nav.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "is-active" : undefined}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer" data-track="header-whatsapp">
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.326-5.607m-5.607 12.2a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.098-1.175-.58-1.358-.646-.183-.067-.315-.099-.445.098-.133.197-.513.646-.627.775-.114.133-.232.148-.429.05-.197-.099-.836-.308-1.592-.984-.59-.525-.986-1.175-1.103-1.372-.116-.198-.013-.304.085-.402.09-.088.197-.232.296-.346.098-.116.132-.198.197-.33.067-.13.034-.248-.016-.347-.05-.098-.445-1.072-.61-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.248-.007-.38-.007a.73.73 0 0 0-.529.248c-.183.197-.691.677-.691 1.654s.71 1.916.81 2.049c.098.132 1.394 2.132 3.383 2.992.474.206.843.328 1.13.42.475.15.91.13 1.252.078.383-.058 1.175-.48 1.341-.943.164-.464.164-.86.114-.943-.049-.084-.183-.132-.38-.23" />
        </svg>
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
