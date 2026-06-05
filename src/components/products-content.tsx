"use client";
 
import { motion, Variants } from "framer-motion";
import { Cpu, Wifi, Video, GraduationCap, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TiltCard } from "@/components/three/TiltCard";

const PRODUCTS = [
  {
    name: "GAS Smart IoT Hub",
    category: "Smart Automation & IoT",
    description: "Central multiprotocol gateway (supporting Zigbee, Matter, Z-Wave, and LoRaWAN) connecting distributed sensor meshes into unified cloud APIs for automated control panels.",
    icon: Wifi,
    glow: "rgba(100,255,218,0.18)", // Cyan glow
    badgeColor: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
    buttonText: "Request IoT Specs"
  },
  {
    name: "GAS Humanoid Actuator",
    category: "Robotics & Kinematics",
    description: "High-torque, sub-millisecond precision mechanical actuator core designed for ROS-compatible humanoid joints, articulated robotic arms, and autonomous rovers.",
    icon: Cpu,
    glow: "rgba(0,255,136,0.18)", // Neon Green glow
    badgeColor: "text-neon-green bg-neon-green/10 border-neon-green/20",
    buttonText: "Request Robotics Datasheet"
  },
  {
    name: "GAS Edge NPU Vision Module",
    category: "Edge AI & Vision",
    description: "Industrial camera unit with onboard 8-TOPS neural processing accelerators for low-latency visual inspections, automated defect verification, and edge security.",
    icon: Video,
    glow: "rgba(167,139,250,0.18)", // Violet glow
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    buttonText: "Request Vision Specs"
  },
  {
    name: "GAS Virtual Labs Sandbox",
    category: "Research & Development",
    description: "Our proprietary 3D interactive cloud workspace allowing developers and interns to simulate code deployments on virtual hardware rigs in real-time.",
    icon: GraduationCap,
    glow: "rgba(251,146,60,0.18)", // Orange glow
    badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    buttonText: "Launch Virtual Sandbox"
  }
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
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function ProductsContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
      <div className="max-w-3xl mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
        >
          Core <span className="text-neon-green">Products</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-xl text-gray-400 leading-relaxed"
        >
          Green Automation Solution (GAS AI) designs, prototypes, and manufactures enterprise-grade hardware and software. Explore our core systems built for scaling automation, robotics networks, and virtual engineering labs.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
      >
        {PRODUCTS.map((product) => {
          const Icon = product.icon;
          return (
            <motion.div key={product.name} variants={itemVariants} className="h-full">
              <TiltCard glowColor={product.glow} className="p-8 flex flex-col justify-between h-full bg-brand-gray/20 group">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Product Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Product Category Tag */}
                    <span className={cn("inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-4", product.badgeColor)}>
                      {product.category}
                    </span>
                    
                    {/* Product Name */}
                    <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-tight group-hover:text-neon-green transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Product Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <Link href="/contact" className="inline-flex items-center text-xs font-semibold text-brand-cyan hover:text-neon-green transition-colors mt-auto group/btn">
                    {product.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Custom Hardware Block */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-neon-green/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Design Custom Hardware for Your Scale</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Have a specific IoT sensor array or robotic control board requirement? Our R&D engineering group develops custom PCB schematics, RTOS firmware solutions, and secure cloud API integration.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-neon-green text-black hover:bg-neon-green/90 font-semibold box-glow")}>
            Discuss Custom Hardware R&D
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
