"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function WaitTimeCalculator() {
  const [people, setPeople] = useState(18);
  const [arrivalsPerMin, setArrivalsPerMin] = useState(3);

  const waitMinutes = useMemo(() => {
    if (arrivalsPerMin <= 0) return null;
    return people / arrivalsPerMin;
  }, [people, arrivalsPerMin]);

  return (
    <div className="border border-line bg-surface p-6 sm:p-8">
      <p className="tag mb-2 text-signal">Little&apos;s Law, live</p>
      <h3 className="mb-1 font-display text-xl font-bold">Wait-time estimator</h3>
      <p className="mb-6 max-w-md text-sm text-ink-soft">
        The same model VoxelQ runs on a live camera feed — here, W = L / λ, worked by hand.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="tag mb-2 flex justify-between text-ink-soft">
            <span>People in line (L)</span>
            <span className="font-mono text-ink">{people}</span>
          </span>
          <input
            type="range"
            min={1}
            max={80}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="w-full accent-signal"
            aria-valuetext={`${people} people`}
          />
        </label>

        <label className="block">
          <span className="tag mb-2 flex justify-between text-ink-soft">
            <span>Arrivals per minute (λ)</span>
            <span className="font-mono text-ink">{arrivalsPerMin}</span>
          </span>
          <input
            type="range"
            min={1}
            max={20}
            value={arrivalsPerMin}
            onChange={(e) => setArrivalsPerMin(Number(e.target.value))}
            className="w-full accent-signal"
            aria-valuetext={`${arrivalsPerMin} arrivals per minute`}
          />
        </label>
      </div>

      <motion.div
        key={waitMinutes ?? "n/a"}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-8 flex items-baseline gap-3 border-t border-line pt-6"
      >
        <span className="font-display text-4xl font-bold text-signal sm:text-5xl">
          {waitMinutes !== null ? waitMinutes.toFixed(1) : "—"}
        </span>
        <span className="tag text-ink-soft">minutes expected wait (W)</span>
      </motion.div>
    </div>
  );
}
