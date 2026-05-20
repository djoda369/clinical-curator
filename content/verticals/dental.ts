import type { LandingPageContent } from "./types";

export const dentalContent: LandingPageContent = {
  slug: "dental",
  label: "Dental",
  path: "/dental",
  metadata: {
    title: "Dental Revenue Recovery - Recally Flow",
    description:
      "Dental revenue recovery for overdue hygiene recall, missed treatment follow-up, no-shows, cancellations, and empty chair time.",
  },
  hero: {
    eyebrow: "Dental Revenue Recovery",
    title: "Recover missed dental revenue",
    highlight: "from overdue patients and empty chair time",
    body: "Recally Flow helps dental practices bring overdue patients back, reduce missed appointments, rescue cancellations, and refill chair time using the patient list they already have.",
    primaryCta: {
      label: "Find Missed Dental Revenue",
      href: "/build-my-app?vertical=dental",
    },
    secondaryCta: {
      label: "See Dental Recovery Workflows",
      href: "/dental#recovery-workflows",
    },
    dashboard: {
      metrics: [
        {
          label: "Recall patients recovered",
          description: "Track from booking data",
          fillPercent: 72,
          tone: "primary",
        },
        {
          label: "Chair time refilled",
          description: "Rescue schedule gaps",
          fillPercent: 52,
          tone: "foreground",
        },
      ],
      previewEyebrow: "Dental Recovery Preview",
      previewTitle:
        "Recall recovery is turning overdue patients into booked visits.",
      statusLabel: "Active",
      flows: [
        {
          label: "Overdue hygiene recall",
          status: "Ready to reengage",
        },
        {
          label: "Canceled chair time",
          status: "Ready to refill",
        },
      ],
      flowCountLabel: "3 live dental recovery flows",
    },
  },
  problems: {
    heading: "Your dental schedule is leaking revenue through overdue recall and empty chair time.",
    body: "Patients fall out of hygiene recall, treatment plans stall, no-shows waste chair time, and late cancellations become lost production unless follow-up is consistent.",
    items: [
      {
        icon: "inactive",
        title: "Overdue hygiene recall",
        description:
          "Patients who miss their recall window rarely book on their own unless the practice has a repeatable follow-up process.",
      },
      {
        icon: "treatment",
        title: "Treatment plans stall",
        description:
          "Patients who need restorative, cosmetic, or perio care can go quiet after diagnosis, consults, or incomplete treatment steps.",
      },
      {
        icon: "noShow",
        title: "No-shows waste chair time",
        description:
          "A missed appointment creates lost production and staff downtime unless rebooking starts quickly.",
      },
      {
        icon: "manual",
        title: "Manual recall is hard to scale",
        description:
          "When recall and treatment follow-up depend on manual lists, the front desk cannot keep every opportunity moving.",
      },
    ],
  },
  steps: {
    heading: "Recover. Retain. Refill.",
    body: "Start with overdue recall and missed treatment follow-up, then add attendance incentives and chair-time rescue workflows.",
    items: [
      {
        number: "01",
        icon: "workflow",
        title: "Recover",
        description:
          "Reactivate overdue hygiene patients, missed follow-ups, and stalled treatment opportunities already in the patient base.",
      },
      {
        number: "02",
        icon: "growth",
        title: "Retain",
        description:
          "Use reminders, patient perks, and appointment-behavior incentives to support consistent care and fewer missed visits.",
      },
      {
        number: "03",
        icon: "slot",
        title: "Refill",
        description:
          "Promote canceled chair time to the right overdue or waitlisted patients before the opening becomes lost production.",
      },
    ],
  },
  solutions: {
    heading: "Dental recovery workflows for recall, treatment follow-up, and chair-time rescue.",
    body: "Recally Flow fits around your current dental workflow to automate recall reactivation, missed appointment recovery, and cancellation rescue while giving staff clear tasks only when a patient needs human follow-up.",
    cta: {
      label: "See Dental Recovery Workflows",
      href: "/dental#recovery-workflows",
    },
    primaryWorkflow: {
      eyebrow: "Primary use case",
      title: "Overdue recall and patient reactivation",
      description:
        "Identify patients who are overdue for hygiene, checkups, or follow-up care and move them through staged SMS, email, and staff-assisted outreach until they book again.",
      checks: [
        "Segment by recall status, last visit, procedure need, or follow-up window",
        "Escalate to staff only when a patient needs personal outreach",
      ],
      workflowLabel: "Dental Recovery Workflow",
      statusLabel: "Live",
      entryRulesLabel: "Entry rules",
      entryRules: ["Overdue for recall", "No future appointment scheduled"],
      sequenceLabel: "Sequence",
      sequenceSteps: ["SMS", "Email", "Staff"],
    },
    retainWorkflow: {
      eyebrow: "Retain",
      title: "Patient attendance and care consistency",
      description:
        "Encourage patients to keep appointments, cancel early when needed, and stay consistent with preventive or treatment follow-up.",
      metricLabel: "Recall priority",
      statusLabel: "Active",
      progressPercent: 82,
    },
    secondaryWorkflows: [
      {
        icon: "treatment",
        title: "Treatment follow-up recovery",
        description:
          "Follow up with patients who accepted, delayed, or paused treatment before the plan goes cold.",
      },
      {
        icon: "noShow",
        title: "No-show recovery",
        description:
          "Trigger same-day rebooking outreach after missed hygiene, consult, or treatment appointments.",
        statusLabel: "Ready to rebook",
      },
      {
        icon: "slot",
        title: "Chair-time refill",
        description:
          "Promote cancellations and last-minute openings to overdue, waitlisted, or high-fit patients.",
      },
    ],
  },
  operations: {
    panelEyebrow: "Dental recovery layer",
    panelTitle: "Recall, rebooking, and front-desk follow-up work as one system.",
    panelStatus: "Visible",
    queueLabel: "Dental recovery queue",
    queueValue: "Patients ready for recall or rebooking",
    handoffLabel: "Team handoff",
    handoffItems: [
      {
        label: "Front desk",
        value: "Prioritized follow-up tasks",
        tone: "foreground",
      },
      {
        label: "Production",
        value: "Recovered visits visible",
        tone: "tertiary",
      },
    ],
    quote:
      "Give your team a repeatable process for overdue recall, stalled treatment, and empty chair time instead of relying on manual lists.",
    quoteBrand: "Recally Flow",
    quoteKicker: "Dental revenue recovery layer",
    heading:
      "More than reminders. It is a dental recovery layer for practices that depend on recall and production.",
    body: "The platform connects recall reactivation, treatment follow-up, chair-time rescue, staff tasks, and recovery visibility so patient follow-up becomes part of the daily workflow.",
    capabilities: [
      {
        icon: "staff",
        title: "Prioritized staff tasks",
        description:
          "Give the front desk the specific patients who need human follow-up instead of another broad recall list.",
      },
      {
        icon: "visibility",
        title: "Recovered production visibility",
        description:
          "Track booked appointments, recall recovery, rebooked no-shows, and rescued cancellations from practice data.",
      },
      {
        icon: "coordination",
        title: "Recall and schedule alignment",
        description:
          "Connect follow-up logic to real openings, appointment types, and the patients most likely to book.",
      },
    ],
  },
  cta: {
    heading: "Book your Dental Missed Revenue Audit.",
    body: "We'll show you where overdue recall, missed treatment follow-up, no-shows, cancellations, and empty chair time may be leaking revenue and which workflow to launch first.",
    primaryCta: {
      label: "Find Missed Dental Revenue",
      href: "/build-my-app?vertical=dental",
    },
    secondaryCta: {
      label: "See Dental Recovery Workflows",
      href: "/dental#recovery-workflows",
    },
  },
  audit: {
    metadata: {
      title: "Dental Missed Revenue Audit - Recally Flow",
      description:
        "Book a dental missed revenue audit for overdue recall, stalled treatment follow-up, no-shows, cancellations, and empty chair time.",
    },
    eyebrow: "Dental Missed Revenue Audit",
    title: "Book your Dental Missed Revenue Audit.",
    description:
      "Book a 30-minute working session to uncover where overdue recall, stalled treatment follow-up, no-shows, late cancellations, and empty chair time are leaking production today.",
    benefits: [
      {
        icon: "inactive",
        title: "Overdue recall patients",
        description:
          "Find patients who have fallen outside their hygiene or checkup window and should be prompted to return.",
        tone: "tertiary",
      },
      {
        icon: "treatment",
        title: "Stalled treatment follow-up",
        description:
          "Identify treatment opportunities that were diagnosed or discussed but never moved back onto the schedule.",
        tone: "primary",
      },
      {
        icon: "slot",
        title: "Empty chair time",
        description:
          "Find openings that could be promoted to overdue, waitlisted, or high-fit patients before the time is lost.",
        tone: "sky",
      },
    ],
    bookingHeading: "Book your dental audit session",
    bookingDescription:
      "Choose a time that works for you. You'll leave with the fastest dental recovery opportunity, the first patient segment to activate, and the recall or chair-time rescue flow to launch next.",
    trustStats: [
      {
        icon: "checklist",
        value: "Estimated missed dental revenue",
        label: "Focused on recall and chair-time leaks first",
      },
      {
        icon: "inactive",
        value: "First patient segment",
        label: "Prioritize the patients most likely to book",
      },
      {
        icon: "slot",
        value: "Suggested recovery flow",
        label: "Leave with a practical next step",
      },
    ],
    roadmapTitle: "What happens in your dental audit",
    roadmapDescription:
      "A short working session focused on the fastest recall, treatment, and chair-time recovery opportunities.",
    roadmapSteps: [
      {
        number: "01",
        title: "Recall workflow review",
        description:
          "We look at how overdue recall, treatment follow-up, no-shows, cancellations, and empty chair time are handled today.",
      },
      {
        number: "02",
        title: "Revenue leak mapping",
        description:
          "We identify which patient segments and follow-up windows can create recovered appointments first.",
      },
      {
        number: "03",
        title: "Recommended rollout",
        description:
          "You leave with the first recall, treatment follow-up, or chair-time rescue workflow worth launching.",
      },
    ],
  },
};
