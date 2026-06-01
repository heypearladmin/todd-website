import type { Metadata } from "next";
import { ClientServiceAgreement } from "./ClientServiceAgreement";

export const metadata: Metadata = {
  title: "Client Service Agreement · GEO by HeyPearl",
  description:
    "The governing framework for GEO by HeyPearl's AI Authority & Discoverability Infrastructure. Review the complete Client Service Agreement.",
  robots: { index: true, follow: true },
};

export default function ClientServiceAgreementPage() {
  return <ClientServiceAgreement />;
}
