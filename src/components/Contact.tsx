import React from 'react';
import { Linkedin, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Contato
          </span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-violet-500"></span>
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Interessado em trabalhar juntos ou tem alguma pergunta? Entre em contato!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/80 rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <p className="text-gray-400">Conecte-se profissionalmente</p>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/fabriciozamora/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              Visualizar Perfil
            </a>
          </div>
          
          <div className="bg-slate-800/80 rounded-lg p-6 border border-slate-700/50 hover:border-violet-500/30 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-violet-500/20 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Discord</h3>
                <p className="text-gray-400">Vamos conversar!</p>
              </div>
            </div>
            <a 
              href="https://discord.com/users/246904837508169728" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-violet-500/10 text-violet-400 rounded-lg hover:bg-violet-500/20 transition-colors"
            >
              Conectar no Discord
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;