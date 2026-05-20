import type { Metadata } from "next";
import { MedSpaMissedRevenueSnapshot } from "@/components/lead-magnets/MedSpaMissedRevenueSnapshot";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { medSpaSnapshotMetadata } from "@/content/leadMagnets/medSpaMissedRevenueSnapshot";

export const metadata: Metadata = medSpaSnapshotMetadata;

export default function MissedRevenueSnapshotPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen min-w-0 overflow-x-clip px-4 pb-16 pt-28 sm:px-6 md:px-10 lg:px-14">
        <MedSpaMissedRevenueSnapshot />
      </main>

      <Footer />
    </>
  );
}
