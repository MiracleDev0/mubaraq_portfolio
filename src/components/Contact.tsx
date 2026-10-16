import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SectionHeading from './SectionHeading';
import { contact } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail client — thanks for reaching out!");
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="05 — contact"
        title="Let's build something reliable"
        subtitle="Open to .NET / backend engineering roles and contract work. Reach out directly or send a message below."
      />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs text-[var(--color-text-faint)]">Email</p>
              <p className="text-sm text-[var(--color-text)] font-medium break-all">{contact.email}</p>
            </div>
          </a>

          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs text-[var(--color-text-faint)]">Phone</p>
              <p className="text-sm text-[var(--color-text)] font-medium">{contact.phone}</p>
            </div>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <FaGithub size={18} />
            </span>
            <div>
              <p className="text-xs text-[var(--color-text-faint)]">GitHub</p>
              <p className="text-sm text-[var(--color-text)] font-medium">View profile</p>
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <FaLinkedin size={18} />
            </span>
            <div>
              <p className="text-xs text-[var(--color-text-faint)]">LinkedIn</p>
              <p className="text-sm text-[var(--color-text)] font-medium">Connect with me</p>
            </div>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-xs text-[var(--color-text-faint)]">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-[var(--color-text-faint)]">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-xs text-[var(--color-text-faint)]">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] resize-none"
              placeholder="Tell me about the role or project..."
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-accent)] text-[#06130d] font-semibold text-sm hover:brightness-110 transition"
          >
            Send message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
