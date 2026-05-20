import { dentalContent } from "./dental";
import { generalContent } from "./general";
import { medSpaContent } from "./medSpa";
import { salonsContent } from "./salons";
import type { AuditPageCopy, LandingPageContent, VerticalSlug } from "./types";

export const verticalContents = [
  medSpaContent,
  dentalContent,
  salonsContent,
] as const;

export const verticalSlugs = verticalContents.map(
  (content) => content.slug,
) as VerticalSlug[];

export const allLandingContents = [
  generalContent,
  ...verticalContents,
] as const;

export function getVerticalContent(
  slug: string | undefined,
): LandingPageContent | undefined {
  return verticalContents.find((content) => content.slug === slug);
}

export function getAuditPageCopy(
  slug: string | undefined,
): AuditPageCopy {
  return getVerticalContent(slug)?.audit ?? generalContent.audit;
}

export function getAuditHref(pathname: string | null | undefined): string {
  const match = verticalContents.find((content) => pathname === content.path);

  if (!match) {
    return "/build-my-app";
  }

  return `/build-my-app?vertical=${match.slug}`;
}

export { generalContent };
export type { LandingPageContent, VerticalSlug };
