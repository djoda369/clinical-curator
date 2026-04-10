import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Features — Recally",
  description:
    "Campaign templates, recovery workflows, scheduling controls, and team coordination for better booking follow-up.",
};

const campaignsAndTemplates = [
  {
    kind: "Template",
    title: "Inactive client reactivation",
    detail: "Email + SMS · 4 touchpoints",
    statusLabel: "In use",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    kindClass: "bg-tertiary/10 text-tertiary",
  },
  {
    kind: "Campaign",
    title: "Return reminder & rebooking push",
    detail: "Audience from queue · 3-step sequence",
    statusLabel: "Running",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    kindClass: "bg-primary/10 text-primary",
  },
  {
    kind: "Template",
    title: "Canceled booking rescue",
    detail: "SMS sequence · editable copy",
    statusLabel: "Live",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    kindClass: "bg-tertiary/10 text-tertiary",
  },
] as const;

const operationsControls = [
  {
    title: "Scheduling",
    description:
      "Keep calendars, availability windows, and booking rules aligned with the demand your recovery flows generate.",
  },
  {
    title: "Team management",
    description:
      "Organize staff availability and responsibilities so follow-up, booking, and day-to-day workflows stay coordinated.",
  },
  {
    title: "Services",
    description:
      "Define the services, durations, and booking constraints you want clients to see before they land on the wrong slot.",
  },
] as const;

const recoveryFlows = [
  {
    title: "Inactive Client Reactivation",
    status: "Clients ready",
    description:
      "Automatically stages outreach for clients who have gone quiet until they book or need staff attention.",
    iconWrap: "bg-blue-50 text-blue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
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
    title: "Canceled Booking Rescue",
    status: "Bookings ready",
    description:
      "Re-engages canceled bookings quickly so open slots have a better chance of being rebooked before they disappear.",
    iconWrap: "bg-green-50 text-green-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 4.75v3.5" />
        <path d="M16 4.75v3.5" />
        <rect x="4.75" y="6.75" width="14.5" height="12.5" rx="2" />
        <path d="M4.75 11h14.5" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "No-show Recovery",
    status: "Same-day queue",
    description:
      "Triggers same-day follow-up and hands staff only the exceptions that genuinely need a person to intervene.",
    iconWrap: "bg-purple-50 text-purple-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="8.25" />
      </svg>
    ),
  },
];

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OperationsPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
          <section className="space-y-3">
            <span className="block text-[11px] font-medium uppercase tracking-widest text-foreground-muted">
              Feature Overview
            </span>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Features built to recover revenue without more manual follow-up.
            </h1>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Campaigns &amp; templates
                </h2>
                <p className="mt-1 max-w-xl text-sm text-foreground-muted">
                  Reusable message templates and the campaigns that send
                  them—built for retention workflows, not generic
                  marketing blasts.
                </p>
              </div>
              <button
                type="button"
                className="flex shrink-0 items-center gap-1 text-sm font-semibold text-primary"
              >
                Manage templates <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {campaignsAndTemplates.map((item) => (
                <div
                  key={item.title}
                  className="flex min-w-0 flex-col space-y-4 rounded-xl bg-surface-container-lowest p-5 shadow-ambient"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.kind === "Campaign" ? (
                          <>
                            <path d="M4 19V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14" />
                            <path d="M8 7h8" />
                            <path d="M8 11h5" />
                          </>
                        ) : (
                          <>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="M8 13h8" />
                            <path d="M8 17h6" />
                          </>
                        )}
                      </svg>
                    </div>
                    <div
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${item.kindClass}`}
                    >
                      {item.kind}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-base font-bold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {item.detail}
                    </p>
                  </div>

                  <div
                    className={`w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.statusClass}`}
                  >
                    {item.statusLabel}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Active Recovery Flows
            </h2>
            <div className="space-y-4">
              {recoveryFlows.map((flow) => (
                <div
                  key={flow.title}
                  className="flex flex-col gap-4 rounded-xl bg-surface-container-lowest p-5 shadow-ambient md:flex-row md:items-start md:justify-between"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${flow.iconWrap}`}
                    >
                      {flow.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-foreground">{flow.title}</p>
                      <p className="max-w-2xl text-sm text-foreground-muted">
                        {flow.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full bg-surface-container px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                    {flow.status}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-foreground-muted">
                Daily workflows
              </h3>
              <h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Run bookings, team coordination, and service setup from one
                workflow layer.
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground-muted md:text-base">
                Keep the systems behind booking organized so your recovery
                campaigns connect to real availability, the right team members,
                and the right services without extra manual cleanup.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {operationsControls.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-surface-container-lowest/90 p-4 shadow-ambient"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-full w-1/2 opacity-20">
              <svg
                className="h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="gradient-tertiary"
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#006947" stopOpacity="1" />
                    <stop offset="100%" stopColor="#006947" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 80 Q 20 70, 40 75 T 60 40 T 80 50 T 100 10 L 100 100 L 0 100 Z"
                  fill="url(#gradient-tertiary)"
                />
              </svg>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
