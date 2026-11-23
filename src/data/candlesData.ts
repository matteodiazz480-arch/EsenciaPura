import { Product, Testimonial, BenefitItem } from '../types'

export const BRAND_INFO = {
  name: 'Esência Pura',
  tagline: 'Velas de Cera de Soja, Aromas Naturales y Diseños Únicos',
  location: 'San Martín, Buenos Aires',
  phone: '+54 380 482-4617',
  phoneClean: '543804824617',
  email: 'florenciatiberti@gmail.com',
  instagram: 'esenciapuralr',
  instagramUrl: 'https://instagram.com/esenciapuralr',
  whatsappUrl: 'https://wa.me/543804824617',
  schedule: 'Lunes a Sábados de 9:00 a 19:30 hs'
}

export const PRODUCTS: Product[] = [
  {
    id: 'ramo-peonias-silvestres',
    name: 'Ramo Botánico Peonías & Rosas',
    category: 'primavera',
    description: 'Composición floral esculpida a mano en cera pura de soja con peonías rosadas, rosas crema y detalles botánicos secos.',
    scent: 'Peonía blanca, loto silvestre y frambuesa',
    image: '/imagenes/web/0e757099-0e00-439d-aeb8-79ea9e197951.jpg',
    priceFormatted: 'Consultar por diseño',
    features: ['100% Cera de Soja vegetal', 'Pabilo de puro algodón', 'Aroma de alta fijación'],
    badge: 'Primavera'
  },
  {
    id: 'centro-lavanda-corazon',
    name: 'Centro Floral Lavanda & Corazón',
    category: 'primavera',
    description: 'Arreglo artesanal en tonos lila, blanco y vainilla con vela central en forma de corazón y espigas naturales.',
    scent: 'Lavanda provenzal, tilo y vainilla',
    image: '/imagenes/web/5271559e-9f6d-4598-8ce4-1b85a9ed9a77.jpg',
    priceFormatted: 'Consultar por diseño',
    features: ['Aromaterapia relajante', 'Combustión limpia y lenta', 'Decoración perdurable'],
    badge: 'Botánica'
  },
  {
    id: 'duo-macrame-rosas',
    name: 'Dúo Macramé & Rosas Esculpidas',
    category: 'primavera',
    description: 'Centro ceremonial con rosas de soja en tonos nude y rosa viejo envueltas en tul destellante sobre base macramé.',
    scent: 'Rosa damascena, cedro dulce y ámbar',
    image: '/imagenes/web/1684d37a-7c5c-4749-a61d-2a5917895cd9.jpg',
    priceFormatted: 'Consultar por diseño',
    features: ['Detalle textil artesanal', 'Diseño exclusivo', 'Duración prolongada'],
    badge: 'Artesanal'
  },
  {
    id: 'set-zen-difusor-loto',
    name: 'Set Zen Difusor & Vela Flor de Loto',
    category: 'aromaticas',
    description: 'Conjunto armónico con florero difusor con varillas florales y vela cuenco loto sobre bandeja de cerámica.',
    scent: 'Flor de loto, té verde y jazmín',
    image: '/imagenes/web/058e26b3-1016-41f6-9a44-b1243bce05b4.jpg',
    priceFormatted: 'Consultar por set',
    features: ['Incluye bandeja cerámica', 'Doble aromatización', 'Regalo premium']
  },
  {
    id: 'set-geometrico-ocre',
    name: 'Dúo Geométrico Ocre & Vainilla',
    category: 'aromaticas',
    description: 'Set en tonos tierra con difusor texturado, vaso velón y alhajero a juego para ambientar con calidez.',
    scent: 'Vainilla oriental, madera tostada y almendro',
    image: '/imagenes/web/78a459f8-0b71-4fb3-9d3e-894cfddf52ee.jpg',
    priceFormatted: 'Consultar por set',
    features: ['Tonos orgánicos cálidos', 'Cerámica artesanal', 'Aroma envolvente'],
    badge: 'Hogar'
  },
  {
    id: 'difusores-margaritas',
    name: 'Difusores Cerámicos Margaritas',
    category: 'aromaticas',
    description: 'Difusores individuales acanalados en colores pastel con varillas florales aromáticas y moño en hilo dorado.',
    scent: 'Verbena cítrica, pomelo rosado y flores blancas',
    image: '/imagenes/web/b45e2ab6-a442-48f0-b2aa-78fbc65ad591.jpg',
    priceFormatted: 'Consultar por unidad o lote',
    features: ['Difusión continua', 'Diseño compacto', 'Paleta personalizable']
  },
  {
    id: 'ramo-pasion-aniversario',
    name: 'Ramo Pasión con Cinta Personalizada',
    category: 'regalos',
    description: 'Ramo de rosas rojas de cera vegetal con mariposas doradas 3D y cinta serigrafiada con dedicatoria.',
    scent: 'Rosas silvestres, frutos del bosque y canela',
    image: '/imagenes/web/1d94641e-403f-4a03-b52b-979276165394.jpg',
    priceFormatted: 'Personalizado a pedido',
    features: ['Frase a elección en la cinta', 'Presentación en papel seda', 'Impacto visual único'],
    badge: 'Destacado'
  },
  {
    id: 'ramo-propuesta-amor',
    name: 'Ramo Especial Propuesta Romántica',
    category: 'regalos',
    description: 'Bouquet de rosas carmín y champagne con detalles mariposa y lazo con dedicatoria para declaraciones y aniversarios.',
    scent: 'Peonía roja, magnolia dulce y miel',
    image: '/imagenes/web/a5134a13-e217-4c69-91f2-008a392c572a.jpg',
    priceFormatted: 'Personalizado a pedido',
    features: ['Totalmente customizable', 'Caja o cono de regalo', 'Aroma memorable']
  },
  {
    id: 'ramo-rosas-oro',
    name: 'Ramo Imperial Rosas & Mariposas Doradas',
    category: 'regalos',
    description: 'Elegante ramo envolvente en papel negro y ribetes dorados con rosas carmesí y mariposas caladas con efecto foil.',
    scent: 'Rosas inglesas, sándalo y vainilla',
    image: '/imagenes/web/8021dced-a8b2-4767-9fcc-2e939269ff07.jpg',
    priceFormatted: 'Personalizado a pedido',
    features: ['Papel especial impermeable', 'Velas desmontables', 'Presentación de lujo']
  },
  {
    id: 'souvenirs-sol-primer-anito',
    name: 'Souvenirs Sol Radiante Primer Añito',
    category: 'souvenirs',
    description: 'Cuencos acanalados con vela de cera de soja, figura de sol sonriente, número modelado y tarjetita personalizada.',
    scent: 'Caramelo suave, coco tostado y azahar',
    image: '/imagenes/web/0ca6a826-6398-4b1e-9dc4-73405d90a839.jpg',
    priceFormatted: 'Por cantidad / combos',
    features: ['Etiqueta personalizada', 'Hojitas y números a elección', 'Presentación en lote'],
    badge: 'Eventos'
  },
  {
    id: 'souvenirs-quince-lila',
    name: 'Set Ceremonial Quince Años Lila',
    category: 'souvenirs',
    description: 'Velas con flores aromáticas lila, florero con espigas teñidas y plato salpicado con tarjetita conmemorativa.',
    scent: 'Fresias, jazmín blanco y orquídea',
    image: '/imagenes/web/36dee672-595c-40f3-8d4c-1890ea914371.jpg',
    priceFormatted: 'Por cantidad / combos',
    features: ['Ideal 15 velas ceremoniales', 'Colores temáticos a pedido', 'Detalles con foil']
  },
  {
    id: 'souvenirs-dino-aventura',
    name: 'Souvenirs Dino Aventura Infantil',
    category: 'souvenirs',
    description: 'Bases perladas con figuras de dinosaurios y números en relieve moldeados en cera vegetal para cumpleaños.',
    scent: 'Vainilla dulce y frutillas silvestres',
    image: '/imagenes/web/0d273b60-e4c6-44e0-b82d-3960702fc1b4.jpg',
    priceFormatted: 'Por cantidad / combos',
    features: ['Múltiples dinosaurios', 'Seguro y no tóxico', 'Recuerdo inolvidable']
  },
  {
    id: 'centro-esmeralda-vainilla',
    name: 'Bouquet Esmeralda & Vainilla Cálida',
    category: 'primavera',
    description: 'Armonía de rosas y dalias en verde bosque, té con leche y crema envueltas en abanico plisado de papel seda.',
    scent: 'Hojas verdes, eucalipto dulce y vainilla',
    image: '/imagenes/web/d3e31690-aa15-4541-89b5-60a0453fb73d.jpg',
    priceFormatted: 'Consultar por diseño',
    features: ['Paleta botánica única', 'Aromas limpios', 'Duración superior']
  },
  {
    id: 'peonias-doradas-artesanales',
    name: 'Colección Peonías Doradas de Gala',
    category: 'aromaticas',
    description: 'Peonías florales con pátina oro artesanal sobre cera de soja para mesas de fiesta o regalos exclusivos.',
    scent: 'Miel silvestre, benjuí y bergamota',
    image: '/imagenes/web/96e8cdfd-34c1-4874-bb08-149d6d6c5da3.jpg',
    priceFormatted: 'Consultar por set',
    features: ['Pátina mineral segura', 'Brillo satinado', 'Larga combustión']
  },
  {
    id: 'caja-envio-seis-botanicas',
    name: 'Caja Selección 6 Flores Botánicas',
    category: 'regalos',
    description: 'Caja craft de regalo con seis macetitas acanaladas y flores modeladas en tonalidades pastel.',
    scent: 'Mix floral y dulce',
    image: '/imagenes/web/30e58005-ce1e-4fa5-85fc-7e848742d3b9.jpg',
    priceFormatted: 'Combo promocional',
    features: ['Empaque ecológico listo', 'Seis aromas diferentes', 'Envíos a todo el país']
  },
  {
    id: 'ramillete-kraft-setenta',
    name: 'Ramilletes Rosas en Papel Kraft',
    category: 'souvenirs',
    description: 'Conos individuales envueltos en papel satinado y etiquetas rústicas en papel kraft para celebraciones familiares.',
    scent: 'Rosas de jardín y jazmín',
    image: '/imagenes/web/a0ee2da4-83ef-4192-9fce-4d85ff6e280b.jpg',
    priceFormatted: 'Por cantidad / combos',
    features: ['Presentación individual', 'Tag kraft personalizado', 'Listo para entregar']
  }
]

