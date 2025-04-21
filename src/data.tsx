import { Code, Database, Briefcase, Terminal, Smartphone } from 'lucide-react';
import { Experience, Project, SkillGroup } from './types';

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Android Jr.",
    company: "Namos Digital",
    period: "Jul/2022 – Atual",
    description: `
      Atuo no desenvolvimento e manutenção de aplicativos Android nativos com:
      ✔ Kotlin e Java seguindo boas práticas
      ✔ Arquiteturas MVVM e MVP (Clean Architecture)
      ✔ Jetpack Compose e XML para interfaces
      ✔ Integração com APIs REST (Retrofit/Postman)
      ✔ Room Database para dados locais
      ✔ Testes unitários e análise de logs (PL/SQL)
      ✔ Metodologias ágeis (JIRA)
    `,
    technologies: ["Kotlin", "Java", "Jetpack Compose", "MVVM", "Retrofit", "Room", "Postman", "JIRA"]
  },
  {
    title: "Estágio Desenvolvedor Android",
    company: "MaxProcess",
    period: "Jun/2021 – Jun/2022",
    description: `
      Desenvolvimento e manutenção de aplicativo Android com:
      ✔ Correção de bugs e novas features (Azure DevOps)
      ✔ Kotlin/Java com princípios de código limpo
      ✔ Jetpack Compose para UI moderna
      ✔ Integração de APIs (Postman)
      ✔ Versionamento (Git/Git Flow)
      ✔ Metodologia Scrum
      ✔ Análise de dados (SQL Server)
    `,
    technologies: ["Kotlin", "Java", "Jetpack Compose", "Azure DevOps", "Git Flow", "Postman", "SQL Server"]
  },
  {
    title: "Auxiliar de T.I.",
    company: "Santi Engenharia",
    period: "Jan/2020 – Mai/2021",
    description: "Suporte técnico e assistência em infraestrutura de TI",
    technologies: []
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