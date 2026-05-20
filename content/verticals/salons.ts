import type { LandingPageContent } from "./types";

export const salonsContent: LandingPageContent = {
  slug: "salons",
  label: "Salons",
  path: "/salons",
  metadata: {
    title: "Salon Revenue Recovery - Recally Flow",
    description:
      "Salon revenue recovery for lapsed guests, missed rebooking windows, no-shows, cancellations, stylist gaps, and repeat visit automation.",
  },
  hero: {
    eyebrow: "Salon Revenue Recovery",
    title: "Fill salon chairs with clients",
    highlight: "already in your book",
    body: "Recally Flow helps salons bring back lapsed clients, protect repeat visit rhythm, reduce no-shows, and refill stylist openings using the guest list they already have.",
    primaryCta: {
      label: "Find Missed Salon Revenue",
      href: "/build-my-app?vertical=salons",
    },
    secondaryCta: {
      label: "See Salon Recovery Workflows",
      href: "/salons#recovery-workflows",
    },
    dashboard: {
      metrics: [
        {
          label: "Lapsed clients recovered",
          description: "Track from booking data",
          fillPercent: 74,
          tone: "primary",
        },
        {
          label: "Stylist gaps refilled",
          description: "Rescue open time",
          fillPercent: 56,
          tone: "foreground",
        },
      ],
      previewEyebrow: "Salon Recovery Preview",
      previewTitle:
        "Rebooking recovery is turning quiet client lists into filled chairs.",
      statusLabel: "Active",
      flows: [
        {
          label: "Clients past rebooking window",
          status: "Ready to reengage",
        },
        {
          label: "Stylist openings",
          status: "Ready to refill",
        },
      ],
      flowCountLabel: "3 live salon recovery flows",
    },
  },
  problems: {
    heading: "Your salon loses revenue when clients drift past their rebooking window.",
    body: "Clients intend to come back, color maintenance slips, cancellations leave stylist gaps, and follow-up gets scattered across booking notes, texts, and DMs.",
    items: [
      {
        icon: "inactive",
        title: "Clients drift past 8 to 12 weeks",
        description:
          "Regular guests often miss their ideal return window unless the salon has a consistent rebooking and reminder process.",
      },
      {
        icon: "treatment",
        title: "Color and maintenance timing slips",
        description:
          "Color, extensions, treatments, and recurring services lose momentum when clients are not prompted at the right time.",
      },
      {
        icon: "calendar",
        title: "Late cancellations leave stylist gaps",
        description:
          "Openings need to reach the right clients fast before chair time turns into zero revenue.",
      },
      {
        icon: "manual",
        title: "Follow-up is scattered",
        description:
          "Client notes, DMs, booking software, and staff memory make it hard to keep every repeat-visit opportunity moving.",
      },
    ],
  },
  steps: {
    heading: "Recover. Retain. Refill.",
    body: "Start with clients past their rebooking window, then add loyalty, consistency, and open-chair recovery workflows.",
    items: [
      {
        number: "01",
        icon: "workflow",
        title: "Recover",
        description:
          "Reactivate clients who have not booked again after color, cuts, treatments, extensions, or recurring services.",
      },
      {
        number: "02",
        icon: "growth",
        title: "Retain",
        description:
          "Use regular-client perks and rebooking prompts to keep guests on a consistent visit rhythm.",
      },
      {
        number: "03",
        icon: "slot",
        title: "Refill",
        description:
          "Promote stylist openings to clients who want earlier appointments, maintenance visits, or last-minute availability.",
      },
    ],
  },
  solutions: {
    heading: "Salon recovery workflows for rebooking, loyalty, and open-chair rescue.",
    body: "Recally Flow fits around your current booking workflow to bring back lapsed clients, keep regular guests returning, and refill cancellations without asking staff to chase every opportunity manually.",
    cta: {
      label: "See Salon Recovery Workflows",
      href: "/salons#recovery-workflows",
    },
    primaryWorkflow: {
      eyebrow: "Primary use case",
      title: "Lapsed client rebooking recovery",
      description:
        "Identify clients who have not returned within their expected service window and send staged SMS, email, and staff-assisted follow-up until they book again.",
      checks: [
        "Segment by stylist, service, last booking date, or ideal return window",
        "Escalate to staff only when a high-fit client needs personal follow-up",
      ],
      workflowLabel: "Salon Recovery Workflow",
      statusLabel: "Live",
      entryRulesLabel: "Entry rules",
      entryRules: ["Past rebooking window", "No future appointment scheduled"],
      sequenceLabel: "Sequence",
      sequenceSteps: ["SMS", "Email", "Staff"],
    },
    retainWorkflow: {
      eyebrow: "Retain",
      title: "Regular client perks",
      description:
        "Reward clients who book consistently, show up on time, or cancel early enough for the salon to refill the opening.",
      metricLabel: "Rebooking priority",
      statusLabel: "Active",
      progressPercent: 84,
    },
    secondaryWorkflows: [
      {
        icon: "treatment",
        title: "Color and service maintenance",
        description:
          "Prompt guests when they are due for color refreshes, treatments, extensions, or recurring services.",
      },
      {
        icon: "noShow",
        title: "No-show recovery",
        description:
          "Trigger warm rebooking outreach after missed appointments so the client relationship stays intact.",
        statusLabel: "Ready to rebook",
      },
      {
        icon: "slot",
        title: "Open-chair alerts",
        description:
          "Promote last-minute openings to clients matched by service, stylist, timing, or earlier-appointment interest.",
      },
    ],
  },
  operations: {
    panelEyebrow: "Salon recovery layer",
    panelTitle: "Your client follow-up and stylist availability work as one system.",
    panelStatus: "Visible",
    queueLabel: "Salon recovery queue",
    queueValue: "Clients ready for rebooking",
    handoffLabel: "Team handoff",
    handoffItems: [
      {
        label: "Team",
        value: "Only personal follow-ups assigned",
        tone: "foreground",
      },
      {
        label: "Schedule",
        value: "Open-chair recovery visible",
        tone: "tertiary",
      },
    ],
    quote:
      "Give your team a repeatable process for rebooking, regular-client follow-up, and open-chair rescue instead of relying on memory and DMs.",
    quoteBrand: "Recally Flow",
    quoteKicker: "Salon revenue recovery layer",
    heading:
      "More than reminders. It is a salon recovery layer for businesses that depend on repeat visits.",
    body: "The platform connects rebooking recovery, regular-client perks, open-chair alerts, staff tasks, and performance visibility so follow-up becomes part of daily salon operations.",
    capabilities: [
      {
        icon: "staff",
        title: "Personal follow-up routing",
        description:
          "Give staff the clients who need a human touch instead of asking them to chase every lapsed booking manually.",
      },
      {
        icon: "visibility",
        title: "Rebooking visibility",
        description:
          "See which services, stylists, and return windows are converting into booked appointments.",
      },
      {
        icon: "coordination",
        title: "Stylist and schedule alignment",
        description:
          "Match open chair time to the clients most likely to book that service, stylist, and time window.",
      },
    ],
  },
  cta: {
    heading: "Book your Salon Missed Revenue Audit.",
    body: "We'll show you where lapsed clients, missed rebooking windows, no-shows, cancellations, and stylist gaps may be leaking revenue and which recovery workflow is worth launching first.",
    primaryCta: {
      label: "Find Missed Salon Revenue",
      href: "/build-my-app?vertical=salons",
    },
    secondaryCta: {
      label: "See Salon Recovery Workflows",
      href: "/salons#recovery-workflows",
    },
  },
  audit: {
    metadata: {
      title: "Salon Missed Revenue Audit - Recally Flow",
      description:
        "Book a salon missed revenue audit for lapsed clients, missed rebooking windows, cancellations, no-shows, and open stylist time.",
    },
    eyebrow: "Salon Missed Revenue Audit",
    title: "Book your Salon Missed Revenue Audit.",
    description:
      "Book a 30-minute working session to uncover where lapsed clients, missed rebooking windows, no-shows, cancellations, and open chair time are leaking revenue today.",
    benefits: [
      {
        icon: "inactive",
        title: "Clients past rebooking window",
        description:
          "Find guests who have not returned after their expected color, cut, treatment, extension, or maintenance window.",
        tone: "tertiary",
      },
      {
        icon: "noShow",
        title: "No-shows and late cancellations",
        description:
          "Estimate how much stylist time is lost when appointments are missed, canceled late, or never recovered.",
        tone: "primary",
      },
      {
        icon: "slot",
        title: "Open chair time",
        description:
          "Identify openings that could be promoted to relevant clients before the slot becomes zero revenue.",
        tone: "sky",
      },
    ],
    bookingHeading: "Book your salon audit session",
    bookingDescription:
      "Choose a time that works for you. You'll leave with the fastest salon recovery opportunity, the first client segment to activate, and the rebooking or open-chair flow to launch next.",
    trustStats: [
      {
        icon: "checklist",
        value: "Estimated missed salon revenue",
        label: "Focused on rebooking and chair-time leaks first",
      },
      {
        icon: "inactive",
        value: "First client segment",
        label: "Prioritize the clients most likely to return",
      },
      {
        icon: "slot",
        value: "Suggested open-chair flow",
        label: "Leave with a practical next step",
      },
    ],
    roadmapTitle: "What happens in your salon audit",
    roadmapDescription:
      "A short working session focused on the fastest rebooking, loyalty, and open-chair recovery opportunities.",
    roadmapSteps: [
      {
        number: "01",
        title: "Rebooking workflow review",
        description:
          "We look at how lapsed clients, rebooking windows, no-shows, cancellations, and open stylist time are handled today.",
      },
      {
        number: "02",
        title: "Revenue leak mapping",
        description:
          "We identify which client segments, services, and follow-up windows can create recovered appointments first.",
      },
      {
        number: "03",
        title: "Recommended rollout",
        description:
          "You leave with the first rebooking, regular-client, or open-chair rescue workflow worth launching.",
      },
    ],
  },
};
