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
    id: "alimentos",
    title: "Alimentos Básicos",
    description: "Víveres al detal y mayorista por pacas grandes.",
    icon: ShoppingBasket,
    path: "/alimentos",
    products: [
      {
        id: "a1",
        name: "Arroz (Detal y Bulto)",
        description: "Arroz tipo 1. Disponible por unidad o por bulto/paca.",
        price: "Consultar",
        imageUrl:
          "https://st.depositphotos.com/1005708/3448/i/450/depositphotos_34488037-stock-photo-white-uncooked-rice.jpg",
      },
      {
        id: "a2",
        name: "Pasta (Detal y Bulto)",
        description:
          "Pasta larga y corta. Disponible por unidad o por bulto/paca.",
        price: "Consultar",
        imageUrl:
          "https://thumbs.dreamstime.com/b/pasta-cruda-esparcida-del-saco-sobre-la-mesa-de-madera-cerrar-191696245.jpg",
      },
      {
        id: "a3",
        name: "Harina PAN (Detal y Bulto)",
        description:
          "Harina de maíz precocida. Disponible por unidad o por bulto.",
        price: "Consultar",
        imageUrl:
          "https://jeta-imports.com/cdn/shop/files/harina-pan-de-maiz-blanco-precocida-1kg-premium-white-corn-flour-400024_884x.jpg?v=1736035133",
      },
      {
        id: "a4",
        name: "Harina de Trigo (Detal y Bulto)",
        description:
          "Harina de trigo todo uso. Disponible por unidad o por bulto.",
        price: "Consultar",
        imageUrl:
          "https://thumbs.dreamstime.com/b/saco-de-harina-con-cuchar%C3%B3n-y-trigo-sobre-una-mesa-r%C3%BAstica-429269458.jpg",
      },
      {
        id: "a5",
        name: "Aceite Vegetal",
        description: "Aceite vegetal. Disponibilidad de varias marcas.",
        price: "Consultar",
        imageUrl:
          "https://cdn-3.expansion.mx/dims4/default/fafde76/2147483647/strip/true/crop/1254x837+0+0/resize/800x534!/format/webp/quality/80/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F56%2Fab%2F938422af485aad913ebdc4130a8e%2Fistock-576732962.jpg",
      },
      {
        id: "a6",
        name: "Atún en Latas",
        description: "Atún en aceite o agua, varias presentaciones.",
        price: "Consultar",
        imageUrl:
          "https://www.consumer.es/app/uploads/2020/08/atun-en-conserva.jpg",
      },
      {
        id: "a7",
        name: "Granos",
        description: "Caraotas, frijoles, lentejas y más.",
        price: "Consultar",
        imageUrl:
          "https://img.freepik.com/fotos-premium/conjunto-diferentes-granos-enteros-frijoles-semillas-legumbres_73523-3388.jpg",
      },
      {
        id: "a8",
        name: "Sardinas en Lata",
        description: "Sardinas en salsa de tomate o aceite.",
        price: "Consultar",
        imageUrl: "https://i.blogs.es/16ade1/sardinas/500_333.jpeg",
      },
      {
        id: "a9",
        name: "Cartón de Huevos (30 unds)",
        description: "Cartón de 30 huevos blancos o marrones.",
        price: "Consultar",
        imageUrl:
          "https://inversionesloan.com/cdn/shop/files/CARTON.jpg?v=1744471969&width=1080",
      },
      {
        id: "a10",
        name: "Salsa de Tomate",
        description: "Salsa de tomate tipo Kétchup.",
        price: "Consultar",
        imageUrl:
          "https://www.petitchef.es/imgupl/recipe/salsa-de-tomate-cruda-al-estilo-mediterraneo-ideal-como-base-para-una-pizza-o-una-pinsa--484854p821775.webp",
      },
      {
        id: "a11",
        name: "Mayonesa",
        description: "Mayonesa en distintas presentaciones.",
        price: "Consultar",
        imageUrl:
          "https://recetasdecocina.elmundo.es/wp-content/uploads/2024/12/mayonesa-casera-1024x683.jpg",
      },
      {
        id: "a12",
        name: "Mantequilla",
        description: "Margarina y mantequilla.",
        price: "Consultar",
        imageUrl:
          "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/Y5PK7SO3XBCDHD7BKT3HD66SQQ.jpg",
      },
      {
        id: "a13",
        name: "Salsa para Pasta",
        description: "Salsa napolitana, boloñesa entre otras.",
        price: "Consultar",
        imageUrl:
          "https://cdn0.uncomo.com/es/posts/8/7/8/como_hacer_salsa_de_tomate_para_pasta_50878_orig.jpg",
      },
      {
        id: "a14",
        name: "Sal",
        description: "Sal refinada, de mesa y de mar.",
        price: "Consultar",
        imageUrl:
          "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg.webp",
      },
      {
        id: "a15",
        name: "Azúcar",
        description: "Azúcar blanca refinada.",
        price: "Consultar",
        imageUrl:
          "https://cimamastologia.com.ar/wp-content/uploads/2025/03/azucar.png",
      },
      {
        id: "a16",
        name: "Café",
        description: "Café molido o en grano.",
        price: "Consultar",
        imageUrl:
          "https://www.laprensa.hn/binrepository/600x400/0c0/0d0/none/11004/SMPW/jr-cafe-081018.1_LP1265424_MG72979711.jpg",
      },
      {
        id: "a17",
        name: "Leche en Polvo",
        description: "Leche entera en polvo, varias marcas.",
        price: "Consultar",
        imageUrl: "https://cdn7.kiwilimon.com/articuloimagen/32300/32439.jpg",
      },
      {
        id: "a18",
        name: "Leche Líquida",
        description: "Leche líquida UHT de larga duración.",
        price: "Consultar",
        imageUrl:
          "https://img.freepik.com/foto-gratis/leche-vaso-jarra-mesa-madera_1150-17621.jpg?semt=ais_hybrid&w=740&q=80",
      },
      {
        id: "a19",
        name: "Refrescos",
        description:
          "Disponibles por unidad de 1Lt, 2Ltrs o por Six Pack de 2Ltrs.",
        price: "Consultar",
        imageUrl:
          "https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2Fbf%2F54%2Fdda207384990bd8309046b27cfb0%2Fap-090209040741.jpg&w=1280&q=75",
      },
    ],
  },
  {
    id: "carniceria",
    title: "Carnicería",
    description: "Cortes frescos de res, cerdo y aves bajo pedido.",
    icon: Beef,
    path: "/carniceria",
    products: [
      {
        id: "c1",
        name: "Carne de Bistek",
        description: "Corte de bistek fresco. Disponible por kg.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "c2",
        name: "Carne Molida",
        description: "Carne de res molida fresca. Disponible por kg.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1588102377202-604bc493547d?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "c3",
        name: "Pollo (Variedad de cortes)",
        description: "Pollo picado, muslo, alas, patas, milanesa.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "c4",
        name: "Chuleta Ahumada",
        description: "Chuleta de cerdo ahumada.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "c5",
        name: "Hueso Ahumado",
        description: "Hueso ahumado ideal para sopas y guisos.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "c6",
        name: "Chorizo Artesanal",
        description: "Chorizo de cerdo artesanal.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1596541175655-b4fedf0e4b86?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "c7",
        name: "Costilla de Res",
        description: "Costilla de res fresca.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: "medicamentos",
    title: "Medicamentos",
    description:
      "Básicos y especializados (se requiere receta médica para controlados).",
    icon: Pill,
    path: "/medicamentos",
    products: [
      {
        id: "m1",
        name: "Acetaminofén (500mg, 650mg)",
        description:
          "Analgésico y antipirético. Presentaciones de 500mg y 650mg.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2eb?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m2",
        name: "Ibuprofeno 500mg",
        description: "Analgésico y antiinflamatorio en tabletas de 500mg.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1583947581924-860bda6a5fdf?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m3",
        name: "Jarabes (Tos, Analgésico)",
        description: "Jarabes para la tos y analgésicos líquidos.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1580281664426-17b4c6bc9cba?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m4",
        name: "Vitamina C 500mg",
        description: "Suplemento de Vitamina C en tabletas.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m5",
        name: "Vitamina C Masticable",
        description: "Vitamina C en tabletas masticables de agradable sabor.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1550572017-edb322daebe1?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m6",
        name: "Colirio",
        description: "Gotas oftálmicas.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m7",
        name: "Antiácido Masticable",
        description: "Antiácido en tabletas masticables para alivio estomacal.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m8",
        name: "Alcohol",
        description: "Alcohol isopropílico o etílico para desinfección.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m9",
        name: "Rifocina",
        description: "Solución tópica.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m10",
        name: "Agua Oxigenada",
        description: "Agua oxigenada (Peróxido de hidrógeno).",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m11",
        name: "Algodón",
        description: "Algodón absorbente, varias presentaciones.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2eb?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m12",
        name: "Gasas",
        description: "Paquetes de gasas estériles.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m13",
        name: "Guantes de Látex",
        description: "Cajas de guantes de látex o nitrilo.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584984240751-bbd512a2faba?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m14",
        name: "Mascarillas Quirúrgicas",
        description: "Mascarillas desechables, paquetes o cajas.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m15",
        name: "Jeringas",
        description: "Jeringas descartables de diferentes capacidades.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2eb?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "m16",
        name: "Medicamentos por Receta",
        description:
          "Medicamentos controlados y especializados. Requiere récipe.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: "higiene",
    title: "Productos de Higiene",
    description: "Cuidado personal, jabones, desodorantes y cuidado bucal.",
    icon: Bath,
    path: "/higiene",
    products: [
      {
        id: "h1",
        name: "Crema Dental",
        description: "Crema dental de varias marcas y tamaños.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1559868770-5b12da6ea1eb?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h2",
        name: "Cepillo de Dientes",
        description: "Cepillo de dientes en distintas presentaciones.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1588775460293-1ca476a26759?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h3",
        name: "Jabón de Tocador",
        description: "Jabón de baño de diferentes fragancias.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h4",
        name: "Crema Humectante",
        description: "Cremas corporales y faciales.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h5",
        name: "Protector Solar",
        description: "Protector solar (cualquier nivel de FPS).",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1526413232644-8a40f41ce931?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h6",
        name: "Talco (Cuerpo y Pies)",
        description: "Talco para cuerpo o pies.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h7",
        name: "Papel Higiénico",
        description: "Papel higiénico disponible por rollo o bulto.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584556812952-905ffd0ccebf?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h8",
        name: "Enjuague Bucal",
        description: "Enjuague bucal de diferentes marcas.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1616422285623-14bf56bda19a?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h9",
        name: "Desodorante",
        description: "Desodorante en barra o aerosol.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1629198725656-78cc1a91e5e5?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h10",
        name: "Toallas Sanitarias",
        description: "Toallas sanitarias (damas).",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h11",
        name: "Shampoo / Acondicionador",
        description: "Shampoo, enjuague, acondicionador, anticaspa.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "h12",
        name: "Aceite de Bebé",
        description: "Aceite para el cuidado de la piel del bebé.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1555820598-c80152b5b3a4?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: "limpieza",
    title: "Productos de Limpieza",
    description: "Detergentes, desinfectantes e insumos al detal y mayor.",
    icon: SprayCan,
    path: "/limpieza",
    products: [
      {
        id: "l1",
        name: "Desinfectantes",
        description:
          "Fragancias: cereza, lavanda, brisa marina. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1584820927498-cafe0c169bea?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "l2",
        name: "Cloro",
        description:
          "Cloro concentrado. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1585421514738-0be34771da92?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "l3",
        name: "Jabón Líquido",
        description:
          "Jabón líquido multiuso. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "l4",
        name: "Pinesol",
        description:
          "Limpiador desinfectante tipo Pinesol. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1628178125191-22e70e9a5fdc?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "l5",
        name: "Lavaplatos Líquido",
        description:
          "Lavaplatos líquido concentrado. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1588708170046-d87bb003df24?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: "licores",
    title: "Licores",
    description: "Gran variedad de licores al detal y cajas para eventos.",
    icon: Wine,
    path: "/licores",
    products: [
      {
        id: "lic1",
        name: "Licor de Whisky",
        description: "Venta por unidad (botella) o por caja de 12 unidades.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "lic2",
        name: "Whisky",
        description:
          "Joven, Blended, Single Malt, 8 años, o cualquier barrica. Venta por unidad (botella) o por caja de 12 unidades.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "lic3",
        name: "Ron",
        description:
          "Joven, Añejado o de cualquier barrica. Venta por unidad (botella) o por caja de 12 unidades.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1614316654067-160105318182?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "lic4",
        name: "Cerveza Nacional",
        description:
          "Latas pequeñas y de tercio, Pilsen y Light, botella unidad, cajas.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1600216773539-7104b2aee056?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "lic5",
        name: "Cerveza Alemana",
        description: "Por latas de tercio, botella y six pack.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1657214736345-31fcf6144e54?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "lic6",
        name: "Cerveza Holandesa (Heineken)",
        description: "Heineken por lata y six pack.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1615332568770-ceebde81db32?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "lic7",
        name: "Cerveza Dominicana",
        description: "Cerveza D, por lata y six pack.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1575037614876-c38db0ae2c40?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: "ferreteria",
    title: "Artículos de Ferretería",
    description: "Herramientas, pinturas, plomería y eléctricos.",
    icon: Hammer,
    path: "/ferreteria",
    products: [
      {
        id: "f1",
        name: "Pipotes de Agua",
        description: "Capacidad de 100 lts, 120 lts, 560 lts y 1000 lts.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1605330368142-f2868297b1fd?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "f2",
        name: "Pinturas",
        description:
          "Cualquier categoría y color personalizado. Presentación en galón y cuñete.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "f3",
        name: "Herramientas de Pintura",
        description:
          "Brochas de cualquier tamaño, rodillos, bandejas, cinta para pintura.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "f4",
        name: "Herramientas Básicas",
        description:
          "Debe adjuntar en su lista de encargo la herramienta en específico.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1586524941913-73138b0fde8c?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "f5",
        name: "Materiales de Albañilería",
        description:
          "Cemento, pego, cal, bloques, etc. Especifique en la lista su requerimiento.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: "f6",
        name: "Tubo PVC",
        description:
          "Debe especificar el tamaño, medida, grosor y si necesita codos.",
        price: "Consultar",
        imageUrl:
          "https://images.unsplash.com/photo-1596726266009-178c773a4bda?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
];
