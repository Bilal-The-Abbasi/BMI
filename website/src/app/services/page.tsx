import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — OwnerOS AI",
  description:
    "OwnerOS AI offers four service tiers for owner-led businesses: the $1,500 Audit, $5,000 QuickStart, $10K–$15K Growth System, and monthly Partner Retainer.",
};

const fullBuildout = {
  name: "OwnerOS Full Buildout",
  price: "$25,000–$50,000",
  description:
    "For businesses with 10–50 employees ready for a full operational transformation. Includes all 5 Rooms, SOP library, knowledge base, staff and manager training, AI governance, and a 90-day optimization program.",
  deliverables: [
    "Full workflow mapping (all departments)",
    "Lead flow and CRM system",
    "Customer communication system",
    "Project and task management setup",
    "SOP library (20–30 SOPs)",
    "Knowledge base",
    "Owner and manager dashboard",
    "Staff and manager training",
    "AI governance rules",
    "90-day optimization program",
  ],
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Build the operating system your business needs.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Every engagement starts with understanding how your business runs. We build at
            the pace and scope that fits — from a fast diagnostic to a full operating system.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-xl p-8 border flex flex-col ${
                service.highlight
                  ? "bg-brand-navy text-white border-brand-navy"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              {service.highlight && (
                <div className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  Most Popular
                </div>
              )}
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${service.highlight ? "text-blue-300" : "text-brand-navy"}`}>
                {service.tagline}
              </p>
              <h2 className={`text-xl font-bold mb-1 ${service.highlight ? "text-white" : "text-brand-dark"}`}>
                {service.name}
              </h2>
              <p className={`text-2xl font-bold mb-4 ${service.highlight ? "text-blue-200" : "text-brand-navy"}`}>
                {service.price}
              </p>
              <p className={`text-sm leading-relaxed mb-6 ${service.highlight ? "text-blue-100" : "text-gray-500"}`}>
                {service.description}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 font-bold ${service.highlight ? "text-blue-300" : "text-green-500"}`}>✓</span>
                    <span className={service.highlight ? "text-blue-100" : "text-gray-600"}>{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.id === "audit" ? "/audit" : "/contact"}
                className={`inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
                  service.highlight
                    ? "bg-white text-brand-navy hover:bg-blue-50"
                    : "bg-brand-navy text-white hover:bg-brand-slate"
                }`}
              >
                {service.cta} →
              </Link>
            </div>
          ))}

          {/* Full Buildout card */}
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">For 10–50 employee businesses</p>
                <h2 className="text-xl font-bold text-brand-dark mb-1">{fullBuildout.name}</h2>
                <p className="text-2xl font-bold text-brand-navy mb-4">{fullBuildout.price}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{fullBuildout.description}</p>
                <Link href="/contact" className="btn-primary text-sm py-2 px-5">Get a Proposal →</Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Includes</p>
                <ul className="space-y-2">
                  {fullBuildout.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5 font-bold">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure which service is right for you?"
        subheading="Start with the OwnerOS Audit. It gives you a complete picture of your business operations and a clear recommendation for next steps."
        primaryCTA="Get Your Audit — $1,500 →"
        primaryHref="/audit"
        secondaryCTA="Ask a Question"
        secondaryHref="/contact"
      />
    </div>
  );
}
