import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/config";

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden pb-20 pt-16 sm:pt-24">
      {/* zachte achtergrondvorm */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-olive/10 blur-3xl"
      />

      <div className="container-max relative flex flex-col items-start gap-6">
        <span className="animate-fadeUp rounded-full border border-olive-dark/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-olive-dark">
          {BUSINESS.tagline}
        </span>

        <h1
          className="arc-underline max-w-3xl animate-fadeUp text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Een avond goed eten.
          <br />
          <span className="italic text-terracotta">Wij regelen de pannen.</span>
        </h1>

        <p className="mt-2 max-w-xl animate-fadeUp text-lg text-bark/80 sm:text-xl" style={{ animationDelay: "160ms" }}>
          Catering aan huis in Den Haag en omgeving.
        </p>

        <p className="max-w-xl animate-fadeUp text-base text-bark/70" style={{ animationDelay: "220ms" }}>
          Jullie regelen de gezelligheid. Wij regelen het eten. Wijn? Dat kan erbij.
        </p>

        <div className="mt-4 flex animate-fadeUp flex-col gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
          <Button href="/menus" variant="primary">
            Bekijk de menu&apos;s
          </Button>
          <Button href="/contact" variant="ghost">
            Vraag een avond aan
          </Button>
        </div>
      </div>
    </section>
  );
}
