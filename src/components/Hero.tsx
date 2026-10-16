import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile, contact } from '../data/portfolio';

const codeLines = [
  { n: 1, text: 'public class BackendDeveloper : IEngineer', c: 'text-[var(--color-accent-2)]' },
  { n: 2, text: '{', c: 'text-[var(--color-text-dim)]' },
  { n: 3, text: '    public string Name => "Gbadamosi Mubaraq";', c: 'text-[var(--color-text)]' },
  { n: 4, text: '    public string Role => "Head of Software, .NET";', c: 'text-[var(--color-text)]' },
  { n: 5, text: '    public string[] Stack => {', c: 'text-[var(--color-text)]' },
  { n: 6, text: '        "C#", "ASP.NET Core", "SQL Server",', c: 'text-[var(--color-accent-3)]' },
  { n: 7, text: '        "CQRS", "Clean Architecture", "Azure"', c: 'text-[var(--color-accent-3)]' },
  { n: 8, text: '    };', c: 'text-[var(--color-text)]' },
  { n: 9, text: '', c: '' },
  { n: 10, text: '    public bool ShipsProductionCode => true;', c: 'text-[var(--color-accent)]' },
  { n: 11, text: '}', c: 'text-[var(--color-text-dim)]' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 bg-grid overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[var(--color-accent-2)]/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <p className="font-mono text-sm text-[var(--color-accent)] mb-4 flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="min-w-0">Available for backend / .NET engineering roles</span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[var(--color-text)]">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gradient font-mono">
            {profile.role}
          </h2>

          <p className="mt-6 max-w-xl text-[var(--color-text-dim)] text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-md bg-[var(--color-accent)] text-[#06130d] font-semibold text-sm hover:brightness-110 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-md border border-[var(--color-border)] text-[var(--color-text)] font-semibold text-sm hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)] transition"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-[var(--color-text-dim)]">
            <a href={`mailto:${contact.email}`} aria-label="Email" className="hover:text-[var(--color-accent)] transition">
              <Mail size={20} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent)] transition">
              <FaGithub size={20} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent)] transition">
              <FaLinkedin size={20} />
            </a>
            <span className="font-mono text-xs text-[var(--color-text-faint)]">{profile.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative min-w-0"
        >
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur glow-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-[var(--color-text-faint)]">BackendDeveloper.cs</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              {codeLines.map((line) => (
                <div key={line.n} className="flex">
                  <span className="w-6 shrink-0 text-right pr-3 text-[var(--color-text-faint)] select-none">
                    {line.n}
                  </span>
                  <span className={line.c}>{line.text || ' '}</span>
                </div>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-faint)] hover:text-[var(--color-accent)] transition animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
