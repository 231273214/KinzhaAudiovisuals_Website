import type { Metadata } from "next";
import ContactSection from "@/components/sections/contacto/ContactSection";

export const metadata: Metadata = {
  title: "Contacto | Kinzha Audiovisuals",
};

export default function ContactoPage() {
  return <ContactSection />;
}