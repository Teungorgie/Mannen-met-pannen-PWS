import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import MenuCard from "@/components/sections/MenuCard";
import PriceCalculator from "@/components/sections/PriceCalculator";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import { MENUS } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />

      <section className="section-padding py-20">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl sm:text-4xl">Twee menu&apos;s, geen mix</h2>
              <p className="mt-2 max-w-xl text-bark/70">
                Frans of Italiaans — we combineren de keukens niet, zodat elk menu zijn eigen lijn houdt.
              </p>
            </div>
            <Button href="/menus" variant="ghost">
              Bekijk alle menu&apos;s
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {MENUS.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl">Wat kost een avond?</h2>
          <p className="mt-2 max-w-xl text-bark/70">
            Bereken direct een indicatie voor jullie groep.
          </p>
          <div className="mt-10">
            <PriceCalculator />
          </div>
        </div>
      </section>

      <Gallery />

      <section className="section-padding py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Veelgestelde vragen</h2>
            <p className="mt-2 max-w-sm text-bark/70">
              Staat je vraag er niet bij? Stuur ons gerust een appje of mailtje.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      <CTA
        title="Zullen we een avond inplannen?"
        text="Vertel ons over jullie avond en wij nemen persoonlijk contact op."
      />
    </>
  );
}
