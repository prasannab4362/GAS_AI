"use client";

import { useState } from "react";
import { TECHNOLOGIES_DATA } from "@/components/three/TechStackScene";
import { Brain, ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/three/TiltCard";
import { motion } from "framer-motion";

export function TechStackSection() {
  const [selectedNode, setSelectedNode] = useState<string>("Machine Learning");

  const activeNode = TECHNOLOGIES_DATA.find((node) => node.name === selectedNode) || TECHNOLOGIES_DATA[0];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-cyan/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-brand-cyan uppercase mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Powered by Advanced Intelligence
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Inspect the sub-systems powering our AI, IoT, and Robotics ecosystems.
          </motion.p>
        </div>

        {/* Static Interactive Console (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="hidden lg:grid grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto rounded-3xl border border-white/5 bg-black/60 backdrop-blur-xl p-8 shadow-2xl relative"
        >
          
          {/* Left Panel: Selected Node Details */}
          <div className="col-span-4 z-10 flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md min-h-[480px]">
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-brand-cyan tracking-wider">
                  <Terminal className="w-3.5 h-3.5" /> Systems Core
                </div>
                
                <h4 
                  className="text-2xl font-heading font-black tracking-wider text-white italic uppercase"
                  style={{ textShadow: `0 0 10px ${activeNode.color}30` }}
                >
                  {activeNode.name}
                </h4>
                
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                
                <p className="text-gray-400 text-sm leading-relaxed font-sans pt-2">
                  {activeNode.desc}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <ActivityIcon color={activeNode.color} />
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Telemetry Status: Active</span>
                </div>
                
                <Link 
                  href="/services" 
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "w-full bg-white/5 text-white hover:bg-white/10 border border-white/10 justify-between group"
                  )}
                >
                  View Deployments
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel: Static Grid of Nodes (No animations, different colors when mouse moves) */}
          <div className="col-span-8 z-10 grid grid-cols-2 gap-4">
            {TECHNOLOGIES_DATA.map((tech) => {
              const isActive = selectedNode === tech.name;
              const glowColor = tech.color === "#00ff88"
                ? "rgba(0, 255, 136, 0.18)"
                : tech.color === "#64ffda"
                ? "rgba(100, 255, 218, 0.18)"
                : "rgba(255, 255, 255, 0.15)";
                
              const activeBorderClass = isActive 
                ? tech.color === "#00ff88"
                  ? "border-neon-green bg-neon-green/[0.03]"
                  : tech.color === "#64ffda"
                  ? "border-brand-cyan bg-brand-cyan/[0.03]"
                  : "border-white bg-white/[0.03]"
                : "";

              return (
                <div key={tech.name} className="h-[110px]" onClick={() => setSelectedNode(tech.name)}>
                  <TiltCard glowColor={glowColor} className={cn("p-5 cursor-pointer flex items-center justify-between", activeBorderClass)}>
                    <div className="flex items-center gap-4 w-full h-full">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 flex-shrink-0">
                        <Brain className="w-5 h-5" style={{ color: tech.color }} />
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-mono tracking-wider font-bold text-white block">{tech.name}</span>
                        <span className="text-[10px] text-gray-500 font-mono block">Status: Operational</span>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>

        </motion.div>

        {/* Mobile & Tablet Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:hidden space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {TECHNOLOGIES_DATA.map((tech) => (
              <button
                key={tech.name}
                onClick={() => setSelectedNode(tech.name)}
                className={cn(
                  "glass-panel p-4 rounded-xl flex flex-col items-center text-center gap-3 transition-all",
                  selectedNode === tech.name ? "border-neon-green bg-neon-green/5 shadow-[0_0_15px_rgba(0,255,136,0.1)]" : "opacity-80"
                )}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5">
                  <Brain className="w-5 h-5" style={{ color: tech.color }} />
                </div>
                <span className="text-xs font-mono tracking-wider font-semibold text-white">{tech.name}</span>
              </button>
            ))}
          </div>
 
          <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-black/40">
            <h4 className="text-xl font-heading font-bold text-white mb-2">{activeNode.name}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{activeNode.desc}</p>
            <Link href="/services" className="text-xs font-mono uppercase text-brand-cyan hover:text-neon-green inline-flex items-center gap-1.5">
              Explore Deployments <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ActivityIcon({ color }: { color: string }) {
  return (
    <div className="w-3 h-3 rounded-full flex items-center justify-center relative">
      <div className="w-1.5 h-1.5 rounded-full relative z-10" style={{ backgroundColor: color }} />
    </div>
  );
}
