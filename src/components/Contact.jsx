import { MessageCircle, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="bg-dark py-20 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* CTA Principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[35px] font-bold mb-9">
            Fale agora com um técnico especializado
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
            <a 
              href="https://wa.me/11999999999?text=Olá!%20Gostaria%20de%20falar%20com%20um%20técnico."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-white/7 border border-white/12 rounded-md px-6 py-4 hover:bg-white/12 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div className="text-left">
                <small className="block text-[11px] tracking-[1.1px] uppercase text-white/50 font-semibold mb-0.5">WhatsApp</small>
                <strong className="block text-lg font-bold font-heading">(11) 99999-9999</strong>
              </div>
            </a>

            <a 
              href="tel:11999999999"
              className="flex items-center gap-3.5 bg-white/7 border border-white/12 rounded-md px-6 py-4 hover:bg-white/12 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div className="text-left">
                <small className="block text-[11px] tracking-[1.1px] uppercase text-white/50 font-semibold mb-0.5">Telefone</small>
                <strong className="block text-lg font-bold font-heading">(11) 99999-9999</strong>
              </div>
            </a>
          </div>
        </div>

        {/* Card de Horários */}
        <div className="max-w-[500px] mx-auto bg-white/6 border border-white/12 rounded-md p-7 text-left">
          <h4 className="text-[14.7px] font-bold text-white mb-4 pb-3 border-b border-white/10 flex items-center gap-2">
            <Clock size={18} className="text-accent" />
            Horário de Atendimento
          </h4>
          
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-[13.6px]">
              <span className="text-white/65 font-medium">Segunda – Sexta</span>
              <span className="text-white font-semibold">08:00 – 18:00</span>
            </div>
            <div className="flex justify-between items-center text-[13.6px]">
              <span className="text-white/65 font-medium">Sábado</span>
              <span className="text-white font-semibold">08:00 – 13:00</span>
            </div>
            <div className="flex justify-between items-center text-[13.6px]">
              <span className="text-white/65 font-medium">Domingo</span>
              <span className="text-red-500 font-semibold">Fechado</span>
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-white/8 text-[12.5px] text-white/40 leading-relaxed">
            Ajuste seu horário pelo WhatsApp para um atendimento presencial e diagnóstico expresso.
          </p>
        </div>

      </div>
    </section>
  );
}