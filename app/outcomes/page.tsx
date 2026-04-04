import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

const keyMetrics = [
  {
    label: "Reactivated Patients",
    value: "1,284",
    delta: "+12%",
    toneClassName: "bg-primary/10 text-primary",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="8" r="3" />
        <path d="M4.5 18a5.5 5.5 0 0 1 11 0" />
        <path d="M18 8v6" />
        <path d="M15 11h6" />
      </svg>
    ),
  },
  {
    label: "Revenue Recovered",
    value: "$42.8k",
    delta: "+8%",
    toneClassName: "bg-tertiary/10 text-tertiary",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.75 18.5 6v5.5c0 4.12-2.63 7.9-6.5 9-3.87-1.1-6.5-4.88-6.5-9V6L12 3.75Z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    ),
  },
];

const lifecycleInsights = [
  {
    title: "Repeat Visit Growth",
    description:
      "Patients returning for follow-up care within 90 days has increased significantly.",
    value: "78%",
  },
];

const monthlyRecovery = [
  { label: "Week 1", value: "$38k" },
  { label: "Week 2", value: "$44k" },
  { label: "Week 3", value: "$51k" },
  { label: "Week 4", value: "$49k" },
];

export default function OutcomesPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-on-tertiary-fixed">
                  Q4 Performance
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Outcomes
              </h1>
              <p className="max-w-2xl text-base font-medium leading-relaxed text-foreground-muted md:text-lg">
                Monitoring revenue recovery and long-term patient value lifecycle
                through a more editorial, executive-level snapshot of growth.
              </p>
            </div>

            <article className="rounded-[1.75rem] bg-surface-container p-4">
              <div className="rounded-[1.5rem] bg-surface-container-lowest p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                  Executive Snapshot
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="font-display text-3xl font-black text-primary">
                      $182k
                    </p>
                    <p className="text-sm text-foreground-muted">
                      recovered this month
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-black text-foreground">
                      94%
                    </p>
                    <p className="text-sm text-foreground-muted">
                      target completion
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-black text-tertiary">
                      +14.2%
                    </p>
                    <p className="text-sm text-foreground-muted">
                      retained patient LTV
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-12">
            <article className="relative overflow-hidden rounded-[2rem] bg-surface-container-lowest p-8 lg:col-span-8 lg:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                    Recovered Revenue
                  </h2>
                  <p className="text-sm text-foreground-muted">
                    Growth trajectory over last 30 days
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-4xl font-black text-primary">$182,400</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">
                    Target Achieved 94%
                  </p>
                </div>
              </div>

              <div className="relative mt-8 h-44 w-full md:h-52">
                <svg viewBox="0 0 400 100" className="h-full w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="outcomes-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0058be" />
                      <stop offset="100%" stopColor="#2170e4" />
                    </linearGradient>
                    <linearGradient id="outcomes-area" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0058be" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0058be" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q50,75 80,40 T160,50 T240,20 T320,45 T400,10"
                    fill="none"
                    stroke="url(#outcomes-line)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,80 Q50,75 80,40 T160,50 T240,20 T320,45 T400,10 L400,100 L0,100 Z"
                    fill="url(#outcomes-area)"
                    opacity="0.1"
                  />
                </svg>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {monthlyRecovery.map((item) => (
                  <div key={item.label} className="rounded-xl bg-surface-container-low p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                      {item.label}
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-6 lg:col-span-4">
              {keyMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="flex flex-col justify-between rounded-[1.5rem] bg-surface-container-lowest p-6"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${metric.toneClassName}`}
                  >
                    {metric.icon}
                  </div>
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      {metric.label}
                    </p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-foreground">
                        {metric.value}
                      </span>
                      <span className="text-xs font-bold text-tertiary">
                        {metric.delta}
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              <article className="rounded-[1.5rem] bg-surface-container p-4">
                <div className="rounded-[1.25rem] bg-surface-container-lowest p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                    Revenue Signal
                  </p>
                  <p className="mt-4 font-display text-3xl font-black text-foreground">
                    Mondays outperform by 18%
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    Early-week reactivation messages are still driving the highest
                    booking intent, especially for lapsed preventative care.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <h2 className="px-1 font-display text-2xl font-bold tracking-tight text-foreground">
                Retention Lifecycle
              </h2>

              {lifecycleInsights.map((insight) => (
                <article
                  key={insight.title}
                  className="flex items-center gap-6 rounded-[1.5rem] bg-surface-container-low p-6 lg:p-8"
                >
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-tertiary/20">
                    <span className="text-base font-bold text-tertiary">
                      {insight.value}
                    </span>
                    <svg
                      className="absolute inset-0 h-full w-full -rotate-90"
                      aria-hidden="true"
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-tertiary"
                        strokeDasharray="220"
                        strokeDashoffset="48"
                      />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {insight.title}
                    </h3>
                    <p className="leading-relaxed text-foreground-muted">
                      {insight.description}
                    </p>
                  </div>
                </article>
              ))}

              <article className="space-y-4 rounded-[1.5rem] bg-surface-container-lowest p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)] lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                    Patient LTV
                  </span>
                  <button
                    type="button"
                    aria-label="More patient LTV options"
                    className="text-slate-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h.01" />
                      <path d="M12 12h.01" />
                      <path d="M19 12h.01" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="space-y-1">
                    <p className="font-display text-5xl font-black tracking-tight text-foreground">
                      $4,250
                    </p>
                    <p className="text-sm font-medium text-foreground-muted">
                      Avg. Revenue Per Retained Patient
                    </p>
                  </div>
                  <div className="pb-1">
                    <div className="flex items-center gap-1 rounded-full bg-tertiary/10 px-3 py-1.5">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4 text-tertiary"
                        fill="currentColor"
                      >
                        <path d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm4.27 6.9-4.95 5.82a.75.75 0 0 1-1.09.07l-2.48-2.28a.75.75 0 1 1 1.02-1.1l1.91 1.76 4.45-5.24a.75.75 0 1 1 1.14.97Z" />
                      </svg>
                      <span className="text-xs font-bold text-tertiary">+14.2%</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="space-y-6">
              <article className="rounded-[1.5rem] bg-surface-container p-4">
                <div className="rounded-[1.25rem] bg-surface-container-lowest p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                    Comparative Signal
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    <div className="rounded-xl bg-surface-container-low p-4">
                      <p className="text-sm text-foreground-muted">Recovered revenue</p>
                      <p className="mt-2 font-display text-2xl font-bold text-primary">
                        +31% QoQ
                      </p>
                    </div>
                    <div className="rounded-xl bg-surface-container-low p-4">
                      <p className="text-sm text-foreground-muted">Recall compliance</p>
                      <p className="mt-2 font-display text-2xl font-bold text-tertiary">
                        86%
                      </p>
                    </div>
                    <div className="rounded-xl bg-surface-container-low p-4">
                      <p className="text-sm text-foreground-muted">Avg. response lag</p>
                      <p className="mt-2 font-display text-2xl font-bold text-foreground">
                        14 hrs
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[1.5rem] bg-primary p-8 text-primary-foreground lg:mt-12">
                <div className="relative z-10 space-y-3">
                  <h3 className="font-display text-2xl font-bold">
                    Optimization Suggestion
                  </h3>
                  <p className="leading-relaxed text-white/80">
                    Based on your outcomes, increasing reactivation outreach by 15%
                    on Monday mornings could yield an additional{" "}
                    <span className="font-bold text-tertiary-fixed">$12,000</span>{" "}
                    in monthly revenue.
                  </p>
                </div>

                <button
                  type="button"
                  className="relative z-10 mt-6 w-full rounded-full bg-white py-3 text-sm font-bold text-primary transition-all active:scale-95 md:w-auto md:px-8"
                >
                  Enable Auto-Outreach
                </button>

                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              </article>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
