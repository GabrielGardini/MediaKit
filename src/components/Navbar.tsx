import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Atom as Tiktok, Mail, Music2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">@gardinidev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('instagram')} className="nav-link">Instagram</button>
            <button onClick={() => scrollToSection('tiktok')} className="nav-link">TikTok</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contato</button>
            
            <div className="flex items-center space-x-3 ml-4">
              <a 
                href="https://www.instagram.com/gardinidev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@gardini.dev?lang=pt-BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
              <a 
                href="mailto:gardinidev@gmail.com" 
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-slate-700 hover:text-indigo-600 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('instagram')} 
              className="block w-full text-left px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Instagram
            </button>
            <button 
              onClick={() => scrollToSection('tiktok')}
              className="block w-full text-left px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              TikTok
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Contato
            </button>
            
            <div className="flex items-center space-x-5 py-2 border-t border-slate-100 mt-3 pt-3">
              <a 
                href="https://www.instagram.com/gardinidev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@gardini.dev?lang=pt-BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
              <a 
                href="mailto:gardinidev@gmail.com" 
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;