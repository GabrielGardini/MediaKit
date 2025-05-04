import React, { useEffect, useRef } from "react";
import { Play, TrendingUp } from "lucide-react";

interface ReelCardProps {
  title: string;
  views: string;
  delay: number;
  link: string;
}

const ReelCard: React.FC<ReelCardProps> = ({ title, views, delay, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <Play size={28} className="text-white" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <div className="flex items-center text-slate-600">
            <TrendingUp size={16} className="mr-1" />
            <span>{views} visualizações</span>
          </div>
        </div>
      </div>
    </a>
  );
};

const TopReels: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top 3 <span className="text-pink-600">Reels</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Os conteúdos mais populares que conquistaram o público nos últimos 30 dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReelCard
            title="Eu não vou fazer Home Office"
            views="268 mil"
            delay={100}
            link="https://www.instagram.com/insights/media/3604861675117066005/"
          />
          <ReelCard
            title="Não me peça para usar MacOS"
            views="239 mil"
            delay={200}
            link="https://www.instagram.com/insights/media/3619400056182329465/"
          />
          <ReelCard
            title="Não me peça para trabalhar presencial"
            views="198 mil"
            delay={300}
            link="https://www.instagram.com/insights/media/3610001794258029696/"
          />
        </div>
      </div>
    </section>
  );
};

export default TopReels;
