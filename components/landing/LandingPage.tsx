import type { LandingPageContent } from "@/content/verticals";
import { CtaSection } from "@/components/home/CtaSection";
import { Hero } from "@/components/home/Hero";
import { OperationsSection } from "@/components/home/OperationsSection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { StepsSection } from "@/components/home/StepsSection";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export function LandingPage({ content }: { content: LandingPageContent }) {
  return (
    <>
      <Nav />

      <main className="min-h-screen min-w-0 overflow-x-clip px-4 pb-6 pt-28 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-6">
          <Hero copy={content.hero} />
          <ProblemsSection copy={content.problems} />
          <StepsSection copy={content.steps} />
          <SolutionsSection copy={content.solutions} />
          <OperationsSection copy={content.operations} />
          <CtaSection copy={content.cta} />
        </div>
      </main>

      <Footer />
    </>
  );
}
