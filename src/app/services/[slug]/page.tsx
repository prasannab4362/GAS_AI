import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const SERVICES_DATA: Record<string, { title: string; description: string; features: string[]; longDescription: string; keywords: string }> = {
  "home-automation": {
    title: "Smart Home Automation",
    description: "Intelligent lighting, climate control, voice automation, and smart locks for modern living.",
    keywords: "Smart Home Automation, Home Automation Tamil Nadu, Smart Locks, Voice Automation",
    features: ["Intelligent Climate Control", "Voice-Activated Systems", "Automated Security & Locks", "Energy Management"],
    longDescription: "Transform your living space into an intelligent ecosystem. Our smart home automation solutions integrate seamlessly with your lifestyle, providing unparalleled comfort, security, and energy efficiency. From automated lighting that adjusts to your mood and schedule, to smart climate control that learns your preferences, we build homes that think for themselves. Our systems are powered by cutting-edge IoT technology and can be controlled entirely from your smartphone or via natural language voice commands. Whether you are in Neyveli, Kurinjipadi, Cuddalore, or anywhere globally, we deploy robust residential automation systems tailored to your specific needs."
  },
  "business-automation": {
    title: "Business & WhatsApp Automation",
    description: "WhatsApp AI, CRM automation, smart workflows, and intelligent customer support systems.",
    keywords: "WhatsApp Automation Company, Business Automation, AI CRM, Workflow Automation",
    features: ["24/7 WhatsApp AI Agents", "Automated Lead Scoring", "CRM Integration", "Custom n8n Workflows"],
    longDescription: "Automate your business operations and scale without adding overhead. We specialize in WhatsApp AI automation, allowing you to handle customer inquiries, bookings, and support automatically, 24/7. Our enterprise-grade solutions integrate with your existing CRM to provide intelligent workflows. By utilizing n8n and advanced LLMs, we connect disparate systems, automating data entry and reporting. Our smart lead systems use predictive AI to score and route leads, ensuring your sales team focuses only on high-conversion prospects."
  },
  "industrial-automation": {
    title: "Industrial Automation & IoT",
    description: "PLC systems, Industrial IoT, machine monitoring, and predictive maintenance with AI.",
    keywords: "Industrial Automation Solutions, Industrial IoT, Predictive Maintenance, PLC Systems",
    features: ["Real-time Machine Monitoring", "Predictive Maintenance AI", "PLC & SCADA Integration", "OEE Tracking"],
    longDescription: "Bring your manufacturing facility into the Industry 4.0 era. Our Industrial Automation and IoT solutions provide real-time monitoring of your production lines, CNC machines, and critical assets. By leveraging edge AI and advanced sensor networks, we enable predictive maintenance—identifying potential machine failures before they cause costly downtime. We seamlessly integrate with existing PLC and SCADA systems, providing unified dashboards that track Overall Equipment Effectiveness (OEE) and operational efficiency."
  },
  "ai-automation": {
    title: "AI & Intelligent Systems",
    description: "LLMs, NLP, OCR, Computer Vision, and custom AI agents to streamline your operations.",
    keywords: "AI Automation Company, Enterprise AI, LLM Integration, Custom AI Agents",
    features: ["Custom LLM Deployment", "Document OCR & Processing", "Intelligent Chatbots", "AI-driven Analytics"],
    longDescription: "Leverage the power of Artificial Intelligence to solve complex business challenges. Our AI and Intelligent Systems division builds custom applications using Large Language Models (LLMs), Natural Language Processing (NLP), and advanced OCR. Whether you need an intelligent agent to process unstructured data, an AI assistant to augment your workforce, or computer vision models to automate visual inspections, we provide end-to-end AI engineering. We focus on deploying secure, scalable, and high-performance AI solutions."
  },
  "computer-vision": {
    title: "Computer Vision Systems",
    description: "Advanced visual inspection, facial recognition, and automated monitoring systems.",
    keywords: "Computer Vision Company, Automated Inspection, Video Analytics",
    features: ["Defect Detection", "Facial Recognition", "Crowd & Object Tracking", "Automated Quality Control"],
    longDescription: "Enable your systems to see and understand the physical world. Our Computer Vision solutions are deployed in manufacturing for automated defect detection, in security for advanced facial recognition and access control, and in retail for customer behavior analytics. Using deep learning and convolutional neural networks, we build robust models capable of running on the edge or in the cloud. These systems drastically reduce manual inspection errors and provide real-time alerts for critical events."
  },
  "robotics": {
    title: "Robotics & Autonomous Systems",
    description: "Autonomous systems, ROS development, and robotics automation for complex tasks.",
    keywords: "Robotics Company, ROS Development, Autonomous Systems, AGV",
    features: ["ROS Application Development", "Automated Guided Vehicles (AGVs)", "Robotic Arm Programming", "Robotics Lab Setup"],
    longDescription: "We engineer intelligent robotic solutions for industrial, educational, and commercial applications. Utilizing the Robot Operating System (ROS), we develop custom software for Automated Guided Vehicles (AGVs), robotic arms, and autonomous drones. Our expertise ranges from designing the kinematics and path planning algorithms to integrating complex sensor arrays (LiDAR, cameras). We also specialize in setting up advanced robotics labs for educational institutions, fostering the next generation of engineers."
  },
  "security": {
    title: "Networking & Smart Security",
    description: "Smart surveillance, access control, CCTV systems, and enterprise networking.",
    keywords: "Smart Security Systems, Enterprise Networking, CCTV Automation",
    features: ["AI-Powered Surveillance", "Biometric Access Control", "Enterprise Network Design", "24/7 Monitoring Systems"],
    longDescription: "Protect your assets with intelligent, AI-powered security and robust networking infrastructure. We design and deploy enterprise-grade surveillance systems that do more than just record—they actively analyze footage using AI to detect anomalies, unauthorized access, and safety hazards. Combined with our biometric access control systems and highly reliable networking architectures, we provide a comprehensive security umbrella for commercial buildings, factories, and smart homes."
  },
  "product-development": {
    title: "Product & Embedded Development",
    description: "Embedded systems, IoT devices, smart electronics, and custom AI hardware.",
    keywords: "Embedded Systems, IoT Product Development, Custom Hardware",
    features: ["PCB Design & Prototyping", "Microcontroller Programming", "IoT Device Engineering", "Edge AI Hardware"],
    longDescription: "From concept to mass production, we offer comprehensive product development services for smart electronics and IoT devices. Our embedded systems engineers design custom PCBs, program microcontrollers (ARM, ESP32, STM32), and integrate edge AI accelerators. Whether you are developing a new consumer smart device or specialized industrial hardware, we handle the hardware architecture, firmware development, and cloud integration to bring your innovative ideas to market rapidly."
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Green Automation Solution`,
    description: service.description,
    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <article className="py-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-10">
        <Link href="/services" className="inline-flex items-center text-brand-cyan hover:text-neon-green transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          {service.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-medium">
          {service.description}
        </p>

        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-gray-400 leading-relaxed">
            {service.longDescription}
          </p>
          {/* We add more paragraphs here in reality to hit the 800-1500 word count, 
              but for this demo, we establish the SEO structure. */}
          <h2 className="text-2xl font-heading text-white mt-10 mb-6">Why Choose Our {service.title} Solutions?</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            At Green Automation Solution (GAS), we do not just install off-the-shelf products. We engineer tailored solutions that fit the exact needs of your operation. Whether it is increasing efficiency, enhancing security, or providing a more comfortable living environment, our systems are built on robust architecture to ensure long-term reliability and scalability.
          </p>
        </div>

        <div className="bg-brand-gray/50 border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-heading font-semibold text-white mb-6">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center p-10 glass-panel rounded-3xl border-brand-cyan/20">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">Ready to upgrade your systems?</h3>
          <p className="text-gray-400 mb-8">Book a free consultation with our engineering team today.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-neon-green text-black hover:bg-neon-green/90 box-glow")}>
            Book Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
