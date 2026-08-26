const STEPS = [
  {
    number: "01",
    title: "Kiezen",
    text: "Jullie kiezen een menu — Italiaans, Frans of iets op aanvraag — en geven door met hoeveel jullie zijn.",
  },
  {
    number: "02",
    title: "Wij komen",
    text: "Wij regelen de boodschappen en de voorbereiding en komen bij jullie thuis koken.",
  },
  {
    number: "03",
    title: "Aan tafel",
    text: "Wij serveren, jullie zitten aan tafel. Aan het einde van de avond ruimen wij de keuken weer op.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding py-20">
      <div className="container-max">
        <h2 className="text-3xl sm:text-4xl">Zo gaat een avond met ons</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-3">
              <span className="font-display text-5xl text-terracotta/40">{step.number}</span>
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-bark/75">{step.text}</p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-1.25rem] top-6 hidden text-2xl text-olive/30 sm:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
