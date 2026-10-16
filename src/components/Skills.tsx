import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="02 — skills"
        title="Tools of the trade"
        subtitle="The languages, frameworks, and patterns I reach for to design systems that stay fast, secure, and maintainable as they grow."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <h3 className="font-mono text-sm text-[var(--color-accent-2)] mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm text-[var(--color-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
