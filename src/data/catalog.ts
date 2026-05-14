import {
  ShoppingBasket,
  Beef,
  Pill,
  Bath,
  SprayCan,
  Wine,
  Hammer,
} from "lucide-react";
import React from "react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  path: string;
  products: Product[];
}

export const catalog: Category[] = [
  {
    id: "mercado-despensa",
    title: "Mercado y despensa",
    description: "Víveres esenciales para tu hogar a precio de mayorista.",
    icon: ShoppingBasket,
    path: "/mercado-despensa",
    products: [
      {
        id: "a1",
        name: "Arroz",
        description: "Arroz tipo 1. Disponible por kilo o paca completa para mayor ahorro.",
        price: "Consultar",
        imageUrl:
          "https://st.depositphotos.com/1005708/3448/i/450/depositphotos_34488037-stock-photo-white-uncooked-rice.jpg",
      },
      {
        id: "a2",
        name: "Pasta",
        description:
          "Pasta larga y corta de excelente calidad. Ideal para el mercado mensual.",
        price: "Consultar",
        imageUrl:
          "https://thumbs.dreamstime.com/b/pasta-cruda-esparcida-del-saco-sobre-la-mesa-de-madera-cerrar-191696245.jpg",
      },
      {
        id: "a3",
        name: "Harina de Maíz",
        description:
          "Harina precocida para tus arepas. Compra por bulto y ahorra más.",
        price: "Consultar",
        imageUrl:
          "https://jeta-imports.com/cdn/shop/files/harina-pan-de-maiz-blanco-precocida-1kg-premium-white-corn-flour-400024_884x.jpg?v=1736035133",
      },
      {
        id: "a4",
        name: "Harina de Trigo",
        description:
          "Harina de trigo todo uso para repostería y cocina en casa.",
        price: "Consultar",
        imageUrl:
          "https://thumbs.dreamstime.com/b/saco-de-harina-con-cuchar%C3%B3n-y-trigo-sobre-una-mesa-r%C3%BAstica-429269458.jpg",
      },
      {
        id: "a5",
        name: "Aceite Vegetal",
        description: "Aceite vegetal para cocinar. Varias marcas disponibles.",
        price: "Consultar",
        imageUrl:
          "https://cdn-3.expansion.mx/dims4/default/fafde76/2147483647/strip/true/crop/1254x837+0+0/resize/800x534!/format/webp/quality/80/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F56%2Fab%2F938422af485aad913ebdc4130a8e%2Fistock-576732962.jpg",
      },
      {
        id: "a6",
        name: "Atún en Lata",
        description: "Atún en aceite o agua, ideal para una despensa completa.",
        price: "Consultar",
        imageUrl:
          "https://www.consumer.es/app/uploads/2020/08/atun-en-conserva.jpg",
      },
      {
        id: "a7",
        name: "Granos y Legumbres",
        description: "Caraotas, frijoles y lentejas. Saludables y rendidores.",
        price: "Consultar",
        imageUrl:
          "https://img.freepik.com/fotos-premium/conjunto-diferentes-granos-enteros-frijoles-semillas-legumbres_73523-3388.jpg",
      },
      {
        id: "a8",
        name: "Sardinas",
        description: "Sardinas en salsa de tomate o aceite.",
        price: "Consultar",
        imageUrl: "https://i.blogs.es/16ade1/sardinas/500_333.jpeg",
      },
      {
        id: "a9",
        name: "Cartón de Huevos (30 unds)",
        description: "Huevos frescos directamente a tu cocina.",
        price: "Consultar",
        imageUrl:
          "https://inversionesloan.com/cdn/shop/files/CARTON.jpg?v=1744471969&width=1080",
      },
      {
        id: "a15",
        name: "Azúcar",
        description: "Azúcar blanca refinada para el hogar.",
        price: "Consultar",
        imageUrl:
          "https://cimamastologia.com.ar/wp-content/uploads/2025/03/azucar.png",
      },
      {
        id: "a16",
        name: "Café",
        description: "Café molido para empezar bien el día.",
        price: "Consultar",
        imageUrl:
          "https://www.laprensa.hn/binrepository/600x400/0c0/0d0/none/11004/SMPW/jr-cafe-081018.1_LP1265424_MG72979711.jpg",
      },
      {
        id: "a17",
        name: "Leche en Polvo",
        description: "Leche completa para toda la familia.",
        price: "Consultar",
        imageUrl: "https://cdn7.kiwilimon.com/articuloimagen/32300/32439.jpg",
      },
    ],
  },
  {
    id: "carnes-embutidos",
    title: "Carnes y embutidos",
    description: "Cortes frescos de res, cerdo y aves para tu semana.",
    icon: Beef,
    path: "/carnes-embutidos",
    products: [
      {
        id: "c1",
        name: "Bistek de Res",
        description: "Corte de bistek fresco seleccionado por kilo.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgd84SaijlQ8mV3ovYX17fgvrmlehpT4QKw&s",
      },
      {
        id: "c2",
        name: "Carne Molida",
        description: "Carne de res molida de primera.",
        price: "Consultar",
        imageUrl:
          "https://editorialtelevisa.brightspotcdn.com/dims4/default/935c135/2147483647/strip/true/crop/600x338+0+31/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F03%2Fcarne-molida.jpg",
      },
      {
        id: "c3",
        name: "Pollo Entero y Cortes",
        description: "Pollo fresco, muslos y milanesas para tus comidas.",
        price: "Consultar",
        imageUrl:
          "https://www.gastronomiavasca.net/uploads/image/file/4317/muslo_de_pollo.jpg",
      },
      {
        id: "c4",
        name: "Chuleta Ahumada",
        description: "Chuletas seleccionadas para un sabor especial.",
        price: "Consultar",
        imageUrl:
          "https://s.yimg.com/os/es/animal_gourmet_468/e0b4aaea98f5c6519a80dceeefc23ac9",
      },
      {
        id: "c6",
        name: "Chorizos y Salchichas",
        description: "Embutidos frescos para tus parrilladas o desayunos.",
        price: "Consultar",
        imageUrl:
          "https://www.tiendadelcarnicero.com/wp-content/uploads/2021/03/Receta-Chorizo-ahumado-ok.jpg",
      },
    ],
  },
  {
    id: "higiene",
    title: "Productos de higiene",
    description: "Todo para el cuidado personal y aseo de tu familia.",
    icon: Bath,
    path: "/higiene",
    products: [
      {
        id: "h1",
        name: "Crema Dental",
        description: "Protección bucal para adultos y niños.",
        price: "Consultar",
        imageUrl:
          "https://bnaturalstore.com/wp-content/uploads/2023/09/Crema-dental-sin-fluor-Importancia-de-su-uso-.jpg",
      },
      {
        id: "h3",
        name: "Jabón de Baño",
        description: "Jabones en barra para la higiene diaria.",
        price: "Consultar",
        imageUrl:
          "https://media.ambito.com/p/765cf895e4a3df968a8f1607500b75de/adjuntos/360/imagenes/041/669/0041669965/730x0/smart/jabon-tocador.jpg",
      },
      {
        id: "h6",
        name: "Papel Higiénico",
        description: "Bultos de papel higiénico para mayor ahorro en casa.",
        price: "Consultar",
        imageUrl:
          "https://www.eluniverso.com/resizer/v2/N2NO3HSQIVCW5LNKMZCWGKOOS4.jpg?auth=745cbce1ade9de85b8e33d2cc71637b249582d0056195f1a646f3d76d5b41e8c&width=1005&height=670&quality=75&smart=true",
      },
      {
        id: "h8",
        name: "Desodorante",
        description: "Variedad de marcas en barra y aerosol.",
        price: "Consultar",
        imageUrl: "https://assets.unileversolutions.com/v1/135484881.png",
      },
      {
        id: "h10",
        name: "Shampoo y Acondicionador",
        description: "Cuidado para todo tipo de cabello.",
        price: "Consultar",
        imageUrl:
          "https://blog.mysubscriptionaddiction.com/wp-content/uploads/2026/03/04/2026-02-27-13.32.03-1-rotated-e1772590923932-733x634.jpg",
      },
    ],
  },
  {
    id: "medicinas",
    title: "Medicinas",
    description: "Básicos para tu botiquín y medicinas bajo receta.",
    icon: Pill,
    path: "/medicinas",
    products: [
      {
        id: "m1",
        name: "Analgésicos y Antipiréticos",
        description: "Acetaminofén, Ibuprofeno y más para aliviar dolores.",
        price: "Consultar",
        imageUrl:
          "https://www.farmadon.com.ve/wp-content/uploads/2021/01/ATAMEL-FORTE-CALOX-650MG-X-10-4.jpg",
      },
      {
        id: "m4",
        name: "Vitaminas y Suplementos",
        description: "Vitamina C y complejos vitamínicos.",
        price: "Consultar",
        imageUrl:
          "https://www.farmadon.com.ve/wp-content/uploads/2021/10/Cevax-Vitamina-C-500mg-x-15-Capsulas-Vivax.png",
      },
      {
        id: "m8",
        name: "Primeros Auxilios",
        description: "Alcohol, gasas, algodón y curitas.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZW4VvfMEZFfTUiOoI5Yru2wvwY8g-VcT5w&s",
      },
      {
        id: "m15",
        name: "Medicinas con Receta",
        description: "Gestionamos tus tratamientos especializados con orden médica.",
        price: "Consultar",
        imageUrl:
          "https://media.istockphoto.com/id/1550720063/es/foto/farmacia-farmac%C3%A9utico-o-retrato-de-mujer-con-los-brazos-cruzados-o-sonrisa-en-atenci%C3%B3n-al.jpg?s=612x612&w=0&k=20&c=MaBU_q34Uuewhq4mH6werFsGkHByB3gNSjbkdW6DBbE=",
      },
    ],
  },
  {
    id: "limpieza-hogar",
    title: "Limpieza del hogar",
    description: "Detergentes y desinfectantes para un hogar impecable.",
    icon: SprayCan,
    path: "/limpieza-hogar",
    products: [
      {
        id: "l1",
        name: "Desinfectantes",
        description: "Lavanda, cereza y brisa marina para tus pisos.",
        price: "Consultar",
        imageUrl:
          "https://cdn.unotv.com/images/2024/04/desinfectantes-naturales-para-limpiar-la-casa-jpg-125538.jpeg",
      },
      {
        id: "l2",
        name: "Cloro y Blanqueadores",
        description: "Ideal para desinfectar y blanquear ropa.",
        price: "Consultar",
        imageUrl:
          "https://www.clikisalud.net/wp-content/uploads/2020/05/medidas-precaucion-manipular-cloro.jpg",
      },
      {
        id: "l3",
        name: "Jabón Líquido para Ropa",
        description: "Rinde más y cuida tus prendas.",
        price: "Consultar",
        imageUrl:
          "https://media.losandes.com.ar/p/2ae079e15468380a504f70b08535ab1d/adjuntos/368/imagenes/100/606/0100606985/1000x0/smart/jabon-liquido-la-limpieza-del-hogar.png",
      },
      {
        id: "l5",
        name: "Lavaplatos",
        description: "Limpia profundamente tu vajilla.",
        price: "Consultar",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/71/Afwasmiddel.jpg",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    description: "Jugos, refrescos y licores para tus reuniones.",
    icon: Wine,
    path: "/bebidas",
    products: [
      {
        id: "a19",
        name: "Refrescos y Colas",
        description: "Tus refrescos favoritos en presentaciones familiares.",
        price: "Consultar",
        imageUrl:
          "https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2Fbf%2F54%2Fdda207384990bd8309046b27cfb0%2Fap-090209040741.jpg&w=1280&q=75",
      },
      {
        id: "lic1",
        name: "Licores y Vinos",
        description: "Variedad de botellas para ocasiones especiales.",
        price: "Consultar",
        imageUrl:
          "https://us.123rf.com/450wm/austler/austler2403/austler240303970/227066445-botellas-de-whisky-en-la-barra-del-bar-de-un-pub-o-restaurante.jpg?ver=6",
      },
      {
        id: "lic4",
        name: "Cervezas Nacionales",
        description: "Cajas de cerveza para compartir.",
        price: "Consultar",
        imageUrl:
          "https://mblm.com/wp-content/uploads/2010/03/featured_image_empresas_polar_cerveceria_polar_case.jpg",
      },
    ],
  },
  {
    id: "articulos-hogar",
    title: "Artículos del hogar",
    description: "Utensilios y accesorios prácticos para tu casa.",
    icon: Hammer,
    path: "/articulos-hogar",
    products: [
      {
        id: "f1",
        name: "Tanques y Pipotes de Agua",
        description: "Soluciones de almacenamiento de agua para el hogar.",
        price: "Consultar",
        imageUrl:
          "https://www.verines.com/images/001/pipote-manaplas-fuerte-150-lts.jpg",
      },
      {
        id: "f2",
        name: "Pinturas para Interiores",
        description: "Renueva tus espacios con colores a tu gusto.",
        price: "Consultar",
        imageUrl:
          "https://media.istockphoto.com/id/1674501260/es/foto/fondo-de-primer-plano-de-latas-de-pintura-vista-superior-renderizado-3d.jpg?s=612x612&w=0&k=20&c=xORsQHaariZ4HZrv2nVBQxsGIZ-bOfJ_3lOTr1-JAlw=",
      },
    ],
  },
  {
    id: "ferreteria-basica",
    title: "Ferretería básica",
    description: "Herramientas y materiales para reparaciones rápidas.",
    icon: Hammer,
    path: "/ferreteria-basica",
    products: [
      {
        id: "f4",
        name: "Herramientas Manuales",
        description: "Martillos, destornilladores y más para arreglos en casa.",
        price: "Consultar",
        imageUrl:
          "https://serveiestacio.com/blog/wp-content/uploads/2018/08/herramientas-bricolaje-fondo.jpg",
      },
      {
        id: "f5",
        name: "Materiales Eléctricos y Plomería",
        description: "Repuestos básicos para tu hogar.",
        price: "Consultar",
        imageUrl:
          "https://josebarroso.com.mx/cdn/shop/products/Tuberia_888f773e-15aa-4f26-8e8a-e5426d21c2bd.jpg?v=1618522715",
      },
    ],
  },
];
