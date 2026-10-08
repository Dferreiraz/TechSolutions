export default function Footer() {
  return (
    <footer className="bg-[#0a1628] pt-12 pb-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Marca */}
          <div>
            <div className="font-heading text-lg font-bold text-white mb-2.5">
              Tech<span className="text-accent">Solutions</span>
            </div>
            <p className="text-[13.6px] text-white/45 leading-relaxed">
              Precisão e tecnologia excelente. Experiência em reparo multidispositivo avançada.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h5 className="text-white text-[12.8px] font-bold tracking-[1.28px] uppercase mb-3.5">Serviços</h5>
            <ul className="flex flex-col gap-2">
              {['Notebooks', 'PCs', 'Impressoras', 'Videogames'].map(item => (
                <li key={item}>
                  <a href="#servicos" className="text-[13.4px] text-white/50 hover:text-white/85 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Páginas */}
          <div>
            <h5 className="text-white text-[12.8px] font-bold tracking-[1.28px] uppercase mb-3.5">Páginas</h5>
            <ul className="flex flex-col gap-2">
              {[
                { name: 'Início', href: '#top' },
                { name: 'Contato', href: '#contato' }
              ].map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-[13.4px] text-white/50 hover:text-white/85 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h5 className="text-white text-[12.8px] font-bold tracking-[1.28px] uppercase mb-3.5">Contato</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="https://wa.me/11999999999" target="_blank" rel="noopener noreferrer" className="text-[13.4px] text-white/50 hover:text-white/85 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="tel:11999999999" className="text-[13.4px] text-white/50 hover:text-white/85 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/8 text-[12.5px] text-white/30 gap-3">
          <p>© 2026 TechSolutions. Precisão & Técnica Excelente.</p>
          <a 
            href="https://github.com/Dferreiraz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-light hover:text-accent transition-colors"
          >
            Desenvolvido por Davi Ferreira
          </a>
        </div>

      </div>
    </footer>
  );
}