import type { Metadata } from "next";
import Script from "next/script";
import { LandingIcon } from "@/components/home/LandingIcon";
import { Nav } from "@/components/layout/Nav";
import { getAuditPageCopy } from "@/content/verticals";

type BuildMyAppPageProps = {
  searchParams: Promise<{
    vertical?: string | string[];
  }>;
};

const calendlyEventUrl =
  "https://calendly.com/djordje-recallyflow/strategy-call";

function getVerticalParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function benefitToneClassName(tone: "tertiary" | "primary" | "sky") {
  if (tone === "tertiary") {
    return "bg-tertiary-fixed text-on-tertiary-fixed";
  }

  if (tone === "primary") {
    return "bg-primary/10 text-primary";
  }

  return "bg-sky-100 text-sky-700";
}

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

export async function generateMetadata({
  searchParams,
}: BuildMyAppPageProps): Promise<Metadata> {
  const params = await searchParams;
  return getAuditPageCopy(getVerticalParam(params.vertical)).metadata;
}

export default async function BuildMyAppPage({
  searchParams,
}: BuildMyAppPageProps) {
  const params = await searchParams;
  const copy = getAuditPageCopy(getVerticalParam(params.vertical));

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
                  {copy.eyebrow}
                </span>
                <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                  {copy.title}
                </h1>
                <p className="max-w-xl text-xl leading-relaxed text-foreground-muted">
                  {copy.description}
                </p>
              </div>

              <div id="solutions" className="grid grid-cols-1 gap-6">
                {copy.benefits.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${benefitToneClassName(
                          pillar.tone,
                        )}`}
                      >
                        <LandingIcon name={pillar.icon} />
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
                  <LandingIcon name="calendar" className="h-6 w-6 text-primary" />
                  {copy.bookingHeading}
                </h2>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  {copy.bookingDescription}
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
              {copy.trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-foreground">
                    <LandingIcon name={stat.icon} className="h-9 w-9" />
                  </span>
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
                {copy.roadmapTitle}
              </h2>
              <p className="mt-4 text-foreground-muted">
                {copy.roadmapDescription}
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {copy.roadmapSteps.map((step) => (
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
              Recally Flow
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-slate-900">
              Terms of Service
            </a>
            <a
              href="#booking"
              className="transition-colors hover:text-slate-900"
            >
              Find Missed Revenue
            </a>
          </div>

          <p className="text-xs text-slate-500">
            © 2026 Recally Flow. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
