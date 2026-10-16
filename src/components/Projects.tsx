import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

const layers = [
  { label: 'React / TypeScript frontend', sub: 'presentation layer' },
  { label: 'ASP.NET Core (.NET 10) REST API', sub: 'JWT auth · 2-level RBAC · subdomain tenancy' },
  { label: 'Stored-procedure data access layer', sub: 'Enterprise Library 6.0' },
  { label: 'SQL Server', sub: '395+ tables across 24 modules' },
];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="04 — projects"
        title="Selected work"
        subtitle="A flagship ERP platform I architected and led, plus the backend patterns I apply across every engagement."
      />

      {/* Featured project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-surface)] glow-border overflow-hidden mb-10"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8">
            <span className="font-mono text-xs text-[var(--color-accent)]">{featured.tag}</span>
            <h3 className="mt-2 text-2xl font-extrabold text-[var(--color-text)]">{featured.title}</h3>
            <p className="mt-4 text-sm text-[var(--color-text-dim)] leading-relaxed">{featured.longDescription}</p>

            {featured.stats && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {featured.stats.map((s) => (
                  <div key={s.label} className="rounded-md border border-[var(--color-border)] p-3">
                    <div className="font-mono text-lg font-bold text-gradient">{s.value}</div>
                    <div className="text-xs text-[var(--color-text-faint)] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <ul className="mt-6 space-y-2">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-[var(--color-text)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-dim)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="bg-[var(--color-surface-2)] border-t lg:border-t-0 lg:border-l border-[var(--color-border)] p-8 flex flex-col justify-center gap-3">
            <p className="font-mono text-xs text-[var(--color-text-faint)] mb-1">system architecture</p>
            {layers.map((layer, i) => (
              <div key={layer.label} className="relative">
                <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3">
                  <p className="text-sm font-semibold text-[var(--color-text)]">{layer.label}</p>
                  <p className="font-mono text-xs text-[var(--color-text-faint)] mt-0.5">{layer.sub}</p>
                </div>
                {i < layers.length - 1 && (
                  <div className="h-3 w-px bg-[var(--color-border)] mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Other projects */}
      <div className="grid md:grid-cols-3 gap-5">
        {rest.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="font-mono text-xs text-[var(--color-accent-2)]">{p.tag}</span>
            <h3 className="mt-2 font-bold text-[var(--color-text)]">{p.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-dim)] flex-1">{p.description}</p>

            <ul className="mt-4 space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-xs text-[var(--color-text-dim)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-text-faint)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
