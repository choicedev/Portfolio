import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">Fabricio Zamora</h2>
            <p className="text-gray-400">Desenvolvedor Mobile Jr.</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/choicedev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/fabriciozamora/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://discord.com/users/246904837508169728" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fabricio Zamora. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Sobre</a>
            <a href="#projects" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Projetos</a>
            <a href="#skills" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Habilidades</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;