// TechNeekX Team Forms Configuration
// Central source of truth for all team-related form links

export const TEAM_FORMS = {
  // Core Team (Leadership Roles)
  coreTeam: "https://docs.google.com/forms/d/e/1FAIpQLSdc52oyOanPxwuwAD6X90CXWfYZgaetzqvrhRgsUZgeIhd-1g/viewform?usp=sharing&ouid=104837717389254135158",
  
  // General Team Members
  member: "https://forms.gle/B58bPKQufVLQ71zJ6",
  
  // Community Partners / Sponsors
  partner: "https://docs.google.com/forms/d/e/1FAIpQLSfFvcsPMtG-lAi7b31q-TMg-M3hZo0m_IYQecbRDbjFjzm3BA/viewform"
} as const;

// Form configurations with metadata
export const FORM_CONFIG = {
  coreTeam: {
    url: TEAM_FORMS.coreTeam,
    title: "Apply for Core Team",
    description: "Leadership roles at TechNeekX",
    trustIndicator: "Leadership positions available",
    timeEstimate: "Takes 5 minutes to apply"
  },
  member: {
    url: TEAM_FORMS.member,
    title: "Join as Member",
    description: "Become a builder at TechNeekX",
    trustIndicator: "Join 50+ builders already in TechNeekX",
    timeEstimate: "Takes 2 minutes to apply"
  },
  partner: {
    url: TEAM_FORMS.partner,
    title: "Become a Partner",
    description: "Partner with TechNeekX",
    trustIndicator: "Join our ecosystem of partners",
    timeEstimate: "Takes 3 minutes to apply"
  }
} as const;

// Helper function to open forms
export const openTeamForm = (formType: keyof typeof TEAM_FORMS) => {
  const config = FORM_CONFIG[formType];
  if (config) {
    window.open(config.url, '_blank', 'noopener,noreferrer');
  }
};

// Types for better TypeScript support
export type TeamFormType = keyof typeof TEAM_FORMS;
export type FormConfigType = typeof FORM_CONFIG[TeamFormType];
