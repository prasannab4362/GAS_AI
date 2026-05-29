import { Metadata } from "next";
import { Cpu, Wifi, Video, Zap, Layers, Server, Code, ShieldCheck } from "lucide-react";
import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Development Features | GAS",
  description: "Enterprise-grade product development, custom AI hardware, robotics systems, and IoT modules by Green Automation Solution.",
};

const FEATURES = [
  {
    name: "Custom PCB & Embedded Systems",
    category: "Hardware",
    description: "Design and prototyping of custom printed circuit boards (PCBs) integrated with microcontrollers (ARM, ESP32, STM32) for dedicated industrial use cases.",
    icon: Cpu,
  },
  {
    name: "Edge AI Vision Modules",
    category: "AI & Vision",
    description: "High-performance camera modules with onboard neural processing units (NPUs) optimized for real-time defect detection and facial recognition at the edge.",
    icon: Video,
  },
  {
    name: "IoT Hub & Gateway Integration",
    category: "Networking",
    description: "Centralized hubs supporting Zigbee, Z-Wave, Matter, and LoRaWAN protocols for seamless communication across remote sensor networks.",
    icon: Wifi,
  },
  {
    name: "High-Torque Robotics Actuators",
    category: "Robotics",
    description: "Precision servo actuators and kinematics control designed for ROS-compatible robotic arms, AGVs, and industrial autonomous systems.",
    icon: Zap,
  },
  {
    name: "Scalable Cloud Architecture",
    category: "Software",
    description: "Secure, scalable backend infrastructures to ingest, process, and visualize millions of data points from connected hardware in real-time.",
    icon: Server,
  },
  {
    name: "Firmware & OS Development",
    category: "Embedded Software",
    description: "Custom firmware development, RTOS implementation, and OTA (Over-The-Air) update systems for reliable long-term device operation.",
    icon: Code,
  },
  {
    name: "Industrial Automation Controllers",
    category: "Controllers",
    description: "Ruggedized edge controllers with built-in Ethernet, RS485, and CAN bus for heavy industrial automation and PLC integration.",
    icon: Layers,
  },
  {
    name: "Hardware Security & Encryption",
    category: "Security",
    description: "Cryptographic coprocessors and secure boot implementations to ensure hardware devices cannot be tampered with or compromised.",
    icon: ShieldCheck,
  }
];

export default function ProductsPage() {
  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Product Development <span className="text-brand-cyan">Features</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From concept to mass production, we engineer comprehensive product development services for smart electronics, IoT devices, and custom AI hardware. We build robust systems tailored to your enterprise requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.name} className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-brand-cyan/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="text-xs font-semibold text-neon-green uppercase tracking-wider mb-2">
                  {feature.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-gray/50 border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-neon-green/5 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Have a custom hardware idea?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Our embedded engineering team will design the architecture, develop the firmware, and handle cloud integration to bring your innovative ideas to market rapidly.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-neon-green text-black hover:bg-neon-green/90 box-glow")}>
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
