import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WaitTimeCalculator from "@/components/WaitTimeCalculator";
import { experiments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Playground",
  description: "Smaller experiments, mini tools, and unusual things worth building.",
};

export default function PlaygroundPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-line px-5 pb-14 pt-14 sm:px-8">
          <div className="mx-auto max-w-rail">
            <p className="tag mb-4 text-signal">07 — Playground</p>
            <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Smaller, looser, still real.
            </h1>
            <p className="mt-4 max-w-xl text-ink-soft">
              Not every idea earns a full case file. This is where the smaller experiments,
              side studies, and one-off tools live.
            </p>
          </div>
        </section>

        <section className="border-b border-line px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-rail">
            <WaitTimeCalculator />
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-rail">
            <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {experiments.map((e) => (
                <div key={e.name} className="bg-paper p-6 sm:p-8">
                  <span className="tag text-signal">{e.tag}</span>
                  <h3 className="mt-3 font-display text-lg font-bold">{e.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{e.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
