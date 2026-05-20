import type { LandingPageContent } from "./types";

export const generalContent: LandingPageContent = {
  slug: "general",
  label: "Appointment-Based Practices",
  path: "/",
  metadata: {
    title: "Recally Flow",
    description:
      "Missed revenue recovery for appointment-based healthcare and beauty practices through reactivation, loyalty, slot rescue, and lower manual follow-up.",
  },
  hero: {
    eyebrow: "Missed Revenue Recovery System",
    title: "Recover missed revenue",
    highlight: "without additional work",
    body: "Recally Flow helps appointment-based healthcare and beauty practices bring back inactive patients or clients, reduce no-shows, reward repeat visits, and refill canceled slots using the database they already have.",
    primaryCta: {
      label: "Find Missed Revenue",
      href: "/build-my-app",
    },
    secondaryCta: {
      label: "See Revenue Recovery Workflows",
      href: "/#recovery-workflows",
    },
    dashboard: {
      metrics: [
        {
          label: "Recovered appointments",
          description: "Track from booking data",
          fillPercent: 75,
          tone: "primary",
        },
        {
          label: "Filled empty slots",
          description: "Rescue same-day demand",
          fillPercent: 50,
          tone: "foreground",
        },
      ],
      previewEyebrow: "Dashboard Preview",
      previewTitle:
        "Revenue recovery is turning missed follow-up into booked appointments.",
      statusLabel: "Active",
      flows: [
        {
          label: "Inactive patients or clients",
          status: "Ready to reengage",
        },
        {
          label: "Last-minute openings",
          status: "Ready to refill",
        },
      ],
      flowCountLabel: "3 live recovery flows",
    },
  },
  problems: {
    heading: "Your schedule is already leaking recoverable revenue.",
    body: "It leaks out when inactive patients or clients do not come back, no-shows and late cancellations create empty time, and follow-up depends on whoever has capacity that day.",
    items: [
      {
        icon: "inactive",
        title: "Inactive patients and clients",
        description:
          "People who fall outside their expected return window rarely come back on their own unless someone follows up with a repeatable system.",
      },
      {
        icon: "noShow",
        title: "No-shows waste booked time",
        description:
          "A missed appointment becomes lost revenue when nobody follows up quickly enough to rebook it or protect the next slot.",
      },
      {
        icon: "calendar",
        title: "Late cancellations create empty slots",
        description:
          "Last-minute changes leave schedule gaps behind unless the business can promote those openings to the right people fast.",
      },
      {
        icon: "manual",
        title: "Manual follow-up overload",
        description:
          "When outreach depends on memory, spreadsheets, and whoever has time that day, recoverable opportunities slip through.",
      },
    ],
  },
  steps: {
    heading: "Recover. Retain. Refill.",
    body: "Start with the revenue leaks already in your data, then layer on the workflows that protect repeat visits and refill open time.",
    items: [
      {
        number: "01",
        icon: "workflow",
        title: "Recover",
        description:
          "Reactivate inactive patients or clients, overdue recalls, and missed follow-up opportunities already sitting in your database.",
      },
      {
        number: "02",
        icon: "growth",
        title: "Retain",
        description:
          "Use loyalty, attendance perks, and better reminder logic to protect repeat visits and encourage stronger appointment behavior.",
      },
      {
        number: "03",
        icon: "slot",
        title: "Refill",
        description:
          "Promote canceled or last-minute openings to the right people before empty schedule time turns into zero revenue.",
      },
    ],
  },
  solutions: {
    heading: "Revenue recovery workflows that fit into daily operations.",
    body: "Recally Flow sits on top of your current workflow to automate reactivation, loyalty and attendance incentives, and slot rescue while only handing your team the tasks that actually need a person.",
    cta: {
      label: "See Revenue Recovery Workflows",
      href: "/#recovery-workflows",
    },
    primaryWorkflow: {
      eyebrow: "Primary use case",
      title: "Inactive patient and client reactivation",
      description:
        "Automatically identify patients or clients who have gone quiet and send staged SMS and email follow-up until they book again or need direct outreach from your team.",
      checks: [
        "Segment by last booking, service, return window, or recall status",
        "Escalate to staff only when a patient or client needs human follow-up",
      ],
      workflowLabel: "Recovery Workflow",
      statusLabel: "Live",
      entryRulesLabel: "Entry rules",
      entryRules: ["Past expected return window", "No future booking scheduled"],
      sequenceLabel: "Sequence",
      sequenceSteps: ["SMS", "Email", "Staff"],
    },
    retainWorkflow: {
      eyebrow: "Retain",
      title: "Loyalty & attendance perks",
      description:
        "Encourage repeat visits and better appointment behavior with rewards that feel premium instead of punitive.",
      metricLabel: "Follow-up priority",
      statusLabel: "Active",
      progressPercent: 85,
    },
    secondaryWorkflows: [
      {
        icon: "noShow",
        title: "No-show recovery",
        description:
          "Trigger same-day rebooking outreach after missed appointments so booked time does not stay lost.",
      },
      {
        icon: "calendar",
        title: "Canceled appointment rescue",
        description:
          "Re-engage people who cancel before that appointment turns into an unrecovered schedule gap.",
        statusLabel: "Ready to rebook",
      },
      {
        icon: "slot",
        title: "Last-minute slot refill",
        description:
          "Promote newly opened slots to the right segment before empty time turns into lost revenue.",
      },
    ],
  },
  operations: {
    panelEyebrow: "Revenue recovery layer",
    panelTitle: "Your front desk and follow-up finally work as one system.",
    panelStatus: "Visible",
    queueLabel: "Recovery queue",
    queueValue: "Patients and clients ready",
    handoffLabel: "Team handoff",
    handoffItems: [
      {
        label: "Team",
        value: "Tasked only when automation stalls",
        tone: "foreground",
      },
      {
        label: "Performance",
        value: "Visible daily",
        tone: "tertiary",
      },
    ],
    quote:
      "Give your team a repeatable system for follow-up instead of relying on memory, manual lists, and missed handoffs.",
    quoteBrand: "Recally Flow",
    quoteKicker: "Revenue recovery layer",
    heading:
      "More than messaging. It is a revenue recovery operating layer for practices that depend on repeat appointments.",
    body: "The platform connects reactivation, loyalty, slot rescue, team tasks, and performance visibility so recovery becomes part of the daily workflow.",
    capabilities: [
      {
        icon: "staff",
        title: "Staff tasking",
        description:
          "Route only the follow-up tasks that need a person instead of forcing the front desk to chase every opportunity manually.",
      },
      {
        icon: "visibility",
        title: "Recovery visibility",
        description:
          "See what is rebooking appointments, what still needs intervention, and where revenue recovery is building inside daily workflows.",
      },
      {
        icon: "coordination",
        title: "Role-based coordination",
        description:
          "Keep your team, managers, and service staff aligned on one revenue recovery process with clear ownership and fewer missed handoffs.",
      },
    ],
  },
  cta: {
    heading: "Book your Free Missed Revenue Audit.",
    body: "We'll show you where inactive patients or clients, missed appointments, cancellations, and empty slots are leaking revenue and which recovery workflows are worth launching first.",
    primaryCta: {
      label: "Find Missed Revenue",
      href: "/build-my-app",
    },
    secondaryCta: {
      label: "See Revenue Recovery Workflows",
      href: "/#recovery-workflows",
    },
  },
  audit: {
    metadata: {
      title: "Free Missed Revenue Audit - Recally Flow",
      description:
        "Book a missed revenue audit for inactive clients, no-shows, cancellations, empty slots, and manual follow-up leaks.",
    },
    eyebrow: "Free Missed Revenue Audit",
    title: "Book your Free Missed Revenue Audit.",
    description:
      "Book a 30-minute working session to uncover where inactive patients or clients, no-shows, cancellations, and empty slots are leaking revenue today. We'll map the recovery opportunities worth solving first.",
    benefits: [
      {
        icon: "growth",
        title: "Inactive patients or clients",
        description:
          "See how much revenue may be sitting in people who have not returned, missed follow-ups, or fallen outside their expected return window.",
        tone: "tertiary",
      },
      {
        icon: "noShow",
        title: "No-shows & late cancellations",
        description:
          "Measure how much booked time is being lost when appointments are missed, canceled late, or never recovered.",
        tone: "primary",
      },
      {
        icon: "calendar",
        title: "Empty last-minute slots",
        description:
          "Find the openings that appear in your schedule and should be promoted to existing patients or clients before they disappear.",
        tone: "sky",
      },
    ],
    bookingHeading: "Book your audit session",
    bookingDescription:
      "Choose a time that works for you. You'll leave with an estimate of missed revenue, the fastest recovery opportunity, the first campaign to launch, and the right loyalty or slot rescue flow to add next.",
    trustStats: [
      {
        icon: "checklist",
        value: "Estimated missed revenue",
        label: "Focused on the leaks that matter first",
      },
      {
        icon: "staff",
        value: "Fastest recovery opportunity",
        label: "Prioritize the first workflow with the clearest return",
      },
      {
        icon: "heart",
        value: "Suggested first rollout",
        label: "Leave with a practical next step, not a long wishlist",
      },
    ],
    roadmapTitle: "What happens in your audit",
    roadmapDescription:
      "A short working session focused on the fastest recovery opportunities, not a long implementation process.",
    roadmapSteps: [
      {
        number: "01",
        title: "Current workflow review",
        description:
          "We look at how inactive patients or clients, cancellations, no-shows, and empty slots are handled today.",
      },
      {
        number: "02",
        title: "Revenue leak mapping",
        description:
          "We identify which segments and follow-up flows can produce the fastest measurable return.",
      },
      {
        number: "03",
        title: "Recommended rollout",
        description:
          "You leave with the first campaign, first loyalty or slot-rescue flow, and the metrics worth tracking first.",
      },
    ],
  },
};
