import Script from "next/script";
import { Nav } from "@/components/layout/Nav";

const benefitPillars = [
  {
    title: "Recover missed revenue",
    description:
      "Find inactive clients, missed bookings, and follow-up gaps already sitting in your database.",
    toneClassName: "bg-tertiary-fixed text-on-tertiary-fixed",
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
        <path d="M4 16 10 10l4 4 6-7" />
        <path d="M14 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Reduce manual follow-up",
    description:
      "Show your team where automation should handle outreach and where staff should step in.",
    toneClassName: "bg-primary/10 text-primary",
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
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5 19a7 7 0 0 1 14 0" />
        <path d="m18 11 1.75 1.75L23 9.5" />
      </svg>
    ),
  },
  {
    title: "Prioritize fast wins",
    description:
      "Start with the highest-value recovery flows first, not a full system overhaul.",
    toneClassName: "bg-sky-100 text-sky-700",
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
        <path d="M8 7h8" />
        <path d="M8 12h5" />
        <path d="M5.5 4.75h13A1.75 1.75 0 0 1 20.25 6.5v11A1.75 1.75 0 0 1 18.5 19.25h-13A1.75 1.75 0 0 1 3.75 17.5v-11A1.75 1.75 0 0 1 5.5 4.75Z" />
        <path d="m14 15 1.5 1.5L18.5 13" />
      </svg>
    ),
  },
];

const trustStats = [
  {
    value: "Recovered Bookings",
    label: "Use verified business data only",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-9 w-9"
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
  {
    value: "Rebooked Missed Bookings",
    label: "Track from follow-up workflows",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="10" r="2.5" />
        <path d="M3.5 19a5.5 5.5 0 0 1 9.8-3.4" />
        <path d="M14.5 18h5" />
        <path d="m17 15.5 2.5 2.5L17 20.5" />
      </svg>
    ),
  },
  {
    value: "Team Time Saved",
    label: "Measure against manual follow-up",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20.25c4.5-2.8 7.5-6.1 7.5-10.2A4.3 4.3 0 0 0 12 7.3a4.3 4.3 0 0 0-7.5 2.75c0 4.1 3 7.4 7.5 10.2Z" />
      </svg>
    ),
  },
];

const roadmapSteps = [
  {
    number: "01",
    title: "Current workflow review",
    description:
      "We look at how inactive clients, cancellations, no-shows, and return reminders are handled today.",
  },
  {
    number: "02",
    title: "Revenue opportunity mapping",
    description:
      "We identify which client groups and follow-up flows can produce the fastest measurable return.",
  },
  {
    number: "03",
    title: "Recommended rollout",
    description:
      "You leave with a practical first rollout focused on recovered bookings, recovered revenue, and team time saved.",
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Schedule a Call", href: "/build-my-app#booking" },
];

const calendlyEventUrl = "https://calendly.com/djordje-stankovic-priv/30min";

function BrandIcon() {
  return (
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
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.75" y="5.75" width="16.5" height="14.5" rx="2" />
      <path d="M16 3.75v4" />
      <path d="M8 3.75v4" />
      <path d="M3.75 10.25h16.5" />
      <path d="m9.5 15 1.7 1.7L15 13" />
    </svg>
  );
}

export default function BuildMyAppPage() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <Nav />
      <main className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-6">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-surface-container px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-on-secondary-container">
                  Find Recoverable Revenue
                </span>
                <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                  See where your recoverable revenue is hiding.
                </h1>
                <p className="max-w-xl text-xl leading-relaxed text-foreground-muted">
                  Book a 30-minute planning call to walk through how your
                  business handles client reactivation, return reminders, and
                  missed bookings today. We&apos;ll map the recovery opportunities
                  worth solving first.
                </p>
              </div>

              <div id="solutions" className="grid grid-cols-1 gap-6">
                {benefitPillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${pillar.toneClassName}`}
                      >
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="mb-1 font-display text-lg font-bold text-foreground">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-foreground-muted">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div id="booking" className="lg:col-span-6">
              <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(25,28,30,0.04)] ring-1 ring-outline-variant/10 md:p-10">
                <h2 className="mb-8 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                  <CalendarIcon />
                  Find your recoverable revenue
                </h2>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  Choose a time that works for you. We&apos;ll review your
                  current workflow, identify the highest-value recovery
                  opportunities, and outline the right first version for your
                  business.
                </p>

                <div className="overflow-hidden rounded-[1.5rem] border border-outline-variant/10 bg-surface-container-low">
                  <div
                    className="calendly-inline-widget"
                    data-url={calendlyEventUrl}
                    style={{ minWidth: "320px", height: "750px" }}
                  />
                </div>

                <p className="mt-4 text-sm text-foreground-muted">
                  Having trouble loading the calendar?{" "}
                  <a
                    href={calendlyEventUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary transition-colors hover:text-primary-container"
                  >
                    Open Calendly in a new tab.
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            id="proof"
            className="mt-24 border-t border-outline-variant/10 pt-12 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-24">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-foreground">{stat.icon}</span>
                  <div className="text-left">
                    <span className="block font-display text-lg font-bold leading-tight text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-tight text-foreground">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section id="roadmap" className="mt-32">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                What happens on the call
              </h2>
              <p className="mt-4 text-foreground-muted">
                We review your business setup together, identify the fastest
                recovery opportunities, and define the best first rollout.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {roadmapSteps.map((step) => (
                <article key={step.number} className="group relative">
                  <div className="font-display absolute -left-6 -top-6 select-none text-7xl font-black text-surface-container transition-colors group-hover:text-primary/20">
                    {step.number}
                  </div>
                  <div className="relative z-10 space-y-4">
                    <h4 className="font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h4>
                    <p className="leading-relaxed text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-20 w-full bg-slate-100 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-primary">
              <BrandIcon />
            </span>
            <span className="font-display text-sm font-semibold text-slate-800">
              Recally
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-500">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            © 2026 Recally. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
