import { Seo } from "../components/Seo";

type PlaceholderPageProps = {
  title: string;
  path: string;
};

export function PlaceholderPage({ title, path }: PlaceholderPageProps) {
  return (
    <main className="placeholder-page">
      <Seo title={title} description={`${title} — obsah bude doplněn.`} path={path} />
      <p>Bude doplněno</p>
    </main>
  );
}
