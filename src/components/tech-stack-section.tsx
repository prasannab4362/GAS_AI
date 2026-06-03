"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechStackScene, TECHNOLOGIES_DATA } from "@/components/three/TechStackScene";
import { Brain, ArrowRight, Cpu, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  const [selectedNode, setSelectedNode] = useState<string>("Machine Learning");

  const activeNode = TECHNOLOGIES_DATA.find((node) => node.name === selectedNode) || TECHNOLOGIES_DATA[0];

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
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
            Interact with our 3D tech core to inspect the sub-systems powering our enterprise ecosystems.
          </motion.p>
        </div>

        {/* 3D Interactive Console (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto rounded-3xl border border-white/5 bg-black/60 backdrop-blur-xl p-8 shadow-2xl relative">
          
          {/* Connecting layout aesthetic */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-3xl pointer-events-none" />

          {/* Left Panel: Selected Node Details */}
          <div className="col-span-4 z-10 h-full flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel: 3D Scene */}
          <div className="col-span-8 z-10 h-[500px] rounded-2xl border border-white/5 bg-[#050505] overflow-hidden shadow-inner relative">
            <TechStackScene
              selectedNode={selectedNode}
              onSelectNode={(name) => setSelectedNode(name)}
            />
          </div>

        </div>

        {/* Mobile & Tablet Fallback */}
        <div className="lg:hidden space-y-6">
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

          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 bg-black/40"
            >
              <h4 className="text-xl font-heading font-bold text-white mb-2">{activeNode.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{activeNode.desc}</p>
              <Link href="/services" className="text-xs font-mono uppercase text-brand-cyan hover:text-neon-green inline-flex items-center gap-1.5">
                Explore Deployments <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function ActivityIcon({ color }: { color: string }) {
  return (
    <div className="w-3 h-3 rounded-full flex items-center justify-center relative">
      <div className="w-full h-full rounded-full animate-ping opacity-60 absolute" style={{ backgroundColor: color }} />
      <div className="w-1.5 h-1.5 rounded-full relative z-10" style={{ backgroundColor: color }} />
    </div>
  );
}
