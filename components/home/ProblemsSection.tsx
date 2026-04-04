const problems = [
  {
    title: "Inactive Patients",
    description:
      "Patients who haven't visited in 6-12 months are likely already looking for alternatives.",
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
        <path d="M16 21a4 4 0 0 0-8 0" />
        <circle cx="12" cy="8" r="4" />
        <path d="M4 4l16 16" />
      </svg>
    ),
  },
  {
    title: "Overdue Recalls",
    description:
      "Routine checkups that get missed represent the highest lifetime value loss for any clinic.",
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
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 10h18" />
        <path d="M9 14l6 6" />
        <path d="M15 14l-6 6" />
      </svg>
    ),
  },
  {
    title: "Unfinished Plans",
    description:
      "Treatment plans that were started but never completed stall both health outcomes and revenue.",
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
        <path d="M9 4.75h6.5a2.75 2.75 0 0 1 2.75 2.75v9.25a2.5 2.5 0 0 1-2.5 2.5H8.5A2.75 2.75 0 0 1 5.75 16.5V8A3.25 3.25 0 0 1 9 4.75Z" />
        <path d="M8.5 8.75h7" />
        <path d="M8.5 12h7" />
        <path d="M8.5 15.25h4.25" />
      </svg>
    ),
  },
  {
    title: "No-show Recovery",
    description:
      "Every empty chair is a sunk cost. Failing to rebook no-shows immediately hurts the bottom line.",
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
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M5 4l14 16" />
      </svg>
    ),
  },
];

export function ProblemsSection() {
  return (
    <section className="px-6 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Your patient database is sitting on lost revenue.
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-xl border-b-2 border-transparent bg-surface-container p-8 transition-all hover:-translate-y-1 hover:border-rose-300/70"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                {problem.icon}
              </div>
              <h4 className="mb-3 text-xl font-bold text-foreground">
                {problem.title}
              </h4>
              <p className="leading-relaxed text-foreground-muted">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
