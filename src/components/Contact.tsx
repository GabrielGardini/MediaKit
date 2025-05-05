import React, { useEffect, useRef } from 'react';
import { Mail, Instagram, Atom as Tiktok, MapPin, Music2 } from 'lucide-react';

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}> = ({ icon, title, value, href }) => {
  const content = (
    <div className="flex items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="p-3 bg-indigo-100 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block hover:no-underline"
    >
      {content}
    </a>
  ) : (
    content
  );
};

const Contact: React.FC = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="text-indigo-600">Contato</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Quer trabalhar comigo? Entre em contato por um dos canais abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactItem 
            icon={<Mail size={24} className="text-indigo-600" />}
            title="Email"
            value="gardinidev@gmail.com"
            href="mailto:gardinidev@gmail.com"
          />
          <ContactItem 
            icon={<Instagram size={24} className="text-indigo-600" />}
            title="Instagram"
            value="@gardinidev"
            href="https://www.instagram.com/gardinidev/"
          />
          <ContactItem 
            icon={<Music2 size={24} className="text-indigo-600" />}
            title="TikTok"
            value="@gardini.dev"
            href="https://www.tiktok.com/@gardini.dev?lang=pt-BR"
          />
          <ContactItem 
            icon={<MapPin size={24} className="text-indigo-600" />}
            title="Localização"
            value="Brasil"
          />
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Vamos Trabalhar Juntos!</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Por que trabalhar comigo?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-indigo-100 rounded-full mr-2 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Alcance de mais de 18.000 seguidores apaixonados por tecnologia</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-indigo-100 rounded-full mr-2 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Alto engajamento com mais de 160.000 interações mensais</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-indigo-100 rounded-full mr-2 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Público-alvo específico: profissionais e entusiastas de tecnologia</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-indigo-100 rounded-full mr-2 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Conteúdo com abordagem única combinando humor e tech</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Como funciona</h4>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold mr-3 flex-shrink-0">1</span>
                  <div>
                    <h5 className="font-medium">Entre em contato</h5>
                    <p className="text-slate-600 text-sm">Envie um email ou DM com sua proposta</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold mr-3 flex-shrink-0">2</span>
                  <div>
                    <h5 className="font-medium">Alinhamento de expectativas</h5>
                    <p className="text-slate-600 text-sm">Discutimos o projeto, prazos e valores</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold mr-3 flex-shrink-0">3</span>
                  <div>
                    <h5 className="font-medium">Criação do conteúdo</h5>
                    <p className="text-slate-600 text-sm">Desenvolvimento do material com aprovação</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold mr-3 flex-shrink-0">4</span>
                  <div>
                    <h5 className="font-medium">Publicação e relatório</h5>
                    <p className="text-slate-600 text-sm">Postagem e métricas de desempenho</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="mailto:gardinidev@gmail.com" 
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Mail size={20} className="mr-2" />
              Enviar Proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;