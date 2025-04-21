import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative bg-slate-900">

      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <span className="text-sm tracking-widest text-indigo-400 mb-2">FAZENDO APPS COM CAFÉ E CÓDIGO ☕</span>

        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Fabricio <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Zamora</span>
        </h1>

        <h2 className="text-xl sm:text-2xl mt-2 mb-3 text-slate-300">&lt; Desenvolvedor Android Jr. /&gt;</h2>

        <div className="bg-indigo-600 text-white px-3 py-1 rounded-full mb-4 text-sm inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-award w-3.5 h-3.5 mr-1.5">
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
          3+ anos de experiência
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 rounded-md text-white font-medium shadow-lg transition hover:opacity-90"
          >
            📱 Ver Projetos
          </a>
          <a
            href="#contact"
            className="border border-slate-600 px-6 py-2 rounded-md text-slate-300 font-medium hover:text-white hover:border-white transition"
          >
            📬 Contato
          </a>
        </div>
      </section>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
