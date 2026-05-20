import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/LandingPage";
import { getVerticalContent, verticalSlugs } from "@/content/verticals";

type VerticalPageProps = {
  params: Promise<{ vertical: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return verticalSlugs.map((vertical) => ({ vertical }));
}

export async function generateMetadata({
  params,
}: VerticalPageProps): Promise<Metadata> {
  const { vertical } = await params;
  const content = getVerticalContent(vertical);

  if (!content) {
    return {};
  }

  return content.metadata;
}

export default async function VerticalPage({ params }: VerticalPageProps) {
  const { vertical } = await params;
  const content = getVerticalContent(vertical);

  if (!content) {
    notFound();
  }

  return <LandingPage content={content} />;
}
