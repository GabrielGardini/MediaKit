import React from 'react';
import { Instagram, Atom as Tiktok, Mail, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">@gardinidev</h2>
            <p className="text-slate-400 mt-2">
              Criador de conteúdo de humor e tecnologia
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/gardinidev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@gardini.dev?lang=pt-BR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
              aria-label="TikTok"
            >
              <Music2 size={24} />
            </a>
            <a 
              href="mailto:gardinidev@gmail.com" 
              className="text-white hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Media Kit @gardinidev. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => document.getElementById('instagram')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Instagram
            </button>
            <button 
              onClick={() => document.getElementById('tiktok')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              TikTok
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;