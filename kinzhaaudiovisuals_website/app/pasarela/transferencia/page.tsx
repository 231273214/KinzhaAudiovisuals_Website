import type { Metadata } from "next";
import BankTransferForm from "@/components/checkout/BankTransferForm";

export const metadata: Metadata = {
  title: "Transferencia bancaria | Kinzha Audiovisuals",
};

export default function TransferenciaPage() {
  return <BankTransferForm />;
}