import type { StepsSectionCopy } from "@/content/verticals/types";
import { LandingIcon } from "./LandingIcon";

export function StepsSection({ copy }: { copy: StepsSectionCopy }) {
  return (
    <section
      id="how-it-works"
      className="border-t border-surface-container bg-surface px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            {copy.heading}
          </h2>
          <p className="mt-6 text-foreground-muted">{copy.body}</p>
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          {copy.items.map((step) => (
            <article key={step.number} className="relative">
              <span className="absolute -left-4 -top-12 z-0 text-8xl font-black text-surface-container">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="shadow-ambient mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-lowest text-primary">
                  <LandingIcon name={step.icon} className="h-8 w-8" />
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
