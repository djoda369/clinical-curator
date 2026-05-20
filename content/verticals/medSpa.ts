import type { LandingPageContent } from "./types";

export const medSpaContent: LandingPageContent = {
  slug: "med-spa",
  label: "Med Spa",
  path: "/med-spa",
  metadata: {
    title: "Med Spa Revenue Recovery - Recally Flow",
    description:
      "Med spa revenue recovery for lapsed treatment clients, no-shows, late cancellations, maintenance visits, and empty provider slots.",
  },
  hero: {
    eyebrow: "Med Spa Revenue Recovery",
    title: "Recover missed med spa revenue",
    highlight: "without adding front-desk work",
    body: "Recally Flow helps med spas and aesthetic clinics bring back lapsed treatment clients, reduce no-shows, reward maintenance visits, and refill canceled provider time using the client list they already have.",
    primaryCta: {
      label: "Find Missed Med Spa Revenue",
      href: "/build-my-app?vertical=med-spa",
    },
    secondaryCta: {
      label: "See Med Spa Recovery Workflows",
      href: "/med-spa#recovery-workflows",
    },
    dashboard: {
      metrics: [
        {
          label: "Treatment clients recovered",
          description: "Track from booking data",
          fillPercent: 76,
          tone: "primary",
        },
        {
          label: "Provider slots refilled",
          description: "Rescue same-day openings",
          fillPercent: 54,
          tone: "foreground",
        },
      ],
      previewEyebrow: "Med Spa Recovery Preview",
      previewTitle:
        "Treatment recovery is turning maintenance gaps into booked visits.",
      statusLabel: "Active",
      flows: [
        {
          label: "Maintenance clients",
          status: "Due for follow-up",
        },
        {
          label: "Provider openings",
          status: "Ready to refill",
        },
      ],
      flowCountLabel: "3 live med spa recovery flows",
    },
  },
  problems: {
    heading: "Your med spa schedule is leaking revenue between treatments.",
    body: "Clients miss maintenance windows, no-shows waste provider time, and late cancellations become empty rooms when follow-up depends on the front desk having spare minutes.",
    items: [
      {
        icon: "treatment",
        title: "Lapsed treatment clients",
        description:
          "Tox, filler, laser, facial, and body clients often intend to return, but they drift past their ideal maintenance window without a timely prompt.",
      },
      {
        icon: "noShow",
        title: "No-shows waste provider time",
        description:
          "A missed aesthetic appointment leaves paid staff, rooms, and equipment idle unless rebooking starts fast.",
      },
      {
        icon: "calendar",
        title: "Late cancellations leave premium gaps",
        description:
          "Same-day and next-day openings need to reach the right clients before valuable provider time disappears.",
      },
      {
        icon: "manual",
        title: "Manual follow-up gets inconsistent",
        description:
          "Client lists, DMs, booking notes, and spreadsheets make it hard to keep every maintenance opportunity moving.",
      },
    ],
  },
  steps: {
    heading: "Recover. Retain. Refill.",
    body: "Start with lapsed treatment clients, then add the maintenance, client perk, and slot-rescue workflows that protect provider utilization.",
    items: [
      {
        number: "01",
        icon: "workflow",
        title: "Recover",
        description:
          "Reactivate clients who are overdue for tox, filler, laser, skin, body, or post-treatment follow-up.",
      },
      {
        number: "02",
        icon: "growth",
        title: "Retain",
        description:
          "Use premium client perks and maintenance reminders to encourage consistent visits without training clients to wait for discounts.",
      },
      {
        number: "03",
        icon: "slot",
        title: "Refill",
        description:
          "Promote last-minute provider openings to relevant clients before an empty room becomes lost revenue.",
      },
    ],
  },
  solutions: {
    heading: "Med spa recovery workflows for maintenance, packages, and provider openings.",
    body: "Recally Flow sits on top of your current booking workflow to bring back lapsed aesthetic clients, protect maintenance cadence, and refill cancellations without creating another manual list for the front desk.",
    cta: {
      label: "See Med Spa Recovery Workflows",
      href: "/med-spa#recovery-workflows",
    },
    primaryWorkflow: {
      eyebrow: "Primary use case",
      title: "Lapsed treatment client reactivation",
      description:
        "Identify clients who are past their ideal return window and send staged SMS, email, and staff-assisted follow-up until they book again or need a personal touch.",
      checks: [
        "Segment by treatment type, last visit, package stage, or maintenance window",
        "Escalate to staff only when a high-value client needs direct follow-up",
      ],
      workflowLabel: "Med Spa Recovery Workflow",
      statusLabel: "Live",
      entryRulesLabel: "Entry rules",
      entryRules: [
        "Past ideal treatment window",
        "No future appointment scheduled",
      ],
      sequenceLabel: "Sequence",
      sequenceSteps: ["SMS", "Email", "Staff"],
    },
    retainWorkflow: {
      eyebrow: "Retain",
      title: "Client perks and maintenance rewards",
      description:
        "Reward consistent aesthetic clients with status, priority access, small upgrades, or early cancellation-slot access instead of margin-eroding discounts.",
      metricLabel: "Maintenance priority",
      statusLabel: "Active",
      progressPercent: 86,
    },
    secondaryWorkflows: [
      {
        icon: "noShow",
        title: "No-show recovery",
        description:
          "Trigger warm rebooking outreach after missed aesthetic appointments so provider time is not lost twice.",
      },
      {
        icon: "treatment",
        title: "Package continuation",
        description:
          "Nudge clients who started a laser, skin, or body plan but never booked the next step.",
        statusLabel: "Ready to continue",
      },
      {
        icon: "slot",
        title: "Cancellation slot alerts",
        description:
          "Send priority slot alerts to clients who match the open service, timing, or provider before the gap disappears.",
      },
    ],
  },
  operations: {
    panelEyebrow: "Med spa recovery layer",
    panelTitle: "Your front desk, providers, and client follow-up work as one system.",
    panelStatus: "Visible",
    queueLabel: "Treatment recovery queue",
    queueValue: "Clients due for reactivation",
    handoffLabel: "Team handoff",
    handoffItems: [
      {
        label: "Front desk",
        value: "Tasked only when outreach needs a person",
        tone: "foreground",
      },
      {
        label: "Revenue",
        value: "Recovered bookings visible",
        tone: "tertiary",
      },
    ],
    quote:
      "Give your team a repeatable system for lapsed clients, maintenance follow-up, and cancellation rescue instead of relying on memory and manual lists.",
    quoteBrand: "Recally Flow",
    quoteKicker: "Med spa revenue recovery layer",
    heading:
      "More than campaigns. It is a med spa recovery layer for practices that depend on repeat treatments.",
    body: "The platform connects treatment reactivation, premium client perks, cancellation alerts, staff tasks, and performance visibility so revenue recovery becomes part of daily med spa operations.",
    capabilities: [
      {
        icon: "staff",
        title: "Staff-assisted follow-up",
        description:
          "Route only the client opportunities that need a personal touch, such as high-value treatment plans or stalled packages.",
      },
      {
        icon: "visibility",
        title: "Recovered booking visibility",
        description:
          "See which treatments, providers, and follow-up windows are converting into booked appointments.",
      },
      {
        icon: "coordination",
        title: "Provider and front-desk alignment",
        description:
          "Keep open slots, treatment timing, and client outreach coordinated without another spreadsheet.",
      },
    ],
  },
  cta: {
    heading: "Book your Med Spa Missed Revenue Audit.",
    body: "We'll show you where lapsed treatment clients, no-shows, cancellations, and empty provider slots may be leaking revenue and which recovery workflow is worth launching first.",
    primaryCta: {
      label: "Find Missed Med Spa Revenue",
      href: "/build-my-app?vertical=med-spa",
    },
    secondaryCta: {
      label: "See Med Spa Recovery Workflows",
      href: "/med-spa#recovery-workflows",
    },
  },
  audit: {
    metadata: {
      title: "Med Spa Missed Revenue Audit - Recally Flow",
      description:
        "Book a med spa missed revenue audit for lapsed treatment clients, cancellations, no-shows, maintenance gaps, and empty provider slots.",
    },
    eyebrow: "Med Spa Missed Revenue Audit",
    title: "Book your Med Spa Missed Revenue Audit.",
    description:
      "Book a 30-minute working session to uncover where lapsed treatment clients, missed maintenance windows, cancellations, no-shows, and empty provider slots are leaking revenue today.",
    benefits: [
      {
        icon: "treatment",
        title: "Lapsed treatment clients",
        description:
          "Find clients who are overdue for tox, filler, laser, skin, body, or package follow-up and should be prompted to return.",
        tone: "tertiary",
      },
      {
        icon: "noShow",
        title: "No-shows and late cancellations",
        description:
          "Estimate how much provider time is lost when aesthetic appointments are missed, canceled late, or never rebooked.",
        tone: "primary",
      },
      {
        icon: "slot",
        title: "Empty provider slots",
        description:
          "Identify the openings that could be promoted to relevant existing clients before they turn into zero revenue.",
        tone: "sky",
      },
    ],
    bookingHeading: "Book your med spa audit session",
    bookingDescription:
      "Choose a time that works for you. You'll leave with the fastest med spa recovery opportunity, the first client segment to activate, and the slot-rescue or client-perk flow to add next.",
    trustStats: [
      {
        icon: "checklist",
        value: "Estimated missed med spa revenue",
        label: "Focused on treatment and slot leaks first",
      },
      {
        icon: "treatment",
        value: "First recovery segment",
        label: "Prioritize the clients most likely to rebook",
      },
      {
        icon: "slot",
        value: "Suggested slot-rescue flow",
        label: "Leave with a practical next step",
      },
    ],
    roadmapTitle: "What happens in your med spa audit",
    roadmapDescription:
      "A short working session focused on the fastest aesthetic revenue recovery opportunities, not a full system overhaul.",
    roadmapSteps: [
      {
        number: "01",
        title: "Treatment workflow review",
        description:
          "We look at how lapsed treatment clients, maintenance reminders, cancellations, no-shows, and open provider slots are handled today.",
      },
      {
        number: "02",
        title: "Revenue leak mapping",
        description:
          "We identify which client segments, treatments, and follow-up windows are most likely to create recovered bookings first.",
      },
      {
        number: "03",
        title: "Recommended rollout",
        description:
          "You leave with the first reactivation campaign, client-perk flow, or slot-rescue process worth launching.",
      },
    ],
  },
};
