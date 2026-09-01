import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "vite";

const routes = ["/", "/jidelnicek", "/osobni-treninky", "/box-a-sebeobrana", "/o-mne", "/jak-probiha-spoluprace", "/kontakt"];
const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const render = (path) => renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(App)));
  const htmlByRoute = Object.fromEntries(routes.map((path) => [path, render(path)]));
  for (const [path, html] of Object.entries(htmlByRoute)) {
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, path + ": one main");
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, path + ": one h1");
    assert.equal((html.match(/<header\b/g) ?? []).length, 1, path + ": one header");
    assert.equal((html.match(/<footer\b/g) ?? []).length, 1, path + ": one footer");
    assert(!html.includes("Bude doplněno") && !html.includes("placeholder-page"), path + ": no placeholder");
    assert(!/>\s*0[1-9]\s*</.test(html), path + ": no numbered steps");
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, path + ": unique ids");
    for (const [, src] of html.matchAll(/\bsrc="([^"]+)"/g)) {
      if (src.startsWith("/")) assert(existsSync("public" + src), path + ": missing asset " + src);
    }
    for (const [, hrefEncoded] of html.matchAll(/\bhref="([^"]+)"/g)) {
      const href = hrefEncoded.replaceAll("&amp;", "&");
      if (href.startsWith("https://wa.me/")) {
        const url = new URL(href);
        assert.equal(url.pathname, "/420608662088", path + ": phone");
        assert(url.searchParams.get("text")?.startsWith("Dobrý den, Surene,"), path + ": WA message");
      }
      if (href.startsWith("/") || href.startsWith("#")) {
        const url = new URL(href, "http://localhost" + path);
        assert(routes.includes(url.pathname), path + ": unknown route " + href);
        if (url.hash) {
          const target = htmlByRoute[url.pathname];
          assert(target.includes('id="' + url.hash.slice(1) + '"'), path + ": missing anchor " + href);
        }
      }
    }
    console.log("PASS", path, "navigation, structure, assets, contacts");
  }
  const { mealPlanOffer, mealPlanGoals, getMealPlanWhatsAppHref } = await server.ssrLoadModule("/src/config/mealPlan.ts");
  assert.equal(mealPlanOffer.maxDurationMonths, 2);
  assert.equal(mealPlanOffer.priceCzk, null);
  assert(!mealPlanOffer.consultationText.includes("celé 2"));
  for (const goal of mealPlanGoals) {
    const text = new URL(getMealPlanWhatsAppHref(goal.id)).searchParams.get("text");
    assert(text.includes("až na 2 měsíce"));
    assert(text.includes(goal.message));
    assert(text.includes("během jeho trvání"));
  }
  assert(htmlByRoute["/jidelnicek"].includes("až na 2 měsíce"));
  assert(!htmlByRoute["/jidelnicek"].includes("meal-hero-facts"));
  assert(!htmlByRoute["/jidelnicek"].includes("Běžné jídlo. Jasný směr."));
  assert(htmlByRoute["/"].includes("sn-footer-terminal"));
  for (const path of routes.filter((route) => route !== "/")) {
    assert(htmlByRoute[path].includes("sn-compact-footer"), path + ": compact footer");
    assert(!htmlByRoute[path].includes("sn-footer-terminal"), path + ": no full footer");
  }
  for (const path of ["/osobni-treninky", "/box-a-sebeobrana", "/o-mne", "/jak-probiha-spoluprace"]) {
    assert(!htmlByRoute[path].includes("<figcaption"), path + ": no intro image caption");
  }
  assert(htmlByRoute["/jak-probiha-spoluprace"].includes("conditioning-1440.webp"));
  const { contactSubjects, getInquiryHref, getPageWhatsAppHref } = await server.ssrLoadModule("/src/config/contact.ts");
  for (const subject of contactSubjects) {
    const text = new URL(getInquiryHref(subject.id, "Chci začít & zlepšit kondici.")).searchParams.get("text");
    assert(text.includes(subject.message));
    assert(text.includes("Chci začít & zlepšit kondici."));
  }
  assert(new URL(getPageWhatsAppHref("/box-a-sebeobrana")).searchParams.get("text").includes("box a sebeobranu"));
  assert(new URL(getPageWhatsAppHref("/jidelnicek")).searchParams.get("text").includes("jídelníček"));
  assert(htmlByRoute["/o-mne"].includes("<dialog"));
  assert(htmlByRoute["/o-mne"].includes("100 hodin teorie"));
  assert(htmlByRoute["/o-mne"].includes("více než 30 let"));
  assert(!htmlByRoute["/o-mne"].includes("MMA zápasník"));
  assert(htmlByRoute["/kontakt"].includes("Zpráva se neodešle automaticky"));
  assert(htmlByRoute["/kontakt"].includes("07596600"));
  assert(render("/stranka-ktera-neexistuje").includes("Tudy cesta"));
  const css = readFileSync("src/pages/InteriorPages.css", "utf8");
  assert(css.includes(".ip-whatsapp:hover"));
  assert(css.includes("prefers-reduced-motion"));
  assert(css.includes("summary:focus-visible"));
  console.log("PASS meal duration, all inquiry choices, certificate, unknown route and focus styles");
} finally {
  await server.close();
}
