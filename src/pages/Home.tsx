import { Link } from "react-router-dom";
import { catalog } from "../data/catalog";
import {
  ShieldCheck,
  Truck,
  FileText,
  MapPin,
  ShoppingBasket,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUpText = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row items-center justify-between gap-12 py-8 lg:py-16 mx-auto max-w-7xl"
      >
        <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <motion.div
            variants={fadeUpText}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-amber-200 uppercase bg-amber-900/30 border border-amber-500/50 rounded-full font-sans"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Soy Yoshua Soto, Intermediario Comercial
          </motion.div>
          <motion.h1
            variants={fadeUpText}
            className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-amber-100 font-heading"
          >
            COMPRA LOS ALIMENTOS PARA TU CASA{" "}
            <span className="text-amber-500">PRECIO MAYORISTA</span>.
          </motion.h1>
          <motion.p
            variants={fadeUpText}
            className="text-amber-100/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-sans"
          >
            Hacemos tus compras del hogar directamente con mayoristas y te las
            llevamos a casa. Tú envías tu lista, nosotros nos encargamos del
            resto.
          </motion.p>
          <motion.div
            variants={fadeUpText}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#categorias"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-[#0d0906] font-heading uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 border border-amber-400 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Ver Productos
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-amber-400 font-heading uppercase tracking-wider bg-transparent border-2 border-amber-500/50 rounded-xl hover:border-amber-400 hover:bg-amber-900/30 transition-all w-full sm:w-auto"
            >
              ¿Cómo funciona?
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpText}
            className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start text-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a130d] border border-amber-900/40 shadow-sm rounded-full flex items-center justify-center text-amber-500">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold font-heading text-amber-100 text-xs uppercase tracking-wider">
                  Entregas
                </span>
                <span className="text-amber-100/60 font-sans text-xs">
                  Directo a tu domicilio
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-amber-900/50"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a130d] border border-amber-900/40 shadow-sm rounded-full flex items-center justify-center text-amber-500">
                <ShieldCheck size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold font-heading text-amber-100 text-xs uppercase tracking-wider">
                  Ahorro real
                </span>
                <span className="text-amber-100/60 font-sans text-xs">
                  Compra como negocio
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpText}
          className="flex-1 w-full flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[440px]">
            {/* Visual background shapes */}
            <div className="absolute top-10 -left-10 w-40 h-40 bg-amber-900 rounded-full opacity-30 mix-blend-screen filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-900 rounded-full opacity-30 mix-blend-screen filter blur-3xl"></div>

            {/* Front Card Element */}
            <div className="relative z-10 w-full bg-[#120d0a] border border-amber-900/30 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6 border-b border-amber-900/30 pb-4">
                <span className="text-xs font-bold text-amber-500/80 font-heading uppercase tracking-widest">
                  Tu Despensa hoy
                </span>
                <span className="px-2 py-1 bg-amber-500 text-[#120d0a] font-heading text-[10px] uppercase font-black rounded tracking-wider ring-1 ring-amber-400">
                  Ahorro Familiar
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Mercado y despensa", qty: "Ahorra 20%+" },
                  { name: "Carnes y embutidos", qty: "Frescura total" },
                  { name: "Limpieza del hogar", qty: "Bultos mayoristas" },
                  { name: "Higiene Personal", qty: "Marcas líderes" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 px-3 hover:bg-amber-900/20 rounded-lg transition-colors"
                  >
                    <span className="font-bold font-heading text-sm text-amber-100">
                      {item.name}
                    </span>
                    <span className="text-xs font-mono text-amber-500 font-bold px-2 py-1 bg-amber-900/40 rounded border border-amber-900/50">
                      {item.qty}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-amber-400 to-amber-600 text-[#0d0906] rounded-xl p-6 text-center relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white opacity-20 rounded-full"></div>
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-black opacity-10 rounded-full"></div>
                <p className="text-[#0d0906]/70 font-sans text-xs uppercase tracking-widest font-bold mb-2">
                  Compra más y paga menos
                </p>
                <p className="text-xl font-black font-heading tracking-tight uppercase">
                  AHORRA SIN SALIR DE CASA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="como-funciona"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="scroll-mt-24 space-y-8"
      >
        <motion.div variants={fadeUpText} className="text-center px-4">
          <h2 className="text-3xl font-black font-heading uppercase tracking-wider text-amber-100">
            ¿Cómo funciona?
          </h2>
          <p className="mt-2 text-amber-100/60">
            Ahorrar en tus compras familiares es muy simple.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              icon: FileText,
              title: "ENVÍAS TU LISTA",
              desc: "Nos mandas por WhatsApp los productos que necesitas para tu hogar.",
            },
            {
              icon: ShoppingBasket,
              title: "COMPRAMOS POR TI",
              desc: "Buscamos los mejores precios mayoristas y realizamos la compra por ti.",
            },
            {
              icon: Truck,
              title: "ENTREGA A DOMICILIO",
              desc: "Recibe tu pedido directamente en la puerta de tu casa, listo para tu despensa.",
            },
          ].map((feature, i) => (
            <motion.div
              variants={fadeUpText}
              key={i}
              className="flex flex-col items-center p-6 text-center bg-[#16100b] rounded-xl border border-amber-900/30 shadow-lg shadow-black/40"
            >
              <div className="p-4 mb-4 text-amber-400 bg-amber-900/30 border border-amber-500/20 rounded-xl">
                <feature.icon size={32} />
              </div>
              <h3 className="mb-2 text-base font-black font-heading text-amber-100">
                {feature.title}
              </h3>
              <p className="text-sm text-amber-100/60 font-sans">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUpText} className="text-center px-4 pt-4">
          <div className="inline-block px-6 py-3 bg-amber-900/20 border border-amber-500/20 rounded-2xl">
            <p className="text-amber-100/80 font-sans text-sm italic">
              <span className="font-black text-amber-500 uppercase mr-2">
                Gestión Simple:
              </span>
              Solo cobramos un 15% por el servicio de compra y entrega.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Partners / Comercios */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-12 border-y border-amber-900/30 bg-[#0a0705]"
      >
        <motion.div variants={fadeUpText} className="text-center px-4 mb-8">
          <h2 className="text-2xl font-black font-heading tracking-wider uppercase text-amber-100">
            Donde Compramos
          </h2>
          <p className="mt-2 text-amber-100/60 text-sm">
            Accedemos a los mejores precios en los principales mayoristas.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUpText}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-8 py-10 bg-white rounded-3xl mx-auto max-w-fit mt-6 shadow-xl shadow-black/40"
        >
          {/* Makro Logo */}
          <div className="flex flex-col items-center">
            <span
              className="text-5xl md:text-6xl font-black text-[#e31837] lowercase"
              style={{ letterSpacing: "-0.05em" }}
            >
              makro
            </span>
            <span className="text-[11px] md:text-xs font-bold text-gray-900 tracking-tight mt-1 ml-4">
              su mejor aliado.
            </span>
          </div>

          {/* Plus Sign */}
          <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mx-2">
            <div className="absolute w-full h-[6px] md:h-[8px] bg-[#e31837]"></div>
            <div className="absolute h-full w-[6px] md:w-[8px] bg-[#003ea8]"></div>
          </div>

          {/* Redvital Logo */}
          <div className="flex flex-col items-end">
            <div className="flex items-start">
              <span
                className="text-5xl md:text-6xl font-black text-[#003ea8] lowercase"
                style={{ letterSpacing: "-0.03em" }}
              >
                redvital
              </span>
              <span className="text-sm md:text-base font-bold text-[#003ea8] mt-1 ml-0.5">
                &reg;
              </span>
            </div>
            <span className="text-[11px] md:text-xs font-semibold text-[#003ea8] mt-1 pr-6">
              vive saludable
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* Categories Grid */}
      <motion.section
        id="categorias"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="scroll-mt-24 space-y-6"
      >
        <motion.div
          variants={fadeUpText}
          className="flex flex-col md:flex-row justify-between items-end gap-4 px-2"
        >
          <div>
            <h2 className="text-3xl font-black font-heading text-amber-100 uppercase tracking-widest">
              ¿Qué puedes pedir?
            </h2>
            <p className="mt-2 text-amber-100/60 font-sans text-sm">
              Productos seleccionados para el ahorro de tu familia.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {catalog.map((cat, index) => {
            // Apply theme colors to icons
            const colorClasses = [
              "bg-amber-900/30 text-amber-400 border border-amber-900/50",
              "bg-amber-800/30 text-amber-300 border border-amber-800/50",
              "bg-yellow-900/30 text-yellow-500 border border-yellow-900/50",
              "bg-[#1a130d] text-amber-500 border border-amber-500/20",
            ];
            const colorClass = colorClasses[index % colorClasses.length];

            return (
              <motion.div variants={fadeUpText} key={cat.id} className="h-full">
                <Link
                  to={`/categoria/${cat.id}`}
                  className="bg-[#16100b] border border-amber-900/30 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/80 group min-h-[220px] h-full shadow-lg shadow-black/50 transition-colors"
                >
                  <div>
                    <div
                      className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <cat.icon size={24} />
                    </div>
                    <h3 className="font-bold font-heading text-base uppercase tracking-wider text-amber-100">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-amber-100/60 font-sans mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-amber-500 text-sm font-bold flex items-center gap-2 mt-6 uppercase tracking-wider text-[11px]">
                    Ver productos &rarr;
                  </span>
                </Link>
              </motion.div>
            );
          })}

          {/* Support Card */}
          <motion.div
            variants={fadeUpText}
            className="bg-[#0a0705] border-2 border-dashed border-amber-900/50 rounded-xl p-6 flex flex-col justify-center items-center text-center min-h-[220px]"
          >
            <p className="text-sm text-amber-400 font-heading font-bold uppercase tracking-widest">
              ¿Buscas algo más?
            </p>
            <p className="text-xs text-amber-100/60 font-sans mt-3 px-4 leading-relaxed">
              Si no está en la lista, pregúntanos. Podemos conseguir casi
              cualquier rubro mayorista.
            </p>
            <div className="mt-4 text-2xl opacity-80 filter sepia brightness-110 hue-rotate-15">
              🛒
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
