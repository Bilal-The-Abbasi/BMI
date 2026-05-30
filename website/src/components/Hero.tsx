import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-navy text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-brand-navy rounded-full" />
          For owner-led businesses with 3–50 employees
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-6">
          Stop Running Your Business{" "}
          <span className="text-brand-navy">from Your Inbox.</span>
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          OwnerOS AI installs a practical AI-supported operating system for owner-led businesses
          — so leads don&apos;t fall through the cracks, your team knows what to do, and you can
          finally see what&apos;s happening.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/audit" className="btn-primary text-base py-3 px-8">
            Get Your OwnerOS Audit — $1,500 →
          </Link>
          <Link href="/method" className="btn-secondary text-base py-3 px-8">
            See How It Works
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Starts with a $1,500 diagnostic. Clear roadmap delivered in 2 weeks.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              stat: "5 Rooms",
              label: "Organized operating framework",
              desc: "Front Door · Follow-Up Desk · Playbook · Workroom · Control Room",
            },
            {
              stat: "0→100",
              label: "OwnerOS Readiness Score",
              desc: "10-dimension diagnostic that shows exactly where your business is losing time and revenue",
            },
            {
              stat: "3–50",
              label: "Employees. Your size.",
              desc: "Built specifically for owner-led businesses — not enterprise frameworks shoehorned down",
            },
          ].map((item) => (
            <div key={item.stat} className="bg-gray-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-navy mb-1">{item.stat}</div>
              <div className="font-semibold text-brand-dark text-sm mb-2">{item.label}</div>
              <div className="text-gray-500 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
