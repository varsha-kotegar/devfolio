"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

export default function Learning() {
  return (
    <section id="learning" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-rail">
        <p className="tag mb-4 flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          CONTINUOUS LEARNING
        </p>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Technical Certifications
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-line bg-surface/30 p-6 rounded hover:border-signal/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="tag text-xs text-signal/80 font-mono tracking-wider">
                  {cert.issuer}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink leading-snug">
                  {cert.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
