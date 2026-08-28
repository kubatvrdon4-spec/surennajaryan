import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="osobni-treninky" element={<PlaceholderPage title="Služby" path="/osobni-treninky" />} />
        <Route path="box-a-sebeobrana" element={<PlaceholderPage title="Box a sebeobrana" path="/box-a-sebeobrana" />} />
        <Route path="o-mne" element={<PlaceholderPage title="O mně" path="/o-mne" />} />
        <Route path="jak-probiha-spoluprace" element={<PlaceholderPage title="Spolupráce" path="/jak-probiha-spoluprace" />} />
        <Route path="vysledky-a-reference" element={<PlaceholderPage title="Výsledky a reference" path="/vysledky-a-reference" />} />
        <Route path="kontakt" element={<PlaceholderPage title="Kontakt" path="/kontakt" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
