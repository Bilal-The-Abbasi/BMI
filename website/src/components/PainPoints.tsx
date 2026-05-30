const pains = [
  {
    heading: "Leads come in from 4 places and get lost.",
    body: "Phone, web form, Instagram DM, referral — and no single place to see all of them. Some never get a response.",
  },
  {
    heading: "Follow-up happens when someone remembers.",
    body: "There's no sequence, no trigger, no system. A prospect reaches out on Tuesday and hears back on Friday — if at all.",
  },
  {
    heading: "Everything lives in the owner's head.",
    body: "There are no written SOPs. Staff ask the same questions every week. New hires take 3 months to feel productive.",
  },
  {
    heading: "The owner is the bottleneck for every decision.",
    body: "Nothing gets approved without them. The business stops when they're unavailable. Vacation is not really a vacation.",
  },
  {
    heading: "No single place to see how the business is performing.",
    body: "Revenue is in one tool. Tasks are in another. Leads somewhere else. The owner checks everything by gut feel.",
  },
  {
    heading: "Manual work that should run itself.",
    body: "Appointment reminders sent by hand. Invoice follow-up done by memory. Recurring tasks that exist only because someone remembered.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className="section-heading">
            Most owner-led businesses are running on<br />
            memory, habits, and whoever picks up the phone.
          </h2>
          <p className="section-subheading">
            It&apos;s not a motivation problem. It&apos;s an infrastructure problem.
            The business has outgrown the system it&apos;s running on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <div key={pain.heading} className="card">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2 text-sm leading-snug">
                {pain.heading}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pain.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-dark text-white rounded-xl p-8 text-center">
          <p className="text-xl font-semibold mb-3">
            If three or more of these sound familiar — your business needs an operating system.
          </p>
          <p className="text-gray-400 text-sm">
            The OwnerOS Audit shows you exactly where the gaps are and what to fix first.
          </p>
        </div>
      </div>
    </section>
  );
}
