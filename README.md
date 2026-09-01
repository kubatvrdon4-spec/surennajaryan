# Suren Najaryan — osobní trenér

První kompletní verze vícestránkového webu pro osobního trenéra Surena Najaryana. Projekt je připravený pro další úpravy ve Visual Studiu / Visual Studio Code a pro nasazení na Vercel.

## Spuštění projektu

Po otevření složky spusťte v integrovaném terminálu:

```bash
npm install
npm run dev
```

V terminálu se zobrazí adresa lokálního náhledu, obvykle `http://localhost:5173`.

Kontrola produkční verze:

```bash
npm run build
```

## Struktura

- `src/pages` — jednotlivé stránky webu
- `src/components` — sdílená navigace, patička, formulář a další prvky
- `src/config/site.ts` — kontakty, navigace a hlavní cíle návštěvníků
- `src/styles.css` — celý responzivní vizuální systém
- `public/images` — optimalizované fotografie ve WebP
- `vercel.json` — přesměrování pro přímé otevření vnořených adres na Vercelu

## Obsah webu

Web obsahuje samostatné adresy:

- `/`
- `/osobni-treninky`
- `/box-a-sebeobrana`
- `/o-mne`
- `/jak-probiha-spoluprace`
- `/vysledky-a-reference`
- `/kontakt`

Poptávkový formulář sestaví předvyplněnou WhatsApp zprávu. Kontaktní údaje a číslo pro WhatsApp se mění na jednom místě v `src/config/site.ts`.

## Před ostrým spuštěním potvrdit

- že uvedené telefonní číslo funguje také pro WhatsApp,
- souhlas s použitím dodaných fotografií,
- finální doménu,
- případné sociální profily,
- reference a fotografie klientských výsledků před jejich zveřejněním.

Projekt záměrně neobsahuje ceny, smyšlené reference, analytické skripty ani cookie banner.
