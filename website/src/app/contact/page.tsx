import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — OwnerOS AI",
  description:
    "Get in touch with OwnerOS AI. Start with a $1,500 Audit or ask a question about our services for owner-led businesses.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
                Contact
              </p>
              <h1 className="text-4xl font-bold text-brand-dark mb-6">
                Let&apos;s talk about your business.
              </h1>
              <p className="text-gray-500 leading-relaxed mb-8">
                The best first step is a brief conversation. Tell us what you&apos;re working
                with, and we&apos;ll tell you quickly whether we can help and what that looks like.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark mb-1 text-sm">Start with the OwnerOS Audit</h3>
                  <p className="text-gray-500 text-sm">$1,500 · 2-week turnaround · No obligation to continue</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark mb-1 text-sm">Ask a question first</h3>
                  <p className="text-gray-500 text-sm">Fill out the form and we&apos;ll respond within 1 business day.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark mb-1 text-sm">Refer a business</h3>
                  <p className="text-gray-500 text-sm">Know a business owner who needs this? Send them our way. We appreciate referrals.</p>
                </div>
              </div>
            </div>

            {/* Form — replace action with Formspree or similar */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-bold text-brand-dark text-lg mb-6">Send us a message</h2>
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="business"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    placeholder="Glow Med Spa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    placeholder="jane@glowmedspa.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industry / business type
                  </label>
                  <select
                    name="industry"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white"
                  >
                    <option value="">Select your industry</option>
                    <option>Med Spa</option>
                    <option>Dental Office / Clinic</option>
                    <option>Contractor / Remodeler</option>
                    <option>Roofing / HVAC</option>
                    <option>Law Firm</option>
                    <option>Real Estate Team</option>
                    <option>Training School</option>
                    <option>Professional Services</option>
                    <option>Cleaning Company</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of employees
                  </label>
                  <select
                    name="employees"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white"
                  >
                    <option value="">Select range</option>
                    <option>1–5</option>
                    <option>6–15</option>
                    <option>16–30</option>
                    <option>31–50</option>
                    <option>50+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What&apos;s your biggest operational pain right now?
                  </label>
                  <textarea
                    name="pain"
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none"
                    placeholder="Leads fall through the cracks, follow-up is inconsistent, I'm the bottleneck for everything..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What are you interested in?
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white"
                  >
                    <option value="">Select</option>
                    <option>OwnerOS Audit ($1,500)</option>
                    <option>OwnerOS QuickStart ($5,000)</option>
                    <option>OwnerOS Growth System ($10K–$15K)</option>
                    <option>Partner Retainer</option>
                    <option>Just exploring / asking a question</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-3"
                >
                  Send Message →
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respond within 1 business day. No spam. No pressure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
