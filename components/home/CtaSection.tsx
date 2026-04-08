import Link from "next/link";

export function CtaSection() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="bg-primary-gradient relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] p-12 text-center text-primary-foreground shadow-[0_30px_80px_rgba(0,88,190,0.28)] md:p-24">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10">
          <h2 className="mb-8 text-4xl font-extrabold md:text-6xl">
            Build the recovery experience your clinic runs on.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-blue-100">
            <span className="font-semibold text-white">Build my app</span> walks
            you through what to recover first—inactive patients, missed visits,
            and recalls—then how you want it to feel for patients and staff.
            You&apos;ll shape the flow and get a preview of what you ship before
            you go live.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/build-my-app"
              className="rounded-full bg-white px-10 py-5 text-xl font-bold text-primary shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Build my app
            </Link>
            <Link
              href="/build-my-app#roadmap"
              className="rounded-full border-2 border-white/30 px-10 py-5 text-xl font-bold text-white transition-all hover:bg-white/10"
            >
              See the roadmap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
