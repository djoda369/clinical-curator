import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { generalContent } from "@/content/verticals";

export const metadata: Metadata = generalContent.metadata;

export default function Home() {
  return <LandingPage content={generalContent} />;
}
