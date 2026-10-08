import { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Travar o scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#top' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/97 backdrop-blur-md border-b border-border ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="flex items-center justify-between px-6 max-w-[1200px] mx-auto h-16">
        {/* Logo */}
        <a href="#top" className="font-heading text-lg font-bold text-primary tracking-tight whitespace-nowrap flex-shrink-0">
          Tech<span className="text-accent">Solutions</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-[14px] font-medium text-text-muted hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
          <li>
            <a 
              href="https://wa.me/11999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-md text-[13.5px] font-semibold hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <Smartphone size={16} />
              SOLICITAR ORÇAMENTO
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1.5 z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[1000] flex flex-col items-center justify-center gap-0 p-6 pt-24 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={28} className="text-text" />
        </button>
        <ul className="flex flex-col w-full text-center">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full border-b border-border">
              <a 
                href={link.href} 
                className="block py-4 text-lg font-medium text-text hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a 
              href="https://wa.me/11999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-white text-center py-3.5 rounded-md text-base font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SOLICITAR ORÇAMENTO
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}