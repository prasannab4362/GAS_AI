"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/three/TiltCard";

const SOLUTIONS = [
  {
    title: "Smart Office Ecosystem",
    category: "Commercial Automation",
    description: "Complete overhaul of a 50,000 sq ft office with automated climate control, occupancy-based lighting, and AI attendance tracking.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    href: "/services",
  },
  {
    title: "Industrial AI Dashboard",
    category: "Industrial IoT",
    description: "Real-time predictive maintenance dashboard monitoring 50+ CNC machines, reducing downtime by 35%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    href: "/services",
  },
  {
    title: "Autonomous Robotics Lab",
    category: "Robotics & Education",
    description: "Setup of a ROS-powered robotics lab for an educational institution, including robotic arms and AGVs.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    href: "/labs",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm font-semibold tracking-widest text-neon-green uppercase mb-4"
            >
              Proven Results
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight"
            >
              Featured Solutions
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/services" className={cn(buttonVariants({ variant: "outline" }), "border-white/20 text-white hover:bg-white/5")}>
                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <TiltCard glowColor="rgba(0,255,136,0.1)">
                <div className="group relative rounded-2xl overflow-hidden glass-panel h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                    <div className="absolute inset-0 bg-brand-black" /> 
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative z-20 bg-brand-gray/90 backdrop-blur-sm border-t border-white/5">
                    <div className="text-xs font-semibold text-neon-green uppercase tracking-wider mb-2">
                       {solution.category}
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-3">
                      {solution.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {solution.description}
                    </p>
                    
                    <Link href={solution.href} className="inline-flex items-center text-sm font-medium text-brand-cyan hover:text-neon-green transition-colors">
                      Explore Solution <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
