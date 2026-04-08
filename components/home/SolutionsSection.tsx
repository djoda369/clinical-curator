import Link from "next/link";

const campaignChecks = [
  "Segment by last visit, service, or recall status",
  "Escalate to staff only when a patient needs human follow-up",
];

const stars = Array.from({ length: 5 });

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-tertiary"
      fill="currentColor"
    >
      <path d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm4.27 6.9-4.95 5.82a.75.75 0 0 1-1.09.07l-2.48-2.28a.75.75 0 1 1 1.02-1.1l1.91 1.76 4.45-5.24a.75.75 0 1 1 1.14.97Z" />
    </svg>
  );
}

function SyncProblemIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-12 w-12 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8.98 8.98 0 0 0-2.64-6.36A9 9 0 0 0 3.9 8" />
      <path d="M3 4v4h4" />
      <path d="M3 12a9 9 0 0 0 15.46 6.36A8.98 8.98 0 0 0 20.1 16" />
      <path d="M21 20v-4h-4" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16.5" r=".5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-tertiary"
      fill="currentColor"
    >
      <path d="m12 2.75 2.83 5.73 6.32.92-4.57 4.46 1.08 6.29L12 17.18l-5.66 2.97 1.08-6.29L2.85 9.4l6.32-.92L12 2.75Z" />
    </svg>
  );
}

export function SolutionsSection() {
  return (
    <section
      id="recovery-workflows"
      className="rounded-[2rem] bg-surface-container-low px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              A recovery system that works inside clinic operations.
            </h2>
            <p className="mt-6 text-xl text-foreground-muted">
              Clinical Curator sits on top of your current workflow to automate
              reactivation, recall, and rebooking while only handing staff the
              tasks that actually need a person.
            </p>
          </div>

          <Link
            href="/#recovery-workflows"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-8 py-3 font-bold text-surface transition-colors hover:bg-primary md:w-auto"
          >
            Explore Recovery Workflows
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="shadow-ambient group overflow-hidden rounded-xl bg-surface-container-lowest p-10 md:col-span-8">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="flex-1">
                <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Primary use case
                </span>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Inactive patient reactivation
                </h4>
                <p className="mb-8 leading-relaxed text-foreground-muted">
                  Automatically identify patients who have gone quiet and send
                  staged SMS and email follow-up until they book or need staff
                  outreach.
                </p>

                <ul className="space-y-4">
                  {campaignChecks.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-foreground"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-64 w-full flex-1 overflow-hidden rounded-lg bg-surface-container p-5">
                <div className="h-full rounded-xl bg-surface-container-lowest p-4 transition-transform duration-700 group-hover:scale-[1.03]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
                      Recovery Workflow
                    </span>
                    <span className="rounded-full bg-tertiary-fixed px-2.5 py-1 text-[10px] font-bold text-on-tertiary-fixed">
                      LIVE
                    </span>
                  </div>

                  <div className="grid h-[calc(100%-2rem)] grid-cols-[0.8fr_1.2fr] gap-3">
                    <div className="rounded-lg bg-surface-container-low p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
                        Entry rules
                      </p>
                      <div className="mt-3 space-y-2">
                        <div className="rounded-md bg-surface-container px-3 py-2 text-xs text-foreground">
                          Last visit 6+ months ago
                        </div>
                        <div className="rounded-md bg-surface-container px-3 py-2 text-xs text-foreground">
                          Overdue for follow-up
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
                        Sequence
                      </p>
                      <div className="mt-3 flex h-[calc(100%-1.25rem)] items-center justify-between gap-2">
                        <div className="flex-1 rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground">
                          SMS
                        </div>
                        <div className="h-px flex-1 bg-primary/25" />
                        <div className="flex-1 rounded-full bg-surface-container px-3 py-2 text-center text-xs font-semibold text-foreground">
                          Email
                        </div>
                        <div className="h-px flex-1 bg-tertiary/25" />
                        <div className="flex-1 rounded-full bg-tertiary-fixed px-3 py-2 text-center text-xs font-semibold text-on-tertiary-fixed">
                          Staff
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-xl bg-primary p-10 text-primary-foreground shadow-xl md:col-span-4">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Supporting flow
            </span>
            <h4 className="mb-4 text-3xl font-bold">Overdue recall automation</h4>
            <p className="leading-relaxed text-blue-100/90">
              Keep overdue recall from becoming lost revenue.
            </p>

            <div className="mt-12 rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold">RECALL PRIORITY</span>
                <span className="text-xs font-bold text-tertiary-fixed">ACTIVE</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/20">
                <div className="h-full w-[85%] rounded-full bg-tertiary-fixed" />
              </div>
            </div>
          </article>

          <article className="rounded-xl bg-surface-container-high p-10 md:col-span-4">
            <h4 className="mb-4 text-2xl font-bold text-foreground">
              No-show recovery
            </h4>
            <p className="mb-6 text-foreground-muted">
              Trigger same-day rebooking outreach after missed visits so empty
              slots do not stay empty.
            </p>
            <SyncProblemIcon />
          </article>

          <article className="shadow-ambient rounded-xl bg-surface-container-lowest p-10 md:col-span-4">
            <h4 className="mb-4 text-2xl font-bold text-foreground">
              Canceled appointment rescue
            </h4>
            <p className="mb-6 text-foreground-muted">
              Re-engage patients who cancel before the visit disappears for
              good.
            </p>
            <div className="flex gap-2">
              <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-[10px] font-bold text-on-tertiary-fixed">
                READY TO REBOOK
              </span>
            </div>
          </article>

          <article className="shadow-ambient rounded-xl bg-surface-container-lowest p-10 md:col-span-4">
            <h4 className="mb-4 text-2xl font-bold text-foreground">
              Post-visit follow-up
            </h4>
            <p className="mb-6 text-foreground-muted">
              Send timely follow-up after visits or treatment so patients stay
              engaged without adding admin work.
            </p>
            <div className="flex items-center gap-1">
              {stars.map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
