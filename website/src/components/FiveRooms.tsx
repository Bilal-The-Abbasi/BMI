import { rooms } from "@/data/services";

export default function FiveRooms() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            The Framework
          </p>
          <h2 className="section-heading">
            The 5 Rooms of an Owner-Led Business
          </h2>
          <p className="section-subheading mx-auto">
            We organize every engagement around five areas every small business needs to get right.
            Simple enough to explain to your team. Powerful enough to transform how the business runs.
          </p>
        </div>

        <div className="space-y-6">
          {rooms.map((room, i) => (
            <div
              key={room.number}
              className={`rounded-xl border p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start ${
                i % 2 === 0 ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200"
              }`}
            >
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3">
                <span className="text-3xl">{room.icon}</span>
                <span className="text-brand-navy font-bold text-lg">{room.number}</span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-bold text-brand-dark text-lg mb-2">{room.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{room.description}</p>
              </div>

              <div className="md:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Problems Solved
                </p>
                <ul className="space-y-1">
                  {room.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-red-400 mt-0.5">×</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Systems Built
                </p>
                <ul className="space-y-1">
                  {room.systems.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
