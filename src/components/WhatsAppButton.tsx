import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function WhatsAppButton() {
  const location = useLocation();
  const phoneNumber = '5804220331995'; 
  
  // Custom message based on page context
  const getMessage = () => {
    let msg = 'Hola Yoshua, me gustaría solicitar un encargo de pedido de su catálogo. ¿Me puede dar información?';
    
    if (location.pathname.startsWith('/categoria/')) {
      const categoryPath = location.pathname.split('/').pop();
      msg = `Hola, estoy interesado en encargar productos de la categoría *${categoryPath}*. ¿Me puede ayudar con una cotización?`;
    }
    
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex items-center gap-3">
      <div className="hidden md:block bg-[#1a130d] py-2 px-4 rounded-full shadow-xl shadow-black/50 border border-amber-900/40 text-sm font-bold font-heading text-amber-500 animate-bounce">
        ¡Haz tu encargo aquí!
      </div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${getMessage()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 cursor-pointer ring-4 ring-[#16100b] hover:bg-green-400 hover:scale-110 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} className="text-white" />
      </a>
    </div>
  );
}
