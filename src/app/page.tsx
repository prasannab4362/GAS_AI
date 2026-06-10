import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { BusinessAutomationSection } from "@/components/business-automation-section";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { CTASection } from "@/components/cta-section";
import { COMPANY_NAME, SITE_NAME, SITE_URL, seoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: `AI Automation, IoT & Robotics Solutions | ${SITE_NAME}`,
  description:
    "Green Automation Solution (GAS AI) builds AI automation, IoT automation, smart home systems, industrial IoT, robotics, and computer vision solutions for global teams.",
  keywords: [
    ...seoKeywords,
    "AI automation company",
    "Green Automation Solution AI",
    "GAS AI IoT",
    "AI and automation company",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} - AI Automation, IoT & Robotics Solutions`,
    description:
      "AI automation, IoT automation, smart home systems, industrial IoT, robotics, and computer vision by Green Automation Solution.",
    url: SITE_URL,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: `${SITE_NAME} - ${COMPANY_NAME}` }],
  },
  twitter: {
    title: `${SITE_NAME} - AI Automation, IoT & Robotics Solutions`,
    description:
      "AI automation, IoT automation, smart home systems, industrial IoT, robotics, and computer vision by Green Automation Solution.",
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} - AI Automation, IoT and Robotics Solutions`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        description:
          "Green Automation Solution (GAS AI) builds AI automation, IoT automation, industrial IoT, smart home, robotics, and computer vision systems.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Green Automation Solution?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Green Automation Solution, also known as GAS AI, is an AI, IoT, robotics, and automation company building smart systems for homes, businesses, industries, and education programs.",
            },
          },
          {
            "@type": "Question",
            name: "What services does GAS AI provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GAS AI provides AI automation, business workflow automation, WhatsApp AI automation, smart home automation, industrial IoT, robotics, computer vision, networking, security, and embedded product development.",
            },
          },
        ],
      },
    ],
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
