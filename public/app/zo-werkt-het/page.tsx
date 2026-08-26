import type { Metadata } from "next";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Zo werkt het | Mannen met Pannen",
  description:
    "Van menu kiezen tot aan tafel: zo verloopt een avond met Mannen met Pannen catering aan huis.",
};

export default function ZoWerktHetPage() {
  return (
    <>
      <section className="section-padding pb-14 pt-16 sm:pt-24">
        <div className="container-max">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">Zo werkt het</span>
          <h1 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Geen restaurantreservering. Gewoon thuis aan tafel.</h1>
          <p className="mt-4 max-w-xl text-lg text-bark/75">
            Wij koken. Jullie genieten. Hieronder lees je precies hoe een avond met ons verloopt.
          </p>
        </div>
      </section>

      <HowItWorks />

      <section className="section-padding pb-20">
        <div className="container-max grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-olive-dark/10 bg-cream-soft p-6">
            <h3 className="text-xl">Wat wij meenemen</h3>
            <p className="mt-2 text-bark/70">
              Alle ingrediënten, pannen en keukenspullen die nodig zijn om het menu te bereiden.
            </p>
          </div>
          <div className="rounded-xl border border-olive-dark/10 bg-cream-soft p-6">
            <h3 className="text-xl">Wat jullie regelen</h3>
            <p className="mt-2 text-bark/70">
              Een fornuis, wat aanrechtruimte en een tafel om aan te zitten. De rest doen wij.
            </p>
          </div>
          <div className="rounded-xl border border-olive-dark/10 bg-cream-soft p-6">
            <h3 className="text-xl">Na het eten</h3>
            <p className="mt-2 text-bark/70">
              Wij ruimen de keuken weer netjes op. Jullie blijven gewoon aan tafel zitten.
            </p>
          </div>
        </div>
      </section>

      <Gallery />

      <section className="section-padding pb-24">
        <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Veelgestelde vragen</h2>
            <p className="mt-2 max-w-sm text-bark/70">Alles wat je van tevoren wilt weten.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <CTA title="Klaar voor een avond zonder gedoe?" />
    </>
  );
}
