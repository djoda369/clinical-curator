const outcomes = [
  {
    value: "+120%",
    title: "Repeat Visits",
    description:
      "Average increase in patient frequency within the first 6 months of implementation.",
  },
  {
    value: "$4.2k",
    title: "Higher LTV",
    description:
      "Average increase in Lifetime Value per patient through consistent recall compliance.",
  },
  {
    value: "28h",
    title: "Staff Efficiency",
    description:
      "Weekly admin hours saved on phone calls and manual scheduling per practice location.",
  },
];

export function OutcomesSection() {
  return (
    <section className="rounded-[2rem] bg-foreground px-6 py-24 text-surface md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-surface md:text-5xl">
              Turn retention into recurring revenue.
            </h2>
            <p className="mt-4 text-xl text-blue-100/80">
              Concrete results measured across our 500+ clinic network.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10"
            >
              <div className="mb-6 text-5xl font-extrabold text-tertiary-fixed">
                {outcome.value}
              </div>
              <h4 className="mb-3 text-xl font-bold text-surface">
                {outcome.title}
              </h4>
              <p className="text-blue-100/70">{outcome.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
