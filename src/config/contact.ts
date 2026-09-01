import { siteConfig } from "./site";
import { getMealPlanWhatsAppHref } from "./mealPlan";

export function getWhatsAppHref(message: string = siteConfig.whatsappText) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const boxingMessage = "Dobrý den, Surene, mám zájem o box a sebeobranu. Rád/a bych probral/a své zkušenosti a domluvil/a první trénink.";

export function getPageWhatsAppHref(pathname: string) {
  if (pathname === "/jidelnicek") return getMealPlanWhatsAppHref();
  if (pathname === "/box-a-sebeobrana") return getWhatsAppHref(boxingMessage);
  if (pathname === "/kontakt" || pathname === "/jak-probiha-spoluprace") return getWhatsAppHref("Dobrý den, Surene, rád/a bych se domluvil/a na možnostech spolupráce.");
  return getWhatsAppHref();
}

export const contactSubjects = [
  { id: "training", label: "Osobní trénink", message: "osobní trénink" },
  { id: "meal", label: "Jídelníček na míru", message: "jídelníček na míru" },
  { id: "boxing", label: "Box a sebeobrana", message: "box a sebeobranu" },
  { id: "advice", label: "Chci se poradit", message: "konzultaci možností spolupráce" },
] as const;

export function getInquiryHref(subject: string, note: string) {
  const selected = contactSubjects.find((item) => item.id === subject) ?? contactSubjects[0];
  return getWhatsAppHref([
    `Dobrý den, Surene, mám zájem o ${selected.message}.`,
    note.trim().slice(0, 500),
    "Rád/a bych se nezávazně domluvil/a na dalším kroku.",
  ].filter(Boolean).join("\n"));
}
