import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import FiveRooms from "@/components/FiveRooms";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "OwnerOS AI — The AI Operating System for Owner-Led Businesses",
  description:
    "Stop running your business from your inbox. OwnerOS AI installs a practical AI-supported operating system that organizes leads, follow-up, SOPs, tasks, and owner visibility.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <FiveRooms />
      <Services />
      <Process />

      {/* Who We Help */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
              Who We Help
            </p>
            <h2 className="section-heading">
              Built for owner-led service businesses.
            </h2>
            <p className="section-subheading mx-auto">
              We focus on businesses where the owner is in the work every day and the operating
              infrastructure hasn&apos;t kept up with the growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.slice(0, 8).map((ind) => (
              <div key={ind.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-2xl mb-2">{ind.icon}</div>
                <h3 className="font-semibold text-brand-dark text-sm mb-2">{ind.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{ind.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
