import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CTA from "@/components/sections/CTA";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Over ons | Mannen met Pannen",
  description: `Maak kennis met ${BUSINESS.owners}, de mannen achter Mannen met Pannen catering in Den Haag.`,
};

export default function OverOnsPage() {
  return (
    <>
      <section className="section-padding pb-14 pt-16 sm:pt-24">
        <div className="container-max">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">Over ons</span>
          <h1 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Twee mannen, een paar pannen.</h1>
          <p className="mt-4 max-w-xl text-lg text-bark/75">
            {BUSINESS.owners} runnen Mannen met Pannen: koken bij mensen thuis, in Den Haag en omgeving.
          </p>
        </div>
      </section>
      <section className="section-padding pb-20">
        <div className="container-max grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            label={`Foto: ${BUSINESS.owners}`}
            aspect="landscape"
            src="/images/foto padel.jpg"
            alt={`${BUSINESS.owners}, de mannen achter Mannen met Pannen`}
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl">Waarom Mannen met Pannen</h2>
            <p className="text-bark/75">
              Wij vinden dat een goede avond niet begint bij een tafel in een restaurant, maar gewoon
              thuis, met de mensen om wie het gaat. Daarom komen we naar jullie toe: we koken in jullie
              eigen keuken en serveren aan jullie eigen tafel.
            </p>
            <p className="text-bark/75">
              Geen chique poespas, geen ingewikkelde kaart. Gewoon een goed doordacht menu, verse
              ingrediÃ«nten en twee mensen die het leuk vinden om voor een volle tafel te koken.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding pb-24">
        <div className="container-max grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-olive-dark/10 bg-cream-soft p-8">
            <h3 className="text-2xl">Hoe het begon</h3>
            <p className="mt-3 text-bark/70">
              Mannen met Pannen is ontstaan uit een simpel idee: waarom zou je uit eten gaan, als er
              thuis net zo goed â€” en veel gezelliger â€” voor je gekookt kan worden?
            </p>
          </div>
          <div className="rounded-xl border border-olive-dark/10 bg-cream-soft p-8">
            <h3 className="text-2xl">Voor wie we koken</h3>
            <p className="mt-3 text-bark/70">
              Van vriendengroepen die een avond willen vieren tot families en collega&apos;s: iedereen die
              liever thuis aan tafel zit dan in een restaurant.
            </p>
          </div>
        </div>
      </section>
      <CTA title="Zin om kennis te maken?" text="Vertel ons over jullie avond, dan nemen we snel contact op." />
    </>
  );
}

