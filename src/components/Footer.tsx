import { siteConfig } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer({ whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappText)}` }: { whatsappHref?: string }) {
  const instagramContent = (
    <>
      <span className="sn-instagram-icon" aria-hidden="true"><i /></span>
      <span>Suren Najaryan</span>
    </>
  );

  return (
    <footer className="sn-footer sn-footer-minimal">
      <div className="sn-footer-terminal">
        <div className="sn-footer-pitch">
          <span className="sn-footer-line" aria-hidden="true" />
          <h2><span>První krok je</span><strong>krátká zpráva.</strong></h2>
          <div className="sn-footer-socials">
            <a className="sn-footer-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" data-track="footer-whatsapp">
              <WhatsAppIcon />
              <span>Napsat na WhatsApp</span>
              <span className="sn-footer-whatsapp-arrow" aria-hidden="true">→</span>
            </a>
            {siteConfig.instagramUrl ? (
              <a className="sn-footer-instagram" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{instagramContent}</a>
            ) : (
              <span className="sn-footer-instagram sn-footer-instagram-pending" aria-label="Instagram Surena Najaryana — odkaz bude doplněn">{instagramContent}</span>
            )}
          </div>
        </div>

        <div className="sn-footer-visual" aria-hidden="true">
          <picture>
            <source
              srcSet="/images/form-factory-footer-720.webp 720w, /images/form-factory-footer-1440.webp 1440w"
              sizes="(max-width: 760px) 100vw, 34vw"
              type="image/webp"
            />
            <img
              src="/images/form-factory-footer-1440.webp"
              width="1440"
              height="960"
              loading="lazy"
              alt=""
            />
          </picture>
        </div>

        <div className="sn-footer-contact-panel">
          <a href={`tel:${siteConfig.phoneHref}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 2.9 10 7.5 8.2 9.3c1 2.1 2.5 3.6 4.6 4.6l1.8-1.8 4.6 2.9-.7 3.8c-.2 1.1-1.2 1.9-2.3 1.8C9.1 19.8 4.2 14.9 3.4 7.8c-.1-1.1.7-2.1 1.8-2.3l1.9-.4Z" /></svg>
            <span>Tel: {siteConfig.phone}</span>
          </a>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14H6V3Zm8 1v4h4M9 12h6M9 16h6" /></svg>
            <span>IČ: {siteConfig.ico}</span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5Z" /></svg>
            <span>{siteConfig.location}<br />{siteConfig.locationDetail}</span>
          </div>
          <p>© {new Date().getFullYear()} {siteConfig.name}.<br />Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
