"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  Briefcase, 
  Factory, 
  BrainCircuit, 
  Bot, 
  ShieldCheck, 
  Cpu, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { TiltCard } from "@/components/three/TiltCard";

const SERVICES = [
  {
    title: "Smart Home Automation",
    description: "Intelligent lighting, climate control, voice automation, and smart locks for modern living.",
    icon: Home,
    href: "/services/home-automation",
    color: "text-blue-400",
    glowColor: "rgba(96,165,250,0.15)"
  },
  {
    title: "Business Automation",
    description: "WhatsApp AI, CRM automation, smart workflows, and intelligent customer support systems.",
    icon: Briefcase,
    href: "/services/business-automation",
    color: "text-purple-400",
    glowColor: "rgba(192,132,252,0.15)"
  },
  {
    title: "Industrial Automation",
    description: "PLC systems, Industrial IoT, machine monitoring, and predictive maintenance with AI.",
    icon: Factory,
    href: "/services/industrial-automation",
    color: "text-orange-400",
    glowColor: "rgba(251,146,60,0.15)"
  },
  {
    title: "AI & Intelligent Systems",
    description: "LLMs, NLP, OCR, Computer Vision, and custom AI agents to streamline your operations.",
    icon: BrainCircuit,
    href: "/services/ai-automation",
    color: "text-neon-green",
    glowColor: "rgba(0,255,136,0.15)"
  },
  {
    title: "Robotics & ROS",
    description: "Autonomous systems, ROS development, and robotics automation for complex tasks.",
    icon: Bot,
    href: "/services/robotics",
    color: "text-red-400",
    glowColor: "rgba(248,113,113,0.15)"
  },
  {
    title: "Networking & Security",
    description: "Smart surveillance, access control, CCTV systems, and enterprise networking.",
    icon: ShieldCheck,
    href: "/services/security",
    color: "text-brand-cyan",
    glowColor: "rgba(100,255,218,0.15)"
  },
  {
    title: "Product Development",
    description: "Embedded systems, IoT devices, smart electronics, and custom AI hardware.",
    icon: Cpu,
    href: "/services/product-development",
    color: "text-yellow-400",
    glowColor: "rgba(250,204,21,0.15)"
  },
  {
    title: "Virtual AI Labs",
    description: "100% remote internships in AI, ML, Robotics, IoT, and Full Stack Development.",
    icon: GraduationCap,
    href: "/labs",
    color: "text-pink-400",
    glowColor: "rgba(244,114,182,0.15)"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface ServicesSectionProps {
  hideHeader?: boolean;
}

export function ServicesSection({ hideHeader = false }: ServicesSectionProps) {
  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm font-semibold tracking-widest text-neon-green uppercase mb-4"
            >
              Core Ecosystem
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Intelligent Automation Services
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg"
            >
              Explore our comprehensive suite of smart solutions designed to optimize efficiency, security, and productivity across every domain.
            </motion.p>
          </div>
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <TiltCard glowColor={service.glowColor} className="p-8 flex flex-col justify-between relative overflow-hidden">
                  <Link href={service.href} className="block h-full w-full group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 group-hover:bg-neon-green/10" />
                    
                    <Icon className={`w-12 h-12 mb-6 ${service.color} transition-transform group-hover:scale-110`} />
                    
                    <h4 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-neon-green transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-medium text-brand-cyan group-hover:text-neon-green">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
