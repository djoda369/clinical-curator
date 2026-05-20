import Link from "next/link";
import type { HeroCopy } from "@/content/verticals/types";

const recoveryFlows = ["bg-slate-200", "bg-slate-300", "bg-slate-400"];

function metricToneClassName(tone: HeroCopy["dashboard"]["metrics"][number]["tone"]) {
  return tone === "primary" ? "text-primary" : "text-foreground";
}

export function Hero({ copy }: { copy: HeroCopy }) {
  return (
    <section className="relative rounded-[2rem] bg-surface px-4 pb-20 pt-12 sm:px-6 md:px-10 lg:px-12 lg:pb-24 lg:pt-16">
      {/* Clip only the decorative wash so rotated dashboard content is not cut off */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
        aria-hidden
      >
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(33,112,228,0.12),transparent_55%)] mask-[linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-12 sm:gap-16 lg:grid-cols-2">
        <div className="relative z-10 min-w-0">
          <span className="inline-block rounded-full bg-surface-container px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-on-secondary-container">
            {copy.eyebrow}
          </span>

          <h1 className="mb-8 mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl">
            {copy.title} <span className="text-primary">{copy.highlight}</span>
          </h1>

          <p className="mb-10 max-w-xl text-xl leading-relaxed text-foreground-muted">
            {copy.body}
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <Link
              href={copy.primaryCta.href}
              className="bg-primary-gradient shadow-ambient w-full rounded-full px-8 py-4 text-center text-lg font-bold text-primary-foreground transition-all active:scale-95 sm:w-auto"
            >
              {copy.primaryCta.label}
            </Link>

            <Link
              href={copy.secondaryCta.href}
              className="group flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <span>{copy.secondaryCta.label}</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative flex min-w-0 w-full items-center justify-center lg:h-[600px]">
          <div className="absolute inset-0 scale-90 rounded-[3rem] bg-primary/5 blur-3xl lg:-rotate-6" />

          <div className="relative w-full min-w-0 max-w-xl rotate-0 rounded-[1.75rem] bg-surface-container-lowest p-4 shadow-[0_30px_80px_rgba(25,28,30,0.08)] transition-transform duration-700 sm:p-6 sm:rotate-2 sm:hover:rotate-0">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-200" />
                <div className="h-3 w-3 rounded-full bg-primary/20" />
                <div className="h-3 w-3 rounded-full bg-tertiary/20" />
              </div>

              <div className="rounded-md bg-surface-container px-3 py-1 text-[10px] font-bold tracking-wide text-foreground-muted">
                RECOVERY DASHBOARD
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {copy.dashboard.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl bg-surface-container-low p-4"
                >
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground-muted">
                    {metric.label}
                  </p>
                  <p
                    className={`text-xl font-bold ${metricToneClassName(metric.tone)}`}
                  >
                    {metric.description}
                  </p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-container">
                    <div
                      className="h-full rounded-full bg-tertiary"
                      style={{ width: `${metric.fillPercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-4 overflow-hidden rounded-2xl bg-surface-container-low p-4 sm:p-5">
              <div className="mb-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                    {copy.dashboard.previewEyebrow}
                  </p>
                  <p className="mt-2 font-display text-xl text-foreground sm:text-2xl">
                    {copy.dashboard.previewTitle}
                  </p>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-tertiary-fixed px-3 py-1 text-sm font-medium text-on-tertiary-fixed">
                  {copy.dashboard.statusLabel}
                </span>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl bg-surface-container-lowest p-4">
                  <svg
                    viewBox="0 0 320 120"
                    className="h-32 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 98 C36 98, 56 76, 90 72 C124 68, 146 34, 176 36 C206 38, 224 74, 252 62 C280 50, 300 20, 320 18 L320 120 L0 120 Z"
                      fill="rgb(0 105 71 / 0.1)"
                    />
                    <path
                      d="M0 98 C36 98, 56 76, 90 72 C124 68, 146 34, 176 36 C206 38, 224 74, 252 62 C280 50, 300 20, 320 18"
                      fill="none"
                      stroke="var(--tertiary)"
                      strokeLinecap="round"
                      strokeWidth="5"
                    />
                  </svg>
                </div>

                <div className="rounded-xl bg-surface-container-lowest p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                    Active recovery flows
                  </p>
                  <div className="mt-4 space-y-3">
                    {copy.dashboard.flows.map((flow, index) => (
                      <div
                        key={flow.label}
                        className="rounded-lg bg-surface-container-low px-3 py-3"
                      >
                        <p className="text-sm text-foreground">{flow.label}</p>
                        <p
                          className={`mt-1 font-semibold ${
                            index === 0 ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {flow.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <div className="flex -space-x-2">
                {recoveryFlows.map((flowClassName, index) => (
                  <div
                    key={flowClassName}
                    className={`h-8 w-8 rounded-full border-2 border-surface-container-lowest ${flowClassName}`}
                    aria-hidden="true"
                    style={{ zIndex: recoveryFlows.length - index }}
                  />
                ))}
              </div>

              <span className="text-xs font-medium text-foreground-muted">
                {copy.dashboard.flowCountLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
