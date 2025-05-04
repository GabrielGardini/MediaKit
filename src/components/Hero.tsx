import React, { useEffect, useRef } from 'react';
import { Code, Laugh, User, UserCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-[90vh] flex items-center justify-center py-16 px-4 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src="/gardini.jpg" 
              alt="Gardini" 
              className="w-40 h-40 rounded-full border-4 border-purple-600 shadow-lg"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Media Kit @gardinidev
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-slate-600 mb-8">
            Criador de conteúdo focado em humor, tecnologia e desenvolvimento frontend.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Code size={28} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tecnologia</h3>
              <p className="text-slate-600">Dicas sobre desenvolvimento frontend e projetos para portfólio</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Laugh size={28} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Humor</h3>
              <p className="text-slate-600">Situações engraçadas do cotidiano de quem trabalha com tecnologia</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <User size={28} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Avaliações</h3>
              <p className="text-slate-600">Avaliações de portfólios dos seguidores e indicações de sites úteis</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="#instagram" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Ver Métricas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;