export const BENEFITS: BenefitItem[] = [
  {
    id: 'clean-burn',
    title: 'Combustión limpia y duradera',
    description: 'Funde a menor temperatura sin emitir hollín negro ni toxinas.',
    highlight: 'Hasta 50% más duración'
  },
  {
    id: 'eco-friendly',
    title: '100% vegetal y renovable',
    description: 'Cera pura de soja biodegradable, sin parafinas ni derivados del petróleo.',
    highlight: 'Ecológica y sustentable'
  },
  {
    id: 'artisan-craft',
    title: 'Diseño artesanal exclusivo',
    description: 'Cada flor y pieza cerámica se vierte y modela a mano en San Martín.',
    highlight: 'Piezas únicas hechas a mano'
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Carolina M.',
    location: 'San Martín, Buenos Aires',
    text: 'Encargué el ramo de rosas con cinta personalizada para nuestro aniversario y mi pareja quedó fascinada. La presentación es impecable y el aroma perfuma toda la casa.',
    rating: 5,
    occasion: 'Ramo Aniversario Personalizado',
    image: '/imagenes/web/1d94641e-403f-4a03-b52b-979276165394.jpg'
  },
  {
    id: 't-2',
    name: 'Valeria R.',
    location: 'Villa Ballester, Buenos Aires',
    text: 'Pedí 25 souvenirs de soles para el primer añito de mi nena. Llegaron perfectos, con las tarjetitas impresas divinas y en una caja super cuidada. Excelente atención.',
    rating: 5,
    occasion: 'Souvenirs Primer Añito',
    image: '/imagenes/web/0ca6a826-6398-4b1e-9dc4-73405d90a839.jpg'
  },
  {
    id: 't-3',
    name: 'Mariana S.',
    location: 'CABA',
    text: 'El centro de mesa con macramé y rosas de soja es una obra de arte. Se nota la dedicación en cada detalle y la cera quema súper parejo sin nada de humo.',
    rating: 5,
    occasion: 'Centro de Mesa Macramé',
    image: '/imagenes/web/1684d37a-7c5c-4749-a61d-2a5917895cd9.jpg'
  }
]

export const REAL_DELIVERIES = [
  {
    id: 'del-1',
    title: 'Caja artesanal de 6 piezas botánicas',
    image: '/imagenes/web/30e58005-ce1e-4fa5-85fc-7e848742d3b9.jpg'
  },
  {
    id: 'del-2',
    title: 'Lote de 30 souvenirs para Bautismo',
    image: '/imagenes/web/2f94006a-ea42-4945-8633-642eccdcef48.jpg'
  },
  {
    id: 'del-3',
    title: 'Juego de 15 velas ceremoniales',
    image: '/imagenes/web/1c44fe5b-ba1a-4d02-8577-85ce27033260.jpg'
  },
  {
    id: 'del-4',
    title: 'Centros de mesa botánicos tono lavanda',
    image: '/imagenes/web/658b2344-8946-4852-aa63-4ca524974202.jpg'
  }
]
