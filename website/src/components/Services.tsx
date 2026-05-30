import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            Services
          </p>
          <h2 className="section-heading">Start where you are. Build from there.</h2>
          <p className="section-subheading mx-auto">
            Every engagement starts with understanding your business. From there, we build
            at the pace and scope that fits your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="mb-1">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    service.highlight ? "text-blue-300" : "text-brand-navy"
                  }`}
                >
                  {service.tagline}
                </p>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    service.highlight ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-2xl font-bold mb-4 ${
                    service.highlight ? "text-blue-200" : "text-brand-navy"
                  }`}
                >
                  {service.price}
                </p>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.highlight ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-0.5 font-bold ${
                        service.highlight ? "text-blue-300" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={service.highlight ? "text-blue-100" : "text-gray-600"}>
                      {d}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
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
        </div>
      </div>
    </section>
  );
}
