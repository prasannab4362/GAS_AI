import { Metadata } from "next";
import { Terminal, Code, Cpu, Database, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageHero3D } from "@/components/three/PageHero3D";

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
    canonical: "https://gasautomation.ai/labs",
  },
  openGraph: {
    title: "GAS Virtual Lab | Remote AI & ML Internship Program | GAS AI",
    description:
      "100% remote internships in AI, deep learning, computer vision, NLP, IoT & robotics. Build real tech with GAS AI Virtual Labs.",
    url: "https://gasautomation.ai/labs",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS Virtual Lab - Internship Program" }],
  },
  twitter: {
    title: "GAS Virtual Lab | Remote AI & ML Internship Program | GAS AI",
    description:
      "100% remote internships in AI, deep learning, computer vision, NLP, IoT & robotics. Build real tech with GAS AI.",
  },
};

const PROGRAMS = [
  { title: "AI & Deep Learning", icon: Database },
  { title: "Computer Vision", icon: Terminal },
  { title: "NLP & LLM", icon: Code },
  { title: "Agentic AI", icon: Cpu },
  { title: "n8n AI Automation", icon: Terminal },
  { title: "Full Stack Development", icon: Code },
  { title: "IoT & Robotics", icon: Cpu },
  { title: "Embedded Systems", icon: Database },
];

export default function LabsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GAS Virtual Lab",
    "url": "https://gasautomation.ai/labs",
    "logo": "https://gasautomation.ai/logo.png",
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
      <PageHero3D shape="torusKnot" color="#64FFDA" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Build Real Technology with <br />
            <span className="text-neon-green">Virtual AI Labs</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Our internship programs are 100% virtual and designed to give you hands-on experience building enterprise-grade systems alongside our engineering team.
          </p>
          <div className="flex justify-center gap-4 text-sm font-medium text-gray-300">
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">100% Virtual</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">Live Projects</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">Corporate Certification</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.title} className="glass-panel p-6 rounded-2xl text-center hover:border-brand-cyan/50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-brand-cyan/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-white">{program.title}</h3>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">Ready to start your engineering journey?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://gas-virutallab.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-[#111111] text-neon-green border border-neon-green/30 hover:bg-neon-green/10 w-full sm:w-auto")}>
              Visit Virtual Lab <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe0q_g9lVSP3yYwcSws2NJukx80_xGePg56DuJzZ_8T2R-OMA/viewform?pli=1" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-brand-cyan text-black hover:bg-brand-cyan/90 w-full sm:w-auto")}>
              Apply for Internship <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
