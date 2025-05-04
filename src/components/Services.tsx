import React, { useEffect, useRef } from 'react';
import { MonitorPlay, Film, BarChart, FileCheck, Lightbulb } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="p-3 bg-indigo-100 rounded-full mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
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
      id="services" 
      ref={sectionRef}
      className="py-20 px-4 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços <span className="text-indigo-600">Oferecidos</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Formas de parceria e colaboração para marcas e empresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            icon={<MonitorPlay size={24} className="text-indigo-600" />}
            title="Publiposts no Feed e Stories"
            description="Divulgação de produtos e serviços em posts e stories com foco no seu público-alvo."
            delay={100}
          />
          <ServiceCard 
            icon={<Film size={24} className="text-indigo-600" />}
            title="Reels com Storytelling"
            description="Criação de conteúdo em vídeo com narrativa envolvente relacionada à tecnologia e humor."
            delay={200}
          />
          <ServiceCard 
            icon={<BarChart size={24} className="text-indigo-600" />}
            title="Divulgação de Sites e Ferramentas"
            description="Demonstração e avaliação de sites, plataformas e ferramentas úteis para desenvolvedores."
            delay={300}
          />
          <ServiceCard 
            icon={<FileCheck size={24} className="text-indigo-600" />}
            title="Avaliação de Portfólios"
            description="Revisão e feedback de portfólios em seu quadro fixo com alta visibilidade e engajamento."
            delay={400}
          />
          <ServiceCard 
            icon={<Lightbulb size={24} className="text-indigo-600" />}
            title="Campanhas Criativas e Virais"
            description="Desenvolvimento de campanhas originais e com potencial viral para marcas de tecnologia."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;