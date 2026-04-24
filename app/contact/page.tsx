import type { Metadata } from "next";
import ContactDetails from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact Us | Alshami Australia",
  description:
    "Get in touch with Alshami Australia — the exclusive Australian importer of Alshami Coffee and Al-Attar Herbs. Reach us by phone, email, WhatsApp, or social media.",
  openGraph: {
    title: "Contact Us | Alshami Australia",
    description:
      "Get in touch with Alshami Australia — the exclusive Australian importer of Alshami Coffee and Al-Attar Herbs. Reach us by phone, email, WhatsApp, or social media.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactDetails />
    </main>
  );
}
