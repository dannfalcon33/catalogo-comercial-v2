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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgd84SaijlQ8mV3ovYX17fgvrmlehpT4QKw&s",
      },
      {
        id: "c2",
        name: "Carne Molida",
        description: "Carne de res molida fresca. Disponible por kg.",
        price: "Consultar",
        imageUrl:
          "https://editorialtelevisa.brightspotcdn.com/dims4/default/935c135/2147483647/strip/true/crop/600x338+0+31/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F03%2Fcarne-molida.jpg",
      },
      {
        id: "c3",
        name: "Pollo (Variedad de cortes)",
        description: "Pollo picado, muslo, alas, patas, milanesa.",
        price: "Consultar",
        imageUrl:
          "https://www.gastronomiavasca.net/uploads/image/file/4317/muslo_de_pollo.jpg",
      },
      {
        id: "c4",
        name: "Chuleta Ahumada",
        description: "Chuleta de cerdo ahumada.",
        price: "Consultar",
        imageUrl:
          "https://s.yimg.com/os/es/animal_gourmet_468/e0b4aaea98f5c6519a80dceeefc23ac9",
      },
      {
        id: "c5",
        name: "Hueso Ahumado",
        description: "Hueso ahumado ideal para sopas y guisos.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAT50Gl1DBQn17x745WVCJmC9DwvpsVB_6g&s",
      },
      {
        id: "c6",
        name: "Chorizo Artesanal",
        description: "Chorizo de cerdo artesanal.",
        price: "Consultar",
        imageUrl:
          "https://www.tiendadelcarnicero.com/wp-content/uploads/2021/03/Receta-Chorizo-ahumado-ok.jpg",
      },
      {
        id: "c7",
        name: "Costilla de Res",
        description: "Costilla de res fresca.",
        price: "Consultar",
        imageUrl:
          "https://solofruver.com/wp-content/uploads/2023/03/Costilla-de-res-especial-compressed.jpg",
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
          "https://www.farmadon.com.ve/wp-content/uploads/2021/01/ATAMEL-FORTE-CALOX-650MG-X-10-4.jpg",
      },
      {
        id: "m2",
        name: "Ibuprofeno 400mg",
        description: "Analgésico y antiinflamatorio en tabletas de 500mg.",
        price: "Consultar",
        imageUrl:
          "https://calox.com/wp-content/uploads/2022/12/Ibuprofeno-400-mg-20-Tab-Rec.webp",
      },
      {
        id: "m3",
        name: "Jarabes (Tos, Analgésico)",
        description: "Jarabes para la tos y analgésicos líquidos.",
        price: "Consultar",
        imageUrl: "https://www.ecured.cu/images/f/fe/Jara.jpg",
      },
      {
        id: "m4",
        name: "Vitamina C 500mg",
        description: "Suplemento de Vitamina C en tabletas y capsulas.",
        price: "Consultar",
        imageUrl:
          "https://www.farmadon.com.ve/wp-content/uploads/2021/10/Cevax-Vitamina-C-500mg-x-15-Capsulas-Vivax.png",
      },
      {
        id: "m5",
        name: "Vitamina C Masticables",
        description: "Vitamina C en tabletas masticables de agradable sabor.",
        price: "Consultar",
        imageUrl:
          "https://lh3.googleusercontent.com/Ttndb6Y00BEVL93y-PbzZAmCB8dbj_Kfpkld7nChA67AVT8Uj4JM4Shq1Q3EHPBwWf_KeMHwpLM7gdWw6nYDcfaoFEmDSv9ph0-WCRO3IJrysfBU",
      },
      {
        id: "m6",
        name: "Colirio",
        description: "Gotas oftálmicas.",
        price: "Consultar",
        imageUrl:
          "https://lh3.googleusercontent.com/3gH0Bz_ge0C99MQPKZIjubyMgVXaMiZWnUM6nwmWPmYSF7LcnhEp2A4eMq7rKylJkBfD9bdvRLoLt1oqfKCOTM6VYx4n1u6cq92EmVIka6ttPZGV",
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZW4VvfMEZFfTUiOoI5Yru2wvwY8g-VcT5w&s",
      },
      {
        id: "m9",
        name: "Agua Oxigenada",
        description: "Agua oxigenada (Peróxido de hidrógeno).",
        price: "Consultar",
        imageUrl:
          "https://locatelvenezuela.vtexassets.com/arquivos/ids/167993/2090332.jpg?v=637844245742430000",
      },
      {
        id: "m10",
        name: "Algodón",
        description: "Algodón absorbente, varias presentaciones.",
        price: "Consultar",
        imageUrl:
          "https://www.farmadon.com.ve/wp-content/uploads/2025/01/Algodon-X-500Gr-Rollo-Full-Time.png",
      },
      {
        id: "m11",
        name: "Gasas",
        description: "Paquetes de gasas estériles.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8H84ILlVRWjJ0AIgsjGxs4jYDgy4n1AJuQ&s",
      },
      {
        id: "m12",
        name: "Guantes de Látex y de Nitrilo",
        description: "Cajas de guantes de látex o nitrilo.",
        price: "Consultar",
        imageUrl:
          "https://um.com.co/wp-content/uploads/2024/09/Guantes-de-nitrilo.jpg",
      },
      {
        id: "m13",
        name: "Mascarillas Quirúrgicas",
        description: "Mascarillas desechables, paquetes o cajas.",
        price: "Consultar",
        imageUrl:
          "https://lh3.googleusercontent.com/q3aoc_Y4D4qncUDJBPwrWjiP5jCUsVKi7xjnwP5HMkuuwtXnVQxEJeVOZohkm8xk-HTyBD-qqNgMNCc6Nfm6aZpUVsGBhc4WfhNzO3OFZUWiranV",
      },
      {
        id: "m14",
        name: "Jeringas",
        description: "Jeringas descartables de diferentes capacidades.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhoNHTWi7S0unSfqIMad8oS6PvkTawSFu-Q&s",
      },
      {
        id: "m15",
        name: "Medicamentos por Receta",
        description:
          "Medicamentos controlados y especializados. Requiere récipe y Autorizacion por parte del cliente.",
        price: "Consultar",
        imageUrl:
          "https://media.istockphoto.com/id/1550720063/es/foto/farmacia-farmac%C3%A9utico-o-retrato-de-mujer-con-los-brazos-cruzados-o-sonrisa-en-atenci%C3%B3n-al.jpg?s=612x612&w=0&k=20&c=MaBU_q34Uuewhq4mH6werFsGkHByB3gNSjbkdW6DBbE=",
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
          "https://bnaturalstore.com/wp-content/uploads/2023/09/Crema-dental-sin-fluor-Importancia-de-su-uso-.jpg",
      },
      {
        id: "h2",
        name: "Cepillo de Dientes",
        description: "Cepillo de dientes en distintas presentaciones.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4MtcTHGX9aY5YsNYioC1AGOeMSNnkyHORw&s",
      },
      {
        id: "h3",
        name: "Jabón de Tocador",
        description: "Jabón de baño de diferentes fragancias.",
        price: "Consultar",
        imageUrl:
          "https://media.ambito.com/p/765cf895e4a3df968a8f1607500b75de/adjuntos/360/imagenes/041/669/0041669965/730x0/smart/jabon-tocador.jpg",
      },
      {
        id: "h4",
        name: "Crema Humectante",
        description: "Cremas corporales y faciales.",
        price: "Consultar",
        imageUrl:
          "https://acdn-us.mitiendanube.com/stores/001/267/340/products/img_1551-e0c42e7176dc4607b017752730612970-640-0.webp",
      },
      {
        id: "h5",
        name: "Protector Solar",
        description: "Protector solar (cualquier nivel de FPS).",
        price: "Consultar",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0257/2156/9366/files/que-es-un-protector-solar_480x480.jpg?v=1689084815",
      },
      {
        id: "h6",
        name: "Papel Higiénico",
        description: "Papel higiénico disponible por rollo o bulto.",
        price: "Consultar",
        imageUrl:
          "https://www.eluniverso.com/resizer/v2/N2NO3HSQIVCW5LNKMZCWGKOOS4.jpg?auth=745cbce1ade9de85b8e33d2cc71637b249582d0056195f1a646f3d76d5b41e8c&width=1005&height=670&quality=75&smart=true",
      },
      {
        id: "h7",
        name: "Enjuague Bucal",
        description: "Enjuague bucal de diferentes marcas.",
        price: "Consultar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1P1JJF2O2mv9QEqiu-syL-ly2aEPw8aH5Q&s",
      },
      {
        id: "h8",
        name: "Desodorante",
        description: "Desodorante en barra o aerosol.",
        price: "Consultar",
        imageUrl: "https://assets.unileversolutions.com/v1/135484881.png",
      },
      {
        id: "h9",
        name: "Toallas Sanitarias",
        description: "Toallas sanitarias (damas).",
        price: "Consultar",
        imageUrl:
          "https://images.ctfassets.net/dml1gy2pj84f/2umMm168Vv0mbeeVo7tc43/62f9b16e1356ce6cf99f08845e5e9d78/Ehub_FemCare_Toallas_nocturnas_ALW_BR_2_Hero_700x340.webp?w=750",
      },
      {
        id: "h10",
        name: "Shampoo / Acondicionador",
        description: "Shampoo, enjuague, acondicionador, anticaspa.",
        price: "Consultar",
        imageUrl:
          "https://blog.mysubscriptionaddiction.com/wp-content/uploads/2026/03/04/2026-02-27-13.32.03-1-rotated-e1772590923932-733x634.jpg",
      },
      {
        id: "h11",
        name: "Aceite de Bebé",
        description: "Aceite para el cuidado de la piel del bebé.",
        price: "Consultar",
        imageUrl:
          "https://acdn-us.mitiendanube.com/stores/016/311/products/4-1ecf53aa692134de1517296047423825-1024-1024.webp",
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
          "https://cdn.unotv.com/images/2024/04/desinfectantes-naturales-para-limpiar-la-casa-jpg-125538.jpeg",
      },
      {
        id: "l2",
        name: "Cloro",
        description:
          "Cloro concentrado. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://www.clikisalud.net/wp-content/uploads/2020/05/medidas-precaucion-manipular-cloro.jpg",
      },
      {
        id: "l3",
        name: "Jabón Líquido",
        description:
          "Jabón líquido multiuso. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://media.losandes.com.ar/p/2ae079e15468380a504f70b08535ab1d/adjuntos/368/imagenes/100/606/0100606985/1000x0/smart/jabon-liquido-la-limpieza-del-hogar.png",
      },
      {
        id: "l4",
        name: "Pinesol",
        description:
          "Limpiador desinfectante tipo Pinesol. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://frontiergroup.org/wp-content/uploads/2023/02/PineSol-on-shelf-Mike-Mozart-CC-BY-2.0-scaled.jpg",
      },
      {
        id: "l5",
        name: "Lavaplatos Líquido",
        description:
          "Lavaplatos líquido concentrado. Venta por litro al mayor, requiere envase o garrafón.",
        price: "Consultar",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/71/Afwasmiddel.jpg",
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
          "https://us.123rf.com/450wm/austler/austler2403/austler240303970/227066445-botellas-de-whisky-en-la-barra-del-bar-de-un-pub-o-restaurante.jpg?ver=6",
      },
      {
        id: "lic2",
        name: "Whisky",
        description:
          "Joven, Blended, Single Malt, 8 años, o cualquier barrica. Venta por unidad (botella) o por caja de 12 unidades.",
        price: "Consultar",
        imageUrl:
          "https://www.semana.com/resizer/v2/STG67ICNONCVDAR52KHXFSUZUY.jpg?smart=true&auth=c4dd74fa7bb4f9febc9991045f0acab70ad0f739d2da753bd907a7381a4fc356&width=1280&height=720",
      },
      {
        id: "lic3",
        name: "Ron",
        description:
          "Joven, Añejado o de cualquier barrica. Venta por unidad (botella) o por caja de 12 unidades.",
        price: "Consultar",
        imageUrl:
          "https://humoytabaco.com/wp-content/uploads/2024/08/cacique-anejo-01.jpg?w=1568",
      },
      {
        id: "lic4",
        name: "Cerveza Nacional",
        description:
          "Latas pequeñas y de tercio, Pilsen y Light, botella unidad, cajas.",
        price: "Consultar",
        imageUrl:
          "https://mblm.com/wp-content/uploads/2010/03/featured_image_empresas_polar_cerveceria_polar_case.jpg",
      },
      {
        id: "lic5",
        name: "Cerveza Alemana",
        description: "Por latas de tercio, botella y six pack.",
        price: "Consultar",
        imageUrl:
          "https://encervezate.com/wp-content/uploads/2025/07/GermanBiers-e1753465950246-1600x813.webp",
      },
      {
        id: "lic6",
        name: "Cerveza Holandesa (Heineken)",
        description: "Heineken por lata y six pack.",
        price: "Consultar",
        imageUrl: "https://www.heineken.com/media/d4xpjtg2/image-1-3.png",
      },
      {
        id: "lic7",
        name: "Cerveza Dominicana",
        description: "Cerveza P, por lata y six pack.",
        price: "Consultar",
        imageUrl:
          "https://img1.elyerromenu.com/images/bar-4k-plus/cerveza-presidente/img.webp",
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
          "https://www.verines.com/images/001/pipote-manaplas-fuerte-150-lts.jpg",
      },
      {
        id: "f2",
        name: "Pinturas",
        description:
          "Cualquier categoría y color personalizado. Presentación en galón y cuñete.",
        price: "Consultar",
        imageUrl:
          "https://media.istockphoto.com/id/1674501260/es/foto/fondo-de-primer-plano-de-latas-de-pintura-vista-superior-renderizado-3d.jpg?s=612x612&w=0&k=20&c=xORsQHaariZ4HZrv2nVBQxsGIZ-bOfJ_3lOTr1-JAlw=",
      },
      {
        id: "f3",
        name: "Herramientas de Pintura",
        description:
          "Brochas de cualquier tamaño, rodillos, bandejas, cinta para pintura.",
        price: "Consultar",
        imageUrl:
          "https://www.comercialquintairos.es/blog/productos-y-herramientas-de-pintura-en-comercial-quintairos_pic2219ni0t6.jpg",
      },
      {
        id: "f4",
        name: "Herramientas Básicas",
        description:
          "Debe adjuntar en su lista de encargo la herramienta en específico.",
        price: "Consultar",
        imageUrl:
          "https://serveiestacio.com/blog/wp-content/uploads/2018/08/herramientas-bricolaje-fondo.jpg",
      },
      {
        id: "f5",
        name: "Tubo PVC",
        description:
          "Debe especificar el tamaño, medida, grosor y si necesita codos.",
        price: "Consultar",
        imageUrl:
          "https://josebarroso.com.mx/cdn/shop/products/Tuberia_888f773e-15aa-4f26-8e8a-e5426d21c2bd.jpg?v=1618522715",
      },
    ],
  },
];
