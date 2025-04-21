import React from 'react';
import { Linkedin, MessageCircle } from 'lucide-react';

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
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-400 bi bi-discord" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
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