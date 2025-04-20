import { Code, Database, Briefcase, Terminal, Smartphone, Server } from 'lucide-react';
import { Experience, Project, SkillGroup } from './types';

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Mobile Jr.",
    company: "Namoa Digital",
    period: "Jul/2022 – Atual",
    description: "Desenvolvimento de aplicativos móveis utilizando Kotlin e Java."
  },
  {
    title: "Desenvolvedor Mobile",
    company: "MaxProcess",
    period: "Jun/2021 – Jun/2022",
    description: "Criação e manutenção de aplicativos Android."
  },
  {
    title: "Auxiliar de T.I.",
    company: "Sanit Engenharia",
    period: "Jan/2020 – Mai/2021",
    description: "Suporte técnico e assistência em T.I."
  }
];

export const projects: Project[] = [
  {
    title: "MonkeyFoodFork",
    description: "Consumindo API Food2Fork. Aplicativo para busca e visualização de receitas utilizando a API Food2Fork.",
    techStack: ["Kotlin", "MVVM", "Hilt", "Room", "Retrofit"],
    link: "https://github.com/choicedev/MonkeyFoodFork"
  },
  {
    title: "OSViewTracker",
    description: "Mapa do OpenStreetView. Aplicativo para visualização e navegação em mapas utilizando a API do OpenStreetView.",
    techStack: ["Kotlin", "MVVM", "Hilt", "Location Services"],
    link: "https://github.com/choicedev/OSViewMap"
  },
  {
    title: "Notes-Application",
    description: "App de anotações com MVVM, Hilt e Room. Um aplicativo completo para gerenciamento de notas com arquitetura moderna.",
    techStack: ["Kotlin", "MVVM", "Hilt", "Room"],
    link: "https://github.com/choicedev/Notes-Application"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Linguagens",
    icon: () => <Code size={24} className="text-blue-400" />,
    skills: ["Java", "Kotlin", "SQL"]
  },
  {
    category: "Frameworks & Bibliotecas",
    icon: () => <Briefcase size={24} className="text-violet-400" />,
    skills: ["Android SDK", "MVVM", "Room", "Hilt", "Retrofit"]
  },
  {
    category: "Bancos de Dados",
    icon: () => <Database size={24} className="text-green-400" />,
    skills: ["SQLite", "Firebase", "Room"]
  },
  {
    category: "Ferramentas",
    icon: () => <Terminal size={24} className="text-yellow-400" />,
    skills: ["Git", "Android Studio", "Firebase", "GitHub"]
  },
  {
    category: "Plataformas",
    icon: () => <Smartphone size={24} className="text-red-400" />,
    skills: ["Android", "Windows"]
  },
];