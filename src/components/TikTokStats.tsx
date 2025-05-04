import React, { useEffect, useRef } from 'react';
import { Atom as Tiktok, Users, Eye, ThumbsUp, MessageSquare, Share2, Map, Music2 } from 'lucide-react';
import { StatCard } from './StatCard';

const TikTokStats: React.FC = () => {
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
      id="tiktok" 
      ref={sectionRef}
      className="py-20 px-4 bg-slate-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-black rounded-full mb-4">
            <Music2 size={24} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">TikTok <span className="text-[#25F4EE]">Stats</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Métricas dos últimos 30 dias que demonstram o alcance e engajamento no TikTok
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            icon={<Users className="text-black" />} 
            title="Seguidores" 
            value="11.000" 
            bgColor="bg-[#25F4EE]/10"
          />
          <StatCard 
            icon={<Eye className="text-black" />} 
            title="Visualizações" 
            value="570.000" 
            bgColor="bg-[#25F4EE]/10"
          />
          <StatCard 
            icon={<ThumbsUp className="text-black" />} 
            title="Curtidas" 
            value="61.000" 
            bgColor="bg-[#25F4EE]/10"
          />
          <StatCard 
            icon={<MessageSquare className="text-black" />} 
            title="Comentários" 
            value="5.600" 
            bgColor="bg-[#25F4EE]/10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Share2 size={20} className="text-[#25F4EE] mr-2" />
              Engajamento Extra
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#25F4EE]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Share2 size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3.700</p>
                  <p className="text-slate-600">Compartilhamentos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#25F4EE]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Users size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.000</p>
                  <p className="text-slate-600">Visualizações de perfil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Map size={20} className="text-[#25F4EE] mr-2" />
              Localização do Público
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">São Paulo</span>
                  <span className="text-sm font-medium">13.4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#25F4EE] h-2.5 rounded-full" style={{ width: '13.4%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Rio de Janeiro</span>
                  <span className="text-sm font-medium">6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#25F4EE] h-2.5 rounded-full" style={{ width: '6%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Resto do Brasil</span>
                  <span className="text-sm font-medium">80.6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#25F4EE] h-2.5 rounded-full" style={{ width: '80.6%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Gênero</h3>
            <div className="relative h-64">
              <div className="absolute inset-0 flex">
                <div 
                  className="bg-blue-500 h-full flex items-center justify-center" 
                  style={{ width: '81%' }}
                >
                  <span className="text-white font-medium">81% Homens</span>
                </div>
                <div 
                  className="bg-pink-500 h-full flex items-center justify-center" 
                  style={{ width: '18%' }}
                >
                  <span className="text-white font-medium text-sm">18% Mulheres</span>
                </div>
                <div 
                  className="bg-purple-500 h-full flex items-center justify-center" 
                  style={{ width: '1%' }}
                >
                  <span className="text-white font-medium text-xs rotate-90">1%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Idades</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">18-24 anos</span>
                  <span className="text-sm font-medium">56%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] h-2.5 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">25-34 anos</span>
                  <span className="text-sm font-medium">33.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] h-2.5 rounded-full" style={{ width: '33.7%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Outros</span>
                  <span className="text-sm font-medium">10.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] h-2.5 rounded-full" style={{ width: '10.3%' }}></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-6 text-center">
              Horário de pico de atividade: 17h às 20h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokStats;