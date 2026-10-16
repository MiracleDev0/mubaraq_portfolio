import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[var(--color-text-faint)]">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.</p>
        <p>Designed &amp; coded end-to-end.</p>
      </div>
    </footer>
  );
}
