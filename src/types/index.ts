export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  includes: string[];
  cta: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string | number;
  imagePath?: string;
  verificationUrl?: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  focus: string[];
  logoPath?: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  label: string;
  description: string;
  objective: string;
  attackSurface: string;
  methodology: string;
  findings: string;
  validation: string;
  impact: string;
  remediation: string;
  lessonsLearned: string;
  technologies: string[];
  evidence?: (string | undefined)[];
  githubUrl?: string;
  writeupUrl?: string;
  screenshots?: (string | undefined)[];
}

export interface TimelineStep {
  number: string | number;
  title: string;
  description: string;
}

export interface Milestone {
  year: string | number;
  title: string;
  organization: string;
  category: string;
  description: string;
}

export interface Recognition {
  title: string;
  organization: string;
  year: string | number;
  description: string;
  imagePath?: string;
  certificatePath?: string;
}

export interface SpeakingEvent {
  title: string;
  role: string;
  event: string;
  topic: string;
  year: string | number;
  photos: string[];
  certificatePath?: string;
  posterPath?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Tool {
  name: string;
  category: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Package {
  title: string;
  forWho: string;
  includes: string[];
  cta: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  alternateTagline?: string;
  email: string;
  github: string;
  linkedin: string;
  upwork: string;
  resumeUrl: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  website?: string;
  needs: string;
  timeline?: string;
  budget?: string;
  authorized: boolean;
}

export interface ProofItem {
  title: string;
  category: string;
  objective: string;
  approach: string;
  finding: string;
  learning: string;
  evidence: string;
}

