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
  { id: "buzos", label: "Buzos", icon: "/Icons/categorias/buzos.png" },
  { id: "pantalones", label: "Pantalones", icon: "/Icons/categorias/pantalones.png" },
  { id: "sombreros", label: "Sombreros", icon: "/Icons/categorias/sombreros.png" },
  { id: "coleccionables", label: "Coleccionables", icon: "/Icons/categorias/coleccionables.png" },
  { id: "tazas", label: "Tazas", icon: "/Icons/categorias/tazas.png" },
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
  { id: "Buzo blanco grisaseo", category: "buzos", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Buzo blanco sencillo", category: "buzos", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Buzo blanco", category: "buzos", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Buzo gris", category: "buzos", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },
  { id: "Buzo gris niebla", category: "buzos", name: "Camisa amarilla", price: 68000, image: "/Productos/camisas/camisa-amarilla.png" },
  { id: "Buzo gris oscuro", category: "buzos", name: "Camisa roja", price: 68000, image: "/Productos/camisas/camisa-roja.png" },
  { id: "Buzo negro", category: "buzos", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Buzo naranja", category: "buzos", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Buzo rosa", category: "buzos", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Buzo azul", category: "buzos", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },

  // ── PANTALONES ──
  { id: "Pantalon gris niebla", category: "pantalones", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Pantalon gris", category: "pantalones", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Pantalon crema", category: "pantalones", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Pantalon negro", category: "pantalones", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },
  { id: "Pantalon sombra negro", category: "pantalones", name: "Camisa amarilla", price: 68000, image: "/Productos/camisas/camisa-amarilla.png" },
  { id: "Pantalon vinotinto", category: "pantalones", name: "Camisa roja", price: 68000, image: "/Productos/camisas/camisa-roja.png" },

  // ── SOMBREROS ──
  { id: "Sombrero negro", category: "sombreros", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Sombrero gris", category: "sombreros", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Sombrero cuero gris", category: "sombreros", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Sombrero cuero cafe", category: "sombreros", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },
  { id: "Sombrero cafe", category: "sombreros", name: "Camisa amarilla", price: 68000, image: "/Productos/camisas/camisa-amarilla.png" },
  { id: "sombrero cafe claro", category: "sombreros", name: "Camisa roja", price: 68000, image: "/Productos/camisas/camisa-roja.png" },
  { id: "sombrero crema", category: "sombreros", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Deerstalker 1", category: "sombreros", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Deerstalker 2", category: "sombreros", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Deerstalker 3", category: "sombreros", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },

  // ── COLECCIONABLES ──
  { id: "Llavero", category: "coleccionables", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Pin metalico", category: "coleccionables", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Linterna", category: "coleccionables", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Cable cargador", category: "coleccionables", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },
  { id: "Figura detective", category: "coleccionables", name: "Camisa amarilla", price: 68000, image: "/Productos/camisas/camisa-amarilla.png" },
  { id: "Trapo microgibra", category: "coleccionables", name: "Camisa roja", price: 68000, image: "/Productos/camisas/camisa-roja.png" },

  // ── TAZAS ──
  { id: "Taza blanca", category: "tazas", name: "Camisa blanca", price: 65000, image: "/productos/camisas/Camisa_#1.png" },
  { id: "Taza azul", category: "tazas", name: "Camisa azul", price: 68000, image: "/Productos/camisas/camisa-azul.png" },
  { id: "Taza naranja", category: "tazas", name: "Camisa negra", price: 65000, image: "/Productos/camisas/camisa-negra.png" },
  { id: "Taza lila", category: "tazas", name: "Camisa verde", price: 68000, image: "/Productos/camisas/camisa-verde.png" },
  { id: "Taza negra", category: "tazas", name: "Camisa amarilla", price: 68000, image: "/Productos/camisas/camisa-amarilla.png" },
  { id: "Taza roja", category: "tazas", name: "Camisa roja", price: 68000, image: "/Productos/camisas/camisa-roja.png" },

];

export function getProductsByCategory(category: CategoryId) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}