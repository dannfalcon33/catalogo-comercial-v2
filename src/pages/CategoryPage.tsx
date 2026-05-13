import { useParams, Link } from 'react-router-dom';
import { catalog } from '../data/catalog';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = catalog.find(c => c.id === id);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-800">Categoría no encontrada</h2>
        <p className="mb-8 text-slate-600">Lo sentimos, la categoría que intentas visitar no existe o no está disponible.</p>
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Inicio
        </Link>
      </div>
    );
  }

  const handleProductWhatsApp = (productName: string) => {
    const phoneNumber = '5804220331995';
    const message = encodeURIComponent(`Hola Yoshua, quisiera solicitar un encargo de pedido de: *${productName}* (${category.title}).`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8 max-w-7xl mx-auto"
    >
      {category.id === 'medicamentos' && (
        <motion.div variants={fadeUpItem} className="bg-blue-100 border border-blue-300 text-blue-900 px-6 py-4 rounded-xl mb-4 font-bold text-sm text-center shadow-sm">
          ⚕️ IMPORTANTE: Para medicamentos recetados es estrictamente necesario presentar la <u>receta médica</u> y la <u>autorización</u> de quien emite la orden de compra.
        </motion.div>
      )}
      {category.id === 'ferreteria' && (
        <motion.div variants={fadeUpItem} className="bg-orange-100 border border-orange-300 text-orange-900 px-6 py-4 rounded-xl mb-4 font-bold text-sm text-center shadow-sm">
          🛠️ IMPORTANTE: Debe especificar detalladamente en su lista de encargo las herramientas y materiales exactos deseados para poder enviarle la cotización.
        </motion.div>
      )}
      {/* Category Header */}
      <motion.div variants={fadeUpItem} className="flex flex-col md:flex-row md:items-center justify-between bg-[#16100b] border border-amber-900/30 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/40 gap-6">
        <div>
          <Link to="/" className="inline-flex items-center text-sm font-bold font-heading text-amber-500/70 hover:text-amber-400 mb-4 transition-colors uppercase tracking-wider">
            &larr; VOLVER AL CATÁLOGO
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-900/40 shadow-inner rounded-lg flex items-center justify-center text-amber-500 border border-amber-500/20">
              <category.icon size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black font-heading uppercase tracking-widest text-amber-100">{category.title}</h1>
              <p className="text-amber-100/60 font-sans mt-1 max-w-2xl text-sm">{category.description}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            const phoneNumber = '5804220331995';
            const message = encodeURIComponent(`Hola Yoshua, estoy interesado en solicitar un encargo de pedido de la categoría: *${category.title}*.`);
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
          }}
          className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 font-bold font-heading uppercase tracking-wider text-[#0d0906] bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg shadow-lg hover:from-amber-300 hover:to-amber-500 transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Cotizar Categoría
        </button>
      </motion.div>

      {/* Products Grid */}
      {category.products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {category.products.map(product => (
            <motion.div variants={fadeUpItem} key={product.id} className="bg-[#120d0a] border border-amber-900/40 rounded-xl overflow-hidden flex flex-col hover:border-amber-500/80 shadow-md shadow-black/50 transition-all">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0d0906] relative group">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] to-transparent opacity-80"></div>
              </div>
              <div className="flex flex-col flex-grow p-5 justify-between relative z-10 -mt-8">
                <div>
                  <h3 className="font-bold font-heading text-lg text-amber-100 leading-tight mb-2 tracking-wide uppercase text-sm drop-shadow-md">{product.name}</h3>
                  <p className="text-xs text-amber-100/60 font-sans mb-4 leading-relaxed">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-bold font-heading tracking-widest text-[#120d0a] bg-amber-500 px-3 py-1.5 rounded uppercase">
                    {product.price}
                  </span>
                  <button 
                    onClick={() => handleProductWhatsApp(product.name)}
                    className="text-amber-400 text-xs font-bold font-heading uppercase tracking-widest hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    Encargar &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div variants={fadeUpItem} className="bg-[#0a0705] border-2 border-dashed border-amber-900/50 rounded-xl p-10 flex flex-col justify-center items-center text-center">
            <p className="text-sm text-amber-400 font-heading font-bold tracking-widest uppercase">Aún no hay rubros detallados listados aquí</p>
            <p className="text-xs text-amber-100/60 font-sans mt-3 px-4 leading-relaxed">Pregunta por disponibilidad general de la categoría vía WhatsApp</p>
            <div className="mt-4 text-2xl filter sepia opacity-80 brightness-110 hue-rotate-15">📦</div>
        </motion.div>
      )}

      {['alimentos', 'carniceria', 'medicamentos', 'higiene', 'limpieza', 'licores', 'ferreteria'].includes(category.id) && (
        <motion.div variants={fadeUpItem} className="bg-amber-100 border border-amber-300 text-amber-900 px-4 py-3 rounded-xl mt-4 font-bold text-sm text-center shadow-sm">
          💡 La lista es personalizada, debes crear tu lista de productos deseados para poder hacer la cotización del encargo.
        </motion.div>
      )}
    </motion.div>
  );
}
