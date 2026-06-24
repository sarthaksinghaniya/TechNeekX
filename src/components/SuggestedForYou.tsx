'use client';

import { motion } from 'framer-motion';
import { useUserProfile } from '@/hooks/useUserProfile';

const suggestionsMap: Record<string, { title: string; body: string }[]> = {
  student: [
    { title: 'Starter Hackathon Playbook', body: 'Weekend-friendly checklist to place top 5 in campus hackathons.' },
    { title: 'Find a Squad', body: 'Match with builders for your first prototype sprint.' },
  ],
  developer: [
    { title: 'AI Feature Kit', body: 'Pre-built prompts + boilerplates to ship an AI feature in days.' },
    { title: 'Upcoming Hackathons', body: 'Shortlist of fast-paced events with cash + hiring partners.' },
  ],
  designer: [
    { title: 'Design Ops Pack', body: 'Figma kits + UX copy blocks to polish your next demo.' },
    { title: 'Product Storytelling', body: 'Narrative arcs that win juries and investors.' },
  ],
  other: [
    { title: 'Orientation', body: 'How TechNeekX runs: events, squads, and demo days.' },
    { title: 'Pick a track', body: 'AI, Web, or Design tracks tailored to your pace.' },
  ],
};

const SuggestedForYou = () => {
  const { profile } = useUserProfile();
  const list = suggestionsMap[profile.persona] ?? suggestionsMap.student;

  if (list.length === 0) {
    return (
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <p className="text-sm text-[var(--text-secondary)] mb-2">No recommendations yet.</p>
          <p className="text-base font-semibold text-[var(--text-primary)]">Personalize to unlock tailored picks.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Suggested for you</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Your fastest next wins</h3>
          </div>
          <span className="text-sm text-[var(--text-secondary)] hidden sm:block">Personalized after onboarding</span>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {list.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/40"
            >
              <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedForYou;
