import type { OperationsSectionCopy } from "@/content/verticals/types";
import { LandingIcon } from "./LandingIcon";

function toneClassName(tone: "primary" | "tertiary" | "foreground") {
  if (tone === "primary") {
    return "text-primary";
  }

  if (tone === "tertiary") {
    return "text-tertiary";
  }

  return "text-foreground";
}

export function OperationsSection({ copy }: { copy: OperationsSectionCopy }) {
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
                    {copy.panelEyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {copy.panelTitle}
                  </h3>
                </div>
                <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-sm font-medium text-on-tertiary-fixed">
                  {copy.panelStatus}
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
                      {copy.queueLabel}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-foreground">
                        {copy.queueValue}
                      </span>
                      <span className="font-semibold text-primary">
                        Prioritized
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                      {copy.handoffLabel}
                    </p>
                    <div className="mt-3 space-y-2">
                      {copy.handoffItems.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-lg bg-surface-container px-3 py-2"
                        >
                          <span className="text-sm text-foreground">
                            {item.label}
                          </span>
                          <span
                            className={`text-sm font-medium ${toneClassName(
                              item.tone,
                            )}`}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 z-20 max-w-[280px] rounded-xl border-l-4 border-tertiary bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(25,28,30,0.08)]">
            <p className="mb-4 text-sm italic leading-relaxed text-foreground">
              {copy.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-200" />
              <div>
                <p className="text-xs font-bold text-foreground">
                  {copy.quoteBrand}
                </p>
                <p className="text-[10px] uppercase text-foreground-muted">
                  {copy.quoteKicker}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {copy.heading}
          </h2>
          <p className="mb-12 text-xl text-foreground-muted">{copy.body}</p>

          <div className="space-y-10">
            {copy.capabilities.map((capability) => (
              <div key={capability.title} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
                  <LandingIcon name={capability.icon} />
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
