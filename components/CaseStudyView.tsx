"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";

const sections: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "context", label: "Context" },
  { key: "data", label: "Data" },
  { key: "approach", label: "Approach" },
  { key: "analysis", label: "Analysis" },
  { key: "findings", label: "Key findings" },
  { key: "decision", label: "Decision" },
  { key: "result", label: "Result" },
  { key: "limitations", label: "Limitations" },
  { key: "learned", label: "What I learned" },
];

export default function CaseStudyView({ study, next }: { study: CaseStudy; next?: CaseStudy }) {
  const [active, setActive] = useState(sections[0].key);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as keyof CaseStudy);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <article>
      <header className="border-b border-line px-5 pb-14 pt-12 sm:px-8">
        <div className="mx-auto max-w-rail">
          <Link href="/#work" className="tag mb-8 inline-flex items-center gap-2 text-ink-soft hover:text-signal">
            ← All case files
          </Link>

          <p className="tag mb-4 text-signal">Case file {study.index}</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {study.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{study.tag}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span key={s} className="tag rounded-full border border-line px-2.5 py-1 text-ink-soft">
                {s}
              </span>
            ))}
          </div>

          {study.links && (
            <div className="mt-6 flex gap-4">
              {study.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag text-signal underline underline-offset-4"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto grid max-w-rail gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <div className="sticky top-24 space-y-1 border-l border-line pl-4">
            {sections.map((s) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className={`tag block py-1.5 transition-colors ${
                  active === s.key ? "text-signal" : "text-ink-soft hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="space-y-14">
          {sections.map((s, i) => (
            <motion.section
              key={s.key}
              id={s.key}
              ref={(el) => {
                refs.current[s.key] = el;
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-24 border-b border-line pb-10 last:border-b-0"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-mono text-xs text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight">{s.label}</h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {study[s.key] as string}
              </p>
            </motion.section>
          ))}
        </div>
      </div>

      {next && (
        <div className="border-t border-line px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-rail">
            <p className="tag mb-2 text-ink-soft">Next case file</p>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between gap-4"
            >
              <span className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-signal sm:text-3xl">
                {next.name}
              </span>
              <span className="font-display text-2xl text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-signal">
                →
              </span>
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
