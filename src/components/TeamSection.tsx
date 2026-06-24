'use client';

import TeamCard from '@/components/TeamCard';
import { motion } from 'framer-motion';

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  tagline?: string;
  links?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
};

const TEAM: TeamMember[] = [
  {
    name: 'Sarthak Singhaniya',
    role: 'Founder · System Architect · AI/ML',
    tagline: 'Owns system design and technical direction.',
    imageSrc: '/sarthak.jpeg',
    links: {
      github: 'https://github.com/sarthaksinghaniya',
      linkedin: 'https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/',
      email: 'sarthaksinghaniya789@gmail.com',
    },
  },
  {
    name: 'Nikhil Yadav',
    role: 'Design Lead · UI/UX',
    tagline: 'Designs clean, high-impact product experiences.',
    imageSrc: '/nikhil.jpeg',
    links: {
      github: 'https://github.com/nikhil09790',
      linkedin:
        'https://www.linkedin.com/in/nikhil-yadav-4b63212ba?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      email: 'seemayadav97950@gmail.com',
    },
  },
  {
    name: 'Hardik Talwar',
    role: 'Business · Frontend',
    tagline: 'Bridges product goals with execution and delivery.',
    imageSrc: '/hardik.jpeg',
    links: {
      github: 'https://github.com/hardiktalwar2006',
      linkedin: 'https://www.linkedin.com/in/hardiktalwar2006/',
      email: 'hardiktalwar2006@gmail.com',
    },
  },
  {
    name: 'Anshuman Soni',
    role: 'Marketing · Media',
    tagline: 'Leads growth, media, and community reach.',
    imageSrc: '/image.png',
    links: {
      github: 'https://github.com/Anshuman70k',
      linkedin: 'https://www.linkedin.com/in/anshuman-soni-60277b268/',
      email: 'anshuman70k@gmail.com',
    },
  },
];

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const groups: Array<{
    title: string;
    subtitle: string;
    members: TeamMember[];
  }> = [
    {
      title: 'Core Team',
      subtitle: 'Leadership and operations.',
      members: TEAM.filter((m) => m.name === 'Sarthak Singhaniya' || m.name === 'Hardik Talwar'),
    },
    {
      title: 'Design Team',
      subtitle: 'Product design and UI/UX.',
      members: TEAM.filter((m) => m.name === 'Nikhil Yadav'),
    },
    {
      title: 'Growth Team',
      subtitle: 'Marketing, media, and outreach.',
      members: TEAM.filter((m) => m.name === 'Anshuman Soni'),
    },
  ];

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-90 bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.08),transparent_65%)]" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full blur-3xl opacity-90 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Team
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Small, focused, and product‑driven.
          </p>
        </div>

        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <div key={group.title} className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-slate-600">
                  {group.subtitle}
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {group.members.map((member, index) => {
                  const isWide = index % 4 === 2;

                  return (
                    <motion.div
                      key={member.name}
                      variants={cardVariants}
                      className={[
                        'w-full mx-auto',
                        isWide ? 'max-w-2xl sm:col-span-2' : 'max-w-sm',
                      ].join(' ')}
                    >
                      <TeamCard
                        name={member.name}
                        role={member.role}
                        imageSrc={member.imageSrc}
                        tagline={member.tagline}
                        links={member.links}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
