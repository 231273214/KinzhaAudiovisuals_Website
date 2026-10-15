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
  { id: "Buzo blanco grisaseo", category: "buzos", name: "Buzo blanco grisaseo", price: 135000, image: "/productos/Buzos/Buzo_9.png" },
  { id: "Buzo blanco sencillo", category: "buzos", name: "Buzo blanco sencillo", price: 100000, image: "/Productos/Buzos/Buzo_10.png" },
  { id: "Buzo blanco", category: "buzos", name: "Buzo blanco", price: 120000, image: "/Productos/Buzos/Buzo_8.png" },
  { id: "Buzo gris", category: "buzos", name: "Buzo gris", price: 135000, image: "/Productos/Buzos/Buzo_7.png" },
  { id: "Buzo gris niebla", category: "buzos", name: "Buzo gris niebla", price: 135000, image: "/Productos/Buzos/Buzo_1.png" },
  { id: "Buzo gris oscuro", category: "buzos", name: "Buzo gris oscuro", price: 110000, image: "/Productos/Buzos/Buzo_2.png" },
  { id: "Buzo negro", category: "buzos", name: "Buzo negro", price: 135000, image: "/productos/Buzos/Buzo_5.png" },
  { id: "Buzo naranja", category: "buzos", name: "Buzo naranja", price: 140000, image: "/Productos/Buzos/Buzo_3.png" },
  { id: "Buzo rosa", category: "buzos", name: "Buzo rosa", price: 138000, image: "/Productos/Buzos/Buzo_6.png" },
  { id: "Buzo azul", category: "buzos", name: "Buzo azul", price: 138000, image: "/Productos/Buzos/Buzo_4.png" },

  // ── PANTALONES ──
  { id: "Pantalon gris niebla", category: "pantalones", name: "Pantalon gris niebla", price: 95000, image: "/productos/Pantalones/Pantalon_5.png" },
  { id: "Pantalon gris", category: "pantalones", name: "Pantalon gris", price: 95000, image: "/Productos/Pantalones/Pantalon_6.png" },
  { id: "Pantalon crema", category: "pantalones", name: "Pantalon crema", price: 65000, image: "/Productos/Pantalones/Pantalon_2.png" },
  { id: "Pantalon negro", category: "pantalones", name: "Pantalon negro", price: 95000, image: "/Productos/Pantalones/Pantalon_4.png" },
  { id: "Pantalon sombra negro", category: "pantalones", name: "Pantalon sombra negro", price: 98000, image: "/Productos/Pantalones/Pantalon_1.png" },
  { id: "Pantalon vinotinto", category: "pantalones", name: "Pantalon vinotinto", price: 98000, image: "/Productos/Pantalones/Pantalon_3.png" },

  // ── SOMBREROS ──
  { id: "Sombrero negro", category: "sombreros", name: "Sombrero negro", price: 85000, image: "/productos/Sombreros/Sombrero_3.png" },
  { id: "Sombrero gris", category: "sombreros", name: "Sombrero gris", price: 73000, image: "/Productos/Sombreros/Sombrero_4.png" },
  { id: "Sombrero cuero gris", category: "sombreros", name: "Sombrero cuero gris", price: 97000, image: "/Productos/Sombreros/Sombrero_5.png" },
  { id: "Sombrero cuero cafe", category: "sombreros", name: "Sombrero cuero cafe", price: 80000, image: "/Productos/Sombreros/Sombrero_9.png" },
  { id: "Sombrero cafe", category: "sombreros", name: "Sombrero cafe", price: 55000, image: "/Productos/Sombreros/Sombrero_8.png" },
  { id: "sombrero cafe claro", category: "sombreros", name: "sombrero cafe claro", price: 55000, image: "/Productos/Sombreros/Sombrero.png" },
  { id: "sombrero crema", category: "sombreros", name: "sombrero crema", price: 50000, image: "/productos/Sombreros/Sombrero_2.png" },
  { id: "Deerstalker 1", category: "sombreros", name: "Deerstalker 1", price: 110000, image: "/Productos/Sombreros/Sombrero_6.png" },
  { id: "Deerstalker 2", category: "sombreros", name: "Deerstalker 2", price: 110000, image: "/Productos/Sombreros/Sombrero_7.png" },
  { id: "Deerstalker 3", category: "sombreros", name: "Deerstalker 3", price: 115000, image: "/Productos/Sombreros/Sombrero_1.png" },

  // ── COLECCIONABLES ──
  { id: "Llavero", category: "coleccionables", name: "Llavero", price: 25000, image: "/productos/Coleccionables/Llavero.png" },
  { id: "Pin metalico", category: "coleccionables", name: "Pin metalico", price: 18000, image: "/Productos/Coleccionables/Ping.png" },
  { id: "Linterna", category: "coleccionables", name: "Linterna", price: 35000, image: "/Productos/Coleccionables/Linterna.png" },
  { id: "Cable cargador", category: "coleccionables", name: "Cable cargador", price: 32000, image: "/Productos/Coleccionables/Cargador.png" },
  { id: "Figura detective", category: "coleccionables", name: "Figura detective", price: 46000, image: "/Productos/Coleccionables/Figura_Detective.png" },
  { id: "Trapo microfibra", category: "coleccionables", name: "Trapo microfibra", price: 12000, image: "/Productos/Coleccionables/Trapito_Gafas.png" },

  // ── TAZAS ──
  { id: "Taza blanca", category: "tazas", name: "Taza blanca", price: 28000, image: "/productos/Tazas/Taza_1.png" },
  { id: "Taza azul", category: "tazas", name: "Taza azul", price: 30000, image: "/Productos/Tazas/Taza_4.png" },
  { id: "Taza naranja", category: "tazas", name: "Taza naranja", price: 30000, image: "/Productos/Tazas/Taza_3.png" },
  { id: "Taza lila", category: "tazas", name: "Taza lila", price: 30000, image: "/Productos/Tazas/Taza_5.png" },
  { id: "Taza negra", category: "tazas", name: "Taza negra", price: 28000, image: "/Productos/Tazas/Taza_6.png" },
  { id: "Taza roja", category: "tazas", name: "Taza roja", price: 30000, image: "/Productos/Tazas/Taza_2.png" },

];

export function getProductsByCategory(category: CategoryId) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}