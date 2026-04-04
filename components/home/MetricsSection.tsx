const metrics = [
  {
    label: "Reactivated Patients",
    value: "2,400+",
    accentClassName: "border-primary/10",
  },
  {
    label: "Revenue Recovered",
    value: "$1.2M+",
    accentClassName: "border-tertiary/10",
  },
  {
    label: "Repeat Visit Growth",
    value: "42%",
    accentClassName: "border-sky-500/10",
  },
  {
    label: "Manual Time Saved",
    value: "15h/wk",
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
              key={metric.label}
              className={`shadow-ambient rounded-xl border-b-4 bg-surface-container-lowest p-8 ${metric.accentClassName}`}
            >
              <p className="mb-2 text-sm font-medium text-foreground-muted">
                {metric.label}
              </p>
              <h3 className="font-display text-3xl font-extrabold text-foreground">
                {metric.value}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
