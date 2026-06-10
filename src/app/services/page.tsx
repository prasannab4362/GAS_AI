import { ServicesSection } from "@/components/services-section";
import { Metadata } from "next";
import { COMPANY_NAME, SITE_NAME, SITE_URL, serviceNames } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Our Services | AI Automation, IoT & Robotics | ${SITE_NAME}`,
  description:
    "Explore Green Automation Solution (GAS AI) services: AI automation, IoT automation, smart home systems, industrial IoT, robotics, computer vision, and workflow automation.",
  keywords: [
    "our services",
    "GAS AI services",
    "Green Automation Solution services",
    "AI automation services",
    "IoT automation services",
    "smart home automation India",
    "industrial IoT automation",
    "robotics automation company",
    "business automation AI",
    "WhatsApp automation service",
    "computer vision solutions",
    "smart automation services",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Our Services | AI Automation, IoT & Robotics | ${SITE_NAME}`,
    description:
      `From smart homes to industrial IoT, explore enterprise-grade automation services by ${COMPANY_NAME}.`,
    url: `${SITE_URL}/services`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: `${SITE_NAME} Automation Services` }],
  },
  twitter: {
    title: `Our Services | AI Automation, IoT & Robotics | ${SITE_NAME}`,
    description:
      `From smart homes to industrial IoT, explore enterprise-grade automation services by ${COMPANY_NAME}.`,
  },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#services`,
    "serviceType": "AI Automation, IoT Automation, Smart Home, Industrial IoT & Robotics Solutions",
    "provider": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
    },
    "areaServed": ["India", "Worldwide"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GAS AI Services Catalog",
      "itemListElement": serviceNames.map((name) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": name,
          "provider": {
            "@id": `${SITE_URL}/#organization`,
          },
        },
      })),
    },
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
