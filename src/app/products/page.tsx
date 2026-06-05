import { Metadata } from "next";
import { ProductsContent } from "@/components/products-content";
 
export const metadata: Metadata = {
  title: "Core Products | AI, IoT & Robotics Hardware | GAS AI",
  description:
    "Explore GAS AI core products: Smart IoT Gateways, High-Torque Robotics Actuators, Edge AI Vision Modules, and the Virtual Labs Engineering Sandbox.",
  keywords: [
    "IoT products",
    "robotics hardware",
    "edge AI vision",
    "GAS AI products",
    "smart automation hardware",
    "virtual lab software",
    "R&D technology",
  ],
  alternates: {
    canonical: "https://gasautomation.ai/products",
  },
  openGraph: {
    title: "Core Products | AI, IoT & Robotics Hardware | GAS AI",
    description:
      "Explore enterprise-grade smart automation hardware, edge AI modules, robotics controllers, and virtual training sandboxes.",
    url: "https://gasautomation.ai/products",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS AI Products" }],
  },
  twitter: {
    title: "Core Products | AI, IoT & Robotics Hardware | GAS AI",
    description:
      "Explore enterprise-grade smart automation hardware, edge AI modules, robotics controllers, and virtual training sandboxes.",
  },
};
 
export default function ProductsPage() {
  return (
    <div className="py-24 bg-black min-h-screen relative overflow-hidden">
      {/* Visual cybernetic mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <ProductsContent />
    </div>
  );
}
