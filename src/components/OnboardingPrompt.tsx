'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserProfile } from '@/hooks/useUserProfile';

const personas = [
  { key: 'student', label: 'Student' },
  { key: 'developer', label: 'Developer' },
  { key: 'designer', label: 'Designer' },
  { key: 'other', label: 'Other' },
] as const;

const interestOptions = ['AI', 'Web Dev', 'Hackathons', 'Design', 'Open Source', 'Startups'];

const OnboardingPrompt = () => {
  const { profile, updateProfile } = useUserProfile();
  const [open, setOpen] = useState(false);
  const [persona, setPersona] = useState(profile.persona);
  const [interests, setInterests] = useState<string[]>(profile.interests);

  useEffect(() => {
    if (!profile.onboarded) {
      setOpen(true);
    }
  }, [profile.onboarded]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const complete = () => {
    updateProfile({ persona, interests, onboarded: true });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="w-full max-w-lg glass rounded-2xl p-6 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Personalize TechNeekX</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Tell us who you are so we can surface the best hackathons, squads, and resources.
            </p>

            <div className="space-y-3 mb-5">
              <p className="text-xs uppercase font-semibold text-[var(--text-secondary)]">I am a</p>
              <div className="grid grid-cols-2 gap-2">
                {personas.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setPersona(p.key)}
                    className={`w-full rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                      persona === p.key
                        ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--text-primary)]'
                        : 'border-[#e2e8f0] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-xs uppercase font-semibold text-[var(--text-secondary)]">I’m interested in</p>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((interest) => {
                  const active = interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-full px-3 py-1 text-sm border transition ${
                        active
                          ? 'border-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 text-[var(--text-primary)]'
                          : 'border-[#e2e8f0] text-[var(--text-secondary)] hover:border-[var(--accent-secondary)]/50'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="btn-secondary px-4 py-2 text-sm"
              >
                Later
              </button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={complete}
                className="btn-primary px-5 py-2 text-sm font-semibold"
              >
                Personalize
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingPrompt;
