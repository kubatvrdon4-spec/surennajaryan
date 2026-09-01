import { Link } from "react-router-dom";
import { ResponsiveImage } from "./ResponsiveImage";

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  image?: "training" | "movement" | "conditioning";
  imageAlt?: string;
};

export function PageHero({ index, eyebrow, title, intro, image, imageAlt = "" }: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " has-media" : ""}`}>
      <div className="page-hero-index">{index}</div>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
        <Link className="text-link arrow-link" to="/kontakt">Nezávazně se domluvit <span aria-hidden="true">→</span></Link>
      </div>
      {image && <ResponsiveImage name={image} alt={imageAlt} className="page-hero-media" eager />}
    </section>
  );
}
