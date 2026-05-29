import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { BusinessAutomationSection } from "@/components/business-automation-section";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <TechStackSection />
      <BusinessAutomationSection />
      <FeaturedProjectsSection />
      <CTASection />
    </div>
  );
}
