import { ServicesSection } from "@/components/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Smart Home Services",
  description:
    "Explore GAS AI services: AI automation, smart home systems, industrial IoT, robotics, computer vision, and business workflow automation across India & globally.",
  keywords: [
    "AI automation services",
    "smart home automation India",
    "industrial IoT automation",
    "robotics automation company",
    "business automation AI",
    "WhatsApp automation service",
    "computer vision solutions",
    "IoT solutions India",
    "smart automation services",
    "GAS AI services",
  ],
  alternates: {
    canonical: "https://gasautomation.ai/services",
  },
  openGraph: {
    title: "AI Automation & Smart Home Services | GAS AI",
    description:
      "From smart homes to industrial IoT — explore enterprise-grade automation services by Green Automation Solution.",
    url: "https://gasautomation.ai/services",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS AI Automation Services" }],
  },
  twitter: {
    title: "AI Automation & Smart Home Services | GAS AI",
    description:
      "From smart homes to industrial IoT — explore enterprise-grade automation services by Green Automation Solution.",
  },
};

import { PageHero3D } from "@/components/three/PageHero3D";

export default function ServicesPage() {
  return (
    <div className="pt-20 relative overflow-hidden min-h-screen">
      <PageHero3D shape="torusKnot" color="#00FF88" />
      <div className="relative z-10">
        <ServicesSection />
      </div>
    </div>
  );
}
