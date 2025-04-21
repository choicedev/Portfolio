import { ReactNode } from 'react';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[]; 
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  icon: ReactNode;
  skills: string[];
}

export interface GitHubStats {
  public_repos: number;
  followers: number;
}

export interface LanguageStats {
  [key: string]: number;
}
