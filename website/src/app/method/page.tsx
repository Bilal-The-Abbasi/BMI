import type { Metadata } from "next";
import Link from "next/link";
import { methodPhases, rooms } from "@/data/services";

export const metadata: Metadata = {
  title: "The OwnerOS Method — How We Build Operating Systems",
  description:
    "The OwnerOS Method is a 5-phase process: Map, Score, Build, Train, Optimize. Learn how we install a practical AI-supported operating system for your business.",
};

export default function MethodPage() {
  return (
    <div>
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
            The OwnerOS Method
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            A proven path from operational chaos to a working operating system.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t start building until we understand how your business actually works.
            We don&apos;t hand off until your team is trained and confident.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {methodPhases.map((phase) => (
              <div key={phase.number} className="bg-white rounded-xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {phase.number}
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h2 className="text-xl font-bold text-brand-dark mb-3">Phase {phase.number}: {phase.name}</h2>
                  <p className="text-gray-500 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Rooms */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Organized around 5 Rooms</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every business we work with has the same five operational areas. We call them rooms.
              We build them in order, based on where you&apos;re losing the most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rooms.map((room) => (
              <div key={room.number} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{room.icon}</span>
                  <div>
                    <span className="text-brand-navy font-bold text-sm">Room {room.number}</span>
                    <h3 className="font-bold text-brand-dark">{room.name}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see where you stand?</h2>
          <p className="text-gray-400 mb-8">
            Start with the OwnerOS Audit. We&apos;ll score your business across 10 dimensions
            and build you a clear roadmap.
          </p>
          <Link href="/audit" className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Your Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
