import { siteConfig } from "../config/site";
import "./CompactFooter.css";

export function CompactFooter() {
  return (
    <footer className="sn-compact-footer">
      <a className="sn-compact-phone" href={`tel:${siteConfig.phoneHref}`}>Tel: {siteConfig.phone}</a>
      <p>IČ: {siteConfig.ico}</p>
      <p>{siteConfig.location}</p>
      <p className="sn-compact-location">{siteConfig.locationDetail}</p>
      <small>© {new Date().getFullYear()} {siteConfig.name}. Všechna práva vyhrazena.</small>
    </footer>
  );
}
