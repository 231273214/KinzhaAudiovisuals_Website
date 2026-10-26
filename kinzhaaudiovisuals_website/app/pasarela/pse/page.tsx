import type { Metadata } from "next";
import PseForm from "@/components/checkout/PseForm";

export const metadata: Metadata = { title: "PSE | Kinzha Audiovisuals" };

export default function PsePage() {
  return <PseForm />;
}