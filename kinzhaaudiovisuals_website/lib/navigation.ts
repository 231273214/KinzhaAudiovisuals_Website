export const CONTACT_EMAIL = "kinzhaaudiovisuals@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

export const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/equipo", label: "EQUIPO" },
  { href: "/productos", label: "PRODUCTOS" },
  { href: "/contacto", label: "CONTACTO" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/kinzha_audiovisuals/?hl=es", label: "INSTAGRAM" },
  { href: GMAIL_COMPOSE_URL, label: "GMAIL" },
] as const;