import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  heading = "Ready to stop running your business from your inbox?",
  subheading = "Start with a $1,500 OwnerOS Audit. Get your Readiness Score, a visual workflow map, and a clear 90-day roadmap in 2 weeks.",
  primaryCTA = "Get Your OwnerOS Audit →",
  primaryHref = "/audit",
  secondaryCTA = "Talk to Us First",
  secondaryHref = "/contact",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`py-20 px-4 ${dark ? "bg-brand-dark" : "bg-brand-navy"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          {heading}
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {primaryCTA}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-colors"
          >
            {secondaryCTA}
          </Link>
        </div>
        <p className="text-gray-600 text-xs mt-8">
          No contracts required for the Audit. Clear deliverables. 2-week turnaround.
        </p>
      </div>
    </section>
  );
}
