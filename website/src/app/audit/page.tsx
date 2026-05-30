import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OwnerOS Audit — $1,500 Operational Diagnostic",
  description:
    "The OwnerOS Audit is a complete operational diagnostic for owner-led businesses. Get your Readiness Score, workflow map, and 90-day roadmap in 2 weeks.",
};

const scoreCategories = [
  "Lead Capture",
  "Response Speed",
  "Follow-Up Consistency",
  "SOP Maturity",
  "Tool Integration",
  "Task Visibility",
  "Reporting Clarity",
  "AI Readiness",
  "Customer Communication Quality",
  "Owner Dependency",
];

const deliverables = [
  { item: "60-minute discovery call", desc: "We start by listening. Your workflow, your team, your biggest headaches." },
  { item: "OwnerOS Readiness Score (0–100)", desc: "Scored across 10 dimensions so you know exactly where the gaps are." },
  { item: "5 Rooms Assessment", desc: "How each room in your business is currently functioning — and what's missing." },
  { item: "Visual workflow map", desc: "A clear diagram of how leads and customers flow through your business today." },
  { item: "Bottleneck report", desc: "The specific places where time and revenue are being lost." },
  { item: "Quick wins list", desc: "3–5 things you can improve in the next 30 days, with or without us." },
  { item: "90-day roadmap", desc: "A prioritized plan for what to build, fix, and systematize." },
  { item: "12–15 page branded PDF report", desc: "A professional deliverable you can share with your team, investors, or partners." },
];

export default function AuditPage() {
  return (
    <div>
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-navy text-sm font-medium px-4 py-2 rounded-full mb-8">
            Best starting point for new clients
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            OwnerOS Audit<br />
            <span className="text-brand-navy">$1,500. 2 weeks. Total clarity.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            A complete operational diagnostic. We review how your business runs, score it across
            10 dimensions, and give you a clear roadmap for what to fix first — delivered as a
            professional 12–15 page report.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-base py-3 px-8">
              Get Your Audit →
            </Link>
            <Link href="/contact" className="btn-secondary text-base py-3 px-8">
              Ask a Question First
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-10">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div key={d.item} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-sm mb-1">{d.item}</h3>
                    <p className="text-gray-500 text-sm">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Score */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              The OwnerOS Readiness Score
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We score your business from 0 to 100 across 10 dimensions. Most businesses we
              assess score between 15 and 40. After working with us, clients typically reach
              65–85.
            </p>
            <div className="space-y-2">
              {[
                ["0–20", "Highly manual and fragile", "bg-red-100 text-red-700"],
                ["21–40", "Basic systems but inconsistent", "bg-orange-100 text-orange-700"],
                ["41–60", "Some structure but many gaps", "bg-yellow-100 text-yellow-700"],
                ["61–80", "Good foundation, optimization needed", "bg-blue-100 text-blue-700"],
                ["81–100", "Strong system, ready to scale", "bg-green-100 text-green-700"],
              ].map(([range, label, color]) => (
                <div key={range} className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${color} w-16 text-center`}>
                    {range}
                  </span>
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-semibold text-brand-dark mb-4">The 10 Dimensions</h3>
            <div className="grid grid-cols-2 gap-2">
              {scoreCategories.map((cat, i) => (
                <div key={cat} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-brand-navy text-white rounded text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-10 text-center">How it works</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "You fill out the intake form", desc: "20 minutes. Tells us how your business runs, what tools you use, and where the biggest pain points are." },
              { step: "2", title: "We do a 60-minute discovery call", desc: "We go deeper. Your workflow, your team structure, your current follow-up process, your tech stack." },
              { step: "3", title: "We build the report", desc: "5–7 business days to produce your Readiness Score, workflow map, bottleneck report, and roadmap." },
              { step: "4", title: "We present and walk you through it", desc: "30-minute walkthrough call. We explain every finding, answer your questions, and recommend next steps." },
              { step: "5", title: "You decide what to do next", desc: "No pressure. The roadmap is yours. Many clients move forward with an implementation — some start with quick wins on their own." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 bg-brand-navy text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get your OwnerOS Audit.
          </h2>
          <p className="text-gray-400 mb-8">
            $1,500. 2-week turnaround. A complete picture of your business operations
            and a clear path forward.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
}
