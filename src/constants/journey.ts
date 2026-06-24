import { Rocket, Code, Target, Trophy, Users, Globe, TrendingUp, Star } from 'lucide-react';

export type Milestone = {
  date: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  status: 'completed' | 'now';
  impact: string;
};

export const journey: ReadonlyArray<Milestone> = [
  {
    date: "August 2025",
    title: "Started",
    description: "Founded TechNeekX with a vision to build a strong AI + builder ecosystem for students",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    status: "completed",
    impact: "Foundation initiated"
  },
  {
    date: "September 2025",
    title: "Initial Build Phase",
    description: "Started working on core ideas, early projects, and system direction",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    status: "completed",
    impact: "Execution began"
  },
  {
    date: "October 2025",
    title: "First Projects Developed",
    description: "Built initial AI and web-based projects solving real-world problems",
    icon: Target,
    gradient: "from-green-500 to-emerald-500",
    status: "completed",
    impact: "Proof of work established"
  },
  {
    date: "November 2025",
    title: "Hackathons & Recognition",
    description: "Participated in hackathons and gained early validation",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    status: "completed",
    impact: "Validation started"
  },
  {
    date: "December 2025",
    title: "Team Formation",
    description: "Connected with developers, builders, and early contributors",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
    status: "completed",
    impact: "Core network formed"
  },
  {
    date: "January 2026",
    title: "Product Expansion",
    description: "Expanded into multiple domains like AI, healthcare, fintech, and productivity",
    icon: Globe,
    gradient: "from-teal-500 to-blue-500",
    status: "completed",
    impact: "Ecosystem expanding"
  },
  {
    date: "February 2026",
    title: "Community Growth",
    description: "Started shaping TechNeekX into a structured student platform",
    icon: TrendingUp,
    gradient: "from-pink-500 to-rose-500",
    status: "completed",
    impact: "Community activated"
  },
  {
    date: "March 2026",
    title: "Platform Development",
    description: "Built website, onboarding systems, and community infrastructure",
    icon: Code,
    gradient: "from-orange-500 to-red-500",
    status: "completed",
    impact: "System building phase"
  },
  {
    date: "April 2026",
    title: "Growth Phase",
    description: "Scaling operations, expanding reach, onboarding builders, and increasing impact",
    icon: Star,
    gradient: "from-cyan-500 to-blue-500",
    status: "now",
    impact: "Actively growing"
  }
] as const;
