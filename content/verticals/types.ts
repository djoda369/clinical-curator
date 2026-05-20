export type VerticalSlug = "med-spa" | "dental" | "salons";

export type LandingSlug = "general" | VerticalSlug;

export type IconKey =
  | "inactive"
  | "noShow"
  | "calendar"
  | "manual"
  | "workflow"
  | "growth"
  | "slot"
  | "staff"
  | "visibility"
  | "coordination"
  | "treatment"
  | "heart"
  | "checklist";

export type LinkCopy = {
  label: string;
  href: string;
};

export type MetadataCopy = {
  title: string;
  description: string;
};

export type HeroMetricCopy = {
  label: string;
  description: string;
  fillPercent: number;
  tone: "primary" | "foreground";
};

export type HeroFlowCopy = {
  label: string;
  status: string;
};

export type HeroCopy = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  primaryCta: LinkCopy;
  secondaryCta: LinkCopy;
  dashboard: {
    metrics: HeroMetricCopy[];
    previewEyebrow: string;
    previewTitle: string;
    statusLabel: string;
    flows: HeroFlowCopy[];
    flowCountLabel: string;
  };
};

export type ProblemCopy = {
  icon: IconKey;
  title: string;
  description: string;
};

export type ProblemsSectionCopy = {
  heading: string;
  body: string;
  items: ProblemCopy[];
};

export type StepCopy = {
  number: string;
  icon: IconKey;
  title: string;
  description: string;
};

export type StepsSectionCopy = {
  heading: string;
  body: string;
  items: StepCopy[];
};

export type SolutionsSectionCopy = {
  heading: string;
  body: string;
  cta: LinkCopy;
  primaryWorkflow: {
    eyebrow: string;
    title: string;
    description: string;
    checks: string[];
    workflowLabel: string;
    statusLabel: string;
    entryRulesLabel: string;
    entryRules: string[];
    sequenceLabel: string;
    sequenceSteps: string[];
  };
  retainWorkflow: {
    eyebrow: string;
    title: string;
    description: string;
    metricLabel: string;
    statusLabel: string;
    progressPercent: number;
  };
  secondaryWorkflows: {
    icon: IconKey;
    title: string;
    description: string;
    statusLabel?: string;
  }[];
};

export type OperationsSectionCopy = {
  panelEyebrow: string;
  panelTitle: string;
  panelStatus: string;
  queueLabel: string;
  queueValue: string;
  handoffLabel: string;
  handoffItems: {
    label: string;
    value: string;
    tone: "primary" | "tertiary" | "foreground";
  }[];
  quote: string;
  quoteBrand: string;
  quoteKicker: string;
  heading: string;
  body: string;
  capabilities: {
    icon: IconKey;
    title: string;
    description: string;
  }[];
};

export type CtaSectionCopy = {
  heading: string;
  body: string;
  primaryCta: LinkCopy;
  secondaryCta: LinkCopy;
};

export type AuditPageCopy = {
  metadata: MetadataCopy;
  eyebrow: string;
  title: string;
  description: string;
  benefits: {
    icon: IconKey;
    title: string;
    description: string;
    tone: "tertiary" | "primary" | "sky";
  }[];
  bookingHeading: string;
  bookingDescription: string;
  trustStats: {
    icon: IconKey;
    value: string;
    label: string;
  }[];
  roadmapTitle: string;
  roadmapDescription: string;
  roadmapSteps: {
    number: string;
    title: string;
    description: string;
  }[];
};

export type LandingPageContent = {
  slug: LandingSlug;
  label: string;
  path: string;
  metadata: MetadataCopy;
  hero: HeroCopy;
  problems: ProblemsSectionCopy;
  steps: StepsSectionCopy;
  solutions: SolutionsSectionCopy;
  operations: OperationsSectionCopy;
  cta: CtaSectionCopy;
  audit: AuditPageCopy;
};
