import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-2 relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                Sobre mim
              </span>
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
            </h2>

            <p className="text-gray-300 mt-6 leading-relaxed">
              Desenvolvedor Android Júnior com foco em desenvolvimento nativo, utilizando Kotlin,
              Jetpack Compose e arquiteturas escaláveis como MVVM e Clean Architecture.
              Familiaridade com controle de versionamento usando Git e Git Flow.
              Comprometido com boas práticas, código limpo e aprendizado contínuo.
            </p>

            <p className="mt-4 text-slate-500 italic text-sm">
              🎮 Curiosidade: também desenvolvo plugins para Minecraft por diversão!
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Principais habilidades</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-violet-500/20 text-violet-400 rounded-full">Kotlin</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">Java</span>
                <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full">Git</span>
                <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full">Android SDK</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 p-1 shadow-lg hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105">
              <img
                src="../../public/images/choice.jpg"
                alt="Fabricio Zamora"
                className="w-full h-full object-cover rounded-full border-4 border-slate-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
