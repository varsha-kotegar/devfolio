"use client";

import { motion } from "framer-motion";
import { technicalExposure } from "@/lib/data";

export default function TechnicalExposure() {
  return (
    <section id="exposure" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-rail">
        <p className="tag mb-4 flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          TECHNICAL EXPOSURE
        </p>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          External Exposure & Involvement
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technicalExposure.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden border bg-surface rounded transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.025] hover:shadow-[0_12px_24px_rgba(229,9,20,0.05)] motion-reduce:transform-none ${
                item.isHandsOn
                  ? "border-line hover:border-signal/30"
                  : "border-line/60 hover:border-signal/20 opacity-90 hover:opacity-100"
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
                <img
                  src={item.image}
                  alt={`Event context or photo for ${item.title}`}
                  className="h-full w-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                  loading="lazy"
                />

                {/* Event Type Tag */}
                <div className="absolute top-3 left-3">
                  <span className={`tag rounded px-2 py-0.5 text-[0.6rem] font-bold tracking-wider uppercase border ${
                    item.isHandsOn
                      ? "bg-signal/15 text-signal border-signal/35"
                      : "bg-paper/85 text-ink-soft border-line/80"
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-display text-base font-bold tracking-tight text-ink group-hover:text-signal transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                    {item.activity}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
