import { siteConfig } from "./site";

// Cena je individuální; konzultace během jídelníčku potvrdil uživatel 31. 8. 2026.
export const mealPlanOffer: {
  title: string;
  maxDurationMonths: number;
  priceCzk: number | null;
  deliveryText: string | null;
  consultationText: string;
} = {
  title: "Jídelníček na míru",
  maxDurationMonths: 2,
  priceCzk: null,
  deliveryText: "Orientační příprava 7–10 dní. Přesný termín potvrdím při domluvě.",
  consultationText: "Možnost konzultace po celou dobu jídelníčku.",
};

export const mealPlanGoals = [
  { id: "reduction", label: "Chci zhubnout", message: "snížení hmotnosti" },
  { id: "gain", label: "Chci nabrat", message: "nabírání svalové hmoty" },
  { id: "unsure", label: "Ještě nevím", message: "nastavení stravování; konkrétní cíl bych rád/a probral/a" },
] as const;

export type MealPlanGoal = (typeof mealPlanGoals)[number]["id"];

export function getMealPlanWhatsAppHref(goal: MealPlanGoal = "unsure") {
  const selected = mealPlanGoals.find((item) => item.id === goal) ?? mealPlanGoals[2];
  const message = `Dobrý den, Surene, mám zájem o jídelníček na míru až na ${mealPlanOffer.maxDurationMonths} měsíce s možností konzultace během jeho trvání. Mým cílem je ${selected.message}. Rád/a bych se domluvil/a na úvodní konzultaci a individuální ceně.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
