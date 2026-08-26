import type { Metadata } from "next";
import RequestForm from "@/components/sections/RequestForm";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Vraag een avond aan | Mannen met Pannen",
  description:
    "Vul het aanvraagformulier in en Mannen met Pannen neemt persoonlijk contact met je op om een avond in te plannen.",
};

export default function ContactPage() {
  return (
    <section className="section-padding py-16 sm:py-24">
      <div className="container-max grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">Contact</span>
            <h1 className="mt-2 text-4xl sm:text-5xl">Vraag een avond aan</h1>
            <p className="mt-4 text-bark/75">
              Vul het formulier in met jullie wensen. Er wordt niets geboekt of betaald via de
              website — wij nemen persoonlijk contact met jullie op om alles door te spreken.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-olive-dark/10 bg-cream-soft p-6">
            <h2 className="text-lg font-semibold text-olive-dark">Liever direct contact?</h2>
            <a href={`mailto:${BUSINESS.email}`} className="text-bark/80 hover:text-terracotta">
              {BUSINESS.email}
            </a>
            {BUSINESS.phones.map((p) => (
              <a
                key={p.number}
                href={`tel:${p.number.replace(/\s/g, "")}`}
                className="text-bark/80 hover:text-terracotta"
              >
                {p.label}: {p.number}
              </a>
            ))}
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark/80 hover:text-terracotta"
            >
              Instagram — {BUSINESS.instagramHandle}
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-olive-dark/10 bg-white/50 p-6 shadow-card sm:p-10">
          <RequestForm />
        </div>
      </div>
    </section>
  );
}
