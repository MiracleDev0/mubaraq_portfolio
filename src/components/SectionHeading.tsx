import { motion } from 'framer-motion';

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="font-mono text-sm text-[var(--color-accent)] mb-2">{index}</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)]">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-[var(--color-text-dim)]">{subtitle}</p>}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--color-border)] via-[var(--color-border)] to-transparent" />
    </motion.div>
  );
}
