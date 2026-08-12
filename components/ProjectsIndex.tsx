"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";

export default function ProjectsIndex() {
  return (
    <section id="work" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-rail">
        <div id="projects-index" className="mb-12">
          <p className="tag mb-4 flex items-center gap-2 text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            SELECTED WORK
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden border border-line bg-surface transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.035] hover:border-signal/30 hover:shadow-[0_12px_24px_rgba(229,9,20,0.06)] motion-reduce:transform-none"
            >
              {/* 1. Project image / preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
                <img
                  src={cs.image || "/images/projects/voxelq_preview.png"}
                  alt={`User interface preview of the ${cs.name} project`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                  loading="lazy"
                />
              </div>

              {/* Card Content wrapper */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* 2. Project name */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink group-hover:text-signal transition-colors duration-300">
                    {cs.name}
                  </h3>

                  {/* 3. Short description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft min-h-[2.5rem]">
                    {cs.tag}
                  </p>

                  {/* 4. Tech stack (3-5 important tech) */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cs.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="tag rounded border border-line bg-paper/50 px-2 py-0.5 text-[0.65rem] text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {/* 5. Live Demo button */}
                  <a
                    href={cs.demoUrl || "#"}
                    target={cs.demoUrl?.startsWith("http") ? "_blank" : undefined}
                    rel={cs.demoUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center rounded bg-signal px-4 py-2 text-center text-xs font-semibold text-white transition-all duration-250 hover:bg-signal/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    Live Demo
                  </a>

                  {/* 6. GitHub button */}
                  <a
                    href={cs.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded border border-line bg-paper/30 px-4 py-2 text-center text-xs font-semibold text-ink transition-all duration-250 hover:bg-paper/80 hover:border-signal/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
