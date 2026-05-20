import type { ProblemsSectionCopy } from "@/content/verticals/types";
import { LandingIcon } from "./LandingIcon";

export function ProblemsSection({ copy }: { copy: ProblemsSectionCopy }) {
  return (
    <section className="px-6 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {copy.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted">
            {copy.body}
          </p>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((problem) => (
            <article
              key={problem.title}
              className="rounded-xl border-b-2 border-transparent bg-surface-container p-8 transition-all hover:-translate-y-1 hover:border-rose-300/70"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                <LandingIcon name={problem.icon} />
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
