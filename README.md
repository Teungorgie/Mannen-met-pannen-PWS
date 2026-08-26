# Mannen met Pannen — website

Website voor Mannen met Pannen, catering aan huis in Den Haag en omgeving.
Gebouwd met Next.js (App Router), React, TypeScript en Tailwind CSS.

## Inhoudsopgave

- [Lokaal starten](#lokaal-starten)
- [Projectstructuur](#projectstructuur)
- [Prijzen aanpassen](#prijzen-aanpassen)
- [Menu's aanpassen](#menus-aanpassen)
- [Contactgegevens aanpassen](#contactgegevens-aanpassen)
- [Foto's toevoegen](#fotos-toevoegen)
- [Aanvraagformulier koppelen aan een backend](#aanvraagformulier-koppelen-aan-een-backend)
- [Op GitHub zetten](#op-github-zetten)
- [Deployen op Vercel](#deployen-op-vercel)
- [Domeinnaam koppelen](#domeinnaam-koppelen)

## Lokaal starten

Benodigd: [Node.js](https://nodejs.org) versie 18 of hoger.

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000) in je browser. Wijzigingen aan de code
worden automatisch opnieuw geladen.

Om te controleren of alles correct compileert vóór een deploy:

```bash
npm run build
```

## Projectstructuur

```
/app                    → Pagina's (App Router). Elke map = een route.
  layout.tsx            → Basislayout: fonts, metadata, Navbar/Footer
  page.tsx               → Homepage
  menus/page.tsx          → Menu's-pagina
  zo-werkt-het/page.tsx   → Zo werkt het-pagina
  over-ons/page.tsx       → Over ons-pagina
  contact/page.tsx        → Aanvraagpagina
  privacy/page.tsx        → Privacyverklaring
/components
  /ui                    → Losse, generieke bouwstenen (Button, FormField, ImagePlaceholder)
  /sections              → Grotere sectiecomponenten (Navbar, Footer, Hero, MenuCard, PriceCalculator, ...)
/lib
  config.ts              → Centrale configuratie: bedrijfsgegevens, prijzen, menu's, FAQ
  validation.ts           → Validatielogica van het aanvraagformulier
/public
  images/logo.png         → Logo
  images/                 → Plek voor toekomstige foto's
```

## Prijzen aanpassen

Open `lib/config.ts` en pas het `PRICING`-object aan:

```ts
export const PRICING = {
  menuPerPerson: 24.95,
  winePerPerson: 5.0,
  calculatorMinGuests: 1,
  calculatorMaxGuests: 99,
};
```

Deze waarden worden overal gebruikt: op de homepage, de menu's-pagina en in de prijscalculator.
Je hoeft nergens anders iets aan te passen.

## Menu's aanpassen

Ook in `lib/config.ts`, in de `MENUS`-array. Elk menu heeft een naam, een korte intro en een lijst
met gangen. Elke gang heeft een naam en optioneel een alternatief (het "of ..."-gerecht):

```ts
{
  label: "Hoofdgerecht",
  options: [{ name: "Tagliatelle al pollo e parmigiano" }],
}
```

De FAQ-inhoud staat in dezelfde file, in de `FAQS`-array.

## Contactgegevens aanpassen

Ook in `lib/config.ts`, in het `BUSINESS`-object: e-mailadres, telefoonnummers, Instagram-link en de
plaatsen die genoemd worden als werkgebied. Dit object wordt gebruikt in de footer, de contactpagina
en de metadata van de site.

## Foto's toevoegen

Op dit moment staan er nog geen foto's op de website — alleen duidelijk gemarkeerde placeholders
(`components/ui/ImagePlaceholder.tsx`), zodat de lay-out al klaarstaat voor foto's zonder lege plekken.

Om een foto toe te voegen:

1. Zet het beeldbestand in `public/images/` (bijvoorbeeld `public/images/tafel.jpg`).
2. Zoek de plek waar je de foto wilt tonen (bijvoorbeeld in `components/sections/Gallery.tsx` of
   `app/over-ons/page.tsx`).
3. Vervang de `<ImagePlaceholder ... />` op die plek door een Next.js `<Image />`:

```tsx
import Image from "next/image";

<Image
  src="/images/tafel.jpg"
  alt="Gedekte tafel bij een klant thuis"
  width={800}
  height={600}
  className="rounded-lg object-cover"
/>;
```

## Aanvraagformulier koppelen aan een backend

Er is nog geen backend gekoppeld — het formulier valideert alle velden, maar de daadwerkelijke
verzending is voorbereid, niet actief. Dit staat allemaal op één plek: de functie `submitRequest` in
`components/sections/RequestForm.tsx`.

**Optie 1 — Formspree** (snelste optie, geen eigen server nodig):

1. Maak een gratis formulier aan op [formspree.io](https://formspree.io).
2. Vervang de inhoud van `submitRequest` door:

```ts
async function submitRequest(data: RequestFormData): Promise<void> {
  const response = await fetch("https://formspree.io/f/JOUW_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Versturen mislukt");
}
```

**Optie 2 — Resend** (e-mail versturen via een eigen API-route): maak `app/api/aanvraag/route.ts` aan
die de [Resend](https://resend.com) SDK gebruikt, en laat `submitRequest` naar `/api/aanvraag` posten.

**Optie 3 — Supabase**: sla aanvragen op in een Supabase-tabel en stuur eventueel een e-mail via een
Supabase Edge Function of database-webhook.

In alle gevallen hoeft alleen `submitRequest` aangepast te worden — de rest van het formulier,
validatie en foutafhandeling werken al.

## Op GitHub zetten

```bash
git init
git add .
git commit -m "Eerste versie van de website"
git branch -M main
git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/mannen-met-pannen.git
git push -u origin main
```

## Deployen op Vercel

1. Maak een gratis account op [vercel.com](https://vercel.com) (kan met je GitHub-account).
2. Klik op "Add New Project" en kies de GitHub-repository die je net hebt aangemaakt.
3. Vercel herkent automatisch dat het een Next.js-project is — je hoeft niets aan te passen aan de
   build-instellingen.
4. Klik op "Deploy". Na een paar minuten krijg je een gratis `*.vercel.app`-link.

## Domeinnaam koppelen

Zodra jullie een domeinnaam hebben:

1. Ga in het Vercel-dashboard naar het project → **Settings → Domains**.
2. Voeg het domein toe (bijvoorbeeld `mannenmetpannen.nl`).
3. Vercel laat zien welke DNS-records je moet instellen bij je domeinregistrar (meestal een simpele
   A-record of CNAME).
4. Werk daarna ook de `metadataBase`-URL in `app/layout.tsx` en de URL's in `app/sitemap.ts` en
   `app/robots.ts` bij naar het echte domein.
