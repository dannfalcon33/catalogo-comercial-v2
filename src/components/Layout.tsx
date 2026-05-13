import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, PackageOpen, ChevronRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { catalog } from '../data/catalog';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0906] font-sans text-amber-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full h-20 bg-[#16100b] border-b border-amber-900/40 flex items-center justify-between px-4 md:px-10 shadow-md shadow-black/20">
        <div className="flex items-center gap-3 w-full justify-between md:justify-start">
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 text-[#0d0906] shadow-lg shadow-amber-500/20 rounded-lg flex items-center justify-center font-heading font-black transition-transform group-hover:scale-105">
              YS
            </div>
            <span className="text-2xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 uppercase">
              Yoshua Soto
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-amber-400 rounded-md hover:text-amber-300 hover:bg-amber-900/30 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            to="/" 
            className={`text-sm font-bold tracking-wider font-heading transition-colors ${location.pathname === '/' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-amber-100/60 hover:text-amber-400'}`}
          >
            CATÁLOGO
          </Link>
          <div className="relative group">
            <button className="text-sm font-bold tracking-wider font-heading text-amber-100/60 hover:text-amber-400 transition-colors focus:outline-none">
              CATEGORÍAS
            </button>
            <div className="absolute right-0 w-56 pt-6 mt-0 transition-opacity opacity-0 invisible group-hover:visible group-hover:opacity-100">
              <div className="py-2 bg-[#1a130d] border border-amber-900/50 rounded-lg shadow-xl shadow-black/50">
                {catalog.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categoria/${cat.id}`}
                    className="flex items-center px-4 py-2 text-sm font-bold text-amber-100/70 hover:bg-amber-900/30 hover:text-amber-400 transition-colors gap-2"
                  >
                    <cat.icon size={16} className="text-amber-500" />
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#16100b] shadow-2xl shadow-black z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 border-b border-amber-900/20">
          <button
            onClick={closeMenu}
            className="p-2 text-amber-500 rounded-md hover:text-amber-400 hover:bg-amber-900/30 focus:outline-none transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-4 py-6 space-y-4 overflow-y-auto flex-1">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-4 py-3 text-base font-bold font-heading rounded-md transition-all duration-300 origin-top transform ${
              isMenuOpen ? 'scale-y-100 opacity-100 delay-100' : 'scale-y-0 opacity-0'
            } ${location.pathname === '/' ? 'bg-amber-900/30 text-amber-400' : 'text-amber-100/70 hover:bg-amber-900/20 hover:text-amber-400'}`}
          >
            CATÁLOGO
          </Link>
          
          <div className={`transition-all duration-300 origin-top transform ${
              isMenuOpen ? 'scale-y-100 opacity-100 delay-200' : 'scale-y-0 opacity-0'
            }`}>
            <p className="px-4 pb-2 text-xs font-bold tracking-wider font-heading text-amber-500/50 uppercase">CATEGORÍAS</p>
            <div className="mt-1 space-y-1">
              {catalog.map((cat, idx) => (
                <Link
                  key={cat.id}
                  to={`/categoria/${cat.id}`}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-3 text-base font-bold rounded-md transition-all duration-300 origin-top transform ${
                    isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                  } ${location.pathname === `/categoria/${cat.id}` ? 'bg-amber-900/30 text-amber-400' : 'text-amber-100/70 hover:bg-amber-900/20 hover:text-amber-400'}`}
                  style={{ transitionDelay: isMenuOpen ? `${150 + idx * 50}ms` : '0ms' }}
                >
                  <cat.icon size={20} className={location.pathname === `/categoria/${cat.id}` ? 'text-amber-400' : 'text-amber-700/50'} />
                  <span>{cat.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#0a0705] text-amber-500/50 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-6 md:py-4 text-[10px] tracking-widest font-heading uppercase border-t border-amber-900/30 gap-4 md:gap-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 opacity-60 font-medium order-2 md:order-1">
          <span>Actualizado: Hoy 08:30 AM</span>
          <span>Stock: Sincronizado</span>
          <span>Servicio: Disponible</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-amber-400/80 order-1 md:order-2">
          <span className="text-sm font-bold font-sans normal-case tracking-normal">בְּהַצְלָחָה וּבְרָכָה</span>
          <span className="text-[9px] capitalize tracking-widest">"Behatzlajá u'Berajá"</span>
        </div>
        <div className="flex items-center gap-2 order-3 md:order-3">
          <span className="w-2 h-2 bg-green-500 rounded-full opacity-80"></span>
          <span>Conexión Segura</span>
        </div>
      </footer>

      {/* Global WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
