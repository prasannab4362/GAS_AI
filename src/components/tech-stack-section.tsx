"use client";

import { motion } from "framer-motion";
import { Network, Database, Cpu, Brain, Zap, Workflow, Search, Fingerprint } from "lucide-react";

const TECHNOLOGIES = [
  { name: "Machine Learning", icon: Brain, x: "20%", y: "20%", delay: 0 },
  { name: "Deep Learning", icon: Network, x: "80%", y: "15%", delay: 0.2 },
  { name: "LLM & VLM", icon: Database, x: "15%", y: "60%", delay: 0.4 },
  { name: "OCR & NLP", icon: Search, x: "75%", y: "70%", delay: 0.6 },
  { name: "Computer Vision", icon: Fingerprint, x: "50%", y: "85%", delay: 0.8 },
  { name: "n8n Automation", icon: Workflow, x: "50%", y: "10%", delay: 1.0 },
  { name: "ROS & Edge AI", icon: Cpu, x: "85%", y: "45%", delay: 1.2 },
  { name: "Industrial IoT", icon: Zap, x: "10%", y: "40%", delay: 1.4 },
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
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
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Powered by Advanced Intelligence
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg"
          >
            Our ecosystems integrate the latest in Artificial Intelligence, Neural Networks, and Automation frameworks to deliver unparalleled performance.
          </motion.p>
        </div>

        <div className="relative h-[600px] w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden hidden md:block">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-neon-green/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div className="w-32 h-32 rounded-full border border-brand-cyan/40 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
              <div className="w-24 h-24 rounded-full bg-neon-green/20 blur-md absolute" />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
             <span className="font-heading font-bold text-2xl text-white text-glow">GAS AI</span>
          </div>

          {/* Floating Nodes */}
          {TECHNOLOGIES.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: tech.delay, duration: 0.5, type: "spring" }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: tech.x, top: tech.y }}
              >
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border-neon-green/30 group-hover:border-neon-green group-hover:bg-neon-green/10 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                    <Icon className="w-8 h-8 text-white group-hover:text-neon-green transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-white/10">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connecting SVG Lines (Static representation for visual effect) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            {TECHNOLOGIES.map((tech, i) => (
              <line 
                key={`line-${i}`}
                x1="50%" 
                y1="50%" 
                x2={tech.x} 
                y2={tech.y} 
                stroke="url(#grad1)" 
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00FF88', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#64FFDA', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Mobile View (Grid instead of floating nodes) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-4 rounded-xl flex flex-col items-center text-center gap-3"
              >
                <Icon className="w-8 h-8 text-neon-green" />
                <span className="text-sm font-medium text-white">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
