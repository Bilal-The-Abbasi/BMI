"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="section-heading">Common questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-brand-dark text-sm">{faq.question}</span>
                <span className="text-brand-navy font-bold text-xl flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
