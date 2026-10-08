const steps = [
  { num: '01', title: 'Entre em contato', sub: 'Início do Protocolo' },
  { num: '02', title: 'Explique o problema', sub: 'Triagem Técnica' },
  { num: '03', title: 'Receba diagnóstico', sub: 'Análise de Bancada' },
  { num: '04', title: 'Aprovação e Reparo', sub: 'Execução e Testes' },
];

export default function Flow() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-[18px] font-bold tracking-[2.2px] uppercase text-text mb-2 relative inline-block">
            Fluxo de Manutenção
            <span className="block w-12 h-[3px] bg-primary mx-auto mt-2.5 rounded-full" />
          </h2>
        </div>

        {/* Grid com linha conectora */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Linha conectora (visível apenas no desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-primary/40 to-transparent z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
              {/* Círculo com número */}
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading text-xl font-extrabold shadow-[0_4px_16px_rgba(26,60,143,0.3)] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(26,60,143,0.4)]">
                {step.num}
              </div>
              
              <h4 className="text-[15.2px] font-bold text-text mb-1">{step.title}</h4>
              <p className="text-[11.5px] tracking-[1.15px] uppercase text-text-light font-semibold">
                {step.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}