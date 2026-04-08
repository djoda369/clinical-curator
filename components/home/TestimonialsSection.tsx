function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-14 w-14 text-primary/10"
      fill="currentColor"
    >
      <path d="M10.75 6.5c-2.85 1.02-4.75 3.54-4.75 6.9 0 2.53 1.8 4.35 4.14 4.35 2.12 0 3.61-1.44 3.61-3.38 0-1.86-1.35-3.13-3.19-3.13-.42 0-.84.07-1.23.22.48-1.43 1.77-2.8 3.38-3.67L10.75 6.5Zm8 0c-2.85 1.02-4.75 3.54-4.75 6.9 0 2.53 1.8 4.35 4.14 4.35 2.12 0 3.61-1.44 3.61-3.38 0-1.86-1.35-3.13-3.19-3.13-.42 0-.84.07-1.23.22.48-1.43 1.77-2.8 3.38-3.67L18.75 6.5Z" />
    </svg>
  );
}

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <article className="shadow-ambient relative rounded-[2rem] bg-surface-container-low p-12 text-center">
          <div className="absolute right-12 top-8">
            <QuoteIcon />
          </div>

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground-muted">
            Proof-safe statement
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-2xl font-medium leading-relaxed text-foreground-muted">
            The platform is designed to justify itself through recovered
            appointments, recovered revenue, and lower manual follow-up.
          </p>
          <p className="text-sm text-foreground-muted">
            Replace this section with verified client quotes when they are
            available.
          </p>
        </article>
      </div>
    </section>
  );
}
