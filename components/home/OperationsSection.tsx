const capabilities = [
  {
    title: "Front-desk tasking",
    description:
      "Route only the follow-up tasks that need a person instead of forcing the front desk to chase every opportunity manually.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3.5 18a5.5 5.5 0 0 1 11 0" />
        <path d="M14 18a4 4 0 0 1 6.5-3.1" />
      </svg>
    ),
  },
  {
    title: "Workflow visibility",
    description:
      "See what is reactivating, what still needs intervention, and where rebooking momentum is building inside daily operations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 4.5a4 4 0 0 1 5 5L10 19l-5 1 1-5 8.5-8.5Z" />
        <path d="m13 6 5 5" />
      </svg>
    ),
  },
  {
    title: "Role-based coordination",
    description:
      "Keep front desk, clinic ops, and managers aligned on one recovery process with clear ownership and fewer missed handoffs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.75 18.5 6v5.5c0 4.12-2.63 7.9-6.5 9-3.87-1.1-6.5-4.88-6.5-9V6L12 3.75Z" />
        <path d="M9.5 11.5V10a2.5 2.5 0 1 1 5 0v1.5" />
        <rect x="8.5" y="11.5" width="7" height="5" rx="1.2" />
      </svg>
    ),
  },
];

export function OperationsSection() {
  return (
    <section className="overflow-hidden px-6 py-24 md:px-10 lg:px-0">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 overflow-hidden rounded-[2rem] bg-surface-container p-6 shadow-[0_24px_60px_rgba(25,28,30,0.08)]">
            <div className="rounded-[1.5rem] bg-surface-container-lowest p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                    Operations workflow layer
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    Front desk and follow-up finally work as one system.
                  </h3>
                </div>
                <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-sm font-medium text-on-tertiary-fixed">
                  Visible
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl bg-surface-container-low p-5">
                  <div className="mx-auto flex h-44 w-full max-w-[220px] items-end justify-center rounded-[1.75rem] bg-[linear-gradient(180deg,#f4f7fb_0%,#dfe8f3_100%)] px-6 pt-6">
                    <div className="relative flex h-full w-full items-end justify-center">
                      <div className="absolute top-6 h-16 w-16 rounded-full bg-slate-200" />
                      <div className="h-24 w-24 rounded-t-[2rem] bg-primary/20" />
                      <div className="absolute bottom-0 h-28 w-32 rounded-t-[2.5rem] bg-primary/10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                      Recovery queue
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-foreground">Patients ready</span>
                      <span className="font-semibold text-primary">
                        Prioritized
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                      Team handoff
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-surface-container px-3 py-2">
                        <span className="text-sm text-foreground">Front desk</span>
                        <span className="text-sm font-medium text-foreground">
                          Tasked only when needed
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-surface-container px-3 py-2">
                        <span className="text-sm text-foreground">Performance</span>
                        <span className="text-sm font-medium text-tertiary">
                          Visible daily
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 z-20 max-w-[280px] rounded-xl border-l-4 border-tertiary bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(25,28,30,0.08)]">
            <p className="mb-4 text-sm italic leading-relaxed text-foreground">
              Give your team a repeatable system for follow-up instead of
              relying on memory, manual lists, and missed handoffs.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-200" />
              <div>
                <p className="text-xs font-bold text-foreground">
                  Clinical Curator
                </p>
                <p className="text-[10px] uppercase text-foreground-muted">
                  Operations workflow layer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            More than messaging. It is a recovery workflow layer for clinics.
          </h2>
          <p className="mb-12 text-xl text-foreground-muted">
            The platform connects reactivation, front-desk tasks, and
            performance visibility so revenue recovery becomes part of daily
            operations.
          </p>

          <div className="space-y-10">
            {capabilities.map((capability) => (
              <div key={capability.title} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
                  {capability.icon}
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-foreground">
                    {capability.title}
                  </h4>
                  <p className="text-foreground-muted">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
