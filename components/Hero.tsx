"use client";

import { motion } from "framer-motion";
import { hero, profile } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative border-b border-line px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-rail grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
      >
        {/* Left Column: Typography & Professional Signals */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow greeting */}
          <motion.p
            variants={fadeUp}
            className="tag mb-4 flex items-center gap-2 text-signal"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            {hero.eyebrow}
          </motion.p>

          {/* Main heading / Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.8rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-ink"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheading / Role */}
          {profile.role && (
            <motion.p
              variants={fadeUp}
              className="mt-2 text-xl sm:text-2xl font-mono text-signal uppercase tracking-wider font-semibold"
            >
              {profile.role}
            </motion.p>
          )}

          {/* Credibility line */}
          {hero.credibility && (
            <motion.p
              variants={fadeUp}
              className="tag mt-2 text-[0.7rem] sm:text-xs text-ink-soft tracking-widest uppercase font-mono"
            >
              {hero.credibility}
            </motion.p>
          )}

          {/* Supporting positioning line */}
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {hero.sub}
          </motion.p>

          {/* Primary actions */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="rounded bg-signal px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              View Projects
            </a>
            <a
              href={profile.resumeSoftware}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-line bg-paper/20 px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="tag text-xs text-ink-soft underline underline-offset-4 hover:text-signal transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-6 border-t border-line/40 pt-6"
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-ink-soft hover:text-signal hover:scale-110 transition-all duration-200"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-ink-soft hover:text-signal hover:scale-110 transition-all duration-200"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Address"
              className="text-ink-soft hover:text-signal hover:scale-110 transition-all duration-200"
            >
              <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

          {/* Technical highlights */}
          <motion.div
            variants={fadeUp}
            className="mt-10 border-t border-line/40 pt-6"
          >
            <div className="flex flex-wrap gap-2 text-sm text-ink font-medium">
              {["Python", "TypeScript", "React", "Next.js", "FastAPI", "PostgreSQL", "Redis", "AI/ML"].map((tech) => (
                <span
                  key={tech}
                  className="tag rounded border border-line bg-surface/50 px-3 py-1 text-[0.65rem] text-ink-soft hover:border-signal/40 hover:text-signal transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Open Source & Leadership signal */}
          <motion.div
            variants={fadeUp}
            className="mt-10 rounded border border-line/30 bg-surface/30 p-5"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal" aria-hidden />
              <h4 className="font-display font-bold text-sm text-ink">{hero.leadership.title}</h4>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              {hero.leadership.sub}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visually Polished Profile Area */}
        <motion.div
          variants={imageFade}
          className="flex flex-col items-center justify-center lg:items-end"
        >
          <div className="relative w-full max-w-[320px] border border-line bg-surface p-5 rounded-lg transition-all duration-300 hover:border-signal/30 hover:shadow-[0_16px_32px_rgba(229,9,20,0.04)]">
            {/* Visual avatar preview */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-paper border border-line">
              <img
                src="/varsha_profile_photo.png"
                alt="Varsha Kotegar avatar profile headshot"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
              />
            </div>

            {/* Profile descriptions */}
            <div className="mt-5">
              <h3 className="font-display text-lg font-bold text-ink">{profile.name}</h3>
              {profile.role && (
                <p className="text-xs text-signal font-mono uppercase tracking-wider mt-0.5">{profile.role}</p>
              )}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-soft">
                <svg className="h-4 w-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Active availability tag */}
            <div className="mt-5 border-t border-line pt-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[0.6rem] tracking-wider text-ink-soft uppercase leading-none">
                {profile.availability}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
