import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve — OwnerOS AI",
  description:
    "OwnerOS AI works with med spas, contractors, dental offices, law firms, real estate teams, training schools, roofing companies, and professional service firms.",
};

export default function IndustriesPage() {
  return (
    <div>
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            Industries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Owner-led service businesses across every industry.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The problems we solve are the same across verticals — missed leads, weak follow-up,
            no documented processes, and an owner who is the bottleneck. The systems we build
            are customized to how your business actually works.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-white rounded-xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start">
                <span className="text-3xl">{ind.icon}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-xl font-bold text-brand-dark mb-3">{ind.name}</h2>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">The Pain</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{ind.pain}</p>
                </div>
              </div>
              <div className="md:col-span-6 bg-gray-50 rounded-lg p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">After OwnerOS AI</p>
                <p className="text-gray-600 text-sm leading-relaxed">{ind.win}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t see your industry listed?</h2>
          <p className="text-gray-400 mb-8">
            If you run an owner-led service business with 3–50 employees, there&apos;s a good
            chance we can help. Reach out — we&apos;ll tell you quickly if we&apos;re a good fit.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
