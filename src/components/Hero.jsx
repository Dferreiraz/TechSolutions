import { CheckCircle2, ArrowRight } from 'lucide-react';
import rectangleImg from '../assets/Rectangle.svg';

export default function Hero() {
  return (
    <section id="top" className="pt-16 min-h-[800px] flex items-center bg-bg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-[60px] px-6 py-16 max-w-[1200px] mx-auto w-full">
        
        {/* Conteúdo de Texto */}
        <div className="animate-fadeup order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 bg-[#e8f0fe] text-primary text-[11.5px] font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full border border-primary/15 mb-5">
            <CheckCircle2 size={14} />
            Laboratório Especializado
          </div>
          
          <h1 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-text mb-4 leading-[1.15] tracking-tight">
            Seu equipamento funcionando como novo
          </h1>
          
          <p className="text-base text-text-muted mb-7 max-w-[420px] mx-auto lg:mx-0 leading-relaxed">
            Manutenção especializada em computadores, celulares, impressoras e videogames com precisão técnica e agilidade.
          </p>

          <div className="flex flex-col gap-2 mb-8 items-center lg:items-start">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {['Atendimento rápido', 'Diagnóstico preciso', 'Serviço com garantia'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] font-medium text-text">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a 
              href="https://wa.me/11999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-md text-[14.5px] font-semibold shadow-[0_4px_14px_rgba(26,60,143,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(26,60,143,0.38)] transition-all duration-200"
            >
              Solicitar orçamento
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://wa.me/11999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white rounded-md text-[14.5px] font-semibold shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] transition-all duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Imagem / Ilustração */}
        <div className="relative order-1 lg:order-2 animate-fadein [animation-delay:200ms] max-w-[400px] lg:max-w-none mx-auto w-full">
          <div className="rounded-[20px] overflow-hidden shadow-lg aspect-[4/3] bg-dark group">
            <img 
              src={rectangleImg} 
              alt="Tech Solutions Laboratório" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}