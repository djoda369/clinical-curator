const metrics = [
  {
    title: "Inactive Clients Reactivated",
    note: "Use verified business data only.",
    accentClassName: "border-primary/10",
  },
  {
    title: "Revenue Recovered",
    note: "Use verified business data only.",
    accentClassName: "border-tertiary/10",
  },
  {
    title: "Bookings Recovered",
    note: "Use verified business data only.",
    accentClassName: "border-sky-500/10",
  },
  {
    title: "Team Time Saved",
    note: "Use verified business data only.",
    accentClassName: "border-primary/10",
  },
];

export function MetricsSection() {
  return (
    <section className="rounded-[2rem] bg-surface-container-low py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.title}
              className={`shadow-ambient rounded-xl border-b-4 bg-surface-container-lowest p-8 ${metric.accentClassName}`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground-muted">
                Proof-safe metric
              </p>
              <h3 className="font-display text-2xl font-extrabold leading-tight text-foreground">
                {metric.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {metric.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
