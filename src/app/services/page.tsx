import { ServicesSection } from "@/components/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Green Automation Solution (GAS)",
  description: "Explore our intelligent automation services including Smart Homes, Industrial IoT, Robotics, AI Automation, and Computer Vision.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
}
