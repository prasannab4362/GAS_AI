import { ServicesSection } from "@/components/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | AI Automation, Smart Home & Robotics | GAS AI",
  description:
    "Explore GAS AI services: AI automation, smart home systems, industrial IoT, robotics, computer vision, and business workflow automation across India & globally.",
  keywords: [
    "our services",
    "GAS AI services",
    "AI automation services",
    "smart home automation India",
    "industrial IoT automation",
    "robotics automation company",
    "business automation AI",
    "WhatsApp automation service",
    "computer vision solutions",
    "IoT solutions India",
    "smart automation services",
  ],
  alternates: {
    canonical: "https://gasautomation.ai/services",
  },
  openGraph: {
    title: "Our Services | AI Automation, Smart Home & Robotics | GAS AI",
    description:
      "From smart homes to industrial IoT — explore enterprise-grade automation services by Green Automation Solution.",
    url: "https://gasautomation.ai/services",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS AI Automation Services" }],
  },
  twitter: {
    title: "Our Services | AI Automation, Smart Home & Robotics | GAS AI",
    description:
      "From smart homes to industrial IoT — explore enterprise-grade automation services by Green Automation Solution.",
  },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation, Smart Home, Industrial IoT & Robotics Solutions",
    "provider": {
      "@type": "Organization",
      "name": "GAS AI",
      "url": "https://gasautomation.ai",
      "logo": "https://gasautomation.ai/logo.png"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GAS AI Our Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Home Automation",
            "description": "Intelligent lighting, climate control, voice automation, and smart locks for modern living."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "WhatsApp AI automation, CRM integration, n8n automated workflows, and smart customer support systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Automation",
            "description": "Industrial IoT solutions, predictive maintenance, telemetry mesh networks, and sensor integration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Intelligent Systems",
            "description": "Language models (LLM), vision-language models (VLM), natural language processing, and custom AI agents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Robotics & ROS",
            "description": "Autonomous rovers, sub-millisecond control, robotic arm automation, and ROS edge programming."
          }
        }
      ]
    }
  };

  return (
    <div className="pt-24 relative overflow-hidden min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">
          Our <span className="text-neon-green">Services</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Empowering your ecosystem with next-generation artificial intelligence, intelligent business workflows, industrial IoT networks, and custom robotics integrations.
        </p>
        <ServicesSection hideHeader />
      </div>
    </div>
  );
}
