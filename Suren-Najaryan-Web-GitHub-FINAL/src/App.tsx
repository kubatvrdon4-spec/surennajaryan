import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { MealPlanPage } from "./pages/MealPlanPage";
import { TrainingPage } from "./pages/TrainingPage";
import { BoxPage } from "./pages/BoxPage";
import { AboutPage } from "./pages/AboutPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jidelnicek" element={<MealPlanPage />} />
        <Route path="osobni-treninky" element={<TrainingPage />} />
        <Route path="box-a-sebeobrana" element={<BoxPage />} />
        <Route path="o-mne" element={<AboutPage />} />
        <Route path="jak-probiha-spoluprace" element={<ProcessPage />} />
        <Route path="vysledky-a-reference" element={<Navigate to="/jak-probiha-spoluprace" replace />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
