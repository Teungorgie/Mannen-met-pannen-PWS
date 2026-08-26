import type { Metadata } from "next";
import MenuCard from "@/components/sections/MenuCard";
import PriceCalculator from "@/components/sections/PriceCalculator";
import Button from "@/components/ui/Button";
import { MENUS, PRICING, formatEuro } from "@/lib/config";

export const metadata: Metadata = {
  title: "Menu's | Mannen met Pannen",
  description:
    "Kies uit een Italiaans of Frans driegangenmenu voor €24,95 p.p., of vraag een menu op maat aan. Wijn is optioneel.",
};

export default function MenusPage() {
  return (
    <>
      <section className="section-padding pb-14 pt-16 sm:pt-24">
        <div className="container-max">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">Menu&apos;s</span>
          <h1 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Frans of Italiaans. Wij mixen niet.</h1>
          <p className="mt-4 max-w-xl text-lg text-bark/75">
            Beide menu&apos;s zijn compleet met voor-, hoofd- en nagerecht. Kies de keuken die bij jullie avond past.
          </p>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-max grid gap-6 sm:grid-cols-2">
          {MENUS.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-max rounded-xl border border-dashed border-olive/30 bg-cream-soft p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl">Menu op aanvraag</h2>
          <p className="mt-3 max-w-2xl text-bark/75">
            Willen jullie iets anders dan ons Italiaanse of Franse menu — een ander thema, specifieke
            wensen of iets seizoensgebonden? Dat bespreken we graag persoonlijk. De prijs voor een menu
            op aanvraag stellen we samen met jullie vast.
          </p>
          <Button href="/contact" variant="secondary" className="mt-6">
            Bespreek een menu op aanvraag
          </Button>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl">Prijs</h2>
          <p className="mt-2 max-w-xl text-bark/70">
            3 gangen — {formatEuro(PRICING.menuPerPerson)} p.p. Wijn optioneel — +{formatEuro(PRICING.winePerPerson)}{" "}
            p.p. De prijs is exclusief wijn, tenzij je die erbij kiest.
          </p>
          <div className="mt-10">
            <PriceCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
