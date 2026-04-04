import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Operations — Clinical Curator",
  description:
    "Operational overview: scheduling, staff status, active treatment plans, and facility throughput.",
};

const scheduleAvatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz9XUCeFSkRNRLtqyYbtaMMRmDBuEUfVveRK_3_zKpMbEMiOQ-0KVO9siGXuOOOlHvh--LvwHeHU9dG0hnrDANMDUgFCUp7l4kKLP8fhjoLYCKt0KKq-UjasTujHFhmkZqgSgnrTvt6d4SoWBRavbSR01qgxREpqy_F5TupUhgwPAOLHok4gcUkOYqdZ1kUtkzJ_W73fsWMGmX4zNUiU7t3SC_mp7S0Szl2ZxebId2l6IEeIr_8qG1ho5hakw1Setd0TZJ_eHaoQ4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC15P77XAXhsVk4Cvmi2510iUBEjRz6kUFQYiQP14-wQ27OQKmm2W4GPHyes-y_Ev5z3Z2TI2QF1CZKu0SfENhuXty9GOVEaR3by33LGSCUZceLdgMqRdou_DdXEAcUIXw8WQ0oJH8Bs0tSDw9PdrqBNrIvND9xd_rAfa6iG59q4-g9uK_FOQp7OodTJZlhIh9wH6hL_2COoZ-QMVgCUnrKhUYng-jv2_6FOb1dQtdTDDmmZ0XtB7MU2Fxf7_ULD-h5BvzDh7WBhlI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD83_sF102McdqqO3fUMv73b_r-79OzSmhCzu-SAKCeGbSeJgclu-aR3Gwn2Pr5ZUJs_NEnW6sUuwxObGMHNPTq4wyIdTvkStWpuK6G2gEac_bSvCHwS8j_LzboAu8ntftOGvBZFRoqU3fkmUlGG1lsBIDZBNRxDEUlhOXsDPlAsl9Bp4jFskE5lRc-1Yl8WTOh8j4TkaIZg_h3jP_2fzo0fIxOFIdbXgdBMZUTG7DN6KWONZG3GCpfhjB6VciqnhjYUJG5kpMwgl8",
];

const staff = [
  {
    name: "Dr. Sarah L.",
    role: "Pediatrics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-GTTyY2jeZVXKOzD5OXUo9FvOFFAeam0oKup7WLZNt39LxK-Xy5B2deFcBJ-ze0xR9BBAkCrF5PypLlDeuC-jyPoBeAYDrk7b9dzVHrOFguDYb5UfM0WQkHMcfc7rfTnhdOuQn_jQEUJZuLv6osZ-o_V16GYXPaXkDuadddtR7IFNotMUlzaNqwr6oE1qleienBiYWLyIQHZM1pEfRlN9Kv7bedFVS1iN4qly83LR9h8LYlc3LY-t69hqjoHhDVbWrbxIW8E5xMQ",
    statusDot: "bg-tertiary",
    statusLabel: "Active",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    grayscale: false,
  },
  {
    name: "Dr. James K.",
    role: "Surgery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6OTNKMLkdkPZCeMa5BMBTu0z0_58UIDHXppUG91SWAicdfANzOSclVyWYL5TzFSIcrrABgCpExoAIl6bQ6B-nK-W-Qz1GEyvou4w8UsAuQuN1JDQ2xkKvhJl3zTdBYJs_Tv9dWKyb1DRQk2KwZChaOXzVStZbapWw1EnmkK71ESTOYWvqaKPDp4T8984lJdc-2F_pk3DzleUx6zQvveYdiL7776zwlUFwlVBEK4EZmpcRe2edQftTjQkrFx7etA0Md0wwDGlowO0",
    statusDot: "bg-orange-500",
    statusLabel: "In Surgery",
    statusClass: "bg-surface-container-high text-foreground-muted",
    grayscale: false,
  },
  {
    name: "Anna Wu, RN",
    role: "Triage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLX39VEtkBDSxUDSTxsneMwCVRkuBDxWQl8uNaQz6N5FYfOALu_6ks3S2jcNvnUR1iDOF_PuKaI9oaRbh3mTJc3EfPXh8Ty-jT1wcUvzQzSJD836nVHQiNlFki106CPmGev2bBhn72pV6R_w6j3co-lg4T2SoUR7dpZt0NI_qe5X7jwzv6pDlijhRN-G4RkvKj80pDI0z8FSZL2LIGm_ENpCaftnPD5kOPz2seKH6-uMlDD5uRVZTzOnbMJSqA3StHmjcQJJtKln4",
    statusDot: "bg-slate-300",
    statusLabel: "Offline",
    statusClass: "bg-surface-container text-foreground-muted",
    grayscale: true,
  },
] as const;

