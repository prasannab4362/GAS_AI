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

const SERVICES = [
  {
    title: "Smart Home Automation",
    description: "Intelligent lighting, climate control, voice automation, and smart locks for modern living.",
    icon: Home,
    href: "/services/home-automation",
    color: "text-blue-400"
  },
  {
    title: "Business Automation",
    description: "WhatsApp AI, CRM automation, smart workflows, and intelligent customer support systems.",
    icon: Briefcase,
    href: "/services/business-automation",
    color: "text-purple-400"
  },
  {
    title: "Industrial Automation",
    description: "PLC systems, Industrial IoT, machine monitoring, and predictive maintenance with AI.",
    icon: Factory,
    href: "/services/industrial-automation",
    color: "text-orange-400"
  },
  {
    title: "AI & Intelligent Systems",
    description: "LLMs, NLP, OCR, Computer Vision, and custom AI agents to streamline your operations.",
    icon: BrainCircuit,
    href: "/services/ai-automation",
    color: "text-neon-green"
  },
  {
    title: "Robotics & ROS",
    description: "Autonomous systems, ROS development, and robotics automation for complex tasks.",
    icon: Bot,
    href: "/services/robotics",
    color: "text-red-400"
  },
  {
    title: "Networking & Security",
    description: "Smart surveillance, access control, CCTV systems, and enterprise networking.",
    icon: ShieldCheck,
    href: "/services/security",
    color: "text-brand-cyan"
  },
  {
    title: "Product Development",
    description: "Embedded systems, IoT devices, smart electronics, and custom AI hardware.",
    icon: Cpu,
    href: "/services/product-development",
    color: "text-yellow-400"
  },
  {
    title: "Virtual AI Labs",
    description: "100% remote internships in AI, ML, Robotics, IoT, and Full Stack Development.",
    icon: GraduationCap,
    href: "/labs",
    color: "text-pink-400"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href} className="block h-full group">
                  <div className="h-full p-8 rounded-2xl glass-panel relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:box-glow hover:border-neon-green/40">
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
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
