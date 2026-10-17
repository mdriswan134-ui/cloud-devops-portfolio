export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: 'cloud' | 'serverless' | 'devops';
  featured: boolean;
  summary: string;
  problem: string;
  solution: string;
  architectureDetails: string[];
  tools: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  architectureNodes: {
    id: string;
    label: string;
    tier: string;
    icon: string;
    description: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    icon: string;
    highlight?: boolean;
    tags: string[];
  }[];
}

export interface AwsService {
  name: string;
  category: string;
  icon: string;
  description: string;
  keyFeatures: string[];
  usedIn: string;
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
  credentialId?: string;
  description: string;
  skills: string[];
  verified: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  score: string;
  highlights: string[];
}
