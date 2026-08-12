"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-rail text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag mb-4 flex items-center justify-center gap-2 text-signal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl text-ink"
        >
          Let&apos;s start a conversation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-4 max-w-lg text-base text-ink-soft"
        >
          I am currently open to Business Analyst internships and associate opportunities. 
          Feel free to reach out directly via email to discuss potential roles or collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-8"
        >
          <a
            href={`mailto:${profile.email}`}
            className="rounded bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-signal/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            Email: {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
