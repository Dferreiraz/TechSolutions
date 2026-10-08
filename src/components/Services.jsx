import { Laptop, Smartphone, Printer, Gamepad2, Check } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Computadores e Notebooks',
    icon: <Laptop size={24} />,
    featured: true,
    items: ['Formatação Profissional', 'Upgrade de Hardware (SSD/RAM)', 'Limpeza e Pasta Térmica', 'Serviços completos']
  },
  {
    id: 2,
    title: 'Celulares e Tablets',
    icon: <Smartphone size={24} />,
    featured: false,
    items: ['Troca de Tela de qualidade', 'Substituição de Bateria', 'Reparo de Conector', 'Reparo total']
  },
  {
    id: 3,
    title: 'Impressoras',
    icon: <Printer size={24} />,
    featured: false,
    items: ['Manutenção Preventiva', 'Limpeza de Cabeçote', 'Configuração de Rede', 'Reparos em geral']
  },
  {
    id: 4,
    title: 'Videogames',
    icon: <Gamepad2 size={24} />,
    featured: false,
    items: ['Reparo de Placa Mãe', 'Limpeza Completa (PS/Xbox)', 'Reparo de Controles', 'Reparo de HDMI']
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-[18px] font-bold tracking-[2.2px] uppercase text-text mb-2 relative inline-block">
            Catálogo de Serviços
            <span className="block w-12 h-[3px] bg-primary mx-auto mt-2.5 rounded-full" />
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={`group relative bg-bg-card border rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                service.featured 
                  ? 'border-primary bg-gradient-to-br from-[#f0f5ff] to-white' 
                  : 'border-border hover:border-primary/20'
              }`}
            >
              {/* Barra superior animada no hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-md scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              {/* Ícone */}
              <div className="w-11 h-11 flex items-center justify-center bg-[#eef2ff] text-primary rounded-md mb-4 transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-[15.5px] font-bold text-text mb-3.5">
                {service.title}
              </h3>

              {/* Lista de Serviços */}
              <ul className="flex flex-col gap-1.5">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[13.3px] text-text-muted leading-snug">
                    <Check size={14} className="text-primary font-bold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}