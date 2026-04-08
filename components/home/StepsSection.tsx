const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Connect your patient data and define the patient groups you want to recover first.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="9.5" width="5" height="5" rx="1.2" />
        <rect x="15.5" y="4.5" width="5" height="5" rx="1.2" />
        <rect x="15.5" y="14.5" width="5" height="5" rx="1.2" />
        <path d="M8.5 12h4" />
        <path d="M12.5 12V7h3" />
        <path d="M12.5 12v5h3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We identify inactive patients, missed appointments, and overdue follow-up opportunities ready for automation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 18.5h15" />
        <path d="M7.5 15.5V10" />
        <path d="M12 15.5V6.5" />
        <path d="M16.5 15.5V12" />
        <circle cx="12" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Turn on the first recovery flows and give your team clear next steps only where human follow-up is needed.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 4c2.9.4 5.6 3.1 6 6-3.6.9-6.9 4.2-7.8 7.8-2.9-.4-5.6-3.1-6-6C7.1 8.2 10.4 4.9 14 4Z" />
        <path d="M10.5 13.5 6 18" />
        <path d="M8 20H4v-4" />
      </svg>
    ),
  },
];

export function StepsSection() {
  return (
    <section
      id="how-it-works"
      className="border-t border-surface-container bg-surface px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            Launch your recovery system in 3 steps.
          </h2>
          <p className="mt-6 text-foreground-muted">
            Start with the patient opportunities already in your data and go
            live without a disruptive implementation.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <span className="absolute -left-4 -top-12 z-0 text-8xl font-black text-surface-container">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="shadow-ambient mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-lowest text-primary">
                  {step.icon}
                </div>

                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  {step.title}
                </h4>
                <p className="leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
