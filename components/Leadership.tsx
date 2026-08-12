"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-rail">
        <p className="tag mb-4 flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          LEADERSHIP & COMMUNITY
        </p>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Community & Initiatives
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {leadership.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative border border-line bg-surface/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-signal/25 hover:bg-surface/30 hover:shadow-[0_8px_24px_rgba(229,9,20,0.02)] grid gap-0 items-stretch ${
                  isEven ? "md:grid-cols-[4fr_6fr]" : "md:grid-cols-[6fr_4fr]"
                }`}
              >
                {/* Image Container with alternating order on desktop */}
                <div className={`relative aspect-[16/10] md:aspect-auto w-full overflow-hidden border-b md:border-b-0 border-line ${
                  isEven ? "md:order-1 md:border-r" : "md:order-2 md:border-l"
                }`}>
                  <img
                    src={item.image}
                    alt={`Event context or photo for ${item.title}`}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  
                  {/* Subtle Image Overlay/Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className={`p-8 sm:p-10 flex flex-col justify-between ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}>
                  <div>
                    {/* Index & Details Badges */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-signal/80 font-bold tracking-widest">{item.index}</span>
                      {item.details && (
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft bg-paper/60 px-2.5 py-1 rounded border border-line/50">
                          {item.details}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-ink group-hover:text-signal transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>

                    {/* Role Tag */}
                    <p className="mt-2 text-xs font-mono font-semibold text-ink-soft uppercase tracking-widest border-l-2 border-signal/40 pl-3">
                      {item.role}
                    </p>

                    {/* Description of Contribution */}
                    {item.contribution && (
                      <p className="mt-6 text-sm leading-relaxed text-ink-soft sm:text-base">
                        {item.contribution}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
