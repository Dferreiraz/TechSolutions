import { Zap, UserCheck, PackageCheck, ShieldCheck, Headphones } from 'lucide-react';

const featuresData = [
  { id: 1, icon: <Zap size={28} />, label: 'Atendimento Rápido' },
  { id: 2, icon: <UserCheck size={28} />, label: 'Técnicos Qualificados' },
  { id: 3, icon: <PackageCheck size={28} />, label: 'Peças de Qualidade' },
  { id: 4, icon: <ShieldCheck size={28} />, label: 'Garantia Total' },
  { id: 5, icon: <Headphones size={28} />, label: 'Suporte Completo' },
];

export default function Features() {
  return (
    <section className="bg-bg-soft border-y border-border py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center gap-2.5 text-center group cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <span className="text-[12px] font-bold tracking-[0.96px] uppercase text-text group-hover:text-primary transition-colors">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}