const treatmentPlans = [
  {
    title: "Cardiac Recovery v2",
    patients: "12 Patients",
    progress: 75,
    barClass: "bg-primary",
    iconWrap: "bg-blue-50 text-blue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Post-Op Neurology",
    patients: "8 Patients",
    progress: 40,
    barClass: "bg-tertiary",
    iconWrap: "bg-green-50 text-green-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M12 3v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Physical Rehab B",
    patients: "24 Patients",
    progress: 90,
    barClass: "bg-purple-500",
    iconWrap: "bg-purple-50 text-purple-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6.5 6.5h11v11h-11z" />
        <path d="M6.5 17.5v3" />
        <path d="M17.5 17.5v3" />
        <path d="M6.5 6.5v-3" />
        <path d="M17.5 6.5v-3" />
      </svg>
    ),
  },
];

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OperationsPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
          <section className="space-y-2">
            <span className="block text-[11px] font-medium uppercase tracking-widest text-foreground-muted">
              Operational Overview
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Operations
            </h1>
          </section>

          <section className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex min-h-[160px] flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-ambient">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Today&apos;s Schedule
                  </h2>
                  <p className="text-sm text-foreground-muted">
                    14 Appointments remaining
                  </p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  92% Capacity
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div className="flex -space-x-3">
                  {scheduleAvatars.map((src, i) => (
                    <img
                      key={i}
                      alt=""
                      src={src}
                      className="h-10 w-10 rounded-full border-4 border-surface-container-lowest object-cover"
                    />
                  ))}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface-container-lowest bg-surface-container-high text-[10px] font-bold text-foreground-muted">
                    +8
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-linear-to-br from-primary to-primary-container px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:saturate-150"
                >
                  View List
                </button>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Staff Status
              </h2>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Manage <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-4 no-scrollbar">
              {staff.map((member) => (
                <div
                  key={member.name}
                  className="flex min-w-[160px] flex-col items-center space-y-3 rounded-xl bg-surface-container-lowest p-4 text-center shadow-ambient"
                >
                  <div className="relative">
                    <div
                      className={`h-16 w-16 overflow-hidden rounded-full ${
                        member.grayscale ? "grayscale" : ""
                      }`}
                    >
                      <img
                        alt=""
                        src={member.image}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span
                      className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-surface-container-lowest ${member.statusDot}`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-foreground-muted">
                      {member.role}
                    </p>
                  </div>
                  <div
                    className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${member.statusClass}`}
                  >
                    {member.statusLabel}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Active Treatment Plans
            </h2>
            <div className="space-y-4">
              {treatmentPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="flex items-center gap-4 rounded-xl bg-surface-container-lowest p-5 shadow-ambient"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${plan.iconWrap}`}
                  >
                    {plan.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="font-bold text-foreground">{plan.title}</p>
                      <span className="shrink-0 text-xs text-foreground-muted">
                        {plan.patients}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-surface-container-low">
                      <div
                        className={`h-full rounded-full ${plan.barClass}`}
                        style={{ width: `${plan.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-foreground-muted">
                Facility Throughput
              </h3>
              <div className="flex items-end gap-3">
                <span className="font-display text-4xl font-black text-foreground">
                  +18.4%
                </span>
                <div className="mb-1 rounded-full bg-tertiary-fixed px-2 py-0.5 text-[10px] font-bold text-on-tertiary-fixed">
                  TRENDING UP
                </div>
              </div>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-foreground-muted">
                Average patient discharge time improved by 12 mins this week.
              </p>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-full w-1/2 opacity-20">
              <svg
                className="h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="gradient-tertiary"
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#006947" stopOpacity="1" />
                    <stop offset="100%" stopColor="#006947" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 80 Q 20 70, 40 75 T 60 40 T 80 50 T 100 10 L 100 100 L 0 100 Z"
                  fill="url(#gradient-tertiary)"
                />
              </svg>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
