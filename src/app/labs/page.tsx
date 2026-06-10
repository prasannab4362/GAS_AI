import { Metadata } from "next";
import { LabsContent } from "@/components/labs-content";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GAS Virtual Lab | Remote AI & ML Internship Program | GAS AI",
  description:
    "Join GAS Virtual Lab — 100% remote internships in AI, deep learning, computer vision, NLP, IoT & robotics. Live projects, corporate certification, global access.",
  keywords: [
    "GAS virtual lab",
    "labs",
    "virtual AI labs",
    "AI internship program India",
    "remote AI internship",
    "virtual AI training",
    "machine learning internship remote",
    "deep learning internship",
    "computer vision internship",
    "NLP internship program",
    "IoT robotics internship",
    "AI lab online",
    "GAS AI internship",
    "virtual lab for students",
    "AI certification program",
    "agentic AI training",
  ],
  alternates: {
    canonical: `${SITE_URL}/labs`,
  },
  openGraph: {
    title: "GAS Virtual Lab | Remote AI & ML Internship Program | GAS AI",
    description:
      "100% remote internships in AI, deep learning, computer vision, NLP, IoT & robotics. Build real tech with GAS AI Virtual Labs.",
    url: `${SITE_URL}/labs`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS Virtual Lab - Internship Program" }],
  },
  twitter: {
    title: "GAS Virtual Lab | Remote AI & ML Internship Program | GAS AI",
    description:
      "100% remote internships in AI, deep learning, computer vision, NLP, IoT & robotics. Build real tech with GAS AI.",
  },
};

export default function LabsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GAS Virtual Lab",
    "url": `${SITE_URL}/labs`,
    "logo": `${SITE_URL}/logo.png`,
    "description": "Join GAS Virtual Lab for 100% remote internships in AI, deep learning, computer vision, NLP, IoT & robotics with corporate certification.",
    "sameAs": [
      "https://github.com/prasannab4362/GAS_AI"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GAS Virtual Lab Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "AI & Deep Learning Internship",
            "description": "Virtual training on artificial intelligence and neural networks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Computer Vision Internship",
            "description": "Hands-on projects in image classification, object detection and tracking."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "NLP & LLM Internship",
            "description": "Building custom language agents, chat tools and document summarization pipelines."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "IoT & Robotics Internship",
            "description": "Remote micro-controller development, sensor telemetry, and automation systems."
          }
        }
      ]
    }
  };

  return (
    <div className="py-24 bg-black min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LabsContent />
    </div>
  );
}
