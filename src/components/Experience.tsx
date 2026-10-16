import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="03 — experience"
        title="Where I've shipped"
        subtitle="From freelance API work to leading architecture for a multi-tenant ERP platform end to end."
      />

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-12"
            >
              <span
                className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border ${
                  exp.current
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-dim)]'
                }`}
              >
                <Briefcase size={14} />
              </span>

              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    {exp.title} <span className="text-[var(--color-text-dim)] font-normal">@ {exp.company}</span>
                  </h3>
                  {exp.current && (
                    <span className="font-mono text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                      current
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-[var(--color-text-faint)] mb-4">
                  {exp.period} · {exp.location}
                </p>
                <p className="text-sm text-[var(--color-text-dim)] mb-4">{exp.summary}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-[var(--color-text)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-dim)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
