const testimonials = [
  {
    quote:
      "\"Clinical Curator changed how we view our patient list. It's no longer a static database, but a living engine for our practice growth.\"",
    name: "Dr. Sarah Chen",
    role: "Founder, Apex Health",
    avatarClassName: "bg-slate-200",
  },
  {
    quote:
      "\"The ROI was immediate. We recovered $15k in missed appointments in the first week. The platform practically pays for itself.\"",
    name: "Mark Thompson",
    role: "Clinic Manager, Riverside Dental",
    avatarClassName: "bg-slate-300",
  },
];

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
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="shadow-ambient relative rounded-[2rem] bg-surface-container-low p-12"
          >
            <div className="absolute right-12 top-8">
              <QuoteIcon />
            </div>

            <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-foreground-muted">
              {testimonial.quote}
            </p>

            <div className="flex items-center gap-4">
              <div
                className={`h-16 w-16 rounded-full ${testimonial.avatarClassName}`}
                aria-hidden="true"
              />
              <div>
                <h5 className="text-lg font-bold text-foreground">
                  {testimonial.name}
                </h5>
                <p className="text-sm text-foreground-muted">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
