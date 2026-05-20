import Link from "next/link";
import type { SolutionsSectionCopy } from "@/content/verticals/types";
import { LandingIcon } from "./LandingIcon";

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

function sequenceStepClassName(index: number, total: number) {
  if (index === 0) {
    return "bg-primary text-primary-foreground";
  }

  if (index === total - 1) {
    return "bg-tertiary-fixed text-on-tertiary-fixed";
  }

  return "bg-surface-container text-foreground";
}

export function SolutionsSection({ copy }: { copy: SolutionsSectionCopy }) {
  return (
    <section
      id="recovery-workflows"
      className="rounded-[2rem] bg-surface-container-low px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {copy.heading}
            </h2>
            <p className="mt-6 text-xl text-foreground-muted">{copy.body}</p>
          </div>

          <Link
            href={copy.cta.href}
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-8 py-3 font-bold text-surface transition-colors hover:bg-primary md:w-auto"
          >
            {copy.cta.label}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="shadow-ambient group overflow-hidden rounded-xl bg-surface-container-lowest p-6 sm:p-8 md:col-span-8 md:p-10">
            <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-12">
              <div className="flex-1">
                <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  {copy.primaryWorkflow.eyebrow}
                </span>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  {copy.primaryWorkflow.title}
                </h4>
                <p className="mb-8 leading-relaxed text-foreground-muted">
                  {copy.primaryWorkflow.description}
                </p>

                <ul className="space-y-4">
                  {copy.primaryWorkflow.checks.map((item) => (
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

              <div className="w-full min-w-0 flex-1 overflow-hidden rounded-lg bg-surface-container p-4 md:h-64 md:p-5">
                <div className="rounded-xl bg-surface-container-lowest p-4 transition-transform duration-700 group-hover:scale-[1.03] md:flex md:h-full md:flex-col">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
                      {copy.primaryWorkflow.workflowLabel}
                    </span>
                    <span className="shrink-0 rounded-full bg-tertiary-fixed px-2.5 py-1 text-[10px] font-bold uppercase text-on-tertiary-fixed">
                      {copy.primaryWorkflow.statusLabel}
                    </span>
                  </div>

                  <div className="grid min-h-0 grid-cols-1 gap-4 md:min-h-0 md:flex-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-3">
                    <div className="min-w-0 rounded-lg bg-surface-container-low p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
                        {copy.primaryWorkflow.entryRulesLabel}
                      </p>
                      <div className="mt-3 space-y-2">
                        {copy.primaryWorkflow.entryRules.map((rule) => (
                          <div
                            key={rule}
                            className="rounded-md bg-surface-container px-3 py-2 text-xs leading-snug text-foreground"
                          >
                            {rule}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="min-w-0 rounded-lg bg-surface-container-low p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
                        {copy.primaryWorkflow.sequenceLabel}
                      </p>
                      <div className="mt-3 flex flex-col gap-2 md:h-[calc(100%-1.25rem)] md:flex-row md:items-center md:justify-between md:gap-1.5">
                        {copy.primaryWorkflow.sequenceSteps.map(
                          (step, index) => (
                            <div
                              key={step}
                              className="contents"
                            >
                              <div
                                className={`w-full shrink-0 rounded-full px-3 py-2.5 text-center text-xs font-semibold md:flex-1 md:py-2 ${sequenceStepClassName(
                                  index,
                                  copy.primaryWorkflow.sequenceSteps.length,
                                )}`}
                              >
                                {step}
                              </div>
                              {index <
                              copy.primaryWorkflow.sequenceSteps.length - 1 ? (
                                <>
                                  <div
                                    className="mx-auto h-3 w-px shrink-0 bg-primary/35 md:hidden"
                                    aria-hidden
                                  />
                                  <div
                                    className="hidden h-px min-w-[6px] flex-1 bg-primary/25 md:block"
                                    aria-hidden
                                  />
                                </>
                              ) : null}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-xl bg-primary p-10 text-primary-foreground shadow-xl md:col-span-4">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              {copy.retainWorkflow.eyebrow}
            </span>
            <h4 className="mb-4 text-3xl font-bold">
              {copy.retainWorkflow.title}
            </h4>
            <p className="leading-relaxed text-blue-100/90">
              {copy.retainWorkflow.description}
            </p>

            <div className="mt-12 rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase">
                  {copy.retainWorkflow.metricLabel}
                </span>
                <span className="text-xs font-bold uppercase text-tertiary-fixed">
                  {copy.retainWorkflow.statusLabel}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-tertiary-fixed"
                  style={{ width: `${copy.retainWorkflow.progressPercent}%` }}
                />
              </div>
            </div>
          </article>

          {copy.secondaryWorkflows.map((workflow, index) => (
            <article
              key={workflow.title}
              className={
                index === 0
                  ? "rounded-xl bg-surface-container-high p-10 md:col-span-4"
                  : "shadow-ambient rounded-xl bg-surface-container-lowest p-10 md:col-span-4"
              }
            >
              <h4 className="mb-4 text-2xl font-bold text-foreground">
                {workflow.title}
              </h4>
              <p className="mb-6 text-foreground-muted">
                {workflow.description}
              </p>
              {workflow.statusLabel ? (
                <div className="flex gap-2">
                  <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-[10px] font-bold uppercase text-on-tertiary-fixed">
                    {workflow.statusLabel}
                  </span>
                </div>
              ) : (
                <LandingIcon
                  name={workflow.icon}
                  className="h-12 w-12 text-primary"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
