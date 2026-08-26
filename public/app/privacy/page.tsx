import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacyverklaring | Mannen met Pannen",
  description: "Hoe Mannen met Pannen omgaat met de gegevens die je via het aanvraagformulier deelt.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding py-16 sm:py-24">
      <div className="container-max max-w-2xl">
        <h1 className="text-4xl sm:text-5xl">Privacyverklaring</h1>
        <p className="mt-4 text-bark/70">
          Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-10 flex flex-col gap-8 text-bark/80">
          <div>
            <h2 className="text-2xl text-olive-dark">Welke gegevens we verzamelen</h2>
            <p className="mt-2">
              Wanneer je het aanvraagformulier op deze website invult, ontvangen wij de gegevens die je
              zelf invult: onder andere je naam, e-mailadres, telefoonnummer, adres en informatie over
              de gewenste avond (datum, aantal personen, menukeuze, dieetwensen).
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-olive-dark">Waar we deze gegevens voor gebruiken</h2>
            <p className="mt-2">
              We gebruiken je gegevens uitsluitend om contact met je op te nemen over je aanvraag en om
              de avond bij jullie thuis goed voor te bereiden. We gebruiken je gegevens niet voor
              marketingdoeleinden zonder je toestemming.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-olive-dark">Delen met derden</h2>
            <p className="mt-2">
              We delen je gegevens niet met derden, behalve wanneer dit nodig is om het aanvraagformulier
              technisch te laten werken (bijvoorbeeld via de dienst die de formuliergegevens verwerkt).
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-olive-dark">Bewaartermijn</h2>
            <p className="mt-2">
              We bewaren je gegevens niet langer dan nodig is om je aanvraag te behandelen en de
              afgesproken avond te laten plaatsvinden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-olive-dark">Contact</h2>
            <p className="mt-2">
              Heb je vragen over je gegevens, of wil je dat we ze verwijderen? Neem contact met ons op
              via{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-terracotta hover:underline">
                {BUSINESS.email}
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-bark/50">
            Dit is een eenvoudige privacyverklaring. Deze pagina kan later uitgebreid worden met meer
            juridische details, bijvoorbeeld met hulp van een jurist.
          </p>
        </div>
      </div>
    </section>
  );
}
