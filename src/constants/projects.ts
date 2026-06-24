import { Brain, Heart, DollarSign, Calendar, Music, Recycle, BookOpen, Bot, Globe, Scale, Cpu, TrendingUp } from 'lucide-react';

export const PROJECT_CATEGORIES = {
  all: { id: 'all', name: 'All Projects', icon: Globe },
  advanced_ai: { id: 'advanced', name: 'Advanced AI System', icon: Brain },
  healthcare_ai: { id: 'healthcare', name: 'Healthcare AI', icon: Heart },
  fintech_ai: { id: 'fintech', name: 'FinTech AI', icon: DollarSign },
  music_platform: { id: 'music', name: 'Music Platform', icon: Music },
  sustainability: { id: 'sustainability', name: 'Sustainability', icon: Recycle },
  productivity: { id: 'productivity', name: 'Productivity', icon: Calendar },
  edtech: { id: 'edtech', name: 'EdTech', icon: BookOpen },
  ai_assistant: { id: 'assistant', name: 'AI Assistant', icon: Bot },
} as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES]['id'];

export type Project = {
  id: string;
  title: string;
  status: string;
  category: string;
  tagline?: string;
  categories: ReadonlyArray<string>;
  icon: any;
  color: string;
  description: string;
  features: string[];
  techStack: string[];
  link: string | null;
  linkLabel?: string;
  github: string;
  impact: string;
  aiPowered?: boolean;
};

