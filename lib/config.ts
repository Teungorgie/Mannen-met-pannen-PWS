// ---------------------------------------------------------------------------
// CENTRALE CONFIGURATIE — Mannen met Pannen
// Pas hier prijzen, contactgegevens en algemene bedrijfsinfo aan.
// Menu-inhoud staat verderop in dit bestand.
// ---------------------------------------------------------------------------

export const BUSINESS = {
  name: "Mannen met Pannen",
  tagline: "Catering aan huis in Den Haag en omgeving",
  owners: "Teun Gorgels & Valentijn Marchée",
  email: "mannenmetpannen2026@gmail.com",
  phones: [
    { label: "Teun", number: "06 39645001" },
    { label: "Valentijn", number: "06 29380755" },
  ],
  instagramHandle: "@mannen_met_pannen_catering",
  instagramUrl: "https://www.instagram.com/mannen_met_pannen_catering",
  // Steden die genoemd worden voor lokale vindbaarheid. Pas aan naar wens.
  serviceArea: ["Den Haag", "Voorburg", "Rijswijk", "Leidschendam", "Wassenaar", "Delft"],
};

// ---------------------------------------------------------------------------
// PRIJZEN — enige plek waar prijzen worden bepaald. Wijzig alleen hier.
// ---------------------------------------------------------------------------

export const PRICING = {
  menuPerPerson: 24.95,
  winePerPerson: 5.0,
  calculatorMinGuests: 1,
  calculatorMaxGuests: 99,
};

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

// ---------------------------------------------------------------------------
// MENU'S
// ---------------------------------------------------------------------------

export type MenuOption = {
  name: string;
  alt?: string; // "of ..." alternatief
};

export type MenuCourse = {
  label: string; // Voorgerecht / Hoofdgerecht / Dessert
  options: MenuOption[];
};

export type Menu = {
  id: "italiaans" | "frans";
  name: string;
  intro: string;
  courses: MenuCourse[];
};

export const MENUS: Menu[] = [
  {
    id: "italiaans",
    name: "Italiaans",
    intro: "Rustiek, hartig en gemaakt om te delen.",
    courses: [
      {
        label: "Voorgerecht",
        options: [{ name: "Bruschetta", alt: "Carpaccio" }],
      },
      {
        label: "Hoofdgerecht",
        options: [{ name: "Tagliatelle al pollo e parmigiano" }],
      },
      {
        label: "Dessert",
        options: [{ name: "Tiramisù", alt: "Vanille-ijs" }],
      },
    ],
  },
  {
    id: "frans",
    name: "Frans",
    intro: "Klassiek, verfijnd en vol smaak.",
    courses: [
      {
        label: "Voorgerecht",
        options: [{ name: "Franse uiensoep", alt: "Steak tartare" }],
      },
      {
        label: "Hoofdgerecht",
        options: [{ name: "Steak Café de Paris" }],
      },
      {
        label: "Dessert",
        options: [
          { name: "Moelleux au chocolat", alt: "Vanille-ijs met framboos/aardbei" },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const FAQS = [
  {
    question: "Wat als iemand allergieën of dieetwensen heeft?",
    answer:
      "Geen probleem. Geef dit door in het aanvraagformulier, dan houden we er in het menu rekening mee.",
  },
  {
    question: "Hoe ver van tevoren moeten we boeken?",
    answer:
      "Hoe eerder hoe beter, zeker in het weekend. Vraag gerust ook last-minute aan, dan kijken we samen wat mogelijk is.",
  },
  {
    question: "Wat hebben jullie nodig in de keuken?",
    answer:
      "Een fornuis en wat aanrechtruimte is voldoende. De rest — pannen, messen en spullen — nemen wij mee.",
  },
  {
    question: "Ruimen jullie ook op?",
    answer:
      "Ja. Wij koken, serveren en maken de keuken weer netjes achter. Jullie hoeven alleen aan tafel te zitten.",
  },
  {
    question: "Kunnen jullie ook koken voor een grotere of kleinere groep?",
    answer:
      "Vertel ons gewoon met hoeveel jullie zijn via het aanvraagformulier, dan laten we weten of en hoe we dat kunnen regelen.",
  },
];
