'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { openTeamForm } from '@/config/teamForms';
import { useRouter } from 'next/navigation';

type Command = {
  label: string;
  hint?: string;
  action: () => void;
};

const sections = [
  { id: 'hero', label: 'Go to Hero' },
  { id: 'projects-showcase', label: 'View Projects' },
  { id: 'gallery', label: 'Open Gallery' },
  { id: 'community', label: 'Community' },
  { id: 'contact', label: 'Contact / CTA' },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const baseCommands: Command[] = useMemo(
    () => [
      { label: 'Join the community', hint: 'Open member form', action: () => router.push('/join') },
      { label: 'Lead a build sprint', hint: 'Apply core team', action: () => openTeamForm('coreTeam') },
      ...sections.map((s) => ({
        label: s.label,
        action: () => {
          const el = document.getElementById(s.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        },
      })),
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!query) return baseCommands;
    return baseCommands.filter((cmd) => cmd.label.toLowerCase().includes(query.toLowerCase()));
  }, [baseCommands, query]);

  // Hotkey listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (open && e.key === 'Escape') setOpen(false);
      if (open && (e.key === 'ArrowDown' || e.key === 'Tab')) {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % filtered.length);
      }
      if (open && e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
      }
      if (open && e.key === 'Enter' && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].action();
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler, { passive: false });
    return () => window.removeEventListener('keydown', handler);
  }, [open, filtered, activeIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.97, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 10, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full max-w-2xl glass rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-white/40"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/40">
              <Search className="w-5 h-5 text-[var(--text-secondary)]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Search sections or actions…"
                className="flex-1 bg-transparent outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] text-sm"
              />
              <div className="flex items-center gap-1 text-[11px] text-[var(--text-secondary)]">
                <span className="px-2 py-1 rounded-md border border-[#e2e8f0]">⌘/Ctrl</span>
                <span className="px-2 py-1 rounded-md border border-[#e2e8f0]">K</span>
              </div>
            </div>

            <div className="max-h-[360px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-6 text-[var(--text-secondary)] text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Nothing found. Try “projects” or “join”.
                </div>
              ) : (
                filtered.map((cmd, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={cmd.label}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => {
                        cmd.action();
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center justify-between gap-3 transition ${
                        active ? 'bg-[var(--accent-primary)]/10' : ''
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{cmd.label}</p>
                        {cmd.hint && <p className="text-xs text-[var(--text-secondary)] mt-0.5">{cmd.hint}</p>}
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--text-secondary)]" />
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-3 flex items-center justify-between text-[11px] text-[var(--text-secondary)] border-t border-white/40">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Quick actions ready
              </span>
              <span>Enter to run • Esc to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
