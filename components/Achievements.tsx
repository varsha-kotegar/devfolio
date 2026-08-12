"use client";

import { motion } from "framer-motion";
import { recordImpact } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="record" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-rail">
        <p className="tag mb-4 flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          RECORD / IMPACT
        </p>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Measurable Impact
        </h2>

        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
          {recordImpact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-paper p-8 flex flex-col justify-between hover:bg-surface/50 transition-all duration-300"
            >
              <div>
                <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-signal">
                  {item.value}
                </span>
                <h3 className="mt-4 text-sm font-bold text-ink uppercase tracking-wider font-mono">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
