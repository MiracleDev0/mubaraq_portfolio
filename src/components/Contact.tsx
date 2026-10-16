import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { contact } from '../data/portfolio';

const links = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail, external: false },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}`, icon: Phone, external: false },
  { label: 'GitHub', value: 'View profile', href: contact.github, icon: FaGithub, external: true },
  { label: 'LinkedIn', value: 'Connect with me', href: contact.linkedin, icon: FaLinkedin, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="05 — contact"
        title="Let's build something reliable"
        subtitle="Open to .NET / backend engineering roles and contract work. Reach out directly through any of the channels below."
      />

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <link.icon size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[var(--color-text-faint)]">{link.label}</p>
              <p className="text-sm text-[var(--color-text)] font-medium break-all">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
