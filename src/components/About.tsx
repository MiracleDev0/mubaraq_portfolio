import { motion } from 'framer-motion';
import { Boxes, Database, Layers, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/portfolio';

const stats = [
  { label: 'ERP modules architected', value: '24' },
  { label: 'Database tables designed', value: '395+' },
  { label: 'Years building .NET systems', value: '3+' },
  { label: 'Legacy → web migrations led', value: '1 flagship' },
];

const pillars = [
  {
    icon: Layers,
    title: 'Layered architecture',
    body: 'Clean Architecture, CQRS, and the Mediator pattern keep request handling, domain logic, and data access cleanly separated and testable.',
  },
  {
    icon: Database,
    title: 'Data layer discipline',
    body: 'Stored-procedure-only access layers (Enterprise Library 6.0 + SQL Server) and EF Core integrations built to stay fast under complex, high-volume workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Auth & multi-tenancy',
    body: 'Subdomain-driven multi-tenancy with JWT authentication and two-level role-based permissions enforced consistently across every API endpoint.',
  },
  {
    icon: Boxes,
    title: 'Modernisation at scale',
    body: 'Led the migration of a legacy WinForms desktop system to ASP.NET Core REST APIs with a React/TypeScript frontend — with zero business-logic regression.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading index="01 — about" title="Backend engineering, built for scale" subtitle={profile.summary} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <div className="font-mono text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-2 text-sm text-[var(--color-text-dim)]">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <p.icon className="text-[var(--color-accent)]" size={22} />
            <h3 className="mt-4 font-semibold text-[var(--color-text)]">{p.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-dim)] leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
