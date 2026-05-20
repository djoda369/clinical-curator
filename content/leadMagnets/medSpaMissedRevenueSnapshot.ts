import type { IconKey, MetadataCopy } from "@/content/verticals/types";

export type SnapshotAnswerValue = "yes" | "somewhat" | "no";

export type SnapshotCategoryId =
  | "past-clients"
  | "maintenance-follow-up"
  | "consult-drop-off"
  | "packages-treatment-plans"
  | "cancellations-empty-slots"
  | "front-desk-visibility";

export type SnapshotResultProfile = {
  leakLabel: string;
  likelyMeans: string;
  fastestOpportunity: string;
  recommendedWorkflow: string;
  kpi: string;
};

export type SnapshotCategory = {
  id: SnapshotCategoryId;
  title: string;
  shortTitle: string;
  icon: IconKey;
  questions: string[];
  result: SnapshotResultProfile;
};

export const medSpaSnapshotMetadata: MetadataCopy = {
  title: "Missed Revenue Snapshot - Recally Flow",
  description:
    "A practical diagnostic for aesthetic clinics to find booking gaps across past clients, maintenance follow-up, consult drop-off, cancellations, empty provider slots, and front desk workload.",
};

export const medSpaSnapshotIntro = {
  eyebrow: "Missed Revenue Snapshot",
  headline: "Find hidden booking gaps inside your aesthetic clinic",
  subheadline:
    "Answer a few quick questions to see where your clinic may be losing booked appointments from past clients, maintenance follow-ups, consult drop-off, cancellations, and empty provider slots.",
  primaryCta: "Start Missed Revenue Snapshot",
};

export const medSpaSnapshotAnswerOptions = [
  { value: "yes", label: "Yes", points: 0 },
  { value: "somewhat", label: "Somewhat", points: 1 },
  { value: "no", label: "No", points: 2 },
] as const satisfies readonly {
  value: SnapshotAnswerValue;
  label: string;
  points: number;
}[];

export const medSpaSnapshotRiskLevels = [
  {
    min: 0,
    max: 8,
    label: "Low visible leakage",
    description:
      "Your answers show fewer obvious follow-up gaps, but one workflow is still worth validating against the existing client list.",
  },
  {
    min: 9,
    max: 18,
    label: "Moderate leakage",
    description:
      "Your clinic likely has recoverable booking opportunities in at least one follow-up area.",
  },
  {
    min: 19,
    max: 28,
    label: "High leakage",
    description:
      "Several appointment lifecycle gaps may be creating missed booked appointments and extra front desk workload.",
  },
  {
    min: 29,
    max: null,
    label: "Significant recovery opportunity",
    description:
      "Your answers point to a broad recovery opportunity across client follow-up, provider slots, and revenue visibility.",
  },
] as const;

