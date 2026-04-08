import { CtaSection } from "@/components/home/CtaSection";
import { Hero } from "@/components/home/Hero";
import { MetricsSection } from "@/components/home/MetricsSection";
import { OperationsSection } from "@/components/home/OperationsSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { StepsSection } from "@/components/home/StepsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="min-h-screen px-6 pb-6 pt-28 md:px-10 lg:px-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <Hero />
          <MetricsSection />
          <ProblemsSection />
          <StepsSection />
          <SolutionsSection />
          <OperationsSection />
          <OutcomesSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
