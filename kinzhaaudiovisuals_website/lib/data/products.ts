export type CategoryId =
  | "camisas"
  | "buzos"
  | "pantalones"
  | "sombreros"
  | "coleccionables"
  | "tazas";

export type Category = { id: CategoryId; label: string; icon: string };

export type Product = {
  id: string;
  category: CategoryId;
  name: string;
  price: number; 
  image: string;
  description?: string;
  sizes?: string[]; 
};

export const CATEGORIES: Category[] = [
  { id: "camisas", label: "Camisas", icon: "/productos/camisas/Camisa_1.png" },
  { id: "buzos", label: "Buzos", icon: "/productos/Buzos/Buzo_1.png" },
  { id: "pantalones", label: "Pantalones", icon: "/Productos/Pantalones/Pantalon_2.png" },
  { id: "sombreros", label: "Sombreros", icon: "/productos/Sombreros/Sombrero_3.png" },
  { id: "coleccionables", label: "Coleccionables", icon: "/productos/Coleccionables/Llavero.png" },
  { id: "tazas", label: "Tazas", icon: "/productos/Tazas/Taza_1.png" },
];

export const SIZES_ROPA = ["S", "M", "L", "XL"];

export const PRODUCTS: Product[] = [
  // ── CAMISAS ──
  { id: "camisa-blanca", category: "camisas", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_1.png" },
  { id: "camisa-azul", category: "camisas", name: "Camisa azul", price: 68000, image: "/productos/camisas/Camisa_2.png" },
  { id: "camisa-negra", category: "camisas", name: "Camisa negra", price: 65000, image: "/productos/camisas/Camisa_3.png" },
  { id: "camisa-verde", category: "camisas", name: "Camisa verde", price: 68000, image: "/productos/camisas/Camisa_4.png" },
  { id: "camisa-amarilla", category: "camisas", name: "Camisa amarilla", price: 68000, image: "/productos/camisas/Camisa_5.png" },
  { id: "camisa-roja", category: "camisas", name: "Camisa roja", price: 68000, image: "/productos/camisas/Camisa_6.png" },

  // ── BUZOS ── 
  { id: "buzo-blanco-grisaseo", category: "buzos", name: "Buzo blanco grisaseo", price: 135000, image: "/productos/Buzos/Buzo_9.png" },
  { id: "buzo-blanco-sencillo", category: "buzos", name: "Buzo blanco sencillo", price: 100000, image: "/Productos/Buzos/Buzo_10.png" },
  { id: "buzo-blanco", category: "buzos", name: "Buzo blanco", price: 120000, image: "/Productos/Buzos/Buzo_8.png" },
  { id: "buzo-gris", category: "buzos", name: "Buzo gris", price: 135000, image: "/Productos/Buzos/Buzo_7.png" },
  { id: "buzo-gris-niebla", category: "buzos", name: "Buzo gris niebla", price: 135000, image: "/Productos/Buzos/Buzo_1.png" },
  { id: "buzo-gris oscuro", category: "buzos", name: "Buzo gris oscuro", price: 110000, image: "/Productos/Buzos/Buzo_2.png" },
  { id: "buzo-negro", category: "buzos", name: "Buzo negro", price: 135000, image: "/productos/Buzos/Buzo_5.png" },
  { id: "buzo-naranja", category: "buzos", name: "Buzo naranja", price: 140000, image: "/Productos/Buzos/Buzo_3.png" },
  { id: "buzo-rosa", category: "buzos", name: "Buzo rosa", price: 138000, image: "/Productos/Buzos/Buzo_6.png" },
  { id: "buzo-azul", category: "buzos", name: "Buzo azul", price: 138000, image: "/Productos/Buzos/Buzo_4.png" },

  // ── PANTALONES ──
  { id: "pantalon-gris-niebla", category: "pantalones", name: "Pantalon gris niebla", price: 95000, image: "/productos/Pantalones/Pantalon_5.png" },
  { id: "pantalon-gris", category: "pantalones", name: "Pantalon gris", price: 95000, image: "/Productos/Pantalones/Pantalon_6.png" },
  { id: "pantalon-crema", category: "pantalones", name: "Pantalon crema", price: 65000, image: "/Productos/Pantalones/Pantalon_2.png" },
  { id: "pantalon-negro", category: "pantalones", name: "Pantalon negro", price: 95000, image: "/Productos/Pantalones/Pantalon_4.png" },
  { id: "pantalon-sombra-negro", category: "pantalones", name: "Pantalon sombra negro", price: 98000, image: "/Productos/Pantalones/Pantalon_1.png" },
  { id: "pantalon-vinotinto", category: "pantalones", name: "Pantalon vinotinto", price: 98000, image: "/Productos/Pantalones/Pantalon_3.png" },

  // ── SOMBREROS ──
  { id: "sombrero-negro", category: "sombreros", name: "Sombrero negro", price: 85000, image: "/productos/Sombreros/Sombrero_3.png" },
  { id: "sombrero-gris", category: "sombreros", name: "Sombrero gris", price: 73000, image: "/Productos/Sombreros/Sombrero_4.png" },
  { id: "sombrero-cuero-gris", category: "sombreros", name: "Sombrero cuero gris", price: 97000, image: "/Productos/Sombreros/Sombrero_5.png" },
  { id: "sombrero-cuero-cafe", category: "sombreros", name: "Sombrero cuero cafe", price: 80000, image: "/Productos/Sombreros/Sombrero_9.png" },
  { id: "sombrero-cafe", category: "sombreros", name: "Sombrero cafe", price: 55000, image: "/Productos/Sombreros/Sombrero_8.png" },
  { id: "sombrero-cafe-claro", category: "sombreros", name: "sombrero cafe claro", price: 55000, image: "/Productos/Sombreros/Sombrero.png" },
  { id: "sombrero-crema", category: "sombreros", name: "sombrero crema", price: 50000, image: "/productos/Sombreros/Sombrero_2.png" },
  { id: "deerstalker-1", category: "sombreros", name: "Deerstalker 1", price: 110000, image: "/Productos/Sombreros/Sombrero_6.png" },
  { id: "deerstalker-2", category: "sombreros", name: "Deerstalker 2", price: 110000, image: "/Productos/Sombreros/Sombrero_7.png" },
  { id: "deerstalker-3", category: "sombreros", name: "Deerstalker 3", price: 115000, image: "/Productos/Sombreros/Sombrero_1.png" },

  // ── COLECCIONABLES ──
  { id: "llavero", category: "coleccionables", name: "Llavero", price: 25000, image: "/productos/Coleccionables/Llavero.png" },
  { id: "pin-metalico", category: "coleccionables", name: "Pin metalico", price: 18000, image: "/Productos/Coleccionables/Ping.png" },
  { id: "linterna", category: "coleccionables", name: "Linterna", price: 35000, image: "/Productos/Coleccionables/Linterna.png" },
  { id: "cable-cargador", category: "coleccionables", name: "Cable cargador", price: 32000, image: "/Productos/Coleccionables/Cargador.png" },
  { id: "figura-detective", category: "coleccionables", name: "Figura detective", price: 46000, image: "/Productos/Coleccionables/Figura_Detective.png" },
  { id: "trapo-microfibra", category: "coleccionables", name: "Trapo microfibra", price: 12000, image: "/Productos/Coleccionables/Trapito_Gafas.png" },

  // ── TAZAS ──
  { id: "taza-blanca", category: "tazas", name: "Taza blanca", price: 28000, image: "/productos/Tazas/Taza_1.png" },
  { id: "taza-azul", category: "tazas", name: "Taza azul", price: 30000, image: "/Productos/Tazas/Taza_4.png" },
  { id: "taza-naranja", category: "tazas", name: "Taza naranja", price: 30000, image: "/Productos/Tazas/Taza_3.png" },
  { id: "taza-lila", category: "tazas", name: "Taza lila", price: 30000, image: "/Productos/Tazas/Taza_5.png" },
  { id: "taza-negra", category: "tazas", name: "Taza negra", price: 28000, image: "/Productos/Tazas/Taza_6.png" },
  { id: "taza-roja", category: "tazas", name: "Taza roja", price: 30000, image: "/Productos/Tazas/Taza_2.png" },

];

export function getProductsByCategory(category: CategoryId) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

const CATEGORIES_WITH_SIZES: CategoryId[] = ["camisas", "buzos", "pantalones"];

export function getProductSizes(product: Product): string[] {
  return product.sizes ?? (CATEGORIES_WITH_SIZES.includes(product.category) ? SIZES_ROPA : []);
}