import React, { useEffect, useRef } from 'react';
import { Instagram, Users, Eye, Zap, PieChart, Clock } from 'lucide-react';
import { StatCard } from './StatCard';

const InstagramStats: React.FC = () => {
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
      id="instagram" 
      ref={sectionRef}
      className="py-20 px-4 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-pink-100 rounded-full mb-4">
            <Instagram size={24} className="text-pink-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Instagram <span className="text-pink-600">Stats</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Métricas dos últimos 30 dias que demonstram o alcance e engajamento do perfil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatCard 
            icon={<Users className="text-pink-600" />} 
            title="Seguidores" 
            value="7.500" 
            bgColor="bg-pink-50"
          />
          <StatCard 
            icon={<Eye className="text-pink-600" />} 
            title="Visualizações" 
            value="1.173.419" 
            bgColor="bg-pink-50"
          />
          <StatCard 
            icon={<Zap className="text-pink-600" />} 
            title="Interações" 
            value="160.613" 
            bgColor="bg-pink-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <PieChart size={20} className="text-pink-600 mr-2" />
              Distribuição de Conteúdo
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Reels</span>
                  <span className="text-sm font-medium">95.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '95.8%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Stories</span>
                  <span className="text-sm font-medium">4.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '4.1%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Feed</span>
                  <span className="text-sm font-medium">0.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '0.1%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users size={20} className="text-pink-600 mr-2" />
              Demografia do Público
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Gênero</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Homens</span>
                      <span className="text-sm">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Mulheres</span>
                      <span className="text-sm">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Idades</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">18-24 anos</span>
                      <span className="text-sm">44%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '44%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">25-34 anos</span>
                      <span className="text-sm">39%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '39%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Outros</span>
                      <span className="text-sm">17%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '17%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Clock size={20} className="text-pink-600 mr-2" />
            Horários de Maior Engajamento
          </h3>
          <div className="relative h-24">
            <div className="absolute inset-0 flex items-end">
              {Array.from({ length: 12 }).map((_, index) => {
                // Generate a random height that gets taller towards the middle hours
                const relativeHeight = Math.min(100, Math.max(30, 
                  (index < 5 ? index * 15 : (11 - index) * 15) + 30 + Math.random() * 20
                ));
                return (
                  <div 
                    key={index} 
                    className={`flex-1 mx-0.5 bg-gradient-to-t from-pink-500 to-pink-300 rounded-t-sm transition-all duration-300 hover:bg-pink-600`}
                    style={{ height: `${relativeHeight}%` }}
                    title={`${index + 9}:00 - ${index + 10}:00`}
                  ></div>
                );
              })}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
              <span>9h</span>
              <span>12h</span>
              <span>15h</span>
              <span>18h</span>
              <span>21h</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-8 text-center">
            Período de maior atividade: 9h às 21h
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramStats;