export const GATEWAY_NAME = "Kinzha pay";

export type PaymentMethodId = "pse" | "transferencia" | "tarjeta" | "efecty";

export type PaymentMethod = {
  id: PaymentMethodId;
  label: string;
  /** Ruta de la pasarela. Vacía = aún sin diseño */
  href: string;
};

export const paymentMethods: PaymentMethod[] = [
  { id: "pse", label: "PSE", href: "/pasarela/pse" },
  { id: "transferencia", label: "Transferencia bancaria", href: "/pasarela/transferencia" },
  { id: "tarjeta", label: "Tarjeta de crédito o débito", href: "" },
  { id: "efecty", label: "Efecty", href: "" },
];

export const acceptedLogos = [
  { name: "Visa", src: "/images/pagos/visa.png", width: 60, height: 20 },
  { name: "Mastercard", src: "/images/pagos/mastercard.png", width: 40, height: 24 },
  { name: "PSE", src: "/images/pagos/pse.png", width: 35, height: 35 },
  { name: "Efecty", src: "/images/pagos/efecty.png", width: 64, height: 20 },
];

export const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

export const clientTypes = ["Persona natural", "Persona jurídica"];
export const documentTypes = ["CC", "CE", "NIT", "Pasaporte"];
export const banks = [
  "Bancolombia",
  "Davivienda",
  "Banco de Bogotá",
  "BBVA Colombia",
  "Banco de Occidente",
  "Banco Popular",
];