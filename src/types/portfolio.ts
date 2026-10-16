export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  stats?: { label: string; value: string }[];
  technologies: string[];
  highlights: string[];
  featured?: boolean;
  links?: { label: string; note: string }[];
}

export interface Contact {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}
