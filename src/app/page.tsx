import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { BusinessAutomationSection } from "@/components/business-automation-section";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "AI Automation, Smart Home & Robotics Solutions | GAS AI",
  description:
    "GAS AI builds enterprise-grade AI automation, smart home systems, industrial IoT, robotics & computer vision solutions. Trusted globally for intelligent automation.",
  keywords: [
    "GAS AI",
    "Green Automation Solution",
    "AI automation company",
    "smart home automation",
    "industrial IoT solutions",
    "robotics company India",
    "computer vision services",
    "business automation AI",
    "smart automation systems",
    "enterprise AI solutions",
  ],
  alternates: {
    canonical: "https://gasautomation.ai",
  },
  openGraph: {
    title: "GAS AI - AI Automation, Smart Home & Robotics Solutions",
    description:
      "Enterprise-grade AI automation, smart home systems, industrial IoT, robotics & computer vision. Build smarter with GAS AI.",
    url: "https://gasautomation.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS AI - Green Automation Solution" }],
  },
  twitter: {
    title: "GAS AI - AI Automation, Smart Home & Robotics Solutions",
    description:
      "Enterprise-grade AI automation, smart home systems, industrial IoT, robotics & computer vision. Build smarter with GAS AI.",
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GAS AI",
    "alternateName": "Green Automation Solution",
    "url": "https://gasautomation.ai",
    "logo": "https://gasautomation.ai/logo.png",
    "description": "GAS AI provides enterprise-grade AI automation, smart home systems, industrial IoT, robotics, and computer vision solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "contact@gasautomation.ai"
    },
    "sameAs": [
      "https://github.com/prasannab4362/GAS_AI"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
