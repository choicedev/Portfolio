import React, { useEffect, useState } from 'react';
import StatCard from './StatCard';
import { GitBranch, Star, Users, Code } from 'lucide-react';
import { GitHubStats, LanguageStats } from '../../types';

const Stats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [languages, setLanguages] = useState<LanguageStats>({});
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // 1. Busca estatísticas básicas do usuário
        const userResponse = await fetch('https://api.github.com/users/choicedev');
        const userData = await userResponse.json();

        // 2. Busca repositórios para contar stars e linguagens
        const reposResponse = await fetch('https://api.github.com/users/choicedev/repos');
        const reposData = await reposResponse.json();

        // Calcular total de stars
        const stars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        // Calcular linguagens
        const langMap: LanguageStats = {};
        let totalLangBytes = 0;

        // Para cada repositório, buscar linguagens
        for (const repo of reposData) {
          if (repo.languages_url) {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();

            for (const [lang, bytes] of Object.entries(langData)) {
              langMap[lang] = (langMap[lang] || 0) + Number(bytes);
              totalLangBytes += Number(bytes);
            }
          }
        }

        // Normalizar porcentagens
        const normalizedLangs: LanguageStats = {};
        for (const [lang, bytes] of Object.entries(langMap)) {
          normalizedLangs[lang] = Number(((bytes / totalLangBytes) * 100).toFixed(1));
        }

        setStats(userData);
        setLanguages(normalizedLangs);
        setTotalStars(stars);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-gray-400">Carregando estatísticas...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Estatísticas
          </span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          Métricas do meu trabalho no GitHub
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Repositórios"
            value={stats?.public_repos || 0}
            icon={<GitBranch size={24} aria-hidden="true" />}
            color="blue"
            description={`Total de ${stats?.public_repos || 0} repositórios públicos no GitHub`}
          />

          <StatCard
            title="Stars"
            value={totalStars}
            icon={<Star size={24} aria-hidden="true" />}
            color="yellow"
            description={`${totalStars} estrelas recebidas em repositórios`}
            loading={loading}
          />

          <StatCard
            title="Seguidores"
            value={stats?.followers || 0}
            icon={<Users size={24} aria-hidden="true" />}
            color="green"
            description={`${stats?.followers || 0} desenvolvedores seguindo seu trabalho`}
          />

          <StatCard
            title="Linguagens"
            value={Object.keys(languages).length}
            icon={<Code size={24} aria-hidden="true" />}
            color="purple"
            description={`Domínio em ${Object.keys(languages).length} linguagens de programação`}
          />
        </div>

        <div className="bg-slate-800/80 rounded-lg border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Linguagens Mais Usadas</h3>

          <div className="space-y-4">
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 10)
              .map(([lang, percent]) => (
                <div key={lang}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{lang}</span>
                    <span className="text-gray-400">{percent}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${percent}%`,
                        backgroundColor: getLanguageColor(lang)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Função auxiliar para cores baseadas na linguagem
function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    'Kotlin': '#A97BFF',
    'Java': '#b07219',
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Python': '#3572A5',
    'Dart': '#00B4AB',
    'Swift': '#F05138',
    'C++': '#f34b7d',
    'C#': '#178600',
  };

  return colors[language] || '#3B82F6'; // Azul padrão se não encontrado
}

export default Stats;