import { methodPhases } from "@/data/services";

export default function Process() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
              The OwnerOS Method
            </p>
            <h2 className="section-heading mb-6">
              Five phases. One clear path from chaos to operating system.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Every engagement follows the same structured approach. We don&apos;t start building
              until we fully understand how your business runs. We don&apos;t hand off until
              your team is trained and confident.
            </p>
            <p className="text-gray-500 leading-relaxed">
              The result is a system you own completely — documented, trained into your team,
              and designed to keep improving over time.
            </p>
          </div>

          <div className="space-y-4">
            {methodPhases.map((phase, i) => (
              <div key={phase.number} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-navy text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  {phase.number}
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex-1">
                  <h3 className="font-bold text-brand-dark mb-1">{phase.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{phase.description}</p>
                </div>
                {i < methodPhases.length - 1 && (
                  <div className="absolute ml-5 mt-14 w-0.5 h-4 bg-gray-200" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
