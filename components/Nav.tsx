"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { nav, profile } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Filter out "Contact" from the list map because it has a dedicated button at the end
  const filteredNav = nav.filter((item) => item.label !== "Contact");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-rail items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2" aria-label={`${profile.name} — home`}>
          <span className="font-display text-lg font-bold tracking-tight text-ink">Varsha Kotegar</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {filteredNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-ink-soft transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold rounded-full border border-ink px-4 py-2 text-ink transition-colors hover:border-signal hover:bg-signal hover:text-paper"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {filteredNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold py-2 text-ink-soft hover:text-signal transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="text-base font-bold py-2 text-signal border-t border-line/45 mt-2 pt-2"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