export const medSpaSnapshotCategories: SnapshotCategory[] = [
  {
    id: "past-clients",
    title: "Past Clients",
    shortTitle: "Past clients",
    icon: "inactive",
    questions: [
      "Do you regularly review clients who have not visited in 3, 6, 9, or 12 months?",
      "Do you have a clear reactivation process for lapsed Botox, filler, laser, facial, skin, or body clients?",
      "Can your team quickly identify past clients with no future appointment scheduled?",
    ],
    result: {
      leakLabel: "Past clients not rebooking",
      likelyMeans:
        "You may have warm clients in your database who already know the clinic but do not have a clear reason or reminder to come back.",
      fastestOpportunity:
        "Clients past their ideal return window with no future appointment.",
      recommendedWorkflow: "Lapsed client reactivation flow.",
      kpi: "Recovered bookings from inactive clients.",
    },
  },
  {
    id: "maintenance-follow-up",
    title: "Maintenance Follow-Up",
    shortTitle: "Maintenance",
    icon: "treatment",
    questions: [
      "Do tox, filler, laser, skin, or facial clients get follow-up around their ideal return window?",
      "Are clients segmented by treatment type, last visit date, or recommended return timing?",
      "Are provider follow-up recommendations tracked after the appointment?",
    ],
    result: {
      leakLabel: "Maintenance follow-up gaps",
      likelyMeans:
        "Clients may be passing their ideal treatment window without timely follow-up, especially for tox, filler, laser, skin, facial, or body services.",
      fastestOpportunity:
        "Clients due for maintenance with no upcoming appointment.",
      recommendedWorkflow: "Maintenance reminder and rebooking flow.",
      kpi: "Bookings from overdue maintenance clients.",
    },
  },
  {
    id: "consult-drop-off",
    title: "Consult Drop-Off",
    shortTitle: "Consults",
    icon: "workflow",
    questions: [
      "Do you follow up with consults that did not book within 24-72 hours?",
      "Do you have a second follow-up for consults that go quiet?",
      "Do you track consult-to-booking conversion?",
    ],
    result: {
      leakLabel: "Consults going quiet",
      likelyMeans:
        "Your clinic may already be creating demand, but some consults are not being followed up consistently enough to turn into treatments.",
      fastestOpportunity:
        "Consults from the last 30-90 days with no booked treatment.",
      recommendedWorkflow: "Consult follow-up flow.",
      kpi: "Consult-to-booking conversion rate.",
    },
  },
  {
    id: "packages-treatment-plans",
    title: "Packages and Treatment Plans",
    shortTitle: "Packages",
    icon: "growth",
    questions: [
      "Do you track clients who started a package but have not completed all sessions?",
      "Do clients get reminded when they are due for the next package or treatment-plan visit?",
      "Can your team quickly see stalled laser, skin, body, or treatment series clients?",
    ],
    result: {
      leakLabel: "Package and treatment plan drop-off",
      likelyMeans:
        "Revenue may be leaking when clients start a treatment series or receive a plan but do not book the next step.",
      fastestOpportunity:
        "Package or treatment-plan clients with no future appointment.",
      recommendedWorkflow: "Package continuation flow.",
      kpi: "Completed package/session recovery rate.",
    },
  },
  {
    id: "cancellations-empty-slots",
    title: "Cancellations, No-Shows, and Empty Slots",
    shortTitle: "Empty slots",
    icon: "slot",
    questions: [
      "Are canceled appointments rebooked quickly?",
      "Do no-shows trigger a same-day or next-day rebooking follow-up?",
      "When a same-day or next-day slot opens, can you quickly notify the right clients?",
    ],
    result: {
      leakLabel: "Empty provider time",
      likelyMeans:
        "Missed appointments, cancellations, and same-day openings may be turning into lost revenue instead of being rebooked or refilled.",
      fastestOpportunity:
        "Canceled appointments, no-shows, waitlist clients, and clients interested in related services.",
      recommendedWorkflow: "Cancellation recovery and priority slot alert flow.",
      kpi: "Refilled slots and rebooked cancellations.",
    },
  },
  {
    id: "front-desk-visibility",
    title: "Front Desk and Revenue Visibility",
    shortTitle: "Front desk",
    icon: "manual",
    questions: [
      "Does follow-up still depend on manual notes, memory, spreadsheets, or DMs?",
      "Do you track recovered bookings from follow-up?",
      "Do you know which services or client segments create the most missed follow-up revenue?",
    ],
    result: {
      leakLabel: "Manual follow-up overload",
      likelyMeans:
        "Your team may be relying on memory and manual lists instead of a clear recovery queue and measurable follow-up process.",
      fastestOpportunity:
        "A daily recovery queue for the highest-priority clients.",
      recommendedWorkflow: "Staff-assisted recovery queue.",
      kpi: "Recovered bookings and staff tasks completed.",
    },
  },
];

export const medSpaSnapshotCta = {
  heading: "Want the full recovery map for your clinic?",
  body: "We can turn your answers into a simple Missed Revenue Snapshot showing which client segments, follow-up gaps, and open-slot workflows are worth fixing first.",
  button: "Book Free Missed Revenue Snapshot",
  href: "/build-my-app?vertical=med-spa&source=snapshot",
};
