import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — OwnerOS AI",
  description:
    "OwnerOS AI is a two-person founding team with backgrounds in marketing strategy, AI operations, and large-scale project management from Apple, Google, Meta, and Microsoft.",
};

const values = [
  {
    title: "We build things that get used.",
    body: "Every engagement produces working systems — SOPs, automations, dashboards, trained staff. Not reports about what you should do someday.",
  },
  {
    title: "We work with what you have.",
    body: "We don't recommend tools to add complexity. We start with your existing stack and only introduce new tools when they solve a specific problem simply.",
  },
  {
    title: "We document everything.",
    body: "Your operating system lives in your tools, not our heads. When we're done, you own every piece — SOPs, templates, automations, dashboards.",
  },
  {
    title: "AI supports humans. Always.",
    body: "We never deploy AI outputs without human review. AI drafts, suggests, and summarizes — humans approve, edit, and decide.",
  },
  {
    title: "We're honest about what's possible.",
    body: "No guaranteed revenue projections. No 'fully automated business' promises. We tell you what we can build, what it will take, and what you can realistically expect.",
  },
  {
    title: "We stay until it works.",
    body: "We don't hand off and disappear. We train the team, support the first 30 days, and offer ongoing partnership for businesses that want to keep improving.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            We built OwnerOS AI because we kept seeing the same problem.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-6">
            Owner-led businesses are run by incredibly capable people who built something real
            — but are stuck operating it the same way they did when they had 3 employees,
            even when they now have 30.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            The business has outgrown the system. But the system is still: the owner&apos;s
            memory, a shared inbox, a few spreadsheets, and whoever picks up the phone first.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-10">The founding team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-navy font-bold">F1</span>
              </div>
              <h3 className="font-bold text-brand-dark text-lg mb-2">Marketing & AI Operations</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Background in marketing strategy, lead generation, CRM design, content systems,
                landing pages, reporting, higher education marketing, local business marketing,
                and AI-assisted business operations.
              </p>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Focus areas</p>
                <p className="text-sm text-gray-600">Positioning · Marketing · Sales messaging · AI workflow design · Client communication · Reporting</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-navy font-bold">F2</span>
              </div>
              <h3 className="font-bold text-brand-dark text-lg mb-2">Project Management & Operations</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                10 years of large-scale project management at Apple, Google, Facebook/Meta,
                and Microsoft. Building delivery systems, managing complex cross-functional
                projects, and rolling out operational infrastructure at scale.
              </p>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Focus areas</p>
                <p className="text-sm text-gray-600">PM · Workflow mapping · Implementation · Documentation · Rollout planning · QA · Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-10">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to work with us?</h2>
          <p className="text-gray-400 mb-8">
            Start with the OwnerOS Audit. It&apos;s the fastest way to see if we&apos;re a fit
            and what we&apos;d build together.
          </p>
          <Link href="/audit" className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Your Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
