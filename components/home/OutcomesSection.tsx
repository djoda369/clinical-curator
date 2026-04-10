const outcomes = [
  {
    title: "Recovered Bookings",
    description: "Use real business data here before publish.",
  },
  {
    title: "Rebooked Cancellations",
    description: "Use real business data here before publish.",
  },
  {
    title: "Team Time Saved",
    description: "Use real business data here before publish.",
  },
];

export function OutcomesSection() {
  return (
    <section className="rounded-[2rem] bg-foreground px-6 py-24 text-surface md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-surface md:text-5xl">
              Measure what the system is recovering.
            </h2>
            <p className="mt-4 text-xl text-blue-100/80">
              Use real business data here. Prioritize recovered bookings,
              rebooked cancellations, and team time saved over lifetime-value
              claims.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-100/70">
                Proof-safe placeholder
              </p>
              <h4 className="mb-3 text-3xl font-extrabold text-tertiary-fixed">
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