export const PROJECTS: ReadonlyArray<Project> = [
  {
    id: 'revibe-hub',
    title: 'REVIBE HUB',
    status: 'Live',
    category: 'Advanced AI System',
    tagline: 'Real-World AI Innovation',
    categories: ['advanced', 'ai', 'platform'],
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500',
    description:
      'Revibe Hub is an AI-powered platform focused on real-world innovation, helping users transform ideas into practical, impactful solutions. It provides guided workflows, smart suggestions, and resources to build projects efficiently.',
    features: [
      'AI-guided project building',
      'Step-by-step execution system',
      'Resource and learning integration',
      'Real-world problem solving focus'
    ],
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'AI Workflows'],
    link: 'https://revibe-hub.netlify.app',
    linkLabel: 'Visit Project',
    github: 'https://github.com/teamtechneekx',
    impact: 'AI Innovation',
    aiPowered: true
  },
  {
    id: 'flowx',
    title: 'FLOWX',
    status: 'In Progress',
    category: 'Advanced AI System',
    categories: ['advanced', 'ai', 'platform'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'Building a next-gen intelligent system focused on scalable AI workflows and automation',
    features: [
      'Modular architecture for extensibility',
      'Real-time processing capabilities',
      'Production-grade deployment'
    ],
    techStack: ['Python', 'FastAPI', 'Node.js', 'AI/ML', 'System Design'],
    link: null,
    github: 'https://github.com/teamtechneekx',
    impact: 'Platform Engineering'
  },
  {
    id: 'fracture-vision',
    title: 'FRACTURE VISION AI',
    status: 'Live',
    category: 'Healthcare AI',
    categories: ['healthcare', 'ai'],
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    description: 'AI-powered fracture detection system using medical imaging',
    features: [
      'Assists doctors in identifying bone fractures',
      'High accuracy detection',
      'Reduces diagnosis time and improves clinical decision-making'
    ],
    techStack: ['Python', 'OpenCV', 'Deep Learning', 'Streamlit'],
    link: 'https://fracturevision-ai.streamlit.app/',
    github: 'https://github.com/teamtechneekx',
    impact: 'Healthcare Innovation'
  },
  {
    id: 'hospital-pulse',
    title: 'HOSPITAL PULSE AI',
    status: 'Live',
    category: 'Healthcare AI',
    categories: ['healthcare', 'ai'],
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    description: 'Predicts emergency department surges, ICU demand, and patient load',
    features: [
      'Enables proactive hospital resource allocation',
      'Focused on interpretable AI for real-world adoption',
      'Predictive analytics for healthcare'
    ],
    techStack: ['Python', 'ML Models', 'React', 'Data Analytics'],
    link: 'https://hopx.netlify.app',
    github: 'https://github.com/teamtechneekx',
    impact: 'Healthcare Analytics'
  },
  {
    id: 'investment-copilot',
    title: 'INVESTMENT AI COPILOT',
    status: 'In Development',
    category: 'FinTech AI',
    categories: ['fintech', 'ai'],
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    description: 'AI-driven financial assistant for investment analysis and decision support',
    features: [
      'Provides insights and recommendations',
      'Risk evaluation capabilities',
      'Designed as a co-pilot for smarter investing'
    ],
    techStack: ['Python', 'AI/ML', 'APIs', 'Data Visualization'],
    link: null,
    github: 'https://github.com/teamtechneekx',
    impact: 'Financial Technology'
  },
  {
    id: 'reviber',
    title: 'REVIBER',
    status: 'Live',
    category: 'Music Platform',
    categories: ['music', 'platform'],
    icon: Music,
    color: 'from-purple-500 to-indigo-500',
    description: 'Interactive platform for music-based engagement and user experience',
    features: [
      'Modern UI/UX with immersive interaction',
      'Music engagement platform',
      'User experience focused design'
    ],
    techStack: ['React', 'JavaScript', 'UI/UX Design'],
    link: 'https://reviber.netlify.app',
    github: 'https://github.com/teamtechneekx',
    impact: 'Digital Experience'
  },
  {
    id: 'revive-lab',
    title: 'REVIVE LAB',
    status: 'Live',
    category: 'Sustainability',
    categories: ['sustainability', 'ai'],
    icon: Recycle,
    color: 'from-green-500 to-teal-500',
    description: 'AI-powered platform for e-waste innovation and repurposing ideas',
    features: [
      'Provides guided learning and practical solutions',
      'Encourages sustainable tech practices',
      'E-waste innovation platform'
    ],
    techStack: ['Python', 'AI', 'Web Development'],
    link: 'https://revibe-lab.netlify.app',
    github: 'https://github.com/teamtechneekx',
    impact: 'Sustainability'
  },
  {
    id: 'hanu-planner',
    title: 'HANU PLANNER',
    status: 'Live',
    category: 'Productivity',
    categories: ['productivity', 'ai'],
    icon: Calendar,
    color: 'from-orange-500 to-red-500',
    description: 'AI-based timetable generator for students and institutions',
    features: [
      'Generates optimized schedules dynamically',
      'Designed to solve real academic planning problems',
      'Student-focused productivity tool'
    ],
    techStack: ['JavaScript', 'AI Logic', 'Web App'],
    link: 'https://hanuplanner.netlify.app',
    github: 'https://github.com/teamtechneekx',
    impact: 'Education Technology'
  },
  {
    id: 'hanu-youth',
    title: 'HANU YOUTH',
    status: 'Live',
    category: 'EdTech',
    categories: ['edtech', 'community'],
    icon: BookOpen,
    color: 'from-blue-500 to-purple-500',
    description: 'Gamified learning platform for hackathons, AI/ML, and coding',
    features: [
      'Provides updates, engagement, and skill-building ecosystem',
      'Gamified learning experience',
      'Hackathon and coding focus'
    ],
    techStack: ['React', 'Node.js', 'Gamification Logic'],
    link: 'https://hanuyouthapp.netlify.app/',
    github: 'https://github.com/teamtechneekx',
    impact: 'Community Education'
  },
  {
    id: 'hanu-bai',
    title: 'HANU BAI',
    status: 'In Progress',
    category: 'AI Assistant',
    categories: ['assistant', 'ai'],
    icon: Bot,
    color: 'from-cyan-500 to-blue-500',
    description: 'Personal AI assistant focused on automation and interaction',
    features: [
      'Designed to integrate multiple workflows',
      'Single intelligent system',
      'Automation and interaction focus'
    ],
    techStack: ['NLP', 'Python', 'AI Systems'],
    link: null,
    github: 'https://github.com/teamtechneekx',
    impact: 'AI Innovation'
  },
  {
    id: 'lxnode-ai-legal-assistant',
    title: 'LXNode – AI Legal Assistant',
    status: 'Live',
    category: 'AI Assistant',
    categories: ['assistant', 'ai', 'platform'],
    icon: Scale,
    color: 'from-violet-500 to-fuchsia-500',
    description:
      'AI-powered legal assistant that simplifies legal processes with intelligent document analysis, legal query resolution, and automated insights.',
    features: [
      'AI-based legal document analysis & summarization',
      'Natural language legal query answering',
      'Smart contract/document insights',
      'Context-aware legal suggestions',
      'User-friendly interface for non-legal users'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'AI APIs (NLP/LLM)', 'Tailwind CSS', 'Netlify'],
    link: 'https://lxnode.netlify.app/',
    github: 'https://github.com/sarthaksinghaniya/lxnode-AI',
    impact: 'LegalTech Automation',
    aiPowered: true
  }
] as const;
